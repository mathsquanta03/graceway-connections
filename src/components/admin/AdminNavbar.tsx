import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AdminNavbarProps {
  toggleSidebar: () => void;
  isSidebarOpen?: boolean;
}

const AdminNavbar = ({ toggleSidebar, isSidebarOpen = true }: AdminNavbarProps) => {
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
      </div>
    </nav>
  );
};

export default AdminNavbar;