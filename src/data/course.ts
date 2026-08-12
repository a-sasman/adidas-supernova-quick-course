export type ProductCard = {
  customerNeed: string;
  option: string;
  cue: string;
  image: string;
  alt: string;
};

export type TechnologyItem = {
  feature: string;
  benefit: string;
  phrase: string;
  hotspot: number;
};

export type ScenarioBranch = {
  ask: string;
  match: string;
  recommend: string;
  image: string;
  alt: string;
};

export type AssessmentQuestion = {
  scenario: string;
  question: string;
  options: string[];
  correctIndex: number;
  feedback: string;
};

export const courseData = {
  meta: {
    title: "Adidas Adizero Course",
    description:
      "Learn how to identify the right Customers, recommend the best Adidas Adizero shoe for their running goal, and explain key technologies simply.",
  },
  nav: [
    { id: "overview", label: "Overview" },
    { id: "customer-moment", label: "Customer Moment" },
    { id: "product-basics", label: "Product Basics" },
    { id: "product-range", label: "Product Range" },
    { id: "how-to-sell", label: "How to Sell" },
    { id: "activity", label: "Activity" },
  ],
  welcome: {
    title: "Adidas Adizero Course",
    text:
      "Every runner’s goal is different. Some Customers want a lighter, faster feel for training or race day. The Adidas Adizero range is built for these performance-focused runners. In this course, you’ll learn how to identify the right Customers, recommend the best shoe for their running goal, explain key technologies simply, and turn Customer conversations into meaningful product recommendations.",
    image: "/images/adizero/hero-adizero.png",
    imageAlt: "A pair of bright yellow Adidas Adizero Adios Pro 4 running shoes.",
  },
  customerMoment: {
    title: "Customer moment",
    text:
      "A Customer walks in and says, “I have a comfortable everyday running shoe, but I want something lighter and faster for speed sessions and race preparation.”",
    clue: "This is a clue that Adidas Adizero may be the right range to recommend.",
    takeaway: "Adidas Adizero is for Customers who want performance, not just everyday comfort.",
  },
  basics: {
    title: "Product basics",
    intro:
      "Adidas Adizero is a performance running range for Customers who want speed, a lightweight feel, and responsive movement during training or race preparation.",
    recommendationLead: "Recommend Adidas Adizero when Customers say they want to:",
    recommendations: [
      "run faster or improve their pace,",
      "train for a race, or",
      "do tempo runs, speed sessions, or performance-focused training.",
    ],
    runnerImage: "/images/adizero/runner-cutout.png",
    runnerAlt: "A runner in yellow sportswear preparing to sprint.",
    benefitsImage: "/images/adizero/key-benefits.jpg",
    benefitsAlt: "Runners wearing bright Adidas Adizero shoes during a run.",
    benefitsTitle: "Key benefits:",
    benefits:
      "Lightweight feel, responsive movement, and support for faster training or race preparation.",
  },
  range: {
    title: "Adidas Adizero range overview",
    intro:
      "Start with the Customer’s running goal. Then use the table to choose the most suitable Adizero option.",
    cards: [
      {
        customerNeed: "Race day and marathon performance",
        option: "Adizero Adios Pro 4",
        cue: "Recommend when the Customer wants a light, fast race shoe for longer race distances.",
        image: "/images/adizero/adios-pro-4-action.jpg",
        alt: "Runners wearing Adidas Adizero Adios Pro 4 shoes.",
      },
      {
        customerNeed: "Fast training, speed work, or tempo runs",
        option: "Adizero Boston 13, Adizero Evo SL, Adizero SL 2",
        cue: "Recommend when the Customer wants to train faster or prepare for race day.",
        image: "/images/adizero/fast-training-range.jpg",
        alt: "A pair of black and green Adidas Adizero performance running shoes.",
      },
      {
        customerNeed: "Advanced or high-mileage performance training",
        option: "Adizero Prime X 3 Strung",
        cue: "Recommend when the Customer wants a high-energy training shoe for long, performance-focused runs.",
        image: "/images/adizero/prime-x-3-strung.jpg",
        alt: "A teal Adidas Adizero Prime X 3 Strung running shoe.",
      },
      {
        customerNeed: "Purposeful short-distance training",
        option: "Duramo Speed 2",
        cue: "Recommend when the Customer needs a lightweight training shoe for shorter runs up to 10 km, with cushioning that feels stable and responsive during quicker sessions.",
        image: "/images/adizero/duramo-speed-2.jpg",
        alt: "A runner putting on Adidas Duramo Speed 2 running shoes.",
      },
    ] as ProductCard[],
    statement:
      "Adidas Adizero is Adidas' dedicated speed-focused performance running range designed for runners who want to train or race faster.",
  },
  technology: {
    title: "How to explain the technology",
    intro:
      "Keep technology explanations short. Start with the feature, explain the Customer benefit, then use a simple selling phrase.",
    image: "/images/adizero/technology-exploded.png",
    imageAlt: "An exploded view of the layered technology inside an Adidas Adizero running shoe.",
    items: [
      {
        feature: "Lightstrike Pro or Lightstrike 2.0",
        benefit: "Helps the shoe feel light, cushioned, and fast.",
        phrase: "“This gives you a light, cushioned feel for faster runs.”",
        hotspot: 1,
      },
      {
        feature: "Energyrods 2.0",
        benefit: "Helps the shoe feel responsive when the Customer pushes off.",
        phrase: "“This helps the shoe feel quick when you pick up the pace.”",
        hotspot: 2,
      },
      {
        feature: "Lightweight outsole or breathable upper",
        benefit: "Keeps the shoe light while supporting grip and comfort.",
        phrase: "“This keeps the shoe light while helping you feel secure during your run.”",
        hotspot: 3,
      },
    ] as TechnologyItem[],
  },
  selling: {
    title: "Key selling message",
    intro:
      "Use a simple flow: ask one question, listen for the running goal, then recommend one Adidas Adizero option with one clear benefit.",
    flowLead: "Use this three-step flow:",
    steps: [
      { title: "Ask:", text: "“What type of running are you doing?”" },
      {
        title: "Listen:",
        text: "Is the Customer talking about racing, speed work, tempo runs, faster training, or short-distance performance?",
      },
      {
        title: "Recommend:",
        text: "Match the shoe to the Customer’s goal and explain one clear benefit.",
      },
    ],
    example:
      "Example recommendation: “Because you are training for faster 10 km runs, I would show you the Adizero Boston 13. It is built for speed work and tempo runs, so it gives you a fast training feel while still offering cushioning and grip.”",
  },
  scenario: {
    title: "Customer scenario",
    intro:
      "Use this example to see how a store employee can move from Customer need to product recommendation.",
    customer:
      "Customer says: “I’m training for faster 10 km runs and want something that feels light and quick.”",
    employee:
      "Store employee says: “Based on your goal, I would show you the Adidas Adizero Boston 13. It is built for speed work and tempo runs, so it gives you a fast training feel while still offering cushioning and grip.”",
    branches: [
      {
        ask: "“What type of running are you doing?”",
        match: "Race day or marathon performance",
        recommend: "Show Adizero Adios Pro 4.",
        image: "/images/adizero/adios-pro-4-product.png",
        alt: "Adidas Adizero Adios Pro 4 running shoe.",
      },
      {
        ask: "“Are you training for faster runs or speed sessions?”",
        match: "Speed work, tempo runs, or race preparation",
        recommend: "Show Adizero Boston 13, Adizero Evo SL, or Adizero SL 2.",
        image: "/images/adizero/evo-sl-product.png",
        alt: "Adidas Adizero Evo SL running shoe.",
      },
      {
        ask: "“Are you doing longer performance-focused runs?”",
        match: "High-mileage performance training",
        recommend: "Show Adizero Prime X 3 Strung.",
        image: "/images/adizero/prime-x-3-product.png",
        alt: "Adidas Adizero Prime X 3 Strung running shoe.",
      },
      {
        ask: "“Are you training up to 10 km?”",
        match: "Purposeful short-distance training",
        recommend: "Show Duramo Speed 2.",
        image: "/images/adizero/duramo-speed-2-product.png",
        alt: "Adidas Duramo Speed 2 running shoe.",
      },
    ] as ScenarioBranch[],
  },
  assessment: {
    title: "Practice knowledge check",
    intro: "Read each Customer scenario and choose the best response.",
    questions: [
      {
        scenario:
          "Scenario 1: A Customer says, “I already have a comfortable everyday running shoe. Now I want something lighter for speed sessions and race preparation.”",
        question: "Question: What is the best response?",
        options: [
          "Recommend a casual lifestyle shoe because the Customer already runs regularly.",
          "Recommend Adidas Adizero Boston 13 because the Customer wants a lighter shoe for speed sessions and race preparation.",
          "Recommend Duramo Speed 2 because the Customer wants a shoe only for short, easy runs.",
          "Recommend any Adidas running shoe because all running shoes are designed for the same goal.",
        ],
        correctIndex: 1,
        feedback:
          "Feedback: Correct. Adidas Adizero Boston 13 is the best option because the Customer wants a lighter shoe for speed sessions and race preparation. A casual shoe or everyday running shoe would not match the Customer’s performance goal.",
      },
      {
        scenario:
          "Scenario 2: A Customer says, “I am training for my first marathon and want a shoe that feels light and fast on race day.”",
        question: "Question: What is the best recommendation?",
        options: [
          "Recommend Adidas Adizero Adios Pro 4 because the Customer wants a light, fast race-day shoe for a longer distance.",
          "Recommend Adidas Adizero SL 2 because the Customer only needs an everyday running shoe.",
          "Recommend Duramo Speed 2 because the Customer only wants a shoe for short training runs.",
          "Recommend a lifestyle sneaker because marathon running does not need a performance shoe.",
        ],
        correctIndex: 0,
        feedback:
          "Feedback: Correct. Adidas Adizero Adios Pro 4 is the best option because the Customer is preparing for a marathon and wants a light, fast race-day shoe for a longer distance.",
      },
      {
        scenario:
          "Scenario 3: A Customer says, “I usually run shorter distances, up to 10 km, and I want a lightweight shoe that feels quick during training.”",
        question: "Question: What is the best recommendation?",
        options: [
          "Recommend Adizero Adios Pro 4 because the Customer is preparing for marathon race day.",
          "Recommend Adizero Prime X 3 Strung because the Customer is doing long, high-mileage performance runs.",
          "Recommend Duramo Speed 2 because the Customer wants a lightweight option for purposeful training up to 10 km.",
          "Recommend a casual lifestyle sneaker because the Customer only needs comfort for everyday wear.",
        ],
        correctIndex: 2,
        feedback:
          "Feedback: Correct. Duramo Speed 2 is the best option because the Customer wants a lightweight shoe for purposeful training up to 10 km. The other options are better suited to marathon race day, long high-mileage runs, or everyday lifestyle comfort.",
      },
    ] as AssessmentQuestion[],
  },
  footer: {
    button: "Return to People Connect",
    url: "#top",
  },
};
