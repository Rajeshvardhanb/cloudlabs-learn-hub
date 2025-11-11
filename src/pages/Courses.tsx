import AnimatedPage from "@/components/AnimatedPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Clock, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { courseData } from "@/data/courseData";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { toast } from "sonner";

const categories = ["All", "Learning Paths", "AWS", "DevSecOps", "Terraform", "Jenkins", "Kubernetes", "Docker", "Ansible"];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState<number[]>([]);
  const [user, setUser] = useState<{ uid?: string; name?: string; email?: string } | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    if (user && user.uid) {
      const fetchEnrolledCourses = async () => {
        const enrolled = [];
        for (const course of courseData) {
          try {
            const enrollmentDoc = await getDoc(doc(db, "enrollments", `${user.uid}_${course.id}`));
            if (enrollmentDoc.exists()) {
              enrolled.push(course.id);
            }
          } catch (error) {
            console.warn("Error fetching enrollment status, you might be offline:", error);
          }
        }
        setEnrolledCourses(enrolled);
      };
      fetchEnrolledCourses();
    }
  }, [user]);

  const handleEnroll = async (courseId: number) => {
    if (!user || !user.uid) {
      toast.error("You must be logged in to enroll.");
      // Consider navigating to login page
      return;
    }

    // Optimistic UI update
    const previousEnrolledCourses = [...enrolledCourses];
    setEnrolledCourses([...previousEnrolledCourses, courseId]);

    try {
      // Asynchronous database operation
      await setDoc(doc(db, "enrollments", `${user.uid}_${courseId}`), { courseId, userId: user.uid });
      toast.success(`Successfully enrolled in ${courseData.find(c=>c.id === courseId)?.title}!`);
    } catch (error) {
      console.error("Error enrolling in course, rolling back UI: ", error);
      toast.error("Enrollment failed. Please check your connection and try again.");
      // If it fails, revert the UI change.
      setEnrolledCourses(previousEnrolledCourses);
    }
  };

  const filteredCourses = courseData
    .filter(course => selectedCategory === "All" || course.category === selectedCategory)
    .filter(course => course.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-fade-in-down">Course Catalog</h1>
        <p className="text-muted-foreground mt-3 text-lg animate-fade-in-up">
          Explore our comprehensive collection of cloud and security courses
        </p>

        <div className="relative mt-6 animate-fade-in-up">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder="Search courses..." 
            className="pl-12 h-12 rounded-xl shadow-card focus:shadow-hover transition-all duration-300 border-border/50" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map(cat => (
            <Button 
              key={cat} 
              variant={selectedCategory === cat ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">Showing {filteredCourses.length} courses</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="flex flex-col overflow-hidden rounded-2xl shadow-card hover:shadow-elevated transition-all duration-500 border-border/50 group bg-gradient-card animate-scale-in">
              <div className="relative h-48 bg-gradient-hero flex items-center justify-center p-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
                {course.imageUrl ? (
                  <img src={course.imageUrl} alt={course.title} className="h-24 w-24 object-contain transition-transform group-hover:scale-110 duration-500 z-10" />
                ) : (
                  <span className="font-bold text-8xl bg-gradient-primary bg-clip-text text-transparent opacity-20 group-hover:opacity-30 transition-opacity duration-300">{course.category.charAt(0)}</span>
                )}
                <span className={`absolute top-3 right-3 px-3 py-1.5 text-xs font-semibold rounded-full shadow-md z-10 ${course.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 border border-green-200' : course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
                  {course.difficulty}
                </span>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-semibold uppercase bg-gradient-primary bg-clip-text text-transparent">{course.category}</span>
                <h2 className="text-xl font-bold mt-2 group-hover:text-primary transition-colors duration-300">{course.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground flex-grow leading-relaxed">{course.description}</p>
                <div className="flex items-center mt-4 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{course.duration}</span>
                </div>
                 <div className="mt-6 w-full">
                    {enrolledCourses.includes(course.id) ? (
                        <Link to={`/course/${course.id}/player`} className="w-full">
                        <Button className="w-full shadow-card hover:shadow-hover transition-all duration-300">Start Learning</Button>
                        </Link>
                    ) : (
                        <Button 
                          className="w-full shadow-card hover:shadow-hover transition-all duration-300"
                          onClick={() => handleEnroll(course.id)}
                        >
                          Enroll Now
                        </Button>
                    )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Courses;
