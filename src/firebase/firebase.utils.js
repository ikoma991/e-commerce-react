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

  export const createUserProfileDocument = async(userAuth,additionalData)=>{
    if(!userAuth)return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
 
    if(!snapShot.exists){
      const {displayName , email} = userAuth;
      const createdAt = new Date();
 
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(err){
        console.log('error creating user: ',err.message);
      }
    }
    return userRef;
    
  }
  export const addCollectionAndDocuments = async(collectionKey,objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    
    objectsToAdd.forEach(obj=> {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef,obj);
    });

    return await batch.commit();
    
  }
 
  export const convertCollectionsSnapshotToMap = (collections)=> {
    const transformedCollection = collections.docs.map(doc=>{
      const {title,items} = doc.data();
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });
    
    return transformedCollection.reduce((acc,collection) => {acc[collection.title.toLowerCase()] = collection;
    return acc;
      } ,{});
  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;