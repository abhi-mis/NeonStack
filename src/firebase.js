// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// Replace with your actual config object from Firebase Console
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "neon-stack.firebaseapp.com",
    projectId: "neon-stack",
    storageBucket: "neon-stack.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcde12345",
    measurementId: "G-ABCDE12345"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
