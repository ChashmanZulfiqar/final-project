import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";  // Added updateDoc import

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZaNCerpmIKaHLvzbCED9QChAWZwgg214",
  authDomain: "frontend-55def.firebaseapp.com",
  projectId: "frontend-55def",
  storageBucket: "frontend-55def.firebasestorage.app",
  messagingSenderId: "970171064252",
  appId: "1:970171064252:web:9a764f78ab9dfc2ad8d5b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth services
export const auth = getAuth(app);  // Authentication service
export const db = getFirestore(app);  // Firestore service

// Export the Firestore functions
export { collection, addDoc, getDocs, deleteDoc, doc, updateDoc };  // Added updateDoc

export default app;
