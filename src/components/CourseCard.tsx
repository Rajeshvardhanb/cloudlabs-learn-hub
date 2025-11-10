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
    <Card className="group overflow-hidden transition-all hover:shadow-hover">
      <div className="relative h-48 overflow-hidden bg-gradient-hero">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-4xl font-bold text-primary/20">
            {title.charAt(0)}
          </div>
        )}
        <Badge className={`absolute right-3 top-3 ${difficultyColors[difficulty]}`}>
          <Signal className="mr-1 h-3 w-3" />
          {difficulty}
        </Badge>
      </div>

      <CardHeader className="space-y-2">
        <Badge variant="secondary" className="w-fit text-xs">
          {category}
        </Badge>
        <h3 className="line-clamp-2 text-xl font-bold leading-tight">{title}</h3>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{duration}</span>
        </div>

        {progress !== undefined && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Link to={`/course/${id}`} className="w-full">
          <Button className="w-full" variant={progress !== undefined ? "outline" : "default"}>
            {progress !== undefined ? "Continue Learning" : "View Details"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
