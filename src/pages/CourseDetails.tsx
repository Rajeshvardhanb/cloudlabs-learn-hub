import AnimatedPage from "@/components/AnimatedPage";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, User, CheckCircle, PlayCircle, FileText } from "lucide-react";
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { courseData } from "@/data/courseData";
import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { toast } from "sonner";

const CourseDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = courseData.find(c => c.id === parseInt(id || ""));
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  const [user, setUser] = useState<{ uid?: string; name?: string; email?: string } | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    if (course && user && user.uid) {
      const checkEnrollment = async () => {
        setIsLoading(true);
        try {
          const enrollmentDoc = await getDoc(doc(db, "enrollments", `${user.uid}_${course.id}`));
          setIsEnrolled(enrollmentDoc.exists());
        } catch (error) {
          console.error("Error checking enrollment:", error);
          toast.error("Could not verify enrollment. You may be offline.");
        } finally {
          setIsLoading(false);
        }
      };
      checkEnrollment();
    } else {
      setIsLoading(false);
    }
  }, [course, user]);

  if (!course) {
    return <Navigate to="/courses" />;
  }

  const handleEnroll = async () => {
    if (!user || !user.uid) {
      toast.error("You must be logged in to enroll.");
      navigate("/auth");
      return;
    }

    // Optimistic UI update
    const previousEnrollmentState = isEnrolled;
    setIsEnrolled(true);

    try {
      await setDoc(doc(db, "enrollments", `${user.uid}_${course.id}`), { courseId: course.id, userId: user.uid });
      toast.success(`Successfully enrolled in ${course.title}!`);
    } catch (error) {
      console.error("Error enrolling in course, rolling back UI: ", error);
      toast.error("Enrollment failed. Please check your connection and try again.");
      // If it fails, revert the UI change.
      setIsEnrolled(previousEnrollmentState);
    }
  };

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="rounded-lg bg-blue-50 dark:bg-gray-800 p-8 mb-8">
          <div className="flex items-center gap-4 mb-2">
            <span className="px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full">{course.category}</span>
            <span className={`px-3 py-1 text-sm font-semibold rounded-full ${course.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' : course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                {course.difficulty}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{course.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">{course.description}</p>
          <div className="flex items-center gap-6 mt-4 text-gray-700 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>{course.instructor.name}</span>
            </div>
          </div>
          {isEnrolled ? (
            <Link to={`/course/${course.id}/player`}>
              <Button size="lg" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white">
                <PlayCircle className="h-5 w-5 mr-2" />
                Start Learning
              </Button>
            </Link>
          ) : (
            <Button size="lg" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white" onClick={handleEnroll} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Enroll Now'}
            </Button>
          )}
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="modules">Modules</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6 p-6 border rounded-lg">
            <h2 className="text-2xl font-bold">What You'll Learn</h2>
            <ul className="mt-4 space-y-2">
              {course.whatYouWillLearn.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="modules" className="mt-6">
             <Accordion type="single" collapsible defaultValue="item-0">
                {course.modules.map((module, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="border rounded-lg mb-2">
                    <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:no-underline">
                    {module.title}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <ul className="space-y-3">
                        {module.lessons.length > 0 ? module.lessons.map((lesson, lessonIndex) => (
                           <li key={lessonIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                             <PlayCircle className="h-5 w-5 text-gray-400 mr-3" />
                             <span>{typeof lesson === 'string' ? lesson : lesson.title}</span>
                           </li>
                        )) : <p className="text-gray-500">Lessons for this module will be available soon.</p>}
                      </ul>
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="resources" className="mt-6 p-6 border rounded-lg">
            <h2 className="text-2xl font-bold">Resources</h2>
             <ul className="mt-4 space-y-2">
                {course.resources.map((resource, index) => (
                  <li key={index}>
                    <a href={resource.link} className="flex items-center text-blue-500 hover:underline">
                      <FileText className="h-5 w-5 mr-3" />
                      <span>{resource.title}</span>
                    </a>
                  </li>
                ))}
             </ul>
          </TabsContent>

          <TabsContent value="instructor" className="mt-6 p-6 border rounded-lg">
             <div className="flex items-start gap-6">
                <div className="h-20 w-20 rounded-full bg-blue-500 text-white flex items-center justify-center text-3xl font-bold">
                    {course.instructor.avatar}
                </div>
                <div>
                    <h2 className="text-2xl font-bold">{course.instructor.name}</h2>
                    <p className="text-md text-gray-500">{course.instructor.title}</p>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">{course.instructor.bio}</p>
                </div>
             </div>
          </TabsContent>
        </Tabs>
      </div>
    </AnimatedPage>
  );
};

export default CourseDetails;
