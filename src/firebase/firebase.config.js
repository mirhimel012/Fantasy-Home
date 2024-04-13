// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpdV3BFvp5hbQGPY4vZiK5ogCwAXX9E3I",
  authDomain: "fantasy-home.firebaseapp.com",
  projectId: "fantasy-home",
  storageBucket: "fantasy-home.appspot.com",
  messagingSenderId: "1062055918198",
  appId: "1:1062055918198:web:9e78a5fb8f3a3f09c17d57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;