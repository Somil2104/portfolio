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
  {
    id: "cert-1",
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    issueDate: "Jan 2024",
    expiryDate: "Jan 2027",
    credentialId: "AWS-SAA-XXXXX",
    credentialUrl: "https://aws.amazon.com/verification",
    category: "cloud",
  },
  {
    id: "cert-2",
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "The Linux Foundation",
    issueDate: "Mar 2024",
    expiryDate: "Mar 2027",
    credentialId: "LF-CKA-XXXXX",
    credentialUrl: "https://training.linuxfoundation.org/certification/verify/",
    category: "devops",
  },
  {
    id: "cert-3",
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    issueDate: "Nov 2023",
    credentialId: "TF-DEV-XXXXX",
    credentialUrl: "https://www.credential.net/",
    category: "aiml",
  },
  {
    id: "cert-4",
    title: "Docker Certified Associate",
    issuer: "Docker, Inc.",
    issueDate: "Sep 2023",
    credentialId: "DCA-XXXXX",
    credentialUrl: "https://credentials.docker.com/",
    category: "devops",
  },
  {
    id: "cert-5",
    title: "Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    issueDate: "Jul 2023",
    credentialId: "AZ900-XXXXX",
    credentialUrl: "https://learn.microsoft.com/en-us/users/",
    category: "cloud",
  },
  {
    id: "cert-6",
    title: "Google Cloud Associate Cloud Engineer",
    issuer: "Google Cloud",
    issueDate: "May 2023",
    expiryDate: "May 2025",
    credentialId: "GCP-ACE-XXXXX",
    credentialUrl: "https://www.credential.net/",
    category: "cloud",
  },
  {
    id: "cert-7",
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI (Coursera)",
    issueDate: "Aug 2023",
    credentialId: "COURSERA-XXXXX",
    credentialUrl: "https://coursera.org/verify/",
    category: "aiml",
  },
  {
    id: "cert-8",
    title: "GitHub Actions Certification",
    issuer: "GitHub",
    issueDate: "Dec 2023",
    credentialId: "GH-ACTIONS-XXXXX",
    credentialUrl: "https://github.com/",
    category: "devops",
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
