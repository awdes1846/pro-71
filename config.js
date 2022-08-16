import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCTUVS6pOeWfT8s6NGVyGHB_BPqxaqTWHQ",
    authDomain: "pro-71-f4ae4.firebaseapp.com",
    projectId: "pro-71-f4ae4",
    storageBucket: "pro-71-f4ae4.appspot.com",
    messagingSenderId: "319862416646",
    appId: "1:319862416646:web:7de4ca2d8a84cd97a92a87"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
