// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDvybQBqNycGwctNZnAz71Mn00LSL8qKEg",
  authDomain: "financial-empowerment-ap-3770d.firebaseapp.com",
  projectId: "financial-empowerment-ap-3770d",
  storageBucket: "financial-empowerment-ap-3770d.firebasestorage.app",
  messagingSenderId: "186113929593",
  appId:"G-9XGTQKW82R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Only one export statement
export { app, auth, db };

