import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Users, Calendar, Bell, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockAttendanceData = [
  { month: 'Jan', attendance: 120 },
  { month: 'Feb', attendance: 135 },
  { month: 'Mar', attendance: 125 },
  { month: 'Apr', attendance: 140 },
  { month: 'May', attendance: 130 },
  { month: 'Jun', attendance: 145 },
];

const Dashboard = () => {
  const [attendance, setAttendance] = useState("");
  const { toast } = useToast();

  const handleAttendanceSubmit = () => {
    if (!attendance) {
      toast({
        title: "Error",
        description: "Please enter attendance count",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Attendance recorded successfully",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-church-navy">Monthly Overview</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-church-gold hover:bg-church-gold/90">
              Record Attendance
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Record Monthly Attendance</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label htmlFor="attendance" className="text-sm font-medium">
                  Number of Attendees
                </label>
                <Input
                  id="attendance"
                  type="number"
                  value={attendance}
                  onChange={(e) => setAttendance(e.target.value)}
                  placeholder="Enter attendance count"
                />
              </div>
              <Button 
                className="w-full bg-church-gold hover:bg-church-gold/90"
                onClick={handleAttendanceSubmit}
              >
                Save Attendance
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4 flex items-center space-x-4">
          <div className="p-3 bg-church-gold/10 rounded-full">
            <Users className="h-6 w-6 text-church-gold" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Monthly Attendance</p>
            <h3 className="text-2xl font-bold text-church-navy">145</h3>
          </div>
        </Card>

        <Card className="p-4 flex items-center space-x-4">
          <div className="p-3 bg-church-gold/10 rounded-full">
            <TrendingUp className="h-6 w-6 text-church-gold" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Growth Rate</p>
            <h3 className="text-2xl font-bold text-church-navy">+12%</h3>
          </div>
        </Card>

        <Card className="p-4 flex items-center space-x-4">
          <div className="p-3 bg-church-gold/10 rounded-full">
            <Users className="h-6 w-6 text-church-gold" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">New Members</p>
            <h3 className="text-2xl font-bold text-church-navy">8</h3>
          </div>
        </Card>

        <Card className="p-4 flex items-center space-x-4">
          <div className="p-3 bg-church-gold/10 rounded-full">
            <Bell className="h-6 w-6 text-church-gold" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Announcements</p>
            <h3 className="text-2xl font-bold text-church-navy">3</h3>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Attendance Trends</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockAttendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="attendance" 
                stroke="#C6A962" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;