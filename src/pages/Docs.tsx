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
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Code, CheckCircle2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15
    }
  }
};

const codeBlockVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};

const keyPointVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.1,
      type: "spring" as const,
      stiffness: 100,
      damping: 12
    }
  })
};

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
          <AnimatePresence mode="wait">
            {selectedTopic ? (
              <motion.div
                key={selectedTopic}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="max-w-4xl mx-auto"
              >
                {/* Header with enhanced animations */}
                <motion.div variants={itemVariants} className="mb-8">
                  <motion.div
                    variants={titleVariants}
                    className="flex items-center gap-3 mb-4"
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    >
                      <Sparkles className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h1 className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-foreground via-primary to-foreground/70 bg-clip-text text-transparent">
                      {linuxDocsContent[selectedTopic]?.title || selectedTopic}
                    </h1>
                  </motion.div>
                  <motion.div
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      delay: 0.3,
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                    className="h-1 w-24 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full"
                  />
                </motion.div>

                {/* Content */}
                {linuxDocsContent[selectedTopic] ? (
                  <motion.div variants={containerVariants} className="space-y-8">
                    {/* Main Description with staggered paragraph animations */}
                    <motion.div variants={itemVariants} className="prose prose-lg dark:prose-invert max-w-none">
                      {linuxDocsContent[selectedTopic].content.split('\n\n').map((paragraph, idx) => (
                        <motion.p
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.1 * idx,
                            type: "spring",
                            stiffness: 100,
                            damping: 15
                          }}
                          className="text-foreground/90 leading-relaxed mb-4"
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </motion.div>

                    {/* Key Points with enhanced animations */}
                    {linuxDocsContent[selectedTopic].keyPoints && (
                      <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent border border-primary/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      >
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center gap-2 mb-4"
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3
                            }}
                          >
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          </motion.div>
                          <h3 className="text-lg font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Key Takeaways
                          </h3>
                        </motion.div>
                        <ul className="space-y-3">
                          {linuxDocsContent[selectedTopic].keyPoints!.map((point, idx) => (
                            <motion.li
                              key={idx}
                              custom={idx}
                              variants={keyPointVariants}
                              initial="hidden"
                              animate="visible"
                              whileHover={{ x: 5, transition: { duration: 0.2 } }}
                              className="flex items-start gap-3 text-foreground/80 group cursor-default"
                            >
                              <motion.span
                                animate={{
                                  scale: [1, 1.5, 1],
                                }}
                                transition={{
                                  delay: idx * 0.1,
                                  duration: 0.5
                                }}
                                className="text-primary mt-1 text-lg group-hover:text-primary/80 transition-colors"
                              >
                                •
                              </motion.span>
                              <span className="group-hover:text-foreground transition-colors">{point}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {/* Code Examples with enhanced animations */}
                    {linuxDocsContent[selectedTopic].codeExamples && (
                      <motion.div variants={itemVariants} className="space-y-6">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center gap-3"
                        >
                          <motion.div
                            animate={{
                              rotateY: [0, 180, 360],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              repeatDelay: 5
                            }}
                          >
                            <Code className="h-5 w-5 text-primary" />
                          </motion.div>
                          <h3 className="text-xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Code Examples
                          </h3>
                        </motion.div>
                        {linuxDocsContent[selectedTopic].codeExamples!.map((example, idx) => (
                          <motion.div
                            key={idx}
                            variants={codeBlockVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: idx * 0.15 }}
                            whileHover={{ scale: 1.01, y: -2 }}
                            className="group"
                          >
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 + idx * 0.15 }}
                              className="flex items-center justify-between mb-3"
                            >
                              <h4 className="font-medium text-foreground/90 group-hover:text-foreground transition-colors">
                                {example.title}
                              </h4>
                              <Badge
                                variant="secondary"
                                className="text-xs group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                              >
                                {example.language}
                              </Badge>
                            </motion.div>
                            <motion.div
                              whileHover={{ boxShadow: "0 10px 30px -10px rgba(var(--primary-rgb, 0, 0, 0), 0.3)" }}
                              className="relative bg-gradient-to-br from-muted/80 to-muted/40 rounded-xl border border-border overflow-hidden group-hover:border-primary/30 transition-all duration-300"
                            >
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={false}
                              />
                              <pre className="relative p-5 overflow-x-auto text-sm">
                                <code className="text-foreground/90 font-mono leading-relaxed">
                                  {example.code}
                                </code>
                              </pre>
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                whileHover={{ opacity: 1, y: 0 }}
                                className="absolute top-3 right-3"
                              >
                                <Badge className="text-xs shadow-lg bg-primary/90 hover:bg-primary">
                                  {example.language}
                                </Badge>
                              </motion.div>
                            </motion.div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    variants={itemVariants}
                    className="bg-gradient-to-br from-muted/30 to-muted/10 border-2 border-dashed border-muted-foreground/20 rounded-xl p-12 text-center"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                    >
                      <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
                    </motion.div>
                    <p className="text-muted-foreground text-lg mb-2">
                      Content for "{selectedTopic}" is being prepared and will be available shortly.
                    </p>
                    <p className="text-sm text-muted-foreground/70">
                      This section will contain detailed explanations, code examples, and best practices.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center h-full text-center p-8"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <BookOpen className="h-16 w-16 text-muted-foreground/30 mb-4" />
                </motion.div>
                <p className="text-xl text-muted-foreground">
                  Select a topic from the sidebar to view the documentation.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </AnimatedPage>
  );
};

export default Docs;
