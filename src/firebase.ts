import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3v03YCYZ2Cm9wmez6h0KNBQToOGPPO7g",
  authDomain: "infinity-cloud-labs.firebaseapp.com",
  projectId: "infinity-cloud-labs",
  storageBucket: "infinity-cloud-labs.appspot.com",
  messagingSenderId: "105899295648",
  appId: "1:105899295648:web:9377a586d4412c66ee1ac5",
  measurementId: "G-XRLXVH67HZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
