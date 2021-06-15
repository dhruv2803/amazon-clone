// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCPPE7Kwt6AfxFTKIWoA7cTjRduxUTQ5dU",
    authDomain: "clone-c460e.firebaseapp.com",
    projectId: "clone-c460e",
    storageBucket: "clone-c460e.appspot.com",
    messagingSenderId: "786522842914",
    appId: "1:786522842914:web:9930f4c17a1c732f94a77b",
    measurementId: "G-ZPL3C0BDTW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};