// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJWMb4J3F4SgZyQnPMQuT1GT02EK5ckwE",
  authDomain: "ember-aa7c1.firebaseapp.com",
  projectId: "ember-aa7c1",
  storageBucket: "ember-aa7c1.appspot.com",
  messagingSenderId: "245604972189",
  appId: "1:245604972189:web:627a383cc08d9231c24674",
  measurementId: "G-YBCWP34ZG6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()

export { app, db }