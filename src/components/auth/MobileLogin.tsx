import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const MobileLogin = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const { toast } = useToast();

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobileNumber || mobileNumber.length < 10) {
      toast({
        title: "Error",
        description: "Please enter a valid mobile number",
        variant: "destructive",
      });
      return;
    }

    // Mock API call to send OTP
    try {
      // Simulating API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setShowOtpInput(true);
      toast({
        title: "OTP Sent",
        description: "Please check your mobile for the OTP",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send OTP. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp || otp.length !== 6) {
      toast({
        title: "Error",
        description: "Please enter a valid 6-digit OTP",
        variant: "destructive",
      });
      return;
    }

    // Mock API call to verify OTP
    try {
      // Simulating API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "Success",
        description: "Login successful!",
      });
      // Here you would typically redirect to the dashboard or home page
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid OTP. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-4">
      <h2 className="text-2xl font-bold text-church-navy">Login with Mobile</h2>
      <form onSubmit={showOtpInput ? handleVerifyOtp : handleSendOtp} className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <label htmlFor="mobile" className="text-sm font-medium text-gray-700">
            Mobile Number
          </label>
          <Input
            id="mobile"
            type="tel"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter your mobile number"
            className="w-full"
            disabled={showOtpInput}
          />
        </div>

        {showOtpInput && (
          <div className="space-y-2">
            <label htmlFor="otp" className="text-sm font-medium text-gray-700">
              Enter OTP
            </label>
            <Input
              id="otp"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              className="w-full"
            />
          </div>
        )}

        <Button
          type="submit"
          className="w-full bg-church-gold hover:bg-church-gold/90"
        >
          {showOtpInput ? "Verify OTP" : "Send OTP"}
        </Button>
      </form>
    </div>
  );
};

export default MobileLogin;