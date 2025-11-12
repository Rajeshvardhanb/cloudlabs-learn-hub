import { useParams } from "react-router-dom";
import { courseData, Course, Module, Lesson } from "@/data/courseData";
import AnimatedPage from "@/components/AnimatedPage";
import { Button } from "@/components/ui/button";
import { Clock, User, CheckCircle, PlayCircle, ChevronDown, ChevronUp, BookOpen, Users, BarChart, ExternalLink, Video } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore"; // Import deleteDoc
import { db } from "@/firebase";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();
  const course: Course | undefined = courseData.find(c => c.id === Number(id));

  const [user, setUser] = useState<{ uid?: string; name?: string; email?: string } | null>(null);
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    if (user && user.uid && course) {
      const checkEnrollment = async () => {
        try {
          const enrollmentDoc = await getDoc(doc(db, "enrollments", `${user.uid}_${course.id}`));
          setIsEnrolled(enrollmentDoc.exists());
        } catch (error) {
            console.warn("Could not verify enrollment status, you might be offline. Please try again later.")
        }
      };
      checkEnrollment();
    }
  }, [user, course]);

  const handleEnroll = async () => {
    if (!user || !user.uid || !course) {
      toast.error("You must be logged in to enroll.");
      return;
    }

    const previousEnrollment = isEnrolled;
    setIsEnrolled(true);
    
    try {
      await setDoc(doc(db, "enrollments", `${user.uid}_${course.id}`), { courseId: course.id, userId: user.uid });
      toast.success(`Successfully enrolled in ${course.title}!`);
    } catch (error) {
      console.error("Error enrolling: ", error);
      toast.error("Enrollment failed. Please try again.");
      setIsEnrolled(previousEnrollment);
    }
  };

  const handleUnenroll = async () => {
    if (!user || !user.uid || !course) {
      toast.error("You must be logged in to unenroll.");
      return;
    }

    const previousEnrollment = isEnrolled;
    setIsEnrolled(false); // Optimistic UI update

    try {
      await deleteDoc(doc(db, "enrollments", `${user.uid}_${course.id}`));
      toast.success(`Successfully unenrolled from ${course.title}.`);
    } catch (error) {
      console.error("Error unenrolling: ", error);
      toast.error("Unenrollment failed. Please try again.");
      setIsEnrolled(previousEnrollment); // Revert UI on error
    }
  };

  if (!course) {
    return <AnimatedPage><div className="text-center py-20">Course not found</div></AnimatedPage>;
  }

  const totalLessons = course.modules.reduce((sum, module) => sum + module.lessons.length, 0);

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-8">

        {/* Header Section */}
        <div className="bg-gradient-card p-8 rounded-2xl shadow-card mb-10 border-border/50 animate-fade-in-down">
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-grow">
                <div className="flex items-center gap-4 mb-2">
                    <span className="px-3 py-1.5 text-sm font-semibold rounded-full bg-secondary text-secondary-foreground border border-border">{course.category}</span>
                    <span className="px-3 py-1.5 text-sm font-semibold rounded-full bg-secondary text-secondary-foreground border border-border">{course.difficulty}</span>
                </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">{course.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{course.description}</p>
              <div className="flex items-center flex-wrap gap-x-6 gap-y-2 mt-6 text-muted-foreground">
                <div className="flex items-center gap-2"><Clock className="h-5 w-5 text-primary" /><span>{course.duration}</span></div>
                <div className="flex items-center gap-2"><User className="h-5 w-5 text-primary" /><span>{course.instructor.name}</span></div>
              </div>
              <div className="mt-8 flex gap-4">
                {isEnrolled ? (
                    <>
                        <Link to={`/course/${course.id}/player`}>
                            <Button size="lg" className="shadow-card hover:shadow-hover transition-all duration-300 text-lg px-8 py-6">Start Learning</Button>
                        </Link>
                        <Button 
                          size="lg" 
                          variant="outline"
                          className="shadow-card hover:shadow-hover transition-all duration-300 text-lg px-8 py-6 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                          onClick={handleUnenroll}
                        >
                          Unenroll
                        </Button>
                    </>
                ) : (
                    <Button size="lg" className="shadow-card hover:shadow-hover transition-all duration-300 text-lg px-8 py-6" onClick={handleEnroll}>Enroll Now</Button>
                )}
              </div>
            </div>
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img src={course.imageUrl} alt={course.title} className="w-full h-auto object-cover rounded-xl shadow-lg"/>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main Content: Modules & Instructor */}
          <div className="lg:col-span-2">
            {/* What you will learn */}
            <div className="bg-gradient-card p-6 rounded-2xl shadow-card mb-8 border-border/50">
                <h2 className="text-2xl font-bold mb-4 flex items-center"><CheckCircle className="h-6 w-6 mr-3 text-primary"/>What You'll Learn</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-muted-foreground">
                    {course.whatYouWillLearn.map((point, i) => (
                        <li key={i} className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500 flex-shrink-0"/><span>{point}</span></li>
                    ))}
                </ul>
            </div>

            {/* Modules Section */}
            <div>
              <h2 className="text-3xl font-bold mb-4"><BookOpen className="h-8 w-8 inline-block mr-3 text-primary"/>Course Content</h2>
              <Accordion type="single" collapsible className="w-full bg-gradient-card rounded-2xl shadow-card border-border/50 p-2">
                {course.modules.map((module, index) => (
                  <AccordionItem value={`item-${index}`} key={index} className="border-b-border/50">
                    <AccordionTrigger className="hover:no-underline p-4">
                      <div className="flex-grow text-left">
                        <h3 className="font-semibold text-lg">{module.title}</h3>
                        <span className="text-sm text-muted-foreground">{module.lessons.length} lessons</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-4 pt-0">
                      <ul className="space-y-3">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                            <PlayCircle className="h-5 w-5 mr-3 text-primary"/> 
                            <span>{lesson.title}</span>
                            <span className="ml-auto text-xs">{lesson.duration}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Instructor Section */}
            <div className="mt-12">
                <h2 className="text-3xl font-bold mb-4"><Users className="h-8 w-8 inline-block mr-3 text-primary"/>Instructor</h2>
                <Card className="bg-gradient-card p-6 rounded-2xl shadow-card border-border/50">
                    <CardContent className="flex items-center gap-6 p-0">
                        <div className="h-24 w-24 rounded-full bg-primary-foreground flex items-center justify-center text-4xl font-bold text-primary shadow-inner">{course.instructor.avatar}</div>
                        <div>
                            <h3 className="text-2xl font-bold">{course.instructor.name}</h3>
                            <p className="text-md text-primary font-semibold">{course.instructor.title}</p>
                            <p className="text-sm text-muted-foreground mt-2">{course.instructor.bio}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
          </div>

          {/* Sidebar: Course Stats & Resources */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="bg-gradient-card p-6 rounded-2xl shadow-card border-border/50">
                <CardContent className="p-0">
                    <h3 className="text-xl font-bold mb-4">Course Stats</h3>
                    <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-center justify-between"><span className="flex items-center"><BarChart className="h-5 w-5 mr-2 text-primary"/>Difficulty</span> <strong>{course.difficulty}</strong></li>
                        <li className="flex items-center justify-between"><span className="flex items-center"><Video className="h-5 w-5 mr-2 text-primary"/>Total Lessons</span> <strong>{totalLessons}</strong></li>
                        <li className="flex items-center justify-between"><span className="flex items-center"><Clock className="h-5 w-5 mr-2 text-primary"/>Duration</span> <strong>{course.duration}</strong></li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="bg-gradient-card p-6 rounded-2xl shadow-card border-border/50">
                <CardContent className="p-0">
                    <h3 className="text-xl font-bold mb-4">Resources</h3>
                    {course.resources.length > 0 ? (
                        <ul className="space-y-3">
                            {course.resources.map((resource, index) => (
                                <li key={index}>
                                    <a href={resource.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-muted-foreground hover:text-primary group">
                                        <ExternalLink className="h-4 w-4 mr-2 text-primary/80 group-hover:text-primary"/>
                                        <span>{resource.title}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-muted-foreground">No resources available for this course.</p>
                    )}
                </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </AnimatedPage>
  );
};

export default CourseDetails;
