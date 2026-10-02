/**
 * ============================================================================
 * AMIT KUMAR PORTFOLIO - MAIN DATA SOURCE
 * ============================================================================
 * Single source of truth for all data displayed across the portfolio.
 * Organized into structured TypeScript interfaces and exported data arrays.
 * 
 * TABLE OF CONTENTS:
 * ----------------------------------------------------------------------------
 * 1. TYPES & INTERFACES      - TypeScript data contracts
 * 2. PERSONAL INFORMATION    - Contact details, bio, & education summary
 * 3. TECHNICAL SKILLS        - Categorized skills with proficiency levels
 * 4. FEATURED PROJECTS       - Portfolio projects (KrishiMitra, Agentra, Amazon)
 * 5. CERTIFICATIONS          - Verified credentials & course completions
 * 6. ACHIEVEMENTS            - Hackathons, competitive coding, & honors
 * 7. WORK & EDUCATION        - Career timeline, internships, & training
 * 8. TESTIMONIALS            - Recommendations from faculty & peers
 * ============================================================================
 */

/* ============================================================================
 * 1. TYPES & INTERFACES
 * ============================================================================
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'Full Stack' | 'AI / Smart Systems' | 'Systems & C++';
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  highlights: string[];
  image: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { 
    name: string; 
    level: number; 
    icon?: string; 
    description?: string; 
  }[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verifyUrl?: string;
  badgeColor: string;
  skillsLearned: string[];
  description?: string;
  image?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  date: string;
  badge: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Education' | 'Training & Projects' | 'Leadership' | 'Internship' | 'Projects';
  description: string;
  keyAchievements: string[];
  skills: string[];
}

/* ============================================================================
 * 2. PERSONAL INFORMATION & BIO
 * ============================================================================
 */

export const PERSONAL_INFO = {
  name: "Amit Kumar",
  title: "Computer Science Engineering Student",
  roleTagline: "Full Stack Developer | Java & DSA Enthusiast",
  about: "Dynamic Computer Science undergraduate with strong problem-solving and system optimization skills. Proficient in C++, Java, HTML5/CSS, and JavaScript, with experience in React, Node.js, and the MERN stack. Experienced in full-stack and Android application development, distributed systems, and DevOps automation, with a focus on scalable, efficient solutions and collaborative teamwork.",
  careerObjective: "Seeking challenging opportunities as a Software Development Engineer (SDE), Full Stack Developer, Backend Engineer, or Android Developer where I can leverage my problem-solving skills to build impactful and scalable software products.",
  location: "Mohali / Punjab, India",
  email: "amitkush394@gmail.com",
  phone: "+91 8292011844",
  github: "https://github.com/amitkush01",
  linkedin: "https://linkedin.com/in/am444",
  twitter: "https://x.com",
  education: {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "CGC Landran (IKGPTU)",
    duration: "2023 – 2027",
    gpa: "7.13 / 10.0",
    status: "Currently in 4th Year",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/C++)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering"
    ]
  },
  stats: [
    { label: "B.Tech CSE Batch", value: "2023-2027" },
    { label: "Coding Challenges Solved", value: "100+" },
    { label: "Projects Completed", value: "8+" },
  ]
};

/* ============================================================================
 * 3. TECHNICAL SKILLS CATEGORIES
 * ============================================================================
 */

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "Java", level: 90, description: "OOP, Data Structures, Collections, Multithreading" },
      { name: "C++", level: 85, description: "STL, Memory Management, File Handling, Algorithmic Problem Solving" },
      { name: "Python", level: 80, description: "Automation, Scripting, AI/ML basics, Data Manipulation" },
      { name: "JavaScript (ES6+)", level: 88, description: "Async/Await, DOM, Functional Programming, Event Loop" },
      { name: "SQL", level: 82, description: "Complex Queries, Joins, Indexing, Schema Design" }
    ]
  },
  {
    title: "Frontend Development",
    iconName: "Layout",
    skills: [
      { name: "React.js", level: 90, description: "Hooks, Context API, Redux/Zustand, Component Architecture" },
      { name: "Next.js", level: 85, description: "App Router, SSR, SSG, Server Actions, API Routes" },
      { name: "Tailwind CSS", level: 95, description: "Utility-first design, Custom Themes, Responsive Layouts" },
      { name: "HTML5 & CSS3", level: 95, description: "Semantic markup, Flexbox, Grid, Animations, Accessiblity" }
    ]
  },
  {
    title: "Backend & Cloud",
    iconName: "Server",
    skills: [
      { name: "Node.js", level: 82, description: "Event-driven runtime, Express servers, NPM ecosystem" },
      { name: "Express.js", level: 85, description: "RESTful APIs, Middleware, JWT Auth, Error Handling" },
      { name: "REST APIs", level: 90, description: "API Design, Endpoint Architecture, JSON payloads" },
      { name: "AWS Cloud", level: 78, description: "S3, EC2 basics, Cloud Practitioner concepts, Generative AI" },
      { name: "Oracle Cloud Infrastructure", level: 75, description: "OCI AI Foundations, Compute instances, Identity management" }
    ]
  },
  {
    title: "Databases & Tools",
    iconName: "Database",
    skills: [
      { name: "MongoDB", level: 85, description: "NoSQL document store, Mongoose ODM, Aggregations" },
      { name: "MySQL", level: 80, description: "Relational database design, Transactions, Stored procedures" },
      { name: "Firebase", level: 88, description: "Firestore, Authentication, Realtime DB, Cloud Functions" },
      { name: "Git & GitHub", level: 90, description: "Version Control, Branching strategies, PR workflows, Actions" },
      { name: "VS Code & Postman", level: 92, description: "API Testing, Debugging, Extensions, Environment setup" }
    ]
  },
  {
    title: "Core Computer Science",
    iconName: "Cpu",
    skills: [
      { name: "Data Structures & Algorithms", level: 92, description: "Trees, Graphs, Dynamic Programming, Sorting & Searching" },
      { name: "Object-Oriented Programming", level: 90, description: "Inheritance, Polymorphism, Abstraction, Encapsulation, SOLID" },
      { name: "DBMS", level: 85, description: "ER Modeling, Normalization (1NF-3NF), ACID Properties" },
      { name: "Operating Systems", level: 82, description: "Process Scheduling, Deadlocks, Memory Virtualization, Threads" },
      { name: "Computer Networks", level: 80, description: "TCP/IP Stack, OSI Model, HTTP/S protocols, DNS, Sockets" }
    ]
  }
];

/* ============================================================================
 * 4. FEATURED PROJECTS
 * ============================================================================
 * Display Order:
 * 1st: KrishiMitra – Smart Crop Advisory System
 * 2nd: Agentra – Autonomous AI Agents Platform
 * 3rd: Amazon Style E-Commerce Platform
 */

export const PROJECTS: Project[] = [
  {
    id: "krishimitra-crop-advisory",
    title: "KrishiMitra – Smart Crop Advisory System",
    subtitle: "AI-Powered Agriculture Platform for Farmers",
    description: "An intelligent web application that empowers farmers with AI-driven crop recommendations, hyper-local weather alerts, pest identification, and live market price tracking.",
    longDescription: "KrishiMitra bridges the technology gap for agricultural decision-making. Utilizing smart recommendation logic and a Firebase backend, it processes soil parameters and weather data to suggest optimal crops, pest treatments, and real-time mandi prices.",
    tags: ["React.js", "AI Advisory", "Firebase", "Weather API", "Node.js"],
    category: "AI / Smart Systems",
    featured: true,
    demoUrl: "https://krishi-mitra2.vercel.app/",
    githubUrl: "https://github.com/amitkush01/KrishiMitra2",
    highlights: [
      "AI-driven soil & climate crop suitability recommendation engine",
      "Integration with live weather forecasting APIs for agricultural alerts",
      "Pest & disease detection interface with preventive advice guide",
      "Real-time market price (Mandi Bhav) tracking with trend visualization"
    ],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "agentra-ai-platform",
    title: "Agentra – Autonomous AI Agents Platform",
    subtitle: "AI-Powered SaaS Platform for Business Workflow Automation",
    description: "A modern AI-powered autonomous agents platform designed to automate business workflows using specialized AI agents across marketing, sales, HR, and customer service.",
    longDescription: "Agentra is an autonomous AI agents platform engineered to automate complex business workflows. It provides domain-specific AI solutions for marketing (lead gen & campaigns), sales (qualification & CRM follow-ups), HR, and customer service with a high-performance SaaS interface.",
    tags: ["Next.js", "React.js", "AI / LLM APIs", "Tailwind CSS", "TypeScript", "Firebase", "REST APIs"],
    category: "AI / Smart Systems",
    featured: true,
    demoUrl: "https://new-agentra-11.vercel.app/",
    githubUrl: "https://github.com/amitkush01/Agentra",
    highlights: [
      "Domain-specific autonomous AI agents for Marketing, Sales, HR, Customer Service, and Operations",
      "Marketing AI Agent: Lead generation, automated campaign execution, analytics, and content workflows",
      "Sales AI Agent: Lead qualification, automated customer follow-ups, CRM workflows, and sales assistance",
      "24/7 intelligent business process automation with responsive, interactive SaaS dashboard",
      "Dedicated portal sections for AI agents, feature breakdown, pricing, demo, documentation, and support"
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "amazon-ecommerce",
    title: "Amazon Style E-Commerce Platform",
    subtitle: "Full-Stack Shopping Platform with Real-time Cart & Checkout",
    description: "A feature-rich e-commerce web application inspired by Amazon, providing seamless product browsing, category filtering, cart management, and secure Firebase user authentication.",
    longDescription: "Engineered with React.js and Firebase, this platform delivers an end-to-end online shopping experience. Includes dynamic product searching, shopping cart state management, responsive UI inspired by top modern marketplaces, and cloud-hosted authentication.",
    tags: ["React.js", "Firebase", "Authentication", "Tailwind CSS", "JavaScript"],
    category: "Full Stack",
    featured: true,
    demoUrl: "https://amazon-clone-demo.vercel.app",
    githubUrl: "https://github.com/amitkumar/amazon-ecommerce-clone",
    highlights: [
      "Real-time Firebase Authentication (Email/Password & Google Sign-In)",
      "Persistent state management for Shopping Cart and Checkout workflows",
      "Dynamic product catalog with instant search filtering & rating badges",
      "100% responsive modern design optimized for mobile and desktop screens"
    ],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop"
  }
];

/* ============================================================================
 * 5. CERTIFICATIONS & COURSES
 * ============================================================================
 */

export const CERTIFICATES: Certificate[] = [
  {
    id: "sih-2025-internal",
    title: "Smart India Hackathon 2025 – Internal Round",
    issuer: "CGC Landran / Ministry of Education",
    issueDate: "2025",
    badgeColor: "from-purple-500 to-fuchsia-600",
    skillsLearned: ["Full Stack Development", "System Architecture", "Problem Solving", "Team Collaboration"],
    description: "Smart India Hackathon 2025 – Internal Round\n\nDesigned and pitched an innovative full-stack solution using modern web technologies, focusing on scalable architecture, real-world problem solving, and user-centric application development while collaborating in a cross-functional team.",
    image: "/images/certificates/sih-2025.png"
  },
  {
    id: "cisco-cybersecurity",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    issueDate: "2026",
    badgeColor: "from-sky-500 to-blue-600",
    skillsLearned: ["Cyber Threats", "Network Security", "Risk Management", "Secure Online Practices"],
    description: "Introduction to Cybersecurity – Cisco Networking Academy\n\nCompleted Cisco's Introduction to Cybersecurity course, gaining foundational knowledge of cyber threats, network security, risk management, secure online practices, and essential cybersecurity principles for protecting digital systems.",
    image: "/images/certificates/cisco-cyber.png"
  },
  {
    id: "nasscom-digital-edge",
    title: "Digital Edge 101 – NASSCOM FutureSkills Prime",
    issuer: "NASSCOM & MeitY",
    issueDate: "2026",
    badgeColor: "from-blue-600 to-indigo-700",
    skillsLearned: ["Digital Literacy", "Emerging Technologies", "Problem Solving", "Professional Communication"],
    description: "Digital Edge 101 – NASSCOM FutureSkills Prime\n\nSuccessfully completed NASSCOM FutureSkills Prime Digital Edge 101, building essential digital, professional, and workplace skills with a strong foundation in emerging technologies, communication, problem-solving, and career readiness.",
    image: "/images/certificates/nasscom-digital-edge.png"
  },
  {
    id: "codealpha-internship",
    title: "Full Stack Development Virtual Internship – CodeAlpha",
    issuer: "CodeAlpha",
    issueDate: "2026",
    badgeColor: "from-blue-600 to-cyan-600",
    skillsLearned: ["MERN Stack", "Backend APIs", "Database Integration", "Version Control"],
    description: "Full Stack Development Virtual Internship – CodeAlpha\n\nGained hands-on experience in designing and developing full-stack web applications using the MERN stack, implementing responsive UI, backend APIs, database integration, authentication, and version control in a collaborative development environment.",
    image: "/images/certificates/codealpha-internship.png"
  },
  {
    id: "ncat-2026",
    title: "All India NCAT 2026 – Naukri Campus",
    issuer: "Naukri Campus",
    issueDate: "2026",
    credentialId: "6a19aca1542fee52d1242370",
    badgeColor: "from-pink-500 to-rose-600",
    skillsLearned: ["Analytical Thinking", "Quantitative Aptitude", "Logical Reasoning", "Problem Solving"],
    description: "All India NCAT 2026 – Naukri Campus\n\nParticipated in India's largest career aptitude assessment, demonstrating analytical thinking, quantitative aptitude, logical reasoning, verbal ability, and problem-solving skills aligned with industry hiring standards.",
    image: "/images/certificates/ncat-2026.png"
  },
  {
    id: "mindhack-2025",
    title: "MindHack 2025 – Phoenix Club, CEC CGC Landran",
    issuer: "CEC CGC Landran",
    issueDate: "2025",
    badgeColor: "from-amber-500 to-yellow-600",
    skillsLearned: ["Analytical Thinking", "Technical Problem-Solving", "Innovation", "Computer Science"],
    description: "MindHack 2025 – Phoenix Club, CEC CGC Landran\n\nParticipated in MindHack 2025, demonstrating analytical thinking, technical problem-solving, and innovation while collaborating in a competitive computer science event organized by the Department of Computer Science & Engineering.",
    image: "/images/certificates/mindhack-2025.png"
  },
  {
    id: "aws-genai",
    title: "AWS Academy Graduate – Generative AI Foundations",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "2025",
    credentialId: "AWS-GENAI-2025-AK",
    verifyUrl: "https://www.credly.com/badges/2eb244e9-5728-47f8-a9cf-04d1ce99d7c",
    badgeColor: "from-amber-500 to-orange-600",
    skillsLearned: ["Generative AI", "AWS Bedrock", "Prompt Engineering", "Large Language Models", "Cloud AI Architecture"],
    description: "AWS Academy Graduate – Generative AI Foundations\n\nSuccessfully completed AWS Academy's Generative AI Foundations program, gaining expertise in Generative AI, Large Language Models (LLMs), prompt engineering, responsible AI, and AWS cloud services for building AI-powered applications.",
    image: "/images/certificates/aws-genai.png"
  },
  {
    id: "oci-ai-assoc",
    title: "Oracle Cloud Infrastructure AI Foundations Associate",
    issuer: "Oracle Corporation",
    issueDate: "2025",
    credentialId: "OCI-AI-883921-AK",
    verifyUrl: "https://mylearn.oracle.com",
    badgeColor: "from-red-600 to-rose-700",
    skillsLearned: ["OCI AI Services", "Machine Learning Workflows", "Computer Vision", "Natural Language Processing"],
    description: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate\n\nEarned Oracle's AI Foundations certification, demonstrating proficiency in Artificial Intelligence, Machine Learning fundamentals, Generative AI, Large Language Models (LLMs), Responsible AI, and Oracle Cloud Infrastructure (OCI) AI services.",
    image: "/images/certificates/oracle-ai.png"
  },
  {
    id: "mongodb-python",
    title: "MongoDB with Python Developer Certification",
    issuer: "MongoDB University",
    issueDate: "2023",
    credentialId: "MDB-PY-9941-AK",
    verifyUrl: "https://university.mongodb.com",
    badgeColor: "from-emerald-500 to-teal-600",
    skillsLearned: ["PyMongo", "NoSQL Data Modeling", "Indexing & Optimization"],
    description: "Using MongoDB with Python\n\nSuccessfully completed the \"Using MongoDB with Python\" course, gaining hands-on experience in MongoDB database operations, CRUD functionality, and Python integration for database-driven applications.",
    image: "/images/certificates/mongodb-new.png"
  },
  {
    id: "mern-stack",
    title: "MERN Stack Development – ASB Academy & CGC Landran",
    issuer: "ASB Academy & CGC Landran",
    issueDate: "2025",
    badgeColor: "from-blue-600 to-indigo-700",
    skillsLearned: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Security", "REST API Design"],
    description: "MERN Stack Development – ASB Academy & CGC Landran\n\nSuccessfully completed an intensive 4-week MERN Stack Development program, gaining hands-on experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js while following industry-standard development practices.",
    image: "/images/certificates/mern-stack.jpg"
  }
];

/* ============================================================================
 * 6. ACHIEVEMENTS & HONORS
 * ============================================================================
 */

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "sih-hackathon",
    title: "Smart India Hackathon Participant",
    organization: "Ministry of Education, Govt. of India",
    description: "Selected to participate in the prestigious national level hackathon, collaborating on real-world problem statements with real-time software prototyping.",
    date: "2024",
    badge: "National Hackathon"
  },
  {
    id: "dsa-problem-solver",
    title: "Strong DSA Problem Solver (100+ Solved)",
    organization: "LeetCode & GeeksforGeeks",
    description: "Consistently solved algorithmic challenges covering Data Structures, Dynamic Programming, Graph Theory, and Tree Traversal algorithms.",
    date: "Ongoing",
    badge: "Competitive Coding"
  },
  {
    id: "academic-excellence",
    title: "B.Tech CSE Core Academic Track",
    organization: "CGC Landran (IKGPTU)",
    description: "Maintained a strong academic record with specialization in Software Engineering, DBMS, Computer Networks, and Object Oriented Programming.",
    date: "2023–Present",
    badge: "Academic Honor"
  }
];

/* ============================================================================
 * 7. EXPERIENCE & EDUCATION TIMELINE
 * ============================================================================
 */

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-0",
    role: "Full Stack Development Intern",
    company: "CodeAlpha",
    period: "December 2025 – January 2026",
    location: "Remote",
    type: "Internship",
    description: "Successfully completed a 1-month Full Stack Development Internship at CodeAlpha, where I gained practical experience in developing responsive web applications, building RESTful APIs, integrating databases, and following modern software development practices.",
    keyAchievements: [
      "Developed responsive and interactive web applications using React.js, HTML5, CSS3, and JavaScript (ES6+)",
      "Built backend services and RESTful APIs using Node.js and Express.js",
      "Worked with MongoDB for database design, CRUD operations, and data management",
      "Implemented clean, reusable, and modular code following best development practices",
      "Used Git & GitHub for version control and project management",
      "Improved debugging, problem-solving, and full-stack development skills by working on real-world tasks"
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML5", "CSS3", "Git", "GitHub", "REST APIs"]
  },
  {
    id: "exp-2",
    role: "Full Stack Developer Trainee (MERN Stack)",
    company: "CGC Landran × ASB Academy",
    period: "May 2026 – June 2026",
    location: "Mohali, Punjab",
    type: "Training & Projects",
    description: "Successfully completed a 4-week MERN Stack Development Training, where I built full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Gained practical experience in frontend development, backend APIs, database management, authentication, and version control.",
    keyAchievements: [
      "Developed responsive web applications using React.js and Tailwind CSS",
      "Built scalable RESTful APIs using Node.js and Express.js",
      "Designed and managed MongoDB databases with CRUD operations",
      "Integrated frontend and backend with secure authentication",
      "Used Git & GitHub for version control and project collaboration",
      "Applied modern JavaScript (ES6+), HTML5, and CSS3 best practices"
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Git", "GitHub", "Tailwind CSS", "REST API"]
  },
  {
    id: "exp-3",
    role: "Personal Projects",
    company: "Independent Developer",
    period: "2025 – Present",
    location: "Remote",
    type: "Projects",
    description: "Developing modern web applications to solve real-world problems and continuously enhancing technical skills.",
    keyAchievements: [
      "Built KrishiMitra – AI Smart Crop Advisory System.",
      "Developed an Agentra – Autonomous AI Agents SaaS Platform.",
      "Developed an Amazon Style E-Commerce Platform.",
      "Designed responsive UI using React.js, Next.js, and Tailwind CSS.",
      "Integrated Firebase Authentication and MongoDB.",
      "Built reusable components and REST APIs."
    ],
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase", "REST APIs"]
  },
  {
    id: "exp-1",
    role: "B.Tech Computer Science Engineering Student",
    company: "CGC Landran (IKGPTU)",
    period: "2023 – 2027 (Expected)",
    location: "Mohali, Punjab",
    type: "Education",
    description: "Pursuing B.Tech in Computer Science Engineering with a strong foundation in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Full Stack Web Development. Passionate about building scalable software solutions and continuously improving problem-solving skills.",
    keyAchievements: [
      "CGPA: 7.13 / 10",
      "Built multiple academic and personal software projects",
      "Active participant in coding contests, hackathons, and technical workshops",
      "Focused on DSA, DBMS, Operating Systems, Computer Networks, and Web Development"
    ],
    skills: ["Java", "DSA", "C++", "DBMS", "Operating Systems", "Computer Networks"]
  }
];

/* ============================================================================
 * 8. TESTIMONIALS & RECOMMENDATIONS
 * ============================================================================
 */

export const TESTIMONIALS = [
  {
    quote: "Amit is an outstanding engineering student with a clear grasp of Data Structures, Java, and modern web frameworks. His project work demonstrates both technical rigor and product intuition.",
    author: "Prof. Computer Science Dept.",
    role: "Faculty Advisor",
    company: "CGC Landran"
  },
  {
    quote: "Working with Amit on hackathon projects was fantastic. He delivers clean code, resolves algorithmic bottlenecks quickly, and builds sleek user interfaces under tight deadlines.",
    author: "Hackathon Teammate",
    role: "Full Stack Peer",
    company: "Smart India Hackathon Team"
  },
  {
    quote: "Amit's dedication to cloud computing certifications and hands-on React/Firebase applications makes him a top candidate for Software Engineering roles.",
    author: "Tech Mentor",
    role: "Senior Software Engineer",
    company: "Industry Mentor"
  }
];
