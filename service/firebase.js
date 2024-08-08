// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtxkhxZ8Nyy4sRfTEJw03Ue7VY94zEFV8",
    authDomain: "tanveer-c6290.firebaseapp.com",
    projectId: "tanveer-c6290",
    storageBucket: "tanveer-c6290.appspot.com",
    messagingSenderId: "192245689566",
    appId: "1:192245689566:web:21bb367a018914cfcfa64f",
    measurementId: "G-3B7W1TDX5W"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db };
