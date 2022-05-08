// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* const firebaseConfig = {
    apiKey: "AIzaSyCPN3yJ8vpt-xONVT1b75_YhbvI-aItKKY",
    authDomain: "boi-ghor-cc8e7.firebaseapp.com",
    projectId: "boi-ghor-cc8e7",
    storageBucket: "boi-ghor-cc8e7.appspot.com",
    messagingSenderId: "226271750402",
    appId: "1:226271750402:web:8ca9c6646a0e245ebc3a1b"
  }; */

  const firebaseConfig = {
    apiKey:process.env.REACT_APP_apiKey,
    authDomain:process.env.REACT_APP_authDomain,
    projectId:process.env.REACT_APP_projectId,
    storageBucket:process.env.REACT_APP_storageBucket,
    messagingSenderId:process.env.REACT_APP_messagingSenderId,
    appId:process.env.REACT_APP_appId,
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

