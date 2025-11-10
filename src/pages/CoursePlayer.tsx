import {
  PlayCircle,
  CheckCircle,
  Lock,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { courseData } from "@/data/courseData";
import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CoursePlayer = () => {
  const { id } = useParams<{ id: string }>();
  const course = courseData.find((c) => c.id === parseInt(id || ""));
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // In a real app, you would track the current lesson
  const currentLesson = {
    moduleIndex: 0,
    lessonIndex: 2,
    title: "DevSecOps Tools Overview",
    duration: "18:20",
  };

  if (!course) {
    return <Navigate to="/courses" />;
  }

  const sidebarVariants = {
    open: { width: 350, x: 0 },
    closed: { width: 0, x: 350 },
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 font-geist">
      {/* Main Content */}
      <main className="flex-1 flex flex-col transition-all duration-300">
        <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          </div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
              R
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </header>

        <div className="flex-1 flex flex-col p-8 overflow-y-auto">
          {/* Video Player */}
          <div className="relative aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
            <PlayCircle className="h-16 w-16 text-gray-500" />
            <p className="absolute bottom-4 text-gray-400 text-sm">
              Video Player Placeholder (YouTube unlisted video would be
              embedded here)
            </p>
          </div>

          {/* Lesson Details */}
          <div className="mt-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">{currentLesson.title}</h1>
              <p className="text-gray-500 mt-1">
                Module {currentLesson.moduleIndex + 1} &bull; Lesson{" "}
                {currentLesson.lessonIndex + 1} &bull; {currentLesson.duration}
              </p>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              <CheckCircle className="h-5 w-5 mr-2" />
              Mark Complete
            </Button>
          </div>

          {/* Tabs for Notes, Q&A, Resources */}
          <Tabs defaultValue="notes" className="mt-8">
            <TabsList>
              <TabsTrigger value="notes">Notes</TabsTrigger>
              <TabsTrigger value="qna">Q&A</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            <TabsContent value="notes" className="mt-4">
              <Textarea
                placeholder="Take notes while watching..."
                className="min-h-[150px]"
              />
              <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">Save Notes</Button>
            </TabsContent>
             <TabsContent value="qna" className="mt-4">
              <p>Q&A section coming soon.</p>
            </TabsContent>
             <TabsContent value="resources" className="mt-4">
              <p>Resources section coming soon.</p>
            </TabsContent>
          </Tabs>

          {/* Navigation */}
          <div className="flex justify-between mt-8 border-t pt-6">
            <Button variant="outline">
              <ChevronLeft className="h-5 w-5 mr-2" />
              Previous Lesson
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Next Lesson
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </main>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 flex flex-col h-full overflow-y-auto"
          >
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="font-bold text-xl">{course.title}</h2>
            </div>
            <div className="flex-1 p-2">
              {course.modules.map((module, moduleIndex) => (
                <div key={moduleIndex} className="mb-4">
                  <h3 className="font-semibold p-2">{module.title}</h3>
                  <ul>
                    {module.lessons.map((lesson, lessonIndex) => {
                      const isCurrent = moduleIndex === currentLesson.moduleIndex && lessonIndex === currentLesson.lessonIndex;
                      return (
                         <li key={lessonIndex} className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${isCurrent ? 'bg-blue-100 dark:bg-blue-900' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                           <div className="flex items-center">
                            {isCurrent ? <PlayCircle className="h-5 w-5 mr-3 text-blue-500" /> : <CheckCircle className="h-5 w-5 mr-3 text-gray-400" />}
                            <span>{lesson}</span>
                           </div>
                           <span className="text-sm text-gray-500">12:30</span>
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
    </div>
  );
};

export default CoursePlayer;
