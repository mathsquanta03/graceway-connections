import React from "react";

const AdminDashboard = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-church-navy mb-6">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
          <p className="text-gray-600">3 events this week</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Active Polls</h2>
          <p className="text-gray-600">2 ongoing polls</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Recent Announcements</h2>
          <p className="text-gray-600">5 new announcements</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;