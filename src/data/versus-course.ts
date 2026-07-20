export type RangeCard = {
  title: string;
  description: string;
};

export type MethodCard = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type AssessmentQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
  feedback: string;
};

export const courseData = {
  meta: {
    title: "Versus Socks Quick Course",
    brand: "Versus",
    description:
      "Learn how to recommend the right Versus Sock by understanding the range, explaining benefits, and responding to customer concerns.",
  },
  nav: [
    { id: "overview", label: "Overview" },
    { id: "product-range", label: "Product Range" },
    { id: "accessories-ecosystem", label: "Accessories & Ecosystem" },
    { id: "how-to-sell", label: "How to Sell" },
    { id: "activity", label: "Activity" },
  ],
  welcome: {
    title: "Welcome",
    paragraphs: [
      "In this course, you will learn how to recommend the right Versus Sock by understanding the range, asking the right questions, explaining benefits simply, and responding to customer concerns.",
      "Socks are not just an add-on item. The right sock can support comfort, fit, movement, and the customer’s activity. When you recommend the right sock, you help the customer complete their purchase with confidence.",
    ],
    image: "/images/versus/printed-active-crew.jpg",
    imageAlt: "A pair of colourful Versus Printed Active Crew socks.",
  },
  range: {
    title: "Know the Versus Range",
    intro:
      "This module helps you recognise the main Versus Sock ranges and what each one is best used for.",
    cards: [
      {
        title: "Printed Active Crew",
        description:
          "It is a bold-design everyday training crew. It is best for gym-goers and everyday athletes who want bold designs and performance.",
      },
      {
        title: "Classic Tab Active Crew",
        description:
          "It is a minimalist branded performance crew. It is best for customers who want a clean, premium training sock.",
      },
      {
        title: "Ankle Running",
        description:
          "It is a low-cut, cool-running sock. It is best for runners who want maximum airflow and a secure heel.",
      },
      {
        title: "Quarter Running",
        description:
          "It is a light-coverage running sock. It is best for runners who want slightly more ankle coverage.",
      },
      {
        title: "Trail Running",
        description:
          "It is a high-grip off-road sock. It is best for trail runners and hikers who need grip and durability.",
      },
      {
        title: "Merino",
        description:
          "It is a natural-fibre winter sock. It is best for cold-weather training and customers who prefer natural fibres.",
      },
      {
        title: "Aero Cycling",
        description:
          "It is an aerodynamic race sock. It is best for cyclists who want a performance-specific cycling sock.",
      },
      {
        title: "Velocity Trainer",
        description:
          "It is a no-show invisible sock. It is best for everyday wear and low-cut trainers.",
      },
    ] as RangeCard[],
  },
  match: {
    title: "Match the Sock to the Customer",
    intro:
      "This module helps you ask simple questions and match the customer to the best Versus Sock.",
    instruction:
      "Use this method on the shop floor: Ask, Match, Explain, Respond to customer concerns, and Guide.",
    action: "Click on the cards below to learn more.",
    cards: [
      {
        title: "Step 1: Ask",
        description:
          "Ask what the customer will use the socks for. Find out whether they need socks for running, training, cycling, hiking, or everyday wear.",
        image: "/images/versus/step-ask.jpg",
        alt: "A runner wearing blue Versus socks and white running shoes.",
      },
      {
        title: "Step 2: Match",
        description:
          "Match the sock to the customer’s activity. Running, training, cycling, hiking, and everyday wear may need different socks.",
        image: "/images/versus/step-match.jpg",
        alt: "A customer wearing pink and blue Versus performance socks.",
      },
      {
        title: "Step 3: Explain",
        description:
          "Explain the benefit in plain language. Focus on why the sock helps the customer, not only on the feature.",
        image: "/images/versus/step-explain.jpg",
        alt: "A runner wearing white Versus socks and white running shoes.",
      },
    ] as MethodCard[],
    conversation:
      "Customer: “I run on trails.” Employee: “Then the Trail Running sock is a good option because it gives grip and durability for off-road movement.”",
  },
  benefits: {
    title: "Versus Socks Benefits",
    intro:
      "This module helps you explain Versus Sock benefits in clear, customer-friendly language. A feature tells the customer what the product has. A benefit tells the customer why it matters to them.",
    body:
      "Seamless toe helps reduce rubbing. Arch support supports the middle of the foot. Moisture-wicking material helps move sweat away from the foot. Breathable mesh helps keep the foot cooler during movement.",
    simple:
      "Instead of saying “moisture-wicking material”, say “this helps move sweat away from your foot so you feel more comfortable while moving.”",
  },
  concerns: {
    title: "Responding to Customer Concerns",
    intro:
      "This module helps you respond to customer concerns and guide them towards the right Versus Sock with care. A concern is a question, hesitation, or worry from the customer. It does not always mean no. It may mean the customer needs more information before deciding.",
    modelTitle: "The Customer Concern Response Model",
    model: [
      {
        title: "Acknowledge",
        description:
          "Show the customer that you heard their concern. Example: “I hear that the price is a concern for you. Let me show you what makes this sock different from a basic sock.”",
      },
      {
        title: "Clarify",
        description:
          "Ask a simple question to understand what the customer needs. Example: “Are you looking for something for everyday wear, training, or running?”",
      },
      {
        title: "Reassure",
        description:
          "Explain the benefit in a way that answers the concern. Example: “This sock is designed for sport, so it gives better comfort, support and moisture control than a basic sock.”",
      },
      {
        title: "Guide",
        description:
          "Help the customer make a suitable choice. Example: “If you train often, this would be a good option because it can help keep your feet comfortable while you move.”",
      },
    ],
    example:
      "Customer: “These socks are too expensive.” Employee: “I hear that the price is a concern for you. What will you mainly use the socks for: everyday wear, training, or running? This sock is designed for sport, so it gives better comfort, support and moisture control than a basic sock. If you train often, this would be a good option because it can help keep your feet comfortable while you move.”",
  },
  assessment: [
    {
      question:
        "A customer is buying trail shoes and says they often run on uneven paths and sometimes hike on weekends. Which sock would best support this customer’s activity?",
      options: ["Velocity Trainer", "Trail Running", "Aero Cycling", "Classic Tab"],
      correctIndex: 1,
      feedback:
        "Trail Running is designed for off-road movement and gives trail runners and hikers the grip and durability they need.",
    },
    {
      question:
        "A customer says, “I am not sure which sock I need.” What should you do first?",
      options: [
        "Ask what they will use the socks for",
        "Choose the most expensive sock",
        "Explain every feature at once",
        "Recommend a cycling sock",
      ],
      correctIndex: 0,
      feedback:
        "Ask first. Understanding the customer’s activity helps you match them to the right sock.",
    },
    {
      question:
        "A customer needs socks for trail running and hiking. Which range should you recommend?",
      options: ["Merino", "Quarter Running", "Trail Running", "Velocity Trainer"],
      correctIndex: 2,
      feedback:
        "Trail Running is the high-grip off-road option for trail runners and hikers.",
    },
    {
      question: "Which explanation is easiest for a customer to understand?",
      options: [
        "This sock has moisture-wicking material.",
        "This helps move sweat away from your foot so you feel more comfortable while moving.",
        "This is a technical performance textile.",
        "This product uses advanced fabrication.",
      ],
      correctIndex: 1,
      feedback:
        "Explain the benefit in plain language so the customer understands why the feature matters.",
    },
  ] as AssessmentQuestion[],
  footer: {
    completion: "You’ve completed the Versus Socks course.",
    button: "Return to People Connect",
    url: "#",
  },
};
