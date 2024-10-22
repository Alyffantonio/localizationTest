import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBN-WOuHNLgDZmu_m3pRmDNPyERlgjK4ic",
    authDomain: "passouencontrou-4c5dd.firebaseapp.com",
    projectId: "passouencontrou-4c5dd",
    storageBucket: "passouencontrou-4c5dd.appspot.com",
    messagingSenderId: "458661924213",
    appId: "1:458661924213:web:6a484a8453cd84c540973c",
    measurementId: "G-MM6BLT112F"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
