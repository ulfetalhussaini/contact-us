// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADJLASWj6sUWXx__BkjwpphWoaOi12H0Q",
  authDomain: "contact-me-24cd7.firebaseapp.com",
  projectId: "contact-me-24cd7",
  storageBucket: "contact-me-24cd7.appspot.com",
  messagingSenderId: "810210922805",
  appId: "1:810210922805:web:75d1d25ec651b3e96f3c7c",
  measurementId: "G-E6SHRS692S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);