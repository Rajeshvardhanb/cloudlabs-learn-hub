import AnimatedPage from "@/components/AnimatedPage";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { courseData, Course } from "@/data/courseData";
import { Link } from "react-router-dom";
import { BookOpenCheck, Award } from "lucide-react";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

interface EnrolledCourse extends Course {
  progress: number;
}

const Dashboard = () => {
  const [user, setUser] = useState<{ uid?: string; name?: string; email?: string } | null>(null);
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (user && user.uid) {
      const fetchEnrolledCourses = async () => {
        try {
          const enrollmentsQuery = query(collection(db, "enrollments"), where("userId", "==", user.uid));
          const querySnapshot = await getDocs(enrollmentsQuery);
          
          const courses: EnrolledCourse[] = [];
          for (const enrollmentDoc of querySnapshot.docs) {
            const enrollmentData = enrollmentDoc.data();
            const course = courseData.find(c => c.id === enrollmentData.courseId);
            if (course) {
              const completedLessons = enrollmentData.completedLessons || [];
              const progress = Math.round((completedLessons.length / course.totalLessons) * 100);
              courses.push({ ...course, progress });
            }
          }

          setEnrolledCourses(courses);
        } catch (error) {
          console.error("Error fetching enrolled courses:", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchEnrolledCourses();
    } else {
        setIsLoading(false);
    }
  }, [user]);

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">Welcome, {user?.name || 'Guest'}</h1>
            <p className="text-muted-foreground mt-2 text-base sm:text-lg">Let's continue your learning journey.</p>
        </div>

        <Card className="mb-6 sm:mb-8 bg-gradient-card p-4 sm:p-6">
            <CardContent className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                <div className="flex items-center gap-3 sm:gap-4">
                    <Award className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-500 flex-shrink-0" />
                    <div>
                        <h3 className="text-base sm:text-xl font-bold">Courses Completed</h3>
                        <p className="text-2xl sm:text-3xl font-extrabold text-primary">{enrolledCourses.filter(c => c.progress === 100).length}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                    <BookOpenCheck className="h-8 w-8 sm:h-10 sm:w-10 text-blue-500 flex-shrink-0" />
                    <div>
                        <h3 className="text-base sm:text-xl font-bold">Active Courses</h3>
                        <p className="text-2xl sm:text-3xl font-extrabold text-primary">{enrolledCourses.filter(c => c.progress < 100).length}</p>
                    </div>
                </div>
            </CardContent>
        </Card>

        <h2 className="text-xl sm:text-2xl font-bold mb-4">My Courses</h2>

        {isLoading ? (
          <p className="text-sm sm:text-base">Loading your courses...</p>
        ) : enrolledCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {enrolledCourses.map((course) => (
              <Card key={course.id} className="flex flex-col overflow-hidden rounded-xl shadow-card hover:shadow-elevated transition-shadow duration-300">
                <CardContent className="flex flex-col flex-grow p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-4">{course.category}</p>
                  <Progress value={course.progress} className="mb-4" />
                  <div className="flex justify-between items-center text-xs sm:text-sm text-muted-foreground mb-4">
                    <span>Progress</span>
                    <span className="font-semibold text-primary">{course.progress}%</span>
                  </div>
                  <Link to={`/course/${course.id}/player`} className="w-full mt-auto">
                    <Button className="w-full text-sm sm:text-base h-10 sm:h-11">Continue Learning</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
            <div className="text-center py-12 sm:py-16 border-2 border-dashed rounded-lg px-4">
                <h3 className="text-lg sm:text-xl font-semibold">You are not enrolled in any courses yet.</h3>
                <p className="text-muted-foreground mt-2 text-sm sm:text-base">Explore our course catalog to get started.</p>
                <Link to="/courses">
                    <Button className="mt-4">Explore Courses</Button>
                </Link>
            </div>
        )}
      </div>
    </AnimatedPage>
  );
};

export default Dashboard;
