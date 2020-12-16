import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


        
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_APIKEY ,
        authDomain: process.env.REACT_APP_AUTHDOMAIN,
        projectId: process.env.REACT_APP_PROJECTID,
        storageBucket: process.env.REACT_APP_STORAGEBUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
        appId:process.env.REACT_APP_APPID 
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
