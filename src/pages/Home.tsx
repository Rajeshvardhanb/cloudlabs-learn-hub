
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
          {/* Desktop Logo Section */}
          <div className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
            <div className="z-10 text-center animate-fade-in-down">
              <img
                src={logo}
                alt="Infinity Cloud Labs Logo"
                className="w-96 h-96 mx-auto mb-8 drop-shadow-2xl transition-transform hover:scale-105 duration-500"
              />
              <h1 className="text-5xl font-heading font-extrabold tracking-tight bg-gradient-primary bg-clip-text text-transparent">
                INFINITY CLOUD LABS
              </h1>
              <p className="mt-4 text-lg text-muted-foreground font-medium">
                The future of cloud learning, today.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full">
              <Wave />
            </div>
          </div>

          {/* Welcome Section - Mobile & Desktop */}
          <div className="flex items-center justify-center p-6 sm:p-8 md:p-12 bg-gradient-accent min-h-[calc(100vh-4rem)]">
            <div className="text-center max-w-md animate-fade-in-up">
              {/* Mobile Logo */}
              <img
                src={logo}
                alt="Infinity Cloud Labs Logo"
                className="w-32 h-32 mx-auto mb-6 drop-shadow-2xl lg:hidden"
              />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-accent-foreground leading-tight">
                Welcome to the Cloud
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-accent-foreground/80 px-4 sm:px-0">
                Your journey to mastering cloud technologies starts right here. Log in to access your dashboard or get started for free.
              </p>
              <div className="mt-8 sm:mt-10 flex items-center justify-center gap-x-6">
                <Link to="/auth">
                  <Button
                    size="lg"
                    className="shadow-hover hover:shadow-glow transition-all duration-300 h-12 px-8"
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
