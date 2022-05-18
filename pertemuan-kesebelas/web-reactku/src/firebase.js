import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from '@firebase/auth';

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhF3McGx8Z9rLciDGBb8_OxvDxamL4mIg",
  authDomain: "pert11-f4a23.firebaseapp.com",
  databaseURL: "https://pert11-f4a23-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pert11-f4a23",
  storageBucket: "pert11-f4a23.appspot.com",
  messagingSenderId: "932477736613",
  appId: "1:932477736613:web:4695c10588357947d25f4c",
  measurementId: "G-DQV7JHLNL4"
};

// Initialize Firebase
export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = firebase.auth();
const authentication = getAuth();
// const db = firebase.firestore();
// const storage = firebase.storage();

export { auth, authentication }