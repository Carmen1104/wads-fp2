// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCevGgUPf4qCqPvxw3Ms9uQ7ujnf4ZMuaw",
  authDomain: "cours-27f7c.firebaseapp.com",
  projectId: "cours-27f7c",
  storageBucket: "cours-27f7c.appspot.com",
  messagingSenderId: "996654242766",
  appId: "1:996654242766:web:e751cfaa839f21500de99f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 

const logout = () => {
    signOut(auth);
  };


export {
    auth, db, logout
};