import {
  PlayCircle,
  CheckCircle,
  Lock,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { courseData, Lesson } from "@/data/courseData";
import { useParams, Navigate, Link } from "react-router-dom"; // Import Link
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

const CoursePlayer = () => {
  const { id } = useParams<{ id: string }>();
  const course = courseData.find((c) => c.id === parseInt(id || ""));
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);
  const [user, setUser] = useState<{ uid?: string; name?: string; email?: string } | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [currentLesson, setCurrentLesson] = useState<{ moduleIndex: number; lessonIndex: number }>({ moduleIndex: 0, lessonIndex: 0 });

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    if (user && user.uid && course) {
      const fetchEnrollment = async () => {
        const enrollmentDocRef = doc(db, "enrollments", `${user.uid}_${course.id}`);
        const enrollmentDoc = await getDoc(enrollmentDocRef);
        if (enrollmentDoc.exists()) {
          setCompletedLessons(enrollmentDoc.data().completedLessons || []);
        }
      };
      fetchEnrollment();
    }
  }, [user, course]);

  const toggleLessonCompletion = async () => {
    if (!user || !user.uid || !course) return;

    const currentLessonData = course.modules[currentLesson.moduleIndex]?.lessons[currentLesson.lessonIndex];
    if (!currentLessonData) return;

    const lessonId = currentLessonData.id;
    const isCurrentlyCompleted = completedLessons.includes(lessonId);
    const enrollmentDocRef = doc(db, "enrollments", `${user.uid}_${course.id}`);

    try {
      if (isCurrentlyCompleted) {
        // Mark incomplete
        const newCompletedLessons = completedLessons.filter(id => id !== lessonId);
        setCompletedLessons(newCompletedLessons);
        await updateDoc(enrollmentDocRef, { completedLessons: arrayRemove(lessonId) });
        toast.info("Lesson marked as incomplete.");
      } else {
        // Mark complete
        const newCompletedLessons = [...completedLessons, lessonId];
        setCompletedLessons(newCompletedLessons);
        // Use setDoc with merge:true to create if not exists, or update if exists
        await setDoc(enrollmentDocRef, { 
            completedLessons: arrayUnion(lessonId),
            userId: user.uid,
            courseId: course.id
        }, { merge: true });
        toast.success("Lesson marked as complete!");
      }
    } catch (error) {
      console.error("Error toggling lesson completion: ", error);
      toast.error("Failed to update lesson status. Please try again.");
      // Revert optimistic UI update on error
      if (isCurrentlyCompleted) {
        setCompletedLessons([...completedLessons, lessonId]);
      } else {
        setCompletedLessons(completedLessons.filter(id => id !== lessonId));
      }
    }
  };

  if (!course) {
    return <Navigate to="/courses" />;
  }

  const totalModules = course.modules.length;
  const totalLessonsInCurrentModule = course.modules[currentLesson.moduleIndex]?.lessons.length || 0;

  const goToNextLesson = () => {
    let { moduleIndex, lessonIndex } = currentLesson;

    if (lessonIndex < totalLessonsInCurrentModule - 1) {
      setCurrentLesson({ moduleIndex, lessonIndex: lessonIndex + 1 });
    } else if (moduleIndex < totalModules - 1) {
      setCurrentLesson({ moduleIndex: moduleIndex + 1, lessonIndex: 0 });
    } else {
      toast.info("You have completed all lessons in this course!");
    }
  };

  const goToPreviousLesson = () => {
    let { moduleIndex, lessonIndex } = currentLesson;

    if (lessonIndex > 0) {
      setCurrentLesson({ moduleIndex, lessonIndex: lessonIndex - 1 });
    } else if (moduleIndex > 0) {
      const previousModuleIndex = moduleIndex - 1;
      const lastLessonIndexInPreviousModule = course.modules[previousModuleIndex].lessons.length - 1;
      setCurrentLesson({ moduleIndex: previousModuleIndex, lessonIndex: lastLessonIndexInPreviousModule });
    } else {
      toast.info("You are at the first lesson.");
    };
  };

  const currentLessonData = course.modules[currentLesson.moduleIndex]?.lessons[currentLesson.lessonIndex];
  const { title: lessonTitle, duration: lessonDuration, videoUrl } = currentLessonData;
  const isCompleted = completedLessons.includes(currentLessonData.id);

  const getYoutubeEmbedUrl = (url: string) => {
    if (!url) return '';
    const videoId = url.split('/').pop()?.split('?')[0] || '';
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&iv_load_policy=3&controls=0&disablekb=1&fs=0&showinfo=0`;
  };

  const sidebarVariants = {
    open: { width: 350, x: 0 },
    closed: { width: 0, x: 350 },
  };

  const isFirstLesson = currentLesson.moduleIndex === 0 && currentLesson.lessonIndex === 0;
  const isLastLesson = 
    currentLesson.moduleIndex === totalModules - 1 &&
    currentLesson.lessonIndex === totalLessonsInCurrentModule - 1;

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b bg-card">
          <h2 className="font-bold text-lg truncate flex-1">{course.title}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="ml-2 flex-shrink-0"
          >
            {isSidebarOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </Button>
        </div>

        <div className="flex-1 flex flex-col p-4 sm:p-6 md:p-8 overflow-y-auto">
          {/* Breadcrumb */}
          <nav className="mb-4 text-sm text-muted-foreground flex items-center">
            <Link to="/courses" className="hover:text-primary transition-colors">Courses</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to={`/courses?category=${course.category}`} className="hover:text-primary transition-colors">{course.category}</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-foreground">{course.title}</span>
          </nav>

          {/* Video Player */}
          <div 
            className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden"
            onContextMenu={(e) => e.preventDefault()}
          >
            {videoUrl ? (
              <iframe
                src={getYoutubeEmbedUrl(videoUrl)}
                className="w-full h-full pointer-events-auto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title={lessonTitle}
                style={{ pointerEvents: 'auto' }}
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <PlayCircle className="h-12 w-12 sm:h-16 sm:w-16 text-gray-500" />
                <p className="text-gray-400 text-xs sm:text-sm mt-4 px-4 text-center">
                  No video available for this lesson
                </p>
              </div>
            )}
          </div>

          {/* Lesson Details */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold truncate">{lessonTitle}</h1>
              <p className="text-muted-foreground text-sm sm:text-base mt-1">
                Module {currentLesson.moduleIndex + 1} &bull; Lesson{" "}
                {currentLesson.lessonIndex + 1} {lessonDuration && `• ${lessonDuration}`}
              </p>
            </div>
            <Button 
              className={`${isCompleted ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80' : 'bg-primary hover:bg-primary/90 text-white'} w-full sm:w-auto flex-shrink-0`}
              onClick={toggleLessonCompletion}
            >
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              {isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
            </Button>
          </div>

          {/* Tabs for Notes, Q&A, Resources */}
          <Tabs defaultValue="notes" className="mt-6 sm:mt-8">
            <TabsList className="w-full sm:w-auto">
              <TabsTrigger value="notes" className="flex-1 sm:flex-none">Notes</TabsTrigger>
              <TabsTrigger value="qna" className="flex-1 sm:flex-none">Q&A</TabsTrigger>
              <TabsTrigger value="resources" className="flex-1 sm:flex-none">Resources</TabsTrigger>
            </TabsList>
            <TabsContent value="notes" className="mt-4">
              <Textarea
                placeholder="Take notes while watching..."
                className="min-h-[120px] sm:min-h-[150px] text-sm sm:text-base"
              />
              <Button className="mt-4 bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">Save Notes</Button>
            </TabsContent>
             <TabsContent value="qna" className="mt-4">
              <p className="text-sm sm:text-base">Q&A section coming soon.</p>
            </TabsContent>
             <TabsContent value="resources" className="mt-4">
              <p className="text-sm sm:text-base">Resources section coming soon.</p>
            </TabsContent>
          </Tabs>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-between mt-6 sm:mt-8 border-t pt-6">
            <Button 
              variant="outline" 
              className="w-full sm:w-auto"
              onClick={goToPreviousLesson}
              disabled={isFirstLesson}
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Previous Lesson
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto"
              onClick={goToNextLesson}
              disabled={isLastLesson}
            >
              Next Lesson
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
            </Button>
          </div>
        </div>
      </main>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial={isMobile ? { height: 0 } : "closed"}
            animate={isMobile ? { height: "auto" } : "open"}
            exit={isMobile ? { height: 0 } : "closed"}
            variants={isMobile ? undefined : sidebarVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`bg-card border-border flex flex-col overflow-y-auto ${
              isMobile 
                ? 'absolute bottom-0 left-0 right-0 z-40 border-t max-h-[60vh] shadow-elevated' 
                : 'border-l h-full'
            }`}
          >
            <div className="p-4 sm:p-6 border-b border-border flex items-center justify-between">
              <h2 className="font-bold text-base sm:text-xl truncate flex-1">{course.title}</h2>
              {!isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSidebarOpen(false)}
                  className="ml-2 flex-shrink-0"
                >
                  <X className="h-5 w-5" />
                </Button>
              )}
            </div>
            <div className="flex-1 p-2 sm:p-3">
              {course.modules.map((module, moduleIndex) => (
                <div key={moduleIndex} className="mb-3 sm:mb-4">
                  <h3 className="font-semibold p-2 text-sm sm:text-base">{module.title}</h3>
                  <ul>
                    {module.lessons.map((lesson, lessonIndex) => {
                      const isCurrent = moduleIndex === currentLesson.moduleIndex && lessonIndex === currentLesson.lessonIndex;
                      const isLessonCompleted = completedLessons.includes(lesson.id);
                      return (
                         <li 
                           key={lesson.id} 
                           onClick={() => {
                             setCurrentLesson({ moduleIndex, lessonIndex });
                             if (isMobile) setIsSidebarOpen(false);
                           }}
                           className={`flex items-center justify-between p-2.5 sm:p-3 rounded-lg cursor-pointer transition-colors ${
                             isCurrent 
                               ? 'bg-primary/10 text-primary' 
                               : 'hover:bg-muted'
                           }`}
                         >
                           <div className="flex items-center min-w-0 flex-1">
                            {isLessonCompleted ? (
                              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 fill-success text-success-foreground flex-shrink-0" />
                            ) : (
                              <PlayCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-muted-foreground flex-shrink-0" />
                            )}
                            <span className="text-sm sm:text-base truncate">{lesson.title}</span>
                           </div>
                           {lesson.duration && (
                             <span className="text-xs sm:text-sm text-muted-foreground ml-2 flex-shrink-0">
                               {lesson.duration}
                             </span>
                           )}
                         </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar Toggle */}
      {!isSidebarOpen && !isMobile && (
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsSidebarOpen(true)}
          className="fixed right-4 top-20 z-40 shadow-elevated"
        >
          <Menu className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default CoursePlayer;
