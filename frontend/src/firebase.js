import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCzOTiUO6ujeUlXkDc5-L4mGYI0xlBczdE",
  authDomain: "phoenix-job-portal.firebaseapp.com",
  projectId: "phoenix-job-portal",
  storageBucket: "phoenix-job-portal.appspot.com",
  messagingSenderId: "563804575933",
  appId: "1:563804575933:web:7e84abc6058a7487ba3fd4",
  measurementId: "G-PS0H8JFJXL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db , auth , provider };