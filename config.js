import firebase from 'firebase';
require("@firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyB_xofRjnZfVLxJ4EbFXvQ0J-HWV9YNlDY",
  authDomain: "gargi-344f5.firebaseapp.com",
  projectId: "gargi-344f5",
  storageBucket: "gargi-344f5.appspot.com",
  messagingSenderId: "355201267231",
  appId: "1:355201267231:web:12351c1db50306fd02472a",
  measurementId: "G-RSBD47P0HB"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase.firestore();
