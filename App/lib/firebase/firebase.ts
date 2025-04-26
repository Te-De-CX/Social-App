// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkRgKM5XUGqn2eIPJmTK9eQ9Z6CmbKnB0",
  authDomain: "shi-chat-backend.firebaseapp.com",
  projectId: "shi-chat-backend",
  storageBucket: "shi-chat-backend.firebasestorage.app",
  messagingSenderId: "1034875101511",
  appId: "1:1034875101511:web:01fcb5c9ab8328e9e86c62",
  measurementId: "G-0VXGKBRE02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);