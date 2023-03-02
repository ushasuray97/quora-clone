import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// import 'firebase/compat/firestore';



const firebaseConfig = {
  // Paste your app's configuration object here
  apiKey: "AIzaSyAY8zJTwQXE2uEzE8E8XZTakhxeUkimikw",
  authDomain: "quora-clone-2b81f.firebaseapp.com",
  projectId: "quora-clone-2b81f",
  storageBucket: "quora-clone-2b81f.appspot.com",
  messagingSenderId: "705884294947",
  appId: "1:705884294947:web:11bcb087e984d0939f4696",
  measurementId: "G-WGXLP3GP84"
};

const app=initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = firebase.firestore();
export default firebase;
