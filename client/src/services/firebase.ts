// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiWJd-62FMG1Kjt733M7XeaMATWi_7BJE",
  authDomain: "eventvault-a53aa.firebaseapp.com",
  projectId: "eventvault-a53aa",
  storageBucket: "eventvault-a53aa.firebasestorage.app",
  messagingSenderId: "94221025785",
  appId: "1:94221025785:web:17e0e116f6012440f33d28",
  measurementId: "G-GQ6DGVPJKZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
