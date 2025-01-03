import React from "react";
import { LogOut, Settings, User } from "lucide-react";
import { getCurrentUser, getGreeting } from "@/utils/mockUsers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import NotificationBell from "@/components/notifications/NotificationBell";

interface AdminNavbarProps {
  toggleSidebar: () => void;
  isSidebarOpen?: boolean;
}

const AdminNavbar = ({
  toggleSidebar,
  isSidebarOpen = true,
}: AdminNavbarProps) => {
  const currentUser = getCurrentUser();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
    });
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-church-navy">
      <div className="px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="ml-4 text-xl font-semibold text-white">
            Graceway Church Admin
          </h1>
        </div>

        {currentUser && (
          <div className="flex items-center gap-4">
            <NotificationBell />
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-church-gold text-church-navy flex items-center justify-center">
                  {currentUser.initials}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  {getGreeting(currentUser.name.split(" ")[0])}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/admin/settings")}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AdminNavbar;