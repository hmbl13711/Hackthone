
import { initializeApp } from "firebase/app";
// import "firebase/auth";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxlgXPu3wDK_S0POeAopToUpFGUCYK71c",
  authDomain: "hackathon-project-5122e.firebaseapp.com",
  projectId: "hackathon-project-5122e",
  storageBucket: "hackathon-project-5122e.appspot.com",
  messagingSenderId: "782162613312",
  appId: "1:782162613312:web:ddd51616cf7ca9a643fba5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {app , db, auth}