export const personalInfo = {
  name: "Ethan Micciola",
  title: "Software Engineering Technology Student",
  tagline: "Cybersecurity & Full-Stack Development",
  email: "ethan.m.micciola@gmail.com",
  github: "https://github.com/EthanMM0",
  linkedin: "https://www.linkedin.com/in/ethanmicciola",
  resume: "public/Ethan Micciola - Resume.pdf",
  location: "Ontario, Canada",
  heroIntro: "Analytical Software Engineering Technology student focused on cybersecurity and full-stack development, with strong proficiency in Python and C#. Built end-to-end projects including a stock analysis & prediction desktop app (Tkinter, yfinance, scikit-learn) and an AI financial budgeting web platform using Python/React, MongoDB, Plaid, Google Auth, and AWS Elastic Beanstalk. Comfortable in Agile environments and grounded in security fundamentals including SIEM workflows, Linux, and the NIST risk framework.",
  aboutText: `I'm a Software Engineering Technology student with a passion for building secure, scalable applications. My journey combines the analytical mindset of cybersecurity with the creative problem-solving of full-stack development.

I believe in learning by doing—every project I build teaches me something new about software architecture, security principles, or user experience. Whether it's developing a machine learning-powered stock predictor, integrating financial APIs, or automating environment management, I approach each challenge with curiosity and determination.

My goal is to bridge the gap between development and security, creating applications that are not only functional and beautiful but also robust and secure from the ground up.`
};

export const skills = [
  "Python",
  "C#",
  "Java",
  "React",
  "TypeScript",
  "Flask",
  "MongoDB",
  "AWS",
  "Linux",
  "SIEM",
  "NIST",
  "Agile",
  "Git",
  "Docker",
  "REST APIs"
];

export const projects = [
  {
    id: "stock-prediction",
    slug: "stock-prediction-app",
    title: "Stock Prediction Project",
    shortDescription: "Desktop stock analysis & prediction app using machine learning and real-time market data.",
    fullDescription: "A comprehensive desktop application that combines financial data analysis with machine learning to provide stock price predictions and insights. Built with a focus on practical forecasting and user-friendly workflows.",
    github: "https://github.com/EthanMM0/StockAppProject",
    featured: true,
    technologies: ["Python", "Tkinter", "yfinance", "scikit-learn", "pandas", "matplotlib"],
    features: [
      "Real-time stock data fetching using yfinance API",
      "Machine learning models for price prediction",
      "Interactive data visualization with matplotlib",
      "User-friendly Tkinter GUI",
      "Historical data analysis and trend identification"
    ],
    whatIBuilt: "I developed a complete desktop application from scratch, implementing both the UI/UX layer and the underlying machine learning pipeline. The project required understanding financial data structures, training predictive models, and presenting complex information in an accessible way.",
    whatILearned: "This project deepened my understanding of machine learning workflows, particularly in time-series prediction. I learned to balance model accuracy with performance, handle real-world API data, and design interfaces that make technical information approachable for non-technical users.",
    image: "/projects/stock-app.jpg"
  },
  {
    id: "python-package-checker",
    slug: "python-package-checker",
    title: "Python Package Checker",
    shortDescription: "Utility tool for checking Python package dependencies, versions, and environment consistency.",
    fullDescription: "A developer utility that helps maintain consistent Python environments by checking package presence, version compatibility, and dependency conflicts. Essential for keeping development workflows stable and reproducible.",
    github: "https://github.com/EthanMM0/PackageChecker",
    featured: false,
    technologies: ["Python", "pip", "virtualenv", "JSON"],
    features: [
      "Automated package version checking",
      "Dependency conflict detection",
      "Environment comparison tools",
      "Export environment specifications",
      "Cross-platform compatibility"
    ],
    whatIBuilt: "I created a command-line tool that automates the tedious process of verifying package installations across different environments. The tool scans installed packages, compares versions against requirements, and flags potential issues before they become problems.",
    whatILearned: "This project taught me about Python's packaging ecosystem, dependency resolution, and the importance of environment management in professional development. I also gained experience in building developer tools that prioritize usability and clear error messaging.",
    image: "/projects/package-checker.jpg"
  },
  {
    id: "budget-mind-ai",
    slug: "budget-mind-ai",
    title: "Budget Mind AI",
    shortDescription: "AI-powered financial tracker with spending insights, account linking, and personalized budgeting guidance.",
    fullDescription: "A full-stack web platform that helps users manage their finances through intelligent budgeting, spending analysis, and personalized recommendations. Integrates with real bank accounts and provides AI-driven financial insights.",
    github: "https://github.com/EthanMM0/G1-F25-COMP231",
    featured: true,
    technologies: ["React", "Python", "Flask", "MongoDB", "Plaid API", "Google Auth", "AWS Elastic Beanstalk", "AI/ML"],
    features: [
      "Secure bank account integration via Plaid API",
      "Google OAuth authentication",
      "AI-powered spending insights and recommendations",
      "Real-time transaction tracking and categorization",
      "Interactive budget planning and goal setting",
      "Cloud deployment on AWS Elastic Beanstalk"
    ],
    whatIBuilt: "I developed a complete full-stack application handling authentication, third-party API integration, data persistence, and AI-driven features. The project required architecting a secure, scalable backend and a responsive React frontend that handles sensitive financial data responsibly.",
    whatILearned: "This was my most complex project, teaching me about secure API integration, OAuth flows, managing sensitive user data, and deploying production-ready applications to the cloud. I gained hands-on experience with AWS services and learned to think about security at every layer of the application.",
    image: "/projects/budget-mind.jpg"
  },
  {
    id: "java-environment-manager",
    slug: "java-environment-manager",
    title: "Dynamic Java Environment Manager",
    shortDescription: "Automated tool for managing and switching between Java development environments seamlessly.",
    fullDescription: "A utility that simplifies Java development by automating environment setup, configuration, and version switching. Helps developers maintain consistency across projects and reduces setup friction.",
    github: "https://github.com/EthanMM0/Dynamic-Java-Environment-Manager",
    featured: false,
    technologies: ["Java", "Shell Scripting", "Environment Management"],
    features: [
      "One-command environment switching",
      "Automated Java version management",
      "Project-specific configuration profiles",
      "Cross-platform support",
      "Integration with existing build tools"
    ],
    whatIBuilt: "I created an automation tool that eliminates the manual work of switching Java environments. The tool intelligently detects project requirements and configures the development environment accordingly, saving developers time and reducing configuration errors.",
    whatILearned: "This project improved my understanding of system-level programming, environment variables, and the importance of developer experience. I learned to build tools that solve real workflow pain points and work seamlessly across different operating systems.",
    image: "/projects/java-manager.jpg"
  }
];

export const services = [
  {
    id: "python-csharp-dev",
    title: "Junior Software Developer",
    subtitle: "Python / C# Focus",
    icon: "Code2",
    description: "I build reliable features end-to-end, write clean maintainable code, and ship projects with real functionality.",
    whatICanDo: [
      "Develop desktop and console applications with intuitive interfaces",
      "Write clean, well-documented, and testable code",
      "Debug complex issues and optimize performance",
      "Handle data processing, file I/O, and API integrations",
      "Collaborate in Agile teams with clear communication"
    ],
    toolsIUse: [
      "Python (Tkinter, Flask, pandas, scikit-learn)",
      "C# (.NET Framework, Visual Studio)",
      "Git version control and collaborative workflows",
      "Unit testing and debugging tools",
      "SQL and NoSQL databases"
    ],
    whyImAFit: [
      "Proven track record with real projects (stock app, package checker)",
      "Strong problem-solving skills and analytical thinking",
      "Fast learner who embraces new technologies",
      "Attention to code quality and maintainability",
      "Can work independently or collaboratively"
    ]
  },
  {
    id: "fullstack-dev",
    title: "Full-Stack Developer",
    subtitle: "React + Python/Flask + MongoDB",
    icon: "Layers",
    description: "I can develop modern UIs, connect APIs, manage authentication, and integrate third-party services.",
    whatICanDo: [
      "Build responsive, accessible React applications",
      "Design and implement RESTful APIs with Python/Flask",
      "Manage database schemas and queries in MongoDB",
      "Integrate OAuth and third-party APIs (Plaid, payment processors)",
      "Deploy and maintain applications on cloud platforms"
    ],
    toolsIUse: [
      "React, TypeScript, Next.js, Tailwind CSS",
      "Python, Flask, FastAPI",
      "MongoDB, PostgreSQL",
      "AWS (Elastic Beanstalk, S3, EC2)",
      "Docker, Git, CI/CD pipelines"
    ],
    whyImAFit: [
      "Built Budget Mind AI with real integrations (Plaid + Google Auth)",
      "Experience with complete development lifecycle",
      "Scalable architecture thinking and best practices",
      "Security-conscious development approach",
      "Comfortable with both frontend and backend challenges"
    ]
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity / SOC Analyst",
    subtitle: "Intern / Junior Role",
    icon: "Shield",
    description: "I understand security fundamentals and can contribute to monitoring, triage, and incident workflows.",
    whatICanDo: [
      "Monitor SIEM alerts and perform initial triage",
      "Analyze security events and identify potential threats",
      "Document incidents and follow response procedures",
      "Assist with vulnerability assessments",
      "Apply security frameworks (NIST) to real-world scenarios"
    ],
    toolsIUse: [
      "SIEM platforms (Splunk, ELK Stack)",
      "Linux command line and system administration",
      "Network analysis tools (Wireshark, tcpdump)",
      "Security frameworks (NIST Risk Management)",
      "Python for security automation"
    ],
    whyImAFit: [
      "Can bridge development and security perspectives",
      "Strong analytical skills and attention to detail",
      "Clear communication for technical and non-technical audiences",
      "Proactive learner staying current with security trends",
      "Understand secure coding practices from development experience"
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud / DevOps Junior",
    subtitle: "AWS-Focused",
    icon: "Cloud",
    description: "I can help deploy, troubleshoot, and automate delivery of web applications.",
    whatICanDo: [
      "Deploy applications to AWS (Elastic Beanstalk, EC2, S3)",
      "Configure and troubleshoot cloud environments",
      "Automate deployment processes and workflows",
      "Monitor application health and performance",
      "Implement basic CI/CD pipelines"
    ],
    toolsIUse: [
      "AWS (Elastic Beanstalk, EC2, S3, RDS)",
      "Docker for containerization",
      "Git and GitHub Actions for CI/CD",
      "Shell scripting and automation",
      "Monitoring and logging tools"
    ],
    whyImAFit: [
      "Hands-on AWS deployment experience (Budget Mind AI)",
      "Build with production considerations (configs, logging, reliability)",
      "Operational mindset focused on uptime and performance",
      "Can troubleshoot across the full stack",
      "Eager to learn infrastructure as code and advanced DevOps practices"
    ]
  }
];

export const timeline = [
  {
    year: "2023-Present",
    title: "Software Engineering Technology",
    description: "Focused on cybersecurity and full-stack development, building real-world projects and deepening technical skills."
  },
  {
    year: "2025",
    title: "Budget Mind AI",
    description: "Developed AI-powered financial platform with React, Python, MongoDB, and AWS deployment."
  },
    {
    year: "2024",
    title: "Developer Tools",
    description: "Created Python Package Checker and Java Environment Manager to improve developer workflows."
  },
  {
    year: "2023",
    title: "Stock Prediction App",
    description: "Built machine learning desktop application for stock analysis and price forecasting."
  }
];

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
];

export const socialLinks = {
  github: {
    name: "GitHub",
    url: "https://github.com/EthanMM0",
    icon: "Github"
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ethanmicciola/",
    icon: "Linkedin"
  }
};
