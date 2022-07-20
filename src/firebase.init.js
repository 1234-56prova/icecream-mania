// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX9hLHKeKd5cntrJ6IWOAWo90nfkCbtbc",
  authDomain: "smooth-sensations.firebaseapp.com",
  projectId: "smooth-sensations",
  storageBucket: "smooth-sensations.appspot.com",
  messagingSenderId: "1016683819371",
  appId: "1:1016683819371:web:954a9d6ee30898e4ae9c2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;