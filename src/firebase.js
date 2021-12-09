// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCfQWaL_xB0Qw23lomYad_lD4mCfJBEwE",
  authDomain: "slack-clone-5baed.firebaseapp.com",
  projectId: "slack-clone-5baed",
  storageBucket: "slack-clone-5baed.appspot.com",
  messagingSenderId: "276299113066",
  appId: "1:276299113066:web:87761cd7433e83e81d6013"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;