import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cloud, Lock, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { toast } from "sonner";

const Auth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate Firebase auth
    setTimeout(() => {
      toast.success("Login successful!");
      navigate("/dashboard");
      setIsLoading(false);
    }, 1000);
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate Firebase auth
    setTimeout(() => {
      toast.success("Account created! Welcome aboard!");
      navigate("/dashboard");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Hero Section */}
      <div className="relative hidden lg:flex flex-col justify-center p-12 bg-gradient-hero border-r">
        <div className="max-w-lg space-y-6">
          <img src={logo} alt="INFINITELY CLOUD LABS" className="h-16 w-auto mb-8" />
          
          <h1 className="text-4xl font-heading font-bold leading-tight">
            Learn. Build. Secure the Cloud.
          </h1>
          
          <p className="text-lg text-muted-foreground">
            Join thousands of students mastering AWS and DevSecOps with expert-led online training.
          </p>

          <div className="space-y-4 pt-8">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Industry-Leading Curriculum</h3>
                <p className="text-sm text-muted-foreground">
                  Learn from AWS experts and security professionals
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Hands-On Projects</h3>
                <p className="text-sm text-muted-foreground">
                  Build real-world cloud infrastructure and security pipelines
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-12 text-sm text-muted-foreground">
          Powered by Firebase Authentication
        </div>
      </div>

      {/* Auth Forms */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center lg:hidden mb-8">
            <img src={logo} alt="INFINITELY CLOUD LABS" className="h-12 w-auto mx-auto mb-4" />
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Welcome Back</CardTitle>
                  <CardDescription>
                    Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="login-email"
                          type="email"
                          placeholder="your@email.com"
                          className="pl-9"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="login-password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-9"
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="button"
                      variant="link"
                      className="h-auto p-0 text-sm"
                    >
                      Forgot password?
                    </Button>

                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Signing in..." : "Sign In"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="signup">
              <Card>
                <CardHeader>
                  <CardTitle>Create Account</CardTitle>
                  <CardDescription>
                    Start your cloud learning journey today
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name">Full Name</Label>
                      <Input
                        id="signup-name"
                        type="text"
                        placeholder="Rajesh Kumar"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="your@email.com"
                          className="pl-9"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="signup-password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-9"
                          required
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Creating account..." : "Create Account"}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      By signing up, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <p className="text-center text-sm text-muted-foreground">
            Need help? Contact{" "}
            <a href="mailto:support@infinitelycloudlabs.com" className="text-primary hover:underline">
              support@infinitelycloudlabs.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
