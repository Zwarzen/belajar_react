import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from '@firebase/auth';

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyB40jLIMb7gw4CgqN_d7LxywfbMs4ucqkU",

  authDomain: "pert10-31a81.firebaseapp.com",

  projectId: "pert10-31a81",

  storageBucket: "pert10-31a81.appspot.com",

  messagingSenderId: "215519700359",

  appId: "1:215519700359:web:a6f7433bf896d1eaf6df22",

  measurementId: "G-R6Y9QS0VHD"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const authentication = getAuth();
// const db = firebase.firestore();
// const storage = firebase.storage();

export { auth, authentication }