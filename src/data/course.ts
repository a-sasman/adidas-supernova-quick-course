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
    title: "Adidas Supernova Course",
    description:
      "This quick course helps Totalsports store employees recommend Adidas Supernova running shoes to Customers who want everyday running comfort, support, and a stable feel for regular runs.",
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
    title: "Adidas Supernova Course",
    text:
      "The Adidas Supernova range offers different levels of comfort, support, and stability for everyday runners. This course will help you identify what the Customer needs, choose the right Supernova shoe, and explain the recommendation with confidence.",
    image: "/images/supernova/hero-supernova.png",
    imageAlt: "A pair of white Adidas Supernova running shoes with neon green and orange accents.",
  },
  customerMoment: {
    title: "Customer moment",
    text:
      "A Customer walks in and says, “I want one comfortable running shoe for everyday runs, but I also need support when I go further.”",
    clue: "This is a clue that Adidas Supernova may be the right range to recommend.",
    takeaway: "Adidas Supernova is for Customers who want comfort and support for regular everyday running.",
  },
  basics: {
    title: "Product basics",
    intro:
      "Adidas Supernova is a running range for Customers who want everyday comfort, reliable support, and a stable feel during regular runs. It is a strong option when the Customer is running often, building distance, or asking for a shoe that feels comfortable and supportive.",
    recommendationLead: "Recommend Adidas Supernova when Customers say they want to:",
    recommendations: [
      "Start running more often",
      "Feel comfortable during everyday runs",
      "Get more support and stability when they run further or more regularly",
    ],
    runnerImage: "/images/supernova/runner-cutout.png",
    runnerAlt: "A runner wearing white Adidas Supernova running shoes.",
    benefitsImage: "/images/supernova/key-benefits.jpg",
    benefitsAlt: "A runner wearing white Adidas Supernova running shoes with neon green and orange accents.",
    benefitsTitle: "Key benefits:",
    benefits:
      "Dreamstrike + cushioning, Support Rods, and the Guide Your Ride support platform help Customers experience everyday comfort, reliable support, and a more stable ride during regular runs.",
  },
  range: {
    title: "Adidas Supernova range overview",
    intro:
      "Start with the Customer’s comfort and support need. Click on each card to reveal the most suitable Adidas Supernova option and when to recommend it.",
    cards: [
      {
        customerNeed: "Everyday running comfort",
        option: "Supernova Rise",
        cue: "Recommend when the Customer wants a comfortable shoe for regular daily runs.",
        image: "/images/supernova/supernova-rise-card.jpg",
        alt: "A pair of white Adidas Supernova Rise running shoes outdoors.",
      },
      {
        customerNeed: "Comfort with extra support for longer runs",
        option: "Supernova Prima 2",
        cue: "Recommend when the Customer wants dialled-up comfort and exceptional support over longer everyday runs.",
        image: "/images/supernova/supernova-prima-2-card.jpg",
        alt: "A pair of black Adidas Supernova Prima 2 running shoes outdoors.",
      },
      {
        customerNeed: "More stability and guided support",
        option: "Supernova Solution 3",
        cue: "Recommend when the Customer wants everyday comfort with elevated support and a more guided feel.",
        image: "/images/supernova/supernova-solution-3-card.jpg",
        alt: "A runner wearing grey Adidas Supernova Solution 3 running shoes.",
      },
    ] as ProductCard[],
  },
  technology: {
    title: "How to explain the technology",
    intro:
      "Keep technology explanations short. Start with the feature, explain the Customer benefit, and then use a simple selling phrase. Click each number to learn more.",
    image: "/images/supernova/technology-exploded.png",
    imageAlt: "An exploded view of the layered technology inside an Adidas Supernova running shoe.",
    items: [
      {
        feature: "Dreamstrike+ cushioning",
        benefit: "Helps the Customer feel comfortable during daily runs.",
        phrase: "“This shoe is made to feel comfortable for your everyday runs.”",
        hotspot: 1,
      },
      {
        feature: "Support Rods",
        benefit: "Helps the Customer feel steady when they run more often or go further.",
        phrase: "“This option gives you support when your runs get longer or more regular.”",
        hotspot: 2,
      },
      {
        feature: "Guide Your Ride support platform",
        benefit: "Helps the Customer feel more controlled while running.",
        phrase: "“This shoe helps your run feel more stable and guided.”",
        hotspot: 3,
      },
    ] as TechnologyItem[],
  },
  selling: {
    title: "Key selling message",
    intro:
      "Use a simple flow: ask one clear question, listen for the Customer’s running need, then recommend one Adidas Supernova option with one benefit that matches that need.",
    steps: [
      {
        title: "Ask:",
        text: "“What type of running are you doing, and what do you want the shoe to feel like?”",
      },
      {
        title: "Listen:",
        text: "Is the Customer talking about everyday comfort, support for longer runs, or a more stable feel?",
      },
      {
        title: "Recommend:",
        text: "Match the shoe to the Customer’s need and explain one clear benefit.",
      },
    ],
    example:
      "Example recommendation: “Because you run three times a week and want extra support on longer runs, I would show you the Supernova Prima 2. It gives you dialled-up comfort with exceptional support for longer runs.”",
  },
  scenario: {
    title: "Customer scenario",
    intro:
      "Use this example to see how a store employee can move from Customer need to product recommendation.",
    customer:
      "Customer says: “I run three times a week. I want a comfortable shoe, but I also want extra support when I do longer runs.”",
    employee:
      "Store employee says: “Based on your goal, I would show you the Adidas Supernova Prima 2. It gives you dialled-up comfort with exceptional support for longer everyday runs.”",
    branches: [
      {
        ask: "“What type of running are you doing?”",
        match: "Everyday running comfort",
        recommend: "Show Supernova Rise.",
        image: "/images/supernova/supernova-rise.png",
        alt: "A white Adidas Supernova Rise running shoe.",
      },
      {
        ask: "“Do you want extra support for longer runs?”",
        match: "Comfort with extra support",
        recommend: "Show Supernova Prima 2.",
        image: "/images/supernova/supernova-prima-2.png",
        alt: "A black Adidas Supernova Prima 2 running shoe.",
      },
      {
        ask: "“Do you want a more stable and guided feel?”",
        match: "More stability and guided support",
        recommend: "Show Supernova Solution 3.",
        image: "/images/supernova/supernova-solution-3.png",
        alt: "A white Adidas Supernova Solution 3 running shoe.",
      },
    ] as ScenarioBranch[],
  },
  assessment: {
    title: "Practice knowledge check",
    intro: "Read each Customer scenario and choose the best response.",
    instruction:
      "Complete the questions at the end of the course. To pass, you must choose the best Customer question or product recommendation based on the Customer’s running need.",
    questions: [
      {
        scenario:
          "Scenario: A Customer says, “I run after work a few times a week, but my feet feel tired on longer runs.”",
        question: "Question: What is the best response?",
        options: [
          "“Do you want the cheapest running shoe?”",
          "“How often do you run, and do you need more comfort, support, or both?”",
          "“Do you prefer a black or white shoe?”",
          "“Are you only buying the shoe because it is Adidas?”",
        ],
        correctIndex: 1,
        feedback:
          "Feedback: The best answer is B. This question helps the store employee understand the Customer’s running routine and whether they need comfort, support, or both.",
      },
      {
        scenario:
          "Scenario 2: A Customer says, “I want a running shoe that feels steady when I run longer distances.”",
        question: "Question: Which Supernova shoe best matches this Customer need?",
        options: [
          "Fashion styling for everyday outfits.",
          "Lightweight feel for racing only.",
          "Supernova Prima 2, because it offers comfort with extra support for longer everyday runs.",
          "Colour options that match the Customer’s clothing.",
        ],
        correctIndex: 2,
        feedback:
          "Feedback: The best answer is C. The Customer asked for a steady feel on longer runs, so Supernova Prima 2 is the best match because it gives comfort with extra support for longer everyday runs.",
      },
      {
        scenario:
          "A Customer says, “I am starting to run more often. I want one shoe for daily runs, but I need it to feel stable and supportive.”",
        question: "Question 3: Select the most suitable Supernova shoe",
        options: [
          "Recommend a lifestyle sneaker because the Customer is new to running.",
          "Recommend Supernova Solution 3 because the Customer wants daily running comfort with more stability and support.",
          "Recommend any Supernova shoe because all running shoes meet the same need.",
          "Recommend the lightest shoe in store because the Customer wants to run more often.",
        ],
        correctIndex: 1,
        feedback:
          "Feedback: The best answer is B. The Customer asked for one daily running shoe with a stable and supportive feel, so Supernova Solution 3 is the best match.",
      },
    ] as AssessmentQuestion[],
  },
  footer: {
    button: "Return to People Connect",
    url: "#top",
  },
};
