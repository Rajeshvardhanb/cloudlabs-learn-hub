import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/logo.png";
import { toast } from "sonner";
import Wave from "@/components/ui/wave";
import { useState } from "react";

const Auth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      // Simulate storing user data in localStorage
      localStorage.setItem("user", JSON.stringify({ name: "Rajesh" }));
      toast.success("Login successful!");
      navigate("/dashboard");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        {/* Left Panel (Branding) */}
        <div className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.1] z-0"></div>
          <div className="z-10 text-center">
            <img src={logo} alt="Infinity Cloud Labs Logo" className="w-32 h-32 mx-auto mb-6" />
            <h1 className="text-5xl font-extrabold tracking-tight">INFINITY CLOUD LABS</h1>
            <p className="mt-4 text-lg text-gray-300">
              The future of cloud learning, today.
            </p>
          </div>
        </div>

        {/* Right Panel (Login Form) */}
        <div className="flex items-center justify-center p-8 bg-gray-50">
          <div className="w-full max-w-sm">
            <div className="bg-white p-8 rounded-xl shadow-2xl">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Sign In</h1>
                <p className="text-gray-500 mt-2">Welcome back! Please enter your credentials.</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="rajesh@example.com"
                    required
                    className="bg-gray-100 border-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    defaultValue="password"
                    className="bg-gray-100 border-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:scale-105 transition-transform duration-300"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Wave />
    </div>
  );
};

export default Auth;
