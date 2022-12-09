// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Yjn1SxAxBsf-tlDvRTIuFR5k2MtShI8",
  authDomain: "incognito-a80ac.firebaseapp.com",
  projectId: "incognito-a80ac",
  storageBucket: "incognito-a80ac.appspot.com",
  messagingSenderId: "291379668227",
  appId: "1:291379668227:web:1425ded4f528ccd3507536"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth = getAuth();
export const storage=getStorage(app);
export default app;