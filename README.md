# Infinity Cloud Labs - Online Learning Platform

## Project Overview

Infinity Cloud Labs is a dynamic and interactive online learning platform designed to help users master cloud technologies and security best practices. The platform offers a comprehensive catalog of courses, personalized dashboards, and persistent progress tracking, providing an engaging learning experience.

This project demonstrates a modern web application built with React, Vite, TypeScript, Tailwind CSS, and Firebase (Firestore for data persistence and Authentication).

## Key Features

The Infinity Cloud Labs platform boasts a range of features aimed at providing a seamless and effective learning journey:

1.  **User Authentication & Authorization:**
    *   **Secure Login/Logout:** Users can securely log in and out of the platform.
    *   **Google Sign-in:** Convenient authentication via Google accounts.
    *   **Protected Routes:** Ensures that sensitive parts of the application (like Dashboard, Courses, Player) are only accessible to authenticated users.

2.  **Persistent Course Enrollment:**
    *   **Firestore Integration:** User enrollment data is stored securely in Google Cloud Firestore, ensuring that progress and enrolled courses persist across sessions and devices.
    *   **"Enroll Now" / "Start Learning" Logic:** Course cards and detail pages dynamically display an "Enroll Now" button for unenrolled users, which transforms into a "Start Learning" button upon enrollment.

3.  **Dynamic Course Catalog:**
    *   **Extensive Course Categories:** The platform features a wide array of categories, including: "All", "Learning Paths", "AWS", "Azure", "GCP", "Linux", "Git", "Jenkins", "Ansible", "Docker", "Kubernetes", "Prometheus & Grafana", "ELK Stack", "Terraform", "Helm", and "Argo CD".
    *   **Two-Level Filtering & Grouping:**
        *   The "All" tab groups courses by difficulty (Beginner, Intermediate, Advanced) for broad browsing.
        *   When a specific technology tab (e.g., "AWS", "Git", "Linux") is selected, all courses within that category are displayed side-by-side in a single grid, further sorted by difficulty for easy navigation.
        *   "Learning Paths" are displayed as a separate, distinct category without difficulty grouping.
    *   **Course Search Functionality:** Users can easily search for courses by title across the entire catalog.
    *   **Responsive Course Cards:** Visually appealing cards for each course, displaying title, category, difficulty, duration, and a relevant logo.

4.  **Detailed Course View:**
    *   **Dedicated Course Pages:** Each course has its own detailed page, accessible via a "View Details" button from the catalog.
    *   **Comprehensive Information:** Displays rich course content including:
        *   Course Title, Category, Difficulty, Description.
        *   Instructor details (Name, Title, Bio, Avatar).
        *   "What You'll Learn" section with key takeaways.
        *   Structured "Modules" with individual lessons (title, duration, unique IDs).
        *   Related "Resources" with external links.
        *   Course statistics (difficulty, total lessons, duration).
    *   **Enrollment Management:** The main action button on this page intelligently shows "Enroll Now" or "Start Learning" based on the user's enrollment status, with optimistic UI updates for a smooth experience.

5.  **Interactive Course Player:**
    *   **Lesson Tracking:** Users can navigate through course modules and lessons.
    *   **"Mark as Complete" Functionality:** A prominent button to mark individual lessons as completed. This status is persisted in Firestore.
    *   **Optimistic UI for Completion:** Lessons are marked as complete instantly in the UI, with background synchronization to the database.
    *   **Visual Progress:** Completed lessons are indicated visually in the sidebar navigation.
    *   **Video Integration:** Placeholder for video content, ready for actual video URLs.

6.  **Personalized User Dashboard:**
    *   **Enrolled Courses Display:** A personalized view showing only the courses the logged-in user is currently enrolled in.
    *   **Real-time Progress Tracking:** Dynamically calculates and displays the accurate completion percentage for each enrolled course based on completed lessons, fetched from Firestore.
    *   **Course Stats Summary:** Provides a quick overview of "Courses Completed" and "Active Courses".
    *   **Call to Action:** Encourages users to explore courses if they haven't enrolled in any yet.

7.  **Responsive Design:** The application's layout is designed to be fully responsive, providing an optimal viewing experience across various devices and screen sizes.

## Important Files and Their Roles

This section provides a detailed overview of the key files and directories within the project, explaining their responsibilities and how they contribute to the overall application.

*   **`public/`**
    *   Contains static assets like `favicon.ico`, `placeholder.svg`, and `robots.txt`.
    *   **`public/learning-path.svg`**: A specific SVG asset used for the "Learning Paths" course image.
    *   **`public/devsecops.png`**: Image asset for the DevSecOps course.
    *   Other logo images (e.g., `aws.svg`, `azure.svg`, `gcp.svg`, `git.svg`, `jenkins.svg`, `ansible.svg`, `docker.svg`, `kubernetes.svg`, `grafana.svg`, `elastic.svg`, `terraform.svg`, `helm.svg`, `argo.svg`, `linux.svg`) should also be present here or referenced from external URLs as provided in `courseData.ts`.

*   **`src/`**
    *   The main source code directory for the React application.

    *   **`src/main.tsx`**:
        *   The entry point of the React application.
        *   Initializes the React root and renders the `App` component.
        *   Sets up React's strict mode.

    *   **`src/App.tsx`**:
        *   The main application component.
        *   Wraps the entire application in the `AnimatedRoutes` component, providing the global layout and routing structure.

    *   **`src/index.css`**:
        *   Global CSS styles for the application, typically including Tailwind CSS imports and custom base styles.

    *   **`src/firebase.ts`**:
        *   **CRITICAL FILE for Firebase Integration.**
        *   Initializes the Firebase application with your project's configuration (API Key, Auth Domain, Project ID, etc.).
        *   Exports `db` (Firestore instance), `auth` (Firebase Authentication instance), `googleProvider` (Google OAuth provider), and `analytics` (Firebase Analytics instance) for use throughout the application.
        *   **NOTE:** This file *must* contain your actual Firebase project configuration. Exposing API keys publicly is a security risk. Best practice is to use environment variables for sensitive information.

    *   **`src/data/courseData.ts`**:
        *   **The Single Source of Truth for all Course Content.**
        *   Defines TypeScript interfaces (`Lesson`, `Module`, `Course`) to enforce data structure.
        *   `Course` interface includes `id`, `title`, `category`, `difficulty`, `duration`, `imageUrl`, `description`, `instructor` details, `whatYouWillLearn` points, `modules` (list of `Module` objects), `totalLessons`, and `resources`.
        *   `Module` interface contains `title` and a `lessons` array.
        *   `Lesson` interface contains `id` (crucial for tracking completion), `title`, `videoUrl` (optional), and `duration` (optional).
        *   Contains the `courseData` array, which holds all the predefined course information used across the application. Each course has **unique IDs**, **detailed modules with multiple lessons** (each with unique IDs, titles, and durations), and a correct `totalLessons` count. This file is now fully populated with sample content for all courses and their respective modules/lessons.

    *   **`src/components/`**:
        *   Houses reusable UI components used throughout the application.
        *   **`src/components/AnimatedRoutes.tsx`**:
            *   Manages client-side routing using `react-router-dom`.
            *   Uses `framer-motion`'s `AnimatePresence` for smooth page transitions.
            *   Defines all application routes, including public routes (e.g., `/`, `/auth`) and `ProtectedRoute` wrappers for authenticated routes (e.g., `/dashboard`, `/courses`, `/course/:id`, `/course/:id/player`).
        *   **`src/components/Layout.tsx`**:
            *   A wrapper component that provides a consistent layout for most authenticated pages.
            *   Typically includes the `Header` and a main content area.
        *   **`src/components/Header.tsx`**:
            *   The navigation bar displayed at the top of the application.
            *   Includes the application logo ("INFINITY CLOUD LABS") which, when clicked, navigates to `/dashboard` if the user is logged in, or `/` if not.
            *   Displays navigation links (Dashboard, Courses, Documentation, etc.).
            *   Features a user dropdown menu (Profile, Logout) for authenticated users.
        *   **`src/components/ProtectedRoute.tsx`**:
            *   A higher-order component (HOC) that protects routes.
            *   Checks for user authentication; if no user is logged in, it redirects them to the `/auth` (login) page.
        *   **`src/components/ui/*`**:
            *   This directory contains UI components generated using `shadcn/ui`. These are pre-styled, accessible components that provide a consistent look and feel across the application (e.g., `Button`, `Card`, `Input`, `Tabs`, `Accordion`, `Progress`, `Avatar`, `DropdownMenu`, `Label`, `Textarea`, `Toast`, `Toaster`, `Sonner` for notifications).
        *   **`src/components/AnimatedPage.tsx`**:
            *   A wrapper component that applies `framer-motion` animations to individual pages for smooth transitions.

    *   **`src/hooks/`**:
        *   Contains custom React hooks for encapsulating reusable logic.
        *   **`src/hooks/use-mobile.tsx`**: Likely a hook for detecting if the user is on a mobile device.
        *   **`src/hooks/use-toast.ts`**: Custom hook for managing toast notifications (used by `sonner`).

    *   **`src/lib/`**:
        *   Utility functions and configurations.
        *   **`src/lib/utils.ts`**: Contains utility functions, such as `cn` for conditionally joining Tailwind CSS classes.

    *   **`src/pages/`**:
        *   Contains the main application pages.
        *   **`src/pages/Auth.tsx`**:
            *   The user login/registration page.
            *   Handles email/password login and Google social login.
            *   Upon successful login, stores user `uid` and other details in `localStorage` and redirects to the `/dashboard`.
        *   **`src/pages/Dashboard.tsx`**:
            *   The personalized landing page for authenticated users.
            *   Fetches and displays the user's enrolled courses and their real-time completion percentages from Firestore.
            *   Shows summary statistics like "Courses Completed" and "Active Courses".
            *   Provides a "Welcome back, [User Name]!" message.
        *   **`src/pages/Courses.tsx`**:
            *   The main course catalog page.
            *   Displays the category filter buttons ("All", "AWS", "Linux", etc.).
            *   Implements search functionality.
            *   Renders course cards, grouped by difficulty when "All" is selected, or as a single sorted list for specific categories.
            *   Each course card has a "View Details" button linking to `/course/:id`.
        *   **`src/pages/CourseDetails.tsx`**:
            *   Displays comprehensive details for a single course (title, description, instructor, modules, resources).
            *   Features the "Enroll Now" button, which changes to "Start Learning" if the user is already enrolled (status fetched from Firestore).
            *   Defaults to the "Overview" tab.
        *   **`src/pages/CoursePlayer.tsx`**:
            *   The interactive lesson player interface.
            *   Displays video content (or a placeholder if no video is available).
            *   Allows users to "Mark Complete" for lessons, updating their progress in Firestore with optimistic UI.
            *   Pulls detailed module and lesson content from `courseData.ts`.
            *   Provides lesson navigation (Previous/Next) and a sidebar for module/lesson selection.
            *   Includes tabs for "Notes," "Q&A," and "Resources" (with placeholders for Q&A/Resources).
        *   **`src/pages/Home.tsx`**: The public landing page for the application.
        *   **`src/pages/Docs.tsx`**: Placeholder page for documentation.
        *   **`src/pages/Instructors.tsx`**: Placeholder page for instructor listings.
        *   **`src/pages/Contact.tsx`**: Placeholder page for contact information.
        *   **`src/pages/Profile.tsx`**: Placeholder page for user profile.

## Setup and Installation

To get this project up and running locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    cd infinity-cloud-labs
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using Bun:
    ```bash
    bun install
    ```

3.  **Set up Firebase:**
    *   Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
    *   **Create a Firestore Database:** In the Firebase Console, navigate to `Build > Firestore Database` and create a database (start in "Test mode" for development ease, but secure your rules for production).
    *   **Enable Google Authentication:** In the Firebase Console, navigate to `Build > Authentication > Sign-in method` and enable "Google" as a provider.
    *   **Update Firebase Configuration:** Open `src/firebase.ts` and replace the placeholder `firebaseConfig` object with your actual Firebase project configuration found in your Firebase Project Settings.
        ```typescript
        // src/firebase.ts
        const firebaseConfig = {
          apiKey: "YOUR_API_KEY", // CRITICAL: Use environment variables in production!
          authDomain: "YOUR_AUTH_DOMAIN",
          projectId: "YOUR_PROJECT_ID",
          storageBucket: "YOUR_STORAGE_BUCKET",
          messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
          appId: "YOUR_APP_ID",
          measurementId: "YOUR_MEASUREMENT_ID" // Optional
        };
        ```
    *   **CRITICAL SECURITY STEP:** Your API key must *never* be hardcoded in public repositories in a production environment. For development, it's sometimes done for simplicity, but always move it to environment variables (`.env`) for deployment.
    *   **Firestore Security Rules:** For development, ensure your Firestore security rules are permissive enough to allow read/write access. Go to `Build > Firestore Database > Rules` in the Firebase Console and set them to:
        ```firestore
        rules_version = '2';
        service cloud.firestore {
          match /databases/{database}/documents {
            match /{document=**} {
              allow read, write: if true; // WARNING: INSECURE FOR PRODUCTION!
            }
          }
        }
        ```
        Publish these rules. **Remember to secure them properly before deploying to production!**

4.  **Run the development server:**
    Using npm:
    ```bash
    npm run dev
    ```
    Or using Bun:
    ```bash
    bun dev
    ```

    The application should now be running on `http://localhost:5173` (or another port if 5173 is in use).

## Development Notes & Best Practices

*   **Firebase Emulator Suite:** For robust local development and testing of Firebase features without affecting your live project, consider using the [Firebase Emulator Suite](https://firebase.google.com/docs/emulator-suite).
*   **Code Reusability:** Emphasizes component-based architecture for maintainability and scalability.
*   **TypeScript:** Strong typing is used throughout the project to catch errors early and improve code quality.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development and consistent styling.
*   **Framer Motion:** Used for declarative animations, enhancing the user experience with smooth page transitions.
*   **Optimistic UI:** Implemented in areas like course enrollment and lesson completion to provide immediate feedback to the user, improving perceived performance.
*   **Data Structure:** The `courseData.ts` file is designed to be easily extendable, allowing for the addition of new courses, categories, modules, and lessons with unique IDs.

---
