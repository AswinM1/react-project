// Import the required Firebase modules
import { initializeApp } from 'firebase/app';

// Firebase configuration object (replace with your own Firebase project config)
const firebaseConfig = {
  apiKey: "AIzaSyDiZe73WeOckSzvmPLO6rbpnKx8iBE3L90",
  authDomain: "bookheaven-ba721.firebaseapp.com",
  projectId: "bookheaven-ba721",
  storageBucket: "bookheaven-ba721.appspot.com",
  messagingSenderId: "165589051886",
  appId: "1:165589051886:web:3e9123fbd00c55ec70c6ff",
  measurementId: "G-B3F7JB84X3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
