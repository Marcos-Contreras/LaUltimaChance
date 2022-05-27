// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEVenrAmJaia4sPJKlU2I9SuyiCgfWG_M",
  authDomain: "laultimachanceags.firebaseapp.com",
  projectId: "laultimachanceags",
  storageBucket: "laultimachanceags.appspot.com",
  messagingSenderId: "308877451266",
  appId: "1:308877451266:web:f9602e6fefc0af5a51471b"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();

export { auth };
export default { firebase, db };