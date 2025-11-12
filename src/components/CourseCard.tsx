import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, Signal } from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  progress?: number;
  image?: string;
}

const difficultyColors = {
  Beginner: "bg-green-100 text-green-700 border-green-200",
  Intermediate: "bg-yellow-100 text-yellow-700 border-yellow-200",
  Advanced: "bg-red-100 text-red-700 border-red-200",
};

const CourseCard = ({
  id,
  title,
  description,
  duration,
  difficulty,
  category,
  progress,
  image,
}: CourseCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-elevated duration-500 border-border/50 bg-gradient-card rounded-xl sm:rounded-2xl animate-scale-in">
      <div className="relative h-40 sm:h-48 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-110 duration-500"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-4xl sm:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent opacity-20 group-hover:opacity-30 transition-opacity duration-300">
            {title.charAt(0)}
          </div>
        )}
        <Badge className={`absolute right-2 sm:right-3 top-2 sm:top-3 ${difficultyColors[difficulty]} shadow-md text-xs`}>
          <Signal className="mr-1 h-3 w-3" />
          {difficulty}
        </Badge>
      </div>

      <CardHeader className="space-y-2 sm:space-y-3 pb-3 sm:pb-4 p-4 sm:p-6">
        <Badge variant="secondary" className="w-fit text-xs shadow-sm">
          {category}
        </Badge>
        <h3 className="line-clamp-2 text-base sm:text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">{title}</h3>
      </CardHeader>

      <CardContent className="space-y-3 sm:space-y-4 pb-4 sm:pb-6 px-4 sm:px-6">
        <p className="line-clamp-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{description}</p>
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
          <div className="p-1 sm:p-1.5 rounded-md bg-primary/10">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
          </div>
          <span>{duration}</span>
        </div>

        {progress !== undefined && (
          <div className="space-y-2 p-2.5 sm:p-3 rounded-lg bg-gradient-hero">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-muted-foreground">Progress</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent font-bold">{progress}%</span>
            </div>
            <Progress value={progress} className="h-1.5 sm:h-2 shadow-sm" />
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
        <Link to={`/course/${id}`} className="w-full">
          <Button className="w-full shadow-card hover:shadow-hover transition-all duration-300 text-sm sm:text-base h-9 sm:h-10" variant={progress !== undefined ? "outline" : "default"}>
            {progress !== undefined ? "Continue Learning" : "View Details"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
