import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

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

export const myFirebase = initializeApp(firebaseConfig)

const baseDb = getFirestore(myFirebase)

export const db = baseDb