// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC95yzfjdl3g-NqAFntU0pw0nNUsozWRJA",
    authDomain: "ema-john-simple-auth-19024.firebaseapp.com",
    projectId: "ema-john-simple-auth-19024",
    storageBucket: "ema-john-simple-auth-19024.appspot.com",
    messagingSenderId: "32405357684",
    appId: "1:32405357684:web:31cd20202ad30b7efefd21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


// for firebase install
// npm install -g firebase-tools
// firebase login
// firebase init
// firebase deploy