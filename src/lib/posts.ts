const blogPosts = [
  {
    id: "getting-started-typescript",
    title: "Getting Started with TypeScript in 2024",
    content:
      "<h1>Getting Started with TypeScript</h1><p>TypeScript has become the standard for large-scale JavaScript applications. In this guide, we'll cover the essential concepts you need to know...</p>",
    contentType: "html",
    summary: "A comprehensive guide to starting with TypeScript in 2024",
    author: {
      name: "Sarah Chen",
      email: "sarah.chen@example.com",
      website: "https://sarahchen.dev",
    },
    published: new Date("2024-01-15"),
    updated: new Date("2024-01-16"),
    categories: ["typescript", "javascript", "programming"],
    rights: "CC BY-SA 4.0",
  },
  {
    id: "react-performance-tips",
    title: "10 React Performance Tips You Should Know",
    content:
      "<article><h2>Optimizing React Applications</h2><p>Performance optimization is crucial for modern web applications. Here are ten techniques to improve your React app's performance...</p></article>",
    contentType: "html",
    author: {
      name: "Marcus Rodriguez",
      email: "marcus@example.com",
    },
    published: new Date("2024-01-10"),
    categories: ["react", "performance", "javascript"],
  },
  {
    id: "rust-vs-go-2024",
    title: "Rust vs Go in 2024: Which Should You Choose?",
    content:
      "A detailed comparison of Rust and Go for backend development in 2024. We'll explore performance characteristics, ecosystem maturity, and use cases...",
    contentType: "text",
    authors: [
      {
        name: "Alex Thompson",
        email: "alex@example.com",
      },
      {
        name: "Priya Patel",
        email: "priya@example.com",
      },
    ],
    published: new Date("2024-01-05"),
    categories: ["rust", "go", "backend"],
  },
  {
    id: "testing-best-practices",
    title: "Testing Best Practices for Modern Applications",
    content:
      "<div><h1>Testing Best Practices</h1><p>Learn about unit testing, integration testing, and end-to-end testing strategies...</p></div>",
    contentType: "html",
    author: {
      name: "Emma Wilson",
      email: "emma@example.com",
      website: "https://emma-wilson.net",
    },
    published: new Date("2024-01-02"),
  },
  {
    id: "kubernetes-tips",
    title: "Kubernetes Tips and Tricks for Production",
    content:
      "Essential tips for running Kubernetes in production, including monitoring, scaling, and security best practices...",
    author: {
      name: "David Kim",
      email: "david@example.com",
    },
    published: new Date("2023-12-28"),
    categories: ["kubernetes", "devops", "containers"],
  },
  {
    id: "web-accessibility",
    title: "Making Your Web Apps Accessible: A Complete Guide",
    content:
      "<article>Comprehensive guide to web accessibility, including ARIA attributes, keyboard navigation, and screen reader compatibility...</article>",
    contentType: "html",
    author: {
      name: "Lisa Johnson",
      website: "https://lisaj.dev",
    },
    published: new Date("2023-12-20"),
    categories: ["accessibility", "web-development"],
  },
  {
    id: "graphql-rest-comparison",
    title: "GraphQL vs REST: A 2024 Perspective",
    content:
      "Comparing GraphQL and REST APIs in 2024, with real-world examples and performance benchmarks...",
    authors: [
      {
        name: "Michael Chang",
        email: "michael@example.com",
      },
    ],
    published: new Date("2023-12-15"),
    categories: ["graphql", "rest", "api"],
  },
  {
    id: "machine-learning-js",
    title: "Machine Learning with JavaScript: A Practical Guide",
    content:
      "<h1>Machine Learning with JavaScript</h1><p>Exploring TensorFlow.js and other ML libraries for JavaScript...</p>",
    contentType: "html",
    author: {
      name: "Nina Patel",
      email: "nina@example.com",
    },
    published: new Date("2023-12-10"),
    categories: ["machine-learning", "javascript", "tensorflow"],
  },
  {
    id: "docker-optimization",
    title: "Optimizing Docker Containers for Production",
    content:
      "Learn how to optimize your Docker containers for production environments, including image size reduction and security hardening...",
    author: {
      name: "Carlos Martinez",
      email: "carlos@example.com",
    },
    published: new Date("2023-12-05"),
    categories: ["docker", "devops", "optimization"],
  },
  {
    id: "web-components",
    title: "Web Components in 2024: The Complete Guide",
    content:
      "<article>A deep dive into Web Components, including Custom Elements, Shadow DOM, and HTML Templates...</article>",
    contentType: "html",
    authors: [
      {
        name: "Sophie Anderson",
        email: "sophie@example.com",
      },
    ],
    published: new Date("2023-12-01"),
    categories: ["web-components", "frontend"],
  },
  {
    id: "microservices-patterns",
    title: "Microservices Design Patterns for Scale",
    content:
      "Essential patterns for building scalable microservices architectures...",
    author: {
      name: "James Wilson",
      email: "james@example.com",
    },
    published: new Date("2023-11-28"),
    categories: ["microservices", "architecture", "patterns"],
  },
  {
    id: "css-grid-mastery",
    title: "Mastering CSS Grid Layout",
    content:
      "<div>Complete guide to CSS Grid Layout, with practical examples and best practices...</div>",
    contentType: "html",
    author: {
      name: "Rachel Brown",
      website: "https://rachel-brown.com",
    },
    published: new Date("2023-11-25"),
    categories: ["css", "frontend", "web-development"],
  },
  {
    id: "serverless-architectures",
    title: "Serverless Architectures: Benefits and Challenges",
    content:
      "Exploring the pros and cons of serverless architectures in modern applications...",
    authors: [
      {
        name: "Tom Johnson",
        email: "tom@example.com",
      },
    ],
    published: new Date("2023-11-20"),
    categories: ["serverless", "architecture", "cloud"],
  },
  {
    id: "react-native-performance",
    title: "React Native Performance Optimization",
    content:
      "<article>Tips and techniques for optimizing React Native applications...</article>",
    contentType: "html",
    author: {
      name: "Maria Garcia",
      email: "maria@example.com",
    },
    published: new Date("2023-11-15"),
    categories: ["react-native", "mobile", "performance"],
  },
  {
    id: "postgresql-tips",
    title: "PostgreSQL Performance Tuning Tips",
    content:
      "Advanced techniques for optimizing PostgreSQL database performance...",
    author: {
      name: "Kevin Lee",
      email: "kevin@example.com",
    },
    published: new Date("2023-11-10"),
    categories: ["postgresql", "database", "performance"],
  },
  {
    id: "vue3-composition-api",
    title: "Vue 3 Composition API: Best Practices",
    content:
      "<div>Learn how to effectively use Vue 3's Composition API in your applications...</div>",
    contentType: "html",
    authors: [
      {
        name: "Anna Kim",
        email: "anna@example.com",
      },
    ],
    published: new Date("2023-11-05"),
    categories: ["vue", "javascript", "frontend"],
  },
  {
    id: "ci-cd-pipelines",
    title: "Building Robust CI/CD Pipelines",
    content:
      "A comprehensive guide to creating reliable CI/CD pipelines for modern applications...",
    author: {
      name: "Chris Thompson",
      email: "chris@example.com",
    },
    published: new Date("2023-11-01"),
    categories: ["ci-cd", "devops", "automation"],
  },
  {
    id: "web-security",
    title: "Web Security Best Practices for 2024",
    content:
      "<article>Essential security practices for modern web applications...</article>",
    contentType: "html",
    author: {
      name: "Diana Martinez",
      website: "https://dianamartinez.sec",
    },
    published: new Date("2023-10-28"),
    categories: ["security", "web-development"],
  },
  {
    id: "nodejs-debugging",
    title: "Advanced Node.js Debugging Techniques",
    content: "Master Node.js debugging with advanced techniques and tools...",
    authors: [
      {
        name: "Ryan Peters",
        email: "ryan@example.com",
      },
    ],
    published: new Date("2023-10-25"),
    categories: ["nodejs", "debugging", "javascript"],
  },
  {
    id: "api-design",
    title: "RESTful API Design Principles",
    content:
      "<h1>API Design</h1><p>Learn the principles of designing clean and maintainable REST APIs...</p>",
    contentType: "html",
    author: {
      name: "Laura Chen",
      email: "laura@example.com",
    },
    published: new Date("2023-10-20"),
    categories: ["api", "rest", "backend"],
  },
  {
    id: "redis-caching",
    title: "Effective Caching Strategies with Redis",
    content:
      "Learn how to implement effective caching strategies using Redis...",
    author: {
      name: "Sam Taylor",
      email: "sam@example.com",
    },
    published: new Date("2023-10-15"),
    categories: ["redis", "caching", "performance"],
  },
  {
    id: "webpack-optimization",
    title: "Webpack 5 Optimization Techniques",
    content:
      "<div>Advanced techniques for optimizing your Webpack 5 builds...</div>",
    contentType: "html",
    authors: [
      {
        name: "Jack Wilson",
        email: "jack@example.com",
      },
    ],
    published: new Date("2023-10-10"),
    categories: ["webpack", "performance", "javascript"],
  },
  {
    id: "cloud-cost",
    title: "Optimizing Cloud Infrastructure Costs",
    content:
      "Strategies for managing and optimizing cloud infrastructure costs...",
    author: {
      name: "Elena Rodriguez",
      email: "elena@example.com",
    },
    published: new Date("2023-10-05"),
    categories: ["cloud", "cost-optimization", "devops"],
  },
  {
    id: "nextjs-patterns",
    title: "Next.js Design Patterns and Best Practices",
    content:
      "<article>Explore common design patterns and best practices for Next.js applications...</article>",
    contentType: "html",
    author: {
      name: "Mark Anderson",
      website: "https://markanderson.dev",
    },
    published: new Date("2023-10-01"),
    categories: ["nextjs", "react", "frontend"],
  },
  {
    id: "flutter-architecture",
    title: "Clean Architecture in Flutter Applications",
    content:
      "Implementing clean architecture principles in Flutter applications...",
    authors: [
      {
        name: "Jessica Lee",
        email: "jessica@example.com",
      },
    ],
    published: new Date("2023-09-28"),
    categories: ["flutter", "mobile", "architecture"],
  },
];

export default blogPosts;
