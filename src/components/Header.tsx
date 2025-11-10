import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Infinity, Phone, LogOut, User as UserIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/courses", label: "Courses" },
  { to: "/docs", label: "Documentation" },
  { to: "/instructors", label: "Instructors" },
  { to: "/contact", icon: Phone, label: "Contact" },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState<{ name: string; email: string; image: string } | null>(
    null
  );

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/auth");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-accent text-accent-foreground">
      <div className="container flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <Infinity className="h-8 w-8 text-white" />
          <span className="text-lg font-bold tracking-wider text-white">
            INFINITY CLOUD LABS
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "flex items-center gap-2 py-2 text-sm font-medium transition-colors hover:text-white",
                  location.pathname.startsWith(link.to)
                    ? "border-b-2 border-primary text-white"
                    : "text-gray-400"
                )}
              >
                {link.icon && <link.icon className="h-4 w-4" />}
                {link.label}
              </Link>
            ))}
          </nav>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full"
                >
                  <Avatar className="h-10 w-10 border-2 border-primary/50">
                    <AvatarImage src={user.image} alt={user.name} />
                    <AvatarFallback className="bg-primary font-bold text-primary-foreground">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 rounded-xl border-none bg-accent shadow-lg"
                align="end"
                forceMount
              >
                <DropdownMenuItem asChild>
                  <Link
                    to="/profile"
                    className="flex w-full cursor-pointer items-center rounded-md text-accent-foreground hover:bg-white/10"
                  >
                    <UserIcon className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-white/20" />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="cursor-pointer rounded-md text-accent-foreground hover:bg-red-500/20 hover:text-red-400"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/auth">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Login
                </Button>
              </Link>
              <Link to="/auth">
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
