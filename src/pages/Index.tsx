import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cloud, Shield, Users, BookOpen, Award, TrendingUp } from "lucide-react";
import logo from "@/assets/logo.png";

const Index = () => {
  const features = [
    {
      icon: Cloud,
      title: "AWS Expertise",
      description: "Master AWS services with hands-on projects and real-world scenarios from certified professionals.",
    },
    {
      icon: Shield,
      title: "DevSecOps Focus",
      description: "Learn to build secure CI/CD pipelines and integrate security at every stage of development.",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry veterans with years of experience in cloud security and infrastructure.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Structured learning paths from fundamentals to advanced topics with practical exercises.",
    },
    {
      icon: Award,
      title: "Certification Ready",
      description: "Prepare for industry-recognized certifications with our comprehensive training programs.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Gain in-demand skills that accelerate your career in cloud computing and security.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero border-b">
        <div className="container px-4 py-20 lg:py-32">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <img src={logo} alt="INFINITELY CLOUD LABS" className="h-20 w-auto mx-auto" />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Learn. Build. Secure the Cloud.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Master AWS and DevSecOps with expert-led online training. Build real-world projects,
              earn certifications, and accelerate your cloud career.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="text-base">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="text-base">
                  Explore Courses
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-muted-foreground">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose INFINITELY CLOUD LABS?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading training designed to transform you into a cloud security expert
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all">
                <CardContent className="pt-6 space-y-4">
                  <div className="rounded-lg bg-primary/10 p-3 w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero border-y">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Ready to Start Your Cloud Journey?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of students who have transformed their careers with our training programs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link to="/auth">
                <Button size="lg">Create Free Account</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
