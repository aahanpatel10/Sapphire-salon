import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  projectId: "sapphire-salon-patan-2026",
  appId: "1:878183257963:web:ae09d01a21ea6aa17f9e2e",
  storageBucket: "sapphire-salon-patan-2026.firebasestorage.app",
  apiKey: "AIzaSyAmDd64_w08Psn-2OiBmX7NRqa6EkZWsYA",
  authDomain: "sapphire-salon-patan-2026.firebaseapp.com",
  messagingSenderId: "878183257963",
  projectNumber: "878183257963"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
