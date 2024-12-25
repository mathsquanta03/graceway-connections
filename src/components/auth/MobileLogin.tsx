import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";

const MobileLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showQR, setShowQR] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    otp: "",
  });
  const [showOtpInput, setShowOtpInput] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.mobile || formData.mobile.length < 10) {
      toast({
        title: "Error",
        description: "Please enter a valid mobile number",
        variant: "destructive",
      });
      return;
    }

    // Mock API call to send OTP
    try {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.otp || formData.otp.length !== 6) {
      toast({
        title: "Error",
        description: "Please enter a valid 6-digit OTP",
        variant: "destructive",
      });
      return;
    }

    // Mock API call to verify OTP and register/login
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      localStorage.setItem("isAuthenticated", "true");
      toast({
        title: "Success",
        description: isLogin ? "Login successful!" : "Registration successful!",
      });
      navigate("/admin");
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid OTP. Please try again.",
        variant: "destructive",
      });
    }
  };

  const generateQRValue = () => {
    return `${window.location.origin}/auth/register?token=${Math.random().toString(36).substring(2)}`;
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-6 p-4 bg-gray-50">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-church-navy text-center">
          {isLogin ? "Login" : "Register"}
        </h2>

        <div className="flex justify-between gap-2 mb-6">
          <Button
            type="button"
            variant="outline"
            className={`flex-1 ${!showQR ? "bg-church-gold text-white" : ""}`}
            onClick={() => setShowQR(false)}
          >
            {isLogin ? "Phone Login" : "Form Registration"}
          </Button>
          {!isLogin && (
            <Button
              type="button"
              variant="outline"
              className={`flex-1 ${showQR ? "bg-church-gold text-white" : ""}`}
              onClick={() => setShowQR(true)}
            >
              QR Registration
            </Button>
          )}
        </div>

        {!showQR ? (
          <form onSubmit={showOtpInput ? handleSubmit : handleSendOtp} className="space-y-4">
            {!isLogin && (
              <>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full"
                    required
                  />
                </div>
              </>
            )}

            <div className="space-y-2">
              <label htmlFor="mobile" className="text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Enter your mobile number"
                className="w-full"
                disabled={showOtpInput}
                required
              />
            </div>

            {showOtpInput && (
              <div className="space-y-2">
                <label htmlFor="otp" className="text-sm font-medium text-gray-700">
                  Enter OTP
                </label>
                <Input
                  id="otp"
                  name="otp"
                  type="text"
                  value={formData.otp}
                  onChange={handleInputChange}
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  className="w-full"
                  required
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
        ) : (
          <div className="flex flex-col items-center space-y-4">
            <QRCodeSVG value={generateQRValue()} size={200} />
            <p className="text-sm text-gray-600 text-center">
              Scan this QR code with your mobile device to register
            </p>
          </div>
        )}

        <div className="text-center">
          <Button
            type="button"
            variant="link"
            onClick={() => {
              setIsLogin(!isLogin);
              setShowOtpInput(false);
              setShowQR(false);
              setFormData({ name: "", email: "", mobile: "", otp: "" });
            }}
            className="text-church-navy hover:text-church-navy/80"
          >
            {isLogin ? "New user? Register here" : "Already registered? Login here"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileLogin;