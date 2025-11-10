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
          "Cloud Computing and AWS",
          "AWS Global Infrastructure",
          "IAM: Identity and Access Management",
          "Lab: Configuring IAM users and groups"
        ]
      },
      {
        title: "Module 2: Core Compute Services",
        lessons: [
          "Amazon EC2: Virtual Servers in the Cloud",
          "Elastic Load Balancing and Auto Scaling",
          "AWS Lambda: Serverless Computing",
          "Lab: Launching and managing EC2 instances"
        ]
      },
      {
        title: "Module 3: Storage Services",
        lessons: [
          "Amazon S3: Object Storage",
          "Amazon EBS: Block Storage for EC2",
          "Amazon EFS and FSx: File Storage",
          "Lab: Creating and managing S3 buckets"
        ]
      },
      {
        title: "Module 4: Networking and Content Delivery",
        lessons: [
          "Amazon VPC: Virtual Private Cloud",
          "Amazon Route 53: DNS Service",
          "Amazon CloudFront: Content Delivery Network",
          "Lab: Building a custom VPC"
        ]
      },
      {
        title: "Module 5: Database Services",
        lessons: [
          "Amazon RDS: Relational Database Service",
          "Amazon DynamoDB: NoSQL Database",
          "Amazon Aurora: High Performance Relational Database",
          "Lab: Launching an RDS instance"
        ]
      },
      {
        title: "Module 6: Security and Monitoring",
        lessons: [
          "AWS Security Best Practices",
          "AWS CloudTrail and CloudWatch",
          "AWS Trusted Advisor",
          "Lab: Setting up CloudWatch alarms"
        ]
      }
    ],
    resources: [
        { title: "AWS Solutions Architect Official Exam Guide", link: "#" },
        { title: "AWS Well-Architected Framework", link: "#" },
        { title: "Practice Exam Questions", link: "#" }
    ]
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
          "Understanding DevSecOps Culture",
          "Security in the Software Development Lifecycle",
          "DevSecOps Tools Overview",
          "Setting Up Your Lab Environment"
        ]
      },
      {
        title: "Module 2: Secure CI/CD Pipelines",
        lessons: [
          "Integrating SAST with SonarQube",
          "DAST with OWASP ZAP",
          "Dependency Scanning with Snyk",
          "Secret Management with HashiCorp Vault"
        ]
      }
    ],
    resources: [
        { title: "OWASP Top 10", link: "#" },
        { title: "SonarQube Documentation", link: "#" }
    ]
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
          "Introduction to Infrastructure as Code",
          "Setting up Terraform",
          "Writing your first Terraform configuration"
        ]
      },
       {
        title: "Module 2: Advanced Terraform",
        lessons: [
          "Managing State",
          "Creating and using modules",
          "Working with multiple providers"
        ]
      }
    ],
    resources: [
        { title: "Terraform Documentation", link: "#" },
        { title: "Terraform Registry", link: "#" }
    ]
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
          "Introduction to CI/CD",
          "Installing Jenkins",
          "Your first Jenkins job"
        ]
      },
      {
        title: "Module 2: Building Pipelines",
        lessons: [
          "Declarative vs. Scripted Pipeline",
          "Integrating Git",
          "Building and testing applications"
        ]
      }
    ],
    resources: [
        { title: "Jenkins Documentation", link: "#" }
    ]
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
          "Pod Security Policies",
          "Network Policies",
          "Role-Based Access Control (RBAC)"
        ]
      },
       {
        title: "Module 2: Hardening and Monitoring",
        lessons: [
          "Securing the Kubernetes API Server",
          "Image vulnerability scanning",
          "Auditing and logging"
        ]
      }
    ],
    resources: [
        { title: "Kubernetes Security Documentation", link: "#" }
    ]
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
          { title: "AWS Core Services & Architecture", videoUrl: "https://youtu.be/MXqjhE48jV8", duration: "18:45" },
          { title: "VPC Networking and Security Groups", duration: "22:30" },
          { title: "IAM and Security Best Practices", duration: "19:15" },
          { title: "Project: Deploy a 3-Tier Web Application", duration: "45:00" }
        ]
      },
       {
        title: "Phase 2: Infrastructure as Code",
        lessons: [
          { title: "Terraform Basics & Language Syntax", duration: "25:00" },
          { title: "Provisioning AWS Resources with Terraform", duration: "32:15" },
          { title: "State Management and Modules", duration: "28:40" },
          { title: "Project: Automate Your 3-Tier App Deployment", duration: "50:00" }
        ]
      },
      {
        title: "Phase 3: CI/CD & Automation",
        lessons: [
          { title: "Git, Jenkins, and Ansible Fundamentals", duration: "30:00" },
          { title: "Building a Jenkins CI/CD Pipeline", duration: "35:20" },
          { title: "Automating Deployments with Ansible", duration: "28:50" },
          { title: "Project: Create a Full CI/CD Pipeline for a Web App", duration: "55:00" }
        ]
      },
       {
        title: "Phase 4: Containers & Orchestration",
        lessons: [
          { title: "Docker Fundamentals & Image Creation", duration: "27:30" },
          { title: "Introduction to Kubernetes", duration: "40:00" },
          { title: "Deploying and Managing Applications on EKS", duration: "38:45" },
          { title: "Project: Containerize and Deploy Your App on Kubernetes", duration: "60:00" }
        ]
      },
       {
        title: "Phase 5: DevSecOps",
        lessons: [
          { title: "Integrating SAST & DAST in Pipelines", duration: "32:00" },
          { title: "Container Security Scanning", duration: "26:15" },
          { title: "Secrets Management with Vault", duration: "24:30" },
          { title: "Project: Secure Your CI/CD Pipeline", duration: "48:00" }
        ]
      }
    ],
    resources: [
        { title: "Internship Project Workbook", link: "#" },
        { title: "Private Slack Community Access", link: "#" }
    ]
  }
];
