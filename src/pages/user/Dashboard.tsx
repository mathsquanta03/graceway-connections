import { Card } from "@/components/ui/card";
import { getCurrentUser } from "@/utils/mockUsers";
import { Bell, Calendar, MessageSquare } from "lucide-react";

const UserDashboard = () => {
  const user = getCurrentUser();

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-bold text-church-navy">Welcome Back!</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center space-x-4">
            <Calendar className="h-8 w-8 text-church-gold" />
            <div>
              <h3 className="font-semibold">Next Meeting</h3>
              <p className="text-sm text-gray-600">December 25, 2024</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center space-x-4">
            <MessageSquare className="h-8 w-8 text-church-gold" />
            <div>
              <h3 className="font-semibold">Latest Announcement</h3>
              <p className="text-sm text-gray-600">Christmas Service</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center space-x-4">
            <Bell className="h-8 w-8 text-church-gold" />
            <div>
              <h3 className="font-semibold">Active Polls</h3>
              <p className="text-sm text-gray-600">2 polls need your response</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;