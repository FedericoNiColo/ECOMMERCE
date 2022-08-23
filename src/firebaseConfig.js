// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAajrF16_cwbl8XQpl6F3KhOaYPLxZ5GdY",
    authDomain: "ecommerce-remeras.firebaseapp.com",
    projectId: "ecommerce-remeras",
    storageBucket: "ecommerce-remeras.appspot.com",
    messagingSenderId: "211616453726",
    appId: "1:211616453726:web:979a2b4d09a45474b110cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db