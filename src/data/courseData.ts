
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
    modules: [
      { title: "Phase 1: Cloud Foundations", lessons: [{ id: "lp-1-1", title: "AWS Core Services", duration: "2h" }, { id: "lp-1-2", title: "EC2 & VPC Essentials", duration: "3h" }, { id: "lp-1-3", title: "S3 & IAM Basics", duration: "2h" }] },
      { title: "Phase 2: Infrastructure as Code", lessons: [{ id: "lp-2-1", title: "Terraform Fundamentals", duration: "3h" }, { id: "lp-2-2", title: "Building AWS Infrastructure", duration: "4h" }] },
      { title: "Phase 3: CI/CD Pipeline", lessons: [{ id: "lp-3-1", title: "Jenkins Setup", duration: "2h" }, { id: "lp-3-2", title: "Pipeline Automation", duration: "3h" }] },
      { title: "Phase 4: Containerization", lessons: [{ id: "lp-4-1", title: "Docker Mastery", duration: "4h" }, { id: "lp-4-2", title: "Kubernetes Orchestration", duration: "5h" }] }
    ],
    totalLessons: 12,
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
    modules: [
      { title: "Getting Started with Linux", lessons: [{ id: "linux-b-1", title: "Introduction to Linux", duration: "45m" }, { id: "linux-b-2", title: "Installing Linux", duration: "1h" }] },
      { title: "Command Line Basics", lessons: [{ id: "linux-b-3", title: "Essential Commands", duration: "1h 30m" }, { id: "linux-b-4", title: "File Operations", duration: "1h" }] },
      { title: "File System & Navigation", lessons: [{ id: "linux-b-5", title: "Directory Structure", duration: "1h" }, { id: "linux-b-6", title: "File Permissions", duration: "1h 15m" }] },
      { title: "User & Package Management", lessons: [{ id: "linux-b-7", title: "Managing Users", duration: "1h" }, { id: "linux-b-8", title: "Package Managers", duration: "1h 30m" }] }
    ],
    totalLessons: 8,
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
    modules: [
      { title: "Shell Scripting Essentials", lessons: [{ id: "linux-i-1", title: "Bash Scripting Basics", duration: "2h" }, { id: "linux-i-2", title: "Variables & Loops", duration: "1h 30m" }, { id: "linux-i-3", title: "Functions & Arrays", duration: "1h 45m" }] },
      { title: "Process Management", lessons: [{ id: "linux-i-4", title: "Process Monitoring", duration: "1h 30m" }, { id: "linux-i-5", title: "Job Scheduling with Cron", duration: "1h" }] },
      { title: "Networking Fundamentals", lessons: [{ id: "linux-i-6", title: "Network Configuration", duration: "2h" }, { id: "linux-i-7", title: "SSH & Remote Access", duration: "1h 30m" }] },
      { title: "System Administration", lessons: [{ id: "linux-i-8", title: "Log Management", duration: "1h 15m" }, { id: "linux-i-9", title: "Backup Strategies", duration: "1h 30m" }] }
    ],
    totalLessons: 9,
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
    modules: [
      { title: "Kernel Mastery", lessons: [{ id: "linux-a-1", title: "Kernel Architecture", duration: "2h 30m" }, { id: "linux-a-2", title: "Kernel Compilation", duration: "3h" }, { id: "linux-a-3", title: "Kernel Modules", duration: "2h" }] },
      { title: "Advanced Security", lessons: [{ id: "linux-a-4", title: "SELinux & AppArmor", duration: "2h 30m" }, { id: "linux-a-5", title: "Firewall Configuration", duration: "2h" }, { id: "linux-a-6", title: "Security Auditing", duration: "2h 15m" }] },
      { title: "Performance Tuning", lessons: [{ id: "linux-a-7", title: "System Optimization", duration: "2h 30m" }, { id: "linux-a-8", title: "Resource Monitoring", duration: "2h" }] },
      { title: "Enterprise Administration", lessons: [{ id: "linux-a-9", title: "High Availability", duration: "3h" }, { id: "linux-a-10", title: "Disaster Recovery", duration: "2h 30m" }] }
    ],
    totalLessons: 10,
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
    modules: [
      { title: "AWS Fundamentals", lessons: [{ id: "aws-b-1", title: "Introduction to AWS", duration: "1h 30m" }, { id: "aws-b-2", title: "AWS Global Infrastructure", duration: "1h" }, { id: "aws-b-3", title: "IAM Essentials", duration: "2h" }] },
      { title: "Compute Services", lessons: [{ id: "aws-b-4", title: "EC2 Fundamentals", duration: "2h 30m" }, { id: "aws-b-5", title: "EBS & AMI", duration: "1h 45m" }, { id: "aws-b-6", title: "Load Balancers", duration: "2h" }] },
      { title: "Storage & Databases", lessons: [{ id: "aws-b-7", title: "S3 Deep Dive", duration: "2h 30m" }, { id: "aws-b-8", title: "RDS & DynamoDB", duration: "2h 15m" }] },
      { title: "Networking", lessons: [{ id: "aws-b-9", title: "VPC Fundamentals", duration: "2h 30m" }, { id: "aws-b-10", title: "Security Groups", duration: "1h 30m" }] }
    ],
    totalLessons: 10,
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
    modules: [
      { title: "Serverless Development", lessons: [{ id: "aws-i-1", title: "Lambda Functions", duration: "2h 30m" }, { id: "aws-i-2", title: "API Gateway", duration: "2h" }, { id: "aws-i-3", title: "Step Functions", duration: "2h 15m" }] },
      { title: "Database Development", lessons: [{ id: "aws-i-4", title: "DynamoDB Design", duration: "2h 30m" }, { id: "aws-i-5", title: "ElastiCache", duration: "1h 45m" }] },
      { title: "Application Integration", lessons: [{ id: "aws-i-6", title: "SQS & SNS", duration: "2h" }, { id: "aws-i-7", title: "EventBridge", duration: "1h 30m" }] },
      { title: "Deployment & Monitoring", lessons: [{ id: "aws-i-8", title: "CloudFormation", duration: "2h 30m" }, { id: "aws-i-9", title: "CloudWatch", duration: "2h" }] }
    ],
    totalLessons: 9,
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
    modules: [
      { title: "Advanced VPC Design", lessons: [{ id: "aws-a-1", title: "VPC Peering", duration: "2h" }, { id: "aws-a-2", title: "Transit Gateway", duration: "2h 30m" }, { id: "aws-a-3", title: "PrivateLink", duration: "2h" }] },
      { title: "Hybrid Connectivity", lessons: [{ id: "aws-a-4", title: "Direct Connect", duration: "2h 30m" }, { id: "aws-a-5", title: "VPN Solutions", duration: "2h" }] },
      { title: "Network Security", lessons: [{ id: "aws-a-6", title: "Network ACLs", duration: "1h 30m" }, { id: "aws-a-7", title: "AWS WAF & Shield", duration: "2h" }] },
      { title: "Optimization", lessons: [{ id: "aws-a-8", title: "CloudFront", duration: "2h" }, { id: "aws-a-9", title: "Route 53", duration: "1h 30m" }] }
    ],
    totalLessons: 9,
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
    modules: [
      { title: "Azure Fundamentals", lessons: [{ id: "az-b-1", title: "Introduction to Azure", duration: "1h 30m" }, { id: "az-b-2", title: "Azure Portal", duration: "1h" }] },
      { title: "Compute Services", lessons: [{ id: "az-b-3", title: "Virtual Machines", duration: "2h" }, { id: "az-b-4", title: "App Services", duration: "1h 45m" }] },
      { title: "Storage Solutions", lessons: [{ id: "az-b-5", title: "Blob Storage", duration: "2h" }, { id: "az-b-6", title: "Azure SQL", duration: "2h 15m" }] },
      { title: "Networking Basics", lessons: [{ id: "az-b-7", title: "Virtual Networks", duration: "2h" }, { id: "az-b-8", title: "Azure AD", duration: "1h 30m" }] }
    ],
    totalLessons: 8,
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
    modules: [
      { title: "Identity & Governance", lessons: [{ id: "az-i-1", title: "Azure AD Management", duration: "2h 30m" }, { id: "az-i-2", title: "RBAC", duration: "2h" }, { id: "az-i-3", title: "Azure Policy", duration: "1h 45m" }] },
      { title: "Storage Management", lessons: [{ id: "az-i-4", title: "Storage Accounts", duration: "2h" }, { id: "az-i-5", title: "Backup & Recovery", duration: "2h 15m" }] },
      { title: "Virtual Networking", lessons: [{ id: "az-i-6", title: "VNet Configuration", duration: "2h 30m" }, { id: "az-i-7", title: "Network Security", duration: "2h" }] },
      { title: "Monitoring & Compliance", lessons: [{ id: "az-i-8", title: "Azure Monitor", duration: "2h" }, { id: "az-i-9", title: "Cost Management", duration: "1h 30m" }] }
    ],
    totalLessons: 9,
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
    modules: [
      { title: "Design for Identity & Security", lessons: [{ id: "az-a-1", title: "Authentication Design", duration: "2h 30m" }, { id: "az-a-2", title: "Security Strategy", duration: "2h 45m" }] },
      { title: "Data Storage Solutions", lessons: [{ id: "az-a-3", title: "Database Design", duration: "3h" }, { id: "az-a-4", title: "Data Integration", duration: "2h 30m" }] },
      { title: "Business Continuity", lessons: [{ id: "az-a-5", title: "High Availability", duration: "3h" }, { id: "az-a-6", title: "Disaster Recovery", duration: "2h 45m" }] },
      { title: "Infrastructure Design", lessons: [{ id: "az-a-7", title: "Compute Solutions", duration: "2h 30m" }, { id: "az-a-8", title: "Network Architecture", duration: "3h" }] }
    ],
    totalLessons: 8,
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
    modules: [
      { title: "GCP Fundamentals", lessons: [{ id: "gcp-b-1", title: "Introduction to GCP", duration: "1h 30m" }, { id: "gcp-b-2", title: "GCP Console", duration: "1h" }] },
      { title: "Compute Services", lessons: [{ id: "gcp-b-3", title: "Compute Engine", duration: "2h 30m" }, { id: "gcp-b-4", title: "App Engine", duration: "2h" }] },
      { title: "Storage & Databases", lessons: [{ id: "gcp-b-5", title: "Cloud Storage", duration: "2h" }, { id: "gcp-b-6", title: "Cloud SQL", duration: "2h 15m" }] },
      { title: "Networking", lessons: [{ id: "gcp-b-7", title: "VPC Networks", duration: "2h" }, { id: "gcp-b-8", title: "Load Balancing", duration: "1h 45m" }] }
    ],
    totalLessons: 8,
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
    modules: [
      { title: "Cloud Solution Setup", lessons: [{ id: "gcp-i-1", title: "Resource Management", duration: "2h" }, { id: "gcp-i-2", title: "IAM Configuration", duration: "2h 15m" }] },
      { title: "Deployment & Implementation", lessons: [{ id: "gcp-i-3", title: "Cloud Run", duration: "2h 30m" }, { id: "gcp-i-4", title: "Kubernetes Engine", duration: "3h" }] },
      { title: "Monitoring & Operations", lessons: [{ id: "gcp-i-5", title: "Cloud Monitoring", duration: "2h" }, { id: "gcp-i-6", title: "Cloud Logging", duration: "1h 45m" }] },
      { title: "Security & Compliance", lessons: [{ id: "gcp-i-7", title: "Security Best Practices", duration: "2h 30m" }, { id: "gcp-i-8", title: "Compliance", duration: "2h" }] }
    ],
    totalLessons: 8,
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
    modules: [
      { title: "Architecture Design", lessons: [{ id: "gcp-a-1", title: "Solution Design", duration: "3h" }, { id: "gcp-a-2", title: "Microservices Architecture", duration: "2h 45m" }] },
      { title: "Security & Compliance", lessons: [{ id: "gcp-a-3", title: "Security Design", duration: "3h" }, { id: "gcp-a-4", title: "Compliance Strategy", duration: "2h 30m" }] },
      { title: "Technical Optimization", lessons: [{ id: "gcp-a-5", title: "Performance Tuning", duration: "3h" }, { id: "gcp-a-6", title: "Cost Optimization", duration: "2h 30m" }] },
      { title: "Enterprise Solutions", lessons: [{ id: "gcp-a-7", title: "Hybrid Cloud", duration: "3h" }, { id: "gcp-a-8", title: "Migration Strategies", duration: "2h 45m" }] }
    ],
    totalLessons: 8,
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
    modules: [
      { title: "Git Basics", lessons: [{ id: "git-b-1", title: "Version Control Intro", duration: "45m" }, { id: "git-b-2", title: "Git Installation", duration: "30m" }, { id: "git-b-3", title: "First Repository", duration: "1h" }] },
      { title: "Core Concepts", lessons: [{ id: "git-b-4", title: "Commits & History", duration: "1h 15m" }, { id: "git-b-5", title: "Branching Basics", duration: "1h 30m" }] },
      { title: "Collaboration", lessons: [{ id: "git-b-6", title: "GitHub Essentials", duration: "1h 30m" }, { id: "git-b-7", title: "Pull Requests", duration: "1h 15m" }] }
    ],
    totalLessons: 7,
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
    modules: [
      { title: "Advanced Branching", lessons: [{ id: "git-i-1", title: "Rebasing", duration: "1h 45m" }, { id: "git-i-2", title: "Cherry-picking", duration: "1h 15m" }] },
      { title: "Conflict Resolution", lessons: [{ id: "git-i-3", title: "Merge Strategies", duration: "1h 30m" }, { id: "git-i-4", title: "Complex Conflicts", duration: "2h" }] },
      { title: "Automation", lessons: [{ id: "git-i-5", title: "Git Hooks", duration: "1h 45m" }, { id: "git-i-6", title: "Git Aliases", duration: "1h" }] },
      { title: "Team Workflows", lessons: [{ id: "git-i-7", title: "GitFlow", duration: "1h 30m" }, { id: "git-i-8", title: "Code Review", duration: "1h 15m" }] }
    ],
    totalLessons: 8,
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
    modules: [
      { title: "Git Internals", lessons: [{ id: "git-a-1", title: "Git Object Model", duration: "2h 30m" }, { id: "git-a-2", title: "The DAG", duration: "2h" }] },
      { title: "Advanced Scripting", lessons: [{ id: "git-a-3", title: "Plumbing Commands", duration: "2h 15m" }, { id: "git-a-4", title: "Custom Scripts", duration: "2h 30m" }] },
      { title: "Monorepo Management", lessons: [{ id: "git-a-5", title: "Sparse Checkout", duration: "2h" }, { id: "git-a-6", title: "Submodules & Subtrees", duration: "2h 15m" }] },
      { title: "Performance", lessons: [{ id: "git-a-7", title: "Repository Optimization", duration: "1h 45m" }, { id: "git-a-8", title: "Git LFS", duration: "1h 45m" }] }
    ],
    totalLessons: 8,
    resources: []
  },

  // --- Jenkins ---
  { id: 51, title: "Jenkins for Beginners", category: "Jenkins", difficulty: "Beginner", duration: "15h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg", description: "Learn Jenkins automation basics", instructor: { name: "Priya M", title: "DevOps Specialist", avatar: "P", bio: "..." }, whatYouWillLearn: ["Jenkins installation", "Basic pipelines", "Job configuration"], modules: [{ title: "Getting Started", lessons: [{ id: "jen-b-1", title: "Installing Jenkins", duration: "1h 30m" }, { id: "jen-b-2", title: "Jenkins UI", duration: "1h" }] }, { title: "Building Jobs", lessons: [{ id: "jen-b-3", title: "Freestyle Jobs", duration: "2h" }, { id: "jen-b-4", title: "Pipeline Basics", duration: "2h 30m" }] }], totalLessons: 4, resources: [] },
  { id: 52, title: "Jenkins CI/CD Pipeline Automation", category: "Jenkins", difficulty: "Intermediate", duration: "20h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg", description: "Master CI/CD pipelines", instructor: { name: "Priya M", title: "DevOps Specialist", avatar: "P", bio: "..." }, whatYouWillLearn: ["Declarative pipelines", "Integration with Git", "Automated testing"], modules: [{ title: "Pipeline Development", lessons: [{ id: "jen-i-1", title: "Declarative Pipelines", duration: "2h 30m" }, { id: "jen-i-2", title: "Scripted Pipelines", duration: "2h" }] }, { title: "Integration", lessons: [{ id: "jen-i-3", title: "Git Integration", duration: "2h" }, { id: "jen-i-4", title: "Docker Integration", duration: "2h 30m" }] }], totalLessons: 4, resources: [] },
  { id: 53, title: "Jenkins Masterclass – Secure CI/CD", category: "Jenkins", difficulty: "Advanced", duration: "35h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg", description: "Enterprise Jenkins security", instructor: { name: "Krishna R", title: "Security Expert", avatar: "K", bio: "..." }, whatYouWillLearn: ["Security best practices", "Scalable architecture", "Advanced automation"], modules: [{ title: "Security", lessons: [{ id: "jen-a-1", title: "Authentication", duration: "3h" }, { id: "jen-a-2", title: "Authorization", duration: "2h 30m" }] }, { title: "Scale & Performance", lessons: [{ id: "jen-a-3", title: "Distributed Builds", duration: "3h" }, { id: "jen-a-4", title: "High Availability", duration: "2h 45m" }] }], totalLessons: 4, resources: [] },

  // --- Ansible ---
  { id: 61, title: "Ansible for Beginners", category: "Ansible", difficulty: "Beginner", duration: "12h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ansible_logo.svg", description: "Learn infrastructure automation", instructor: { name: "Priya M", title: "DevOps Specialist", avatar: "P", bio: "..." }, whatYouWillLearn: ["Ansible basics", "Playbooks", "Inventory management"], modules: [{ title: "Introduction", lessons: [{ id: "ans-b-1", title: "Ansible Fundamentals", duration: "1h 30m" }, { id: "ans-b-2", title: "Installation", duration: "1h" }] }, { title: "Playbooks", lessons: [{ id: "ans-b-3", title: "Writing Playbooks", duration: "2h" }, { id: "ans-b-4", title: "Inventory Files", duration: "1h 30m" }] }], totalLessons: 4, resources: [] },
  { id: 62, title: "Ansible for Automation", category: "Ansible", difficulty: "Intermediate", duration: "20h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ansible_logo.svg", description: "Advanced automation workflows", instructor: { name: "Priya M", title: "DevOps Specialist", avatar: "P", bio: "..." }, whatYouWillLearn: ["Roles & collections", "Variables & templates", "Error handling"], modules: [{ title: "Advanced Playbooks", lessons: [{ id: "ans-i-1", title: "Roles", duration: "2h 30m" }, { id: "ans-i-2", title: "Templates", duration: "2h" }] }, { title: "Automation", lessons: [{ id: "ans-i-3", title: "Workflows", duration: "2h 30m" }, { id: "ans-i-4", title: "Tower/AWX", duration: "3h" }] }], totalLessons: 4, resources: [] },
  { id: 63, title: "Advanced Ansible Playbooks", category: "Ansible", difficulty: "Advanced", duration: "25h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ansible_logo.svg", description: "Enterprise Ansible patterns", instructor: { name: "Priya M", title: "DevOps Specialist", avatar: "P", bio: "..." }, whatYouWillLearn: ["Custom modules", "Complex orchestration", "Best practices"], modules: [{ title: "Advanced Concepts", lessons: [{ id: "ans-a-1", title: "Custom Modules", duration: "3h" }, { id: "ans-a-2", title: "Dynamic Inventory", duration: "2h 30m" }] }, { title: "Enterprise Patterns", lessons: [{ id: "ans-a-3", title: "Multi-tier Apps", duration: "3h" }, { id: "ans-a-4", title: "Security & Vault", duration: "2h 45m" }] }], totalLessons: 4, resources: [] },

  // --- Docker ---
  { id: 71, title: "Docker & Containerization", category: "Docker", difficulty: "Beginner", duration: "18h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_logo.svg", description: "Master containerization basics", instructor: { name: "Krishna R", title: "Container Expert", avatar: "K", bio: "..." }, whatYouWillLearn: ["Docker fundamentals", "Images & containers", "Docker Compose"], modules: [{ title: "Docker Basics", lessons: [{ id: "doc-b-1", title: "Introduction to Docker", duration: "1h 30m" }, { id: "doc-b-2", title: "Containers vs VMs", duration: "1h" }] }, { title: "Working with Images", lessons: [{ id: "doc-b-3", title: "Dockerfile", duration: "2h 30m" }, { id: "doc-b-4", title: "Image Management", duration: "2h" }] }, { title: "Docker Compose", lessons: [{ id: "doc-b-5", title: "Multi-container Apps", duration: "2h 30m" }] }], totalLessons: 5, resources: [] },
  { id: 72, title: "Docker in Production", category: "Docker", difficulty: "Intermediate", duration: "22h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_logo.svg", description: "Production Docker deployments", instructor: { name: "Krishna R", title: "Container Expert", avatar: "K", bio: "..." }, whatYouWillLearn: ["Production best practices", "Networking", "Security"], modules: [{ title: "Production Deployments", lessons: [{ id: "doc-i-1", title: "Multi-stage Builds", duration: "2h 30m" }, { id: "doc-i-2", title: "Health Checks", duration: "2h" }] }, { title: "Networking & Storage", lessons: [{ id: "doc-i-3", title: "Docker Networks", duration: "2h 30m" }, { id: "doc-i-4", title: "Volumes", duration: "2h" }] }], totalLessons: 4, resources: [] },
  { id: 73, title: "Advanced Docker and Swarm", category: "Docker", difficulty: "Advanced", duration: "28h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_logo.svg", description: "Docker Swarm orchestration", instructor: { name: "Krishna R", title: "Container Expert", avatar: "K", bio: "..." }, whatYouWillLearn: ["Docker Swarm", "Orchestration", "Security hardening"], modules: [{ title: "Docker Swarm", lessons: [{ id: "doc-a-1", title: "Swarm Architecture", duration: "3h" }, { id: "doc-a-2", title: "Service Deployment", duration: "2h 30m" }] }, { title: "Advanced Topics", lessons: [{ id: "doc-a-3", title: "Security Best Practices", duration: "3h" }, { id: "doc-a-4", title: "Performance Tuning", duration: "2h 45m" }] }], totalLessons: 4, resources: [] },

  // --- Kubernetes ---
  { id: 81, title: "Kubernetes for Beginners", category: "Kubernetes", difficulty: "Beginner", duration: "15h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg", description: "Learn container orchestration", instructor: { name: "Priya M", title: "DevOps Specialist", avatar: "P", bio: "..." }, whatYouWillLearn: ["K8s architecture", "Pods & deployments", "Services"], modules: [{ title: "Kubernetes Fundamentals", lessons: [{ id: "k8s-b-1", title: "K8s Architecture", duration: "2h" }, { id: "k8s-b-2", title: "Installing Kubernetes", duration: "1h 30m" }] }, { title: "Core Concepts", lessons: [{ id: "k8s-b-3", title: "Pods", duration: "2h" }, { id: "k8s-b-4", title: "Deployments", duration: "2h 30m" }] }], totalLessons: 4, resources: [] },
  { id: 82, title: "Certified Kubernetes Administrator (CKA)", category: "Kubernetes", difficulty: "Intermediate", duration: "40h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg", description: "Prepare for CKA certification", instructor: { name: "Priya M", title: "DevOps Specialist", avatar: "P", bio: "..." }, whatYouWillLearn: ["Cluster administration", "Networking", "Storage"], modules: [{ title: "Cluster Management", lessons: [{ id: "k8s-i-1", title: "Cluster Setup", duration: "3h" }, { id: "k8s-i-2", title: "Upgrades", duration: "2h 30m" }] }, { title: "Workload Management", lessons: [{ id: "k8s-i-3", title: "ConfigMaps & Secrets", duration: "2h 30m" }, { id: "k8s-i-4", title: "StatefulSets", duration: "3h" }] }, { title: "Networking & Storage", lessons: [{ id: "k8s-i-5", title: "Network Policies", duration: "2h 30m" }, { id: "k8s-i-6", title: "Persistent Volumes", duration: "2h 45m" }] }], totalLessons: 6, resources: [] },
  { id: 83, title: "Kubernetes Security Best Practices", category: "Kubernetes", difficulty: "Advanced", duration: "30h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg", description: "Secure your K8s clusters", instructor: { name: "Krishna R", title: "Security Expert", avatar: "K", bio: "..." }, whatYouWillLearn: ["RBAC", "Pod security", "Network policies"], modules: [{ title: "Security Fundamentals", lessons: [{ id: "k8s-a-1", title: "RBAC", duration: "3h" }, { id: "k8s-a-2", title: "Pod Security Policies", duration: "2h 45m" }] }, { title: "Advanced Security", lessons: [{ id: "k8s-a-3", title: "Network Security", duration: "3h" }, { id: "k8s-a-4", title: "Secrets Management", duration: "2h 30m" }] }, { title: "Compliance", lessons: [{ id: "k8s-a-5", title: "Security Auditing", duration: "2h 45m" }] }], totalLessons: 5, resources: [] },

  // --- Prometheus & Grafana ---
  { id: 91, title: "Prometheus & Grafana 101", category: "Prometheus & Grafana", difficulty: "Beginner", duration: "15h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg", description: "Learn monitoring basics", instructor: { name: "John Doe", title: "Cloud Architect", avatar: "J", bio: "..." }, whatYouWillLearn: ["Prometheus fundamentals", "Grafana basics", "Metrics collection"], modules: [{ title: "Getting Started", lessons: [{ id: "prom-b-1", title: "Introduction to Monitoring", duration: "1h 30m" }, { id: "prom-b-2", title: "Installing Prometheus", duration: "1h" }] }, { title: "Grafana Basics", lessons: [{ id: "prom-b-3", title: "Grafana Setup", duration: "1h 30m" }, { id: "prom-b-4", title: "Creating Dashboards", duration: "2h" }] }], totalLessons: 4, resources: [] },
  { id: 92, title: "Monitoring with Prometheus & Grafana", category: "Prometheus & Grafana", difficulty: "Intermediate", duration: "22h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg", description: "Advanced monitoring workflows", instructor: { name: "John Doe", title: "Cloud Architect", avatar: "J", bio: "..." }, whatYouWillLearn: ["PromQL", "Exporters", "Advanced dashboards"], modules: [{ title: "Prometheus Deep Dive", lessons: [{ id: "prom-i-1", title: "PromQL Mastery", duration: "3h" }, { id: "prom-i-2", title: "Exporters", duration: "2h 30m" }] }, { title: "Grafana Advanced", lessons: [{ id: "prom-i-3", title: "Advanced Dashboards", duration: "2h 30m" }, { id: "prom-i-4", title: "Templating", duration: "2h" }] }], totalLessons: 4, resources: [] },
  { id: 93, title: "Advanced Alerting and Dashboards", category: "Prometheus & Grafana", difficulty: "Advanced", duration: "25h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg", description: "Enterprise monitoring solutions", instructor: { name: "John Doe", title: "Cloud Architect", avatar: "J", bio: "..." }, whatYouWillLearn: ["Alert management", "High availability", "Federation"], modules: [{ title: "Alerting", lessons: [{ id: "prom-a-1", title: "Alertmanager", duration: "3h" }, { id: "prom-a-2", title: "Alert Rules", duration: "2h 30m" }] }, { title: "Enterprise Setup", lessons: [{ id: "prom-a-3", title: "High Availability", duration: "3h" }, { id: "prom-a-4", title: "Federation", duration: "2h 45m" }] }], totalLessons: 4, resources: [] },

  // --- ELK Stack ---
  { id: 1001, title: "ELK Stack for Beginners", category: "ELK Stack", difficulty: "Beginner", duration: "18h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Elastic_logo.svg", description: "Learn centralized logging", instructor: { name: "Jane Smith", title: "Azure Cloud Advocate", avatar: "JS", bio: "..." }, whatYouWillLearn: ["Elasticsearch basics", "Logstash", "Kibana"], modules: [{ title: "ELK Fundamentals", lessons: [{ id: "elk-b-1", title: "Introduction to ELK", duration: "1h 30m" }, { id: "elk-b-2", title: "Installing ELK Stack", duration: "2h" }] }, { title: "Core Components", lessons: [{ id: "elk-b-3", title: "Elasticsearch", duration: "2h 30m" }, { id: "elk-b-4", title: "Logstash Pipelines", duration: "2h" }, { id: "elk-b-5", title: "Kibana Dashboards", duration: "2h" }] }], totalLessons: 5, resources: [] },
  { id: 1002, title: "Logging with the ELK Stack", category: "ELK Stack", difficulty: "Intermediate", duration: "25h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Elastic_logo.svg", description: "Advanced log management", instructor: { name: "Jane Smith", title: "Azure Cloud Advocate", avatar: "JS", bio: "..." }, whatYouWillLearn: ["Advanced queries", "Beats", "Log parsing"], modules: [{ title: "Advanced Elasticsearch", lessons: [{ id: "elk-i-1", title: "Query DSL", duration: "3h" }, { id: "elk-i-2", title: "Aggregations", duration: "2h 30m" }] }, { title: "Beats & Ingestion", lessons: [{ id: "elk-i-3", title: "Filebeat", duration: "2h" }, { id: "elk-i-4", title: "Metricbeat", duration: "2h 15m" }] }], totalLessons: 4, resources: [] },
  { id: 1003, title: "Advanced ELK Stack Administration", category: "ELK Stack", difficulty: "Advanced", duration: "30h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Elastic_logo.svg", description: "Enterprise ELK operations", instructor: { name: "Jane Smith", title: "Azure Cloud Advocate", avatar: "JS", bio: "..." }, whatYouWillLearn: ["Cluster management", "Performance tuning", "Security"], modules: [{ title: "Cluster Operations", lessons: [{ id: "elk-a-1", title: "Cluster Architecture", duration: "3h" }, { id: "elk-a-2", title: "Scaling", duration: "2h 45m" }] }, { title: "Enterprise Features", lessons: [{ id: "elk-a-3", title: "Security & RBAC", duration: "3h" }, { id: "elk-a-4", title: "Performance Optimization", duration: "2h 30m" }] }], totalLessons: 4, resources: [] },

  // --- Terraform ---
  { id: 1101, title: "Getting Started with Terraform", category: "Terraform", difficulty: "Beginner", duration: "15h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg", description: "Learn Infrastructure as Code", instructor: { name: "Priya M", title: "DevOps Specialist", avatar: "P", bio: "..." }, whatYouWillLearn: ["Terraform basics", "HCL syntax", "State management"], modules: [{ title: "Terraform Fundamentals", lessons: [{ id: "tf-b-1", title: "Introduction to IaC", duration: "1h 30m" }, { id: "tf-b-2", title: "Installing Terraform", duration: "1h" }] }, { title: "Core Concepts", lessons: [{ id: "tf-b-3", title: "Providers & Resources", duration: "2h" }, { id: "tf-b-4", title: "Variables & Outputs", duration: "2h 30m" }] }], totalLessons: 4, resources: [] },
  { id: 1102, title: "Terraform for Cloud Infrastructure", category: "Terraform", difficulty: "Intermediate", duration: "25h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg", description: "Build cloud infrastructure", instructor: { name: "Priya M", title: "DevOps Specialist", avatar: "P", bio: "..." }, whatYouWillLearn: ["Multi-cloud deployment", "Modules", "Remote state"], modules: [{ title: "Cloud Deployments", lessons: [{ id: "tf-i-1", title: "AWS with Terraform", duration: "3h" }, { id: "tf-i-2", title: "Azure with Terraform", duration: "2h 30m" }] }, { title: "Advanced Features", lessons: [{ id: "tf-i-3", title: "Modules", duration: "2h 30m" }, { id: "tf-i-4", title: "Remote State", duration: "2h" }] }], totalLessons: 4, resources: [] },
  { id: 1103, title: "Advanced Terraform Modules", category: "Terraform", difficulty: "Advanced", duration: "30h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg", description: "Master Terraform patterns", instructor: { name: "Priya M", title: "DevOps Specialist", avatar: "P", bio: "..." }, whatYouWillLearn: ["Module design", "Testing", "CI/CD integration"], modules: [{ title: "Module Development", lessons: [{ id: "tf-a-1", title: "Module Design Patterns", duration: "3h" }, { id: "tf-a-2", title: "Module Registry", duration: "2h 30m" }] }, { title: "Enterprise Terraform", lessons: [{ id: "tf-a-3", title: "Testing Infrastructure", duration: "3h" }, { id: "tf-a-4", title: "Terraform Cloud", duration: "2h 45m" }] }], totalLessons: 4, resources: [] },

  // --- Helm ---
  { id: 1201, title: "Helm for Beginners", category: "Helm", difficulty: "Beginner", duration: "8h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Helm_logo.svg", description: "Kubernetes package management", instructor: { name: "Priya M", title: "DevOps Specialist", avatar: "P", bio: "..." }, whatYouWillLearn: ["Helm basics", "Charts", "Releases"], modules: [{ title: "Introduction to Helm", lessons: [{ id: "helm-b-1", title: "Helm Fundamentals", duration: "1h 30m" }, { id: "helm-b-2", title: "Installing Helm", duration: "1h" }] }, { title: "Working with Charts", lessons: [{ id: "helm-b-3", title: "Chart Structure", duration: "2h" }, { id: "helm-b-4", title: "Deploying Charts", duration: "1h 30m" }] }], totalLessons: 4, resources: [] },
  { id: 1202, title: "Kubernetes Package Management with Helm", category: "Helm", difficulty: "Intermediate", duration: "12h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Helm_logo.svg", description: "Advanced Helm workflows", instructor: { name: "Priya M", title: "DevOps Specialist", avatar: "P", bio: "..." }, whatYouWillLearn: ["Chart creation", "Values files", "Helm repositories"], modules: [{ title: "Creating Charts", lessons: [{ id: "helm-i-1", title: "Chart Development", duration: "2h 30m" }, { id: "helm-i-2", title: "Values & Templates", duration: "2h" }] }, { title: "Chart Management", lessons: [{ id: "helm-i-3", title: "Helm Repositories", duration: "1h 30m" }, { id: "helm-i-4", title: "Chart Testing", duration: "2h" }] }], totalLessons: 4, resources: [] },
  { id: 1203, title: "Advanced Helm Chart Templating", category: "Helm", difficulty: "Advanced", duration: "16h", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Helm_logo.svg", description: "Master Helm templating", instructor: { name: "Priya M", title: "DevOps Specialist", avatar: "P", bio: "..." }, whatYouWillLearn: ["Advanced templating", "Hooks", "Best practices"], modules: [{ title: "Advanced Templating", lessons: [{ id: "helm-a-1", title: "Template Functions", duration: "2h 30m" }, { id: "helm-a-2", title: "Control Structures", duration: "2h" }] }, { title: "Production Patterns", lessons: [{ id: "helm-a-3", title: "Helm Hooks", duration: "2h 15m" }, { id: "helm-a-4", title: "Enterprise Charts", duration: "2h 30m" }] }], totalLessons: 4, resources: [] },

  // --- Argo CD ---
  { id: 1301, title: "Introduction to GitOps and Argo CD", category: "Argo CD", difficulty: "Beginner", duration: "10h", imageUrl: "https://cncf-branding.netlify.app/img/projects/argo/icon/color/argo-icon-color.svg", description: "Learn GitOps principles", instructor: { name: "Krishna R", title: "GitOps Expert", avatar: "K", bio: "..." }, whatYouWillLearn: ["GitOps fundamentals", "Argo CD basics", "Application deployment"], modules: [{ title: "GitOps Principles", lessons: [{ id: "argo-b-1", title: "Introduction to GitOps", duration: "1h 30m" }, { id: "argo-b-2", title: "Installing Argo CD", duration: "1h" }] }, { title: "Argo CD Basics", lessons: [{ id: "argo-b-3", title: "Application Management", duration: "2h" }, { id: "argo-b-4", title: "Sync Strategies", duration: "1h 30m" }] }], totalLessons: 4, resources: [] },
  { id: 1302, title: "GitOps with Argo CD", category: "Argo CD", difficulty: "Intermediate", duration: "15h", imageUrl: "https://cncf-branding.netlify.app/img/projects/argo/icon/color/argo-icon-color.svg", description: "Implement GitOps workflows", instructor: { name: "Krishna R", title: "GitOps Expert", avatar: "K", bio: "..." }, whatYouWillLearn: ["Multi-cluster deployment", "RBAC", "Integration"], modules: [{ title: "Advanced Deployments", lessons: [{ id: "argo-i-1", title: "Multi-cluster Setup", duration: "2h 30m" }, { id: "argo-i-2", title: "App of Apps Pattern", duration: "2h" }] }, { title: "Security & Integration", lessons: [{ id: "argo-i-3", title: "RBAC Configuration", duration: "2h 15m" }, { id: "argo-i-4", title: "CI/CD Integration", duration: "2h" }] }], totalLessons: 4, resources: [] },
  { id: 1303, title: "Advanced Argo CD and Rollouts", category: "Argo CD", difficulty: "Advanced", duration: "20h", imageUrl: "https://cncf-branding.netlify.app/img/projects/argo/icon/color/argo-icon-color.svg", description: "Master progressive delivery", instructor: { name: "Krishna R", title: "GitOps Expert", avatar: "K", bio: "..." }, whatYouWillLearn: ["Argo Rollouts", "Canary deployments", "Blue-green"], modules: [{ title: "Argo Rollouts", lessons: [{ id: "argo-a-1", title: "Progressive Delivery", duration: "3h" }, { id: "argo-a-2", title: "Canary Deployments", duration: "2h 30m" }] }, { title: "Advanced Strategies", lessons: [{ id: "argo-a-3", title: "Blue-Green Deployments", duration: "2h 30m" }, { id: "argo-a-4", title: "Analysis & Metrics", duration: "2h 45m" }] }], totalLessons: 4, resources: [] }
];
