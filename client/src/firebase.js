// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "mern-auth-55397.firebaseapp.com",
  projectId: "mern-auth-55397",
  storageBucket: "mern-auth-55397.appspot.com",
  messagingSenderId: "461551141578",
  appId: "1:461551141578:web:d5a458f4b992f72407ea33",
  measurementId: "G-5ZP6VGY170",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
