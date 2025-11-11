import AnimatedPage from "@/components/AnimatedPage";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { courseData } from "@/data/courseData";
import { Link } from "react-router-dom";
import { BookOpenCheck, Clock, Award } from "lucide-react";

// Mock data for user's profile and progress
const user = {
  name: "Rajesh",
};

const activeCourses = [
  { ...(courseData.find(c => c.id === 1)!), progress: 65 },
  { ...(courseData.find(c => c.id === 2)!), progress: 42 },
];

const recommendedCourses = courseData.filter(c => [3, 4, 5].includes(c.id));

const Dashboard = () => {
  return (
    <AnimatedPage>
      <div className="px-4 py-8">
        {/* Welcome Header */}
        <div className="rounded-2xl bg-gradient-hero backdrop-blur-sm border border-border/50 p-8 mb-8 shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in-down">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">Welcome back, {user.name}! 👋</h1>
          <p className="text-muted-foreground mt-2">Continue your learning journey and unlock new cloud skills</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-primary/10 animate-scale-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">Active Courses</p>
                <div className="p-2 rounded-lg bg-primary/10">
                  <BookOpenCheck className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="text-3xl font-bold mt-3 bg-gradient-primary bg-clip-text text-transparent">2</p>
              <p className="text-xs text-muted-foreground mt-1">in progress</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-secondary/10 animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">Learning Hours</p>
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Clock className="h-5 w-5 text-secondary" />
                </div>
              </div>
              <p className="text-3xl font-bold mt-3 bg-gradient-primary bg-clip-text text-transparent">34.5</p>
              <p className="text-xs text-muted-foreground mt-1">This month</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-accent/10 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">Certificates</p>
                <div className="p-2 rounded-lg bg-accent/10">
                  <Award className="h-5 w-5 text-accent" />
                </div>
              </div>
              <p className="text-3xl font-bold mt-3 bg-gradient-primary bg-clip-text text-transparent">3</p>
              <p className="text-xs text-muted-foreground mt-1">Earned</p>
            </CardContent>
          </Card>
        </div>

        {/* Active Courses Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">Active Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeCourses.map((course) => (
              <Card key={course.id} className="flex flex-col overflow-hidden rounded-2xl shadow-card hover:shadow-elevated transition-all duration-500 border-border/50 group bg-gradient-card">
                 <div className="relative h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-4">
                    <span className="font-bold text-8xl text-gray-200 dark:text-gray-700">{course.category.charAt(0)}</span>
                     <span className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full ${course.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' : course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>{course.difficulty}</span>
                  </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-semibold uppercase text-blue-500">{course.category}</span>
                  <h3 className="text-lg font-bold mt-2">{course.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground flex-grow">{course.description}</p>
                  <div className="flex items-center mt-4 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Progress</span>
                        <span className="text-sm font-semibold text-blue-500">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="w-full h-2" />
                  </div>
                  <Link to={`/course/${course.id}/player`} className="mt-6 w-full">
                    <Button variant="outline" className="w-full">Continue Learning</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommended for You Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">Recommended for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedCourses.map((course) => (
               <Card key={course.id} className="flex flex-col overflow-hidden rounded-2xl shadow-card hover:shadow-elevated transition-all duration-500 border-border/50 group bg-gradient-card">
                <div className="relative h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-4">
                    <span className="font-bold text-8xl text-gray-200 dark:text-gray-700">{course.category.charAt(0)}</span>
                    <span className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full ${course.difficulty === 'Beginger' ? 'bg-green-100 text-green-800' : course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>{course.difficulty}</span>
                </div>
               <CardContent className="p-4 flex flex-col flex-grow">
                 <span className="text-xs font-semibold uppercase text-blue-500">{course.category}</span>
                 <h2 className="text-lg font-bold mt-2">{course.title}</h2>
                 <p className="mt-2 text-sm text-muted-foreground flex-grow">{course.description}</p>
                 <Link to={`/course/${course.id}`} className="mt-4 w-full">
                   <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">View Details</Button>
                 </Link>
               </CardContent>
             </Card>
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Dashboard;
