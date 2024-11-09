// Import necessary functions from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Auth
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-_KQQZjlK3TEpUgWHhZQ37BmUb4Hps1A",
  authDomain: "my-todo-app-3ee0f.firebaseapp.com",
  projectId: "my-todo-app-3ee0f",
  storageBucket: "my-todo-app-3ee0f.firebasestorage.app",
  messagingSenderId: "1061776833988",
  appId: "1:1061776833988:web:424de7d3139c0c35ce3891",
  measurementId: "G-T2LRGLYD89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Export the auth and db objects for use in other parts of your app
export { auth, db };
