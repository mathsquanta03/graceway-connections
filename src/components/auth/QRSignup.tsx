import React, { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const QRSignup = () => {
  const [email, setEmail] = useState("");
  const [qrValue, setQrValue] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    if (email) {
      // Generate a unique signup link that includes the email
      const signupLink = `${window.location.origin}/auth/verify?email=${encodeURIComponent(
        email
      )}&token=${generateToken()}`;
      setQrValue(signupLink);
    }
  }, [email]);

  const generateToken = () => {
    // Generate a random token for verification
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "QR Code Generated",
      description: "Scan the QR code with your mobile device to complete signup",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-4">
      <h2 className="text-2xl font-bold text-church-navy">Sign Up with QR Code</h2>
      <form onSubmit={handleEmailSubmit} className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full"
          />
        </div>
        <Button type="submit" className="w-full bg-church-gold hover:bg-church-gold/90">
          Generate QR Code
        </Button>
      </form>

      {qrValue && (
        <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg">
          <QRCodeSVG value={qrValue} size={200} />
          <p className="text-sm text-gray-600 text-center">
            Scan this QR code with your mobile device to complete the signup process
          </p>
        </div>
      )}
    </div>
  );
};

export default QRSignup;