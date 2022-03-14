
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAt1tTDbmVKsJ9InEEvJfvNKK5UrTqJO_4",
  authDomain: "finance-t.firebaseapp.com",
  projectId: "finance-t",
  storageBucket: "finance-t.appspot.com",
  messagingSenderId: "987556156701",
  appId: "1:987556156701:web:e4f88e557b38c41f8c7df4"
};

// Initialize Firebase
initializeApp(firebaseConfig)

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);