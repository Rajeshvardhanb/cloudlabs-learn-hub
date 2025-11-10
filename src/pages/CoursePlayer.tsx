import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, PlayCircle, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { toast } from "sonner";

const courseModules = [
  {
    title: "Module 1: Introduction to DevSecOps",
    lessons: [
      { id: 1, title: "Understanding DevSecOps Culture", duration: "12:30", completed: true },
      { id: 2, title: "Security in the Software Development Lifecycle", duration: "15:45", completed: true },
      { id: 3, title: "DevSecOps Tools Overview", duration: "18:20", completed: false },
      { id: 4, title: "Setting Up Your Lab Environment", duration: "22:15", completed: false },
    ],
  },
  {
    title: "Module 2: Secure CI/CD Pipelines",
    lessons: [
      { id: 5, title: "Pipeline Security Fundamentals", duration: "16:40", completed: false },
      { id: 6, title: "Integrating Security Scanning", duration: "19:30", completed: false },
      { id: 7, title: "Secret Management in Pipelines", duration: "14:25", completed: false },
      { id: 8, title: "Automated Security Testing", duration: "21:10", completed: false },
    ],
  },
];

const CoursePlayer = () => {
  const { id } = useParams();
  const [currentLesson, setCurrentLesson] = useState(3);
  const [notes, setNotes] = useState("");
  const user = { name: "Rajesh" };

  const handleMarkComplete = () => {
    toast.success("Lesson marked as complete!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header user={user} />

      <div className="flex-1 flex">
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Video Player */}
          <div className="bg-accent aspect-video w-full flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="h-20 w-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <PlayCircle className="h-10 w-10 text-primary" />
              </div>
              <p className="text-muted-foreground">
                Video Player Placeholder
                <br />
                <span className="text-sm">(YouTube unlisted video would be embedded here)</span>
              </p>
            </div>
          </div>

          {/* Lesson Info & Tabs */}
          <div className="p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-heading font-bold mb-2">
                  DevSecOps Tools Overview
                </h1>
                <p className="text-sm text-muted-foreground">
                  Module 1 • Lesson 3 • 18:20
                </p>
              </div>
              <Button onClick={handleMarkComplete}>
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Mark Complete
              </Button>
            </div>

            <Tabs defaultValue="notes" className="w-full">
              <TabsList>
                <TabsTrigger value="notes">Notes</TabsTrigger>
                <TabsTrigger value="qa">Q&A</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>

              <TabsContent value="notes" className="space-y-4">
                <Textarea
                  placeholder="Take notes while watching..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="min-h-[200px]"
                />
                <Button size="sm">Save Notes</Button>
              </TabsContent>

              <TabsContent value="qa" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground text-center py-8">
                      No questions yet. Be the first to ask!
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources" className="space-y-4">
                <Card>
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <FileText className="h-8 w-8 text-primary" />
                      <div>
                        <p className="font-semibold">Lesson Slides</p>
                        <p className="text-sm text-muted-foreground">PDF Document</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Navigation */}
            <div className="flex justify-between pt-4">
              <Button variant="outline">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous Lesson
              </Button>
              <Button>
                Next Lesson
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Lesson List Sidebar */}
        <aside className="w-80 border-l bg-card overflow-y-auto hidden lg:block">
          <div className="p-4 border-b">
            <h2 className="font-heading font-bold">Course Content</h2>
          </div>
          <Accordion type="single" collapsible defaultValue="module-0" className="px-2">
            {courseModules.map((module, moduleIndex) => (
              <AccordionItem key={moduleIndex} value={`module-${moduleIndex}`}>
                <AccordionTrigger className="text-sm font-semibold px-2">
                  {module.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-1">
                    {module.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => setCurrentLesson(lesson.id)}
                        className={`w-full flex items-start gap-3 p-3 rounded-lg text-left transition-colors ${
                          currentLesson === lesson.id
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-muted"
                        }`}
                      >
                        {lesson.completed ? (
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        ) : (
                          <PlayCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium line-clamp-2">{lesson.title}</p>
                          <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </aside>
      </div>
    </div>
  );
};

export default CoursePlayer;
