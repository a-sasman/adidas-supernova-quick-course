export type NavSection = {
  id: string;
  label: string;
};

export type SectionCard = {
  title: string;
  body: string[];
};

export type VideoResource = {
  title: string;
  embedUrl: string;
};

export type ProcessCard = {
  title: string;
  body: string;
};

export type ScenarioQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
  feedback?: string;
  optionFeedback?: string[];
};

export const courseData = {
  meta: {
    title: "PayJustNow Quick Course",
    brand: "PayJustNow",
    logoSrc: "/images/payjustnow/payjustnow-logo.png",
    logoAlt: "PayJustNow logo",
  },
  navSections: [
    { id: "welcome", label: "Welcome" },
    { id: "payjustnow-basics", label: "PayJustNow Basics" },
    { id: "payment-plans", label: "Payment Plans" },
    { id: "how-it-works", label: "How It Works" },
    { id: "key-considerations", label: "Key Considerations" },
    { id: "wrap-up", label: "Wrap Up" },
  ] as NavSection[],
  welcome: {
    title: "Welcome",
    subtitle: "By the end of this course, you will be able to:",
    heroImageSrc: "/images/payjustnow/payjustnow-hero.png",
    heroImageAlt: "PayJustNow app shown on a phone between pink abstract forms.",
    points: [
      "Identify what PayJustNow is and when it is the right option for a customer.",
      "Work out the correct instalment amounts and dates, and recommend the right plan, either the three month plan or PayStretch, for a given purchase.",
      "Apply the correct sequence of steps to complete a PayJustNow purchase.",
      "Respond correctly to customer questions and concerns.",
    ],
  },
  basics: {
    id: "payjustnow-basics",
    eyebrow: "",
    title: "PayJustNow Basics",
    intro:
      "PayJustNow is a South African Buy Now, Pay Later payment solution. It allows a customer to take their purchase home on the same day and split the cost into three equal, interest free instalments, as long as each instalment is paid on time.",
    tip:
      "TIP: Always mention that the plan is interest free only if instalments are paid on time.",
    question: {
      question:
        "A customer wants to buy a jacket worth R1200 today using PayJustNow. How much would they need to pay today to take the jacket home?",
      options: [
        "R400 (a third of the purchase price)",
        "R1200 (the full amount)",
        "Nothing today, only once the item is delivered",
      ],
      correctIndex: 0,
      optionFeedback: [
        "That's correct. PayJustNow splits the purchase into three equal payments, so the customer pays a third today and takes the jacket home immediately.",
        "Not quite. With PayJustNow, the customer doesn't need to pay the full amount upfront, just the first of three instalments.",
        "Not quite. PayJustNow requires the first instalment to be paid at the time of purchase, not at a later date",
      ],
    } as ScenarioQuestion,
  },
  paymentPlans: {
    id: "payment-plans",
    eyebrow: "",
    title: "Payment Structure & PayStretch",
    intro:
      "Now that you know what PayJustNow is, the next question a customer will ask is almost always about the money. Let's break that down.",
    question: {
      question:
        "A customer buys a jacket on the 15th of January using the three month plan. When is the final instalment due?",
      options: [
        "15th of February",
        "13th of January",
        "15th of March",
      ],
      correctIndex: 2,
      optionFeedback: [
        "Not quite. The final instalment is due two months after the purchase date, on the same day of the month.",
        "Not quite. The final instalment would not be due in January. It is due two months after the purchase date.",
        "Correct. The final instalment is due on the same day of the month two months later, so it would be due on the 15th of March.",
      ],
    } as ScenarioQuestion,
    cards: [
      {
        title: "The three month plan",
        body: [
          "The three month plan splits any purchase into three equal instalments.",
          "For simplicity, and to match how the PayJustNow app itself displays due dates to a customer. This way treats each instalment as due on the same date, one month and two months after the date of purchase.",
        ],
      },
      {
        title: "PayStretch",
        body: [
          "For bigger purchases, PayStretch spreads the cost over twelve months instead, with a small, transparent interest rate shown clearly before the customer confirms. There are no hidden fees on either plan.",
        ],
      },
    ] as SectionCard[],
    exampleTitle: "Let's take a look at an example",
    exampleBody: [
      "A customer buys an item on the first of March. Using the calculation above, the three instalments fall on the first of March, the first of April, and the first of May.",
      "Notice that the day of the month stays the same each time. Only the month changes. This is the pattern to apply whenever a customer asks when their payments are due.",
    ],
    tip:
      "Mention PayStretch whenever a customer is buying a big basket item, such as furniture or electronics, and always point out the interest rate before the customer confirms. This will help build the trust of the customer.",
    video: {
      title: "Watch the video to learn more",
      embedUrl: "https://www.youtube.com/embed/8ka1HemFuaQ?start=38",
    } as VideoResource,
  },
  howItWorks: {
    id: "how-it-works",
    eyebrow: "",
    transition:
      "You can now explain what PayJustNow is. Next: how does a customer actually complete the purchase, step by step?",
    title: "How It Works",
    requirement:
      "Firstly, the customer is required to sign up using their South African ID, mobile number, and a valid Visa or MasterCard debit/credit card.",
    videoIntro: "Watch the video to learn more.",
    processCards: [
      {
        title: "Online",
        body:
          "Online: the customer finds a store online, adds items to their cart and chooses PayJustNow at checkout, then confirms the transaction in the app and pays the first instalment.",
      },
      {
        title: "In store",
        body:
          "In store: the customer confirms PayJustNow is available and shops as usual, lets you know they will be using PayJustNow, scans the transaction QR code in the app, then confirms and pays the first instalment.",
      },
    ] as ProcessCard[],
    tip:
      "If a customer seems unsure which option applies to them, ask whether they are shopping online or in store first. The steps are similar, but the starting point is different.",
    video: {
      title: "Watch the video to learn more.",
      embedUrl: "https://www.youtube.com/embed/fHDb1xdEW3g?start=92",
    } as VideoResource,
  },
  keyConsiderations: {
    id: "key-considerations",
    eyebrow: "",
    title: "Key Considerations",
    statements: [
      "A customer needs enough funds on their card to cover the first instalment at the time of purchase.",
      "Late payment fees may apply if a scheduled instalment is missed.",
      "A quick soft credit check is performed to approve the purchase. This does not affect the customer's credit score, and approval is often almost instant.",
    ],
    tip:
      "If a customer worries about their credit score, reassure them clearly that the check is a soft check only. Being specific here, rather than vague, will give the customer reassurance.",
    question: {
      question:
        "A customer is worried this will affect my credit score. Which response is both accurate and reassuring?",
      options: [
        "“It might affect it a little, but it is usually fine.”",
        "“Do not worry, there is no check done at all.”",
        "“There is a quick soft check, which will not affect your credit score.”",
      ],
      correctIndex: 2,
      optionFeedback: [
        "Not quite. This is vague and would likely make a worried customer more uncertain, not less.",
        "Not quite. This overclaims. A soft check is performed, it just does not affect the credit score.",
        "Correct. This is accurate and specific, which is what makes it genuinely reassuring.",
      ],
    } as ScenarioQuestion,
  },
  wrapUp: {
    id: "wrap-up",
    eyebrow: "",
    title: "Well Done",
    intro: "Well done on completing this course!",
    body: [
      "Every question in this course reflects something a customer might ask on the shop floor on any given day. Knowing the answers well enough to respond without hesitating is exactly what builds a customer's confidence in the purchase!",
    ],
    imageSrc: "/images/payjustnow/payjustnow-wrap-up.png",
    imageAlt: "Wrap-up checklist surrounded by pink bubbles",
  },
  footer: {
    buttonLabel: "Return to People Connect",
    // TODO: Replace with the final People Connect return URL.
    peopleConnectUrl: "#",
  },
};
