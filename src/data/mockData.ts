//biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const technologies: any[] = [
  // Frontend
  {
    id: "html",
    name: "HTML",
    category: "Frontend",
    priority: 1,
    description:
      "The standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    id: "css",
    name: "CSS",
    category: "Frontend",
    priority: 2,
    description:
      "A style sheet language used for describing the presentation of a document written in HTML.",
  },
  {
    id: "js",
    name: "JavaScript",
    category: "Frontend",
    priority: 3,
    description:
      "A programming language that is one of the core technologies of the World Wide Web.",
  },
  {
    id: "react",
    name: "React",
    category: "Frontend",
    priority: 4,
    description: "A JavaScript library for building user interfaces.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    priority: 5,
    description:
      "A strict syntactical superset of JavaScript that adds static typing.",
  },

  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    priority: 1,
    description:
      "A back-end JavaScript runtime environment that runs on the V8 engine.",
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend",
    priority: 2,
    description: "A minimal and flexible Node.js web application framework.",
  },
  {
    id: "sql",
    name: "SQL",
    category: "Backend",
    priority: 3,
    description:
      "A domain-specific language used for managing data in relational databases.",
  },
  {
    id: "nosql",
    name: "NoSQL",
    category: "Backend",
    priority: 4,
    description:
      "A mechanism for storage and retrieval of data that is modeled differently from relational databases.",
  },
  {
    id: "apis",
    name: "RESTful APIs",
    category: "Backend",
    priority: 5,
    description:
      "An architectural style for an application program interface (API) that uses HTTP requests.",
  },

  // Principles
  {
    id: "oop",
    name: "OOP",
    category: "Principles",
    priority: 1,
    description: "A programming paradigm based on the concept of objects.",
  },
  {
    id: "fp",
    name: "Functional Programming",
    category: "Principles",
    priority: 2,
    description:
      "A programming paradigm that treats computation as the evaluation of mathematical functions.",
  },
  {
    id: "solid",
    name: "SOLID",
    category: "Principles",
    priority: 3,
    description:
      "Five design Principles intended to make software designs more understandable and maintainable.",
  },
  {
    id: "dryConcept",
    name: "DRY",
    category: "Principles",
    priority: 4,
    description:
      "Don't Repeat Yourself - a principle aimed at reducing repetition of information.",
  },
  {
    id: "cleanCode",
    name: "Clean Code",
    category: "Principles",
    priority: 5,
    description:
      "Code that is easy to understand, easy to change, and easy to maintain.",
  },

  // Architecture
  {
    id: "mvc",
    name: "MVC",
    category: "Architecture",
    priority: 1,
    description:
      "A software design pattern commonly used for developing user interfaces.",
  },
  {
    id: "microservices",
    name: "Microservices",
    category: "Architecture",
    priority: 2,
    description:
      "An architectural style that structures an application as a collection of loosely coupled services.",
  },
  {
    id: "serverless",
    name: "Serverless",
    category: "Architecture",
    priority: 3,
    description:
      "A cloud-computing execution model where the cloud provider runs the server.",
  },
  {
    id: "spa",
    name: "SPA",
    category: "Architecture",
    priority: 4,
    description:
      "A web application or website that interacts with the user by dynamically rewriting the current page.",
  },
  {
    id: "pwa",
    name: "PWA",
    category: "Architecture",
    priority: 5,
    description:
      "A type of application software delivered through the web, built using common web technologies.",
  },

  // Testing
  {
    id: "unitTest",
    name: "Unit Testing",
    category: "Testing",
    priority: 1,
    description:
      "A software Testing method where individual units of source code are tested.",
  },
  {
    id: "integrationTest",
    name: "Integration Testing",
    category: "Testing",
    priority: 2,
    description:
      "A phase in software Testing in which individual software modules are combined and tested as a category.",
  },
  {
    id: "e2eTest",
    name: "E2E Testing",
    category: "Testing",
    priority: 3,
    description:
      "A methodology used to test whether the flow of an application is performing as designed from start to finish.",
  },
  {
    id: "tdd",
    name: "TDD",
    category: "Testing",
    priority: 4,
    description:
      "A software development process relying on software requirements being converted to test cases.",
  },
  {
    id: "ci",
    name: "CI/CD",
    category: "Testing",
    priority: 5,
    description:
      "The combined practices of continuous integration and continuous delivery or continuous deployment.",
  },
];

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const projects: any[] = [
  {
    id: "p1",
    title: "Personal Portfolio Website",
    description:
      "Create your own portfolio website to showcase your skills and projects.",
    difficulty: "beginner",
    skills: ["html", "css", "js"],
    resources: [
      { title: "HTML Tutorial", url: "https://www.w3schools.com/html/" },
      { title: "CSS Tutorial", url: "https://www.w3schools.com/css/" },
      { title: "JavaScript Tutorial", url: "https://www.w3schools.com/js/" },
    ],
  },
  {
    id: "p2",
    title: "Todo List Application",
    description: "Build a todo list application with CRUD operations.",
    difficulty: "beginner",
    skills: ["html", "css", "js", "react"],
    resources: [
      {
        title: "React Todo List Tutorial",
        url: "https://reactjs.org/docs/getting-started.html",
      },
    ],
  },
  {
    id: "p3",
    title: "Blog Platform with CMS",
    description: "Create a blog platform with a content management system.",
    difficulty: "intermediate",
    skills: ["html", "css", "js", "react", "nodejs", "express", "sql"],
    resources: [
      {
        title: "MERN Stack Tutorial",
        url: "https://www.mongodb.com/mern-stack",
      },
    ],
  },
  {
    id: "p4",
    title: "E-commerce Website",
    description:
      "Build an e-commerce website with product listings, cart, and checkout functionality.",
    difficulty: "advanced",
    skills: [
      "html",
      "css",
      "js",
      "react",
      "typescript",
      "nodejs",
      "express",
      "sql",
      "apis",
    ],
    resources: [
      {
        title: "React E-commerce Tutorial",
        url: "https://www.youtube.com/watch?v=7FQR2rxEHMw",
      },
    ],
  },
  {
    id: "p5",
    title: "Weather Dashboard",
    description:
      "Create a weather dashboard that shows current weather and forecast data.",
    difficulty: "intermediate",
    skills: ["html", "css", "js", "react", "apis"],
    resources: [
      { title: "OpenWeatherMap API", url: "https://openweathermap.org/api" },
      {
        title: "React Weather App Tutorial",
        url: "https://www.youtube.com/watch?v=GuA0_Z1llYU",
      },
    ],
  },
  {
    id: "p6",
    title: "Chat Application",
    description: "Build a real-time chat application using WebSockets.",
    difficulty: "advanced",
    skills: ["html", "css", "js", "react", "nodejs", "express"],
    resources: [
      { title: "Socket.io Documentation", url: "https://socket.io/docs/" },
      {
        title: "Chat App Tutorial",
        url: "https://www.youtube.com/watch?v=ZwFA3YMfkoc",
      },
    ],
  },
  {
    id: "p7",
    title: "Unit Testing Suite",
    description: "Add comprehensive unit tests to an existing application.",
    difficulty: "intermediate",
    skills: ["unitTest", "js", "tdd"],
    resources: [
      {
        title: "Jest Documentation",
        url: "https://jestjs.io/docs/getting-started",
      },
      {
        title: "Testing React Apps",
        url: "https://reactjs.org/docs/Testing.html",
      },
    ],
  },
  {
    id: "p8",
    title: "Microservices Project",
    description:
      "Convert a monolithic application into a microservices Architecture.",
    difficulty: "advanced",
    skills: ["nodejs", "microservices", "apis", "docker"],
    resources: [
      {
        title: "Microservices with Node.js",
        url: "https://www.youtube.com/watch?v=XUSHH0E-7zk",
      },
    ],
  },
  {
    id: "p9",
    title: "Code Refactoring",
    description:
      "Refactor a codebase to follow clean code Principles and SOLID Principles.",
    difficulty: "intermediate",
    skills: ["cleanCode", "solid", "dryConcept", "oop"],
    resources: [
      {
        title: "Clean Code Book",
        url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
      },
      {
        title: "SOLID Principles",
        url: "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-Principles-of-object-oriented-design",
      },
    ],
  },
  {
    id: "p10",
    title: "Progressive Web App",
    description:
      "Convert an existing web application into a Progressive Web App.",
    difficulty: "intermediate",
    skills: ["pwa", "html", "css", "js"],
    resources: [
      {
        title: "PWA Documentation",
        url: "https://web.dev/progressive-web-apps/",
      },
      {
        title: "PWA Tutorial",
        url: "https://www.youtube.com/watch?v=sFsRylCQblw",
      },
    ],
  },
];
