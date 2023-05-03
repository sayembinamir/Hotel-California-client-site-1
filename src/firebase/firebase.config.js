// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjy08sDiSiZ0TZbIq2jf1hJzkOYDNiQe8",
  authDomain: "hotel-califorrnia.firebaseapp.com",
  projectId: "hotel-califorrnia",
  storageBucket: "hotel-califorrnia.appspot.com",
  messagingSenderId: "871739180903",
  appId: "1:871739180903:web:0453be52fc485a93bf11c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;