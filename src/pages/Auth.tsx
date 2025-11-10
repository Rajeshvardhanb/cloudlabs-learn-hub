
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/logo.png";
import { toast } from "sonner";
import Wave from "@/components/ui/wave";
import { useState } from "react";
import AnimatedPage from "@/components/AnimatedPage";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/firebase";

const Auth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const email = (e.target as any).email.value;
    const password = (e.target as any).password.value;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: user.displayName || user.email, // Fallback to email
          email: user.email,
          image: user.photoURL || "", // Fallback to empty string
        })
      );
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: user.displayName || user.email, // Fallback to email
          email: user.email,
          image: user.photoURL || "", // Fallback to empty string
        })
      );
      toast.success("Signed in with Google successfully!");
      navigate("/dashboard");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatedPage>
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:flex flex-col items-center justify-center bg-white p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-black/[0.05] z-0"></div>
            <div className="z-10 text-center">
              <img
                src={logo}
                alt="Infinity Cloud Labs Logo"
                className="w-96 h-96 mx-auto mb-6"
              />
              <h1 className="text-5xl font-heading font-extrabold tracking-tight text-gray-800">
                INFINITY CLOUD LABS
              </h1>
              <p className="mt-4 text-lg text-gray-500">
                The future of cloud learning, today.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full">
              <Wave />
            </div>
          </div>

          <div className="flex items-center justify-center p-8 bg-gray-50">
            <div className="w-full max-w-sm">
              <div className="bg-white p-8 rounded-xl shadow-2xl">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-800">Sign In</h1>
                  <p className="text-gray-500 mt-2">
                    Welcome back! Please enter your credentials.
                  </p>
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
                      <a
                        href="#"
                        className="text-sm text-blue-500 hover:underline"
                      >
                        Forgot password?
                      </a>
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

                <div className="mt-6">
                  <Button
                    onClick={handleGoogleSignIn}
                    className="w-full bg-red-500 text-white hover:bg-red-600"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign in with Google"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Auth;
