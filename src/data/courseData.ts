export const courseData = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect – Foundations",
    category: "AWS",
    difficulty: "Beginner",
    duration: "40 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    description: "Master AWS core services and architectural best practices for building highly available and scalable applications.",
    instructor: {
      name: "John Doe",
      title: "Senior Cloud Architect",
      avatar: "J",
      bio: "John is a certified AWS Solutions Architect with 10 years of experience designing and implementing cloud solutions for enterprise clients. He is passionate about sharing his knowledge and helping others succeed in the cloud."
    },
    whatYouWillLearn: [
      "Understand the key AWS services and their use cases",
      "Design and deploy scalable, highly available, and fault-tolerant systems on AWS",
      "Implement and manage AWS security and compliance",
      "Identify the appropriate AWS service based on compute, data, or security requirements",
      "Prepare for the AWS Certified Solutions Architect - Associate exam"
    ],
    modules: [
      {
        title: "Module 1: Introduction to AWS",
        lessons: [
          { title: "Cloud Computing and AWS", videoUrl: "https://youtu.be/MXqjhE48jV8", duration: "10:45" },
          { title: "AWS Global Infrastructure", duration: "12:30" },
          { title: "IAM: Identity and Access Management", duration: "15:20" },
          { title: "Lab: Configuring IAM users and groups", duration: "20:00" }
        ]
      },
      {
        title: "Module 2: Core Compute Services",
        lessons: [
          { title: "Amazon EC2: Virtual Servers in the Cloud", duration: "18:50" },
          { title: "Elastic Load Balancing and Auto Scaling", duration: "22:10" },
          { title: "AWS Lambda: Serverless Computing", duration: "15:00" },
          { title: "Lab: Launching and managing EC2 instances", duration: "25:00" }
        ]
      },
      {
        title: "Module 3: Storage Services",
        lessons: [
          { title: "Amazon S3: Object Storage", duration: "17:45" },
          { title: "Amazon EBS: Block Storage for EC2", duration: "14:30" },
          { title: "Amazon EFS and FSx: File Storage", duration: "16:00" },
          { title: "Lab: Creating and managing S3 buckets", duration: "28:00" }
        ]
      },
      {
        title: "Module 4: Networking and Content Delivery",
        lessons: [
          { title: "Amazon VPC: Virtual Private Cloud", duration: "20:15" },
          { title: "Amazon Route 53: DNS Service", duration: "18:00" },
          { title: "Amazon CloudFront: Content Delivery Network", duration: "16:30" },
          { title: "Lab: Building a custom VPC", duration: "30:00" }
        ]
      },
      {
        title: "Module 5: Database Services",
        lessons: [
          { title: "Amazon RDS: Relational Database Service", duration: "19:00" },
          { title: "Amazon DynamoDB: NoSQL Database", duration: "21:20" },
          { title: "Amazon Aurora: High Performance Relational Database", duration: "17:00" },
          { title: "Lab: Launching an RDS instance", duration: "26:00" }
        ]
      },
      {
        title: "Module 6: Security and Monitoring",
        lessons: [
          { title: "AWS Security Best Practices", duration: "22:30" },
          { title: "AWS CloudTrail and CloudWatch", duration: "18:45" },
          { title: "AWS Trusted Advisor", duration: "12:00" },
          { title: "Lab: Setting up CloudWatch alarms", duration: "24:00" }
        ]
      }
    ],
    resources: [
        { title: "AWS Solutions Architect Official Exam Guide", link: "#" },
        { title: "AWS Well-Architected Framework", link: "#" },
        { title: "Practice Exam Questions", link: "#" }
    ],
    status: "In Progress",
    progress: 65
  },
  {
    id: 2,
    title: "DevSecOps Masterclass – Secure CI/CD",
    category: "DevSecOps",
    difficulty: "Intermediate",
    duration: "35 hours",
    imageUrl: "/devsecops.png",
    description: "Build secure continuous integration and deployment pipelines with industry tools like Jenkins, SonarQube, and OWASP ZAP.",
     instructor: {
      name: "Krishna R",
      title: "Cloud Security Engineer",
      avatar: "K",
      bio: "Krishna is a security enthusiast with a passion for automating security into the development lifecycle. He specializes in building secure and compliant CI/CD pipelines."
    },
    whatYouWillLearn: [
      "Integrate security testing into every phase of the SDLC",
      "Automate security scans for static and dynamic analysis (SAST & DAST)",
      "Implement secret management best practices",
      "Secure containerized applications and infrastructure",
      "Monitor and respond to security threats in real-time"
    ],
    modules: [
      {
        title: "Module 1: Introduction to DevSecOps",
        lessons: [
          { title: "Understanding DevSecOps Culture", duration: "11:30" },
          { title: "Security in the Software Development Lifecycle", duration: "14:00" },
          { title: "DevSecOps Tools Overview", duration: "18:20" },
          { title: "Setting Up Your Lab Environment", duration: "22:00" }
        ]
      },
      {
        title: "Module 2: Secure CI/CD Pipelines",
        lessons: [
          { title: "Integrating SAST with SonarQube", duration: "19:50" },
          { title: "DAST with OWASP ZAP", duration: "23:15" },
          { title: "Dependency Scanning with Snyk", duration: "16:40" },
          { title: "Secret Management with HashiCorp Vault", duration: "21:00" }
        ]
      }
    ],
    resources: [
        { title: "OWASP Top 10", link: "#" },
        { title: "SonarQube Documentation", link: "#" }
    ],
    status: "In Progress",
    progress: 42
  },
  {
    id: 3,
    title: "Terraform for Cloud Infrastructure",
    category: "Terraform",
    difficulty: "Intermediate",
    duration: "25 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg",
    description: "Infrastructure as Code with Terraform for AWS, Azure, and Google Cloud. Automate your infrastructure provisioning.",
     instructor: {
      name: "Priya M",
      title: "DevOps Automation Specialist",
      avatar: "P",
      bio: "Priya is an expert in infrastructure automation with extensive experience using Terraform to manage complex cloud environments across multiple providers."
    },
    whatYouWillLearn: [
        "Master the Terraform syntax and its core concepts",
        "Provision and manage infrastructure on AWS, Azure, and GCP",
        "Write reusable and maintainable Terraform modules",
        "Collaborate on infrastructure projects using Terraform Cloud"
    ],
    modules: [
      {
        title: "Module 1: Getting Started with Terraform",
        lessons: [
          { title: "Introduction to Infrastructure as Code", duration: "10:00" },
          { title: "Setting up Terraform", duration: "13:45" },
          { title: "Writing your first Terraform configuration", duration: "17:30" }
        ]
      },
       {
        title: "Module 2: Advanced Terraform",
        lessons: [
          { title: "Managing State", duration: "19:20" },
          { title: "Creating and using modules", duration: "22:00" },
          { title: "Working with multiple providers", duration: "18:10" }
        ]
      }
    ],
    resources: [
        { title: "Terraform Documentation", link: "#" },
        { title: "Terraform Registry", link: "#" }
    ],
    status: "Not Started"
  },
    {
    id: 4,
    title: "Jenkins CI/CD Pipeline Automation",
    category: "Jenkins",
    difficulty: "Intermediate",
    duration: "20 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg",
    description: "Automate build, test, and deployment workflows with Jenkins. Create powerful and flexible CI/CD pipelines from scratch.",
     instructor: {
      name: "Priya M",
      title: "DevOps Automation Specialist",
      avatar: "P",
      bio: "Priya specializes in CI/CD and has helped numerous organizations streamline their software delivery process using Jenkins and other DevOps tools."
    },
    whatYouWillLearn: [
        "Install and configure a Jenkins server",
        "Create and manage Jenkins jobs and pipelines",
        "Integrate Jenkins with Git, Docker, and other tools",
        "Write declarative and scripted pipelines"
    ],
    modules: [
      {
        title: "Module 1: Jenkins Fundamentals",
        lessons: [
          { title: "Introduction to CI/CD", duration: "9:30" },
          { title: "Installing Jenkins", duration: "14:15" },
          { title: "Your first Jenkins job", duration: "16:00" }
        ]
      },
      {
        title: "Module 2: Building Pipelines",
        lessons: [
          { title: "Declarative vs. Scripted Pipeline", duration: "18:40" },
          { title: "Integrating Git", duration: "20:00" },
          { title: "Building and testing applications", duration: "24:30" }
        ]
      }
    ],
    resources: [
        { title: "Jenkins Documentation", link: "#" }
    ],
    status: "Not Started"
  },
  {
    id: 5,
    title: "Kubernetes Security Best Practices",
    category: "Kubernetes",
    difficulty: "Advanced",
    duration: "30 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
    description: "Secure your containerized applications and orchestration with Kubernetes. Learn to implement security policies and best practices.",
    instructor: {
      name: "Krishna R",
      title: "Cloud Security Engineer",
      avatar: "K",
      bio: "Krishna focuses on container security and has deep expertise in securing Kubernetes clusters in production environments."
    },
     whatYouWillLearn: [
        "Understand the Kubernetes security model",
        "Implement network policies to control traffic flow",
        "Use Pod Security Policies to enforce security standards",
        "Scan container images for vulnerabilities",
        "Monitor and audit Kubernetes clusters for security events"
    ],
    modules: [
      {
        title: "Module 1: Kubernetes Security Fundamentals",
        lessons: [
          { title: "Pod Security Policies", duration: "17:50" },
          { title: "Network Policies", duration: "20:30" },
          { title: "Role-Based Access Control (RBAC)", duration: "18:00" }
        ]
      },
       {
        title: "Module 2: Hardening and Monitoring",
        lessons: [
          { title: "Securing the Kubernetes API Server", duration: "21:40" },
          { title: "Image vulnerability scanning", duration: "19:00" },
          { title: "Auditing and logging", duration: "15:30" }
        ]
      }
    ],
    resources: [
        { title: "Kubernetes Security Documentation", link: "#" }
    ],
    status: "Not Started"
  },
  {
    id: 6,
    title: "AWS & DevOps Complete Internship",
    category: "Learning Paths",
    difficulty: "Intermediate",
    duration: "120 hours",
    imageUrl: "",
    description: "A comprehensive internship program covering the entire AWS and DevOps ecosystem. From cloud fundamentals to advanced automation and security.",
    instructor: {
      name: "Infinitely Cloud Labs Team",
      title: "Expert Instructors",
      avatar: "ICL",
      bio: "This program is taught by a team of our top instructors, each bringing their specialized expertise to the table."
    },
     whatYouWillLearn: [
        "Master core AWS services for compute, storage, networking, and databases",
        "Implement Infrastructure as Code with Terraform",
        "Build and manage CI/CD pipelines with Jenkins and GitLab",
        "Containerize applications with Docker and orchestrate with Kubernetes",
        "Integrate security best practices throughout the DevOps lifecycle (DevSecOps)",
        "Gain hands-on experience with real-world projects and scenarios"
    ],
    modules: [
      {
        title: "Phase 1: Cloud Foundations (AWS)",
        lessons: [
          { title: "Introduction to Cloud", videoUrl: "https://youtu.be/MXqjhE48jV8", duration: "12:30" },
          { title: "AWS Core Services & Architecture", videoUrl: "https://www.youtube.com/watch?v=OkW_2n2fE2I", duration: "12:30" },
          { title: "VPC Networking and Security Groups", duration: "12:30" },
          { title: "IAM and Security Best Practices", duration: "12:30" },
          { title: "Project: Deploy a 3-Tier Web Application", duration: "12:30" }
        ]
      },
       {
        title: "Phase 2: Infrastructure as Code",
        lessons: [
          { title: "Terraform Basics & Language Syntax", duration: "12:30" },
          { title: "Provisioning AWS Resources with Terraform", duration: "12:30" },
          { title: "State Management and Modules", duration: "12:30" },
          { title: "Project: Automate Your 3-Tier App Deployment", duration: "12:30" }
        ]
      },
      {
        title: "Phase 3: CI/CD & Automation",
        lessons: [
          { title: "Git, Jenkins, and Ansible Fundamentals", duration: "12:30" },
          { title: "Building a Jenkins CI/CD Pipeline", duration: "12:30" },
          { title: "Automating Deployments with Ansible", duration: "12:30" },
          { title: "Project: Create a Full CI/CD Pipeline for a Web App", duration: "12:30" }
        ]
      },
       {
        title: "Phase 4: Containers & Orchestration",
        lessons: [
          { title: "Docker Fundamentals & Image Creation", duration: "12:30" },
          { title: "Introduction to Kubernetes", duration: "12:30" },
          { title: "Deploying and Managing Applications on EKS", duration: "12:30" },
          { title: "Project: Containerize and Deploy Your App on Kubernetes", duration: "12:30" }
        ]
      },
       {
        title: "Phase 5: DevSecOps",
        lessons: [
          { title: "Integrating SAST & DAST in Pipelines", duration: "12:30" },
          { title: "Container Security Scanning", duration: "12:30" },
          { title: "Secrets Management with Vault", duration: "12:30" },
          { title: "Project: Secure Your CI/CD Pipeline", duration: "12:30" }
        ]
      }
    ],
    resources: [
        { title: "Internship Project Workbook", link: "#" },
        { title: "Private Slack Community Access", link: "#" }
    ],
    status: "Not Started"
  }
];
