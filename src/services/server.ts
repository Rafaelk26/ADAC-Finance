import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCtm7hZFj_RY-pKN8TdyyDVuORAKfDjhn8",
    authDomain: "adac-finance.firebaseapp.com",
    projectId: "adac-finance",
    storageBucket: "adac-finance.firebasestorage.app",
    messagingSenderId: "613032470991",
    appId: "1:613032470991:web:110bec916dfa018888caba",
    measurementId: "G-7R0XQLCQF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getFirestore(app)

export { db, auth }