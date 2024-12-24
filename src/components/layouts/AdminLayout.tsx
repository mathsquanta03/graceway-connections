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
      <AdminNavbar toggleSidebar={toggleSidebar} />
      <AdminSidebar isOpen={sidebarOpen} />
      <div
        className={`flex flex-col min-h-screen ${
          sidebarOpen ? "lg:ml-64" : "lg:ml-16"
        } transition-margin duration-300`}
      >
        <main className="flex-1 px-4 pt-20 pb-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;