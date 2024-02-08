import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyChosrPtRMeg9RBndeO81-zZHAPSfhPuDo",
    authDomain: "to-do-list-52e44.firebaseapp.com",
    projectId: "to-do-list-52e44",
    storageBucket: "to-do-list-52e44.appspot.com",
    messagingSenderId: "503199165666",
    appId: "1:503199165666:web:8c18ceffa9b894f496c2bb",
    measurementId: "G-EBFLRS625J"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
