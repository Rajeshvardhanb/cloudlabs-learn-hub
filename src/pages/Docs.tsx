import AnimatedPage from "@/components/AnimatedPage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { courseData } from "@/data/courseData";
import { linuxDocsContent } from "@/data/linuxDocsContent";
import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Code, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
  const [selectedTopic, setSelectedTopic] = useState<string | null>("Introduction to Linux");

  return (
    <AnimatedPage>
      <div className="flex min-h-[calc(100vh-theme(spacing.16))]">
        {/* Sidebar */}
        <aside className="w-full md:w-1/3 md:min-w-[320px] md:max-w-[400px] border-r overflow-y-auto p-4 md:p-6 bg-gradient-to-b from-background to-muted/20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Documentation
              </h2>
            </div>
          </motion.div>
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
                                     <motion.li
                                      key={lessonIndex}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: lessonIndex * 0.05 }}
                                      className={`text-sm cursor-pointer py-2 px-3 my-1 transition-all duration-200 rounded-md ${
                                        selectedTopic === lesson.title
                                          ? 'bg-primary/10 text-primary font-medium border-l-2 border-primary shadow-sm'
                                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50 border-l-2 border-transparent hover:border-muted'
                                      }`}
                                      onClick={() => setSelectedTopic(lesson.title)}
                                    >
                                      {lesson.title}
                                      {lesson.duration && (
                                        <span className="text-xs ml-2 text-muted-foreground/60">
                                          ({lesson.duration})
                                        </span>
                                      )}
                                    </motion.li>
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
        <main className="flex-1 p-6 md:p-12 overflow-y-auto">
          {selectedTopic ? (
            <motion.div
              key={selectedTopic}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              {/* Header */}
              <div className="mb-8">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-4xl font-heading font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
                >
                  {linuxDocsContent[selectedTopic]?.title || selectedTopic}
                </motion.h1>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full"
                />
              </div>

              {/* Content */}
              {linuxDocsContent[selectedTopic] ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-8"
                >
                  {/* Main Description */}
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <div className="text-foreground/90 leading-relaxed whitespace-pre-line">
                      {linuxDocsContent[selectedTopic].content}
                    </div>
                  </div>

                  {/* Key Points */}
                  {linuxDocsContent[selectedTopic].keyPoints && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="bg-primary/5 border border-primary/20 rounded-lg p-6"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold">Key Takeaways</h3>
                      </div>
                      <ul className="space-y-2">
                        {linuxDocsContent[selectedTopic].keyPoints!.map((point, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + idx * 0.1 }}
                            className="flex items-start gap-2 text-foreground/80"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Code Examples */}
                  {linuxDocsContent[selectedTopic].codeExamples && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-semibold">Code Examples</h3>
                      </div>
                      {linuxDocsContent[selectedTopic].codeExamples!.map((example, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 + idx * 0.2 }}
                          className="group"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-foreground/90">{example.title}</h4>
                            <Badge variant="secondary" className="text-xs">
                              {example.language}
                            </Badge>
                          </div>
                          <div className="relative bg-muted/50 rounded-lg border border-border overflow-hidden">
                            <pre className="p-4 overflow-x-auto text-sm">
                              <code className="text-foreground/90 font-mono">
                                {example.code}
                              </code>
                            </pre>
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Badge className="text-xs">Bash</Badge>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-muted/30 border-2 border-dashed border-muted-foreground/20 rounded-lg p-12 text-center"
                >
                  <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
                  <p className="text-muted-foreground text-lg">
                    Content for "{selectedTopic}" is being prepared and will be available shortly.
                  </p>
                  <p className="text-sm text-muted-foreground/70 mt-2">
                    This section will contain detailed explanations, code examples, and best practices.
                  </p>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center h-full text-center p-8"
            >
              <BookOpen className="h-16 w-16 text-muted-foreground/30 mb-4" />
              <p className="text-xl text-muted-foreground">
                Select a topic from the sidebar to view the documentation.
              </p>
            </motion.div>
          )}
        </main>
      </div>
    </AnimatedPage>
  );
};

export default Docs;
