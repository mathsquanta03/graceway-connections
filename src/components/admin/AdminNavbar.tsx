import React from "react";
import { Bell, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface AdminNavbarProps {
  toggleSidebar: () => void;
}

const AdminNavbar = ({ toggleSidebar }: AdminNavbarProps) => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-30 top-0">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <Button
              variant="ghost"
              className="inline-flex mr-3"
              onClick={toggleSidebar}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <span className="text-xl font-semibold flex items-center lg:ml-2.5">
              <span className="text-church-gold">Graceway</span>
              <span className="text-church-navy ml-2">Admin</span>
            </span>
          </div>
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative w-8 h-8 rounded-full"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>New Event Created</DropdownMenuItem>
                <DropdownMenuItem>New Announcement</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;