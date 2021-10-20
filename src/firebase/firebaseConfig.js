//import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDqtfu2xtOArbeu1sCEkv-FpJ4j_-4Y4ZM",
  authDomain: "cocktail-alphabet.firebaseapp.com",
  projectId: "cocktail-alphabet",
  storageBucket: "cocktail-alphabet.appspot.com",
  messagingSenderId: "586117787395",
  appId: "1:586117787395:web:8e777403a206b8dd21c336"
};


let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}




