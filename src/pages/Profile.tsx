import AnimatedPage from "@/components/AnimatedPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Your Profile
        </h1>
        <div className="flex flex-col items-center">
          <Avatar className="w-24 h-24 mb-4">
            <AvatarImage src="/path/to/user-avatar.png" alt="User Name" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <form className="w-full max-w-sm">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <Input id="name" defaultValue="Test User" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <Input id="email" type="email" defaultValue="test@example.com" />
            </div>
            <div className="mb-6">
              <label htmlFor="password">
                Change Password
              </label>
              <Input id="password" type="password" placeholder="New Password" />
            </div>
            <Button className="w-full">Update Profile</Button>
          </form>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Profile;
