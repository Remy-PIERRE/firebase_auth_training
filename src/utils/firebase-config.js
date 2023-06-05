import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBb4J0wJ55Lz2mfugp-3j2QLc0WY1cDcrc",
  authDomain: "portfolio-remy-pierre.firebaseapp.com",
  projectId: "portfolio-remy-pierre",
  storageBucket: "portfolio-remy-pierre.appspot.com",
  messagingSenderId: "707141545079",
  appId: "1:707141545079:web:554daa4e2a6f5e0e442a72",
  measurementId: "G-L4S3RTMX0S",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
