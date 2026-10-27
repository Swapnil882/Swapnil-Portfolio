import { Mail, Phone, MapPin, LucideIcon } from 'lucide-react';

export interface Experience {
  company: string;
  duration: string;
  role: string;
  location: string;
  highlights: string[];
  dotColor: string;
}

export interface Stat {
  title: string;
  label: string;
}

export interface IconAndText {
  icon: LucideIcon;
  name: string;
}

export interface Blog {
  image: string;
  button: string;
  name: string;
  date: string;
  title: string;
}

export interface PortfolioItem {
  image: string;
  title: string;
  href: string;
  desc: string;
  tags: string[];
  category?: string[];
  liveDemo: string;
  github: string;
  caseStudy: string;
}

export interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
}

export interface CardData {
  title: string;
  description: string;
  tech: string[];
  imageSrc?: string;
}

export const contact = {
  email: "swapnildalavi0882@gmail.com",
  phone: "+91 9022458986",
  location: "Kolhapur, Maharashtra, India",
  github: "https://github.com/Swapnil882",
  linkedin: "https://linkedin.com/in/swapnil-dalavi",
  twitter: "",
  instagram: "",
  youtube: "",
  leetcode: "",
  resume: "#",
};

export const navItems: string[] = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Contact",
];

export const hero = {
  badge: "Hello 👋",
  prefix: "I'm",
  name: "Swapnil",
  lastName: "Dalavi,",
  headline: "Python Developer & AI Engineer",
  intro:
    "Building scalable applications, robust backend systems, and intelligent AI solutions that solve real-world problems.",
  quoteLine1: "I don't just write code.",
  quoteLine2: "I build scalable backend systems & intelligent AI solutions.",
  years: "1 Year",
  experienceLabel: "Experience",
};

export const servicesData: CardData[] = [
  {
    title: "Backend Development",
    description:
      "Designing scalable REST APIs, microservices, and robust backend logic with Python and FastAPI.",
    tech: ["Python", "FastAPI", "Django", "Flask", "REST APIs"],
    imageSrc: "/backend_development.svg",
  },
  {
    title: "Data Science & Analytics",
    description:
      "Applying exploratory data analysis, data wrangling, and predictive modeling using Pandas, NumPy and SQL.",
    tech: ["Pandas", "NumPy", "SQL", "EDA", "Data Visualization"],
    imageSrc: "/performance_optimization.svg",
  },
  {
    title: "AI & Generative AI",
    description:
      "Building intelligent AI-powered workflows, LangChain applications, OpenAI GPT integrations, and RAG pipelines.",
    tech: ["Generative AI", "LangChain", "OpenAI GPT", "Gemini", "NLP"],
    imageSrc: "/ai_integration.svg",
  },
  {
    title: "Database Design & SQL",
    description:
      "Modeling relational & NoSQL schemas, query optimization, indexing, and spatial data with PostgreSQL and PostGIS.",
    tech: ["PostgreSQL", "MySQL", "MongoDB", "PostGIS", "Query Tuning"],
    imageSrc: "/database_design.svg",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Containerizing Python services with Docker, unit testing with Pytest, and managing cloud storage with AWS S3.",
    tech: ["AWS S3", "Docker", "Pytest", "Git", "Linux"],
    imageSrc: "/cloud_devops.svg",
  },
  {
    title: "Frontend & Web Integration",
    description:
      "Building responsive UI dashboards and integrating backend APIs smoothly with React and JavaScript.",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive UI"],
    imageSrc: "/frontend_development.svg",
  },
];

export const experiences: Experience[] = [
  {
    company: "Walstar Technologies Pvt. Ltd",
    duration: "Jun 2025 – Present",
    role: "Backend Developer — Bynaus AI",
    location: "Kolhapur, Maharashtra",
    highlights: [
      "Built Python/FastAPI backend for Bynaus AI (Construction Takeoff Platform), automating quantity takeoff from construction drawings with human verification for estimators.",
      "Engineered backend microservices and APIs for Walstar Education (School SaaS), enabling multi-tenant school onboarding, student/staff records management, and automated AI exam question generation.",
      "Built takeoff verification APIs: accept/reject/correct AI quantities, bulk review, and CSV/XLSX export for estimating workflows.",
      "Hardened geometry and sheet extraction pipelines (PostGIS spatial queries, S3 recovery, timeout handling, MongoDB fallback) across companion and vector-engine services.",
      "Improved PDF architectural vector detection (walls, doors) and callback reliability with retry/DLQ patterns.",
      "Added Pytest coverage and merged mission-critical production PRs on bynaus-ai-companion and bynausai-vector-engines repositories.",
    ],
    dotColor: "bg-[#FD853A]",
  },
  {
    company: "Celebal Technologies",
    duration: "Jun 2025 – Aug 2025",
    role: "Intern (Python & NLP)",
    location: "Remote / India",
    highlights: [
      "Developed an intelligent movie review sentiment analysis system using NLP and Machine Learning to classify reviews as positive, negative, or neutral.",
      "Collected and processed large datasets of movie reviews, performed text preprocessing and feature extraction, and built sentiment classification models to generate audience opinion insights and trend analytics.",
    ],
    dotColor: "bg-[#344054]",
  },
  {
    company: "Earth Logic Ware Technologies",
    duration: "Jun 2024 – Aug 2024",
    role: "Data Science & ML Intern",
    location: "Kolhapur, Maharashtra",
    highlights: [
      "Developed ML models for prediction and classification on real-world datasets.",
      "Applied NLP techniques for text analytics and sentiment analysis pipelines.",
      "Automated data workflows and built reusable Python scripts for data processing.",
      "Collaborated with the team to deliver project demos and technical documentation.",
    ],
    dotColor: "bg-[#FD853A]",
  },
];

export const stats: Stat[] = [
  { title: "15+", label: "Projects Completed" },
  { title: "1", label: "Year Experience" },
  { title: "10+", label: "Technologies Used" },
];

export const buttons: string[] = [
  "All",
  "AI/ML",
  "Backend",
  "Web Apps",
  "Data Science",
];

export const iconAndText: IconAndText[] = [
  {
    icon: Mail,
    name: "swapnildalavi0882@gmail.com",
  },
  {
    icon: Phone,
    name: "+91 9022458986",
  },
  {
    icon: MapPin,
    name: "Kolhapur, Maharashtra, India",
  },
];

export const skills: string[] = [
  "Python",
  "FastAPI",
  "Django",
  "Flask",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Machine Learning",
  "Generative AI",
  "LangChain",
  "NLP",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "SQL Optimization",
  "REST APIs",
  "Docker",
  "AWS S3",
  "Pytest",
  "Git & GitHub",
  "JavaScript",
  "React.js",
];

export const blogs: Blog[] = [
  {
    image: "/Rectangle 6.svg",
    button: "Read More",
    name: "Swapnil Dalavi",
    date: "12 Jan, 2026",
    title: "Building Production Backend Services with FastAPI",
  },
  {
    image: "/Frame 60.svg",
    button: "Read More",
    name: "Swapnil Dalavi",
    date: "08 Feb, 2026",
    title: "SQL Query Optimization & Database Indexing in PostgreSQL",
  },
  {
    image: "/Rectangle 6 (1).svg",
    button: "Read More",
    name: "Swapnil Dalavi",
    date: "15 Mar, 2026",
    title: "Deploying Generative AI & RAG Applications with Python",
  },
  {
    image: "/Frame 26.svg",
    button: "Read More",
    name: "Swapnil Dalavi",
    date: "20 Apr, 2026",
    title: "Machine Learning Pipelines: Preprocessing to Model Serving",
  },
  {
    image: "/Frame 68.svg",
    button: "Read More",
    name: "Swapnil Dalavi",
    date: "02 Jun, 2026",
    title: "Docker Containerization for Modern Python Developers",
  },
];

export const portfolioData: PortfolioItem[] = [
  {
    image: "/bynaus_dashboard.svg",
    title: "Bynaus AI",
    href: "#",
    desc: "AI platform automating quantity takeoff from construction drawings with human verification for estimators. Built Python/FastAPI backend for takeoff verification APIs, sheet scraping, PostGIS geometry extraction, and AWS S3 storage.",
    tags: ["Python", "FastAPI", "MongoDB", "PostgreSQL", "PostGIS", "AWS S3", "Pytest"],
    category: ["AI/ML", "Backend", "Web Apps"],
    liveDemo: "",
    github: "#",
    caseStudy: "#",
  },
  {
    image: "/walstar_education.png",
    title: "Walstar Education",
    href: "#",
    desc: "Multi-tenant School Cloud SaaS platform where schools can register and auto-generate dedicated portals to manage student records, staff workflows, and generate automated AI question papers and auto-graded exams with analytics.",
    tags: ["Python", "FastAPI", "PostgreSQL", "AI Question Gen", "React", "REST APIs"],
    category: ["AI/ML", "Backend", "Web Apps"],
    liveDemo: "",
    github: "",
    caseStudy: "",
  },
  {
    image: "/chatbot_support.png",
    title: "Generative AI Chatbot",
    href: "#",
    desc: "Automated chatbot generation system that crawls website URLs, processes extracted text, and generates embeddable real-time customer interaction script using LLMs and dynamic code synthesis.",
    tags: ["Python", "FastAPI", "React.js", "NLP", "Web Crawling", "SQL"],
    category: ["AI/ML", "Backend", "Web Apps"],
    liveDemo: "#",
    github: "https://github.com/Swapnil882",
    caseStudy: "#",
  },
  {
    image: "/news_feedback.png",
    title: "360° Feedback System",
    href: "#",
    desc: "Large-scale feedback system collecting and analyzing input from citizens, media, and officials via digital surveys, utilizing sentiment analysis and interactive data visualization to improve news reach and accuracy.",
    tags: ["Python", "MySQL", "JavaScript", "HTML/CSS", "Data Viz"],
    category: ["Data Science", "Web Apps", "AI/ML"],
    liveDemo: "#",
    github: "https://github.com/Swapnil882",
    caseStudy: "#",
  },
  {
    image: "/movie_sentiment.png",
    title: "Movie Sentiment Analysis",
    href: "#",
    desc: "Intelligent movie review sentiment analysis system using NLP and Machine Learning to classify reviews as positive, negative, or neutral, extracting audience insights and trend analytics.",
    tags: ["Python", "FastAPI", "MySQL", "NLP", "Scikit-learn"],
    category: ["AI/ML", "Data Science", "Backend"],
    liveDemo: "#",
    github: "https://github.com/Swapnil882",
    caseStudy: "#",
  },
];

export const reviews: Review[] = [
  {
    name: "Pravin Povar",
    role: "Manager, Walstar Technologies",
    rating: 5,
    text: "Swapnil consistently delivers high-quality backend and AI solutions. His work on Python, FastAPI, and database architecture has been reliable, well-architected, and production-ready.",
  },
  {
    name: "Tejas Varute",
    role: "Team Leader, Walstar Technologies",
    rating: 5,
    text: "Swapnil is a dependable developer who tackles complex backend and data features with confidence. His strong grasp of Python, FastAPI, and database optimization made our sprints significantly smoother.",
  },
  {
    name: "Langmanna Sir",
    role: "Assistant Manager, Walstar Technologies",
    rating: 5,
    text: "Swapnil is proactive, detail-oriented, and technically sharp. He consistently meets sprint deadlines and elevates the engineering quality of every project he contributes to.",
  },
  {
    name: "Talha",
    role: "QA Engineer",
    rating: 5,
    text: "Having worked closely with Swapnil on testing and releases, I can say he writes clean, testable code with great attention to edge cases and Pytest coverage. His APIs are robust and smooth to validate.",
  },
];



