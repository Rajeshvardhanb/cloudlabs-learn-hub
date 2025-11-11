
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3v03YCYZ2Cm9wmez6h0KNBQToOGPPO7g",
  authDomain: "infinity-cloud-labs.firebaseapp.com",
  projectId: "infinity-cloud-labs",
  storageBucket: "infinity-cloud-labs.firebasestorage.app",
  messagingSenderId: "105899295648",
  appId: "1:105899295648:web:9377a586d4412c66ee1ac5",
  measurementId: "G-XRLXVH67HZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { db, auth, googleProvider, analytics };
