// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgWj_mOo-vCLDIm8U2J6NSdf7ruaSW2eU",
  authDomain: "dragon-z-news.firebaseapp.com",
  projectId: "dragon-z-news",
  storageBucket: "dragon-z-news.firebasestorage.app",
  messagingSenderId: "545312902312",
  appId: "1:545312902312:web:225796b5578a7454adc69d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
export default auth;

