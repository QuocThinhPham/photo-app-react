import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCJuGE3C92PEjJ3DFALB9RhEmW0TxLXbss",
    authDomain: "photo-app-a0c6e.firebaseapp.com",
    projectId: "photo-app-a0c6e",
    storageBucket: "photo-app-a0c6e.appspot.com",
    messagingSenderId: "918438343661",
    appId: "1:918438343661:web:b973c075f270cf1e18ade4",
    measurementId: "G-24R88MDSKC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const db = firebase.firestore();
const auth = firebase.auth();

export { firebase, storage, db, auth };