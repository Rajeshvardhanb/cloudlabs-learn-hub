import AnimatedPage from "@/components/AnimatedPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Clock, Search } from "lucide-react";
import { useState } from "react";
import { courseData, Course } from "@/data/courseData";

const categories: Course['category'][] = [
  "Learning Paths", "Linux", "AWS", "Azure", "GCP", "Git", "Jenkins", "Ansible", "Docker", "Kubernetes", "Prometheus & Grafana", "ELK Stack", "Terraform", "Helm", "Argo CD"
];
const difficultyOrder = ["Beginner", "Intermediate", "Advanced"];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState<Course['category'] | 'All'>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const CourseCard = ({ course }: { course: Course }) => (
    <Card key={course.id} className="flex flex-col overflow-hidden rounded-xl sm:rounded-2xl shadow-card hover:shadow-elevated transition-all duration-500 border-border/50 group bg-gradient-card animate-scale-in">
      <div className="relative h-40 sm:h-48 bg-gradient-hero flex items-center justify-center p-3 sm:p-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        <img src={course.imageUrl} alt={course.title} className="h-20 sm:h-24 w-auto object-contain transition-transform group-hover:scale-110 duration-500 z-10" />
        <span className={`absolute top-2 sm:top-3 right-2 sm:right-3 px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-semibold rounded-full shadow-md z-10 ${course.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 border border-green-200' : course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
          {course.difficulty}
        </span>
      </div>
      <CardContent className="p-4 sm:p-6 flex flex-col flex-grow">
        <span className="text-xs font-semibold uppercase bg-gradient-primary bg-clip-text text-transparent">{course.category}</span>
        <h2 className="text-lg sm:text-xl font-bold mt-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">{course.title}</h2>
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground flex-grow leading-relaxed line-clamp-3">{course.description}</p>
        <div className="flex items-center mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground">
          <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 flex-shrink-0" />
          <span>{course.duration}</span>
        </div>
        <div className="mt-4 sm:mt-6 w-full">
            <Link to={`/course/${course.id}`} className="w-full">
              <Button className="w-full shadow-card hover:shadow-hover transition-all duration-300 text-sm sm:text-base h-9 sm:h-10">View Details</Button>
            </Link>
        </div>
      </CardContent>
    </Card>
  );

    const renderContent = () => {
    const filteredBySearch = courseData.filter(course => 
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (selectedCategory === "Learning Paths") {
        const learningPathCourses = filteredBySearch.filter(course => course.category === "Learning Paths");
        if (learningPathCourses.length === 0) {
             return <p className="mt-6 sm:mt-8 text-center text-muted-foreground text-sm sm:text-base">No learning paths found.</p>;
        }
        return (
            <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {learningPathCourses.map(course => <CourseCard key={course.id} course={course} />)}
            </div>
        );
    }
    
    if (selectedCategory !== "All") {
        const categoryCourses = filteredBySearch.filter(course => course.category === selectedCategory);

        if (categoryCourses.length === 0) {
            return <p className="mt-6 sm:mt-8 text-center text-muted-foreground text-sm sm:text-base">No courses available for this selection.</p>;
        }

        categoryCourses.sort((a, b) => difficultyOrder.indexOf(a.difficulty) - difficultyOrder.indexOf(b.difficulty));

        return (
            <div className="mt-6 sm:mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary">{selectedCategory}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {categoryCourses.map(course => <CourseCard key={course.id} course={course} />)}
                </div>
            </div>
        );
    }

    const coursesToGroup = filteredBySearch.filter(course => course.category !== "Learning Paths");

    const groupedByDifficulty = coursesToGroup.reduce((acc, course) => {
      (acc[course.difficulty] = acc[course.difficulty] || []).push(course);
      return acc;
    }, {} as Record<Course['difficulty'], Course[]>);

    const hasCourses = Object.values(groupedByDifficulty).some(group => group.length > 0);

    if (!hasCourses) {
        return <p className="mt-6 sm:mt-8 text-center text-muted-foreground text-sm sm:text-base">No courses available for this selection.</p>;
    }

    return (
        <div className="space-y-8 sm:space-y-12 mt-6 sm:mt-8">
            {difficultyOrder.map(difficulty => {
                const coursesInGroup = groupedByDifficulty[difficulty as Course['difficulty']];
                if (coursesInGroup && coursesInGroup.length > 0) {
                    return (
                        <div key={difficulty}>
                            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">
                                {difficulty}
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {coursesInGroup.map(course => <CourseCard key={course.id} course={course} />)}
                            </div>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
  };

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-fade-in-down">Course Catalog</h1>
        <p className="text-muted-foreground mt-2 sm:mt-3 text-base sm:text-lg animate-fade-in-up">
          Explore our comprehensive collection of cloud and security courses
        </p>

        <div className="relative mt-4 sm:mt-6 animate-fade-in-up">
          <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
          <Input 
            placeholder="Search courses..." 
            className="pl-10 sm:pl-12 h-10 sm:h-12 rounded-xl shadow-card focus:shadow-hover transition-all duration-300 border-border/50 text-sm sm:text-base" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
            <Button 
              key="All" 
              variant={selectedCategory === 'All' ? 'default' : 'outline'} 
              onClick={() => setSelectedCategory('All')}
              className="text-xs sm:text-sm h-8 sm:h-9 px-3 sm:px-4"
            >
              All
            </Button>
            {categories.map(cat => (
                <Button 
                  key={cat} 
                  variant={selectedCategory === cat ? 'default' : 'outline'} 
                  onClick={() => setSelectedCategory(cat)}
                  className="text-xs sm:text-sm h-8 sm:h-9 px-3 sm:px-4"
                >
                {cat}
                </Button>
            ))}
        </div>
        
        {renderContent()}

      </div>
    </AnimatedPage>
  );
};

export default Courses;
