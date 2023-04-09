// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';  
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { ref }  from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJLVNxDaWzNmb7A7mdvX_zQHgDZemWeBo",
  authDomain: "raiseit-f4633.firebaseapp.com",
  projectId: "raiseit-f4633",
  storageBucket: "raiseit-f4633.appspot.com",
  messagingSenderId: "953714702025",
  appId: "1:953714702025:web:75b99e6cf9397d6f29ff18"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const db = getDatabase(app)
const storage = getStorage(app);
export { auth, db,storage,firebaseConfig,firebase,ref};