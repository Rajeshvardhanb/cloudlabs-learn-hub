import AnimatedPage from "@/components/AnimatedPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Clock, Search } from "lucide-react";
import { useState } from "react";
import { courseData } from "@/data/courseData";

const categories = ["All", "AWS", "DevSecOps", "Terraform", "Jenkins", "Kubernetes", "Docker", "Ansible"];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courseData
    .filter(course => selectedCategory === "All" || course.category === selectedCategory)
    .filter(course => course.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Course Catalog</h1>
        <p className="text-muted-foreground mt-2">
          Explore our comprehensive collection of cloud and security courses
        </p>

        <div className="relative mt-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder="Search courses..." 
            className="pl-10" 
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
            <Card key={course.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-4">
                {course.imageUrl ? (
                  <img src={course.imageUrl} alt={course.title} className="h-24 w-24 object-contain" />
                ) : (
                  <span className="font-bold text-8xl text-gray-200 dark:text-gray-700">{course.category.charAt(0)}</span>
                )}
                <span className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full ${course.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' : course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                  {course.difficulty}
                </span>
              </div>
              <CardContent className="p-4 flex flex-col flex-grow">
                <span className="text-xs font-semibold uppercase text-blue-500">{course.category}</span>
                <h2 className="text-lg font-bold mt-2">{course.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground flex-grow">{course.description}</p>
                <div className="flex items-center mt-4 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <Link to={`/course/${course.id}`} className="mt-4 w-full">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Courses;
