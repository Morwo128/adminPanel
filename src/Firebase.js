// firebase.js
import firebase from "firebase/app";
import "firebase/firestore"; // Якщо вам потрібна база даних Firestore
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDW5_KvgfrI5s9KWXO3O5dzEsi4xNtIaBQ",
  authDomain: "project-f7624.firebaseapp.com",
  projectId: "project-f7624",
  storageBucket: "project-f7624.appspot.com",
  messagingSenderId: "209817959619",
  appId: "1:209817959619:web:8b7801f3b818bb8afa3676",
  measurementId: "G-DLLZH6D19F",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const storage = firebase.storage();
