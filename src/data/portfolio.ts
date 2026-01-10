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
  phone?: string;
  university: string;
  degree: string;
  graduationYear: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
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
  role: string;
  duration: string;
  location: string;
  type: 'internship' | 'fulltime' | 'contract';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'devops' | 'aiml' | 'fullstack' | 'other';
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
  category: 'cloud' | 'devops' | 'aiml' | 'programming' | 'other';
  image?: string;
}

export const personalInfo: PersonInfo = {
  name: "Somil Jain",
  title: "DevOps & AI/ML Engineer",
  tagline: "Building intelligent systems with scalable infrastructure",
  heroIntroduction: "Final year Computer Science student at VIT, passionate about automating deployments, building ML pipelines, and creating impactful tech solutions.",
  biography: `I'm a final year BTech Computer Science Engineering student at Vellore Institute of Technology, specializing in DevOps practices and AI/ML applications.

My journey in tech started with a curiosity about how systems work at scale. This led me to explore the world of DevOps, where I found my passion for automation, containerization, and cloud infrastructure. Simultaneously, I dove deep into AI/ML, fascinated by how machines can learn and make decisions.

I believe in the power of combining robust infrastructure with intelligent systems. Whether it's setting up CI/CD pipelines, deploying ML models at scale, or building end-to-end applications, I approach every project with a focus on efficiency, reliability, and innovation.

When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.`,
  email: "somil.jain@email.com",
  university: "Vellore Institute of Technology",
  degree: "BTech Computer Science Engineering",
  graduationYear: "2026",
  socialLinks: {
    linkedin: "https://linkedin.com/in/somiljain",
    github: "https://github.com/somiljain",
    twitter: "https://twitter.com/somiljain",
  },
  skills: {
    languages: ["Python (Proficient)", "C/C++", "JavaScript", "Matlab/R", "HTML/CSS"],
    osSoftwareTools: ["Linux", "Windows", "Git", "Figma", "Canva", "Photoshop"],
    librariesDatabases: ["Keras", "Node.js", "React", "JQuery", "Numpy", "Pandas", "PostgreSQL", "MongoDB", "Firestore"],
    devops: ["AWS", "Jenkins", "GitHub Actions", "Maven", "Docker", "Kubernetes", "Ansible", "Terraform", "Vagrant"],
  },
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "DBS Tech India",
    role: "AI DevOps Apprentice",
    duration: "Jun 2025 – Present",
    location: "India",
    type: "internship",
    description: "8-month structured apprenticeship covering OS, RDBMS, Application Security, MariaDB, DevOps, Java/Spring Boot, REST, Microservices, Data Analysis, and Big Data (Hive, Hadoop, Spark).",
    achievements: [
      "Designed a hybrid customer segmentation pipeline (rules→MiniBatchKMeans) with MCC-based spend shares, tx per month, amt mean, and online share, improving targeting by 90% and driving segment-specific promotions",
      "Established behavioral risk bands (frequency, ticket size, channel mix, diversity) to approve/deny promotions and exported a single contract (customer_recommendations.csv) for downstream systems",
      "Operationalized with reproducible controllers, pinned Python deps, and container-ready CLIs (XGBoost, scikit-learn), ensuring low-latency scoring and consistent releases",
      "Completing an 8-month structured apprenticeship covering OS, RDBMS, Application Security, MariaDB, DevOps, Java/Spring Boot, REST, Microservices, Data Analysis, and Big Data",
    ],
    technologies: ["Python", "XGBoost", "scikit-learn", "Docker", "DevOps", "Java", "Spring Boot", "Hadoop", "Spark", "Hive"],
  },
  {
    id: "exp-2",
    company: "VE Commercial Vehicles Limited",
    role: "Software Engineer Intern (Machine Learning Engineering)",
    duration: "Oct 2024 – Dec 2024",
    location: "Bhopal, India (Onsite)",
    type: "internship",
    description: "Developed computer vision system for automated inspection of industrial dot-peen marked metal surfaces.",
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
    title: "MLOps Pipeline Platform",
    slug: "mlops-pipeline-platform",
    category: "devops",
    description: "End-to-end MLOps platform for training, versioning, and deploying ML models at scale.",
    longDescription: "A comprehensive MLOps platform that automates the entire machine learning lifecycle. Features include automated data versioning, experiment tracking, model training pipelines, and one-click deployments to Kubernetes clusters. Built with scalability and reproducibility in mind.",
    technologies: ["Kubernetes", "Kubeflow", "MLflow", "Python", "ArgoCD", "MinIO"],
    features: [
      "Automated model training pipelines",
      "Experiment tracking and comparison",
      "Model versioning and registry",
      "A/B testing for model deployments",
      "Real-time monitoring dashboards",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
    github: "https://github.com/somiljain/mlops-platform",
    featured: true,
  },
  {
    id: "proj-2",
    title: "AI-Powered Code Review Bot",
    slug: "ai-code-review-bot",
    category: "aiml",
    description: "GitHub bot that uses LLMs to provide intelligent code review suggestions.",
    longDescription: "An intelligent GitHub bot that leverages large language models to automatically review pull requests. It identifies bugs, security vulnerabilities, code smells, and provides actionable suggestions. Integrates seamlessly with existing GitHub workflows.",
    technologies: ["Python", "OpenAI API", "GitHub Actions", "FastAPI", "Docker"],
    features: [
      "Automatic PR analysis and comments",
      "Security vulnerability detection",
      "Code quality suggestions",
      "Custom rule configuration",
      "Multi-language support",
    ],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop",
    github: "https://github.com/somiljain/ai-code-review",
    featured: true,
  },
  {
    id: "proj-3",
    title: "Cloud Cost Optimizer",
    slug: "cloud-cost-optimizer",
    category: "devops",
    description: "Automated tool for analyzing and optimizing cloud infrastructure costs across providers.",
    longDescription: "A multi-cloud cost optimization tool that analyzes resource usage patterns, identifies idle resources, and provides recommendations for cost savings. Supports AWS, GCP, and Azure with unified dashboards and automated remediation.",
    technologies: ["Go", "AWS SDK", "GCP SDK", "React", "PostgreSQL", "Terraform"],
    features: [
      "Multi-cloud cost analysis",
      "Idle resource detection",
      "Rightsizing recommendations",
      "Scheduled resource management",
      "Cost forecasting",
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
    github: "https://github.com/somiljain/cloud-cost-optimizer",
    liveUrl: "https://cloudoptimizer.demo.com",
    featured: true,
  },
  {
    id: "proj-4",
    title: "Smart Traffic Management System",
    slug: "smart-traffic-system",
    category: "aiml",
    description: "Computer vision-based traffic monitoring and optimization system.",
    longDescription: "Real-time traffic management system using computer vision to analyze traffic patterns, detect congestion, and optimize signal timing. Deployed at multiple intersections with measurable improvements in traffic flow.",
    technologies: ["Python", "YOLO", "OpenCV", "TensorFlow", "Raspberry Pi", "MQTT"],
    features: [
      "Real-time vehicle detection",
      "Traffic density analysis",
      "Adaptive signal control",
      "Emergency vehicle priority",
      "Analytics dashboard",
    ],
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=800&auto=format&fit=crop",
    github: "https://github.com/somiljain/smart-traffic",
    featured: false,
  },
  {
    id: "proj-5",
    title: "Kubernetes Cluster Manager",
    slug: "k8s-cluster-manager",
    category: "devops",
    description: "Web-based UI for managing and monitoring Kubernetes clusters.",
    longDescription: "An intuitive web interface for managing Kubernetes clusters. Features include deployment management, pod monitoring, log streaming, and resource visualization. Designed for teams who want a simpler alternative to kubectl.",
    technologies: ["React", "Go", "Kubernetes API", "WebSockets", "Tailwind CSS"],
    features: [
      "Visual cluster overview",
      "Deployment management",
      "Real-time log streaming",
      "Resource metrics",
      "RBAC integration",
    ],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&auto=format&fit=crop",
    github: "https://github.com/somiljain/k8s-manager",
    featured: false,
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

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);
