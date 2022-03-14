import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9p2zV4MO4Y96OFGnsxbVRh_zeDxUD4OU",
  authDomain: "hygge-3bff8.firebaseapp.com",
  projectId: "hygge-3bff8",
  storageBucket: "hygge-3bff8.appspot.com",
  messagingSenderId: "480876457455",
  appId: "1:480876457455:web:837604a2da67dfa7f1da1a",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export { db, app };
