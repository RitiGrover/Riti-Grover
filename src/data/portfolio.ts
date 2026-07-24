// ============================================================
// portfolio.ts — Source of truth for all portfolio content
// ============================================================

export const personal = {
  name: "RITI GROVER",
  title: "Computer Science (Information Technology) Undergraduate",
  institution: "Manipal Institute of Technology, Bengaluru",
  email: "ritigrover1@gmail.com",
  linkedin: "https://www.linkedin.com/in/ritigrover/",
  github: "https://github.com/RitiGrover",
  resume: "/resume.pdf",
};

export const heroPrimary = [
  "Engineering scalable software",
  "through AI, data,",
  "and modern computing.",
];

export const heroSecondary = [
  "Building intelligent applications,",
  "conducting AI research, and transforming",
  "complex ideas into practical, scalable solutions.",
];

export const about = {
  summary: `I am a Computer Science undergraduate at Manipal Institute of Technology with a strong interest in artificial intelligence, software engineering, and modern application development. Through research at IIT Roorkee and hands-on projects, I have worked on graph neural networks, deep learning, constraint-based optimization, and full-stack applications, transforming complex ideas into practical, scalable solutions.

Beyond academics, I have held leadership roles across multiple student organizations, strengthening my skills in communication, collaboration, and project management. I am currently seeking opportunities in software engineering, artificial intelligence, and modern application development, where I can contribute to building scalable software, intelligent systems, and impactful digital solutions.`,
  languages: "English, Hindi",
};

export const experiences = [
  {
    id: "iit-roorkee",
    company: "IIT Roorkee",
    role: "Research Intern — AI-Driven Edge Computing for IoT",
    period: "May 2025",
    description:
      "• Researched deep learning architectures, including Transformers, and software engineering methodologies to design scalable, real-time resource-allocation solutions for IoT edge systems\n• Designed, built, and tested a hybrid machine learning and optimization framework, benchmarking alternative approaches against standard baselines to recommend the most effective solution",
    technologies: [
      "Deep Learning",
      "Transformers",
      "IoT",
      "Edge Computing",
      "Machine Learning",
      "Optimization",
    ],
  },
  {
    id: "luscious-leopard",
    company: "Luscious Leopard",
    role: "Creative Intern",
    period: "May 2025",
    description:
      "• Redesigned website frontend layouts and produced Instagram and website content, improving user experience and aligning visuals with brand identity",
    technologies: [
      "Marketing",
      "Frontend Design",
      "Content Creation",
      "UI/UX",
      "Brand Identity",
    ],
  },
];

export const projects = [
  {
    id: "smurfing-hunter",
    name: "SMURFING HUNTER",
    tagline: "Blockchain AML Intelligence Platform",
    shortDescription:
      "An automated system for detecting suspicious blockchain transaction patterns and generating risk reports using graph neural networks.",
    problem:
      "Anti-money laundering (AML) compliance teams face an overwhelming volume of blockchain transactions to analyze manually. Detecting sophisticated laundering typologies like smurfing, peeling chains, and mule networks requires pattern recognition at a scale that exceeds human capacity.",
    approach:
      "Designed and built a 3-layer Graph Convolutional Network (GCN) to classify wallet behavior, paired with a D3.js forensic dashboard featuring interactive Sankey diagrams and an automated Suspicious Activity Report (SAR) generator for real-time risk scoring.",
    technologies: ["PyTorch Geometric", "Flask", "D3.js", "GNN", "Blockchain"],
    features: [
      "3-layer GCN for wallet behavior classification",
      "Detection of smurfing, peeling chains, and mule networks",
      "Interactive D3.js forensic dashboard with Sankey diagrams",
      "Automated SAR generator surfacing top 50+ high-risk anomalies per batch",
      "Reduced manual transaction-analysis time by ~40%",
    ],
    challenges:
      "Training the GCN to reliably distinguish between legitimate high-volume wallets and laundering patterns required careful feature engineering and validation across multiple transaction typologies.",
    github: "https://github.com/RitiGrover/Smurfing-HUnters",
    demo: null,
    category: "AI/ML",
  },
  {
    id: "timetable-ai",
    name: "TIMETABLE AI",
    tagline: "Constraint-based scheduling system for students",
    shortDescription:
      "A constraint-driven platform that generates conflict-free timetables using CSP methodologies with a modular FastAPI backend.",
    problem:
      "Academic scheduling under complex dependency constraints — room availability, instructor preferences, student conflicts — is a combinatorial problem that manual approaches cannot solve reliably at scale.",
    approach:
      "Architected a modular FastAPI/Python backend implementing an optimized CSP solver with backtracking search, Minimum Remaining Values (MRV) heuristics, and forward checking, paired with a responsive HTML/CSS/JavaScript frontend for intuitive interaction.",
    technologies: ["FastAPI", "Python", "JavaScript", "CSP", "HTML/CSS"],
    features: [
      "Constraint Satisfaction Problem (CSP) solver for robust scheduling",
      "Backtracking search with MRV heuristics and forward checking",
      "Modular backend with separated solver, graph, and metrics components",
      "Responsive HTML/CSS/JavaScript frontend",
      "Conflict-free timetable generation under complex constraints",
    ],
    challenges:
      "Balancing solver performance with constraint complexity required iterating on heuristic strategies and implementing forward checking to prune the search space without sacrificing solution quality.",
    github: "https://github.com/RitiGrover/Timetable-AI",
    demo: null,
    category: "Software",
  },
];

export const certifications = [
  {
    id: "data-analytics",
    name: "Data Analytics Foundations",
    issuer: "DeepLearning.AI",
    year: "2025",
    credentialId: "",
    image: "/certificates/data-analytics.pdf",
    description:
      "Foundational concepts in data analytics, covering data collection, processing, visualization, and deriving actionable insights.",
  },
  {
    id: "java-fundamentals",
    name: "Fundamentals of Java Programming",
    issuer: "Board Infinity",
    year: "2025",
    credentialId: "",
    image: "/certificates/java-fundamentals.pdf",
    description:
      "Core Java programming concepts including object-oriented design, data structures, and application development fundamentals.",
  },
  {
    id: "ibm-databases",
    name: "Integrating with Structured Databases",
    issuer: "IBM SkillsBuild",
    year: "2025",
    credentialId: "",
    image: "/certificates/ibm-databses.pdf",
    description:
      "Practical skills for integrating applications with structured databases, covering SQL, schema design, and data management.",
  },
  {
    id: "ibm-linux",
    name: "Linux on IBM LinuxONE",
    issuer: "IBM SkillsBuild",
    year: "2025",
    credentialId: "",
    image: "/certificates/ibm-linux.pdf",
    description:
      "Linux administration and operations on IBM LinuxONE platform, covering system management and enterprise deployment.",
  },
];

export const leadership = [
  {
    role: "Vice President",
    organization: "LitSoc — Literature Society",
    period: "2024 – 2026",
    description:
      "Leading the Literature Society at MIT Bengaluru — organizing literary events, managing the team, and fostering a culture of creative expression and intellectual discussion across campus.",
  },
  {
    role: "Social Media Manager",
    organization: "OtakuSpot — Pop Culture Club",
    period: "2024 – 2026",
    description:
      "Managing social media strategy and content creation for OtakuSpot, driving engagement and community growth through consistent, creative cross-platform content.",
  },
  {
    role: "Executive Member",
    organization: "IEEE Computer Society",
    period: "2024 – 2026",
    description:
      "Contributing to IEEE Computer Society activities at MIT Bengaluru — organizing technical events, workshops, and fostering professional development among members.",
  },
  {
    role: "Organising Committee",
    organization: "TechSolstice — Technical Fest",
    period: "2024 – 2026",
    description:
      "Part of the organising committee for TechSolstice, MIT Bengaluru's technical fest — coordinating logistics, event planning, and ensuring smooth execution of technical competitions and workshops.",
  },
  {
    role: "Content Writer",
    organization: "PCB — Photography Club",
    period: "2024 – 2026",
    description:
      "Creating written content for the Photography Club at MIT Bengaluru — crafting event descriptions, social media copy, and editorial pieces that complement visual storytelling.",
  },
  {
    role: "Marketing Team",
    organization: "Radar — Robotics Club",
    period: "2024 – 2026",
    description:
      "Driving visibility and engagement for Radar, the Robotics Club at MIT Bengaluru, through strategic outreach, event promotion, and content — expanding the club's reach across campus.",
  },
];

export const skills = {
  "Technical Skills": [
    "Python",
    "Java",
    "FastAPI",
    "Flask",
    "PyTorch Geometric",
    "D3.js",
    "Graph Neural Networks",
    "Transformers",
    "Constraint Satisfaction Problems",
    "SQL",
    "HTML/CSS",
    "Data Analysis",
    "Data Visualization",
    "Git",
    "Excel",
    "C",
  ],
  "Core Competencies": [
    "Leadership",
    "Team Management",
    "Strategic Thinking",
    "Communication",
    "Public Speaking",
    "Event Planning",
    "Marketing",
    "Content Strategy",
    "Adaptability",
    "Creativity",
  ],
};

export const education = [
  {
    institution: "Manipal Institute of Technology",
    degree: "B.Tech in Computer Science (Information Technology), CGPA: 8.70",
    location: "Bengaluru, Karnataka",
    period: "2024–2028",
  },
  {
    institution: "RS Memorial Higher Secondary School",
    degree: "PCM — Class XII: 81%",
    location: "Katni, Madhya Pradesh",
    period: "2023–2024",
  },
];
