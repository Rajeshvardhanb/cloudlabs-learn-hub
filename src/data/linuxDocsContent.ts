export interface DocLesson {
  title: string;
  content: string;
  codeExamples?: {
    title: string;
    code: string;
    language: string;
  }[];
  keyPoints?: string[];
}

export const linuxDocsContent: Record<string, DocLesson> = {
  "Introduction to Linux": {
    title: "Introduction to Linux",
    content: `Linux is a powerful, open-source operating system kernel that forms the foundation of numerous distributions used worldwide. Created by Linus Torvalds in 1991, Linux has grown to become the backbone of modern computing infrastructure, powering everything from smartphones to supercomputers.

**Why Learn Linux?**

Linux dominates the server and cloud computing landscape, with over 90% of public cloud workloads running on Linux. Understanding Linux is essential for DevOps engineers, system administrators, and cloud professionals.

**Key Characteristics:**
- **Open Source**: Free to use, modify, and distribute
- **Stability**: Known for its reliability and uptime
- **Security**: Built-in security features and regular updates
- **Flexibility**: Highly customizable for various use cases
- **Performance**: Efficient resource utilization`,
    keyPoints: [
      "Linux is an open-source operating system kernel",
      "Over 90% of cloud infrastructure runs on Linux",
      "Essential skill for DevOps and cloud professionals",
      "Offers superior stability, security, and performance",
      "Free to use with vast community support"
    ]
  },
  
  "Installing Linux": {
    title: "Installing Linux",
    content: `Installing Linux is straightforward and can be done in multiple ways depending on your needs. Whether you're setting up a development environment, a server, or just exploring Linux, there's an installation method for you.

**Installation Options:**

1. **Dual Boot**: Install Linux alongside your existing OS
2. **Virtual Machine**: Run Linux in VirtualBox, VMware, or similar
3. **Live USB**: Run Linux without installation
4. **Cloud Instance**: Deploy Linux on AWS, Azure, or GCP
5. **WSL (Windows Subsystem for Linux)**: Run Linux natively on Windows

**Popular Distributions for Beginners:**
- **Ubuntu**: User-friendly, great documentation
- **Linux Mint**: Windows-like interface, easy transition
- **Fedora**: Cutting-edge features, stable
- **CentOS/Rocky Linux**: Enterprise-grade, RHEL-based`,
    codeExamples: [
      {
        title: "Create Bootable USB (Linux)",
        code: `# Using dd command (be very careful with device names!)
sudo dd if=ubuntu-22.04.iso of=/dev/sdb bs=4M status=progress

# Using balenaEtcher (recommended for beginners)
# Download from: https://www.balena.io/etcher/`,
        language: "bash"
      },
      {
        title: "Verify ISO Checksum",
        code: `# Download the SHA256SUMS file from the official site
# Then verify:
sha256sum -c SHA256SUMS 2>&1 | grep ubuntu-22.04.iso`,
        language: "bash"
      }
    ],
    keyPoints: [
      "Choose the right distribution for your needs",
      "Always verify ISO checksums before installation",
      "Virtual machines are great for learning",
      "Dual boot requires careful partition management",
      "Cloud instances are ideal for remote learning"
    ]
  },

  "Essential Commands": {
    title: "Essential Linux Commands",
    content: `Mastering the command line is crucial for effective Linux usage. These essential commands form the foundation of Linux system administration and daily operations.

**Navigation and File Management:**

The Linux filesystem follows a hierarchical structure starting from root (/). Understanding how to navigate and manipulate files is your first step to Linux mastery.`,
    codeExamples: [
      {
        title: "Navigation Commands",
        code: `# Print working directory
pwd

# List files and directories
ls
ls -la  # Detailed list with hidden files
ls -lh  # Human-readable file sizes

# Change directory
cd /var/log          # Absolute path
cd ../..             # Go up two levels
cd ~                 # Go to home directory
cd -                 # Go to previous directory`,
        language: "bash"
      },
      {
        title: "File Operations",
        code: `# Create files
touch newfile.txt
echo "Hello Linux" > file.txt

# Copy files
cp source.txt destination.txt
cp -r /source/dir /destination/dir  # Copy directory recursively

# Move/Rename files
mv oldname.txt newname.txt
mv file.txt /new/location/

# Delete files
rm file.txt
rm -rf directory/  # Remove directory and contents (use carefully!)`,
        language: "bash"
      },
      {
        title: "Viewing File Contents",
        code: `# Display entire file
cat filename.txt

# View file with pagination
less filename.txt
more filename.txt

# View first/last lines
head -n 10 filename.txt  # First 10 lines
tail -n 20 filename.txt  # Last 20 lines
tail -f /var/log/syslog  # Follow log in real-time`,
        language: "bash"
      }
    ],
    keyPoints: [
      "Use 'man command' to view manual pages",
      "Tab completion saves time and prevents typos",
      "Use 'history' to view previous commands",
      "Ctrl+R for reverse search through command history",
      "Always be careful with 'rm -rf' command"
    ]
  },

  "File Operations": {
    title: "Advanced File Operations",
    content: `Linux provides powerful tools for file manipulation, searching, and processing. These operations are essential for automation, scripting, and system administration.

**File Searching and Finding:**

The 'find' and 'grep' commands are among the most powerful tools in Linux for locating files and content.`,
    codeExamples: [
      {
        title: "Finding Files",
        code: `# Find by name
find /home -name "*.txt"

# Find by type
find /var -type f  # Files only
find /var -type d  # Directories only

# Find by size
find /home -size +100M  # Files larger than 100MB
find /tmp -size -1k     # Files smaller than 1KB

# Find by modification time
find /var/log -mtime -7  # Modified in last 7 days
find /home -mmin -60     # Modified in last 60 minutes

# Execute command on found files
find /tmp -name "*.tmp" -exec rm {} \\;`,
        language: "bash"
      },
      {
        title: "Searching File Contents (grep)",
        code: `# Basic search
grep "error" /var/log/syslog

# Case-insensitive search
grep -i "warning" logfile.txt

# Recursive search in directory
grep -r "TODO" /home/user/projects/

# Show line numbers
grep -n "function" script.sh

# Invert match (show non-matching lines)
grep -v "success" logfile.txt

# Search with regular expressions
grep -E "error|warning|critical" /var/log/syslog`,
        language: "bash"
      },
      {
        title: "File Compression and Archiving",
        code: `# Create tar archive
tar -czf archive.tar.gz /path/to/directory

# Extract tar archive
tar -xzf archive.tar.gz

# View contents without extracting
tar -tzf archive.tar.gz

# Create zip archive
zip -r archive.zip /path/to/directory

# Extract zip
unzip archive.zip

# View disk usage
du -sh /path/to/directory
du -h --max-depth=1 /var/`,
        language: "bash"
      }
    ],
    keyPoints: [
      "'find' is more powerful but slower than 'locate'",
      "Use 'grep' with pipes for powerful text processing",
      "Regular expressions greatly enhance search capabilities",
      "Always test destructive operations with -print first",
      "Compress before transferring large directories"
    ]
  },

  "Directory Structure": {
    title: "Linux Directory Structure (FHS)",
    content: `Linux follows the Filesystem Hierarchy Standard (FHS), which defines the directory structure and contents. Understanding this structure is crucial for system administration and troubleshooting.

**Root Level Directories:**`,
    codeExamples: [
      {
        title: "Key Directories Explained",
        code: `# System Directories
/bin        # Essential command binaries (ls, cp, cat)
/sbin       # System binaries (mount, ifconfig)
/etc        # System configuration files
/lib        # Essential shared libraries
/usr        # User programs and data
/var        # Variable data (logs, databases)
/tmp        # Temporary files (cleared on reboot)
/opt        # Optional software packages
/home       # User home directories
/root       # Root user's home directory
/boot       # Boot loader files
/dev        # Device files
/proc       # Process information
/sys        # System information`,
        language: "bash"
      },
      {
        title: "Navigating Important Directories",
        code: `# View system logs
cd /var/log
ls -lh

# Check configuration files
cd /etc
ls nginx/  # Nginx config
ls ssh/    # SSH config

# View running processes
ls -l /proc

# Check installed packages
ls /usr/bin | wc -l  # Count installed binaries`,
        language: "bash"
      }
    ],
    keyPoints: [
      "/etc contains all system configuration files",
      "/var/log is where most application logs reside",
      "/home stores user personal data",
      "/tmp is cleared on reboot (use for temporary files only)",
      "/proc and /sys are virtual filesystems"
    ]
  },

  "File Permissions": {
    title: "Understanding File Permissions",
    content: `Linux uses a robust permission system to control file and directory access. Understanding permissions is crucial for security and proper system administration.

**Permission Types:**

Linux has three permission types (Read, Write, Execute) for three user categories (Owner, Group, Others).

**Numeric Permission Mode:**
- Read (r) = 4
- Write (w) = 2  
- Execute (x) = 1

**Common Permission Values:**
- 755: rwxr-xr-x (Owner: all, Others: read+execute)
- 644: rw-r--r-- (Owner: read+write, Others: read only)
- 700: rwx------ (Owner: all, Others: none)`,
    codeExamples: [
      {
        title: "Viewing and Understanding Permissions",
        code: `# List with permissions
ls -l

# Example output:
# -rw-r--r-- 1 user group 1234 Jan 01 12:00 file.txt
# │││││││││
# │││└─────────── Others: r--
# ││└──────────── Group: r--
# │└───────────── Owner: rw-
# └────────────── File type: - (regular file)

# File types:
# -  Regular file
# d  Directory
# l  Symbolic link
# c  Character device
# b  Block device`,
        language: "bash"
      },
      {
        title: "Changing Permissions (chmod)",
        code: `# Symbolic mode
chmod u+x script.sh      # Add execute for owner
chmod g-w file.txt       # Remove write for group
chmod o+r document.pdf   # Add read for others
chmod a+x binary         # Add execute for all

# Numeric mode
chmod 755 script.sh      # rwxr-xr-x
chmod 644 file.txt       # rw-r--r--
chmod 600 secret.key     # rw-------

# Recursive permission change
chmod -R 755 /var/www/html/`,
        language: "bash"
      },
      {
        title: "Changing Ownership (chown)",
        code: `# Change owner
sudo chown username file.txt

# Change owner and group
sudo chown username:groupname file.txt

# Recursive ownership change
sudo chown -R www-data:www-data /var/www/

# Change only group
sudo chgrp groupname file.txt`,
        language: "bash"
      },
      {
        title: "Special Permissions",
        code: `# SUID (Set User ID) - 4000
chmod u+s /usr/bin/program
chmod 4755 program

# SGID (Set Group ID) - 2000
chmod g+s /shared/directory
chmod 2755 directory

# Sticky Bit - 1000 (only owner can delete)
chmod +t /tmp
chmod 1777 /shared/temp`,
        language: "bash"
      }
    ],
    keyPoints: [
      "Never use chmod 777 unless absolutely necessary",
      "SUID can be a security risk if misused",
      "Use sticky bit on shared directories",
      "Check permissions before running scripts",
      "Understand the difference between owner, group, and others"
    ]
  },

  "Managing Users": {
    title: "User and Group Management",
    content: `Linux is a multi-user system with robust user and group management capabilities. Proper user management is essential for security and system organization.

**User Types:**
1. **Root (UID 0)**: Superuser with unlimited privileges
2. **System Users (UID 1-999)**: Service accounts for daemons
3. **Regular Users (UID 1000+)**: Human users`,
    codeExamples: [
      {
        title: "User Management Commands",
        code: `# Add new user
sudo useradd -m -s /bin/bash john
sudo useradd -m -G sudo,developers jane  # With groups

# Set user password
sudo passwd john

# Modify user
sudo usermod -aG docker john  # Add to docker group
sudo usermod -s /bin/zsh john # Change shell
sudo usermod -l newname oldname # Rename user

# Delete user
sudo userdel john        # Keep home directory
sudo userdel -r john     # Remove home directory

# View user information
id username
finger username
cat /etc/passwd | grep username`,
        language: "bash"
      },
      {
        title: "Group Management",
        code: `# Create group
sudo groupadd developers

# Add user to group
sudo usermod -aG developers john

# Remove user from group
sudo gpasswd -d john developers

# Delete group
sudo groupdel developers

# View user groups
groups john
id john

# View all groups
cat /etc/group`,
        language: "bash"
      },
      {
        title: "Switching Users and Privileges",
        code: `# Switch to another user
su - username

# Switch to root
su -
sudo -i

# Execute command as another user
sudo -u www-data whoami

# Execute command as root
sudo apt update

# Edit sudoers file (ONLY use visudo!)
sudo visudo

# Check sudo privileges
sudo -l`,
        language: "bash"
      }
    ],
    keyPoints: [
      "Always use sudo for administrative tasks instead of root login",
      "Use visudo to edit sudoers file safely",
      "System users should not have login shells",
      "Keep track of group memberships for security",
      "Regular users should have UID >= 1000"
    ]
  },

  "Package Managers": {
    title: "Package Management",
    content: `Package managers are essential tools for installing, updating, and managing software on Linux systems. Different distributions use different package managers.

**Main Package Managers:**
- **apt/apt-get**: Debian, Ubuntu, Linux Mint
- **yum/dnf**: RHEL, CentOS, Fedora, Rocky Linux
- **pacman**: Arch Linux
- **zypper**: openSUSE`,
    codeExamples: [
      {
        title: "APT (Debian/Ubuntu)",
        code: `# Update package lists
sudo apt update

# Upgrade all packages
sudo apt upgrade
sudo apt full-upgrade  # Includes dependency changes

# Install package
sudo apt install nginx
sudo apt install nginx postgresql redis-server

# Remove package
sudo apt remove nginx
sudo apt purge nginx  # Remove with config files
sudo apt autoremove   # Remove unused dependencies

# Search for packages
apt search nginx
apt list --installed | grep nginx

# Show package information
apt show nginx
apt policy nginx

# Clean up
sudo apt clean
sudo apt autoclean`,
        language: "bash"
      },
      {
        title: "YUM/DNF (RHEL/CentOS/Fedora)",
        code: `# Update system
sudo dnf update
sudo yum update  # On older systems

# Install package
sudo dnf install nginx
sudo dnf install -y httpd mariadb-server  # Skip confirmation

# Remove package
sudo dnf remove nginx
sudo dnf autoremove  # Remove unused dependencies

# Search packages
dnf search nginx
dnf list installed | grep nginx

# Show package info
dnf info nginx

# List repositories
dnf repolist

# Clean cache
sudo dnf clean all`,
        language: "bash"
      },
      {
        title: "Snap and Flatpak (Universal Packages)",
        code: `# Snap packages
sudo snap install code --classic
sudo snap list
sudo snap refresh code
sudo snap remove code

# Flatpak packages
flatpak install flathub org.mozilla.firefox
flatpak list
flatpak update org.mozilla.firefox
flatpak uninstall org.mozilla.firefox`,
        language: "bash"
      }
    ],
    keyPoints: [
      "Always run 'apt update' before installing packages",
      "Use 'autoremove' to clean up unused dependencies",
      "Snap and Flatpak provide distribution-agnostic packages",
      "Check official repositories before third-party sources",
      "Keep your system updated regularly for security"
    ]
  }
};
