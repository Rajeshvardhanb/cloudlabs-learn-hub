import { useEffect, useState } from "react";
import CourseCard from "@/components/CourseCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Award } from "lucide-react";

const activeCourses = [
  {
    id: "aws-foundations",
    title: "AWS Certified Solutions Architect — Foundations",
    description: "Master AWS core services and architectural best practices for cloud solutions.",
    duration: "40 hours",
    difficulty: "Beginner" as const,
    category: "AWS",
    progress: 65,
  },
  {
    id: "devsecops-masterclass",
    title: "DevSecOps Masterclass — Secure CI/CD",
    description: "Build secure continuous integration and deployment pipelines with industry tools.",
    duration: "35 hours",
    difficulty: "Intermediate" as const,
    category: "DevSecOps",
    progress: 42,
  },
];

const recommendedCourses = [
  {
    id: "terraform-infrastructure",
    title: "Terraform for Cloud Infrastructure",
    description: "Infrastructure as Code with Terraform for AWS, Azure, and GCP deployments.",
    duration: "30 hours",
    difficulty: "Intermediate" as const,
    category: "Terraform",
  },
  {
    id: "jenkins-automation",
    title: "Jenkins CI/CD Pipeline Automation",
    description: "Automate build, test, and deployment workflows with Jenkins.",
    duration: "25 hours",
    difficulty: "Intermediate" as const,
    category: "Jenkins",
  },
  {
    id: "kubernetes-security",
    title: "Kubernetes Security Best Practices",
    description: "Secure your containerized applications and orchestration platform.",
    duration: "28 hours",
    difficulty: "Advanced" as const,
    category: "Kubernetes",
  },
];

const Dashboard = () => {
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div className="container p-6 space-y-8">
      {/* Welcome Section */}
      <div className="rounded-2xl bg-gradient-hero p-8 shadow-card">
        <h1 className="text-3xl font-heading font-bold mb-2">
          Welcome back, {user?.name}! 👋
        </h1>
        <p className="text-muted-foreground">
          Continue your learning journey and unlock new cloud skills
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">In progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Learning Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34.5</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Certificates</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Earned</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Courses */}
      <section>
        <h2 className="text-2xl font-heading font-bold mb-4">Active Courses</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {activeCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>

      {/* Recommended Courses */}
      <section>
        <h2 className="text-2xl font-heading font-bold mb-4">Recommended for You</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recommendedCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
