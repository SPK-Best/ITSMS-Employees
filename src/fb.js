import firebase from "firebase/app";
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrgiaIMgKtBMyJYbeHYz9MMMLiqEHQ_Ks",
    authDomain: "itsms-fcbff.firebaseapp.com",
    databaseURL: "https://itsms-fcbff.firebaseio.com",
    projectId: "itsms-fcbff",
    storageBucket: "itsms-fcbff.appspot.com",
    messagingSenderId: "611627966278",
    appId: "1:611627966278:web:33800699221a7bb01f4f47"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
