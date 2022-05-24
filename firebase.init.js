// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMAgZeqVo0i8hcwkTzcqOejLsUxNUBsfk",
    authDomain: "next-shop-4994a.firebaseapp.com",
    projectId: "next-shop-4994a",
    storageBucket: "next-shop-4994a.appspot.com",
    messagingSenderId: "942957686216",
    appId: "1:942957686216:web:57b152e36e3870696464fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;