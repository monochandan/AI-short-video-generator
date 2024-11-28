// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-generator-e0185.firebaseapp.com",
  projectId: "ai-generator-e0185",
  storageBucket: "ai-generator-e0185.firebasestorage.app",
  messagingSenderId: "509787344176",
  appId: "1:509787344176:web:9b3219f395b82677378cf5",
  measurementId: "G-9Q68CDT85F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// we want to storage feature from the firebase
export const storage = getStorage(app);




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBCn8vaDj2X0FTjVs76ofrDghmDH9r8BeI",
//   authDomain: "technicianlagbe.firebaseapp.com",
//   databaseURL: "https://technicianlagbe.firebaseio.com",
//   projectId: "technicianlagbe",
//   storageBucket: "technicianlagbe.firebasestorage.app",
//   messagingSenderId: "814639211672",
//   appId: "1:814639211672:web:f6a0c5ad604ed8abf79ced",
//   measurementId: "G-ZH3F6M57M1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: "web-app-ae74d.firebaseapp.com",
//   projectId: "web-app-ae74d",
//   storageBucket: "web-app-ae74d.firebasestorage.app",
//   messagingSenderId: "681506031863",
//   appId: "1:681506031863:web:8ed6787a8f4a1f54f9abf2",
//   measurementId: "G-0K6S3J9496"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);