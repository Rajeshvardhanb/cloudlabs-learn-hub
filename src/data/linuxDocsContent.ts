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
  "Introduction to Linux and Open Source": {
    title: "Introduction to Linux and Open Source",
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
  
  "Linux Distributions Overview (Ubuntu, RHEL, CentOS)": {
    title: "Linux Distributions Overview",
    content: `Linux comes in many "flavors" called distributions (distros). Each distribution packages the Linux kernel with different software, tools, and configurations to serve specific purposes.

**Major Linux Distribution Families:**

1. **Debian-based** (Ubuntu, Linux Mint, Pop!_OS)
   - User-friendly and well-documented
   - APT package manager
   - Large community support
   - Great for beginners and desktops

2. **Red Hat-based** (RHEL, CentOS, Rocky Linux, Fedora)
   - Enterprise-focused
   - YUM/DNF package manager
   - Widely used in corporate environments
   - Excellent stability and support

3. **Arch-based** (Arch Linux, Manjaro)
   - Rolling release model
   - Cutting-edge software
   - Highly customizable
   - For advanced users

4. **SUSE-based** (openSUSE, SUSE Linux Enterprise)
   - Strong in enterprise environments
   - YaST configuration tool
   - Popular in Europe`,
    keyPoints: [
      "Ubuntu is the most popular Linux distribution for beginners",
      "RHEL/CentOS are standard in enterprise data centers",
      "Fedora showcases the latest features before RHEL",
      "Choose based on your use case: desktop vs server",
      "All distributions share the same Linux kernel"
    ]
  },

  "Installing Linux (VM & Cloud Setup)": {
    title: "Installing Linux (VM & Cloud Setup)",
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

  "Navigating the Terminal and Basic Commands": {
    title: "Navigating the Terminal and Basic Commands",
    content: `The terminal (or shell) is your gateway to Linux power. While it may seem intimidating at first, the command line offers unmatched control and efficiency once you master the basics.

**What is the Shell?**

The shell is a command-line interpreter that accepts your commands and executes them. The most common shell is Bash (Bourne Again Shell), but others like Zsh and Fish are also popular.

**Basic Terminal Navigation:**

Understanding how to move around the filesystem is your first critical skill. The Linux filesystem is hierarchical, starting from the root directory (/).`,
    codeExamples: [
      {
        title: "Getting Started - First Commands",
        code: `# Display your current username
whoami

# Display current date and time
date

# Display system information
uname -a

# Show current shell
echo $SHELL

# Clear the screen
clear

# Display a message
echo "Hello, Linux!"`,
        language: "bash"
      },
      {
        title: "Basic Navigation",
        code: `# Print working directory (where am I?)
pwd

# List files in current directory
ls

# Change to home directory
cd ~
cd

# Change to specific directory
cd /var/log

# Go up one directory level
cd ..

# Go back to previous directory
cd -`,
        language: "bash"
      },
      {
        title: "Getting Help",
        code: `# View manual page for a command
man ls
man cp

# Quick help for a command
ls --help
cp --help

# Search for commands
apropos "copy files"

# Show command type
type ls
which python`,
        language: "bash"
      }
    ],
    keyPoints: [
      "The terminal is case-sensitive (file.txt ≠ File.txt)",
      "Use Tab key for auto-completion",
      "Use Up/Down arrows to navigate command history",
      "Ctrl+C cancels the current command",
      "man pages are your best friend for learning commands"
    ]
  },

  "Essential Commands (ls, cd, pwd, mkdir, rm, cp, mv)": {
    title: "Essential Commands (ls, cd, pwd, mkdir, rm, cp, mv)",
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

  "Working with Files and Directories": {
    title: "Working with Files and Directories",
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

  "Viewing and Editing Files (cat, less, head, tail, vi, nano)": {
    title: "Viewing and Editing Files",
    content: `Linux provides numerous tools for viewing and editing files. Understanding these tools is essential for system administration, troubleshooting, and development.

**File Viewing Tools:**

Different tools serve different purposes. Use cat for small files, less for large files, and head/tail for checking beginnings or ends.`,
    codeExamples: [
      {
        title: "Viewing Files",
        code: `# Display entire file
cat filename.txt
cat file1.txt file2.txt  # Multiple files

# View with line numbers
cat -n filename.txt

# View large files with pagination
less filename.txt
# In less: Space=next page, b=previous page, q=quit, /=search

# View first lines
head filename.txt        # First 10 lines
head -n 20 filename.txt  # First 20 lines

# View last lines
tail filename.txt        # Last 10 lines
tail -n 50 filename.txt  # Last 50 lines

# Follow file in real-time (great for logs!)
tail -f /var/log/syslog`,
        language: "bash"
      },
      {
        title: "Editing with Nano (Beginner-Friendly)",
        code: `# Open file in nano
nano filename.txt

# Nano keyboard shortcuts:
# Ctrl+O - Save file
# Ctrl+X - Exit
# Ctrl+W - Search
# Ctrl+K - Cut line
# Ctrl+U - Paste
# Ctrl+G - Help`,
        language: "bash"
      },
      {
        title: "Editing with Vi/Vim (Advanced)",
        code: `# Open file in vi
vi filename.txt
vim filename.txt

# Vi has different modes:
# - Normal mode (default)
# - Insert mode (press 'i' to enter)
# - Command mode (press ':' to enter)

# Basic Vi commands:
i      # Enter insert mode
Esc    # Return to normal mode
:w     # Save file
:q     # Quit
:wq    # Save and quit
:q!    # Quit without saving
dd     # Delete line
yy     # Copy line
p      # Paste
/text  # Search for 'text'`,
        language: "bash"
      }
    ],
    keyPoints: [
      "Use 'less' for viewing large files",
      "tail -f is essential for monitoring logs",
      "nano is easier for beginners, vi/vim is more powerful",
      "Always know how to exit vi: Esc, then :q!",
      "cat is great for small files and combining files"
    ]
  },

  "Understanding Linux Directory Structure": {
    title: "Understanding Linux Directory Structure",
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

  "File Ownership and Permissions (chmod, chown, chgrp)": {
    title: "File Ownership and Permissions",
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

  "Creating and Managing Users": {
    title: "Creating and Managing Users",
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

  "Package Managers Overview (apt, yum, dnf, zypper)": {
    title: "Package Managers Overview",
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
  },

  "Input, Output, and Redirection": {
    title: "Input, Output, and Redirection",
    content: `Linux uses data streams for input and output. Understanding redirection is crucial for efficient command-line work and automation.

**Standard Streams:**
- **stdin (0)**: Standard input (keyboard by default)
- **stdout (1)**: Standard output (screen by default)
- **stderr (2)**: Standard error (screen by default)

**Redirection Operators:**
- \`>\` : Redirect stdout (overwrite)
- \`>>\` : Redirect stdout (append)
- \`<\` : Redirect stdin
- \`2>\` : Redirect stderr
- \`&>\` : Redirect both stdout and stderr`,
    codeExamples: [
      {
        title: "Output Redirection",
        code: `# Redirect output to file (overwrite)
ls -la > files.txt
echo "Hello" > greeting.txt

# Redirect output to file (append)
echo "World" >> greeting.txt
date >> log.txt

# Redirect stderr to file
command-that-fails 2> errors.txt

# Redirect both stdout and stderr
command &> output.txt
command > output.txt 2>&1

# Discard output (send to /dev/null)
command > /dev/null 2>&1`,
        language: "bash"
      },
      {
        title: "Input Redirection",
        code: `# Read from file instead of keyboard
wc -l < file.txt
sort < unsorted.txt > sorted.txt

# Here document (multi-line input)
cat << EOF > config.txt
Setting1=value1
Setting2=value2
Setting3=value3
EOF

# Here string
grep "error" <<< "this is an error message"`,
        language: "bash"
      },
      {
        title: "Advanced Redirection",
        code: `# Pipe output to another command
ls -l | grep ".txt"
ps aux | grep nginx | awk '{print $2}'

# Tee command (output to file AND screen)
ls -la | tee filelist.txt
command | tee output.txt | grep "error"

# Command substitution
echo "Today is $(date)"
FILES=$(ls *.txt)

# Process substitution
diff <(ls dir1) <(ls dir2)`,
        language: "bash"
      }
    ],
    keyPoints: [
      "Use > to redirect output (overwrites file)",
      "Use >> to redirect output (appends to file)",
      "Use 2> to redirect error messages",
      "Combine streams with &> or > file 2>&1",
      "Use tee to both save and display output"
    ]
  },

  "Pipes and Filters (grep, sort, wc, cut, uniq)": {
    title: "Pipes and Filters",
    content: `Pipes allow you to chain commands together, passing the output of one command as input to another. This is one of Linux's most powerful features for text processing.

**Common Filter Commands:**
- **grep**: Search for patterns
- **sort**: Sort lines
- **uniq**: Remove duplicates
- **cut**: Extract columns
- **wc**: Count words, lines, characters
- **awk**: Pattern scanning and processing
- **sed**: Stream editor`,
    codeExamples: [
      {
        title: "grep - Search and Filter",
        code: `# Basic search
grep "error" /var/log/syslog
ps aux | grep nginx

# Case-insensitive search
grep -i "warning" log.txt

# Show line numbers
grep -n "function" script.sh

# Recursive search
grep -r "TODO" /home/user/projects/

# Invert match (show non-matching lines)
grep -v "success" log.txt

# Count matching lines
grep -c "error" log.txt

# Regular expressions
grep -E "error|warning|critical" log.txt
grep "^[0-9]" file.txt  # Lines starting with number`,
        language: "bash"
      },
      {
        title: "sort, uniq, wc, cut",
        code: `# Sort lines
sort file.txt
sort -r file.txt  # Reverse sort
sort -n numbers.txt  # Numeric sort
sort -k 2 data.txt  # Sort by 2nd column

# Remove duplicates (requires sorted input)
sort file.txt | uniq
sort file.txt | uniq -c  # Count occurrences
sort file.txt | uniq -d  # Show only duplicates

# Word, line, character count
wc file.txt
wc -l file.txt  # Count lines only
wc -w file.txt  # Count words only

# Extract columns
cut -d: -f1 /etc/passwd  # Extract 1st field
cut -d, -f1,3 data.csv  # Extract 1st and 3rd field
cut -c1-10 file.txt  # Extract characters 1-10`,
        language: "bash"
      },
      {
        title: "Powerful Command Chains",
        code: `# Find most common commands in history
history | awk '{print $2}' | sort | uniq -c | sort -rn | head -10

# Count files by extension
find . -type f | sed 's/.*\\.//' | sort | uniq -c | sort -rn

# Find largest files
du -ah /home | sort -rh | head -20

# Extract specific fields from process list
ps aux | awk '{print $1, $11}' | sort | uniq

# Count unique IPs in access log
cat access.log | awk '{print $1}' | sort | uniq -c | sort -rn

# Find failed login attempts
grep "Failed password" /var/log/auth.log | awk '{print $11}' | sort | uniq -c | sort -rn`,
        language: "bash"
      }
    ],
    keyPoints: [
      "Pipes (|) chain commands together efficiently",
      "grep is essential for searching text and logs",
      "sort and uniq work together to analyze data",
      "awk and sed are powerful for text processing",
      "Combine multiple filters for complex operations"
    ]
  },

  "Hidden Files and Special Permissions (SUID, SGID, Sticky Bit)": {
    title: "Hidden Files and Special Permissions",
    content: `Linux has special file permissions beyond the standard read, write, and execute. These include SUID, SGID, and sticky bit, which provide additional security and functionality controls.

**Hidden Files:**
Files starting with a dot (.) are hidden by default.

**Special Permissions:**
- **SUID (Set User ID)**: Run as file owner
- **SGID (Set Group ID)**: Run as group owner or inherit directory group
- **Sticky Bit**: Only owner can delete files in directory`,
    codeExamples: [
      {
        title: "Working with Hidden Files",
        code: `# List all files including hidden
ls -la

# List only hidden files
ls -ld .*

# Create hidden file
touch .hidden_file
echo "secret" > .secret_config

# Common hidden files
~/.bashrc        # Bash configuration
~/.bash_profile  # Bash login configuration
~/.ssh/          # SSH keys and config
~/.gitconfig     # Git configuration

# Show file size of hidden files
du -sh .[^.]*`,
        language: "bash"
      },
      {
        title: "SUID (Set User ID) - 4000",
        code: `# Check for SUID files
find / -perm -4000 -type f 2>/dev/null

# Example SUID programs
ls -l /usr/bin/passwd  # rws: SUID bit set
ls -l /usr/bin/sudo

# Set SUID
chmod u+s /path/to/program
chmod 4755 program

# Remove SUID
chmod u-s program
chmod 0755 program

# Security Note: SUID allows users to execute
# the program with the file owner's privileges
# Example: passwd runs as root to modify /etc/shadow`,
        language: "bash"
      },
      {
        title: "SGID (Set Group ID) - 2000",
        code: `# Set SGID on file
chmod g+s /path/to/program
chmod 2755 program

# Set SGID on directory (new files inherit group)
chmod g+s /shared/projects
chmod 2775 /shared/projects

# Verify SGID
ls -ld /shared/projects  # drwxrwsr-x

# Use case: Shared project directories
sudo mkdir /shared/team
sudo chgrp developers /shared/team
sudo chmod 2775 /shared/team
# Now all files created in this directory
# automatically belong to 'developers' group`,
        language: "bash"
      },
      {
        title: "Sticky Bit - 1000",
        code: `# Set sticky bit (common on /tmp)
chmod +t /shared/temp
chmod 1777 /shared/temp

# Check sticky bit
ls -ld /tmp  # drwxrwxrwt (t at the end)

# Remove sticky bit
chmod -t /shared/temp

# Use case: Shared directories where only
# the file owner can delete their files
# Perfect for temporary directories

# Example: Create shared directory
sudo mkdir /shared/dropbox
sudo chmod 1777 /shared/dropbox
# Now anyone can create files, but only
# the owner of each file can delete it`,
        language: "bash"
      },
      {
        title: "Finding Special Permission Files",
        code: `# Find all SUID files
find / -perm -4000 -type f -ls 2>/dev/null

# Find all SGID files
find / -perm -2000 -type f -ls 2>/dev/null

# Find sticky bit directories
find / -perm -1000 -type d -ls 2>/dev/null

# Find files with any special permissions
find / -perm /7000 -type f -ls 2>/dev/null

# Security audit: Check for unusual SUID files
find / -perm -4000 -user root -type f 2>/dev/null`,
        language: "bash"
      }
    ],
    keyPoints: [
      "Hidden files start with a dot (.)",
      "SUID can be a security risk if misconfigured",
      "SGID on directories helps with shared project directories",
      "Sticky bit prevents users from deleting others' files",
      "Regularly audit special permissions for security"
    ]
  },

  "Mounting and Unmounting File Systems": {
    title: "Mounting and Unmounting File Systems",
    content: `In Linux, all storage devices must be mounted to a directory (mount point) before they can be accessed. Understanding mounting is essential for managing disks, USB drives, and network shares.

**Key Concepts:**
- **Mount point**: Directory where filesystem is attached
- **/etc/fstab**: Configuration file for automatic mounting
- **Device naming**: /dev/sda1, /dev/nvme0n1p1, etc.`,
    codeExamples: [
      {
        title: "Basic Mount Operations",
        code: `# List all mounted filesystems
mount
df -h  # Show disk space and mount points
findmnt  # Tree view of mount points

# Mount a device
sudo mount /dev/sdb1 /mnt/usb

# Mount with specific filesystem type
sudo mount -t ext4 /dev/sdb1 /mnt/disk
sudo mount -t ntfs /dev/sdb1 /mnt/windows

# Mount read-only
sudo mount -o ro /dev/sdb1 /mnt/disk

# Unmount a filesystem
sudo umount /mnt/usb
sudo umount /dev/sdb1

# Force unmount (use carefully!)
sudo umount -f /mnt/stuck
sudo umount -l /mnt/busy  # Lazy unmount`,
        language: "bash"
      },
      {
        title: "USB and External Drives",
        code: `# List block devices
lsblk
lsblk -f  # Show filesystem types

# Identify the new device (often /dev/sdb or /dev/sdc)
sudo fdisk -l

# Create mount point
sudo mkdir -p /mnt/usb

# Mount USB drive
sudo mount /dev/sdb1 /mnt/usb

# Mount with specific permissions
sudo mount -o uid=1000,gid=1000 /dev/sdb1 /mnt/usb

# Check mounted filesystem
df -h /mnt/usb

# Safely unmount before removing
sudo umount /mnt/usb

# Check if device is in use
lsof /mnt/usb
fuser -m /mnt/usb`,
        language: "bash"
      },
      {
        title: "/etc/fstab - Automatic Mounting",
        code: `# View current fstab
cat /etc/fstab

# fstab format:
# <device>  <mount point>  <type>  <options>  <dump>  <pass>

# Example fstab entries:
UUID=xxx-xxx  /              ext4    defaults    0  1
UUID=yyy-yyy  /home          ext4    defaults    0  2
/dev/sdb1     /mnt/backup    ext4    defaults    0  2
//server/share /mnt/smb      cifs    credentials=/root/.smbcreds  0  0

# Get UUID of device
sudo blkid /dev/sdb1

# Add entry to fstab (edit carefully!)
sudo nano /etc/fstab

# Example: Mount external drive at boot
UUID=xxxx-xxxx  /mnt/storage  ext4  defaults,nofail  0  2

# Test fstab without rebooting
sudo mount -a

# Options explained:
# defaults: rw, suid, dev, exec, auto, nouser, async
# nofail: Boot continues if device not present
# noatime: Don't update access time (performance)`,
        language: "bash"
      },
      {
        title: "Network Shares (NFS & CIFS/SMB)",
        code: `# Mount NFS share
sudo mount -t nfs server:/share /mnt/nfs
sudo mount 192.168.1.100:/exports/data /mnt/data

# Mount Windows/SMB share
sudo mount -t cifs //server/share /mnt/smb -o username=user,password=pass

# Better: Use credentials file for SMB
echo "username=user" | sudo tee /root/.smbcreds
echo "password=pass" | sudo tee -a /root/.smbcreds
sudo chmod 600 /root/.smbcreds
sudo mount -t cifs //server/share /mnt/smb -o credentials=/root/.smbcreds

# Auto-mount NFS in fstab
server:/share  /mnt/nfs  nfs  defaults,_netdev  0  0

# Auto-mount CIFS in fstab
//server/share  /mnt/smb  cifs  credentials=/root/.smbcreds,_netdev  0  0`,
        language: "bash"
      }
    ],
    keyPoints: [
      "Always unmount before removing external drives",
      "Use /etc/fstab for automatic mounting at boot",
      "nofail option prevents boot failures",
      "Check if files are in use before unmounting",
      "Use UUIDs in fstab for consistent device naming"
    ]
  },

  "User Groups and Permissions": {
    title: "User Groups and Permissions",
    content: `Groups provide a way to organize users and manage permissions efficiently. Understanding group management is essential for multi-user systems and shared resources.

**Key Concepts:**
- Users can belong to multiple groups
- Primary group: User's default group
- Secondary groups: Additional groups
- /etc/group: Stores group information`,
    codeExamples: [
      {
        title: "Group Management Commands",
        code: `# Create new group
sudo groupadd developers
sudo groupadd -g 1500 devops  # Specify GID

# View all groups
cat /etc/group

# View user's groups
groups username
id username

# Add user to group
sudo usermod -aG developers john
sudo gpasswd -a john developers  # Alternative

# Remove user from group
sudo gpasswd -d john developers

# Change user's primary group
sudo usermod -g developers john

# Delete group
sudo groupdel oldgroup

# Modify group name
sudo groupmod -n newname oldname`,
        language: "bash"
      },
      {
        title: "Working with Group Permissions",
        code: `# Create shared directory for team
sudo mkdir /shared/projects
sudo chgrp developers /shared/projects
sudo chmod 2775 /shared/projects  # SGID + group write

# All new files will inherit the group
cd /shared/projects
touch newfile.txt
ls -l newfile.txt  # Shows 'developers' group

# Set default permissions with umask
umask 002  # New files: 664, dirs: 775

# Change file group ownership
sudo chgrp developers project.tar.gz
sudo chown :developers file.txt  # Alternative syntax

# Recursive group change
sudo chgrp -R developers /var/www/html/`,
        language: "bash"
      },
      {
        title: "Access Control Lists (ACL)",
        code: `# View ACL permissions
getfacl filename

# Give specific user read/write access
setfacl -m u:john:rw file.txt

# Give specific group read access
setfacl -m g:developers:r file.txt

# Set default ACL for directory
setfacl -d -m g:developers:rwx /shared/projects/

# Remove ACL entry
setfacl -x u:john file.txt

# Remove all ACL entries
setfacl -b file.txt

# Copy ACL from one file to another
getfacl file1.txt | setfacl --set-file=- file2.txt`,
        language: "bash"
      }
    ],
    keyPoints: [
      "Use groups to manage permissions for multiple users",
      "SGID on directories ensures new files inherit group",
      "ACLs provide fine-grained permission control",
      "Users must log out/in for group changes to take effect",
      "Primary group is used for new files by default"
    ]
  },

  "Switching Users and Sudo Privileges": {
    title: "Switching Users and Sudo Privileges",
    content: `Linux allows users to switch between accounts and execute commands with elevated privileges. Understanding su and sudo is critical for system administration and security.

**Key Tools:**
- **su**: Switch user account
- **sudo**: Execute command as another user (typically root)
- **/etc/sudoers**: Configuration file for sudo`,
    codeExamples: [
      {
        title: "Switching Users (su)",
        code: `# Switch to root
su -
su - root

# Switch to another user
su - username

# Execute command as another user
su - username -c "whoami"

# Switch without loading environment
su username  # Not recommended

# Return to previous user
exit

# Check current user
whoami
id`,
        language: "bash"
      },
      {
        title: "Using Sudo",
        code: `# Execute command as root
sudo apt update
sudo systemctl restart nginx

# Execute command as specific user
sudo -u postgres psql
sudo -u www-data ls -la /var/www

# Switch to root shell
sudo -i
sudo -s

# Run previous command with sudo
sudo !!

# Edit file with sudo
sudo nano /etc/hosts
sudo vim /etc/ssh/sshd_config

# Check sudo privileges
sudo -l

# Sudo with environment preserved
sudo -E command`,
        language: "bash"
      },
      {
        title: "Configuring Sudo (/etc/sudoers)",
        code: `# NEVER edit sudoers directly!
# Always use visudo for safety
sudo visudo

# Basic sudoers syntax:
# user  host=(run_as) command

# Allow user to run all commands
john ALL=(ALL:ALL) ALL

# Allow user without password
jane ALL=(ALL) NOPASSWD: ALL

# Allow specific commands only
bob ALL=(ALL) NOPASSWD: /usr/bin/systemctl, /usr/bin/apt

# Allow group to use sudo
%sudo ALL=(ALL:ALL) ALL
%developers ALL=(ALL) /usr/bin/docker

# Command aliases
Cmnd_Alias WEBSERVERS = /usr/bin/systemctl restart nginx, /usr/bin/systemctl restart apache2
john ALL=(ALL) NOPASSWD: WEBSERVERS

# Disable root password prompt timeout
Defaults timestamp_timeout=0  # Always ask
Defaults timestamp_timeout=60  # 60 minutes

# Require password for every command
Defaults timestamp_type=global`,
        language: "bash"
      },
      {
        title: "Sudo Best Practices",
        code: `# View sudo log
sudo cat /var/log/auth.log | grep sudo

# Clear sudo cached credentials
sudo -k

# Validate sudoers file
sudo visudo -c

# Add user to sudo group (Ubuntu/Debian)
sudo usermod -aG sudo username

# Add user to wheel group (RHEL/CentOS)
sudo usermod -aG wheel username

# Test sudo access
sudo -v  # Refresh sudo timeout

# Run command in background with sudo
sudo -b command &`,
        language: "bash"
      }
    ],
    keyPoints: [
      "Never login as root; use sudo instead",
      "Always use visudo to edit /etc/sudoers",
      "Limit sudo access to necessary commands only",
      "Regular users should not have NOPASSWD for all commands",
      "Monitor sudo usage through logs"
    ]
  },

  "Password Policies and Security": {
    title: "Password Policies and Security",
    content: `Strong password policies are essential for system security. Linux provides various tools to enforce password complexity, expiration, and account security.

**Security Components:**
- **PAM (Pluggable Authentication Modules)**: Authentication framework
- **Password aging**: Enforce password expiration
- **Password complexity**: Minimum requirements
- **Account locking**: Prevent brute force attacks`,
    codeExamples: [
      {
        title: "Password Management",
        code: `# Change your own password
passwd

# Change another user's password (as root)
sudo passwd username

# Force user to change password on next login
sudo passwd -e username
sudo chage -d 0 username

# Lock user account
sudo passwd -l username
sudo usermod -L username

# Unlock user account
sudo passwd -u username
sudo usermod -U username

# Check password status
sudo passwd -S username

# Delete user password (dangerous!)
sudo passwd -d username`,
        language: "bash"
      },
      {
        title: "Password Aging Policies",
        code: `# View password aging info
sudo chage -l username

# Set password expiration (90 days)
sudo chage -M 90 username

# Set minimum days between password changes
sudo chage -m 7 username

# Set warning before expiration (14 days)
sudo chage -W 14 username

# Set account expiration date
sudo chage -E 2024-12-31 username

# Never expire password
sudo chage -M 99999 username

# Interactive password aging setup
sudo chage username

# Default aging for new users
sudo vim /etc/login.defs
# PASS_MAX_DAYS   90
# PASS_MIN_DAYS   7
# PASS_WARN_AGE   14`,
        language: "bash"
      },
      {
        title: "Password Complexity (PAM)",
        code: `# Configure password complexity (Ubuntu/Debian)
sudo apt install libpam-pwquality
sudo vim /etc/security/pwquality.conf

# Example password requirements:
minlen = 12           # Minimum length
dcredit = -1          # At least 1 digit
ucredit = -1          # At least 1 uppercase
lcredit = -1          # At least 1 lowercase
ocredit = -1          # At least 1 special char
maxrepeat = 3         # Max repeated characters
difok = 3             # Min different chars from old password
reject_username       # Reject passwords containing username

# RHEL/CentOS configuration
sudo vim /etc/security/pwquality.conf
sudo authconfig --passminlen=12 --update

# Test password complexity
pwscore
# Enter test password to see score`,
        language: "bash"
      },
      {
        title: "Account Security",
        code: `# Configure failed login attempts
sudo vim /etc/pam.d/common-auth  # Ubuntu
sudo vim /etc/pam.d/system-auth  # RHEL

# Add line:
auth required pam_tally2.so deny=5 unlock_time=1800

# Check failed login attempts
sudo pam_tally2 --user=username

# Reset failed login counter
sudo pam_tally2 --user=username --reset

# View failed login attempts
sudo cat /var/log/auth.log | grep "Failed password"
sudo lastb  # Show bad login attempts

# Set session timeout
echo "TMOUT=600" >> ~/.bashrc  # 10 minutes

# Disable unused accounts
sudo usermod -L -e 1 olduser`,
        language: "bash"
      }
    ],
    keyPoints: [
      "Enforce minimum password length of 12+ characters",
      "Require password complexity (uppercase, numbers, symbols)",
      "Implement password expiration (60-90 days)",
      "Lock accounts after failed login attempts",
      "Monitor authentication logs regularly"
    ]
  },

  "Understanding Processes and Daemons": {
    title: "Understanding Processes and Daemons",
    content: `A process is a running instance of a program. Understanding process management is crucial for system monitoring, troubleshooting, and resource optimization.

**Process Types:**
- **Foreground**: Interactive processes
- **Background**: Non-interactive processes
- **Daemon**: Background services (systemd, nginx, sshd)
- **Zombie**: Terminated but not cleaned up
- **Orphan**: Parent process terminated`,
    codeExamples: [
      {
        title: "Process Basics",
        code: `# View your processes
ps
ps -u username

# View all processes
ps aux
ps -ef

# Process hierarchy (tree view)
pstree
ps auxf

# View specific process
ps -p 1234
ps aux | grep nginx

# Process information
# PID: Process ID
# PPID: Parent Process ID
# %CPU: CPU usage
# %MEM: Memory usage
# VSZ: Virtual memory size
# RSS: Physical memory size
# TTY: Terminal
# STAT: Process state
# TIME: CPU time
# COMMAND: Command name`,
        language: "bash"
      },
      {
        title: "Process States",
        code: `# Common process states (STAT column)
# R - Running or runnable
# S - Sleeping (waiting for event)
# D - Uninterruptible sleep (I/O)
# Z - Zombie (terminated, waiting for parent)
# T - Stopped (Ctrl+Z or SIGSTOP)
# < - High priority
# N - Low priority
# + - Foreground process group
# s - Session leader

# View running processes only
ps aux | grep " R "

# View zombie processes
ps aux | grep " Z "
ps aux | awk '$8=="Z"'

# View process by state
ps -eo pid,ppid,stat,cmd | grep "^S"`,
        language: "bash"
      },
      {
        title: "Understanding Daemons",
        code: `# List all running services (systemd)
systemctl list-units --type=service --state=running

# View daemon status
systemctl status nginx
systemctl status sshd

# Traditional daemon naming
# Usually end with 'd': httpd, sshd, crond, systemd

# Check if process is a daemon
ps aux | grep -E "systemd|nginx|ssh|cron"

# Daemons typically:
# - Run in background
# - No controlling terminal (? in TTY column)
# - PPID often 1 (systemd)
# - Started at boot time

# View daemon process tree
pstree -p | grep systemd`,
        language: "bash"
      },
      {
        title: "Process Information Files (/proc)",
        code: `# Process information in /proc filesystem
ls /proc/1234/  # Replace 1234 with actual PID

# View process command line
cat /proc/1234/cmdline

# View process environment
cat /proc/1234/environ

# View process status
cat /proc/1234/status

# View process memory maps
cat /proc/1234/maps

# View open files
ls -l /proc/1234/fd/

# View current working directory
ls -l /proc/1234/cwd

# Overall system info
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/version`,
        language: "bash"
      }
    ],
    keyPoints: [
      "Every process has a unique PID",
      "Daemons are background services that run continuously",
      "Zombie processes indicate improper child process cleanup",
      "Process state 'D' indicates I/O wait (usually temporary)",
      "/proc filesystem provides detailed process information"
    ]
  },

  "Foreground, Background, and Kill Commands": {
    title: "Foreground, Background, and Kill Commands",
    content: `Linux allows you to control process execution - running them in foreground or background, suspending them, and terminating them when needed.

**Job Control:**
- **Foreground**: Process runs interactively in terminal
- **Background**: Process runs without terminal interaction
- **Signals**: Communication mechanism for processes`,
    codeExamples: [
      {
        title: "Background and Foreground",
        code: `# Run command in background (append &)
sleep 100 &
firefox &
./long-running-script.sh &

# View background jobs
jobs
jobs -l  # With PID

# Bring job to foreground
fg
fg %1  # Bring job 1 to foreground
fg %firefox  # By command name

# Send current process to background
# Press Ctrl+Z (suspends)
# Then type:
bg  # Resume in background
bg %1  # Resume job 1 in background

# Start process in background using nohup
# (continues after logout)
nohup ./script.sh &
nohup python app.py > output.log 2>&1 &

# Disown job (detach from shell)
./script.sh &
disown
disown %1`,
        language: "bash"
      },
      {
        title: "Kill Commands and Signals",
        code: `# Terminate process by PID
kill 1234
kill -15 1234  # SIGTERM (graceful)
kill -9 1234   # SIGKILL (force)

# Terminate by name
killall firefox
killall -9 chrome

# Terminate using pattern
pkill firefox
pkill -9 -u username  # Kill all processes of user

# Common signals:
kill -l  # List all signals

# Most used signals:
kill -1 PID   # SIGHUP  - Reload configuration
kill -2 PID   # SIGINT  - Interrupt (Ctrl+C)
kill -9 PID   # SIGKILL - Force kill (cannot be caught)
kill -15 PID  # SIGTERM - Terminate gracefully (default)
kill -18 PID  # SIGCONT - Continue if stopped
kill -19 PID  # SIGSTOP - Stop (cannot be caught)

# Terminate parent and all children
pkill -P 1234  # Kill children of PID 1234`,
        language: "bash"
      },
      {
        title: "Advanced Process Control",
        code: `# Find and kill process by name
ps aux | grep firefox | awk '{print $2}' | xargs kill

# Kill all processes of a user
sudo pkill -u username
sudo killall -u username

# Kill process using port
# Find process using port 8080
sudo lsof -ti:8080 | xargs kill -9
sudo fuser -k 8080/tcp

# Interactive process termination
top
# Press 'k' then enter PID

# Kill process and all children
kill -TERM -$$  # Kill current shell session

# Trap signals in scripts
trap "echo 'Script interrupted'; exit" SIGINT SIGTERM

# Ignore hangup signal
nohup command &
# or
command &
disown`,
        language: "bash"
      }
    ],
    keyPoints: [
      "Ctrl+Z suspends process, bg resumes in background",
      "Always try SIGTERM (15) before SIGKILL (9)",
      "SIGKILL cannot be caught or ignored by process",
      "Use nohup for processes that should survive logout",
      "killall and pkill can kill multiple processes at once"
    ]
  },

  "Monitoring with ps, top, htop, vmstat": {
    title: "Monitoring with ps, top, htop, vmstat",
    content: `System monitoring tools help you understand resource usage, identify bottlenecks, and troubleshoot performance issues. These tools are essential for maintaining healthy Linux systems.

**Key Monitoring Tools:**
- **ps**: Snapshot of processes
- **top**: Real-time process monitoring
- **htop**: Enhanced top with better UI
- **vmstat**: Virtual memory statistics
- **iostat**: I/O statistics`,
    codeExamples: [
      {
        title: "ps - Process Snapshot",
        code: `# Basic ps commands
ps aux  # All processes, BSD style
ps -ef  # All processes, Unix style

# Most useful ps options
ps aux --sort=-%cpu | head  # Top CPU consumers
ps aux --sort=-%mem | head  # Top memory consumers

# Custom format
ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%cpu | head

# Find specific process
ps aux | grep nginx
pgrep -a nginx

# Process tree
ps auxf
ps -ef --forest

# Threads
ps -eLf  # Show threads
ps -T -p 1234  # Threads for specific PID`,
        language: "bash"
      },
      {
        title: "top - Real-time Monitoring",
        code: `# Start top
top

# Top keyboard shortcuts:
h       # Help
q       # Quit
k       # Kill process (enter PID)
r       # Renice process
P       # Sort by CPU usage
M       # Sort by memory usage
T       # Sort by running time
c       # Show full command path
u       # Filter by user
1       # Show individual CPUs
f       # Field management

# Top with options
top -d 5  # Update every 5 seconds
top -n 3  # Run 3 iterations then exit
top -u username  # Show user's processes only
top -b -n 1 > top-output.txt  # Batch mode

# Understanding top display:
# load average: 1-min, 5-min, 15-min averages
# us: user CPU time
# sy: system CPU time
# ni: nice CPU time
# id: idle time
# wa: I/O wait time
# hi: hardware interrupts
# si: software interrupts`,
        language: "bash"
      },
      {
        title: "htop - Enhanced Monitoring",
        code: `# Install htop
sudo apt install htop  # Debian/Ubuntu
sudo dnf install htop  # RHEL/Fedora

# Run htop
htop

# htop features:
# - Color-coded display
# - Mouse support
# - Horizontal/vertical scrolling
# - Tree view (F5)
# - Process filtering (F4)
# - Sorting options (F6)
# - Process search (F3)

# htop keyboard shortcuts:
F1  # Help
F2  # Setup
F3  # Search process
F4  # Filter processes
F5  # Tree view
F6  # Sort by column
F9  # Kill process
F10 # Quit
Space # Tag process
U   # Show only user's processes
K   # Hide kernel threads
H   # Hide/show threads`,
        language: "bash"
      },
      {
        title: "vmstat, iostat, and More",
        code: `# vmstat - Virtual memory statistics
vmstat 1  # Update every 1 second
vmstat 2 10  # Every 2 sec, 10 times

# vmstat columns:
# r: runnable processes
# b: blocked processes
# swpd: virtual memory used
# free: idle memory
# si: swap in
# so: swap out
# bi: blocks received from disk
# bo: blocks sent to disk

# iostat - I/O statistics
sudo apt install sysstat  # Install first
iostat 2  # Update every 2 seconds
iostat -x  # Extended statistics

# free - Memory usage
free -h  # Human readable
free -m  # In megabytes
free -s 2  # Update every 2 seconds

# uptime - System uptime and load
uptime
w  # Who is logged in + load

# mpstat - CPU statistics
mpstat 1  # Per-processor statistics
mpstat -P ALL 1  # All CPUs

# sar - System activity report
sar -u 1 10  # CPU usage, 1 sec, 10 times
sar -r 1 10  # Memory usage
sar -n DEV 1 10  # Network statistics`,
        language: "bash"
      }
    ],
    keyPoints: [
      "top shows real-time view, ps shows snapshot",
      "htop provides better UX than top",
      "Load average > CPU count indicates system strain",
      "High 'wa' in top indicates I/O bottleneck",
      "vmstat is excellent for analyzing memory pressure"
    ]
  },

  "Scheduling with cron and at Jobs": {
    title: "Scheduling with cron and at Jobs",
    content: `Task scheduling allows you to automate repetitive tasks. Linux provides cron for recurring tasks and at for one-time scheduled tasks.

**Scheduling Tools:**
- **cron**: Recurring scheduled tasks
- **at**: One-time scheduled tasks
- **anacron**: Runs missed jobs (for systems not always on)
- **systemd timers**: Modern alternative to cron`,
    codeExamples: [
      {
        title: "Cron Basics",
        code: `# Edit your crontab
crontab -e

# View your crontab
crontab -l

# Remove your crontab
crontab -r

# Edit another user's crontab (as root)
sudo crontab -e -u username

# System-wide crontab
sudo vim /etc/crontab

# Crontab syntax:
# * * * * * command
# │ │ │ │ │
# │ │ │ │ └─── Day of week (0-7, 0 and 7 = Sunday)
# │ │ │ └───── Month (1-12)
# │ │ └─────── Day of month (1-31)
# │ └───────── Hour (0-23)
# └─────────── Minute (0-59)

# Special strings:
@reboot    # Run at startup
@yearly    # Run once a year (0 0 1 1 *)
@annually  # Same as @yearly
@monthly   # Run once a month (0 0 1 * *)
@weekly    # Run once a week (0 0 * * 0)
@daily     # Run once a day (0 0 * * *)
@hourly    # Run once an hour (0 * * * *)`,
        language: "bash"
      },
      {
        title: "Cron Examples",
        code: `# Every minute
* * * * * /path/to/script.sh

# Every hour at minute 0
0 * * * * /path/to/script.sh

# Every day at 2:30 AM
30 2 * * * /path/to/backup.sh

# Every Monday at 9 AM
0 9 * * 1 /path/to/weekly-report.sh

# First day of every month at midnight
0 0 1 * * /path/to/monthly-cleanup.sh

# Every 15 minutes
*/15 * * * * /path/to/monitor.sh

# Every 6 hours
0 */6 * * * /path/to/sync.sh

# Monday to Friday at 6 PM
0 18 * * 1-5 /path/to/weekday-task.sh

# Multiple times: 8 AM, 12 PM, 6 PM
0 8,12,18 * * * /path/to/task.sh

# Working hours (9-5), every hour
0 9-17 * * * /path/to/task.sh

# Redirect output
0 2 * * * /path/to/backup.sh >> /var/log/backup.log 2>&1

# With environment variables
0 3 * * * export PATH=/usr/bin; /path/to/script.sh`,
        language: "bash"
      },
      {
        title: "At Commands - One-time Tasks",
        code: `# Install at
sudo apt install at  # Debian/Ubuntu
sudo dnf install at  # RHEL/Fedora
sudo systemctl enable --now atd

# Schedule task at specific time
echo "/path/to/script.sh" | at 14:30
echo "reboot" | sudo at 02:00

# Schedule with different time formats
at 2:30 PM
at now + 1 hour
at now + 30 minutes
at midnight
at noon
at tomorrow
at next week
at 10:00 PM tomorrow
at 09:00 AM Jul 31

# Interactive at
at 15:30
> /path/to/script.sh
> /another/command
> <Press Ctrl+D to save>

# View pending jobs
atq
at -l

# View specific job details
at -c 1  # Replace 1 with job number

# Remove scheduled job
atrm 1  # Replace 1 with job number
at -r 1  # Alternative`,
        language: "bash"
      },
      {
        title: "Systemd Timers",
        code: `# List all timers
systemctl list-timers --all

# Create timer unit
sudo vim /etc/systemd/system/backup.timer

[Unit]
Description=Daily Backup Timer

[Timer]
OnCalendar=daily
OnCalendar=*-*-* 02:00:00
Persistent=true

[Install]
WantedBy=timers.target

# Create corresponding service
sudo vim /etc/systemd/system/backup.service

[Unit]
Description=Backup Service

[Service]
Type=oneshot
ExecStart=/usr/local/bin/backup.sh

# Enable and start timer
sudo systemctl daemon-reload
sudo systemctl enable backup.timer
sudo systemctl start backup.timer

# Check timer status
systemctl status backup.timer
systemctl list-timers backup.timer`,
        language: "bash"
      }
    ],
    keyPoints: [
      "Cron is for recurring tasks, at is for one-time tasks",
      "Always use absolute paths in cron jobs",
      "Redirect output to logs for troubleshooting",
      "Test scripts manually before scheduling",
      "Systemd timers are more flexible than cron"
    ]
  }
};
