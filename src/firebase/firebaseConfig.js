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
// const firebaseConfig = {
//   apiKey: "AIzaSyC-N4AYO4I0L2147ry5mT6VHpkLXg_smgM",
//   authDomain: "hygge-a0acb.firebaseapp.com",
//   projectId: "hygge-a0acb",
//   storageBucket: "hygge-a0acb.appspot.com",
//   messagingSenderId: "955459582314",
//   appId: "1:955459582314:web:2b17ad957760ff02118d13",
//   measurementId: "G-RN5D2QGQQR"
// };

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

const auth = app.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const faceBookProvider = new firebase.auth.FacebookAuthProvider();

export { db, app, auth, googleProvider, faceBookProvider };
