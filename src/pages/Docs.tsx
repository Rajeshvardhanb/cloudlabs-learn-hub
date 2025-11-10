import AnimatedPage from "@/components/AnimatedPage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { courseData } from "@/data/courseData";
import { useState } from "react";

const Docs = () => {
  // Group courses by category for the sidebar
  const docsByCategory = courseData.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {} as Record<string, typeof courseData>);

  // State to hold the currently selected topic
  const [selectedTopic, setSelectedTopic] = useState<{
    topic: string;
    content: string;
  } | null>({
    topic: "Introduction to Infrastructure as Code",
    content:
      "This lesson introduces the concept of Infrastructure as Code (IaC) and its benefits. You will learn how IaC helps in automating infrastructure provisioning and management, leading to faster, more reliable, and repeatable environment setups. We will explore the different types of IaC (declarative vs. imperative) and introduce popular tools in this space, with a focus on Terraform.",
  });

  return (
    <AnimatedPage>
      <div className="flex min-h-[calc(100vh-theme(spacing.16))]">
        {/* Sidebar */}
        <aside className="w-1/3 min-w-[320px] max-w-[400px] border-r overflow-y-auto p-4 bg-gray-50/50 dark:bg-gray-900/50">
          <h2 className="text-xl font-bold mb-4 p-2">Documentation</h2>
          <Accordion type="multiple" className="w-full">
            {Object.entries(docsByCategory).map(([category, courses]) => (
              <AccordionItem value={category} key={category}>
                <AccordionTrigger className="text-base font-semibold hover:no-underline">
                  {category}
                </AccordionTrigger>
                <AccordionContent className="pl-2">
                  <Accordion type="multiple" className="w-full">
                    {courses.map((course) => (
                      <AccordionItem
                        value={`${course.id}`}
                        key={course.id}
                      >
                        <AccordionTrigger className="font-medium hover:no-underline">
                          {course.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          {course.modules.map((module, moduleIndex) => (
                            <div key={moduleIndex} className="pl-2">
                              <h4 className="font-semibold text-sm mb-2 text-gray-600 dark:text-gray-400">
                                {module.title}
                              </h4>
                              <ul className="pl-4 border-l ml-1 mb-4">
                                {module.lessons.length > 0 ? (
                                  module.lessons.map((
                                    lesson,
                                    lessonIndex
                                  ) => (
                                    <li
                                      key={lessonIndex}
                                      className={`text-sm text-muted-foreground hover:text-foreground cursor-pointer py-1.5 transition-colors rounded-r-md pl-2 ${selectedTopic?.topic === lesson ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 border-l-2 border-blue-500 ml-[-1px]' : 'border-l-2 border-transparent'}`}
                                      onClick={() =>
                                        setSelectedTopic({
                                          topic: lesson,
                                          content: `Content for "${lesson}" from "${module.title}" is being prepared and will be available shortly. This section will contain detailed explanations, code examples, and best practices related to this topic.`,
                                        })
                                      }
                                    >
                                      {lesson}
                                    </li>
                                  ))
                                ) : (
                                  <li className="text-sm text-muted-foreground italic py-1">
                                    Lessons coming soon
                                  </li>
                                )}
                              </ul>
                            </div>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 md:p-12 overflow-y-auto">
          {selectedTopic ? (
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-6 tracking-tight">
                {selectedTopic.topic}
              </h1>
              <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed">
                <p>{selectedTopic.content}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-xl text-muted-foreground">
                Select a topic from the sidebar to view the documentation.
              </p>
            </div>
          )}
        </main>
      </div>
    </AnimatedPage>
  );
};

export default Docs;
