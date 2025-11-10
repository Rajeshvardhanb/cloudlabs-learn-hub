
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import Wave from "@/components/ui/wave";
import AnimatedPage from "@/components/AnimatedPage";

const Home = () => {
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
           <div className="text-center max-w-md">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Welcome to the Cloud
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Your journey to mastering cloud technologies starts right here. Log in to access your dashboard or get started for free.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link to="/auth">
                        <Button
                            size="lg"
                            className="bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
