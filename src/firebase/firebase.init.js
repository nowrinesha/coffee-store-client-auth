// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIFBDFDZfZJ0WET5mXf5-61Wb22BFgr0o",
  authDomain: "coffee-store-390bc.firebaseapp.com",
  projectId: "coffee-store-390bc",
  storageBucket: "coffee-store-390bc.firebasestorage.app",
  messagingSenderId: "13570497483",
  appId: "1:13570497483:web:30178c29ef068a3351744e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
