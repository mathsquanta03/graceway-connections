import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const AdminEvents = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-church-navy">Manage Events</h1>
        <Button className="bg-church-gold text-church-navy hover:bg-church-gold/90">
          <Plus className="mr-2 h-4 w-4" /> Create Event
        </Button>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">No events created yet.</p>
      </div>
    </div>
  );
};

export default AdminEvents;