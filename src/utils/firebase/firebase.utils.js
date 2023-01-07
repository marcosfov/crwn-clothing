import { initializeApp } from "firebase/app"
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBajscLNZ-pnn0Lv5yivteAwzG-rTsZY3A",
    authDomain: "crw-clothing-db-650f5.firebaseapp.com",
    projectId: "crw-clothing-db-650f5",
    storageBucket: "crw-clothing-db-650f5.appspot.com",
    messagingSenderId: "863831415681",
    appId: "1:863831415681:web:9e32e727c528c49b892680"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
