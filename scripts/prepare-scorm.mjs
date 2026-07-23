import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const dist = path.join(root, "dist");

const xmlEscape = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

async function listFiles(directory, prefix = "") {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const relative = path.posix.join(prefix, entry.name);
    if (entry.isDirectory()) files.push(...await listFiles(path.join(directory, entry.name), relative));
    else files.push(relative);
  }
  return files.sort();
}

async function makePathsRelative() {
  const indexPath = path.join(dist, "index.html");
  const html = await readFile(indexPath, "utf8");
  await writeFile(
    indexPath,
    html.replace(/\b(src|href|poster)="\/(?!\/)/g, '$1="./'),
    "utf8",
  );

  const files = await listFiles(dist);
  for (const file of files.filter((name) => name.endsWith(".css"))) {
    const cssPath = path.join(dist, ...file.split("/"));
    const css = await readFile(cssPath, "utf8");
    const cssDirectory = path.posix.dirname(file);
    const relativeCss = css.replace(/url\((['"]?)\/([^)'"\s]+)\1\)/g, (_match, quote, asset) => {
      const relativeAsset = path.posix.relative(cssDirectory, asset);
      return `url(${quote}${relativeAsset}${quote})`;
    });
    await writeFile(cssPath, relativeCss, "utf8");
  }
}

function manifestFor(files) {
  const fileEntries = files
    .filter((file) => file !== "imsmanifest.xml")
    .map((file) => `      <file href="${xmlEscape(file)}" />`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<manifest identifier="VERSUS_SOCKS_QUICK_COURSE_SCORM_12"
  version="1.0"
  xmlns="http://www.imsproject.org/xsd/imscp_rootv1p1p2"
  xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_rootv1p2"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.imsproject.org/xsd/imscp_rootv1p1p2 imscp_rootv1p1p2.xsd http://www.adlnet.org/xsd/adlcp_rootv1p2 adlcp_rootv1p2.xsd">
  <metadata>
    <schema>ADL SCORM</schema>
    <schemaversion>1.2</schemaversion>
  </metadata>
  <organizations default="VERSUS_ORG">
    <organization identifier="VERSUS_ORG">
      <title>Versus Socks Quick Course</title>
      <item identifier="VERSUS_ITEM" identifierref="VERSUS_RESOURCE">
        <title>Versus Socks Quick Course</title>
      </item>
    </organization>
  </organizations>
  <resources>
    <resource identifier="VERSUS_RESOURCE" type="webcontent" adlcp:scormtype="sco" href="index.html">
${fileEntries}
    </resource>
  </resources>
</manifest>
`;
}

function referencedPaths(content, extension) {
  const references = [];
  const pattern = extension === ".css"
    ? /url\((['"]?)([^)'"\s]+)\1\)/g
    : /\b(?:src|href|poster)="([^"]+)"/g;
  for (const match of content.matchAll(pattern)) references.push(match[2] ?? match[1]);
  return references;
}

async function validateReferences(files) {
  const errors = [];
  for (const file of files.filter((name) => /\.(?:html|css)$/.test(name))) {
    const content = await readFile(path.join(dist, ...file.split("/")), "utf8");
    for (const reference of referencedPaths(content, path.extname(file))) {
      if (!reference || reference.startsWith("#") || /^(?:data:|mailto:|tel:)/i.test(reference)) continue;
      if (/^(?:https?:)?\/\//i.test(reference) || /(?:localhost|netlify)/i.test(reference)) {
        errors.push(`${file}: external reference ${reference}`);
        continue;
      }
      if (reference.startsWith("/")) {
        errors.push(`${file}: root-relative reference ${reference}`);
        continue;
      }
      const cleanReference = reference.split(/[?#]/, 1)[0];
      const target = path.resolve(dist, path.dirname(file), cleanReference);
      if (!target.startsWith(dist + path.sep) && target !== dist) {
        errors.push(`${file}: reference escapes package ${reference}`);
        continue;
      }
      try {
        if (!(await stat(target)).isFile()) errors.push(`${file}: missing file ${reference}`);
      } catch {
        errors.push(`${file}: missing file ${reference}`);
      }
    }
  }
  if (errors.length) throw new Error(errors.join("\n"));
}

await makePathsRelative();
let files = await listFiles(dist);
await writeFile(path.join(dist, "imsmanifest.xml"), manifestFor(files), "utf8");
files = await listFiles(dist);
await validateReferences(files);

const manifest = await readFile(path.join(dist, "imsmanifest.xml"), "utf8");
const wrapper = await readFile(path.join(dist, "scorm-api.js"), "utf8");
if (!manifest.includes('href="index.html"')) throw new Error("Manifest launch file is not index.html");
if (/masteryscore|adlcp:masteryscore|\bpassed\b|\bfailed\b/i.test(manifest)) throw new Error("Manifest contains score or pass/fail requirements");
for (const required of ["LMSInitialize", "cmi.core.lesson_status", "incomplete", "completed", "LMSCommit", "LMSFinish"]) {
  if (!wrapper.includes(required)) throw new Error(`SCORM wrapper is missing ${required}`);
}

const listeners = {};
const standaloneWindow = {
  opener: null,
  addEventListener(type, listener) { listeners[type] = listener; },
};
standaloneWindow.parent = standaloneWindow;
vm.runInNewContext(wrapper, { window: standaloneWindow });
standaloneWindow.VersusSCORM.setSuspendData('{"current":1}');
standaloneWindow.VersusSCORM.setCompleted();
listeners.pagehide();

const lmsCalls = [];
const lmsValues = { "cmi.core.lesson_status": "not attempted" };
const lmsApi = {
  LMSInitialize(value) { lmsCalls.push(["LMSInitialize", value]); return "true"; },
  LMSGetValue(element) { lmsCalls.push(["LMSGetValue", element]); return lmsValues[element] ?? ""; },
  LMSSetValue(element, value) { lmsCalls.push(["LMSSetValue", element, value]); lmsValues[element] = value; return "true"; },
  LMSCommit(value) { lmsCalls.push(["LMSCommit", value]); return "true"; },
  LMSFinish(value) { lmsCalls.push(["LMSFinish", value]); return "true"; },
};
const lmsListeners = {};
const lmsWindow = {
  API: lmsApi,
  opener: null,
  addEventListener(type, listener) { lmsListeners[type] = listener; },
};
lmsWindow.parent = lmsWindow;
vm.runInNewContext(wrapper, { window: lmsWindow });
lmsWindow.VersusSCORM.setSuspendData('{"current":3,"completed":true}');
lmsWindow.VersusSCORM.setCompleted();
lmsListeners.pagehide();

const statuses = lmsCalls
  .filter(([method, element]) => method === "LMSSetValue" && element === "cmi.core.lesson_status")
  .map(([, , value]) => value);
if (!statuses.includes("incomplete") || !statuses.includes("completed")) throw new Error("SCORM status lifecycle validation failed");
if (!lmsCalls.some(([method]) => method === "LMSCommit")) throw new Error("SCORM commit validation failed");
if (!lmsCalls.some(([method]) => method === "LMSFinish")) throw new Error("SCORM finish validation failed");
if (lmsCalls.some((call) => /score|mastery|passed|failed/i.test(call.join(" ")))) throw new Error("SCORM wrapper emitted score or pass/fail data");

console.log(JSON.stringify({ files: files.length, launch: "index.html", manifest: "imsmanifest.xml" }, null, 2));
