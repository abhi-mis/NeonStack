// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// Replace with your actual config object from Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyCXxwu2ozq70zcIQ-smQZ7K-OOWA24u5vs",
    authDomain: "neonstack-2b5c5.firebaseapp.com",
    projectId: "neonstack-2b5c5",
    storageBucket: "neonstack-2b5c5.firebasestorage.app",
    messagingSenderId: "170448610621",
    appId: "1:170448610621:web:289e4db7f4101b3761d154"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
