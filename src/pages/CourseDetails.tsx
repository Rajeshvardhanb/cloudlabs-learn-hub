import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Signal, PlayCircle, FileText, Github, User } from "lucide-react";
import { toast } from "sonner";

const courseData: Record<string, any> = {
  "devsecops-masterclass": {
    title: "DevSecOps Masterclass — Secure CI/CD",
    description: "Build secure continuous integration and deployment pipelines with industry-standard tools and practices.",
    duration: "35 hours",
    difficulty: "Intermediate",
    category: "DevSecOps",
    instructor: "Krishna R",
    instructorTitle: "Cloud Security Engineer",
    modules: [
      {
        title: "Module 1: Introduction to DevSecOps",
        lessons: [
          "Understanding DevSecOps Culture",
          "Security in the Software Development Lifecycle",
          "DevSecOps Tools Overview",
          "Setting Up Your Lab Environment",
        ],
      },
      {
        title: "Module 2: Secure CI/CD Pipelines",
        lessons: [
          "Pipeline Security Fundamentals",
          "Integrating Security Scanning",
          "Secret Management in Pipelines",
          "Automated Security Testing",
        ],
      },
      {
        title: "Module 3: Container Security",
        lessons: [
          "Docker Security Best Practices",
          "Image Scanning and Vulnerability Management",
          "Runtime Security Monitoring",
          "Kubernetes Security Hardening",
        ],
      },
      {
        title: "Module 4: Infrastructure Security",
        lessons: [
          "Infrastructure as Code Security",
          "Policy as Code with OPA",
          "Cloud Security Posture Management",
          "Compliance Automation",
        ],
      },
    ],
    resources: [
      { name: "DevSecOps Checklist", type: "pdf", url: "#" },
      { name: "Sample Security Policies", type: "github", url: "#" },
      { name: "Tool Configuration Files", type: "github", url: "#" },
    ],
  },
};

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = { name: "Rajesh" };

  const course = courseData[id || ""] || courseData["devsecops-masterclass"];

  const handleEnroll = () => {
    toast.success("Enrolled successfully! Starting your first lesson...");
    setTimeout(() => {
      navigate(`/player/${id}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        showMenu
        user={user}
      />

      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 lg:ml-64">
          {/* Hero Banner */}
          <div className="bg-gradient-hero border-b">
            <div className="container p-6 py-12 space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{course.category}</Badge>
                <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">
                  <Signal className="mr-1 h-3 w-3" />
                  {course.difficulty}
                </Badge>
              </div>

              <h1 className="text-4xl font-heading font-bold">{course.title}</h1>
              
              <p className="text-lg text-muted-foreground max-w-3xl">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{course.instructor}</span>
                </div>
              </div>

              <Button size="lg" onClick={handleEnroll} className="mt-4">
                <PlayCircle className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="container p-6">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="modules">Modules</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-heading font-bold mb-4">What You'll Learn</h2>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Build and secure complete CI/CD pipelines from scratch</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Implement automated security scanning and vulnerability management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Master container and Kubernetes security best practices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Apply infrastructure as code security principles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Automate compliance and security policy enforcement</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="modules">
                <Accordion type="single" collapsible className="space-y-2">
                  {course.modules.map((module: any, index: number) => (
                    <AccordionItem key={index} value={`module-${index}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline">
                        <span className="font-semibold">{module.title}</span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {module.lessons.map((lesson: string, lessonIndex: number) => (
                            <li key={lessonIndex} className="flex items-center gap-3 py-2">
                              <PlayCircle className="h-4 w-4 text-muted-foreground" />
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="resources" className="space-y-4">
                {course.resources.map((resource: any, index: number) => (
                  <Card key={index}>
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        {resource.type === "pdf" ? (
                          <FileText className="h-8 w-8 text-primary" />
                        ) : (
                          <Github className="h-8 w-8 text-primary" />
                        )}
                        <div>
                          <p className="font-semibold">{resource.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {resource.type === "pdf" ? "PDF Document" : "GitHub Repository"}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="instructor">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-20 w-20 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-white">
                        {course.instructor.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-bold">{course.instructor}</h3>
                        <p className="text-muted-foreground mb-4">{course.instructorTitle}</p>
                        <p className="text-sm">
                          Expert cloud security engineer with over 8 years of experience in DevSecOps,
                          infrastructure security, and compliance automation. Passionate about teaching
                          and helping organizations build secure cloud-native applications.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetails;
