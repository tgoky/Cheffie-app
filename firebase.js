import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyATVxCIkKOWez3FDNAPWC_wGFZzbL_NOH4",
    authDomain: "cheffie-60fc2.firebaseapp.com",
    projectId: "cheffie-60fc2",
    storageBucket: "cheffie-60fc2.appspot.com",
    messagingSenderId: "1026445787360",
    appId: "1:1026445787360:web:f5e98df314141c0abed085"
  };

 !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;