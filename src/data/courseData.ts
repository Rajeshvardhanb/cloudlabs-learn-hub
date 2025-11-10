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
          "Lab: Configuring S3 buckets and policies"
        ]
      },
       {
        title: "Module 4: Networking and Content Delivery",
        lessons: []
      }
    ],
    resources: [
      { title: "Exam Guide", link: "#" },
      { title: "Whitepapers", link: "#" },
      { title: "Sample Exam Questions", link: "#" }
    ]
  },
  {
    id: 2,
    title: "DevSecOps Masterclass — Secure CI/CD",
    category: "DevSecOps",
    difficulty: "Intermediate",
    duration: "35 hours",
    imageUrl: "https://static-00.iconduck.com/assets.00/devsecops-icon-512x289-x543l03g.png",
    description: "Build secure continuous integration and deployment pipelines with industry-standard tools and practices.",
    instructor: {
      name: "Krishna R",
      title: "Cloud Security Engineer",
      avatar: "K",
      bio: "Expert cloud security engineer with over 8 years of experience in DevSecOps, infrastructure security, and compliance automation. Passionate about teaching and helping organizations build secure cloud-native applications."
    },
    whatYouWillLearn: [
      "Build and secure complete CI/CD pipelines from scratch",
      "Implement automated security scanning and vulnerability management",
      "Master container and Kubernetes security best practices",
      "Apply infrastructure as code security principles",
      "Automate compliance and security policy enforcement"
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
        lessons: []
      },
      {
        title: "Module 3: Container Security",
        lessons: []
      },
      {
        title: "Module 4: Infrastructure Security",
        lessons: []
      }
    ],
    resources: [
      { title: "Course Slides", link: "#" },
      { title: "Lab Files", link: "#" },
      { title: "Sample Code", link: "#" }
    ]
  },
   {
    id: 3,
    title: "Terraform for Cloud Infrastructure",
    category: "Terraform",
    difficulty: "Intermediate",
    duration: "30 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg",
    description: "Infrastructure as Code with Terraform for AWS, Azure, and GCP multi-cloud environments.",
    instructor: {
      name: "Jane Smith",
      title: "DevOps Consultant",
      avatar: "J",
      bio: "Jane is a DevOps consultant specializing in infrastructure as code and automation. She has extensive experience with Terraform in complex, multi-cloud environments."
    },
    whatYouWillLearn: [
      "Master Terraform syntax and concepts",
      "Provision and manage infrastructure on AWS, Azure, and GCP",
      "Write reusable and modular Terraform code",
      "Implement best practices for collaboration and state management",
      "Integrate Terraform into CI/CD pipelines"
    ],
    modules: [
      {
        title: "Module 1: Terraform Fundamentals",
        lessons: [
          "Introduction to Infrastructure as Code",
          "Setting up Terraform",
          "Terraform Syntax and Language",
          "Lab: Writing your first Terraform configuration"
        ]
      },
      {
        title: "Module 2: Advanced Terraform",
        lessons: []
      },
      {
        title: "Module 3: Managing Multi-Cloud Infrastructure",
        lessons: []
      }
    ],
    resources: [
      { title: "Terraform Documentation", link: "#" },
      { title: "Example Code Repository", link: "#" }
    ]
  },
  // Add other courses with similar structure
  {
    id: 4,
    title: "Jenkins for CI/CD",
    category: "Jenkins",
    difficulty: "Beginner",
    duration: "25 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg",
    description: "Learn to build automated CI/CD pipelines with Jenkins.",
    instructor: { name: "Robert Paulson", title: "CI/CD Specialist", avatar: "R", bio: "Bob has been working with Jenkins for over a decade, helping companies streamline their software delivery process." },
    whatYouWillLearn: ["Install and configure Jenkins", "Create and manage Jenkins jobs", "Build CI/CD pipelines using Jenkinsfiles", "Integrate Jenkins with other tools like Git, Docker, and Kubernetes"],
    modules: [{ title: "Module 1: Jenkins Introduction", lessons: ["What is Jenkins?", "Installation and Setup", "Your First Jenkins Job"] }],
    resources: [{ title: "Jenkins Handbook", link: "#" }]
  },
  {
    id: 5,
    title: "Kubernetes for Developers",
    category: "Kubernetes",
    difficulty: "Intermediate",
    duration: "38 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
    description: "A practical guide to deploying and managing applications on Kubernetes.",
    instructor: { name: "Alice Wonder", title: "Kubernetes Expert", avatar: "A", bio: "Alice is a Certified Kubernetes Administrator and has deployed Kubernetes clusters for numerous startups and enterprises." },
    whatYouWillLearn: ["Understand Kubernetes architecture", "Deploy applications using Pods, Deployments, and Services", "Manage application configuration and storage", "Implement logging, monitoring, and troubleshooting"],
    modules: [{ title: "Module 1: Kubernetes Core Concepts", lessons: ["Introduction to Kubernetes", "Pods, ReplicaSets, and Deployments", "Services and Networking"] }],
    resources: [{ title: "Kubernetes in Action (Book)", link: "#" }]
  },
  {
    id: 6,
    title: "Docker for Beginners",
    category: "Docker",
    difficulty: "Beginner",
    duration: "20 hours",
    imageUrl: "https://www.svgrepo.com/show/349342/docker.svg",
    description: "Understand Docker fundamentals and containerize your applications.",
    instructor: { name: "Frank Wright", title: "Container Guru", avatar: "F", bio: "Frank lives and breathes containers. He has been using Docker since its early days and is an official Docker Community Leader." },
    whatYouWillLearn: ["Understand containerization and Docker", "Build and manage Docker images", "Run and orchestrate containers", "Use Docker Compose for multi-container applications"],
    modules: [{ title: "Module 1: Docker Fundamentals", lessons: ["What is Docker?", "Installing Docker", "Running your first container"] }],
    resources: [{ title: "Docker Cheatsheet", link: "#" }]
  },
  {
    id: 7,
    title: "Ansible for Automation",
    category: "Ansible",
    difficulty: "Intermediate",
    duration: "32 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/23/Ansible_Logo.svg",
    description: "Automate your infrastructure and application deployment with Ansible.",
    instructor: { name: "Grace Hopper", title: "Automation Architect", avatar: "G", bio: "Grace is a renowned automation expert who has written several books on Ansible and IT automation." },
    whatYouWillLearn: ["Understand the principles of automation", "Write Ansible playbooks", "Manage inventories and variables", "Use Ansible roles for code reuse", "Automate complex workflows"],
    modules: [{ title: "Module 1: Getting Started with Ansible", lessons: ["Introduction to Ansible", "Setting up an Ansible environment", "Your first playbook"] }],
    resources: [{ title: "Ansible Official Docs", link: "#" }]
  },
  {
    id: 8,
    title: "Advanced Kubernetes",
    category: "Kubernetes",
    difficulty: "Advanced",
    duration: "45 hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
    description: "Deep dive into advanced Kubernetes concepts and features.",
    instructor: { name: "Alice Wonder", title: "Kubernetes Expert", avatar: "A", bio: "Alice is a Certified Kubernetes Administrator and has deployed Kubernetes clusters for numerous startups and enterprises." },
    whatYouWillLearn: ["Advanced scheduling and pod placement", "Cluster security and hardening", "Service mesh with Istio", "Extending Kubernetes with custom controllers"],
    modules: [{ title: "Module 1: Security", lessons: ["RBAC", "Pod Security Policies", "Network Policies"] }],
    resources: [{ title: "Kubernetes Documentation", link: "#" }]
  },
  {
    id: 9,
    title: "Docker Swarm for Orchestration",
    category: "Docker",
    difficulty: "Intermediate",
    duration: "28 hours",
    imageUrl: "https://www.svgrepo.com/show/349342/docker.svg",
    description: "Learn how to use Docker Swarm for orchestrating containers.",
    instructor: { name: "Frank Wright", title: "Container Guru", avatar: "F", bio: "Frank lives and breathes containers. He has been using Docker since its early days and is an official Docker Community Leader." },
    whatYouWillLearn: ["Understand container orchestration", "Set up a Docker Swarm cluster", "Deploy and manage services on Swarm", "Manage configuration and secrets"],
    modules: [{ title: "Module 1: Introduction to Docker Swarm", lessons: ["What is Swarm?", "Initializing a Swarm cluster", "Deploying a service"] }],
    resources: [{ title: "Docker Swarm Tutorial", link: "#" }]
  }
];
