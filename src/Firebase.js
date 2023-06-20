// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getFirestore, query, getDocs, collection, where, addDoc, } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  sendPasswordResetEmail, signOut,} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWGdlGdTr2kJ-VUZ5tHwAfYIHo28MrraQ",
  authDomain: "tanuki2502.firebaseapp.com",
  databaseURL: "https://tanuki2502-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "tanuki2502",
  storageBucket: "tanuki2502.appspot.com",
  messagingSenderId: "100173578328",
  appId: "1:100173578328:web:d10198d01613930d5f4a2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 

//google auth
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        authProvider: "google",
        identifier: user.email,
      });
    }
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

// username and password
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

// register with email and password
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

//resetPass
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

//logout
const logout = () => {
  signOut(auth);
};

export {
    auth, db, signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};