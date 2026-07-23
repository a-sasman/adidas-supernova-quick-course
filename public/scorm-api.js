(function (global) {
  "use strict";

  var api = null;
  var initialized = false;
  var finished = false;

  function findApi(startWindow, includeOpener) {
    var current = startWindow;
    var attempts = 0;

    while (current && attempts < 50) {
      try {
        if (current.API) return current.API;
        if (!current.parent || current.parent === current) break;
        current = current.parent;
      } catch (_error) {
        break;
      }
      attempts += 1;
    }

    try {
      if (includeOpener !== false && global.opener && global.opener !== global) {
        return findApi(global.opener, false);
      }
    } catch (_error) {
      return null;
    }

    return null;
  }

  function call(method) {
    if (!api || typeof api[method] !== "function") return "false";
    try {
      return api[method].apply(api, Array.prototype.slice.call(arguments, 1));
    } catch (_error) {
      return "false";
    }
  }

  function initialize() {
    if (initialized) return true;
    api = findApi(global);
    if (!api || String(call("LMSInitialize", "")).toLowerCase() !== "true") return false;

    initialized = true;
    var status = String(call("LMSGetValue", "cmi.core.lesson_status") || "").toLowerCase();
    if (!status || status === "not attempted" || status === "unknown") {
      call("LMSSetValue", "cmi.core.lesson_status", "incomplete");
      call("LMSCommit", "");
    }
    return true;
  }

  function setValue(element, value) {
    if (!initialize()) return false;
    try {
      return String(api.LMSSetValue(element, value)).toLowerCase() === "true";
    } catch (_error) {
      return false;
    }
  }

  function commit() {
    return initialize() && String(call("LMSCommit", "")).toLowerCase() === "true";
  }

  function getSuspendData() {
    if (!initialize()) return "";
    return String(call("LMSGetValue", "cmi.suspend_data") || "");
  }

  function setSuspendData(value) {
    if (!setValue("cmi.suspend_data", String(value).slice(0, 4096))) return false;
    return commit();
  }

  function setCompleted() {
    if (!setValue("cmi.core.lesson_status", "completed")) return false;
    return commit();
  }

  function finish() {
    if (!initialized || finished) return true;
    call("LMSCommit", "");
    var result = String(call("LMSFinish", "")).toLowerCase() === "true";
    finished = true;
    return result;
  }

  global.VersusSCORM = {
    initialize: initialize,
    getSuspendData: getSuspendData,
    setSuspendData: setSuspendData,
    setCompleted: setCompleted,
    commit: commit,
    finish: finish,
  };

  initialize();
  global.addEventListener("pagehide", finish);
  global.addEventListener("beforeunload", finish);
})(window);
