import { Link, useNavigate } from "react-router-dom";
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
      toast.success("Login successful!");
      navigate("/dashboard");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="relative min-h-screen w-full grid lg:grid-cols-2 bg-white">

      {/* Left Panel */}
      <div className="relative hidden lg:flex flex-col items-center justify-center text-center p-12">
        <div className="relative z-10 flex flex-col items-center">
          <img src={logo} alt="Infinity Cloud Labs" className="mb-6 h-20 w-auto" />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Learn. Build. Secure the Cloud.
          </h1>
          <p className="text-sm text-gray-500 mb-8">Designed By Infinitely Cloud Labs</p>
          <blockquote className="text-lg text-gray-600 italic max-w-md">
            <p className="before:content-['\201C'] after:content-['\201D']">
              DevOps is not a goal, but a never-ending process of continual improvement.
            </p>
            <cite className="block text-right not-italic mt-2 text-sm">- Jez Humble</cite>
          </blockquote>
        </div>
        <Wave />
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
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="bg-gray-100 border-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="text-right">
                <Link
                  to="#"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot Password?
                </Link>
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
  );
};

export default Auth;
