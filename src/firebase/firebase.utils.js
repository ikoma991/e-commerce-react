import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC3YdbEtPq-dy_6tpP_5uFjpuYepON-SgQ",
    authDomain: "e-commerce-15cdb.firebaseapp.com",
    databaseURL: "https://e-commerce-15cdb.firebaseio.com",
    projectId: "e-commerce-15cdb",
    storageBucket: "e-commerce-15cdb.appspot.com",
    messagingSenderId: "79915318445",
    appId: "1:79915318445:web:941a16ad9abeca2264da24",
    measurementId: "G-Z907PHXYRM"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;