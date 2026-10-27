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
  headline: "Python Developer & Data Science Enthusiast",
  intro:
    "Python Developer with 1 year of experience building backend services, REST APIs, and ML/AI-driven features in production environments. Currently building scalable backend systems at Walstar Tech using Python, FastAPI, SQL, and PostgreSQL.",
  quoteLine1: "I don't just write code.",
  quoteLine2: "I build scalable backend systems & data-driven solutions.",
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
    duration: "Jan 2026 – Present",
    role: "Python Developer",
    location: "Kolhapur, Maharashtra",
    highlights: [
      "Design and maintain Python backend services and REST APIs powering AI-driven features for production applications.",
      "Develop Python data pipelines for collection, cleaning, and transformation of structured data to support analytics and product decisions.",
      "Apply machine learning workflows (preprocessing, feature engineering, model training and evaluation) to deliver predictive features integrated into backend services.",
      "Write and optimize SQL/PostgreSQL queries and schemas (joins, indexing, aggregations) for efficient data storage and retrieval.",
      "Collaborate with cross-functional teams using Git/GitHub version control to ship end-to-end features spanning Python services, APIs, and database layers.",
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
    desc: "AI-powered construction management platform featuring OCR, vector search, voice reporting and a microservices architecture.",
    tags: ["React", "Node.js", "AWS", "Docker", "MongoDB", "PostGIS", "FastAPI"],
    category: ["AI/ML", "Backend", "Web Apps"],
    liveDemo: "https://app.bynaus.ai/",
    github: "#",
    caseStudy: "#",
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
  {
    image: "/resume_screening.png",
    title: "AI Resume Screening",
    href: "#",
    desc: "AI-powered recruitment system featuring resume parsing, skill extraction, candidate ranking, and job matching analytics using NLP and Scikit-learn.",
    tags: ["Python", "FastAPI", "NLP", "Scikit-learn", "Machine Learning"],
    category: ["AI/ML", "Backend"],
    liveDemo: "#",
    github: "https://github.com/Swapnil882",
    caseStudy: "#",
  },
  {
    image: "/car_rental.png",
    title: "Car Rental System",
    href: "#",
    desc: "Designed and developed a Car Rental System with user login, booking, automated rental cost calculation, and an admin panel for fleet management.",
    tags: ["Python", "MySQL", "JavaScript", "HTML5", "CSS3"],
    category: ["Web Apps", "Backend"],
    liveDemo: "#",
    github: "https://github.com/Swapnil882",
    caseStudy: "#",
  },
];

export const reviews: Review[] = [
  {
    name: "Vishal Randive",
    role: "Manager, Walstar Technologies",
    rating: 5,
    text: "Swapnil consistently delivers high-quality backend and AI solutions. His work on Python, FastAPI and database architecture has been reliable, well-architected and production-ready.",
  },
  {
    name: "Prathamesh Patil",
    role: "QA Engineer",
    rating: 5,
    text: "Having worked closely with Swapnil, I can say he writes clean, testable code with great attention to edge cases and unit testing. He is a fantastic teammate.",
  },
  {
    name: "Corey Cawthron",
    role: "Collaborator",
    rating: 5,
    text: "Swapnil contributed significantly to our AI and data workflows. Clean code, thoughtful backend architecture and fast API responses throughout. He is a joy to work with.",
  },
  {
    name: "Vikas Vitekari",
    role: "Team Lead",
    rating: 5,
    text: "Swapnil is a dependable developer who tackles complex backend and data features with confidence. His strong grasp of Python and database optimization made our sprints smoother.",
  },
  {
    name: "Sana Jamadar",
    role: "Assistant Manager, Walstar Technologies",
    rating: 5,
    text: "Swapnil is proactive, detail-oriented and technically sharp. He consistently meets deadlines and elevates the quality of every project he contributes to.",
  },
];



