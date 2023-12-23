
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD91EnpdjNl1U55lMvEnPoa2dsPUKkBJBg",
  authDomain: "expensetracker-1c8fe.firebaseapp.com",
  projectId: "expensetracker-1c8fe",
  storageBucket: "expensetracker-1c8fe.appspot.com",
  messagingSenderId: "1063788708132",
  appId: "1:1063788708132:web:29029e0c42776e8a8473b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);