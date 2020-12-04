import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCaI43g5bKLpH8KKWNQp-uBnzRArT7zGOs",
    authDomain: "react-apps-f1e5b.firebaseapp.com",
    projectId: "react-apps-f1e5b",
    storageBucket: "react-apps-f1e5b.appspot.com",
    messagingSenderId: "574711275579",
    appId: "1:574711275579:web:ec0e0bad6d2b7f45533c1e"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Referencia a la bd de firebase que es firestore
  const db = firebase.firestore();
  //Poder hacer autentocacion con google
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export{
      db,
      googleAuthProvider,
      firebase
  }
