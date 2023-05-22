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


/*const firebaseConfig = {
  apiKey: "AIzaSyACwT0iUWcWXh2funvQhF3BW5ut8HcSR5U",
  authDomain: "docs-clone-2fd36.firebaseapp.com",
  projectId: "docs-clone-2fd36",
  storageBucket: "docs-clone-2fd36.appspot.com",
  messagingSenderId: "379543444035",
  appId: "1:379543444035:web:bd9102e0806c816b0192f6",
  measurementId: "G-0FTHT5JQ9R"
};*/



/*const firebaseConfig = {
  apiKey: "AIzaSyDFxFGdHl9obp9j_eIYebG2Ywd_QKp0rgE",
  authDomain: "next--docs-719cd.firebaseapp.com",
  projectId: "next--docs-719cd",
  storageBucket: "next--docs-719cd.appspot.com",
  messagingSenderId: "725211284405",
  appId: "1:725211284405:web:7ddb1da1664a79228ccffc",
  measurementId: "G-B9PNJTTN4T",
};*/

// checking whether the app is already initialize or not
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// initialize db
const db = app.firestore();

// exporting db
export { db, firebaseConfig };
