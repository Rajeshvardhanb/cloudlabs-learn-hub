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
import { Infinity, Phone, LogOut, User as UserIcon, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink } from "@/components/NavLink";

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
    <header className="sticky top-0 z-50 w-full bg-gradient-accent backdrop-blur-md shadow-elevated border-b border-border/10">
      <div className="w-full flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
        <Link to={user ? "/dashboard" : "/"} className="flex items-center gap-2 sm:gap-3 group">
          <Infinity className="h-6 w-6 sm:h-8 sm:w-8 text-accent-foreground transition-transform group-hover:rotate-180 duration-500" />
          <span className="text-sm sm:text-base md:text-lg font-bold tracking-wider bg-gradient-primary bg-clip-text text-transparent group-hover:opacity-80 transition-opacity truncate">
            INFINITY CLOUD LABS
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="flex items-center gap-2 py-2 px-3 text-sm font-medium transition-all duration-300 rounded-lg relative overflow-hidden group text-accent-foreground/60 hover:text-accent-foreground hover:bg-accent-foreground/5"
                activeClassName="text-accent-foreground before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-primary"
              >
                {link.icon && <link.icon className="h-4 w-4" />}
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>
                    Explore the INFINITY CLOUD LABS
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className="flex items-center gap-2 py-2 px-3 text-lg font-medium transition-all duration-300 rounded-lg text-accent-foreground/60 hover:text-accent-foreground hover:bg-accent-foreground/5"
                      activeClassName="text-accent-foreground bg-accent-foreground/10"
                    >
                      {link.icon && <link.icon className="h-5 w-5" />}
                      {link.label}
                    </NavLink>
                  ))}
                </nav>
                <div className="mt-8">
                  {user ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="relative h-10 w-10 rounded-full transition-transform hover:scale-105 duration-300"
                        >
                          <Avatar className="h-10 w-10 border-2 border-primary shadow-glow">
                            <AvatarImage src={user.image} alt={user.name} />
                            <AvatarFallback className="bg-gradient-primary font-bold text-primary-foreground">
                              {user.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="w-56 rounded-xl border border-border/20 bg-gradient-accent shadow-elevated backdrop-blur-xl"
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
                    <div className="flex flex-col gap-3">
                      <Link to="/auth">
                        <Button
                          variant="outline"
                          className="w-full border-primary/50 text-accent-foreground hover:bg-primary hover:text-primary-foreground shadow-card hover:shadow-hover transition-all duration-300"
                        >
                          Login
                        </Button>
                      </Link>
                      <Link to="/auth">
                        <Button
                          className="w-full shadow-card hover:shadow-glow transition-all duration-300"
                        >
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full transition-transform hover:scale-105 duration-300"
                  >
                    <Avatar className="h-10 w-10 border-2 border-primary shadow-glow">
                      <AvatarImage src={user.image} alt={user.name} />
                      <AvatarFallback className="bg-gradient-primary font-bold text-primary-foreground">
                        {user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 rounded-xl border border-border/20 bg-gradient-accent shadow-elevated backdrop-blur-xl"
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
              <div className="flex items-center gap-3">
                <Link to="/auth">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 text-accent-foreground hover:bg-primary hover:text-primary-foreground shadow-card hover:shadow-hover transition-all duration-300"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button
                    size="sm"
                    className="shadow-card hover:shadow-glow transition-all duration-300"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
