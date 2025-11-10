import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Infinity } from "lucide-react";

interface HeaderProps {
  user?: { name: string } | null;
}

const Header = ({ user = null }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="flex h-20 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <Infinity className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-gray-800">
            INFINITY CLOUD LABS
          </span>
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <Avatar className="h-9 w-9">
              <AvatarFallback className="bg-primary text-primary-foreground">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/auth">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="sm">Get Started</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
