
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
  title: "Linux for Beginners to Advanced",
  category: "Linux",
  difficulty: "Beginner to Advanced",
  duration: "35 hours",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
  description:
    "Master Linux from scratch — from basic command-line operations to advanced system administration, networking, and shell scripting. This course helps you gain the practical skills needed to confidently use, configure, and automate Linux environments.",
  instructor: {
    name: "Rajesh Vardhan Busam",
    title: "DevSecOps & Cloud Architect",
    avatar: "R",
    bio: "Rajesh is an experienced Linux and Cloud Engineer specializing in DevOps automation, system administration, and infrastructure security."
  },
  whatYouWillLearn: [
    "Basic shell commands and Linux filesystem navigation",
    "Managing users, processes, and permissions",
    "Networking, firewalls, and SSH configuration",
    "System monitoring, cron jobs, and log analysis",
    "Advanced Bash scripting and Linux automation"
  ],
  modules: [
    {
      title: "Getting Started with Linux",
      lessons: [
        { id: "linux-b-1", title: "Introduction to Linux and Open Source", duration: "45m" },
        { id: "linux-b-2", title: "Linux Distributions Overview (Ubuntu, RHEL, CentOS)", duration: "45m" },
        { id: "linux-b-3", title: "Installing Linux (VM & Cloud Setup)", duration: "1h 15m" },
        { id: "linux-b-4", title: "Navigating the Terminal and Basic Commands", duration: "1h" }
      ]
    },
    {
      title: "Command Line Essentials",
      lessons: [
        { id: "linux-b-5", title: "Essential Commands (ls, cd, pwd, mkdir, rm, cp, mv)", duration: "1h 15m" },
        { id: "linux-b-6", title: "Working with Files and Directories", duration: "1h" },
        { id: "linux-b-7", title: "Viewing and Editing Files (cat, less, head, tail, vi, nano)", duration: "1h 30m" },
        { id: "linux-b-8", title: "Input, Output, and Redirection", duration: "1h" },
        { id: "linux-b-9", title: "Pipes and Filters (grep, sort, wc, cut, uniq)", duration: "1h 15m" }
      ]
    },
    {
      title: "File System & Permissions",
      lessons: [
        { id: "linux-b-10", title: "Understanding Linux Directory Structure", duration: "1h" },
        { id: "linux-b-11", title: "File Ownership and Permissions (chmod, chown, chgrp)", duration: "1h 15m" },
        { id: "linux-b-12", title: "Hidden Files and Special Permissions (SUID, SGID, Sticky Bit)", duration: "1h 15m" },
        { id: "linux-b-13", title: "Mounting and Unmounting File Systems", duration: "1h" }
      ]
    },
    {
      title: "User & Group Management",
      lessons: [
        { id: "linux-b-14", title: "Creating and Managing Users", duration: "1h" },
        { id: "linux-b-15", title: "User Groups and Permissions", duration: "1h" },
        { id: "linux-b-16", title: "Switching Users and Sudo Privileges", duration: "45m" },
        { id: "linux-b-17", title: "Password Policies and Security", duration: "1h" }
      ]
    },
    {
      title: "Process Management & System Monitoring",
      lessons: [
        { id: "linux-b-18", title: "Understanding Processes and Daemons", duration: "1h" },
        { id: "linux-b-19", title: "Foreground, Background, and Kill Commands", duration: "1h" },
        { id: "linux-b-20", title: "Monitoring with ps, top, htop, vmstat", duration: "1h 15m" },
        { id: "linux-b-21", title: "Scheduling with cron and at Jobs", duration: "1h" }
      ]
    },
    {
      title: "Package Management",
      lessons: [
        { id: "linux-b-22", title: "Package Managers Overview (apt, yum, dnf, zypper)", duration: "1h" },
        { id: "linux-b-23", title: "Installing and Removing Software", duration: "1h" },
        { id: "linux-b-24", title: "Managing Repositories and Updates", duration: "1h" },
        { id: "linux-b-25", title: "Building Software from Source", duration: "1h" }
      ]
    },
    {
      title: "Networking in Linux",
      lessons: [
        { id: "linux-b-26", title: "Linux Networking Basics (IP, DNS, Gateway)", duration: "1h" },
        { id: "linux-b-27", title: "Network Configuration (ifconfig, ip, nmcli)", duration: "1h 15m" },
        { id: "linux-b-28", title: "SSH, SCP, and Remote Access", duration: "1h" },
        { id: "linux-b-29", title: "Network Troubleshooting Tools (ping, netstat, ss, traceroute)", duration: "1h" }
      ]
    },
    {
      title: "Storage Management",
      lessons: [
        { id: "linux-b-30", title: "Disk Partitions and Filesystems", duration: "1h" },
        { id: "linux-b-31", title: "Using df, du, and lsblk Commands", duration: "1h" },
        { id: "linux-b-32", title: "LVM (Logical Volume Manager) Basics", duration: "1h 15m" },
        { id: "linux-b-33", title: "Mount Points and fstab Configuration", duration: "1h" }
      ]
    },
    {
      title: "System Logs and Troubleshooting",
      lessons: [
        { id: "linux-b-34", title: "Understanding Linux Log Files (/var/log)", duration: "1h" },
        { id: "linux-b-35", title: "Using journalctl and dmesg", duration: "1h" },
        { id: "linux-b-36", title: "Troubleshooting Boot and Services", duration: "1h 15m" },
        { id: "linux-b-37", title: "Backup and Restore Essentials", duration: "1h" }
      ]
    },
    {
      title: "Shell Scripting and Automation",
      lessons: [
        { id: "linux-b-38", title: "Introduction to Shell Scripting", duration: "1h" },
        { id: "linux-b-39", title: "Variables, Loops, and Conditionals", duration: "1h 15m" },
        { id: "linux-b-40", title: "Functions and User Input", duration: "1h" },
        { id: "linux-b-41", title: "Real-World Scripting Examples", duration: "1h 30m" }
      ]
    },
    {
      title: "Advanced System Administration",
      lessons: [
        { id: "linux-b-42", title: "Systemd and Service Management", duration: "1h 15m" },
        { id: "linux-b-43", title: "SELinux and Firewalld Configuration", duration: "1h 15m" },
        { id: "linux-b-44", title: "Kernel Parameters and sysctl", duration: "1h" },
        { id: "linux-b-45", title: "Automation with Bash and Cron", duration: "1h 15m" }
      ]
    },
    {
      title: "Course Wrap-Up and Final Assessment",
      lessons: [
        { id: "linux-b-46", title: "Linux Recap and Review", duration: "1h" },
        { id: "linux-b-47", title: "Practical Lab: Troubleshoot and Secure a Linux System", duration: "2h" },
        { id: "linux-b-48", title: "Final Knowledge Assessment", duration: "1h" }
      ]
    }
  ],
  totalLessons: 48,
  resources: [
    { title: "Linux Command Cheat Sheet", link: "https://linuxcommand.org/lc3_cheat_sheet.php" },
    { title: "The Linux Documentation Project", link: "https://tldp.org/" },
    { title: "Red Hat System Administration Guide", link: "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/" }
  ]
},

// --- AWS ---
  // {
  //   id: 1402,
  //   title: "Linux for Intermediate Users",
  //   category: "Linux",
  //   difficulty: "Intermediate",
  //   duration: "30 hours",
  //   imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
  //   description: "Enhance your Linux skills with shell scripting and process management.",
  //   instructor: { name: "Linus T.", title: "Linux Kernel Creator", avatar: "LT", bio: "..." },
  //   whatYouWillLearn: ["Shell scripting", "Process management", "Networking fundamentals"],
  //   modules: [
  //     { title: "Shell Scripting Essentials", lessons: [{ id: "linux-i-1", title: "Bash Scripting Basics", duration: "2h" }, { id: "linux-i-2", title: "Variables & Loops", duration: "1h 30m" }, { id: "linux-i-3", title: "Functions & Arrays", duration: "1h 45m" }] },
  //     { title: "Process Management", lessons: [{ id: "linux-i-4", title: "Process Monitoring", duration: "1h 30m" }, { id: "linux-i-5", title: "Job Scheduling with Cron", duration: "1h" }] },
  //     { title: "Networking Fundamentals", lessons: [{ id: "linux-i-6", title: "Network Configuration", duration: "2h" }, { id: "linux-i-7", title: "SSH & Remote Access", duration: "1h 30m" }] },
  //     { title: "System Administration", lessons: [{ id: "linux-i-8", title: "Log Management", duration: "1h 15m" }, { id: "linux-i-9", title: "Backup Strategies", duration: "1h 30m" }] }
  //   ],
  //   totalLessons: 9,
  //   resources: []
  // },
  // {
  //   id: 1403,
  //   title: "Advanced Linux",
  //   category: "Linux",
  //   difficulty: "Advanced",
  //   duration: "40 hours",
  //   imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
  //   description: "Master the Linux kernel, security, and system administration.",
  //   instructor: { name: "Linus T.", title: "Linux Kernel Creator", avatar: "LT", bio: "..." },
  //   whatYouWillLearn: ["Kernel compilation", "Advanced security", "System administration"],
  //   modules: [
  //     { title: "Kernel Mastery", lessons: [{ id: "linux-a-1", title: "Kernel Architecture", duration: "2h 30m" }, { id: "linux-a-2", title: "Kernel Compilation", duration: "3h" }, { id: "linux-a-3", title: "Kernel Modules", duration: "2h" }] },
  //     { title: "Advanced Security", lessons: [{ id: "linux-a-4", title: "SELinux & AppArmor", duration: "2h 30m" }, { id: "linux-a-5", title: "Firewall Configuration", duration: "2h" }, { id: "linux-a-6", title: "Security Auditing", duration: "2h 15m" }] },
  //     { title: "Performance Tuning", lessons: [{ id: "linux-a-7", title: "System Optimization", duration: "2h 30m" }, { id: "linux-a-8", title: "Resource Monitoring", duration: "2h" }] },
  //     { title: "Enterprise Administration", lessons: [{ id: "linux-a-9", title: "High Availability", duration: "3h" }, { id: "linux-a-10", title: "Disaster Recovery", duration: "2h 30m" }] }
  //   ],
  //   totalLessons: 10,
  //   resources: []
  // },

  // --- AWS ---
  // ===================== AWS COURSES - INFINITY CLOUD LABS =====================

{
  id: 1,
  title: "AWS – Beginner",
  category: "AWS",
  difficulty: "Beginner",
  duration: "40 hours",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  description:
    "This foundational course introduces learners to the fundamentals of cloud computing and AWS services. It’s designed for beginners who want to understand cloud concepts, AWS global infrastructure, and the basics of key AWS compute, storage, and networking services. By the end, students will be able to navigate the AWS console, deploy their first EC2 instance, and manage simple storage resources.",
  instructor: {
    name: "Rajesh Vardhan Busam",
    title: "Cloud Architect",
    avatar: "J",
    bio: "Rajesh is a seasoned Cloud Architect with hands-on experience in AWS, DevSecOps, and infrastructure automation. He specializes in helping organizations build secure and scalable cloud platforms."
  },
  whatYouWillLearn: [
    "Understand core AWS concepts and terminology",
    "Launch and manage EC2 instances",
    "Work with S3 storage and EBS volumes",
    "Understand IAM and VPC basics",
    "Navigate the AWS Management Console confidently"
  ],
  modules: [
    {
      title: "Introduction to Cloud Computing",
      lessons: [
        { id: "aws-b-1", title: "What is Cloud Computing?", duration: "1h" },
        { id: "aws-b-2", title: "Advantages of Cloud Computing", duration: "45m" },
        { id: "aws-b-3", title: "Cloud Service and Deployment Models", duration: "1h" },
        { id: "aws-b-4", title: "Overview of AWS", duration: "1h" },
        { id: "aws-b-5", title: "Regions and Availability Zones", duration: "45m" },
        { id: "aws-b-6", title: "AWS Global Infrastructure (Lab)", duration: "1h 30m" }
      ]
    },
    {
      title: "Compute Services Overview (EC2)",
      lessons: [
        { id: "aws-b-7", title: "Introduction to Amazon EC2", duration: "1h 15m" },
        { id: "aws-b-8", title: "EC2 Console Walkthrough (Lab)", duration: "1h 30m" },
        { id: "aws-b-9", title: "Instance Types and Features", duration: "1h" },
        { id: "aws-b-10", title: "AMI and Key Pairs", duration: "1h" },
        { id: "aws-b-11", title: "Security Groups and Networking Basics", duration: "1h" },
        { id: "aws-b-12", title: "Public, Private, and Elastic IPs", duration: "45m" },
        { id: "aws-b-13", title: "EC2 Product Demonstration (Lab)", duration: "1h 30m" },
        { id: "aws-b-14", title: "Knowledge Check", duration: "30m" }
      ]
    },
    {
      title: "Elastic Block Store (EBS)",
      lessons: [
        { id: "aws-b-15", title: "Introduction to EBS", duration: "45m" },
        { id: "aws-b-16", title: "EBS Volume Types and Use Cases", duration: "1h" },
        { id: "aws-b-17", title: "EBS Lifecycle and Volume Management", duration: "1h" },
        { id: "aws-b-18", title: "Snapshots and AMIs", duration: "1h" },
        { id: "aws-b-19", title: "EBS Product Demonstration (Lab)", duration: "1h 30m" }
      ]
    },
    {
      title: "Simple Storage Service (S3)",
      lessons: [
        { id: "aws-b-20", title: "Introduction to S3", duration: "1h" },
        { id: "aws-b-21", title: "Bucket and Object Concepts", duration: "45m" },
        { id: "aws-b-22", title: "Object Versioning and Lifecycle Management", duration: "1h" },
        { id: "aws-b-23", title: "S3 Product Demonstration (Lab)", duration: "1h 30m" }
      ]
    },
    {
      title: "Identity and Access Management (IAM)",
      lessons: [
        { id: "aws-b-24", title: "Introduction to IAM", duration: "1h" },
        { id: "aws-b-25", title: "Users, Groups, and Roles", duration: "1h" },
        { id: "aws-b-26", title: "IAM Product Demonstration (Lab)", duration: "1h 15m" }
      ]
    },
    {
      title: "Networking Fundamentals (VPC)",
      lessons: [
        { id: "aws-b-27", title: "Introduction to VPC", duration: "1h" },
        { id: "aws-b-28", title: "Understanding CIDR", duration: "45m" },
        { id: "aws-b-29", title: "VPC Product Demonstration (Lab)", duration: "1h 30m" }
      ]
    }
  ],
  totalLessons: 29,
  resources: [
    { title: "AWS Documentation", link: "https://docs.aws.amazon.com" },
    { title: "AWS Free Tier", link: "https://aws.amazon.com/free/" },
    { title: "AWS CLI Setup Guide", link: "https://docs.aws.amazon.com/cli/latest/userguide/" }
  ]
},

// ------------------------------------------------------------------------

{
  id: 11,
  title: "AWS – Intermediate",
  category: "AWS",
  difficulty: "Intermediate",
  duration: "50 hours",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  description:
    "This intermediate course dives deeper into AWS compute, networking, and database services. Learners will build resilient VPC architectures, configure auto-scaling, and integrate key database services. Practical labs focus on hands-on AWS infrastructure deployment and scaling.",
  instructor: {
    name: "Rajesh Vardhan Busam",
    title: "Cloud Architect",
    avatar: "J",
    bio: "Rajesh is a certified AWS professional with extensive experience in DevOps, container orchestration, and security automation."
  },
  whatYouWillLearn: [
    "Designing and managing scalable AWS architectures",
    "Implementing load balancing and auto-scaling",
    "Working with relational and NoSQL databases on AWS",
    "Configuring IAM roles and security best practices"
  ],
  modules: [
    {
      title: "Virtual Private Cloud (VPC) Deep Dive",
      lessons: [
        { id: "aws-i-1", title: "VPC Design and Components", duration: "1h 30m" },
        { id: "aws-i-2", title: "Subnets, Route Tables, and Gateways", duration: "1h 45m" },
        { id: "aws-i-3", title: "VPC Peering and Transit Gateway", duration: "2h" },
        { id: "aws-i-4", title: "VPC Product Demonstration (Lab)", duration: "2h" }
      ]
    },
    {
      title: "Elastic Load Balancing & Auto Scaling",
      lessons: [
        { id: "aws-i-5", title: "Introduction to ELB and Auto Scaling", duration: "1h 30m" },
        { id: "aws-i-6", title: "Types of Load Balancers", duration: "1h" },
        { id: "aws-i-7", title: "Configuring Auto Scaling Groups", duration: "2h" },
        { id: "aws-i-8", title: "ELB & ASG Product Demonstration (Lab)", duration: "2h 15m" }
      ]
    },
    {
      title: "Database Services (RDS & DynamoDB)",
      lessons: [
        { id: "aws-i-9", title: "Introduction to RDS and Engine Types", duration: "1h 45m" },
        { id: "aws-i-10", title: "Multi-AZ Deployment & Read Replicas", duration: "1h 30m" },
        { id: "aws-i-11", title: "DynamoDB Essentials", duration: "1h 45m" },
        { id: "aws-i-12", title: "RDS & DynamoDB Product Demonstration (Lab)", duration: "2h" }
      ]
    },
    {
      title: "Monitoring and CloudFormation",
      lessons: [
        { id: "aws-i-13", title: "CloudWatch Metrics and Alarms", duration: "1h 45m" },
        { id: "aws-i-14", title: "CloudTrail for Logging and Auditing", duration: "1h 15m" },
        { id: "aws-i-15", title: "Infrastructure as Code with CloudFormation", duration: "2h" },
        { id: "aws-i-16", title: "CloudFormation Lab: Deploy Stack", duration: "2h 30m" }
      ]
    }
  ],
  totalLessons: 16,
  resources: [
    { title: "AWS CloudFormation Docs", link: "https://docs.aws.amazon.com/cloudformation/" },
    { title: "AWS CloudWatch Docs", link: "https://docs.aws.amazon.com/cloudwatch/" },
    { title: "AWS Auto Scaling Guide", link: "https://docs.aws.amazon.com/autoscaling/" }
  ]
},

// ------------------------------------------------------------------------

{
  id: 12,
  title: "AWS – Advanced",
  category: "AWS",
  difficulty: "Advanced",
  duration: "30 hours",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  description:
    "This advanced course is designed for professionals who want to master AWS at an enterprise level. Students will explore cloud security, advanced networking, monitoring, and serverless architecture. Labs will include real-world scenarios with best practices for automation, resilience, and compliance.",
  instructor: {
    name: "Rajesh Vardhan Busam",
    title: "Cloud Architect",
    avatar: "J",
    bio: "Rajesh specializes in advanced AWS architectures, hybrid networking, and cloud automation strategies for large-scale deployments."
  },
  whatYouWillLearn: [
    "Design and secure complex multi-account AWS architectures",
    "Implement hybrid networking with Direct Connect and VPNs",
    "Optimize cost and performance with Route 53 and CloudFront",
    "Apply AWS best practices for security and compliance"
  ],
  modules: [
    {
      title: "Advanced VPC and Connectivity",
      lessons: [
        { id: "aws-a-1", title: "VPC Peering and PrivateLink", duration: "2h" },
        { id: "aws-a-2", title: "Transit Gateway Architecture", duration: "2h 30m" },
        { id: "aws-a-3", title: "Direct Connect and VPN Solutions", duration: "2h 30m" }
      ]
    },
    {
      title: "Security and Compliance",
      lessons: [
        { id: "aws-a-4", title: "AWS WAF & Shield", duration: "2h" },
        { id: "aws-a-5", title: "CloudTrail and GuardDuty", duration: "2h" },
        { id: "aws-a-6", title: "IAM Advanced Policies and SCPs", duration: "1h 45m" }
      ]
    },
    {
      title: "Performance and Optimization",
      lessons: [
        { id: "aws-a-7", title: "CloudFront CDN Optimization", duration: "1h 30m" },
        { id: "aws-a-8", title: "Route 53 Advanced Routing Policies", duration: "1h 45m" },
        { id: "aws-a-9", title: "Global Accelerator and Failover Setup", duration: "2h" }
      ]
    },
    {
      title: "Final Project and Certification",
      lessons: [
        { id: "aws-a-10", title: "Enterprise Architecture Lab", duration: "3h" },
        { id: "aws-a-11", title: "Cost Optimization Review", duration: "1h" },
        { id: "aws-a-12", title: "Final Knowledge Assessment", duration: "1h 30m" }
      ]
    }
  ],
  totalLessons: 12,
  resources: [
    { title: "AWS Well-Architected Framework", link: "https://aws.amazon.com/architecture/well-architected/" },
    { title: "AWS Security Hub Docs", link: "https://docs.aws.amazon.com/securityhub/" },
    { title: "AWS Networking & Content Delivery", link: "https://aws.amazon.com/products/networking/" }
  ]
},

  // --- Azure ---
{
  id: 21,
  title: "Introduction to Azure Fundamentals",
  category: "Azure",
  difficulty: "Beginner",
  duration: "30h",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
  description:
    "This foundational course introduces Microsoft Azure, its core services, and essential cloud concepts. Perfect for beginners who want to start a career in cloud computing or prepare for the AZ-900 certification.",
  instructor: {
    name: "Jane Smith",
    title: "Azure Cloud Advocate",
    avatar: "JS",
    bio: "Azure evangelist with 10+ years of experience in cloud architecture, DevOps, and enterprise migrations."
  },
  whatYouWillLearn: [
    "Understand Azure architecture and global infrastructure",
    "Explore core Azure services such as Compute, Storage, and Networking",
    "Use the Azure Portal and CLI to deploy and manage resources",
    "Learn the basics of security, identity, and compliance in Azure"
  ],
  modules: [
    {
      title: "Azure Fundamentals",
      lessons: [
        { id: "az-b-1", title: "Introduction to Azure and Cloud Concepts", duration: "1h 30m" },
        { id: "az-b-2", title: "Navigating the Azure Portal and CLI", duration: "1h" },
        { id: "az-b-3", title: "Azure Regions, Availability Zones, and Resource Groups", duration: "1h 15m" }
      ]
    },
    {
      title: "Compute Services",
      lessons: [
        { id: "az-b-4", title: "Virtual Machines and VM Scale Sets", duration: "2h" },
        { id: "az-b-5", title: "Azure App Services and Container Instances", duration: "1h 45m" },
        { id: "az-b-6", title: "Azure Functions – Serverless Compute", duration: "1h 15m" }
      ]
    },
    {
      title: "Storage Solutions",
      lessons: [
        { id: "az-b-7", title: "Azure Storage Accounts Overview", duration: "2h" },
        { id: "az-b-8", title: "Blob, File, and Table Storage", duration: "2h" },
        { id: "az-b-9", title: "Azure SQL Database Basics", duration: "2h 15m" }
      ]
    },
    {
      title: "Networking Basics and Identity",
      lessons: [
        { id: "az-b-10", title: "Virtual Networks and Subnets", duration: "2h" },
        { id: "az-b-11", title: "Network Security Groups and Firewalls", duration: "1h 30m" },
        { id: "az-b-12", title: "Introduction to Azure Active Directory", duration: "1h 30m" }
      ]
    }
  ],
  totalLessons: 12,
  resources: [
    { title: "Microsoft Learn: Azure Fundamentals", link: "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/" },
    { title: "AZ-900 Certification Guide", link: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/" }
  ]
},
{
  id: 22,
  title: "Azure Administrator Associate (AZ-104)",
  category: "Azure",
  difficulty: "Intermediate",
  duration: "45h",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
  description:
    "Gain hands-on experience managing Azure resources, virtual networks, storage, and governance. This course prepares you for the AZ-104 certification and real-world cloud administration roles.",
  instructor: {
    name: "Jane Smith",
    title: "Azure Cloud Advocate",
    avatar: "JS",
    bio: "Certified Azure Solutions Architect with deep experience in administration, automation, and cloud governance."
  },
  whatYouWillLearn: [
    "Manage Azure identities, roles, and access policies",
    "Configure and secure storage, compute, and networking resources",
    "Implement backup, monitoring, and cost management solutions",
    "Deploy and manage Azure virtual machines and scale sets"
  ],
  modules: [
    {
      title: "Identity & Governance",
      lessons: [
        { id: "az-i-1", title: "Managing Azure Active Directory and Users", duration: "2h 30m" },
        { id: "az-i-2", title: "Role-Based Access Control (RBAC)", duration: "2h" },
        { id: "az-i-3", title: "Azure Policy and Resource Locks", duration: "1h 45m" }
      ]
    },
    {
      title: "Storage Management",
      lessons: [
        { id: "az-i-4", title: "Configuring Azure Storage Accounts", duration: "2h" },
        { id: "az-i-5", title: "Implementing Backup and Recovery", duration: "2h 15m" },
        { id: "az-i-6", title: "Azure Files and File Sync", duration: "1h 45m" }
      ]
    },
    {
      title: "Virtual Networking",
      lessons: [
        { id: "az-i-7", title: "Configuring Virtual Networks and Subnets", duration: "2h 30m" },
        { id: "az-i-8", title: "Implementing Network Security and VPN Gateways", duration: "2h 15m" }
      ]
    },
    {
      title: "Monitoring & Compliance",
      lessons: [
        { id: "az-i-9", title: "Azure Monitor and Log Analytics", duration: "2h" },
        { id: "az-i-10", title: "Cost Management and Budgeting", duration: "1h 30m" }
      ]
    }
  ],
  totalLessons: 10,
  resources: [
    { title: "AZ-104 Study Guide", link: "https://learn.microsoft.com/en-us/certifications/azure-administrator/" },
    { title: "Azure Monitoring Docs", link: "https://learn.microsoft.com/en-us/azure/azure-monitor/overview" }
  ]
},
{
  id: 23,
  title: "Designing Microsoft Azure Infrastructure Solutions (AZ-305)",
  category: "Azure",
  difficulty: "Advanced",
  duration: "55h",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
  description:
    "Master designing complex Azure infrastructure solutions. This course prepares you for the AZ-305 certification and teaches best practices in identity, governance, data, and networking design for scalable, secure environments.",
  instructor: {
    name: "Jane Smith",
    title: "Azure Cloud Advocate",
    avatar: "JS",
    bio: "Azure Solutions Architect with experience in enterprise-scale infrastructure design and hybrid cloud strategies."
  },
  whatYouWillLearn: [
    "Design for high availability and disaster recovery",
    "Architect secure, compliant, and resilient Azure solutions",
    "Integrate hybrid networking and identity",
    "Design advanced data storage and compute architectures"
  ],
  modules: [
    {
      title: "Design for Identity & Security",
      lessons: [
        { id: "az-a-1", title: "Design Authentication and Authorization Solutions", duration: "2h 30m" },
        { id: "az-a-2", title: "Develop a Security and Governance Strategy", duration: "2h 45m" },
        { id: "az-a-3", title: "Design for Hybrid Identity (AD Connect, SSO)", duration: "2h" }
      ]
    },
    {
      title: "Data Storage and Integration",
      lessons: [
        { id: "az-a-4", title: "Design Relational and NoSQL Data Storage", duration: "3h" },
        { id: "az-a-5", title: "Integrate Data Services (Synapse, Data Factory)", duration: "2h 30m" }
      ]
    },
    {
      title: "Business Continuity and Resilience",
      lessons: [
        { id: "az-a-6", title: "Design for High Availability and Fault Tolerance", duration: "3h" },
        { id: "az-a-7", title: "Disaster Recovery and Backup Strategies", duration: "2h 45m" },
        { id: "az-a-8", title: "Geo-Redundancy and Failover Design", duration: "2h 15m" }
      ]
    },
    {
      title: "Infrastructure and Networking Design",
      lessons: [
        { id: "az-a-9", title: "Design Compute Solutions (VMs, AKS, App Services)", duration: "2h 30m" },
        { id: "az-a-10", title: "Design Secure Network Architectures", duration: "3h" },
        { id: "az-a-11", title: "Design Hybrid Connectivity (VPN, ExpressRoute)", duration: "2h 30m" }
      ]
    }
  ],
  totalLessons: 11,
  resources: [
    { title: "AZ-305 Study Guide", link: "https://learn.microsoft.com/en-us/certifications/azure-solutions-architect/" },
    { title: "Azure Architecture Center", link: "https://learn.microsoft.com/en-us/azure/architecture/" }
  ]
},


  // --- GCP ---
{
  id: 31,
  title: "Google Cloud Platform for Beginners",
  category: "GCP",
  difficulty: "Beginner",
  duration: "30h",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
  description:
    "Get started with Google Cloud Platform (GCP) — learn its global infrastructure, core compute, storage, and networking services. Ideal for those preparing for the GCP Fundamentals (Cloud Digital Leader) certification.",
  instructor: {
    name: "Carlos Ray",
    title: "GCP Certified Professional",
    avatar: "CR",
    bio: "Cloud engineer and GCP architect with deep expertise in multi-cloud strategy, infrastructure automation, and serverless design."
  },
  whatYouWillLearn: [
    "Understand GCP architecture and global infrastructure",
    "Work with Compute Engine, App Engine, and Cloud Functions",
    "Store data using Cloud Storage and Cloud SQL",
    "Understand networking and IAM basics in GCP"
  ],
  modules: [
    {
      title: "GCP Fundamentals",
      lessons: [
        { id: "gcp-b-1", title: "Introduction to Google Cloud Platform", duration: "1h 30m" },
        { id: "gcp-b-2", title: "Navigating the GCP Console and Cloud Shell", duration: "1h" },
        { id: "gcp-b-3", title: "Understanding GCP Projects, Billing, and IAM", duration: "1h 15m" }
      ]
    },
    {
      title: "Compute Services",
      lessons: [
        { id: "gcp-b-4", title: "Compute Engine – VMs and Managed Instances", duration: "2h 30m" },
        { id: "gcp-b-5", title: "App Engine – Building Serverless Apps", duration: "2h" },
        { id: "gcp-b-6", title: "Cloud Functions and Cloud Run Basics", duration: "1h 45m" }
      ]
    },
    {
      title: "Storage & Databases",
      lessons: [
        { id: "gcp-b-7", title: "Introduction to Cloud Storage", duration: "2h" },
        { id: "gcp-b-8", title: "Using Cloud SQL and Firestore", duration: "2h 15m" }
      ]
    },
    {
      title: "Networking Essentials",
      lessons: [
        { id: "gcp-b-9", title: "VPCs, Subnets, and Firewalls", duration: "2h" },
        { id: "gcp-b-10", title: "Load Balancing and Cloud DNS", duration: "1h 45m" }
      ]
    }
  ],
  totalLessons: 10,
  resources: [
    { title: "GCP Free Tier", link: "https://cloud.google.com/free" },
    { title: "Google Cloud Fundamentals", link: "https://cloud.google.com/training/courses/cloud-fundamentals" }
  ]
},
{
  id: 32,
  title: "Google Cloud Associate Cloud Engineer",
  category: "GCP",
  difficulty: "Intermediate",
  duration: "40h",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
  description:
    "Prepare for the Associate Cloud Engineer certification. Learn to deploy applications, monitor resources, and manage GCP environments effectively using both console and command-line tools.",
  instructor: {
    name: "Carlos Ray",
    title: "GCP Certified Professional",
    avatar: "CR",
    bio: "Experienced cloud professional helping organizations build, secure, and optimize workloads on Google Cloud."
  },
  whatYouWillLearn: [
    "Set up and configure Google Cloud projects and billing",
    "Manage IAM policies, service accounts, and permissions",
    "Deploy and scale applications using GKE, Cloud Run, and Compute Engine",
    "Monitor and optimize cloud operations with Cloud Logging and Monitoring"
  ],
  modules: [
    {
      title: "Environment Setup & Identity",
      lessons: [
        { id: "gcp-i-1", title: "Creating and Managing Projects and Billing", duration: "2h" },
        { id: "gcp-i-2", title: "Configuring IAM, Roles, and Service Accounts", duration: "2h 15m" },
        { id: "gcp-i-3", title: "Working with Cloud SDK and gcloud CLI", duration: "1h 45m" }
      ]
    },
    {
      title: "Deployments and Application Management",
      lessons: [
        { id: "gcp-i-4", title: "Deploying Applications on Compute Engine", duration: "2h 30m" },
        { id: "gcp-i-5", title: "Containerized Deployments with Kubernetes Engine (GKE)", duration: "3h" },
        { id: "gcp-i-6", title: "Deploying Microservices using Cloud Run", duration: "2h 30m" }
      ]
    },
    {
      title: "Monitoring, Logging & Security",
      lessons: [
        { id: "gcp-i-7", title: "Using Cloud Monitoring and Cloud Logging", duration: "2h" },
        { id: "gcp-i-8", title: "Implementing Security Best Practices and IAM Controls", duration: "2h 15m" },
        { id: "gcp-i-9", title: "Backup, Snapshots, and Disaster Recovery", duration: "1h 45m" }
      ]
    },
    {
      title: "Compliance & Optimization",
      lessons: [
        { id: "gcp-i-10", title: "Compliance in Google Cloud", duration: "2h" },
        { id: "gcp-i-11", title: "Cost Optimization and Budgeting Tools", duration: "2h" }
      ]
    }
  ],
  totalLessons: 11,
  resources: [
    { title: "Associate Cloud Engineer Exam Guide", link: "https://cloud.google.com/certification/cloud-engineer" },
    { title: "GKE Documentation", link: "https://cloud.google.com/kubernetes-engine/docs" }
  ]
},
{
  id: 33,
  title: "Google Cloud Professional Cloud Architect",
  category: "GCP",
  difficulty: "Advanced",
  duration: "60h",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
  description:
    "Become a GCP Professional Cloud Architect — master the skills to design, develop, and manage scalable, secure, and compliant cloud solutions across hybrid and multi-cloud environments.",
  instructor: {
    name: "Carlos Ray",
    title: "GCP Certified Professional",
    avatar: "CR",
    bio: "Cloud architect focused on enterprise GCP transformations and secure hybrid architectures."
  },
  whatYouWillLearn: [
    "Design high-availability and scalable GCP architectures",
    "Secure GCP workloads with IAM, VPC Service Controls, and encryption",
    "Optimize performance and cost through monitoring and automation",
    "Architect for hybrid and multi-cloud environments"
  ],
  modules: [
    {
      title: "Solution Architecture & Design",
      lessons: [
        { id: "gcp-a-1", title: "Designing End-to-End Cloud Solutions", duration: "3h" },
        { id: "gcp-a-2", title: "Microservices and Event-Driven Architecture", duration: "2h 45m" },
        { id: "gcp-a-3", title: "Scalability, Resilience, and High Availability Design", duration: "3h" }
      ]
    },
    {
      title: "Security and Compliance Strategy",
      lessons: [
        { id: "gcp-a-4", title: "Designing Secure Architectures and IAM Strategy", duration: "3h" },
        { id: "gcp-a-5", title: "VPC Service Controls and Network Segmentation", duration: "2h 30m" },
        { id: "gcp-a-6", title: "Compliance Frameworks (HIPAA, GDPR, ISO)", duration: "2h 15m" }
      ]
    },
    {
      title: "Optimization and Reliability Engineering",
      lessons: [
        { id: "gcp-a-7", title: "Performance Tuning and Cost Optimization", duration: "3h" },
        { id: "gcp-a-8", title: "Automation with Cloud Deployment Manager and Terraform", duration: "2h 45m" }
      ]
    },
    {
      title: "Enterprise & Hybrid Solutions",
      lessons: [
        { id: "gcp-a-9", title: "Designing Hybrid Cloud and Edge Architectures", duration: "3h" },
        { id: "gcp-a-10", title: "Cloud Migration and Modernization Strategies", duration: "2h 45m" },
        { id: "gcp-a-11", title: "Observability and SRE Practices in GCP", duration: "2h 30m" }
      ]
    }
  ],
  totalLessons: 11,
  resources: [
    { title: "Professional Cloud Architect Exam Guide", link: "https://cloud.google.com/certification/cloud-architect" },
    { title: "GCP Architecture Framework", link: "https://cloud.google.com/architecture/framework" },
    { title: "GCP Best Practices", link: "https://cloud.google.com/docs/enterprise/best-practices-for-enterprise-organizations" }
  ]
},


  // --- Git ---
{
  id: 41,
  title: "Git for Absolute Beginners to Advanced",
  category: "Git",
  difficulty: "Beginner to Advanced",
  duration: "20 hours",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
  description:
    "Master Git from scratch — learn version control fundamentals, collaborate effectively with GitHub, and handle complex branching, merging, and rebase workflows used by professionals in DevOps and software engineering.",
  instructor: {
    name: "Priya M",
    title: "DevOps Specialist",
    avatar: "P",
    bio: "Priya is an experienced DevOps engineer specializing in CI/CD automation, Git branching workflows, and collaborative version control strategies for large-scale software projects."
  },
  whatYouWillLearn: [
    "Understand Git architecture and workflow",
    "Track changes and manage repositories",
    "Collaborate with remote repositories using GitHub",
    "Resolve merge conflicts and perform rebases",
    "Use advanced Git commands for production workflows"
  ],
  modules: [
    {
      title: "Introduction to Version Control",
      lessons: [
        { id: "git-b-1", title: "What is Version Control?", duration: "30m" },
        { id: "git-b-2", title: "Centralized vs Distributed Systems", duration: "45m" },
        { id: "git-b-3", title: "Installing Git on Linux, macOS, and Windows", duration: "30m" },
        { id: "git-b-4", title: "Basic Configuration (username, email, editor)", duration: "30m" }
      ]
    },
    {
      title: "Getting Started with Git",
      lessons: [
        { id: "git-b-5", title: "Initializing a Repository", duration: "1h" },
        { id: "git-b-6", title: "Understanding Working Directory, Staging Area, and Commit History", duration: "1h" },
        { id: "git-b-7", title: "Creating Your First Commit", duration: "45m" },
        { id: "git-b-8", title: "Viewing Commit History with git log", duration: "45m" }
      ]
    },
    {
      title: "Core Git Operations",
      lessons: [
        { id: "git-b-9", title: "Understanding the Git Three-Tree Architecture", duration: "1h" },
        { id: "git-b-10", title: "Working with git add, commit, and diff", duration: "1h" },
        { id: "git-b-11", title: "Undoing Changes (restore, reset, revert)", duration: "1h 15m" },
        { id: "git-b-12", title: "Inspecting Changes with git status and git log --graph", duration: "1h" }
      ]
    },
    {
      title: "Branching and Merging",
      lessons: [
        { id: "git-b-13", title: "Understanding Branches and HEAD", duration: "45m" },
        { id: "git-b-14", title: "Creating and Switching Branches", duration: "45m" },
        { id: "git-b-15", title: "Merging Branches (Fast-forward & Three-way Merge)", duration: "1h" },
        { id: "git-b-16", title: "Resolving Merge Conflicts", duration: "1h" },
        { id: "git-b-17", title: "Branch Management with git branch -d & -m", duration: "45m" }
      ]
    },
    {
      title: "Working with Remote Repositories",
      lessons: [
        { id: "git-b-18", title: "Introduction to GitHub and GitLab", duration: "1h" },
        { id: "git-b-19", title: "Connecting Local Repo to Remote (git remote add)", duration: "45m" },
        { id: "git-b-20", title: "Pushing and Pulling Changes", duration: "1h" },
        { id: "git-b-21", title: "Cloning Repositories", duration: "45m" },
        { id: "git-b-22", title: "Forking and Pull Requests (GitHub Flow)", duration: "1h 15m" }
      ]
    },
    {
      title: "Intermediate Git Concepts",
      lessons: [
        { id: "git-b-23", title: "Using git stash for Temporary Work", duration: "45m" },
        { id: "git-b-24", title: "Tagging and Release Management", duration: "1h" },
        { id: "git-b-25", title: "Working with git fetch vs git pull", duration: "45m" },
        { id: "git-b-26", title: "Tracking and Upstream Branches", duration: "45m" }
      ]
    },
    {
      title: "Rebasing, Cherry-Picking, and Advanced Workflows",
      lessons: [
        { id: "git-b-27", title: "Introduction to git rebase", duration: "1h" },
        { id: "git-b-28", title: "Interactive Rebase (git rebase -i)", duration: "1h 15m" },
        { id: "git-b-29", title: "Cherry-picking Commits", duration: "1h" },
        { id: "git-b-30", title: "Squashing Commits and Clean History", duration: "1h" },
        { id: "git-b-31", title: "Rewriting History with git reflog and filter-branch", duration: "1h 15m" }
      ]
    },
    {
      title: "Collaboration & Team Workflows",
      lessons: [
        { id: "git-b-32", title: "Collaborating through Pull Requests", duration: "1h" },
        { id: "git-b-33", title: "Code Review Best Practices", duration: "1h" },
        { id: "git-b-34", title: "Branching Strategies (Git Flow, GitHub Flow, Trunk-Based)", duration: "1h 15m" },
        { id: "git-b-35", title: "Resolving Remote Conflicts", duration: "1h" }
      ]
    },
    {
      title: "Git Tools and Integrations",
      lessons: [
        { id: "git-b-36", title: "Using Git GUI Clients (SourceTree, GitKraken, VS Code)", duration: "1h" },
        { id: "git-b-37", title: "Using .gitignore and Git Attributes", duration: "1h" },
        { id: "git-b-38", title: "Git Hooks for Automation", duration: "1h" },
        { id: "git-b-39", title: "Integrating Git with Jenkins and CI/CD Pipelines", duration: "1h 30m" }
      ]
    },
    {
      title: "Troubleshooting and Optimization",
      lessons: [
        { id: "git-b-40", title: "Fixing Detached HEAD State", duration: "45m" },
        { id: "git-b-41", title: "Recovering Lost Commits (git reflog)", duration: "1h" },
        { id: "git-b-42", title: "Git Maintenance (gc, prune, fsck)", duration: "1h" },
        { id: "git-b-43", title: "Performance Tips and Large Repos Handling", duration: "1h" }
      ]
    },
    {
      title: "Final Project & Certification",
      lessons: [
        { id: "git-b-44", title: "Building a Full GitHub Project from Scratch", duration: "1h 30m" },
        { id: "git-b-45", title: "Collaborating with Multiple Contributors", duration: "1h" },
        { id: "git-b-46", title: "Version Tagging and Release Workflow", duration: "1h" },
        { id: "git-b-47", title: "Final Quiz and Certification", duration: "1h" }
      ]
    }
  ],
  totalLessons: 47,
  resources: [
    { title: "Official Git Documentation", link: "https://git-scm.com/doc" },
    { title: "Pro Git Book (Free)", link: "https://git-scm.com/book/en/v2" },
    { title: "GitHub Learning Lab", link: "https://lab.github.com/" },
    { title: "Git Cheatsheet", link: "https://education.github.com/git-cheat-sheet-education.pdf" }
  ]
},

  // {
  //   id: 42,
  //   title: "Intermediate Git and GitHub",
  //   category: "Git",
  //   difficulty: "Intermediate",
  //   duration: "15 hours",
  //   imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
  //   description: "Level up your Git skills with rebasing, cherry-picking, and hooks.",
  //   instructor: { name: "Priya M", title: "DevOps Specialist", avatar: "P", bio: "..." },
  //   whatYouWillLearn: ["Interactive Rebasing", "Git Hooks", "Resolving complex merge conflicts"],
  //   modules: [
  //     { title: "Advanced Branching", lessons: [{ id: "git-i-1", title: "Rebasing", duration: "1h 45m" }, { id: "git-i-2", title: "Cherry-picking", duration: "1h 15m" }] },
  //     { title: "Conflict Resolution", lessons: [{ id: "git-i-3", title: "Merge Strategies", duration: "1h 30m" }, { id: "git-i-4", title: "Complex Conflicts", duration: "2h" }] },
  //     { title: "Automation", lessons: [{ id: "git-i-5", title: "Git Hooks", duration: "1h 45m" }, { id: "git-i-6", title: "Git Aliases", duration: "1h" }] },
  //     { title: "Team Workflows", lessons: [{ id: "git-i-7", title: "GitFlow", duration: "1h 30m" }, { id: "git-i-8", title: "Code Review", duration: "1h 15m" }] }
  //   ],
  //   totalLessons: 8,
  //   resources: []
  // },
  // {
  //   id: 43,
  //   title: "Git Internals and Advanced Workflows",
  //   category: "Git",
  //   difficulty: "Advanced",
  //   duration: "20 hours",
  //   imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
  //   description: "Understand the plumbing of Git and master complex repository management.",
  //   instructor: { name: "Priya M", title: "DevOps Specialist", avatar: "P", bio: "..." },
  //   whatYouWillLearn: ["Git objects and the DAG", "Custom Git scripting", "Managing large monorepos"],
  //   modules: [
  //     { title: "Git Internals", lessons: [{ id: "git-a-1", title: "Git Object Model", duration: "2h 30m" }, { id: "git-a-2", title: "The DAG", duration: "2h" }] },
  //     { title: "Advanced Scripting", lessons: [{ id: "git-a-3", title: "Plumbing Commands", duration: "2h 15m" }, { id: "git-a-4", title: "Custom Scripts", duration: "2h 30m" }] },
  //     { title: "Monorepo Management", lessons: [{ id: "git-a-5", title: "Sparse Checkout", duration: "2h" }, { id: "git-a-6", title: "Submodules & Subtrees", duration: "2h 15m" }] },
  //     { title: "Performance", lessons: [{ id: "git-a-7", title: "Repository Optimization", duration: "1h 45m" }, { id: "git-a-8", title: "Git LFS", duration: "1h 45m" }] }
  //   ],
  //   totalLessons: 8,
  //   resources: []
  // },

  // --- Jenkins ---
  // ===================== JENKINS COURSES - INFINITY CLOUD LABS =====================

{
  id: 51,
  title: "Jenkins for Beginners",
  category: "Jenkins",
  difficulty: "Beginner",
  duration: "15 hours",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg",
  description:
    "Learn Jenkins from scratch and understand how to automate builds, tests, and deployments. This beginner-friendly course introduces Jenkins concepts, installation, UI navigation, and freestyle jobs to get you started with CI/CD fundamentals.",
  instructor: {
    name: "Priya M",
    title: "DevOps Specialist",
    avatar: "P",
    bio: "Priya is a DevOps engineer with expertise in CI/CD, Jenkins, and automation workflows for modern development pipelines."
  },
  whatYouWillLearn: [
    "Understand Jenkins architecture and installation process",
    "Create and configure freestyle and basic pipeline jobs",
    "Integrate Jenkins with Git for automated builds"
  ],
  modules: [
    {
      title: "Getting Started with Jenkins",
      lessons: [
        { id: "jen-b-1", title: "Introduction to Continuous Integration and Jenkins", duration: "45m" },
        { id: "jen-b-2", title: "Installing Jenkins on Linux and Windows", duration: "1h 30m" },
        { id: "jen-b-3", title: "Jenkins Dashboard and User Interface Overview", duration: "1h" },
        { id: "jen-b-4", title: "Jenkins Architecture and Components", duration: "45m" }
      ]
    },
    {
      title: "Building and Configuring Jobs",
      lessons: [
        { id: "jen-b-5", title: "Creating Your First Freestyle Job", duration: "1h 15m" },
        { id: "jen-b-6", title: "Build Triggers and SCM Integration", duration: "1h 15m" },
        { id: "jen-b-7", title: "Parameterized Builds", duration: "1h" },
        { id: "jen-b-8", title: "Understanding Build History and Console Output", duration: "45m" }
      ]
    },
    {
      title: "Basic Pipelines and Automation",
      lessons: [
        { id: "jen-b-9", title: "Introduction to Jenkins Pipelines", duration: "1h" },
        { id: "jen-b-10", title: "Creating Basic Declarative Pipelines", duration: "1h 30m" },
        { id: "jen-b-11", title: "Using Jenkinsfile in SCM", duration: "1h 15m" },
        { id: "jen-b-12", title: "Post-Build Actions and Notifications", duration: "1h" }
      ]
    },
    {
      title: "Plugins and Maintenance",
      lessons: [
        { id: "jen-b-13", title: "Installing and Managing Plugins", duration: "1h" },
        { id: "jen-b-14", title: "Jenkins Backup and Restore", duration: "1h" },
        { id: "jen-b-15", title: "System Administration Basics", duration: "1h" },
        { id: "jen-b-16", title: "Jenkins Best Practices for Beginners", duration: "1h" }
      ]
    }
  ],
  totalLessons: 16,
  resources: [
    { title: "Jenkins Official Docs", link: "https://www.jenkins.io/doc/" },
    { title: "Jenkins User Handbook", link: "https://www.jenkins.io/doc/book/" }
  ]
},

// ------------------------------------------------------------------------

{
  id: 52,
  title: "Jenkins CI/CD Pipeline Automation",
  category: "Jenkins",
  difficulty: "Intermediate",
  duration: "25 hours",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg",
  description:
    "Master CI/CD pipeline automation using Jenkins. Learn to build declarative and scripted pipelines, integrate Jenkins with Git, Docker, and test automation tools to streamline modern software delivery.",
  instructor: {
    name: "Priya M",
    title: "DevOps Specialist",
    avatar: "P",
    bio: "Priya has implemented CI/CD pipelines for enterprise-scale applications integrating Jenkins, Docker, GitHub, and Kubernetes."
  },
  whatYouWillLearn: [
    "Design and implement CI/CD pipelines in Jenkins",
    "Use Declarative and Scripted Pipeline syntax",
    "Integrate Jenkins with Git, Docker, and testing tools",
    "Implement build notifications and environment-based deployments"
  ],
  modules: [
    {
      title: "Pipeline Fundamentals",
      lessons: [
        { id: "jen-i-1", title: "Understanding Jenkins Pipelines", duration: "1h 15m" },
        { id: "jen-i-2", title: "Declarative vs Scripted Pipelines", duration: "1h" },
        { id: "jen-i-3", title: "Creating and Managing Jenkinsfiles", duration: "1h 30m" },
        { id: "jen-i-4", title: "Pipeline Stages, Steps, and Post Conditions", duration: "1h 15m" }
      ]
    },
    {
      title: "CI/CD Pipeline Implementation",
      lessons: [
        { id: "jen-i-5", title: "Building a Complete CI Pipeline", duration: "2h" },
        { id: "jen-i-6", title: "Adding Unit and Integration Tests", duration: "1h 30m" },
        { id: "jen-i-7", title: "Deploying Artifacts with Jenkins", duration: "1h 15m" },
        { id: "jen-i-8", title: "Pipeline Visualization and Blue Ocean", duration: "1h" }
      ]
    },
    {
      title: "Integrations",
      lessons: [
        { id: "jen-i-9", title: "Git and GitHub Integration", duration: "1h 15m" },
        { id: "jen-i-10", title: "Docker Integration and Containerized Builds", duration: "2h" },
        { id: "jen-i-11", title: "Maven and Gradle Integration", duration: "1h 30m" },
        { id: "jen-i-12", title: "SonarQube and Code Quality Checks", duration: "1h 15m" }
      ]
    },
    {
      title: "Automation & Notifications",
      lessons: [
        { id: "jen-i-13", title: "Email, Slack, and Webhook Notifications", duration: "1h" },
        { id: "jen-i-14", title: "Parameterized and Multi-Branch Pipelines", duration: "1h 45m" },
        { id: "jen-i-15", title: "Pipeline Library Reuse", duration: "1h" },
        { id: "jen-i-16", title: "CI/CD Demo: End-to-End Automation", duration: "2h" }
      ]
    }
  ],
  totalLessons: 16,
  resources: [
    { title: "Jenkins Pipeline Syntax Reference", link: "https://www.jenkins.io/doc/book/pipeline/syntax/" },
    { title: "Blue Ocean Docs", link: "https://www.jenkins.io/doc/book/blueocean/" },
    { title: "SonarQube Integration Guide", link: "https://docs.sonarqube.org/latest/analysis/scan/sonarscanner-for-jenkins/" }
  ]
},

// ------------------------------------------------------------------------

{
  id: 53,
  title: "Jenkins Masterclass – Secure CI/CD",
  category: "Jenkins",
  difficulty: "Advanced",
  duration: "35 hours",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg",
  description:
    "Gain enterprise-grade Jenkins skills focusing on scalability, performance, and security. Learn advanced techniques like distributed builds, credential management, container agents, and high-availability setups.",
  instructor: {
    name: "Krishna R",
    title: "Security Expert",
    avatar: "K",
    bio: "Krishna is a DevSecOps architect with a decade of experience in CI/CD automation, security hardening, and large-scale Jenkins cluster management."
  },
  whatYouWillLearn: [
    "Implement Jenkins security and credential management",
    "Optimize Jenkins for scale and distributed performance",
    "Integrate Jenkins with Kubernetes and cloud environments",
    "Build resilient, secure CI/CD pipelines with auditing and compliance"
  ],
  modules: [
    {
      title: "Jenkins Security Essentials",
      lessons: [
        { id: "jen-a-1", title: "Authentication Methods (LDAP, SSO, OAuth)", duration: "2h" },
        { id: "jen-a-2", title: "Authorization Strategies (Matrix, Role-Based, Folder)", duration: "2h 15m" },
        { id: "jen-a-3", title: "Credentials Management and Secret Masking", duration: "2h" },
        { id: "jen-a-4", title: "Jenkins Hardening and Security Best Practices", duration: "2h" }
      ]
    },
    {
      title: "Scaling and Performance Optimization",
      lessons: [
        { id: "jen-a-5", title: "Master-Agent Architecture Deep Dive", duration: "2h" },
        { id: "jen-a-6", title: "Distributed Builds and Node Management", duration: "2h 30m" },
        { id: "jen-a-7", title: "High Availability and Backup Strategies", duration: "2h 45m" },
        { id: "jen-a-8", title: "Performance Tuning and Caching", duration: "2h" }
      ]
    },
    {
      title: "Cloud and Container Integration",
      lessons: [
        { id: "jen-a-9", title: "Running Jenkins on Docker and Kubernetes", duration: "2h" },
        { id: "jen-a-10", title: "Ephemeral Build Agents and Cloud Scaling", duration: "2h 15m" },
        { id: "jen-a-11", title: "AWS, GCP, and Azure Integrations", duration: "2h 30m" },
        { id: "jen-a-12", title: "Container Security in Jenkins Pipelines", duration: "2h" }
      ]
    },
    {
      title: "Enterprise Automation and Compliance",
      lessons: [
        { id: "jen-a-13", title: "Jenkinsfile Libraries and Reusable Pipelines", duration: "2h" },
        { id: "jen-a-14", title: "Audit Logging and Compliance Monitoring", duration: "2h" },
        { id: "jen-a-15", title: "Disaster Recovery and Failover Setup", duration: "2h 30m" },
        { id: "jen-a-16", title: "Final Capstone Project – Secure CI/CD Pipeline", duration: "3h" }
      ]
    }
  ],
  totalLessons: 16,
  resources: [
    { title: "Jenkins Security Guide", link: "https://www.jenkins.io/doc/book/security/" },
    { title: "Cloud Native Jenkins with Kubernetes", link: "https://plugins.jenkins.io/kubernetes/" },
    { title: "Jenkins Distributed Builds", link: "https://www.jenkins.io/doc/book/distributed/" }
  ]
},

  {
  id: 61,
  title: "Ansible Automation – From Zero to Hero",
  category: "Ansible",
  difficulty: "Beginner to Advanced",
  duration: "35 hours",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ansible_logo.svg",
  description:
    "Master IT automation with Ansible from basics to advanced enterprise playbook design. Learn how to manage servers, deploy applications, and automate everything from provisioning to orchestration with real-world examples.",
  instructor: {
    name: "Priya M",
    title: "DevOps Specialist",
    avatar: "P",
    bio: "Priya is a seasoned DevOps engineer and automation architect with deep expertise in Ansible, Jenkins, Terraform, and Kubernetes automation workflows."
  },
  whatYouWillLearn: [
    "Ansible architecture, inventory, and YAML syntax",
    "Writing and running playbooks for automation",
    "Managing roles, collections, and Jinja2 templates",
    "Using Ansible Vault for secrets and security",
    "Implementing enterprise workflows with AWX/Tower"
  ],
  modules: [
    {
      title: "Introduction to Ansible",
      lessons: [
        { id: "ans-1", title: "What is Configuration Management?", duration: "45m" },
        { id: "ans-2", title: "Ansible Overview and Use Cases", duration: "45m" },
        { id: "ans-3", title: "Installing and Configuring Ansible", duration: "1h 15m" },
        { id: "ans-4", title: "Understanding YAML and Syntax Basics", duration: "1h" },
        { id: "ans-5", title: "Ad-Hoc Commands and Inventory Files", duration: "1h 30m" }
      ]
    },
    {
      title: "Core Concepts and Playbooks",
      lessons: [
        { id: "ans-6", title: "Anatomy of a Playbook", duration: "1h" },
        { id: "ans-7", title: "Modules and Tasks in Ansible", duration: "1h 30m" },
        { id: "ans-8", title: "Conditionals, Loops, and Handlers", duration: "1h 15m" },
        { id: "ans-9", title: "Working with Inventory Groups", duration: "1h" },
        { id: "ans-10", title: "Playbook Execution Flow (Lab)", duration: "1h 30m" }
      ]
    },
    {
      title: "Variables, Templates, and Files",
      lessons: [
        { id: "ans-11", title: "Defining and Using Variables", duration: "1h" },
        { id: "ans-12", title: "Facts and Registered Variables", duration: "1h" },
        { id: "ans-13", title: "Jinja2 Templates and Dynamic Configurations", duration: "1h 30m" },
        { id: "ans-14", title: "Files, Copy, and Template Modules (Lab)", duration: "1h" }
      ]
    },
    {
      title: "Roles, Collections, and Best Practices",
      lessons: [
        { id: "ans-15", title: "Introduction to Roles and Directory Structure", duration: "1h 30m" },
        { id: "ans-16", title: "Creating and Reusing Roles", duration: "1h 15m" },
        { id: "ans-17", title: "Using Ansible Galaxy and Collections", duration: "1h" },
        { id: "ans-18", title: "Best Practices for Large Playbooks", duration: "1h" }
      ]
    },
    {
      title: "Advanced Playbooks and Error Handling",
      lessons: [
        { id: "ans-19", title: "Error Handling and Blocks", duration: "1h 15m" },
        { id: "ans-20", title: "Using Tags and Includes", duration: "1h" },
        { id: "ans-21", title: "Delegation, Local Actions, and Handlers", duration: "1h" },
        { id: "ans-22", title: "Custom Modules and Plugins", duration: "2h" }
      ]
    },
    {
      title: "Enterprise Automation with AWX/Tower",
      lessons: [
        { id: "ans-23", title: "Introduction to Ansible Tower / AWX", duration: "1h 15m" },
        { id: "ans-24", title: "Creating and Scheduling Jobs in AWX", duration: "1h 30m" },
        { id: "ans-25", title: "Managing Credentials and Inventories", duration: "1h 15m" },
        { id: "ans-26", title: "Workflows and Job Templates (Lab)", duration: "1h 45m" }
      ]
    },
    {
      title: "Security, Vault, and Compliance",
      lessons: [
        { id: "ans-27", title: "Introduction to Ansible Vault", duration: "1h" },
        { id: "ans-28", title: "Encrypting Sensitive Data", duration: "1h" },
        { id: "ans-29", title: "Managing Secrets and Tokens", duration: "1h" },
        { id: "ans-30", title: "Compliance and Security Hardening (Lab)", duration: "1h 30m" }
      ]
    },
    {
      title: "Final Project and Enterprise Orchestration",
      lessons: [
        { id: "ans-31", title: "Orchestrating Multi-Tier Applications", duration: "2h" },
        { id: "ans-32", title: "Dynamic Inventories and Cloud Integration (AWS, GCP)", duration: "1h 30m" },
        { id: "ans-33", title: "End-to-End Automation Project", duration: "2h 30m" },
        { id: "ans-34", title: "Final Assessment and Certification", duration: "1h" }
      ]
    }
  ],
  totalLessons: 34,
  resources: [
    { title: "Ansible Documentation", link: "https://docs.ansible.com" },
    { title: "Ansible Galaxy", link: "https://galaxy.ansible.com" },
    { title: "AWX / Tower User Guide", link: "https://docs.ansible.com/ansible-tower/latest/html/userguide/" },
    { title: "Jinja2 Templates Reference", link: "https://jinja.palletsprojects.com/" }
  ]
},

  // --- Docker ---
{
  id: 71,
  title: "Docker & Container Orchestration – From Zero to Expert",
  category: "Docker",
  difficulty: "Beginner to Advanced",
  duration: "40 hours",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_logo.svg",
  description:
    "Become a Docker expert by mastering containerization from fundamentals to production orchestration. Learn to build, run, and manage containers, design efficient Dockerfiles, and deploy containerized applications using Docker Swarm and Compose.",
  instructor: {
    name: "Krishna R",
    title: "Container Expert",
    avatar: "K",
    bio: "Krishna is a seasoned containerization expert with extensive experience in deploying scalable microservices and secure container platforms using Docker, Swarm, and Kubernetes."
  },
  whatYouWillLearn: [
    "Container fundamentals and Docker architecture",
    "Building images and managing containers efficiently",
    "Networking, storage, and multi-container applications",
    "Docker Compose and Swarm orchestration",
    "Production security, logging, and performance tuning"
  ],
  modules: [
    {
      title: "Getting Started with Containerization",
      lessons: [
        { id: "doc-1", title: "Introduction to Containers and Virtualization", duration: "1h" },
        { id: "doc-2", title: "What is Docker? Use Cases and Benefits", duration: "1h 15m" },
        { id: "doc-3", title: "Installing Docker on Linux, macOS, and Windows", duration: "1h" },
        { id: "doc-4", title: "Docker Architecture (Client, Daemon, Registry)", duration: "1h 15m" }
      ]
    },
    {
      title: "Working with Docker Images and Containers",
      lessons: [
        { id: "doc-5", title: "Creating and Running Containers", duration: "1h 15m" },
        { id: "doc-6", title: "Image Management and Layers", duration: "1h 30m" },
        { id: "doc-7", title: "Building Custom Images using Dockerfile", duration: "2h" },
        { id: "doc-8", title: "Docker CLI and Common Commands", duration: "1h 15m" },
        { id: "doc-9", title: "Container Lifecycle (Run, Stop, Remove)", duration: "1h" }
      ]
    },
    {
      title: "Volumes, Networking, and Data Management",
      lessons: [
        { id: "doc-10", title: "Understanding Volumes and Bind Mounts", duration: "1h 15m" },
        { id: "doc-11", title: "Managing Persistent Data", duration: "1h 15m" },
        { id: "doc-12", title: "Docker Networking Basics (Bridge, Host, None)", duration: "1h 30m" },
        { id: "doc-13", title: "Custom Networks and Container Communication", duration: "1h 30m" },
        { id: "doc-14", title: "Lab: Multi-Container Networking Demo", duration: "1h" }
      ]
    },
    {
      title: "Docker Compose – Multi-Container Applications",
      lessons: [
        { id: "doc-15", title: "Introduction to Docker Compose", duration: "1h" },
        { id: "doc-16", title: "Defining Services with docker-compose.yml", duration: "1h 15m" },
        { id: "doc-17", title: "Running and Scaling Multi-Container Apps", duration: "1h 15m" },
        { id: "doc-18", title: "Networking and Environment Variables in Compose", duration: "1h" },
        { id: "doc-19", title: "Lab: Deploy a Full Stack App using Compose", duration: "1h 45m" }
      ]
    },
    {
      title: "Docker in Production Environments",
      lessons: [
        { id: "doc-20", title: "Optimizing Dockerfiles with Multi-Stage Builds", duration: "1h 30m" },
        { id: "doc-21", title: "Using Health Checks and Restart Policies", duration: "1h 15m" },
        { id: "doc-22", title: "Managing Docker Logs and Inspecting Containers", duration: "1h" },
        { id: "doc-23", title: "Resource Constraints and Limits (CPU, Memory)", duration: "1h" },
        { id: "doc-24", title: "Lab: Deploying a Production-Ready Container", duration: "1h 30m" }
      ]
    },
    {
      title: "Docker Swarm Orchestration",
      lessons: [
        { id: "doc-25", title: "Introduction to Docker Swarm", duration: "1h 15m" },
        { id: "doc-26", title: "Swarm Architecture and Cluster Setup", duration: "1h 30m" },
        { id: "doc-27", title: "Service Deployment and Scaling", duration: "1h 30m" },
        { id: "doc-28", title: "Rolling Updates and Rollbacks", duration: "1h 15m" },
        { id: "doc-29", title: "Lab: Multi-Node Swarm Cluster Deployment", duration: "2h" }
      ]
    },
    {
      title: "Security and Performance Optimization",
      lessons: [
        { id: "doc-30", title: "Docker Security Best Practices", duration: "1h 15m" },
        { id: "doc-31", title: "User Permissions and Rootless Mode", duration: "1h" },
        { id: "doc-32", title: "Scanning Images for Vulnerabilities", duration: "1h 15m" },
        { id: "doc-33", title: "Performance Tuning and Caching Strategies", duration: "1h 30m" },
        { id: "doc-34", title: "Docker Bench and Security Auditing", duration: "1h" }
      ]
    },
    {
      title: "Final Project and Capstone",
      lessons: [
        { id: "doc-35", title: "End-to-End Project: Microservices with Docker Compose", duration: "2h 15m" },
        { id: "doc-36", title: "Container Monitoring with Prometheus and Grafana", duration: "1h 45m" },
        { id: "doc-37", title: "Docker Registry and Image Management", duration: "1h 15m" },
        { id: "doc-38", title: "Troubleshooting and Debugging Containers", duration: "1h 30m" },
        { id: "doc-39", title: "Final Quiz and Certification", duration: "1h" }
      ]
    }
  ],
  totalLessons: 39,
  resources: [
    { title: "Docker Official Docs", link: "https://docs.docker.com" },
    { title: "Dockerfile Reference", link: "https://docs.docker.com/engine/reference/builder/" },
    { title: "Docker Compose Reference", link: "https://docs.docker.com/compose/compose-file/" },
    { title: "Docker Security Guide", link: "https://docs.docker.com/engine/security/" },
    { title: "Docker Swarm Overview", link: "https://docs.docker.com/engine/swarm/" }
  ]
},

  // --- Kubernetes ---
  {
  id: 81,
  title: "Kubernetes for Beginners",
  category: "Kubernetes",
  difficulty: "Beginner",
  duration: "20 hours",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
  description:
    "Learn Kubernetes fundamentals and gain hands-on experience in container orchestration. This course is ideal for beginners starting their DevOps journey or transitioning from Docker to Kubernetes.",
  instructor: { name: "Priya M", title: "DevOps Specialist", avatar: "P", bio: "DevOps and Cloud Automation Expert" },
  whatYouWillLearn: [
    "Understand Kubernetes architecture and core components",
    "Deploy and manage Pods, ReplicaSets, and Deployments",
    "Work with Services, Namespaces, and Configurations"
  ],
  modules: [
    {
      title: "Kubernetes Fundamentals",
      lessons: [
        { id: "k8s-b-1", title: "Introduction to Container Orchestration", duration: "1h" },
        { id: "k8s-b-2", title: "Kubernetes Architecture (Master & Worker Nodes)", duration: "2h" },
        { id: "k8s-b-3", title: "Key Components: API Server, etcd, Scheduler, Kubelet, Proxy", duration: "1h 30m" },
        { id: "k8s-b-4", title: "Installing Kubernetes (Minikube & kubeadm)", duration: "2h" }
      ]
    },
    {
      title: "Core Kubernetes Objects",
      lessons: [
        { id: "k8s-b-5", title: "Pods and ReplicaSets", duration: "1h 30m" },
        { id: "k8s-b-6", title: "Deployments and Rolling Updates", duration: "1h 45m" },
        { id: "k8s-b-7", title: "Namespaces and Labels", duration: "1h" },
        { id: "k8s-b-8", title: "Services: ClusterIP, NodePort, LoadBalancer", duration: "2h" }
      ]
    },
    {
      title: "Configuration and Management",
      lessons: [
        { id: "k8s-b-9", title: "ConfigMaps and Secrets", duration: "1h 30m" },
        { id: "k8s-b-10", title: "Resource Requests and Limits", duration: "1h" },
        { id: "k8s-b-11", title: "Probes: Liveness, Readiness, and Startup", duration: "1h 15m" }
      ]
    },
    {
      title: "Hands-on Labs and Troubleshooting",
      lessons: [
        { id: "k8s-b-12", title: "Using kubectl and YAML manifests", duration: "1h" },
        { id: "k8s-b-13", title: "Debugging and Viewing Pod Logs", duration: "1h" },
        { id: "k8s-b-14", title: "Deploying a Simple App (Lab)", duration: "1h 30m" }
      ]
    }
  ],
  totalLessons: 14,
  resources: [
    { title: "Kubernetes Docs", link: "https://kubernetes.io/docs/home/" },
    { title: "kubectl Cheat Sheet", link: "https://kubernetes.io/docs/reference/kubectl/cheatsheet/" }
  ]
},

{
  id: 82,
  title: "Kubernetes Administrator (CKA Level)",
  category: "Kubernetes",
  difficulty: "Intermediate",
  duration: "40 hours",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
  description:
    "Prepare for Kubernetes administration and CKA certification. Learn to manage clusters, networking, storage, and workloads with real-world labs and tasks aligned to the official CKA exam objectives.",
  instructor: { name: "Priya M", title: "DevOps Specialist", avatar: "P", bio: "Certified Kubernetes Administrator and DevOps Trainer" },
  whatYouWillLearn: [
    "Cluster setup, maintenance, and upgrades",
    "Networking, storage, and resource management",
    "Troubleshooting and performance tuning"
  ],
  modules: [
    {
      title: "Cluster Setup and Management",
      lessons: [
        { id: "k8s-i-1", title: "Setting up a Multi-node Cluster using kubeadm", duration: "3h" },
        { id: "k8s-i-2", title: "Cluster Maintenance, Upgrades, and Backups", duration: "2h 30m" },
        { id: "k8s-i-3", title: "Managing etcd and Control Plane Components", duration: "2h" },
        { id: "k8s-i-4", title: "Node Management and Taints/Tolerations", duration: "1h 45m" }
      ]
    },
    {
      title: "Workload and Resource Management",
      lessons: [
        { id: "k8s-i-5", title: "DaemonSets, StatefulSets, and Jobs", duration: "2h 30m" },
        { id: "k8s-i-6", title: "Advanced Scheduling and Affinity Rules", duration: "2h" },
        { id: "k8s-i-7", title: "ConfigMaps, Secrets, and Environment Variables", duration: "1h 45m" }
      ]
    },
    {
      title: "Networking and Services",
      lessons: [
        { id: "k8s-i-8", title: "CNI, CoreDNS, and kube-proxy Deep Dive", duration: "2h 15m" },
        { id: "k8s-i-9", title: "Network Policies and Ingress Controllers", duration: "2h 30m" },
        { id: "k8s-i-10", title: "Troubleshooting Network Connectivity", duration: "1h 45m" }
      ]
    },
    {
      title: "Storage and Persistent Volumes",
      lessons: [
        { id: "k8s-i-11", title: "Persistent Volumes and Claims", duration: "2h" },
        { id: "k8s-i-12", title: "Dynamic Provisioning and StorageClasses", duration: "1h 30m" },
        { id: "k8s-i-13", title: "Container Storage Interface (CSI)", duration: "1h 15m" }
      ]
    },
    {
      title: "Monitoring, Logging, and Troubleshooting",
      lessons: [
        { id: "k8s-i-14", title: "Metrics Server and kubectl top", duration: "1h" },
        { id: "k8s-i-15", title: "Logging with Fluentd and Elastic Stack", duration: "1h 45m" },
        { id: "k8s-i-16", title: "Debugging Pods, Nodes, and Events", duration: "1h 45m" },
        { id: "k8s-i-17", title: "CKA Practice Exam Labs", duration: "2h" }
      ]
    }
  ],
  totalLessons: 17,
  resources: [
    { title: "CKA Exam Curriculum", link: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/" },
    { title: "Kubernetes Docs", link: "https://kubernetes.io/docs/home/" }
  ]
},

{
  id: 83,
  title: "Kubernetes Advanced – Security & Enterprise Operations",
  category: "Kubernetes",
  difficulty: "Advanced",
  duration: "35 hours",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
  description:
    "Master Kubernetes security and advanced cluster operations. Learn RBAC, Pod security, network policies, auditing, and compliance for managing enterprise-grade Kubernetes environments.",
  instructor: { name: "Krishna R", title: "Security Expert", avatar: "K", bio: "Kubernetes and Cloud Security Specialist" },
  whatYouWillLearn: [
    "Implement Kubernetes RBAC and advanced access control",
    "Secure workloads with Pod and Network Policies",
    "Harden clusters using auditing and runtime security"
  ],
  modules: [
    {
      title: "Access Control and Identity Management",
      lessons: [
        { id: "k8s-a-1", title: "Understanding RBAC and RoleBindings", duration: "2h 30m" },
        { id: "k8s-a-2", title: "Service Accounts and Authentication", duration: "2h" },
        { id: "k8s-a-3", title: "Securing Access with API Server and Certificates", duration: "2h" }
      ]
    },
    {
      title: "Pod and Network Security",
      lessons: [
        { id: "k8s-a-4", title: "Pod Security Standards (PSS)", duration: "2h" },
        { id: "k8s-a-5", title: "Network Policies and Traffic Segmentation", duration: "2h 30m" },
        { id: "k8s-a-6", title: "Ingress/Egress Controls and Firewalls", duration: "2h" }
      ]
    },
    {
      title: "Secrets Management and Data Protection",
      lessons: [
        { id: "k8s-a-7", title: "Managing Kubernetes Secrets Securely", duration: "1h 45m" },
        { id: "k8s-a-8", title: "Encrypting Secrets at Rest", duration: "1h 30m" },
        { id: "k8s-a-9", title: "Integrating HashiCorp Vault for Secret Rotation", duration: "2h" }
      ]
    },
    {
      title: "Auditing, Compliance, and Runtime Security",
      lessons: [
        { id: "k8s-a-10", title: "Auditing and API Logging", duration: "2h" },
        { id: "k8s-a-11", title: "PodSecurity Admission and OPA/Gatekeeper", duration: "2h 15m" },
        { id: "k8s-a-12", title: "Runtime Security using Falco", duration: "2h" },
        { id: "k8s-a-13", title: "Final Capstone: Hardening a Production Cluster", duration: "3h" }
      ]
    }
  ],
  totalLessons: 13,
  resources: [
    { title: "Kubernetes Security Docs", link: "https://kubernetes.io/docs/concepts/security/" },
    { title: "CIS Kubernetes Benchmark", link: "https://www.cisecurity.org/benchmark/kubernetes" },
    { title: "Falco Runtime Security", link: "https://falco.org/" }
  ]
},



 {
  id: 91,
  title: "Prometheus & Grafana 101",
  category: "Prometheus & Grafana",
  difficulty: "Beginner",
  duration: "18 hours",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg",
  description:
    "Start your journey into monitoring and observability using Prometheus and Grafana. This beginner-level course covers core monitoring concepts, setup, and basic dashboarding.",
  instructor: { name: "Rajesh Vardhan Busam", title: "Cloud Architect", avatar: "J", bio: "Cloud and DevOps Architect with expertise in monitoring and observability." },
  whatYouWillLearn: [
    "Understand key concepts of monitoring and metrics",
    "Install and configure Prometheus and Grafana",
    "Visualize metrics and create interactive dashboards"
  ],
  modules: [
    {
      title: "Monitoring Fundamentals",
      lessons: [
        { id: "prom-b-1", title: "Introduction to Monitoring and Observability", duration: "1h 30m" },
        { id: "prom-b-2", title: "Understanding Metrics, Logs, and Traces", duration: "1h" },
        { id: "prom-b-3", title: "Overview of Prometheus and Grafana Architecture", duration: "1h 15m" }
      ]
    },
    {
      title: "Prometheus Basics",
      lessons: [
        { id: "prom-b-4", title: "Installing Prometheus on Linux/Windows", duration: "1h" },
        { id: "prom-b-5", title: "Prometheus Configuration (prometheus.yml)", duration: "1h 30m" },
        { id: "prom-b-6", title: "Targets, Scrape Intervals, and Jobs", duration: "1h 30m" }
      ]
    },
    {
      title: "Grafana Basics",
      lessons: [
        { id: "prom-b-7", title: "Installing Grafana and Adding Prometheus Data Source", duration: "1h 15m" },
        { id: "prom-b-8", title: "Creating and Customizing Dashboards", duration: "2h" },
        { id: "prom-b-9", title: "Using Panels and Visualizations", duration: "1h 30m" }
      ]
    },
    {
      title: "Hands-on Practice",
      lessons: [
        { id: "prom-b-10", title: "Monitoring System Metrics with Node Exporter", duration: "1h 30m" },
        { id: "prom-b-11", title: "Building Your First Grafana Dashboard", duration: "1h 15m" },
        { id: "prom-b-12", title: "Exporting and Sharing Dashboards", duration: "1h" }
      ]
    }
  ],
  totalLessons: 12,
  resources: [
    { title: "Prometheus Docs", link: "https://prometheus.io/docs/" },
    { title: "Grafana Docs", link: "https://grafana.com/docs/" }
  ]
},

{
  id: 92,
  title: "Monitoring with Prometheus & Grafana",
  category: "Prometheus & Grafana",
  difficulty: "Intermediate",
  duration: "25 hours",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg",
  description:
    "Advance your monitoring skills by mastering PromQL, exporters, and advanced dashboarding. Learn to integrate Prometheus and Grafana for full observability across systems and applications.",
  instructor: { name: "Rajesh Vardhan Busam", title: "Cloud Architect", avatar: "J", bio: "..." },
  whatYouWillLearn: [
    "Write and optimize PromQL queries",
    "Use and customize exporters for different services",
    "Build dynamic Grafana dashboards with variables and templating"
  ],
  modules: [
    {
      title: "Prometheus Deep Dive",
      lessons: [
        { id: "prom-i-1", title: "Prometheus Data Model and Storage", duration: "1h 30m" },
        { id: "prom-i-2", title: "Advanced prometheus.yml Configuration", duration: "1h 30m" },
        { id: "prom-i-3", title: "PromQL Fundamentals", duration: "2h" },
        { id: "prom-i-4", title: "PromQL Operators and Functions", duration: "2h" }
      ]
    },
    {
      title: "Metrics Collection and Exporters",
      lessons: [
        { id: "prom-i-5", title: "Node Exporter and cAdvisor", duration: "1h 30m" },
        { id: "prom-i-6", title: "Blackbox and Custom Exporters", duration: "2h" },
        { id: "prom-i-7", title: "Monitoring Databases (MySQL, PostgreSQL Exporters)", duration: "1h 45m" }
      ]
    },
    {
      title: "Grafana Advanced Features",
      lessons: [
        { id: "prom-i-8", title: "Advanced Dashboard Panels and Transformations", duration: "2h" },
        { id: "prom-i-9", title: "Templating and Variables in Dashboards", duration: "2h" },
        { id: "prom-i-10", title: "Annotations and Alerting in Grafana", duration: "1h 45m" }
      ]
    },
    {
      title: "Hands-on Lab",
      lessons: [
        { id: "prom-i-11", title: "End-to-End Monitoring Setup for a Web App", duration: "2h 15m" },
        { id: "prom-i-12", title: "Visualizing Container Metrics with Docker/K8s Exporters", duration: "2h" }
      ]
    }
  ],
  totalLessons: 12,
  resources: [
    { title: "PromQL Guide", link: "https://prometheus.io/docs/prometheus/latest/querying/basics/" },
    { title: "Grafana Templating", link: "https://grafana.com/docs/grafana/latest/variables/" }
  ]
},

{
  id: 93,
  title: "Advanced Alerting and Dashboards",
  category: "Prometheus & Grafana",
  difficulty: "Advanced",
  duration: "30 hours",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg",
  description:
    "Master enterprise-grade observability by building resilient monitoring architectures. Learn Alertmanager, high availability, long-term storage, and federation setups.",
  instructor: { name: "Rajesh Vardhan Busam", title: "Cloud Architect", avatar: "J", bio: "Cloud Infrastructure Expert specialized in enterprise monitoring and SRE automation." },
  whatYouWillLearn: [
    "Configure advanced alerting rules and notification channels",
    "Deploy Prometheus and Grafana in HA setups",
    "Implement long-term storage, remote write, and federation"
  ],
  modules: [
    {
      title: "Alerting and Notification Management",
      lessons: [
        { id: "prom-a-1", title: "Prometheus Alerting Rules and Expressions", duration: "2h 30m" },
        { id: "prom-a-2", title: "Alertmanager Configuration and Routing", duration: "3h" },
        { id: "prom-a-3", title: "Integrating Slack, Email, and PagerDuty Alerts", duration: "2h 15m" }
      ]
    },
    {
      title: "High Availability and Federation",
      lessons: [
        { id: "prom-a-4", title: "Prometheus HA Setup and Clustering", duration: "2h 45m" },
        { id: "prom-a-5", title: "Prometheus Federation and Remote Write", duration: "3h" },
        { id: "prom-a-6", title: "Scaling with Thanos and Cortex Overview", duration: "2h 30m" }
      ]
    },
    {
      title: "Enterprise Dashboards",
      lessons: [
        { id: "prom-a-7", title: "Grafana Alerting 2.0 and Unified Alerts", duration: "2h" },
        { id: "prom-a-8", title: "Building Business KPIs Dashboards", duration: "2h 30m" },
        { id: "prom-a-9", title: "Access Control and Dashboard Sharing", duration: "1h 30m" }
      ]
    },
    {
      title: "Capstone and Automation",
      lessons: [
        { id: "prom-a-10", title: "Complete Monitoring Stack Deployment (Prometheus + Grafana + Alertmanager)", duration: "2h 45m" },
        { id: "prom-a-11", title: "Automating Alerts and Reports with APIs", duration: "2h" }
      ]
    }
  ],
  totalLessons: 11,
  resources: [
    { title: "Prometheus Federation Docs", link: "https://prometheus.io/docs/prometheus/latest/federation/" },
    { title: "Grafana Alerting Docs", link: "https://grafana.com/docs/grafana/latest/alerting/" },
    { title: "Thanos Project", link: "https://thanos.io/" }
  ]
},



 // --- ELK Stack ---
{
  id: 1001,
  title: "ELK Stack for Beginners",
  category: "ELK Stack",
  difficulty: "Beginner",
  duration: "18h",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Elastic_logo.svg",
  description:
    "Kickstart your centralized logging journey by learning the essentials of the ELK Stack — Elasticsearch, Logstash, and Kibana. This course focuses on installation, core concepts, and visualizing logs effectively.",
  instructor: {
    name: "Jane Smith",
    title: "Azure Cloud Advocate",
    avatar: "JS",
    bio: "Cloud professional specializing in observability, logging, and DevOps pipelines."
  },
  whatYouWillLearn: [
    "Understand ELK architecture and core components",
    "Install and configure Elasticsearch, Logstash, and Kibana",
    "Ingest and visualize system and application logs"
  ],
  modules: [
    {
      title: "ELK Fundamentals",
      lessons: [
        { id: "elk-b-1", title: "Introduction to Centralized Logging", duration: "1h 15m" },
        { id: "elk-b-2", title: "Overview of ELK Architecture", duration: "1h 30m" },
        { id: "elk-b-3", title: "Installing Elasticsearch, Logstash, and Kibana", duration: "2h" }
      ]
    },
    {
      title: "Core Components",
      lessons: [
        { id: "elk-b-4", title: "Understanding Elasticsearch Basics", duration: "2h 15m" },
        { id: "elk-b-5", title: "Logstash Pipelines and Filters", duration: "2h" },
        { id: "elk-b-6", title: "Visualizing Data with Kibana", duration: "2h 15m" }
      ]
    },
    {
      title: "Hands-on Labs",
      lessons: [
        { id: "elk-b-7", title: "Collecting Logs from a Web Server", duration: "1h 30m" },
        { id: "elk-b-8", title: "Creating Your First Kibana Dashboard", duration: "1h 30m" }
      ]
    }
  ],
  totalLessons: 8,
  resources: [
    { title: "Elastic Docs", link: "https://www.elastic.co/guide/en/elastic-stack/current/index.html" },
    { title: "Kibana Tutorial", link: "https://www.elastic.co/guide/en/kibana/current/tutorial.html" }
  ]
},
{
  id: 1002,
  title: "Logging with the ELK Stack",
  category: "ELK Stack",
  difficulty: "Intermediate",
  duration: "25h",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Elastic_logo.svg",
  description:
    "Master log collection, parsing, and analysis using the ELK Stack. This course covers advanced Elasticsearch queries, Beats integration, and log enrichment with practical use cases.",
  instructor: {
    name: "Jane Smith",
    title: "Azure Cloud Advocate",
    avatar: "JS",
    bio: "Certified Elastic professional with hands-on experience in observability and APM solutions."
  },
  whatYouWillLearn: [
    "Use Elasticsearch Query DSL and aggregations for log analysis",
    "Deploy and configure Beats for log and metric ingestion",
    "Parse, enrich, and transform logs in Logstash"
  ],
  modules: [
    {
      title: "Advanced Elasticsearch",
      lessons: [
        { id: "elk-i-1", title: "Elasticsearch Indexes and Mappings", duration: "2h" },
        { id: "elk-i-2", title: "Understanding Query DSL and Filters", duration: "2h 30m" },
        { id: "elk-i-3", title: "Aggregations and Metrics Computation", duration: "2h 15m" }
      ]
    },
    {
      title: "Data Ingestion with Beats",
      lessons: [
        { id: "elk-i-4", title: "Filebeat for Log Collection", duration: "2h" },
        { id: "elk-i-5", title: "Metricbeat for System Metrics", duration: "2h" },
        { id: "elk-i-6", title: "Custom and Module Configuration in Beats", duration: "2h 15m" }
      ]
    },
    {
      title: "Log Parsing and Enrichment",
      lessons: [
        { id: "elk-i-7", title: "Using Grok and Dissect Filters", duration: "2h" },
        { id: "elk-i-8", title: "GeoIP and Metadata Enrichment", duration: "1h 45m" },
        { id: "elk-i-9", title: "Error Handling and Retry Mechanisms", duration: "1h 30m" }
      ]
    },
    {
      title: "Visualization and Alerting",
      lessons: [
        { id: "elk-i-10", title: "Kibana Lens and Visualization Options", duration: "2h" },
        { id: "elk-i-11", title: "Creating Alerts in Kibana", duration: "1h 45m" },
        { id: "elk-i-12", title: "Hands-on Lab: Monitor a Node Exporter Pipeline", duration: "2h" }
      ]
    }
  ],
  totalLessons: 12,
  resources: [
    { title: "Beats Documentation", link: "https://www.elastic.co/beats/" },
    { title: "Query DSL Reference", link: "https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html" }
  ]
},
{
  id: 1003,
  title: "Advanced ELK Stack Administration",
  category: "ELK Stack",
  difficulty: "Advanced",
  duration: "30h",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Elastic_logo.svg",
  description:
    "Build enterprise-grade logging and observability systems using ELK. This course focuses on cluster management, high availability, security, and performance tuning for large-scale environments.",
  instructor: {
    name: "Jane Smith",
    title: "Azure Cloud Advocate",
    avatar: "JS",
    bio: "Enterprise-level observability engineer with deep knowledge of ELK, APM, and distributed tracing."
  },
  whatYouWillLearn: [
    "Design and operate scalable Elasticsearch clusters",
    "Implement RBAC, TLS encryption, and secure ingest pipelines",
    "Optimize performance and storage for production environments"
  ],
  modules: [
    {
      title: "Cluster Management and Architecture",
      lessons: [
        { id: "elk-a-1", title: "Elasticsearch Cluster Design and Sharding", duration: "2h 45m" },
        { id: "elk-a-2", title: "Scaling Clusters and Node Roles", duration: "2h 45m" },
        { id: "elk-a-3", title: "Snapshot and Restore Strategies", duration: "2h" }
      ]
    },
    {
      title: "Security and Governance",
      lessons: [
        { id: "elk-a-4", title: "Implementing Role-Based Access Control (RBAC)", duration: "2h 30m" },
        { id: "elk-a-5", title: "TLS, Certificates, and Secure Communication", duration: "2h 15m" },
        { id: "elk-a-6", title: "Auditing and Compliance in ELK", duration: "1h 45m" }
      ]
    },
    {
      title: "Performance Tuning and Scaling",
      lessons: [
        { id: "elk-a-7", title: "Indexing Performance Optimization", duration: "2h" },
        { id: "elk-a-8", title: "Heap Management and JVM Tuning", duration: "2h" },
        { id: "elk-a-9", title: "Hot-Warm-Cold Architecture", duration: "2h 30m" }
      ]
    },
    {
      title: "Advanced Integrations and Automation",
      lessons: [
        { id: "elk-a-10", title: "Integrating APM and Elastic Agent", duration: "2h" },
        { id: "elk-a-11", title: "Elastic Stack in Kubernetes (ECK)", duration: "2h 30m" },
        { id: "elk-a-12", title: "Automation and Infrastructure-as-Code (Ansible/Terraform)", duration: "2h 15m" }
      ]
    }
  ],
  totalLessons: 12,
  resources: [
    { title: "Elastic Security Docs", link: "https://www.elastic.co/guide/en/security/current/index.html" },
    { title: "Elastic Cloud on Kubernetes (ECK)", link: "https://www.elastic.co/guide/en/cloud-on-k8s/current/index.html" },
    { title: "Performance Tuning Guide", link: "https://www.elastic.co/guide/en/elasticsearch/reference/current/tune-for-search-speed.html" }
  ]
},

  // --- Terraform ---
{
  id: 1101,
  title: "Getting Started with Terraform",
  category: "Terraform",
  difficulty: "Beginner",
  duration: "15h",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg",
  description:
    "Learn Infrastructure as Code (IaC) with Terraform and automate your cloud resource provisioning. This beginner-friendly course covers the core Terraform concepts, syntax, and workflows needed to get started.",
  instructor: {
    name: "Priya M",
    title: "DevOps Specialist",
    avatar: "P",
    bio: "DevOps Specialist with expertise in IaC and cloud automation using Terraform, Ansible, and Kubernetes."
  },
  whatYouWillLearn: [
    "Understand Infrastructure as Code concepts",
    "Install and configure Terraform on local and cloud environments",
    "Work with providers, resources, variables, and outputs",
    "Manage state effectively and safely"
  ],
  modules: [
    {
      title: "Terraform Fundamentals",
      lessons: [
        { id: "tf-b-1", title: "Introduction to Infrastructure as Code (IaC)", duration: "1h 15m" },
        { id: "tf-b-2", title: "Installing and Configuring Terraform", duration: "1h" },
        { id: "tf-b-3", title: "Understanding Terraform Workflow (init, plan, apply, destroy)", duration: "1h 30m" }
      ]
    },
    {
      title: "Core Concepts",
      lessons: [
        { id: "tf-b-4", title: "Providers and Resources", duration: "2h" },
        { id: "tf-b-5", title: "Variables, Locals, and Outputs", duration: "2h 15m" },
        { id: "tf-b-6", title: "Terraform State and Locking Mechanisms", duration: "2h" }
      ]
    },
    {
      title: "Hands-on Practice",
      lessons: [
        { id: "tf-b-7", title: "Deploying Your First AWS EC2 Instance", duration: "2h 30m" },
        { id: "tf-b-8", title: "Managing Changes and Destroying Infrastructure", duration: "1h 30m" }
      ]
    }
  ],
  totalLessons: 8,
  resources: [
    { title: "Terraform Docs", link: "https://developer.hashicorp.com/terraform/docs" },
    { title: "HashiCorp Learn Terraform", link: "https://learn.hashicorp.com/terraform" }
  ]
},
{
  id: 1102,
  title: "Terraform for Cloud Infrastructure",
  category: "Terraform",
  difficulty: "Intermediate",
  duration: "25h",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg",
  description:
    "Advance your Terraform skills by learning to build reusable modules, manage remote state, and automate infrastructure deployment for AWS, Azure, and GCP. Gain hands-on experience in real-world IaC automation.",
  instructor: {
    name: "Priya M",
    title: "DevOps Specialist",
    avatar: "P",
    bio: "Certified DevOps Engineer with hands-on experience in multi-cloud automation and Terraform best practices."
  },
  whatYouWillLearn: [
    "Automate multi-cloud infrastructure deployment using Terraform",
    "Design reusable Terraform modules for scalability",
    "Use remote state and workspaces for team collaboration",
    "Integrate Terraform with CI/CD pipelines"
  ],
  modules: [
    {
      title: "Cloud Deployments with Terraform",
      lessons: [
        { id: "tf-i-1", title: "Setting Up Terraform for AWS Infrastructure", duration: "3h" },
        { id: "tf-i-2", title: "Managing Azure Resources with Terraform", duration: "2h 30m" },
        { id: "tf-i-3", title: "Deploying Infrastructure to Google Cloud (GCP)", duration: "2h" }
      ]
    },
    {
      title: "Modules and Reusability",
      lessons: [
        { id: "tf-i-4", title: "Creating and Consuming Terraform Modules", duration: "2h 30m" },
        { id: "tf-i-5", title: "Best Practices for Module Structure", duration: "1h 45m" },
        { id: "tf-i-6", title: "Terraform Registry and Version Constraints", duration: "1h 30m" }
      ]
    },
    {
      title: "State and Collaboration",
      lessons: [
        { id: "tf-i-7", title: "Managing Remote State (S3, Azure Blob, GCS)", duration: "2h 15m" },
        { id: "tf-i-8", title: "Workspaces for Multi-Environment Management", duration: "1h 45m" },
        { id: "tf-i-9", title: "State Locking and Backups", duration: "1h 30m" }
      ]
    },
    {
      title: "CI/CD Integration",
      lessons: [
        { id: "tf-i-10", title: "Integrating Terraform with Jenkins and GitHub Actions", duration: "2h 15m" },
        { id: "tf-i-11", title: "Automated Plan and Apply Workflows", duration: "2h" }
      ]
    }
  ],
  totalLessons: 11,
  resources: [
    { title: "Terraform Registry", link: "https://registry.terraform.io/" },
    { title: "AWS Provider Docs", link: "https://registry.terraform.io/providers/hashicorp/aws/latest/docs" }
  ]
},
{
  id: 1103,
  title: "Advanced Terraform Modules and Automation",
  category: "Terraform",
  difficulty: "Advanced",
  duration: "30h",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg",
  description:
    "Master Terraform at scale with advanced design patterns, module testing, and CI/CD automation. Learn to manage complex enterprise environments using Terraform Cloud, Sentinel policies, and GitOps workflows.",
  instructor: {
    name: "Priya M",
    title: "DevOps Specialist",
    avatar: "P",
    bio: "Terraform expert with enterprise automation experience across AWS, Azure, and GCP using IaC."
  },
  whatYouWillLearn: [
    "Design enterprise-grade Terraform modules with reusability and compliance in mind",
    "Implement automated testing and policy enforcement with Terraform Cloud",
    "Integrate Terraform in secure, scalable CI/CD pipelines",
    "Adopt GitOps workflows and Terraform Enterprise automation"
  ],
  modules: [
    {
      title: "Module Architecture and Design Patterns",
      lessons: [
        { id: "tf-a-1", title: "Advanced Module Design Patterns", duration: "2h 45m" },
        { id: "tf-a-2", title: "Module Composition and Dependency Management", duration: "2h 30m" },
        { id: "tf-a-3", title: "Publishing Modules to Terraform Registry", duration: "1h 45m" }
      ]
    },
    {
      title: "Testing and Validation",
      lessons: [
        { id: "tf-a-4", title: "Unit Testing Terraform with Terratest", duration: "2h 30m" },
        { id: "tf-a-5", title: "Linting and Validation Tools (tflint, tfsec)", duration: "2h" },
        { id: "tf-a-6", title: "Pre-commit Hooks and Static Analysis", duration: "1h 45m" }
      ]
    },
    {
      title: "Terraform Cloud and Sentinel",
      lessons: [
        { id: "tf-a-7", title: "Working with Terraform Cloud Workspaces", duration: "2h 15m" },
        { id: "tf-a-8", title: "Sentinel Policy as Code Basics", duration: "2h 15m" },
        { id: "tf-a-9", title: "Policy Enforcement in CI/CD", duration: "1h 45m" }
      ]
    },
    {
      title: "Enterprise Automation and GitOps",
      lessons: [
        { id: "tf-a-10", title: "Integrating Terraform with GitOps Workflows", duration: "2h 30m" },
        { id: "tf-a-11", title: "Continuous Deployment using Terraform Cloud and Jenkins", duration: "2h 15m" },
        { id: "tf-a-12", title: "Multi-Environment Automation (Dev, QA, Prod)", duration: "2h 15m" }
      ]
    }
  ],
  totalLessons: 12,
  resources: [
    { title: "Terraform Cloud Docs", link: "https://developer.hashicorp.com/terraform/cloud-docs" },
    { title: "Sentinel Policy Docs", link: "https://developer.hashicorp.com/sentinel" },
    { title: "Terratest GitHub", link: "https://github.com/gruntwork-io/terratest" }
  ]
},

// --- Helm ---
{
  id: 1201,
  title: "Helm for Beginners",
  category: "Helm",
  difficulty: "Beginner",
  duration: "10h",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Helm_logo.svg",
  description:
    "Start your Helm journey by learning the fundamentals of Kubernetes package management. This course introduces Helm concepts, chart deployment, and management of Kubernetes applications efficiently.",
  instructor: {
    name: "Priya M",
    title: "DevOps Specialist",
    avatar: "P",
    bio: "DevOps specialist experienced in Kubernetes, Helm, and cloud-native application delivery."
  },
  whatYouWillLearn: [
    "Understand Helm architecture and use cases",
    "Install and configure Helm in a Kubernetes cluster",
    "Deploy and manage applications using pre-built charts",
    "Understand chart structures and releases"
  ],
  modules: [
    {
      title: "Introduction to Helm",
      lessons: [
        { id: "helm-b-1", title: "What is Helm? Understanding Package Management in Kubernetes", duration: "1h 15m" },
        { id: "helm-b-2", title: "Installing and Configuring Helm on Your Cluster", duration: "1h" },
        { id: "helm-b-3", title: "Helm Architecture: Charts, Repositories, and Releases", duration: "1h 15m" }
      ]
    },
    {
      title: "Working with Charts",
      lessons: [
        { id: "helm-b-4", title: "Understanding Chart Structure and YAML Files", duration: "2h" },
        { id: "helm-b-5", title: "Deploying Applications Using Helm Charts", duration: "1h 30m" },
        { id: "helm-b-6", title: "Upgrading and Rolling Back Releases", duration: "1h 15m" }
      ]
    },
    {
      title: "Hands-on Practice",
      lessons: [
        { id: "helm-b-7", title: "Installing NGINX using Helm", duration: "1h" },
        { id: "helm-b-8", title: "Exploring Helm Repositories (ArtifactHub)", duration: "45m" }
      ]
    }
  ],
  totalLessons: 8,
  resources: [
    { title: "Helm Official Docs", link: "https://helm.sh/docs/" },
    { title: "Artifact Hub", link: "https://artifacthub.io/" }
  ]
},
{
  id: 1202,
  title: "Kubernetes Package Management with Helm",
  category: "Helm",
  difficulty: "Intermediate",
  duration: "15h",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Helm_logo.svg",
  description:
    "Enhance your Helm skills by building custom charts, using values and templates, and managing Helm repositories. Learn to automate complex Kubernetes deployments with reusable chart designs.",
  instructor: {
    name: "Priya M",
    title: "DevOps Specialist",
    avatar: "P",
    bio: "Kubernetes and CI/CD expert with extensive experience in Helm-based deployments for microservices."
  },
  whatYouWillLearn: [
    "Develop and customize Helm charts for Kubernetes applications",
    "Work with values, templates, and overrides for flexible deployments",
    "Host, manage, and test Helm charts in private and public repositories",
    "Version, lint, and validate Helm charts for CI/CD integration"
  ],
  modules: [
    {
      title: "Chart Development",
      lessons: [
        { id: "helm-i-1", title: "Creating Your Own Helm Chart from Scratch", duration: "2h 15m" },
        { id: "helm-i-2", title: "Working with Values Files and Overrides", duration: "2h 30m" },
        { id: "helm-i-3", title: "Templating Basics and Variables", duration: "1h 45m" }
      ]
    },
    {
      title: "Chart Management and Testing",
      lessons: [
        { id: "helm-i-4", title: "Managing Helm Repositories (Public and Private)", duration: "1h 45m" },
        { id: "helm-i-5", title: "Chart Testing and Linting (helm lint)", duration: "1h 30m" },
        { id: "helm-i-6", title: "Packaging and Versioning Charts", duration: "1h 30m" }
      ]
    },
    {
      title: "Helm in CI/CD Pipelines",
      lessons: [
        { id: "helm-i-7", title: "Integrating Helm in Jenkins and GitHub Actions", duration: "2h" },
        { id: "helm-i-8", title: "Automated Deployment Workflows", duration: "2h 15m" }
      ]
    }
  ],
  totalLessons: 8,
  resources: [
    { title: "Helm Repository Guide", link: "https://helm.sh/docs/topics/chart_repository/" },
    { title: "Helm Lint Command", link: "https://helm.sh/docs/helm/helm_lint/" }
  ]
},
{
  id: 1203,
  title: "Advanced Helm Chart Templating and Operations",
  category: "Helm",
  difficulty: "Advanced",
  duration: "20h",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Helm_logo.svg",
  description:
    "Take Helm to the enterprise level by mastering advanced templating, hooks, lifecycle management, and best practices for building scalable, secure, and maintainable Helm charts for production.",
  instructor: {
    name: "Priya M",
    title: "DevOps Specialist",
    avatar: "P",
    bio: "Cloud-native DevOps engineer specializing in scalable Kubernetes deployments and Helm enterprise practices."
  },
  whatYouWillLearn: [
    "Build complex Helm templates with control structures and functions",
    "Use hooks and lifecycle events for advanced chart behavior",
    "Implement chart testing, dependencies, and best practices",
    "Automate large-scale deployments with Helm in production"
  ],
  modules: [
    {
      title: "Advanced Templating and Logic",
      lessons: [
        { id: "helm-a-1", title: "Template Functions and Pipelines", duration: "2h 30m" },
        { id: "helm-a-2", title: "Control Structures (if, range, with)", duration: "2h" },
        { id: "helm-a-3", title: "Using Helm Sprig Library Functions", duration: "1h 45m" }
      ]
    },
    {
      title: "Hooks and Chart Lifecycle",
      lessons: [
        { id: "helm-a-4", title: "Understanding Helm Hooks and Release Phases", duration: "2h 15m" },
        { id: "helm-a-5", title: "Pre-install, Post-upgrade, and Delete Hooks", duration: "2h" },
        { id: "helm-a-6", title: "Automating Upgrades and Rollbacks", duration: "1h 45m" }
      ]
    },
    {
      title: "Enterprise Patterns and Best Practices",
      lessons: [
        { id: "helm-a-7", title: "Building Enterprise-Grade Charts (Dependencies, Subcharts)", duration: "2h 30m" },
        { id: "helm-a-8", title: "Security and Compliance in Helm Charts", duration: "2h" },
        { id: "helm-a-9", title: "Integrating Helm with Argo CD and GitOps", duration: "2h 15m" }
      ]
    }
  ],
  totalLessons: 9,
  resources: [
    { title: "Helm Template Docs", link: "https://helm.sh/docs/chart_template_guide/" },
    { title: "Helm Hooks Docs", link: "https://helm.sh/docs/topics/charts_hooks/" },
    { title: "Helm Best Practices", link: "https://helm.sh/docs/chart_best_practices/" }
  ]
},

// --- Argo CD ---
{
  id: 1301,
  title: "Introduction to GitOps and Argo CD",
  category: "Argo CD",
  difficulty: "Beginner",
  duration: "10h",
  imageUrl: "https://cncf-branding.netlify.app/img/projects/argo/icon/color/argo-icon-color.svg",
  description:
    "This beginner course introduces the core concepts of GitOps and Argo CD. Learn how Git becomes the single source of truth for Kubernetes deployments, and manage your first applications declaratively using Argo CD.",
  instructor: {
    name: "Krishna R",
    title: "GitOps Expert",
    avatar: "K",
    bio: "Experienced DevOps and GitOps engineer specializing in Argo CD, Flux, and continuous delivery pipelines."
  },
  whatYouWillLearn: [
    "Understand the GitOps philosophy and workflow",
    "Install and configure Argo CD in Kubernetes",
    "Manage and synchronize applications declaratively",
    "Use Argo CD UI and CLI for app management"
  ],
  modules: [
    {
      title: "GitOps Fundamentals",
      lessons: [
        { id: "argo-b-1", title: "What is GitOps? Principles and Benefits", duration: "1h 15m" },
        { id: "argo-b-2", title: "Core Components of GitOps Workflow", duration: "1h" },
        { id: "argo-b-3", title: "Setting Up Your Git Repository for GitOps", duration: "1h 15m" }
      ]
    },
    {
      title: "Getting Started with Argo CD",
      lessons: [
        { id: "argo-b-4", title: "Installing Argo CD on Kubernetes", duration: "1h 15m" },
        { id: "argo-b-5", title: "Argo CD UI and CLI Walkthrough", duration: "1h 30m" },
        { id: "argo-b-6", title: "Deploying Your First Application via Argo CD", duration: "2h" }
      ]
    },
    {
      title: "Syncing and Managing Applications",
      lessons: [
        { id: "argo-b-7", title: "Sync Policies: Manual vs. Automated", duration: "1h 15m" },
        { id: "argo-b-8", title: "Monitoring and Health Status in Argo CD", duration: "1h" }
      ]
    }
  ],
  totalLessons: 8,
  resources: [
    { title: "Argo CD Documentation", link: "https://argo-cd.readthedocs.io/en/stable/" },
    { title: "GitOps Working Group", link: "https://opengitops.dev/" }
  ]
},
{
  id: 1302,
  title: "GitOps with Argo CD",
  category: "Argo CD",
  difficulty: "Intermediate",
  duration: "15h",
  imageUrl: "https://cncf-branding.netlify.app/img/projects/argo/icon/color/argo-icon-color.svg",
  description:
    "Deepen your understanding of GitOps with Argo CD by implementing real-world workflows, managing multi-cluster setups, and integrating CI/CD tools. Learn to configure RBAC and secure your GitOps pipelines.",
  instructor: {
    name: "Krishna R",
    title: "GitOps Expert",
    avatar: "K",
    bio: "GitOps practitioner with real-world experience in multi-cluster Kubernetes deployments and CI/CD automation."
  },
  whatYouWillLearn: [
    "Deploy and manage multi-cluster GitOps environments",
    "Implement the App of Apps pattern for large-scale environments",
    "Secure Argo CD using RBAC and SSO",
    "Integrate Argo CD with CI/CD and secret management tools"
  ],
  modules: [
    {
      title: "Advanced Deployments and App Management",
      lessons: [
        { id: "argo-i-1", title: "Multi-Cluster Argo CD Setup", duration: "2h 15m" },
        { id: "argo-i-2", title: "App of Apps Pattern Explained", duration: "2h 15m" },
        { id: "argo-i-3", title: "Application Sync and Rollback Strategies", duration: "1h 45m" }
      ]
    },
    {
      title: "Security and Access Control",
      lessons: [
        { id: "argo-i-4", title: "Configuring Role-Based Access Control (RBAC)", duration: "2h 15m" },
        { id: "argo-i-5", title: "SSO Integration with OAuth2 and LDAP", duration: "1h 45m" },
        { id: "argo-i-6", title: "Managing Repository and Cluster Credentials Securely", duration: "1h 30m" }
      ]
    },
    {
      title: "Integration and Automation",
      lessons: [
        { id: "argo-i-7", title: "Integrating Argo CD with Jenkins and GitHub Actions", duration: "2h" },
        { id: "argo-i-8", title: "Secrets Management with Sealed Secrets and Vault", duration: "1h 45m" }
      ]
    }
  ],
  totalLessons: 8,
  resources: [
    { title: "App of Apps Docs", link: "https://argo-cd.readthedocs.io/en/stable/operator-manual/cluster-bootstrapping/" },
    { title: "RBAC Docs", link: "https://argo-cd.readthedocs.io/en/stable/operator-manual/rbac/" }
  ]
},
{
  id: 1303,
  title: "Advanced Argo CD and Progressive Delivery",
  category: "Argo CD",
  difficulty: "Advanced",
  duration: "20h",
  imageUrl: "https://cncf-branding.netlify.app/img/projects/argo/icon/color/argo-icon-color.svg",
  description:
    "Master advanced Argo CD topics including progressive delivery with Argo Rollouts, blue-green and canary strategies, observability, and policy-driven automation for enterprise GitOps environments.",
  instructor: {
    name: "Krishna R",
    title: "GitOps Expert",
    avatar: "K",
    bio: "Cloud-native DevOps engineer specializing in Argo CD, Argo Rollouts, and GitOps for enterprise-scale systems."
  },
  whatYouWillLearn: [
    "Implement progressive delivery with Argo Rollouts",
    "Deploy and monitor canary and blue-green strategies",
    "Integrate metrics and observability into deployments",
    "Use Argo CD Notifications and Webhooks for automation"
  ],
  modules: [
    {
      title: "Argo Rollouts and Progressive Delivery",
      lessons: [
        { id: "argo-a-1", title: "Introduction to Progressive Delivery Concepts", duration: "2h 15m" },
        { id: "argo-a-2", title: "Installing and Configuring Argo Rollouts", duration: "2h 30m" },
        { id: "argo-a-3", title: "Canary Deployments in Action", duration: "2h 15m" }
      ]
    },
    {
      title: "Advanced Deployment Strategies",
      lessons: [
        { id: "argo-a-4", title: "Blue-Green Deployments with Argo Rollouts", duration: "2h 30m" },
        { id: "argo-a-5", title: "A/B Testing Deployments with Metrics", duration: "2h" },
        { id: "argo-a-6", title: "Analysis Templates and Automated Rollbacks", duration: "2h 15m" }
      ]
    },
    {
      title: "Enterprise Automation and Observability",
      lessons: [
        { id: "argo-a-7", title: "Integrating Prometheus and Grafana for Rollout Metrics", duration: "2h 15m" },
        { id: "argo-a-8", title: "Argo CD Notifications and Webhook Automation", duration: "2h" },
        { id: "argo-a-9", title: "Policy Enforcement with Open Policy Agent (OPA)", duration: "2h 15m" }
      ]
    }
  ],
  totalLessons: 9,
  resources: [
    { title: "Argo Rollouts Docs", link: "https://argoproj.github.io/argo-rollouts/" },
    { title: "Progressive Delivery Patterns", link: "https://cd.foundation/blog/2022/07/14/progressive-delivery/" },
    { title: "Argo Notifications", link: "https://argo-cd.readthedocs.io/en/stable/operator-manual/notifications/" }
  ]
}


];
