import AnimatedPage from "@/components/AnimatedPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const instructors = [
  {
    name: "John Doe",
    title: "Lead Instructor, Cloud Engineering",
    avatar: "/path/to/john-doe.png",
  },
  {
    name: "Jane Smith",
    title: "Senior Instructor, DevOps",
    avatar: "/path/to/jane-smith.png",
  },
  {
    name: "Emily Johnson",
    title: "Instructor, Software Development",
    avatar: "/path/to/emily-johnson.png",
  },
];

const Instructors = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Our Instructors
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src={instructor.avatar} alt={instructor.name} />
                  <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{instructor.name}</CardTitle>
                  <p className="text-sm text-gray-500">{instructor.title}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Instructors;
