import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const allCourses = [
  {
    id: "aws-foundations",
    title: "AWS Certified Solutions Architect — Foundations",
    description: "Master AWS core services and architectural best practices for building scalable cloud solutions.",
    duration: "40 hours",
    difficulty: "Beginner" as const,
    category: "AWS",
  },
  {
    id: "devsecops-masterclass",
    title: "DevSecOps Masterclass — Secure CI/CD",
    description: "Build secure continuous integration and deployment pipelines with industry-standard tools.",
    duration: "35 hours",
    difficulty: "Intermediate" as const,
    category: "DevSecOps",
  },
  {
    id: "terraform-infrastructure",
    title: "Terraform for Cloud Infrastructure",
    description: "Infrastructure as Code with Terraform for AWS, Azure, and GCP multi-cloud deployments.",
    duration: "30 hours",
    difficulty: "Intermediate" as const,
    category: "Terraform",
  },
  {
    id: "jenkins-automation",
    title: "Jenkins CI/CD Pipeline Automation",
    description: "Automate your build, test, and deployment workflows using Jenkins and pipeline as code.",
    duration: "25 hours",
    difficulty: "Intermediate" as const,
    category: "Jenkins",
  },
  {
    id: "kubernetes-security",
    title: "Kubernetes Security Best Practices",
    description: "Secure your containerized applications and Kubernetes orchestration platform comprehensively.",
    duration: "28 hours",
    difficulty: "Advanced" as const,
    category: "Kubernetes",
  },
  {
    id: "aws-security",
    title: "AWS Security Fundamentals",
    description: "Deep dive into AWS security services, IAM, encryption, and compliance frameworks.",
    duration: "32 hours",
    difficulty: "Intermediate" as const,
    category: "AWS",
  },
  {
    id: "docker-containers",
    title: "Docker Containerization Essentials",
    description: "Learn containerization with Docker from basics to advanced multi-stage builds and orchestration.",
    duration: "22 hours",
    difficulty: "Beginner" as const,
    category: "Docker",
  },
  {
    id: "ansible-automation",
    title: "Ansible Configuration Management",
    description: "Automate infrastructure configuration and application deployment with Ansible playbooks.",
    duration: "26 hours",
    difficulty: "Intermediate" as const,
    category: "Ansible",
  },
  {
    id: "cloud-cost-optimization",
    title: "Cloud Cost Optimization Strategies",
    description: "Learn to optimize cloud spending across AWS, Azure, and GCP with proven strategies.",
    duration: "18 hours",
    difficulty: "Advanced" as const,
    category: "AWS",
  },
];

const categories = ["All", "AWS", "DevSecOps", "Terraform", "Jenkins", "Kubernetes", "Docker", "Ansible"];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-heading font-bold mb-2">Course Catalog</h1>
        <p className="text-muted-foreground">
          Explore our comprehensive collection of cloud and security courses
        </p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search courses..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div>
        <p className="text-sm text-muted-foreground mb-4">
          Showing {filteredCourses.length} {filteredCourses.length === 1 ? "course" : "courses"}
        </p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No courses found matching your criteria.</p>
            <Button
              variant="link"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-2"
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
