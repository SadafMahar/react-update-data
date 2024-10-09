
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA1JZvJ6CnHONQ85THyOc4W9NxrrOGPi84",
  authDomain: "firstore-c5505.firebaseapp.com",
  projectId: "firstore-c5505",
  storageBucket: "firstore-c5505.appspot.com",
  messagingSenderId: "692382153043",
  appId: "1:692382153043:web:c6e706f0b487c21f0d89a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const fireDB = getFirestore(app)