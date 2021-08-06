import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCoNA0dBRnO-qzpOeWQKVF5a8d14mf2Mes",
    authDomain: "quora-clone-422c8.firebaseapp.com",
    projectId: "quora-clone-422c8",
    storageBucket: "quora-clone-422c8.appspot.com",
    messagingSenderId: "793755881737",
    appId: "1:793755881737:web:51f6ed0dc19d01367e83d8",
    measurementId: "G-6MT0P3B3F5"
  };

  const firebaseApp = firebase.initializeApp
  (firebaseConfig)

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  const db = firebaseApp.firestore()


  export {auth,provider}
  export default db