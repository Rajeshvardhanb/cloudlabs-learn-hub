import AnimatedPage from "@/components/AnimatedPage";

const Dashboard = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Welcome to Your Dashboard
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          This is your central hub for all activities. You can view your
          courses, track your progress, and manage your account settings from
          here.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              My Courses
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Browse and access all the courses you are currently enrolled in.
            </p>
            <button className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              View Courses
            </button>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Recent Activity
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Check your latest interactions, achievements, and notifications.
            </p>
            <button className="mt-4 rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600">
              Show Activity
            </button>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Profile Settings
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Update your personal information and communication preferences.
            </p>
            <button className="mt-4 rounded-md bg-purple-500 px-4 py-2 text-white hover:bg-purple-600">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Dashboard;
