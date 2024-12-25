import React from "react";
import { Card } from "@/components/ui/card";
import { Users, Calendar, Bell, TrendingUp } from "lucide-react";

const Dashboard = () => {
  // Mock data for monthly metrics
  const monthlyMetrics = {
    totalAttendance: 145,
    newMembers: 8,
    announcements: 3,
    monthlyGrowth: "+12%",
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-church-navy">Monthly Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4 flex items-center space-x-4">
          <div className="p-3 bg-church-gold/10 rounded-full">
            <Users className="h-6 w-6 text-church-gold" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Monthly Attendance</p>
            <h3 className="text-2xl font-bold text-church-navy">{monthlyMetrics.totalAttendance}</h3>
          </div>
        </Card>

        <Card className="p-4 flex items-center space-x-4">
          <div className="p-3 bg-church-gold/10 rounded-full">
            <TrendingUp className="h-6 w-6 text-church-gold" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Growth Rate</p>
            <h3 className="text-2xl font-bold text-church-navy">{monthlyMetrics.monthlyGrowth}</h3>
          </div>
        </Card>

        <Card className="p-4 flex items-center space-x-4">
          <div className="p-3 bg-church-gold/10 rounded-full">
            <Users className="h-6 w-6 text-church-gold" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">New Members</p>
            <h3 className="text-2xl font-bold text-church-navy">{monthlyMetrics.newMembers}</h3>
          </div>
        </Card>

        <Card className="p-4 flex items-center space-x-4">
          <div className="p-3 bg-church-gold/10 rounded-full">
            <Bell className="h-6 w-6 text-church-gold" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Announcements</p>
            <h3 className="text-2xl font-bold text-church-navy">{monthlyMetrics.announcements}</h3>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;