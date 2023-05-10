// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBW99fH6YBuF-TyjKpKfevA7dsA_VIQ3V0",
    authDomain: "profex-b211a.firebaseapp.com",
    projectId: "profex-b211a",
    storageBucket: "profex-b211a.appspot.com",
    messagingSenderId: "307068937431",
    appId: "1:307068937431:web:50e1290854b55a33477c92",
    measurementId: "G-9JYYXNV5ZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export{app,analytics,auth}