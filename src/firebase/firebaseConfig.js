import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7GAisiVobz08Vp1pJQYf3cc-D0ODb6_U",
  authDomain: "hygge-2a737.firebaseapp.com",
  projectId: "hygge-2a737",
  storageBucket: "hygge-2a737.appspot.com",
  messagingSenderId: "326765023861",
  appId: "1:326765023861:web:21fbbde1222e0363fb1e3c",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

const auth = app.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, app, auth, googleProvider };
