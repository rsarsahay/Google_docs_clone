import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
 import "firebase/compat/auth";

 const firebaseConfig = {
  apiKey: "AIzaSyDJS8q1eEzfGIIM88319d-6PvI9WYgLv50",
  authDomain: "docs-clone-bc9d3.firebaseapp.com",
  projectId: "docs-clone-bc9d3",
  storageBucket: "docs-clone-bc9d3.appspot.com",
  messagingSenderId: "58121929459",
  appId: "1:58121929459:web:60fd04f328cc6490bced86"
};


// checking whether the app is already initialize or not
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// initialize db
const db = app.firestore();

// exporting db
export { db, firebaseConfig };
