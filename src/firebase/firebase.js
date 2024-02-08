import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIvtgKllL1SexmqoRFg4a360l3b5cDoJM",
    authDomain: "to-do-liste-10c14.firebaseapp.com",
    projectId: "to-do-liste-10c14",
    storageBucket: "to-do-liste-10c14.appspot.com",
    messagingSenderId: "971513478308",
    appId: "1:971513478308:web:5412f8267bcf2bc6f5ba31"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
