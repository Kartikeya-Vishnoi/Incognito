// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrGZn94mlKGMjqmqAOnWDQS2UUE3Hp0C0",
  authDomain: "motion-data-42bef.firebaseapp.com",
  databaseURL: "https://motion-data-42bef-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "motion-data-42bef",
  storageBucket: "motion-data-42bef.appspot.com",
  messagingSenderId: "63672387572",
  appId: "1:63672387572:web:b77233364256c52e9adba1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth = getAuth();
export default app;