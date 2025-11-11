import AnimatedPage from "@/components/AnimatedPage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Profile = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Account Settings</h1>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile">
                <Card>
                    <CardHeader>
                        <CardTitle>Profile Information</CardTitle>
                        <CardDescription>Update your personal details here.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <Avatar className="h-24 w-24">
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>RJ</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                                 <Button>Change Photo</Button>
                                 <p className="text-xs text-muted-foreground">JPG, GIF or PNG. 1MB max.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" defaultValue="Rajesh Kumar" />
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" defaultValue="rajesh.kumar@example.com" disabled />
                            </div>
                            <div>
                                <Label htmlFor="title">Job Title</Label>
                                <Input id="title" defaultValue="Cloud Engineer" />
                            </div>
                            <div>
                                <Label htmlFor="company">Company</Label>
                                <Input id="company" defaultValue="Infinite Cloud" />
                            </div>
                        </div>
                         <div className="flex justify-end">
                            <Button>Save Changes</Button>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>

            {/* Password Tab */}
            <TabsContent value="password">
                <Card>
                    <CardHeader>
                        <CardTitle>Change Password</CardTitle>
                        <CardDescription>Update your password here. It's a good idea to use a strong password that you're not using elsewhere.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <Label htmlFor="current-password">Current Password</Label>
                            <Input id="current-password" type="password" />
                        </div>
                        <div>
                            <Label htmlFor="new-password">New Password</Label>
                            <Input id="new-password" type="password" />
                        </div>
                        <div>
                            <Label htmlFor="confirm-password">Confirm New Password</Label>
                            <Input id="confirm-password" type="password" />
                        </div>
                        <div className="flex justify-end">
                            <Button>Update Password</Button>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications">
                 <Card>
                    <CardHeader>
                        <CardTitle>Notification Settings</CardTitle>
                        <CardDescription>Manage how you receive notifications.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                             <Label>Email Notifications</Label>
                             <Select defaultValue="all">
                                <SelectTrigger className="w-[280px]">
                                    <SelectValue placeholder="Select a notification level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Notifications</SelectItem>
                                    <SelectItem value="mentions">Only @mentions and replies</SelectItem>
                                    <SelectItem value="none">Nothing</SelectItem>
                                </SelectContent>
                             </Select>
                             <p className="text-sm text-muted-foreground mt-2">Choose how much email you want to receive from us.</p>
                        </div>
                         <div className="flex items-center space-x-2">
                            <Input type="checkbox" id="new-course" defaultChecked />
                             <Label htmlFor="new-course">New course announcements</Label>
                        </div>
                         <div className="flex items-center space-x-2">
                            <Input type="checkbox" id="newsletter" defaultChecked/>
                            <Label htmlFor="newsletter">Monthly product newsletter</Label>
                        </div>
                         <div className="flex justify-end mt-4">
                            <Button>Save Preferences</Button>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>

             {/* Billing Tab */}
            <TabsContent value="billing">
                <Card>
                    <CardHeader>
                        <CardTitle>Billing Information</CardTitle>
                        <CardDescription>Manage your payment methods and view your invoice history.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">No billing information on file.</p>
                        {/* Future billing content can go here */}
                    </CardContent>
                </Card>
            </TabsContent>
          </Tabs>
      </div>
    </AnimatedPage>
  );
};

export default Profile;
