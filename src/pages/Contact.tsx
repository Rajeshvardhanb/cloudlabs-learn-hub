import AnimatedPage from "@/components/AnimatedPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <form>
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea id="message" placeholder="Tell us more about your inquiry..." className="min-h-[150px]" />
                  </div>
                  <Button size="lg" className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-base font-semibold py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Hours */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-md">
                        <Mail className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href="mailto:support@infinitelycloudlabs.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">support@infinitelycloudlabs.com</a>
                    </div>
                  </li>
                   <li className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-md">
                        <Phone className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-sm text-muted-foreground">+91 (XXX) XXX-XXXX</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-md">
                        <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-sm text-muted-foreground">Hyderabad, Telangana<br />India</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
                <div className="flex justify-between text-sm text-muted-foreground mb-2"><span>Monday - Friday</span> <span className="font-medium">9AM - 6PM</span></div>
                <div className="flex justify-between text-sm text-muted-foreground mb-2"><span>Saturday</span> <span className="font-medium">10AM - 4PM</span></div>
                <div className="flex justify-between text-sm text-muted-foreground"><span>Sunday</span> <span className="font-medium">Closed</span></div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8">
          <Card>
            <CardContent className="p-4 h-96 flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-gray-800/50 rounded-lg">
               <MapPin className="h-10 w-10 text-muted-foreground mb-4" />
               <h3 className="text-lg font-semibold">Map embed placeholder</h3>
               <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Contact;
