import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail } from "lucide-react";
import Header from "@/components/Header";
import AnimatedPage from "@/components/AnimatedPage";

const instructors = [
  {
    name: "Krishna R",
    role: "Cloud Security Engineer",
    bio: "Expert in DevSecOps with 8+ years of experience in infrastructure security and compliance automation. Passionate about secure cloud architectures.",
    courses: ["DevSecOps Masterclass", "Kubernetes Security", "AWS Security Fundamentals"],
    specialties: ["DevSecOps", "Cloud Security", "Kubernetes"],
  },
  {
    name: "Ananya S",
    role: "AWS Solutions Architect",
    bio: "AWS certified professional with extensive experience designing and implementing scalable cloud solutions for enterprise clients.",
    courses: ["AWS Certified Solutions Architect", "AWS Advanced Networking", "Cloud Cost Optimization"],
    specialties: ["AWS", "Cloud Architecture", "Cost Optimization"],
  },
  {
    name: "Priya M",
    role: "DevOps Automation Specialist",
    bio: "Infrastructure automation expert specializing in Terraform, Ansible, and CI/CD pipeline optimization for cloud-native applications.",
    courses: ["Terraform Infrastructure", "Ansible Automation", "Jenkins CI/CD"],
    specialties: ["Terraform", "Ansible", "CI/CD"],
  },
  {
    name: "Rahul K",
    role: "Container & Orchestration Expert",
    bio: "Kubernetes and Docker specialist with deep expertise in containerization, microservices architecture, and cloud-native development.",
    courses: ["Docker Essentials", "Kubernetes Fundamentals", "Microservices Architecture"],
    specialties: ["Docker", "Kubernetes", "Microservices"],
  },
];

const Instructors = () => {
  return (
    <AnimatedPage>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container p-6 space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">Our Instructors</h1>
            <p className="text-muted-foreground">
              Learn from industry experts with real-world experience in cloud and security
            </p>
          </div>

          {/* Instructors Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {instructors.map((instructor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-hover transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-20 w-20 rounded-full bg-gradient-primary flex items-center justify-center text-3xl font-bold text-white flex-shrink-0">
                      {instructor.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-heading font-bold">{instructor.name}</h3>
                      <p className="text-sm text-primary font-medium mb-2">{instructor.role}</p>
                      <div className="flex gap-2">
                        <a
                          href="#"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                        <a
                          href="#"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">{instructor.bio}</p>

                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">SPECIALTIES</p>
                    <div className="flex flex-wrap gap-2">
                      {instructor.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">COURSES TAUGHT</p>
                    <ul className="space-y-1">
                      {instructor.courses.map((course, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Instructors;
