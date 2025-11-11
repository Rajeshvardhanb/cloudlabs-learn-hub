
export interface Lesson {
  id: string;
  title: string;
  videoUrl?: string;
  duration?: string;
}

export interface Module {
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: number;
  title: string;
  category: "AWS" | "GCP" | "Azure" | "Terraform" | "Jenkins" | "Kubernetes" | "Docker" | "Ansible" | "Git" | "Prometheus & Grafana" | "ELK Stack" | "Helm" | "Argo CD" | "Learning Paths" | "DevSecOps" | "Linux";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  imageUrl: string;
  description: string;
  instructor: {
    name: string;
    title: string;
    avatar: string;
    bio: string;
  };
  whatYouWillLearn: string[];
  modules: Module[];
  totalLessons: number;
  resources: {
    title: string;
    link: string;
  }[];
}

export const courseData: Course[] = [
  // --- Learning Paths ---
  {
    id: 6,
    title: "AWS & DevOps Complete Internship",
    category: "Learning Paths",
    difficulty: "Intermediate",
    duration: "120 hours",
    imageUrl: "/learning-path.svg",
    description: "A comprehensive internship program covering the entire AWS and DevOps ecosystem.",
    instructor: { name: "Infinitely Cloud Labs Team", title: "Expert Instructors", avatar: "ICL", bio: "This program is taught by a team of our top instructors." },
    whatYouWillLearn: ["Master core AWS services", "Implement Infrastructure as Code", "Build and manage CI/CD pipelines", "Containerize and orchestrate applications"],
    modules: [{ title: "Phase 1: Cloud Foundations", lessons: [{ id: "lp-1-1", title: "AWS Core Services" }] }],
    totalLessons: 1,
    resources: [{ title: "Internship Project Workbook", link: "#" }]
  },

  // --- Linux ---
  {
    id: 1401,
    title: "Linux for Beginners",
    category: "Linux",
    difficulty: "Beginner",
    duration: "20 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
    description: "Start your journey with the powerful Linux operating system.",
    instructor: { name: "Linus T.", title: "Linux Kernel Creator", avatar: "LT", bio: "..." },
    whatYouWillLearn: ["Basic shell commands", "File system navigation", "User management"],
    modules: [{ title: "Intro to Linux", lessons: [{ id: "linux-b-1", title: "First Lesson" }] }],
    totalLessons: 1,
    resources: []
  },
  {
    id: 1402,
    title: "Linux for Intermediate Users",
    category: "Linux",
    difficulty: "Intermediate",
    duration: "30 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
    description: "Enhance your Linux skills with shell scripting and process management.",
    instructor: { name: "Linus T.", title: "Linux Kernel Creator", avatar: "LT", bio: "..." },
    whatYouWillLearn: ["Shell scripting", "Process management", "Networking fundamentals"],
    modules: [{ title: "Intermediate Linux", lessons: [{ id: "linux-i-1", title: "First Lesson" }] }],
    totalLessons: 1,
    resources: []
  },
  {
    id: 1403,
    title: "Advanced Linux",
    category: "Linux",
    difficulty: "Advanced",
    duration: "40 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
    description: "Master the Linux kernel, security, and system administration.",
    instructor: { name: "Linus T.", title: "Linux Kernel Creator", avatar: "LT", bio: "..." },
    whatYouWillLearn: ["Kernel compilation", "Advanced security", "System administration"],
    modules: [{ title: "Advanced Linux", lessons: [{ id: "linux-a-1", title: "First Lesson" }] }],
    totalLessons: 1,
    resources: []
  },

  // --- AWS ---
  {
    id: 1,
    title: "AWS Certified Solutions Architect – Foundations",
    category: "AWS",
    difficulty: "Beginner",
    duration: "40 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    description: "Master AWS core services for building applications.",
    instructor: { name: "John Doe", title: "Cloud Architect", avatar: "J", bio: "..." },
    whatYouWillLearn: ["Core AWS services", "EC2, S3, and VPC fundamentals"],
    modules: [{ title: "Intro to AWS", lessons: [{ id: "aws-b-1", title: "First Lesson" }] }],
    totalLessons: 1,
    resources: []
  },
  {
    id: 11,
    title: "AWS Certified Developer - Associate",
    category: "AWS",
    difficulty: "Intermediate",
    duration: "50 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    description: "Develop, deploy, and debug cloud-based applications using AWS.",
    instructor: { name: "John Doe", title: "Cloud Architect", avatar: "J", bio: "..." },
    whatYouWillLearn: ["Developing with AWS services", "DynamoDB, Lambda, and API Gateway"],
    modules: [{ title: "Developing on AWS", lessons: [{ id: "aws-i-1", title: "First Lesson" }] }],
    totalLessons: 1,
    resources: []
  },
  {
    id: 12,
    title: "Advanced Networking on AWS",
    category: "AWS",
    difficulty: "Advanced",
    duration: "30 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    description: "Deep dive into VPCs, Transit Gateway, and Direct Connect.",
    instructor: { name: "John Doe", title: "Cloud Architect", avatar: "J", bio: "..." },
    whatYouWillLearn: ["VPC peering", "Hybrid connectivity", "Complex network architectures"],
    modules: [{ title: "Advanced VPC", lessons: [{ id: "aws-a-1", title: "First Lesson" }] }],
    totalLessons: 1,
    resources: []
  },

  // --- Azure ---
  {
    id: 21,
    title: "Introduction to Azure Fundamentals",
    category: "Azure",
    difficulty: "Beginner",
    duration: "30 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
    description: "Your first step into Microsoft Azure.",
    instructor: { name: "Jane Smith", title: "Azure Cloud Advocate", avatar: "JS", bio: "..." },
    whatYouWillLearn: ["Core Azure Concepts", "Azure Virtual Machines", "Azure Storage"],
    modules: [{ title: "Intro to Azure", lessons: [{ id: "az-b-1", title: "First Lesson" }] }],
    totalLessons: 1,
    resources: []
  },
  {
    id: 22,
    title: "Azure Administrator Associate (AZ-104)",
    category: "Azure",
    difficulty: "Intermediate",
    duration: "45 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
    description: "Manage Azure identities, governance, storage, and networks.",
    instructor: { name: "Jane Smith", title: "Azure Cloud Advocate", avatar: "JS", bio: "..." },
    whatYouWillLearn: ["Managing Azure subscriptions", "Securing identities", "Configuring virtual networking"],
    modules: [{ title: "Azure Administration", lessons: [{ id: "az-i-1", title: "First Lesson" }] }],
    totalLessons: 1,
    resources: []
  },
  {
    id: 23,
    title: "Designing Microsoft Azure Infrastructure (AZ-305)",
    category: "Azure",
    difficulty: "Advanced",
    duration: "55 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
    description: "Design solutions for identity, governance, monitoring, and data storage.",
    instructor: { name: "Jane Smith", title: "Azure Cloud Advocate", avatar: "JS", bio: "..." },
    whatYouWillLearn: ["Design for high availability", "Design data storage solutions", "Design identity and security"],
    modules: [{ title: "Azure Architecture Design", lessons: [{ id: "az-a-1", title: "First Lesson" }] }],
    totalLessons: 1,
    resources: []
  },

  // --- GCP ---
  {
    id: 31,
    title: "Google Cloud Platform for Beginners",
    category: "GCP",
    difficulty: "Beginner",
    duration: "30 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    description: "Discover the world of Google Cloud.",
    instructor: { name: "Carlos Ray", title: "GCP Certified Professional", avatar: "CR", bio: "..." },
    whatYouWillLearn: ["GCP Core Infrastructure", "Compute Engine", "Cloud Storage"],
    modules: [{ title: "Intro to GCP", lessons: [{ id: "gcp-b-1", title: "First Lesson" }] }],
    totalLessons: 1,
    resources: []
  },
  {
    id: 32,
    title: "Google Cloud Associate Cloud Engineer",
    category: "GCP",
    difficulty: "Intermediate",
    duration: "40 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    description: "Deploy applications, monitor operations, and manage enterprise solutions.",
    instructor: { name: "Carlos Ray", title: "GCP Certified Professional", avatar: "CR", bio: "..." },
    whatYouWillLearn: ["Setting up a cloud solution environment", "Deploying and implementing a cloud solution"],
    modules: [{ title: "GCP Engineering", lessons: [{ id: "gcp-i-1", title: "First Lesson" }] }],
    totalLessons: 1,
    resources: []
  },
  {
    id: 33,
    title: "Google Cloud Professional Cloud Architect",
    category: "GCP",
    difficulty: "Advanced",
    duration: "60 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    description: "Design, develop, and manage robust, secure, and dynamic solutions.",
    instructor: { name: "Carlos Ray", title: "GCP Certified Professional", avatar: "CR", bio: "..." },
    whatYouWillLearn: ["Designing for security and compliance", "Analyzing and optimizing technical processes"],
    modules: [{ title: "GCP Architecture", lessons: [{ id: "gcp-a-1", title: "First Lesson" }] }],
    totalLessons: 1,
    resources: []
  },

  // --- Git ---
  {
    id: 41,
    title: "Git for Absolute Beginners",
    category: "Git",
    difficulty: "Beginner",
    duration: "10 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    description: "Learn the most popular version control system from scratch.",
    instructor: { name: "Priya M", title: "DevOps Specialist", avatar: "P", bio: "..." },
    whatYouWillLearn: ["Git basics", "Branching and Merging", "Collaborating with GitHub"],
    modules: [{ title: "Git 101", lessons: [{ id: "git-b-1", title: "First Lesson" }] }],
    totalLessons: 1,
    resources: []
  },
  {
    id: 42,
    title: "Intermediate Git and GitHub",
    category: "Git",
    difficulty: "Intermediate",
    duration: "15 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    description: "Level up your Git skills with rebasing, cherry-picking, and hooks.",
    instructor: { name: "Priya M", title: "DevOps Specialist", avatar: "P", bio: "..." },
    whatYouWillLearn: ["Interactive Rebasing", "Git Hooks", "Resolving complex merge conflicts"],
    modules: [{ title: "Advanced Git", lessons: [{ id: "git-i-1", title: "First Lesson" }] }],
    totalLessons: 1,
    resources: []
  },
  {
    id: 43,
    title: "Git Internals and Advanced Workflows",
    category: "Git",
    difficulty: "Advanced",
    duration: "20 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    description: "Understand the plumbing of Git and master complex repository management.",
    instructor: { name: "Priya M", title: "DevOps Specialist", avatar: "P", bio: "..." },
    whatYouWillLearn: ["Git objects and the DAG", "Custom Git scripting", "Managing large monorepos"],
    modules: [{ title: "Git Expert", lessons: [{ id: "git-a-1", title: "First Lesson" }] }],
    totalLessons: 1,
    resources: []
  },

  // --- Jenkins ---
  { id: 51, title: "Jenkins for Beginners", category: "Jenkins", difficulty: "Beginner", duration: "15h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg", description: "...", instructor: { name: "Priya M", title: "...", avatar: "P", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },
  { id: 52, title: "Jenkins CI/CD Pipeline Automation", category: "Jenkins", difficulty: "Intermediate", duration: "20h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg", description: "...", instructor: { name: "Priya M", title: "...", avatar: "P", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },
  { id: 53, title: "Jenkins Masterclass – Secure CI/CD", category: "Jenkins", difficulty: "Advanced", duration: "35h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg", description: "...", instructor: { name: "Krishna R", title: "...", avatar: "K", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },

  // --- Ansible ---
  { id: 61, title: "Ansible for Beginners", category: "Ansible", difficulty: "Beginner", duration: "12h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ansible_logo.svg", description: "...", instructor: { name: "Priya M", title: "...", avatar: "P", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },
  { id: 62, title: "Ansible for Automation", category: "Ansible", difficulty: "Intermediate", duration: "20h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ansible_logo.svg", description: "...", instructor: { name: "Priya M", title: "...", avatar: "P", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },
  { id: 63, title: "Advanced Ansible Playbooks", category: "Ansible", difficulty: "Advanced", duration: "25h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ansible_logo.svg", description: "...", instructor: { name: "Priya M", title: "...", avatar: "P", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },

  // --- Docker ---
  { id: 71, title: "Docker & Containerization", category: "Docker", difficulty: "Beginner", duration: "18h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_logo.svg", description: "...", instructor: { name: "Krishna R", title: "...", avatar: "K", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },
  { id: 72, title: "Docker in Production", category: "Docker", difficulty: "Intermediate", duration: "22h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_logo.svg", description: "...", instructor: { name: "Krishna R", title: "...", avatar: "K", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },
  { id: 73, title: "Advanced Docker and Swarm", category: "Docker", difficulty: "Advanced", duration: "28h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_logo.svg", description: "...", instructor: { name: "Krishna R", title: "...", avatar: "K", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },

  // --- Kubernetes ---
  { id: 81, title: "Kubernetes for Beginners", category: "Kubernetes", difficulty: "Beginner", duration: "15h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg", description: "...", instructor: { name: "Priya M", title: "...", avatar: "P", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },
  { id: 82, title: "Certified Kubernetes Administrator (CKA)", category: "Kubernetes", difficulty: "Intermediate", duration: "40h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg", description: "...", instructor: { name: "Priya M", title: "...", avatar: "P", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },
  { id: 83, title: "Kubernetes Security Best Practices", category: "Kubernetes", difficulty: "Advanced", duration: "30h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg", description: "...", instructor: { name: "Krishna R", title: "...", avatar: "K", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },

  // --- Prometheus & Grafana ---
  { id: 91, title: "Prometheus & Grafana 101", category: "Prometheus & Grafana", difficulty: "Beginner", duration: "15h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg", description: "...", instructor: { name: "John Doe", title: "...", avatar: "J", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },
  { id: 92, title: "Monitoring with Prometheus & Grafana", category: "Prometheus & Grafana", difficulty: "Intermediate", duration: "22h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg", description: "...", instructor: { name: "John Doe", title: "...", avatar: "J", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },
  { id: 93, title: "Advanced Alerting and Dashboards", category: "Prometheus & Grafana", difficulty: "Advanced", duration: "25h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg", description: "...", instructor: { name: "John Doe", title: "...", avatar: "J", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },

  // --- ELK Stack ---
  { id: 1001, title: "ELK Stack for Beginners", category: "ELK Stack", difficulty: "Beginner", duration: "18h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Elastic_logo.svg", description: "...", instructor: { name: "Jane Smith", title: "...", avatar: "JS", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },
  { id: 1002, title: "Logging with the ELK Stack", category: "ELK Stack", difficulty: "Intermediate", duration: "25h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Elastic_logo.svg", description: "...", instructor: { name: "Jane Smith", title: "...", avatar: "JS", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },
  { id: 1003, title: "Advanced ELK Stack Administration", category: "ELK Stack", difficulty: "Advanced", duration: "30h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Elastic_logo.svg", description: "...", instructor: { name: "Jane Smith", title: "...", avatar: "JS", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },

  // --- Terraform ---
  { id: 1101, title: "Getting Started with Terraform", category: "Terraform", difficulty: "Beginner", duration: "15h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg", description: "...", instructor: { name: "Priya M", title: "...", avatar: "P", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },
  { id: 1102, title: "Terraform for Cloud Infrastructure", category: "Terraform", difficulty: "Intermediate", duration: "25h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg", description: "...", instructor: { name: "Priya M", title: "...", avatar: "P", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },
  { id: 1103, title: "Advanced Terraform Modules", category: "Terraform", difficulty: "Advanced", duration: "30h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg", description: "...", instructor: { name: "Priya M", title: "...", avatar: "P", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },

  // --- Helm ---
  { id: 1201, title: "Helm for Beginners", category: "Helm", difficulty: "Beginner", duration: "8h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Helm_logo.svg", description: "...", instructor: { name: "Priya M", title: "...", avatar: "P", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },
  { id: 1202, title: "Kubernetes Package Management with Helm", category: "Helm", difficulty: "Intermediate", duration: "12h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Helm_logo.svg", description: "...", instructor: { name: "Priya M", title: "...", avatar: "P", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },
  { id: 1203, title: "Advanced Helm Chart Templating", category: "Helm", difficulty: "Advanced", duration: "16h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Helm_logo.svg", description: "...", instructor: { name: "Priya M", title: "...", avatar: "P", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },

  // --- Argo CD ---
  { id: 1301, title: "Introduction to GitOps and Argo CD", category: "Argo CD", difficulty: "Beginner", duration: "10h", imageUrl: "https://cncf-branding.netlify.app/img/projects/argo/icon/color/argo-icon-color.svg", description: "...", instructor: { name: "Krishna R", title: "...", avatar: "K", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },
  { id: 1302, title: "GitOps with Argo CD", category: "Argo CD", difficulty: "Intermediate", duration: "15h", imageUrl: "https://cncf-branding.netlify.app/img/projects/argo/icon/color/argo-icon-color.svg", description: "...", instructor: { name: "Krishna R", title: "...", avatar: "K", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] },
  { id: 1303, title: "Advanced Argo CD and Rollouts", category: "Argo CD", difficulty: "Advanced", duration: "20h", imageUrl: "https://cncf-branding.netlify.app/img/projects/argo/icon/color/argo-icon-color.svg", description: "...", instructor: { name: "Krishna R", title: "...", avatar: "K", bio: "..." }, whatYouWillLearn: [], modules: [], totalLessons: 1, resources: [] }
];
