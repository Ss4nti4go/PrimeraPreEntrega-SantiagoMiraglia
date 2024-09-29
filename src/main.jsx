import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCENdT2z4Jc2bDZTBjCmkC2EkzWmBKUbyo",
  authDomain: "comision-60025-e7984.firebaseapp.com",
  projectId: "comision-60025-e7984",
  storageBucket: "comision-60025-e7984.appspot.com",
  messagingSenderId: "868877442110",
  appId: "1:868877442110:web:98a4dede5324396e63456f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
