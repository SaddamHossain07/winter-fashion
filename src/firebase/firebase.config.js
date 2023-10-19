// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiNicF3Ud4dgqBeQZiB5q1wIsjP-UoUgs",
    authDomain: "winter-fashion-e713e.firebaseapp.com",
    projectId: "winter-fashion-e713e",
    storageBucket: "winter-fashion-e713e.appspot.com",
    messagingSenderId: "615307577957",
    appId: "1:615307577957:web:b06f625f08fd6ec755d48c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app