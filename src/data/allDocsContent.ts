export interface DocContent {
  title: string;
  content: string[];
  codeExamples?: { title: string; code: string }[];
  keyTakeaways?: string[];
}

export const allDocsContent: Record<string, DocContent> = {
  // ===== Learning Paths =====
  "AWS Core Services": {
    title: "AWS Core Services",
    content: [
      "Amazon Web Services (AWS) is the world's most comprehensive cloud platform, offering over 200 fully featured services. Understanding core AWS services is fundamental to cloud computing success.",
      "The essential AWS services include compute, storage, database, and networking services that form the foundation of any cloud infrastructure.",
    ],
    codeExamples: [
      {
        title: "AWS CLI Configuration",
        code: `# Configure AWS CLI
aws configure
# AWS Access Key ID: YOUR_ACCESS_KEY
# AWS Secret Access Key: YOUR_SECRET_KEY
# Default region: us-east-1
# Default output format: json`,
      },
    ],
    keyTakeaways: [
      "AWS provides scalable and reliable cloud infrastructure",
      "Core services include EC2, S3, RDS, and VPC",
      "Understanding AWS fundamentals is essential for cloud architects",
    ],
  },

  "EC2 & VPC Essentials": {
    title: "EC2 & VPC Essentials",
    content: [
      "Amazon EC2 (Elastic Compute Cloud) provides scalable computing capacity in the AWS cloud. VPC (Virtual Private Cloud) allows you to create isolated network environments.",
      "EC2 instances can be launched in different availability zones for high availability. VPC enables you to define network topology including subnets, route tables, and gateways.",
    ],
    codeExamples: [
      {
        title: "Launch EC2 Instance",
        code: `aws ec2 run-instances \\
  --image-id ami-0c55b159cbfafe1f0 \\
  --count 1 \\
  --instance-type t2.micro \\
  --key-name MyKeyPair \\
  --security-group-ids sg-903004f8 \\
  --subnet-id subnet-6e7f829e`,
      },
    ],
    keyTakeaways: [
      "EC2 provides flexible compute capacity",
      "VPC enables network isolation and security",
      "Subnets allow for network segmentation",
    ],
  },

  "S3 & IAM Basics": {
    title: "S3 & IAM Basics",
    content: [
      "Amazon S3 (Simple Storage Service) is object storage built to store and retrieve any amount of data. IAM (Identity and Access Management) manages access to AWS services and resources securely.",
      "S3 buckets provide durable, scalable storage with versioning and lifecycle policies. IAM uses policies to grant fine-grained permissions to users and services.",
    ],
    codeExamples: [
      {
        title: "Create S3 Bucket and Upload File",
        code: `# Create bucket
aws s3 mb s3://my-bucket-name

# Upload file
aws s3 cp myfile.txt s3://my-bucket-name/

# List objects
aws s3 ls s3://my-bucket-name/`,
      },
    ],
    keyTakeaways: [
      "S3 provides unlimited scalable object storage",
      "IAM controls access to AWS resources",
      "Bucket policies and IAM policies work together for security",
    ],
  },

  "Terraform Fundamentals": {
    title: "Terraform Fundamentals",
    content: [
      "Terraform is an infrastructure as code tool that allows you to define cloud and on-prem resources in human-readable configuration files.",
      "With Terraform, you can manage infrastructure with declarative configuration files, ensuring consistent and repeatable deployments.",
    ],
    codeExamples: [
      {
        title: "Basic Terraform Configuration",
        code: `terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  
  tags = {
    Name = "ExampleInstance"
  }
}`,
      },
    ],
    keyTakeaways: [
      "Terraform enables infrastructure as code",
      "Declarative syntax simplifies infrastructure management",
      "State files track infrastructure changes",
    ],
  },

  "Building AWS Infrastructure": {
    title: "Building AWS Infrastructure",
    content: [
      "Building robust AWS infrastructure requires understanding of networking, security, compute, and storage services. Terraform helps automate this process.",
      "Best practices include using modules, remote state, and proper tagging for resource management.",
    ],
    codeExamples: [
      {
        title: "VPC Module Example",
        code: `module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  
  name = "my-vpc"
  cidr = "10.0.0.0/16"
  
  azs             = ["us-east-1a", "us-east-1b"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]
  
  enable_nat_gateway = true
  enable_vpn_gateway = false
  
  tags = {
    Environment = "dev"
  }
}`,
      },
    ],
    keyTakeaways: [
      "Use modules for reusable infrastructure components",
      "Implement proper network segmentation",
      "Enable high availability with multi-AZ deployments",
    ],
  },

  "Jenkins Setup": {
    title: "Jenkins Setup",
    content: [
      "Jenkins is an open-source automation server that enables continuous integration and continuous delivery. It helps automate the software development process.",
      "Jenkins can be installed on various platforms and configured with plugins to extend its functionality for different build and deployment scenarios.",
    ],
    codeExamples: [
      {
        title: "Jenkins Docker Setup",
        code: `docker run -d \\
  -p 8080:8080 -p 50000:50000 \\
  -v jenkins_home:/var/jenkins_home \\
  --name jenkins \\
  jenkins/jenkins:lts

# Get initial admin password
docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword`,
      },
    ],
    keyTakeaways: [
      "Jenkins automates CI/CD workflows",
      "Plugins extend Jenkins capabilities",
      "Jenkins can integrate with various version control systems",
    ],
  },

  "Pipeline Automation": {
    title: "Pipeline Automation",
    content: [
      "Jenkins Pipeline provides a suite of plugins for implementing continuous delivery pipelines. Pipelines are defined using Groovy-based DSL.",
      "Declarative and scripted pipelines offer different approaches to defining build, test, and deployment stages.",
    ],
    codeExamples: [
      {
        title: "Declarative Pipeline",
        code: `pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh './deploy.sh'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}`,
      },
    ],
    keyTakeaways: [
      "Pipelines define automated workflows as code",
      "Stages organize pipeline execution steps",
      "Post actions handle success and failure scenarios",
    ],
  },

  "Docker Mastery": {
    title: "Docker Mastery",
    content: [
      "Docker is a platform for developing, shipping, and running applications in containers. Containers package software with all dependencies for consistent deployment.",
      "Docker images are built from Dockerfiles and can be shared via registries like Docker Hub.",
    ],
    codeExamples: [
      {
        title: "Dockerfile Example",
        code: `FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]`,
      },
      {
        title: "Docker Commands",
        code: `# Build image
docker build -t myapp:1.0 .

# Run container
docker run -d -p 3000:3000 --name myapp-container myapp:1.0

# View logs
docker logs myapp-container

# Stop container
docker stop myapp-container`,
      },
    ],
    keyTakeaways: [
      "Containers provide lightweight, portable environments",
      "Dockerfiles define reproducible image builds",
      "Docker enables consistent deployments across environments",
    ],
  },

  "Kubernetes Orchestration": {
    title: "Kubernetes Orchestration",
    content: [
      "Kubernetes (K8s) is an open-source container orchestration platform for automating deployment, scaling, and management of containerized applications.",
      "Kubernetes uses declarative configuration to manage clusters, pods, services, and other resources.",
    ],
    codeExamples: [
      {
        title: "Deployment Configuration",
        code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.21
        ports:
        - containerPort: 80`,
      },
    ],
    keyTakeaways: [
      "Kubernetes automates container orchestration",
      "Pods are the smallest deployable units",
      "Services provide networking and load balancing",
    ],
  },

  // ===== Linux Documentation (keeping existing comprehensive content) =====
  "Introduction to Linux and Open Source": {
    title: "Introduction to Linux and Open Source",
    content: [
      "Linux is a free and open-source operating system that powers everything from smartphones to supercomputers. Created by Linus Torvalds in 1991, it has become the backbone of modern computing infrastructure.",
      "The open-source philosophy means the source code is freely available for anyone to view, modify, and distribute. This collaborative approach has led to robust, secure, and highly customizable systems.",
      "Linux distributions (distros) package the Linux kernel with various software to create complete operating systems suited for different purposes - from servers to desktops to embedded systems.",
    ],
    keyTakeaways: [
      "Linux is free, open-source, and highly customizable",
      "Powers most of the internet's servers and cloud infrastructure",
      "Understanding Linux is essential for DevOps and system administration",
      "Open source encourages collaboration and transparency",
    ],
  },

  "Linux Distributions Overview (Ubuntu, RHEL, CentOS)": {
    title: "Linux Distributions Overview",
    content: [
      "Linux distributions are complete operating systems built around the Linux kernel. Each distro targets different use cases and audiences.",
      "Ubuntu is one of the most popular distributions, known for its user-friendliness and strong community support. It's based on Debian and is ideal for beginners and desktop users.",
      "Red Hat Enterprise Linux (RHEL) is a commercial distribution focused on enterprise environments, offering professional support and long-term stability.",
      "CentOS (now CentOS Stream) is a community-supported distribution that's closely related to RHEL, popular for servers and development environments.",
    ],
    codeExamples: [
      {
        title: "Check Your Distribution",
        code: `# Display OS information
cat /etc/os-release

# Check kernel version
uname -r

# Display system information
hostnamectl`,
      },
    ],
    keyTakeaways: [
      "Different distros serve different purposes (desktop, server, enterprise)",
      "Ubuntu: user-friendly, great for beginners",
      "RHEL: enterprise-grade with commercial support",
      "CentOS Stream: free alternative close to RHEL",
    ],
  },

  "Installing Linux (VM & Cloud Setup)": {
    title: "Installing Linux (VM & Cloud Setup)",
    content: [
      "There are multiple ways to run Linux: native installation, virtual machines (VMs), or cloud instances. Each method has its advantages depending on your needs.",
      "Virtual machines (using VirtualBox, VMware, or similar) allow you to run Linux alongside your current operating system without modifying your hard drive.",
      "Cloud platforms like AWS, Azure, and GCP offer Linux instances that can be launched in minutes, perfect for learning and production workloads.",
      "Container technology (Docker) provides another lightweight way to run Linux environments for specific applications.",
    ],
    codeExamples: [
      {
        title: "Launch EC2 Instance (AWS)",
        code: `# Using AWS CLI
aws ec2 run-instances \\
    --image-id ami-0c55b159cbfafe1f0 \\
    --instance-type t2.micro \\
    --key-name MyKeyPair \\
    --security-groups my-sg`,
      },
      {
        title: "Docker Linux Container",
        code: `# Run Ubuntu container
docker run -it ubuntu:22.04 /bin/bash

# Run CentOS container
docker run -it centos:latest /bin/bash`,
      },
    ],
    keyTakeaways: [
      "VMs provide isolated Linux environments on any host OS",
      "Cloud instances offer scalable Linux infrastructure",
      "Docker containers are lightweight and portable",
      "Choose the setup method based on your use case",
    ],
  },

  "Navigating the Terminal and Basic Commands": {
    title: "Navigating the Terminal and Basic Commands",
    content: [
      "The Linux terminal (command line interface) is a powerful tool for interacting with the system. Unlike graphical interfaces, the terminal allows precise control and automation.",
      "The shell (like Bash) interprets your commands and executes them. Understanding basic navigation and file operations is fundamental to Linux proficiency.",
      "Every command in Linux follows a pattern: command [options] [arguments]. Options modify behavior, and arguments specify what the command acts upon.",
    ],
    codeExamples: [
      {
        title: "Essential Navigation Commands",
        code: `# Print current directory
pwd

# List files and directories
ls
ls -la  # detailed list with hidden files

# Change directory
cd /home/user
cd ..         # go up one level
cd ~          # go to home directory

# Create directory
mkdir projects
mkdir -p projects/web/frontend  # create nested directories`,
      },
      {
        title: "Basic File Operations",
        code: `# Create empty file
touch file.txt

# Copy files
cp source.txt destination.txt
cp -r dir1/ dir2/  # copy directory recursively

# Move/rename files
mv oldname.txt newname.txt
mv file.txt /home/user/documents/

# Remove files
rm file.txt
rm -rf directory/  # remove directory and contents`,
      },
    ],
    keyTakeaways: [
      "The terminal provides powerful control over the Linux system",
      "pwd, ls, cd are essential for navigation",
      "cp, mv, rm handle file operations",
      "Use --help or man command to learn about any command",
    ],
  },

  "Working with Files and Directories": {
    title: "Working with Files and Directories",
    content: [
      "File management is a core skill in Linux. The filesystem hierarchy organizes everything from the root (/) directory downward.",
      "Common directories include /home (user files), /etc (configuration), /var (variable data), and /tmp (temporary files).",
      "File permissions and ownership control who can read, write, or execute files, ensuring system security.",
    ],
    codeExamples: [
      {
        title: "File Viewing and Editing",
        code: `# View file contents
cat file.txt
less file.txt    # paginated viewing
head file.txt    # first 10 lines
tail file.txt    # last 10 lines
tail -f log.txt  # follow file in real-time`,
      },
      {
        title: "Finding Files",
        code: `# Find files by name
find /home -name "*.txt"

# Find files by size
find /var -size +100M

# Find and execute command
find . -name "*.log" -exec rm {} \\;

# Locate command (faster, uses database)
locate filename`,
      },
    ],
    keyTakeaways: [
      "Everything in Linux is a file",
      "Use cat, less, head, tail to view file contents",
      "find and locate help search for files",
      "Understanding the filesystem hierarchy is crucial",
    ],
  },

  "Text Processing and grep": {
    title: "Text Processing and grep",
    content: [
      "Text processing is one of Linux's strongest features. Tools like grep, sed, and awk allow powerful text manipulation and searching.",
      "grep (Global Regular Expression Print) searches for patterns in files or output. It's essential for log analysis and data extraction.",
      "Regular expressions (regex) enable sophisticated pattern matching, making text searches incredibly flexible.",
    ],
    codeExamples: [
      {
        title: "grep Examples",
        code: `# Basic search
grep "error" logfile.txt

# Case-insensitive search
grep -i "warning" logfile.txt

# Show line numbers
grep -n "ERROR" app.log

# Recursive search in directory
grep -r "TODO" /home/user/projects/

# Count matches
grep -c "success" results.txt

# Invert match (show non-matching lines)
grep -v "debug" app.log`,
      },
      {
        title: "Advanced grep with Regex",
        code: `# Match lines starting with specific pattern
grep "^ERROR" log.txt

# Match lines ending with pattern
grep "failed$" log.txt

# Match IP addresses
grep -E "[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}" access.log

# Multiple patterns
grep -E "error|warning|critical" system.log`,
      },
    ],
    keyTakeaways: [
      "grep is essential for searching text patterns",
      "Regular expressions enable powerful pattern matching",
      "Combine grep with other commands using pipes",
      "Use -r for recursive directory searches",
    ],
  },

  "Input/Output Redirection and Pipes": {
    title: "Input/Output Redirection and Pipes",
    content: [
      "Linux uses three standard streams: stdin (input), stdout (output), and stderr (error output). Understanding redirection allows you to control these streams.",
      "Redirection operators (>, >>, <, 2>) direct output to files or read input from files instead of the terminal.",
      "Pipes (|) connect commands together, passing output from one command as input to the next, enabling powerful command chains.",
    ],
    codeExamples: [
      {
        title: "Output Redirection",
        code: `# Redirect stdout to file (overwrites)
ls -la > file_list.txt

# Append to file
echo "New log entry" >> app.log

# Redirect stderr
command 2> errors.txt

# Redirect both stdout and stderr
command > output.txt 2>&1

# Discard output
command > /dev/null 2>&1`,
      },
      {
        title: "Pipes and Command Chaining",
        code: `# Count number of processes
ps aux | wc -l

# Find specific processes
ps aux | grep nginx

# Sort and display unique values
cat access.log | cut -d' ' -f1 | sort | uniq -c

# Complex pipeline
cat /var/log/syslog | grep "error" | awk '{print $1, $2, $3}' | sort | uniq -c | sort -rn`,
      },
    ],
    keyTakeaways: [
      "> redirects output to a file (overwrites)",
      ">> appends output to a file",
      "| pipes output from one command to another",
      "Pipes enable building complex data processing workflows",
    ],
  },

  "Text Editors (vi/vim, nano)": {
    title: "Text Editors (vi/vim, nano)",
    content: [
      "Text editors are essential for configuration file editing and script writing in Linux. The two most common are vim (advanced) and nano (beginner-friendly).",
      "vim is a powerful, modal editor that's available on virtually every Linux system. It has a steep learning curve but offers incredible efficiency once mastered.",
      "nano is a simpler, more intuitive editor with on-screen command hints, making it ideal for beginners and quick edits.",
    ],
    codeExamples: [
      {
        title: "Basic vim Commands",
        code: `# Open file with vim
vim filename.txt

# vim modes:
# - Normal mode (default): ESC key
# - Insert mode: i, a, o keys
# - Command mode: : key

# Essential vim commands:
i          # enter insert mode
ESC        # return to normal mode
:w         # save file
:q         # quit
:wq        # save and quit
:q!        # quit without saving
dd         # delete line
yy         # copy line
p          # paste
/pattern   # search
n          # next search result`,
      },
      {
        title: "Basic nano Commands",
        code: `# Open file with nano
nano filename.txt

# Key commands (shown at bottom of screen):
# ^X - Exit
# ^O - Save file
# ^K - Cut line
# ^U - Paste line
# ^W - Search
# ^\\  - Search and replace

# Example: edit configuration file
sudo nano /etc/nginx/nginx.conf`,
      },
    ],
    keyTakeaways: [
      "vim is powerful but has a learning curve",
      "nano is beginner-friendly with visual hints",
      "Both editors are available on most systems",
      "Master at least one text editor for system administration",
    ],
  },

  "Linux File Permissions": {
    title: "Linux File Permissions",
    content: [
      "Linux file permissions control who can read, write, or execute files. Every file has an owner, group, and permissions for others.",
      "Permissions are represented in symbolic (rwx) or numeric (octal) format. Read=4, Write=2, Execute=1.",
      "Understanding permissions is critical for system security and proper access control.",
    ],
    codeExamples: [
      {
        title: "View and Modify Permissions",
        code: `# View file permissions
ls -l file.txt
# Output: -rw-r--r-- 1 user group 1234 Jan 15 10:30 file.txt
#         ^^^ owner permissions
#            ^^^ group permissions
#               ^^^ others permissions

# Change permissions (symbolic)
chmod u+x script.sh      # add execute for owner
chmod g-w file.txt       # remove write for group
chmod o=r file.txt       # set read-only for others
chmod a+r file.txt       # add read for all

# Change permissions (numeric)
chmod 755 script.sh      # rwxr-xr-x
chmod 644 file.txt       # rw-r--r--
chmod 600 private.key    # rw-------`,
      },
      {
        title: "Change Ownership",
        code: `# Change file owner
sudo chown user file.txt

# Change owner and group
sudo chown user:group file.txt

# Recursive ownership change
sudo chown -R user:group /var/www/html/

# Change only group
sudo chgrp developers project/`,
      },
    ],
    keyTakeaways: [
      "Permissions control file access: read, write, execute",
      "Use chmod to change permissions",
      "Use chown to change ownership",
      "Numeric permissions: 755 (rwxr-xr-x), 644 (rw-r--r--)",
    ],
  },

  "Special Permissions (SUID, SGID, Sticky Bit)": {
    title: "Special Permissions (SUID, SGID, Sticky Bit)",
    content: [
      "Beyond standard permissions, Linux has special permissions that modify execution behavior and directory access.",
      "SUID (Set User ID) allows a file to run with the permissions of its owner. SGID (Set Group ID) does the same for groups.",
      "The Sticky Bit on directories prevents users from deleting files they don't own, even if they have write access to the directory.",
    ],
    codeExamples: [
      {
        title: "Special Permissions",
        code: `# Set SUID (4)
chmod u+s /usr/bin/passwd
chmod 4755 executable

# Set SGID (2) 
chmod g+s /shared/directory
chmod 2755 directory

# Set Sticky Bit (1)
chmod +t /tmp
chmod 1777 /tmp

# View special permissions
ls -l /usr/bin/passwd
# -rwsr-xr-x   (note the 's' in owner execute position)

ls -ld /tmp
# drwxrwxrwt   (note the 't' in others execute position)`,
      },
    ],
    keyTakeaways: [
      "SUID allows execution with owner's privileges",
      "SGID allows execution with group's privileges",
      "Sticky bit protects files in shared directories",
      "Use special permissions carefully for security",
    ],
  },

  "Understanding Users and Groups": {
    title: "Understanding Users and Groups",
    content: [
      "Linux is a multi-user system where each user has unique credentials and permissions. Users can belong to one or more groups.",
      "User information is stored in /etc/passwd, passwords (hashed) in /etc/shadow, and group information in /etc/group.",
      "The root user (UID 0) has complete system access and should be used sparingly for security reasons.",
    ],
    codeExamples: [
      {
        title: "User Management Commands",
        code: `# Add new user
sudo useradd john
sudo useradd -m -s /bin/bash jane  # with home directory and shell

# Set user password
sudo passwd john

# Modify user
sudo usermod -aG sudo john  # add to sudo group
sudo usermod -l newname oldname  # rename user

# Delete user
sudo userdel john
sudo userdel -r john  # also remove home directory

# View user information
id username
whoami
who
w`,
      },
      {
        title: "Group Management",
        code: `# Create group
sudo groupadd developers

# Add user to group
sudo usermod -aG developers john
sudo gpasswd -a john developers

# Remove user from group
sudo gpasswd -d john developers

# View user's groups
groups john
id john

# View all groups
cat /etc/group`,
      },
    ],
    keyTakeaways: [
      "Each user has a unique UID and can belong to multiple groups",
      "useradd/userdel manage user accounts",
      "usermod modifies existing users",
      "Groups enable shared permissions for multiple users",
    ],
  },

  "Sudo and Privilege Escalation": {
    title: "Sudo and Privilege Escalation",
    content: [
      "sudo (superuser do) allows authorized users to run commands with elevated privileges without logging in as root.",
      "The /etc/sudoers file controls who can use sudo and what commands they can run. Always edit it with visudo to prevent syntax errors.",
      "Using sudo instead of the root account directly improves security by providing accountability and limiting potential damage.",
    ],
    codeExamples: [
      {
        title: "Using sudo",
        code: `# Run command as root
sudo apt update
sudo systemctl restart nginx

# Run command as specific user
sudo -u postgres psql

# Switch to root shell
sudo -i
sudo su -

# Edit sudoers file
sudo visudo

# Run command without password prompt (for current session)
sudo -v

# Show sudo privileges
sudo -l`,
      },
      {
        title: "Configure sudo Access",
        code: `# /etc/sudoers examples
# Allow user to run all commands
john ALL=(ALL:ALL) ALL

# Allow group to run all commands
%developers ALL=(ALL:ALL) ALL

# Allow specific commands without password
jane ALL=(ALL) NOPASSWD: /usr/bin/systemctl restart nginx

# Allow user to run commands as specific user
bob ALL=(postgres) ALL`,
      },
    ],
    keyTakeaways: [
      "sudo provides controlled privilege escalation",
      "Always use visudo to edit /etc/sudoers",
      "Prefer sudo over direct root login for security",
      "sudo logs all commands for accountability",
    ],
  },

  "Managing User Password Policies": {
    title: "Managing User Password Policies",
    content: [
      "Strong password policies are essential for system security. Linux provides tools to enforce password complexity, expiration, and history.",
      "The /etc/login.defs file contains default password aging settings, while pam_pwquality enforces password strength requirements.",
      "Regular password changes and complexity requirements help prevent unauthorized access.",
    ],
    codeExamples: [
      {
        title: "Password Aging",
        code: `# View password status
sudo chage -l username

# Set password expiration
sudo chage -M 90 username  # max 90 days
sudo chage -m 7 username   # min 7 days between changes
sudo chage -W 14 username  # warn 14 days before expiration

# Force password change on next login
sudo chage -d 0 username

# Set account expiration date
sudo chage -E 2024-12-31 username`,
      },
      {
        title: "Password Quality Configuration",
        code: `# Edit /etc/security/pwquality.conf
minlen = 12          # minimum length
dcredit = -1         # require at least 1 digit
ucredit = -1         # require at least 1 uppercase
lcredit = -1         # require at least 1 lowercase
ocredit = -1         # require at least 1 special char
maxrepeat = 2        # max repeated characters
usercheck = 1        # check against username`,
      },
    ],
    keyTakeaways: [
      "chage command manages password aging policies",
      "pam_pwquality enforces password complexity",
      "Regular password changes improve security",
      "Balance security with usability in policy design",
    ],
  },

  "Process Management in Linux": {
    title: "Process Management in Linux",
    content: [
      "A process is an instance of a running program. Each process has a unique Process ID (PID) and runs in its own memory space.",
      "Processes can be in various states: running, sleeping, stopped, or zombie. Understanding process states helps in troubleshooting.",
      "Linux provides tools to view, manage, and control processes, essential for system administration and performance tuning.",
    ],
    codeExamples: [
      {
        title: "View and Manage Processes",
        code: `# List all processes
ps aux
ps -ef

# View process tree
pstree
pstree -p  # with PIDs

# Interactive process viewer
top
htop  # enhanced version

# Find specific processes
ps aux | grep nginx
pgrep nginx
pidof nginx

# Kill processes
kill PID
kill -9 PID    # force kill (SIGKILL)
killall nginx  # kill all nginx processes
pkill -f "python app.py"  # kill by pattern`,
      },
      {
        title: "Background and Foreground Jobs",
        code: `# Run command in background
command &

# View background jobs
jobs

# Bring job to foreground
fg %1

# Send to background
bg %1

# Nohup (keep running after logout)
nohup command &

# Disown job
disown %1`,
      },
    ],
    keyTakeaways: [
      "Every running program is a process with a unique PID",
      "ps, top, and htop display process information",
      "kill command sends signals to processes",
      "Background jobs continue after terminal closes with nohup",
    ],
  },

  "Process Monitoring and Management": {
    title: "Process Monitoring and Management",
    content: [
      "System monitoring is crucial for maintaining performance and identifying issues. Linux provides various tools for real-time and historical analysis.",
      "Resource utilization (CPU, memory, disk, network) must be monitored to ensure optimal system performance.",
      "Understanding system metrics helps in capacity planning and troubleshooting performance bottlenecks.",
    ],
    codeExamples: [
      {
        title: "System Monitoring Commands",
        code: `# CPU and process monitoring
top
htop

# Memory usage
free -h
vmstat 1  # every second

# Disk I/O
iostat 1
iotop

# Network monitoring
iftop
nethogs
ss -tuln  # listening ports

# Overall system stats
sar -u 1 10  # CPU usage, 10 times
mpstat       # per-CPU statistics`,
      },
      {
        title: "Process Priority and Nice Values",
        code: `# View process priorities
ps -el
top (press 'r' to renice)

# Start process with nice value (-20 to 19, lower = higher priority)
nice -n 10 command

# Change priority of running process
renice -n 5 -p PID
sudo renice -n -5 -p PID  # negative values need sudo

# CPU affinity (pin to specific cores)
taskset -c 0,1 command  # run on cores 0 and 1`,
      },
    ],
    keyTakeaways: [
      "top/htop provide real-time system overview",
      "free shows memory usage, vmstat shows detailed statistics",
      "nice/renice control process priority",
      "Regular monitoring helps prevent performance issues",
    ],
  },

  "Linux Filesystem Hierarchy": {
    title: "Linux Filesystem Hierarchy",
    content: [
      "The Filesystem Hierarchy Standard (FHS) defines the structure of Linux directories. Understanding this hierarchy is essential for system navigation.",
      "Each directory has a specific purpose: /bin for essential binaries, /etc for configuration, /var for variable data, and so on.",
      "The root (/) directory is the top of the hierarchy, with all other directories branching from it.",
    ],
    codeExamples: [
      {
        title: "Key Directory Locations",
        code: `# Essential binaries
ls /bin
ls /usr/bin

# System configuration
ls /etc
ls /etc/systemd

# Variable data (logs, caches)
ls /var/log
ls /var/cache

# User home directories
ls /home

# Temporary files
ls /tmp

# Mounted filesystems
ls /mnt
ls /media`,
      },
      {
        title: "Explore Filesystem",
        code: `# Show disk usage
du -sh /*
du -h --max-depth=1 /home

# Show filesystem info
df -h
df -i  # inode usage

# Find large files
find / -type f -size +100M 2>/dev/null

# Disk space by directory
ncdu /  # interactive disk usage analyzer`,
      },
    ],
    keyTakeaways: [
      "/ is the root directory containing all others",
      "/etc stores configuration files",
      "/var contains variable data like logs",
      "/home holds user personal files",
    ],
  },

  "Disk Partitioning and Mounting": {
    title: "Disk Partitioning and Mounting",
    content: [
      "Disk partitioning divides physical storage into logical sections. Each partition can have its own filesystem and mount point.",
      "The mount command attaches filesystems to the directory tree. /etc/fstab contains permanent mount configurations.",
      "Understanding partitioning is crucial for storage management, performance optimization, and system recovery.",
    ],
    codeExamples: [
      {
        title: "View and Manage Disks",
        code: `# List block devices
lsblk
lsblk -f  # with filesystem info

# Partition information
sudo fdisk -l
sudo parted -l

# Create partition (interactive)
sudo fdisk /dev/sdb
# Commands: n (new), p (primary), w (write)

# Format partition
sudo mkfs.ext4 /dev/sdb1
sudo mkfs.xfs /dev/sdb1

# Create swap
sudo mkswap /dev/sdb2
sudo swapon /dev/sdb2`,
      },
      {
        title: "Mount Filesystems",
        code: `# Mount partition
sudo mount /dev/sdb1 /mnt/data

# Unmount
sudo umount /mnt/data

# View mounts
mount
df -h

# Permanent mounts in /etc/fstab
# /dev/sdb1  /mnt/data  ext4  defaults  0  2

# Mount all from fstab
sudo mount -a

# Check filesystem
sudo fsck /dev/sdb1`,
      },
    ],
    keyTakeaways: [
      "Partitions divide disks into logical sections",
      "mount attaches filesystems to the directory tree",
      "/etc/fstab configures automatic mounts at boot",
      "Different filesystems (ext4, xfs, btrfs) have different features",
    ],
  },

  "Job Scheduling with Cron and At": {
    title: "Job Scheduling with Cron and At",
    content: [
      "Cron is a time-based job scheduler that runs commands at specified intervals. It's essential for automation and maintenance tasks.",
      "The at command schedules one-time jobs to run at a specific time, useful for delayed execution.",
      "Cron jobs are defined in crontab files, with syntax specifying minute, hour, day, month, and weekday.",
    ],
    codeExamples: [
      {
        title: "Cron Configuration",
        code: `# Edit user crontab
crontab -e

# View user crontab
crontab -l

# Cron syntax: minute hour day month weekday command
# * * * * *
# | | | | |
# | | | | +-- Day of week (0-7, Sunday=0 or 7)
# | | | +---- Month (1-12)
# | | +------ Day of month (1-31)
# | +-------- Hour (0-23)
# +---------- Minute (0-59)

# Examples:
# Run every day at 2:30 AM
30 2 * * * /path/to/script.sh

# Run every Monday at 8 AM
0 8 * * 1 /usr/bin/backup.sh

# Run every 5 minutes
*/5 * * * * /usr/bin/check-status.sh

# Run on the 1st of every month
0 0 1 * * /usr/bin/monthly-report.sh`,
      },
      {
        title: "Using at Command",
        code: `# Schedule one-time job
echo "/usr/bin/backup.sh" | at 10:30 PM
at 2:00 AM tomorrow -f script.sh

# Schedule with relative time
echo "command" | at now + 2 hours
at 10am + 3 days

# View scheduled jobs
atq
at -l

# Remove scheduled job
atrm job_number

# View job details
at -c job_number`,
      },
    ],
    keyTakeaways: [
      "Cron runs recurring scheduled tasks",
      "Crontab syntax: minute hour day month weekday",
      "at schedules one-time future jobs",
      "Use cron for regular automation and maintenance",
    ],
  },

  // Add AWS documentation
  "AWS Foundations": {
    title: "AWS Foundations",
    content: [
      "Amazon Web Services (AWS) is the world's leading cloud platform offering computing, storage, databases, analytics, and more.",
      "Understanding AWS basics includes regions, availability zones, and core services like EC2, S3, and VPC.",
    ],
    keyTakeaways: [
      "AWS operates in multiple regions worldwide",
      "Each region has multiple availability zones for redundancy",
      "Core services include compute, storage, and networking",
    ],
  },

  // Add Docker documentation
  "Introduction to Docker": {
    title: "Introduction to Docker",
    content: [
      "Docker is a containerization platform that packages applications with their dependencies for consistent deployment across environments.",
      "Containers are lightweight, portable, and isolated execution environments that share the host OS kernel.",
    ],
    codeExamples: [
      {
        title: "Basic Docker Commands",
        code: `# Pull image
docker pull ubuntu:22.04

# Run container
docker run -it ubuntu:22.04 bash

# List containers
docker ps
docker ps -a

# Stop container
docker stop container_id`,
      },
    ],
    keyTakeaways: [
      "Containers provide lightweight isolation",
      "Docker images are immutable templates",
      "Containers enable consistent environments",
    ],
  },

  // Add Kubernetes documentation
  "Kubernetes Basics": {
    title: "Kubernetes Basics",
    content: [
      "Kubernetes (K8s) orchestrates containerized applications across clusters of machines, handling deployment, scaling, and management.",
      "Key concepts include Pods (smallest deployable units), Services (networking), and Deployments (declarative updates).",
    ],
    codeExamples: [
      {
        title: "Basic kubectl Commands",
        code: `# Get cluster info
kubectl cluster-info

# List pods
kubectl get pods

# Create deployment
kubectl create deployment nginx --image=nginx

# Expose service
kubectl expose deployment nginx --port=80 --type=LoadBalancer`,
      },
    ],
    keyTakeaways: [
      "Pods are the smallest deployable units in Kubernetes",
      "Services provide stable networking for pods",
      "Deployments manage pod lifecycle and scaling",
    ],
  },

  // Add Git documentation
  "Git Fundamentals": {
    title: "Git Fundamentals",
    content: [
      "Git is a distributed version control system that tracks changes in source code and enables collaboration among developers.",
      "Git repositories contain the complete history of all changes, allowing you to revert, branch, and merge code efficiently.",
    ],
    codeExamples: [
      {
        title: "Basic Git Workflow",
        code: `# Initialize repository
git init

# Add files
git add .

# Commit changes
git commit -m "Initial commit"

# View status
git status

# View history
git log

# Create branch
git branch feature-branch
git checkout feature-branch

# Merge branch
git checkout main
git merge feature-branch`,
      },
    ],
    keyTakeaways: [
      "Git tracks all changes to your code over time",
      "Branches enable parallel development",
      "Commits create snapshots of your project",
    ],
  },

  // Add Terraform documentation
  "Terraform Basics": {
    title: "Terraform Basics",
    content: [
      "Terraform is an infrastructure as code (IaC) tool that allows you to define and provision infrastructure using declarative configuration files.",
      "With Terraform, you can manage cloud resources across multiple providers (AWS, Azure, GCP) using a consistent workflow.",
    ],
    codeExamples: [
      {
        title: "Basic Terraform Workflow",
        code: `# Initialize Terraform
terraform init

# Preview changes
terraform plan

# Apply changes
terraform apply

# Destroy infrastructure
terraform destroy

# Format code
terraform fmt

# Validate configuration
terraform validate`,
      },
    ],
    keyTakeaways: [
      "Terraform uses declarative configuration",
      "State files track infrastructure changes",
      "Supports multiple cloud providers",
    ],
  },

  // Add Jenkins documentation
  "Jenkins Basics": {
    title: "Jenkins Basics",
    content: [
      "Jenkins is an open-source automation server for continuous integration and continuous delivery (CI/CD).",
      "Jenkins pipelines automate the software development lifecycle from building and testing to deployment.",
    ],
    codeExamples: [
      {
        title: "Simple Jenkinsfile",
        code: `pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}`,
      },
    ],
    keyTakeaways: [
      "Jenkins automates build, test, and deployment",
      "Pipelines define workflows as code",
      "Extensible through plugins",
    ],
  },

  // Add Ansible documentation
  "Ansible Basics": {
    title: "Ansible Basics",
    content: [
      "Ansible is an agentless automation tool that uses SSH to configure systems, deploy applications, and orchestrate complex IT tasks.",
      "Playbooks define automation tasks in YAML format, making infrastructure automation readable and version-controlled.",
    ],
    codeExamples: [
      {
        title: "Simple Ansible Playbook",
        code: `---
- name: Install and start nginx
  hosts: webservers
  become: yes
  
  tasks:
    - name: Install nginx
      apt:
        name: nginx
        state: present
        
    - name: Start nginx service
      service:
        name: nginx
        state: started
        enabled: yes`,
      },
    ],
    keyTakeaways: [
      "Ansible is agentless and uses SSH",
      "Playbooks define automation in YAML",
      "Idempotent - safe to run multiple times",
    ],
  },

  // Add Prometheus documentation
  "Prometheus Basics": {
    title: "Prometheus Basics",
    content: [
      "Prometheus is an open-source monitoring and alerting toolkit designed for reliability and scalability.",
      "It collects metrics from configured targets at given intervals, evaluates rule expressions, and can trigger alerts.",
    ],
    codeExamples: [
      {
        title: "Prometheus Configuration",
        code: `global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'node_exporter'
    static_configs:
      - targets: ['localhost:9100']
      
  - job_name: 'my_app'
    static_configs:
      - targets: ['localhost:8080']`,
      },
    ],
    keyTakeaways: [
      "Prometheus uses a pull model for metrics collection",
      "PromQL enables powerful metric queries",
      "Integrates with Grafana for visualization",
    ],
  },
};
