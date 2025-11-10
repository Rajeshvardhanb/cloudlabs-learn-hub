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
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Documentation", href: "/docs", icon: FileText },
  { name: "Instructors", href: "/instructors", icon: Users },
  { name: "Contact", href: "/contact", icon: Mail },
  { name: "Profile", href: "/profile", icon: User },
];

const Sidebar = ({ isOpen = true, onClose }: SidebarProps) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-card transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="flex h-full flex-col gap-2 p-4">
          <div className="flex-1 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                activeClassName="bg-primary/10 text-primary hover:bg-primary/15"
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </NavLink>
            ))}
          </div>

          <Button
            variant="ghost"
            className="justify-start gap-3 text-destructive hover:bg-destructive/10 hover:text-destructive"
            onClick={() => {
              // Handle logout
              window.location.href = "/auth";
            }}
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
