// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSw92hOYK1lisHQWZWQJd7s96ClmlhGx0",
  authDomain: "social-media-app-e9353.firebaseapp.com",
  projectId: "social-media-app-e9353",
  storageBucket: "social-media-app-e9353.firebasestorage.app",
  messagingSenderId: "329499171599",
  appId: "1:329499171599:web:f27424911981dc3851bc7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();