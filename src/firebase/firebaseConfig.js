import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-N4AYO4I0L2147ry5mT6VHpkLXg_smgM",
  authDomain: "hygge-a0acb.firebaseapp.com",
  projectId: "hygge-a0acb",
  storageBucket: "hygge-a0acb.appspot.com",
  messagingSenderId: "955459582314",
  appId: "1:955459582314:web:2b17ad957760ff02118d13",
  measurementId: "G-RN5D2QGQQR"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export { db, app };
