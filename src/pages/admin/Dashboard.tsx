import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, Bell } from "lucide-react";

const mockData = {
  weeklyAttendance: [
    { name: 'Sun', count: 120 },
    { name: 'Mon', count: 45 },
    { name: 'Tue', count: 50 },
    { name: 'Wed', count: 75 },
    { name: 'Thu', count: 40 },
    { name: 'Fri', count: 85 },
    { name: 'Sat', count: 95 },
  ],
  totalMembers: 450,
  upcomingEvents: 3,
  newAnnouncements: 5,
};

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-church-navy mb-6">
        Admin Dashboard
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users className="h-4 w-4 text-church-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.totalMembers}</div>
            <p className="text-xs text-muted-foreground">Active church members</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-church-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.upcomingEvents}</div>
            <p className="text-xs text-muted-foreground">Events this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Announcements</CardTitle>
            <Bell className="h-4 w-4 text-church-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.newAnnouncements}</div>
            <p className="text-xs text-muted-foreground">Posted this week</p>
          </CardContent>
        </Card>
      </div>

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Weekly Attendance</CardTitle>
        </CardHeader>
        <CardContent className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData.weeklyAttendance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#C6A961" /> {/* church-gold color */}
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;