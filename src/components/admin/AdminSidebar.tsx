import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Vote,
} from "lucide-react";

interface AdminSidebarProps {
  isOpen: boolean;
}

const AdminSidebar = ({ isOpen }: AdminSidebarProps) => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
    { icon: Calendar, label: "Events", path: "/admin/events" },
    { icon: MessageSquare, label: "Announcements", path: "/admin/announcements" },
    { icon: Vote, label: "Polls", path: "/admin/polls" },
    { icon: Settings, label: "Settings", path: "/admin/settings" },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 z-20 h-full pt-16 flex lg:flex flex-shrink-0 flex-col transition-width duration-300 ${
        isOpen ? "w-64" : "w-16"
      } bg-church-navy`}
    >
      <div className="relative flex-1 flex flex-col min-h-0 pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-white hover:bg-church-gold/10 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <item.icon className="h-6 w-6 mr-4 text-church-gold" />
                <span
                  className={`${
                    !isOpen && "hidden"
                  } transition-opacity duration-300`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;