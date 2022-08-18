// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {         GoogleAuthProvider,
         getAuth,
         signInWithPopup,
         signInWithEmailAndPassword,
         createUserWithEmailAndPassword,
         sendPasswordResetEmail,
          signOut,
        } from "firebase/auth";

        import {
              getFirestore,
              query,
              getDocs,
              collection,
              where,
              addDoc,
         } from "firebase/firestore";        

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXgrQKlYpod4NUWn4suVl7LvUz7QCWazY",
  authDomain: "seh-divya.firebaseapp.com",
  projectId: "seh-divya",
  storageBucket: "seh-divya.appspot.com",
  messagingSenderId: "512469989654",
  appId: "1:512469989654:web:2e2362f2eebc9bb2027837",
  measurementId: "G-M9Q2GFJEYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

//Google authentication function
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth,googleProvider);
        const user = res.user;
        const q = query(collection(db,'users'), where("uid","==", user.uid));
        const docs = await getDocs(q);
        if(docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid:user.uid,
                name: user.displayName,
                authProvider:"google",
                email: user.email,
            });
        }
    } catch( err ) {
        console.error(err);
        alert(err.message);
    }
}

//sign in using email and password

const logInWithEmailAndPassword = async(email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch(err){
        console.error(err);
        alert(err.message);
    }
}

//function for registering the user
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
      console.error(err);
      alert(err.message);
    }
  };

  //sending the password reset link
  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  //logout
  const logout = () => {
    signOut(auth);
  };

  export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };