// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: String(import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY),
  authDomain: String(import.meta.env.VITE_AUTH_DOMAIN),
  databaseURL: String(import.meta.env.VITE_DATABASE_URL),
  projectId: String(import.meta.env.VITE_PROJECT_ID),
  storageBucket: String(import.meta.env.VITE_STORAGE_BUCKET),
  messagingSenderId: String(import.meta.env.VITE_MESSAGING_SENDER_ID),
  appId: String(import.meta.env.VITE_APP_ID),
  measurementId: String(import.meta.env.VITE_MEASUREMENT_ID)
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

const database = getDatabase(app);

export { auth, database };