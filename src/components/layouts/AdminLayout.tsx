import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../admin/AdminNavbar";
import AdminSidebar from "../admin/AdminSidebar";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar toggleSidebar={toggleSidebar} isSidebarOpen={sidebarOpen} />
      <AdminSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex flex-col min-h-screen transition-all duration-300 ease-in-out ${
          sidebarOpen ? "md:ml-64" : "md:ml-16"
        }`}
      >
        <main className="flex-1 p-4 mt-16">
          <div className="container mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;