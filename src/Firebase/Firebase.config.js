// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRC0wzleVMCmHBfIsHwa8aPOaiNq0Vks8",
  authDomain: "traveler-hero-projects.firebaseapp.com",
  projectId: "traveler-hero-projects",
  storageBucket: "traveler-hero-projects.appspot.com",
  messagingSenderId: "781220248192",
  appId: "1:781220248192:web:d6b72a4afb0afa3aa54465",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
