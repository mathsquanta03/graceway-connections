import React from "react";
import { ChevronLeft, ChevronRight, LogOut, Settings, User } from "lucide-react";
import { getCurrentUser } from "@/utils/mockUsers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

interface AdminNavbarProps {
  toggleSidebar: () => void;
  isSidebarOpen?: boolean;
}

const AdminNavbar = ({ toggleSidebar, isSidebarOpen = true }: AdminNavbarProps) => {
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
    <nav className="fixed top-0 left-0 right-0 z-30 bg-white shadow-md">
      <div className="px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={isSidebarOpen ? "Collapse Sidebar" : "Expand Sidebar"}
          >
            {isSidebarOpen ? (
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            ) : (
              <ChevronRight className="h-6 w-6 text-gray-600" />
            )}
          </button>
          <h1 className="ml-4 text-xl font-semibold text-church-navy">
            Graceway Church Admin
          </h1>
        </div>

        {currentUser && (
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-church-gold text-white flex items-center justify-center">
                {currentUser.initials}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
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
        )}
      </div>
    </nav>
  );
};

export default AdminNavbar;