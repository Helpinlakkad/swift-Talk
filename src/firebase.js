import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-b5b4c.firebaseapp.com",
  projectId: "chat-b5b4c",
  storageBucket: "chat-b5b4c.appspot.com",
  messagingSenderId: "751087641304",
  appId: "1:751087641304:web:e8b06447e660d173ab2dad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
