import React from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { getCurrentUser } from "@/utils/mockUsers";

const NotificationPreferences = () => {
  const { toast } = useToast();
  const currentUser = getCurrentUser();
  const [preferences, setPreferences] = React.useState(
    currentUser?.notificationPreferences || {
      sms: false,
      whatsapp: false,
      email: false,
    }
  );

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    setPreferences((prev) => {
      const newPreferences = { ...prev, [type]: !prev[type] };
      toast({
        title: "Preferences updated",
        description: `${type.toUpperCase()} notifications ${
          newPreferences[type] ? "enabled" : "disabled"
        }`,
      });
      return newPreferences;
    });
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="sms" className="flex flex-col">
            <span>SMS Notifications</span>
            <span className="text-sm text-gray-500">
              Receive notifications via SMS
            </span>
          </Label>
          <Switch
            id="sms"
            checked={preferences.sms}
            onCheckedChange={() => handlePreferenceChange("sms")}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="whatsapp" className="flex flex-col">
            <span>WhatsApp Notifications</span>
            <span className="text-sm text-gray-500">
              Receive notifications via WhatsApp
            </span>
          </Label>
          <Switch
            id="whatsapp"
            checked={preferences.whatsapp}
            onCheckedChange={() => handlePreferenceChange("whatsapp")}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="email" className="flex flex-col">
            <span>Email Notifications</span>
            <span className="text-sm text-gray-500">
              Receive notifications via email
            </span>
          </Label>
          <Switch
            id="email"
            checked={preferences.email}
            onCheckedChange={() => handlePreferenceChange("email")}
          />
        </div>
      </div>
    </Card>
  );
};

export default NotificationPreferences;