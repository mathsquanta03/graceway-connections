import React from "react";
import { Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
}

// Mock notifications
const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "New Event",
    message: "Monthly youth meeting this Sunday",
    timestamp: new Date(),
  },
  {
    id: "2",
    title: "Poll Closing Soon",
    message: "Don't forget to vote on next month's activities",
    timestamp: new Date(),
  },
];

const NotificationBell = () => {
  const { toast } = useToast();
  const [notifications, setNotifications] = React.useState(mockNotifications);

  const handleDeleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
    toast({
      title: "Notification deleted",
      description: "The notification has been removed",
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {notifications.length > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
              {notifications.length}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-sm text-gray-500">
            No new notifications
          </div>
        ) : (
          notifications.map((notification) => (
            <DropdownMenuItem
              key={notification.id}
              className="flex flex-col items-start p-4"
            >
              <div className="flex w-full justify-between">
                <span className="font-medium">{notification.title}</span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeleteNotification(notification.id);
                  }}
                  className="text-sm text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
              <span className="text-sm text-gray-500">{notification.message}</span>
              <span className="text-xs text-gray-400 mt-1">
                {notification.timestamp.toLocaleString()}
              </span>
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationBell;