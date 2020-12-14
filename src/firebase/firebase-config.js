import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Sin variables de entorno
/* const firebaseConfig = {
    apiKey: "AIzaSyCaI43g5bKLpH8KKWNQp-uBnzRArT7zGOs",
    authDomain: "react-apps-f1e5b.firebaseapp.com",
    projectId: "react-apps-f1e5b",
    storageBucket: "react-apps-f1e5b.appspot.com",
    messagingSenderId: "574711275579",
    appId: "1:574711275579:web:ec0e0bad6d2b7f45533c1e"
  };

  const firebaseConfigTesting = {
    apiKey: "AIzaSyDn06tzgeUGfNrsgiWb7NIX2il6r42IfII",
    authDomain: "testing-apps-fa850.firebaseapp.com",
    projectId: "testing-apps-fa850",
    storageBucket: "testing-apps-fa850.appspot.com",
    messagingSenderId: "1029194017886",
    appId: "1:1029194017886:web:34112330ab888fabb218cf"
  };


  if( process.env.NODE_ENV === 'test'){
          //testing
          firebase.initializeApp(firebaseConfigTesting);
      }else{
              //dev/prod
              firebase.initializeApp(firebaseConfig);
          } */
        
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
