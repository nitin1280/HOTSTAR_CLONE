import firebase from "./firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBhk6R6ElG6AshScWeNNLELe9p04IaQd4k",
    authDomain: "fir-83e34.firebaseapp.com",
    projectId: "fir-83e34",
    storageBucket: "fir-83e34.appspot.com",
    messagingSenderId: "625183716479",
    appId: "1:625183716479:web:bd6db9d834f9a4ecd07b4a",
    measurementId: "G-0XJDC38FJ8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;