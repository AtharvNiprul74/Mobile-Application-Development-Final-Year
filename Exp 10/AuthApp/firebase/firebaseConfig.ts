import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaJlDDJEyfv2qPga2Npe_gfUTFuULXPwQ",
    authDomain: "authenticationapp-a7ac3.firebaseapp.com",
    projectId: "authenticationapp-a7ac3",
    storageBucket: "authenticationapp-a7ac3.firebasestorage.app",
    messagingSenderId: "111074845465",
    appId: "1:111074845465:web:a31fe72e4bf4b8d816db88",
    measurementId: "G-0D3RQB2EE5"
};

// Initialize Firebase only once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Export the auth module
export const auth = getAuth(app);