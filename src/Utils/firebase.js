// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvQo80Nu_6JWDy_03lK9wWObSLPi2LXzk",
  authDomain: "netflixgpt-5fe6b.firebaseapp.com",
  projectId: "netflixgpt-5fe6b",
  storageBucket: "netflixgpt-5fe6b.appspot.com",
  messagingSenderId: "578648002622",
  appId: "1:578648002622:web:485ef75616de9abbb2c16f",
  measurementId: "G-KW8GK1H4ED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();