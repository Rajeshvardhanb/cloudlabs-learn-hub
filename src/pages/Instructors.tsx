import AnimatedPage from "@/components/AnimatedPage";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail } from "lucide-react";

// Enhanced instructor data based on the design
const instructors = [
  {
    name: "Krishna R",
    title: "Cloud Security Engineer",
    avatar: "KR",
    bio: "Expert in DevSecOps with 8+ years of experience in infrastructure security and compliance automation. Passionate about secure cloud architectures.",
    specialties: ["DevSecOps", "Cloud Security", "Kubernetes"],
    coursesTaught: ["DevSecOps Masterclass", "Kubernetes Security", "AWS Security Fundamentals"],
  },
  {
    name: "Ananya S",
    title: "AWS Solutions Architect",
    avatar: "AS",
    bio: "AWS certified professional with extensive experience designing and implementing scalable cloud solutions for enterprise clients.",
    specialties: ["AWS", "Cloud Architecture", "Cost Optimization"],
    coursesTaught: ["AWS Certified Solutions Architect", "AWS Advanced Networking", "Cloud Cost Optimization"],
  },
  {
    name: "Priya M",
    title: "DevOps Automation Specialist",
    avatar: "PM",
    bio: "Infrastructure automation expert specializing in Terraform, Ansible, and CI/CD pipeline optimization for cloud-native applications.",
    specialties: ["Terraform", "Ansible", "CI/CD"],
    coursesTaught: ["Terraform Infrastructure", "Ansible Automation", "Jenkins CI/CD"],
  },
  {
    name: "Rahul K",
    title: "Container & Orchestration Expert",
    avatar: "RK",
    bio: "Kubernetes and Docker specialist with deep expertise in containerization, microservices architecture, and cloud-native development.",
    specialties: ["Docker", "Kubernetes", "Microservices"],
    coursesTaught: ["Docker Essentials", "Kubernetes Fundamentals", "Microservices Architecture"],
  },
];

const Instructors = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Our Instructors</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Learn from industry experts with real-world experience in cloud and security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {instructors.map((instructor, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-5 mb-4">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 text-white flex items-center justify-center text-3xl font-bold">
                    {instructor.avatar}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{instructor.name}</h2>
                    <p className="text-blue-500 font-medium">{instructor.title}</p>
                    <div className="flex items-center gap-3 mt-2 text-gray-500">
                        <Linkedin className="h-5 w-5 hover:text-blue-700 cursor-pointer" />
                        <Mail className="h-5 w-5 hover:text-blue-700 cursor-pointer" />
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-5">{instructor.bio}</p>

                <div className="mb-5">
                    <h4 className="font-semibold text-sm uppercase text-gray-500 mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                        {instructor.specialties.map(spec => <Badge key={spec} variant="secondary" className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200">{spec}</Badge>)}
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold text-sm uppercase text-gray-500 mb-3">Courses Taught</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {instructor.coursesTaught.map(course => <li key={course} className="hover:text-foreground">{course}</li>)}
                    </ul>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Instructors;
