/**
 * Portfolio data for Somil Jain
 * DevOps & AI/ML Engineer | Final Year BTech CSE @ VIT
 */

export interface PersonInfo {
  name: string;
  title: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  email: string;
  university: string;
  degree: string;
  graduationYear: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
  };
  skills: {
    languages: string[];
    osSoftwareTools: string[];
    librariesDatabases: string[];
    devops: string[];
  };
}

export interface Experience {
  id: string;
  company: string;
  companyLogo: string;
  role: string;
  duration: string;
  location: string;
  type: "internship" | "fulltime" | "contract" | "apprenticeship";
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: "devops" | "aiml" | "fullstack" | "other";
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  category: "cloud" | "devops" | "aiml" | "programming" | "other";
  image?: string;
}

export const personalInfo: PersonInfo = {
  name: "Somil Jain",
  title: "DevOps & AI/ML Engineer",
  tagline: "Building intelligent systems with scalable infrastructure",
  heroIntroduction:
    "Final year Computer Science student passionate about automating deployments, building ML pipelines, and creating impactful tech solutions.",
  biography: `I'm a final year BTech Computer Science Engineering student specializing in DevOps practices and AI/ML applications.

My journey in tech started with a curiosity about how systems work at scale. This led me to explore the world of DevOps, where I found my passion for automation, containerization, and cloud infrastructure. Simultaneously, I dove deep into AI/ML, fascinated by how machines can learn and make decisions.

I believe in the power of combining robust infrastructure with intelligent systems. Whether it's setting up CI/CD pipelines, deploying ML models at scale, or building end-to-end applications, I approach every project with a focus on efficiency, reliability, and innovation.

When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.`,
  email: "somiljain2104@gmail.com",
  university: "Vellore Institute of Technology",
  degree: "BTech Computer Science Engineering",
  graduationYear: "2026",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/somil-jain-183ba9247/",
    github: "https://github.com/somil2104",
  },
  skills: {
    languages: ["Python (Proficient)", "C/C++", "JavaScript", "Matlab/R", "HTML/CSS"],
    osSoftwareTools: ["Linux", "Windows", "Git", "Figma", "Canva", "Photoshop"],
    librariesDatabases: [
      "Keras",
      "Node.js",
      "React",
      "JQuery",
      "Numpy",
      "Pandas",
      "PostgreSQL",
      "MongoDB",
      "Firestore",
    ],
    devops: ["AWS", "Jenkins", "GitHub Actions", "Maven", "Docker", "Kubernetes", "Ansible", "Terraform", "Vagrant"],
  },
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "DBS Tech India",
    companyLogo: "https://www.dbs.com/dbstechindia/public/images/decode/white-logo.png?d1",
    role: "AI DevOps Apprentice",
    duration: "Jun 2025 – Present",
    location: "India",
    type: "apprenticeship",
    description:
      "8-month structured apprenticeship covering OS, RDBMS, Application Security, MariaDB, DevOps, Java/Spring Boot, REST, Microservices, Data Analysis, and Big Data (Hive, Hadoop, Spark).",
    achievements: [
      "Designed a hybrid customer segmentation pipeline (rules→MiniBatchKMeans) with MCC-based spend shares, tx per month, amt mean, and online share, improving targeting by 90% and driving segment-specific promotions",
      "Established behavioral risk bands (frequency, ticket size, channel mix, diversity) to approve/deny promotions and exported a single contract (customer_recommendations.csv) for downstream systems",
      "Operationalized with reproducible controllers, pinned Python deps, and container-ready CLIs (XGBoost, scikit-learn), ensuring low-latency scoring and consistent releases",
      "Completing an 8-month structured apprenticeship covering OS, RDBMS, Application Security, MariaDB, DevOps, Java/Spring Boot, REST, Microservices, Data Analysis, and Big Data",
    ],
    technologies: [
      "Python",
      "XGBoost",
      "scikit-learn",
      "Docker",
      "DevOps",
      "Java",
      "Spring Boot",
      "Hadoop",
      "Spark",
      "Hive",
    ],
  },
  {
    id: "exp-2",
    company: "VE Commercial Vehicles Limited",
    companyLogo:
      "https://media.licdn.com/dms/image/v2/D5616AQE6VBaGZxyZcw/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1664441808229?e=2147483647&v=beta&t=DGSvDzfKs6n49glCIn8vjU_C0af5HNpxA5h4bEijJcg",
    role: "Machine Learning Engineering Intern",
    duration: "Oct 2024 – Dec 2024",
    location: "Bhopal, India (Onsite)",
    type: "internship",
    description:
      "Developed computer vision system for automated inspection of industrial dot-peen marked metal surfaces.",
    achievements: [
      "Developed a system using Python, OpenCV, and EasyOCR to extract cabin numbers from images uploaded by users, enabling automated inspection of industrial dot-peen marked metal surfaces across 3 different cabin types",
      "Trained the EasyOCR pretrained model on a custom dataset of industrial images to improve accuracy in recognizing low-contrast, challenging markings, achieving a peak confidence score of 91%",
      "Implemented regex parsing to extract 9-character alphanumeric cabin numbers from OCR results and connected the system to an API for seamless data transfer and management",
    ],
    technologies: ["Python", "OpenCV", "EasyOCR", "Image Processing", "API Integration", "Regex"],
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Dost-Bot | AI-Powered Journal Application",
    slug: "dost-bot",
    category: "aiml",
    description:
      "AI-driven journal web app with sentiment analysis and personalized responses using Google FLAN-T5-large model.",
    longDescription:
      "Engineered an AI-driven journal web app with sentiment analysis and personalized responses using the Google FLAN-T5-large model, leveraging its 780 million parameter architecture for nuanced understanding of user mood and intent.",
    technologies: ["React", "FastAPI", "Hugging Face", "NLP", "Sentiment Analysis"],
    features: [
      "Sentiment analysis using Hugging Face emotion/sentiment pipeline",
      "Personalized responses using FLAN-T5 model (780M parameters)",
      "High-performance backend with FastAPI",
      "REST APIs for React client integration",
      "Deployed on GitHub Pages for scalability",
    ],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop",
    github: "https://github.com/Somil2104/Dost-Bot",
    featured: true,
  },
  {
    id: "proj-2",
    title: "RetailIQ | Smart Inventory Forecasting",
    slug: "retailiq",
    category: "aiml",
    description: "AI-powered system for customer retention analysis and cost-to-serve optimization using ML models.",
    longDescription:
      "Designed an AI-powered system leveraging ML models (Random Forest, XGBoost) to enable customer retention analysis and cost-to-serve optimization.",
    technologies: ["Flask", "Node.js", "React", "Machine Learning", "Random Forest", "XGBoost"],
    features: [
      "Customer retention analysis using ML models",
      "Cost-to-serve optimization",
      "Demand forecasting engine combining behavioral and transactional data",
      "Stock level optimization to reduce inventory wastage",
      "AI-driven decision-making for efficiency and satisfaction",
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
    github: "https://github.com/Somil2104/RetailIQ",
    featured: true,
  },
];

export interface Achievement {
  id: string;
  title: string;
  description: string;
  type: "competition" | "hackathon" | "award";
}

export interface AdditionalInfo {
  id: string;
  title: string;
  description: string;
  category: "hobby" | "leadership" | "extracurricular";
}

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "ZelestraXAWS Data Challenge (Second Edition)",
    description: "Finalist out of 500+ teams, competing against 7000+ participants.",
    type: "competition",
  },
  {
    id: "ach-2",
    title: "Amdocs GenAI Graduate Hackathon 2024–25",
    description:
      "Selected as a Semi-Finalist among 10,893 participants; among the top 1% to successfully submit a working prototype.",
    type: "hackathon",
  },
  {
    id: "ach-3",
    title: "Accelerate Her in Tech – Hackathon by Nokia",
    description:
      "Cleared Round 1 from over 30,000 participants and advanced to the Code Hunt round, securing a top rank.",
    type: "hackathon",
  },
];

export const additionalInfo: AdditionalInfo[] = [
  {
    id: "add-1",
    title: "Stock Market Analysis",
    description:
      "Regularly conduct independent stock market analysis to strengthen investment insight, market research skills, and data-driven decision-making abilities.",
    category: "hobby",
  },
  {
    id: "add-2",
    title: "Model United Nations",
    description:
      "High Commendation as Delegate of Luxembourg in UNODC committee at CNMUN. Active participant in Model United Nations, cultivating executive presence and cross-functional communication acumen.",
    category: "extracurricular",
  },
  {
    id: "add-3",
    title: "UI/UX Lead, Android Club",
    description:
      "Led a team of 4 UI/UX developers and 5 designers to deliver user-centric interfaces for college Android projects, coordinating design workflows and mentoring members in best practices.",
    category: "leadership",
  },
];

export const certifications: Certification[] = [
  // Data Engineering & Big Data
  {
    id: "cert-1",
    title: "Data Engineering Masterclass for Beginners",
    issuer: "Udemy",
    issueDate: "Dec 2025",
    credentialId: "UC-2b56aab6-6583-47de-bcb4-1ac428d2467f",
    credentialUrl: "https://www.udemy.com/certificate/UC-2b56aab6-6583-47de-bcb4-1ac428d2467f/",
    category: "cloud",
  },
  {
    id: "cert-2",
    title: "Data Quality Masterclass - The Complete Course",
    issuer: "Udemy",
    issueDate: "Dec 2025",
    credentialId: "UC-47325550-0617-4638-b4a9-53c6e8cea5a6",
    credentialUrl: "https://www.udemy.com/certificate/UC-47325550-0617-4638-b4a9-53c6e8cea5a6/",
    category: "cloud",
  },
  {
    id: "cert-3",
    title: "Hive to ADVANCE Hive (Real time usage)",
    issuer: "Udemy",
    issueDate: "Dec 2025",
    credentialId: "UC-27590c12-9d0f-4ff7-b42e-3c0422ffe77f",
    credentialUrl: "https://www.udemy.com/certificate/UC-27590c12-9d0f-4ff7-b42e-3c0422ffe77f/",
    category: "cloud",
  },
  {
    id: "cert-4",
    title: "Learn Big Data: The Hadoop Ecosystem Masterclass",
    issuer: "Udemy",
    issueDate: "Dec 2025",
    credentialId: "UC-a1ad7258-5d02-4a37-bb51-102f092e0fea",
    credentialUrl: "https://www.udemy.com/certificate/UC-a1ad7258-5d02-4a37-bb51-102f092e0fea/",
    category: "cloud",
  },
  {
    id: "cert-5",
    title: "The Data Analyst Course: Complete Data Analyst Bootcamp",
    issuer: "Udemy",
    issueDate: "Dec 2025",
    credentialId: "UC-8603fda7-7bba-47ee-b45a-4384d9908662",
    credentialUrl: "https://www.udemy.com/certificate/UC-8603fda7-7bba-47ee-b45a-4384d9908662/",
    category: "aiml",
  },
  // Java & Backend
  {
    id: "cert-6",
    title: "Learn Spring Boot 3 in 100 Steps - No 1 Java Framework",
    issuer: "Udemy",
    issueDate: "Nov 2025",
    credentialId: "UC-1cacf0c0-a4a3-408b-8fdb-6fa7192773e7",
    credentialUrl: "https://www.udemy.com/certificate/UC-1cacf0c0-a4a3-408b-8fdb-6fa7192773e7/",
    category: "programming",
  },
  {
    id: "cert-7",
    title: "Microservices Architecture - The Complete Guide",
    issuer: "Udemy",
    issueDate: "Nov 2025",
    credentialId: "UC-5519cd4c-4401-4f67-8685-d2680cb9311d",
    credentialUrl: "https://www.udemy.com/certificate/UC-5519cd4c-4401-4f67-8685-d2680cb9311d/",
    category: "devops",
  },
  {
    id: "cert-8",
    title: "Spring Boot REST & Angular + Full Stack Application!",
    issuer: "Udemy",
    issueDate: "Nov 2025",
    credentialId: "UC-d0e658b5-47ae-44e5-a0b0-ec030a9943e5",
    credentialUrl: "https://www.udemy.com/certificate/UC-d0e658b5-47ae-44e5-a0b0-ec030a9943e5/",
    category: "programming",
  },
  {
    id: "cert-9",
    title: "Java Programming: Learn Core Java and Improve Java Skills",
    issuer: "Udemy",
    issueDate: "Oct 2025",
    credentialId: "UC-477003e7-9118-40a1-95c0-7cc8ece0d4cd",
    credentialUrl: "https://www.udemy.com/certificate/UC-477003e7-9118-40a1-95c0-7cc8ece0d4cd/",
    category: "programming",
  },
  // Security & DevOps
  {
    id: "cert-10",
    title: "Application Security - The Complete Guide",
    issuer: "Udemy",
    issueDate: "Sep 2025",
    credentialId: "UC-114d7795-22da-45e0-963a-5253819dc440",
    credentialUrl: "https://www.udemy.com/certificate/UC-114d7795-22da-45e0-963a-5253819dc440/",
    category: "devops",
  },
  {
    id: "cert-11",
    title: "DevOps Beginners to Advanced with Projects",
    issuer: "Udemy",
    issueDate: "Sep 2025",
    credentialId: "UC-5a77c4f4-81e6-445f-9bba-b4e7bfc31f07",
    credentialUrl: "https://www.udemy.com/certificate/UC-5a77c4f4-81e6-445f-9bba-b4e7bfc31f07/",
    category: "devops",
  },
  {
    id: "cert-12",
    title: "Docker for Beginners: DevOps for Java & Spring Boot",
    issuer: "Udemy",
    issueDate: "Sep 2025",
    credentialId: "UC-e48e32ae-5a2a-4611-860f-145f41496f60",
    credentialUrl: "https://www.udemy.com/certificate/UC-e48e32ae-5a2a-4611-860f-145f41496f60/",
    category: "devops",
  },
  {
    id: "cert-13",
    title: "Introduction to DevOps - Learn DevOps basics in 3 hours!",
    issuer: "Udemy",
    issueDate: "Sep 2025",
    credentialId: "UC-2f65696a-b8c5-42c1-a23c-4b6133c6aacb",
    credentialUrl: "https://www.udemy.com/certificate/UC-2f65696a-b8c5-42c1-a23c-4b6133c6aacb/",
    category: "devops",
  },
  {
    id: "cert-14",
    title: "Jenkins: Beginner To Pro, Learn CI/CD Pipelines & Automation",
    issuer: "Udemy",
    issueDate: "Sep 2025",
    credentialId: "UC-9acdcf8e-0820-477f-9c1e-98e162f8dbea",
    credentialUrl: "https://www.udemy.com/certificate/UC-9acdcf8e-0820-477f-9c1e-98e162f8dbea/",
    category: "devops",
  },
  {
    id: "cert-15",
    title: "Learn MariaDB SQL for beginners from scratch",
    issuer: "Udemy",
    issueDate: "Sep 2025",
    credentialId: "UC-e23b79e7-4401-420b-9d66-f4f16f6614cc",
    credentialUrl: "https://www.udemy.com/certificate/UC-e23b79e7-4401-420b-9d66-f4f16f6614cc/",
    category: "programming",
  },
  {
    id: "cert-16",
    title: "Understanding APIs and RESTful APIs Crash Course",
    issuer: "Udemy",
    issueDate: "Sep 2025",
    credentialId: "UC-6b2c0bd9-f84c-439e-ac1f-1ad82e8255b1",
    credentialUrl: "https://www.udemy.com/certificate/UC-6b2c0bd9-f84c-439e-ac1f-1ad82e8255b1/",
    category: "programming",
  },
  // Soft Skills & Leadership
  {
    id: "cert-17",
    title: "Conscious Listening",
    issuer: "Udemy",
    issueDate: "Sep 2025",
    credentialId: "UC-97b7261b-4235-4834-b0fe-c87c96500375",
    credentialUrl: "https://www.udemy.com/certificate/UC-97b7261b-4235-4834-b0fe-c87c96500375/",
    category: "other",
  },
  // Database & OS
  {
    id: "cert-18",
    title: "Database Management System from Scratch - Part 2",
    issuer: "Udemy",
    issueDate: "Aug 2025",
    credentialId: "UC-1f0ffe0f-30fe-417f-a800-4347240d6ccb",
    credentialUrl: "https://www.udemy.com/certificate/UC-1f0ffe0f-30fe-417f-a800-4347240d6ccb/",
    category: "programming",
  },
  {
    id: "cert-19",
    title: "Ninja Writing: The Four Levels Of Writing Mastery",
    issuer: "Udemy",
    issueDate: "Aug 2025",
    credentialId: "UC-d63a3094-c015-437e-a7ef-ceace1728a96",
    credentialUrl: "https://www.udemy.com/certificate/UC-d63a3094-c015-437e-a7ef-ceace1728a96/",
    category: "other",
  },
  {
    id: "cert-20",
    title: "Presenting with Confidence: Prepare, Practice and Perform!",
    issuer: "Udemy",
    issueDate: "Aug 2025",
    credentialId: "UC-306cdfdc-1d2d-4050-95a2-a752d4dfa9d7",
    credentialUrl: "https://www.udemy.com/certificate/UC-306cdfdc-1d2d-4050-95a2-a752d4dfa9d7/",
    category: "other",
  },
  {
    id: "cert-21",
    title: "Smart Tips: Public Speaking",
    issuer: "Udemy",
    issueDate: "Aug 2025",
    credentialId: "UC-06bba6b7-3edb-4a27-ac87-37ed6e089488",
    credentialUrl: "https://www.udemy.com/certificate/UC-06bba6b7-3edb-4a27-ac87-37ed6e089488/",
    category: "other",
  },
  {
    id: "cert-22",
    title: "Database Management System from Scratch - Part 1",
    issuer: "Udemy",
    issueDate: "Jul 2025",
    credentialId: "UC-3211e538-7a34-43d1-b928-3537ca1793fb",
    credentialUrl: "https://www.udemy.com/certificate/UC-3211e538-7a34-43d1-b928-3537ca1793fb/",
    category: "programming",
  },
  {
    id: "cert-23",
    title: "McKinsey.org Forward Badge",
    issuer: "McKinsey & Company",
    issueDate: "Jul 2025",
    credentialId: "c50d6f84-6e1f-4417-afc7-d8ebd2f33b0d",
    credentialUrl: "https://www.credly.com/",
    category: "other",
  },
  {
    id: "cert-24",
    title: "Operating Systems From Scratch - Part 2",
    issuer: "Udemy",
    issueDate: "Jul 2025",
    credentialId: "UC-d635b0c2-42a6-43ac-ba4c-168aea0733f4",
    credentialUrl: "https://www.udemy.com/certificate/UC-d635b0c2-42a6-43ac-ba4c-168aea0733f4/",
    category: "programming",
  },
  {
    id: "cert-25",
    title: "Operating Systems From Scratch - Part 1",
    issuer: "Udemy",
    issueDate: "Jun 2025",
    credentialId: "UC-e4159d9f-f575-4723-8713-e5bb25dc84de",
    credentialUrl: "https://www.udemy.com/certificate/UC-e4159d9f-f575-4723-8713-e5bb25dc84de/",
    category: "programming",
  },
  {
    id: "cert-26",
    title: "Java Gold Level (5 Star)",
    issuer: "HackerRank",
    issueDate: "Aug 2024",
    credentialUrl: "https://www.hackerrank.com/",
    category: "programming",
  },
  {
    id: "cert-27",
    title: "Cloud Computing (IIT Kharagpur)",
    issuer: "NPTEL",
    issueDate: "May 2024",
    credentialId: "NPTEL24CS17S35290152130737538",
    credentialUrl: "https://nptel.ac.in/",
    category: "cloud",
  },
  {
    id: "cert-28",
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    issueDate: "Dec 2023",
    credentialId: "VM8ZZ6U2K88S",
    credentialUrl: "https://coursera.org/verify/VM8ZZ6U2K88S",
    category: "cloud",
  },
  {
    id: "cert-29",
    title: "Learning Python",
    issuer: "LinkedIn",
    issueDate: "Oct 2022",
    credentialUrl: "https://www.linkedin.com/learning/",
    category: "programming",
  },
  {
    id: "cert-30",
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    issueDate: "Sep 2022",
    credentialUrl: "https://www.mathworks.com/",
    category: "programming",
  },
  {
    id: "cert-31",
    title: "Simulink Onramp",
    issuer: "MathWorks",
    issueDate: "Sep 2022",
    credentialUrl: "https://www.mathworks.com/",
    category: "programming",
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
