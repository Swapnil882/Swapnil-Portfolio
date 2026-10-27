export const siteUrl = (() => {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
})();

export const siteConfig = {
  name: "Swapnil Dalavi",
  title: "Swapnil Dalavi | Python Developer & Data Science Enthusiast",
  description:
    "Portfolio of Swapnil Dalavi, a Python Developer and Data Science Enthusiast building scalable backend architectures, REST APIs, and data-driven solutions.",
  jobTitle: "Python Developer & Data Science Enthusiast",
  location: "Kolhapur, Maharashtra, India",
  email: "swapnildalavi0882@gmail.com",
  phone: "+91 9022458986",
  twitterHandle: "@swapnildalavi",
  keywords: [
    "Swapnil Dalavi",
    "Python Developer",
    "Data Science Enthusiast",
    "FastAPI Developer",
    "Backend Developer",
    "Machine Learning",
    "Generative AI",
    "PostgreSQL",
    "SQL",
    "REST APIs",
    "Docker",
    "Portfolio",
    "Kolhapur",
    "India",
  ],
  socials: [
    "https://github.com/Swapnil882",
    "https://linkedin.com/in/swapnil-dalavi",
  ],
} as const;
