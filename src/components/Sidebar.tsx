import { cn } from "@/lib/utils";
import { NavLink } from "@/components/NavLink";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  User,
  Mail,
  Users,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  className?: string;
  isCollapsed: boolean;
  onToggle: () => void;
}

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Documentation", href: "/docs", icon: FileText },
  { name: "Instructors", href: "/instructors", icon: Users },
  { name: "Contact", href: "/contact", icon: Mail },
  { name: "Profile", href: "/profile", icon: User },
];

const Sidebar = ({ className, isCollapsed, onToggle }: SidebarProps) => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/auth";
  };

  return (
    <aside
      className={cn(
        "fixed left-0 top-20 z-40 h-[calc(100vh-5rem)] border-r bg-card transition-all duration-300",
        isCollapsed ? "w-20" : "w-72",
        className
      )}
    >
      <div className="flex h-full flex-col items-center gap-4 py-4">
        <div className="flex-1 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className="flex items-center justify-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              activeClassName="bg-primary/10 text-primary hover:bg-primary/15"
            >
              <item.icon className="h-5 w-5" />
              <span
                className={cn(
                  "overflow-hidden transition-all",
                  isCollapsed ? "w-0" : "w-full"
                )}
              >
                {item.name}
              </span>
            </NavLink>
          ))}
        </div>

        <div className="mt-auto">
          <Button
            variant="ghost"
            className="w-full justify-center gap-3"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            <span
              className={cn(
                "overflow-hidden transition-all",
                isCollapsed ? "w-0" : "w-full"
              )}
            >
              Logout
            </span>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-5 top-1/2 -translate-y-1/2 rounded-full border"
          onClick={onToggle}
        >
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
