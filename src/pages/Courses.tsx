import AnimatedPage from "@/components/AnimatedPage";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Introduction to Kubernetes",
    description: "Learn the basics of Kubernetes and container orchestration.",
    image: "/path/to/k8s-image.png", 
  },
  {
    title: "Advanced Docker",
    description: "Deep dive into Docker, from multi-stage builds to security.",
    image: "/path/to/docker-image.png",
  },
  {
    title: "CI/CD with Jenkins",
    description: "Master continuous integration and delivery with Jenkins.",
    image: "/path/to/jenkins-image.png",
  },
  {
    title: "Terraform for Infrastructure as Code",
    description: "Manage your infrastructure with Terraform and IaC principles.",
    image: "/path/to/terraform-image.png",
  },
];

const Courses = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Our Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{course.description}</p>
              </CardContent>
              <CardFooter>
                <Button>View Course</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Courses;
