import firebase from "firebase/app";
import "firebase/firestore";



var firebaseConfig = {
  apiKey: "AIzaSyCyug8ccf72c4sbHqzD9gvpSsbk3xGwv1o",
  authDomain: "portfoliolukeshort1.firebaseapp.com",
  projectId: "portfoliolukeshort1",
  storageBucket: "portfoliolukeshort1.appspot.com",
  messagingSenderId: "461295163484",
  appId: "1:461295163484:web:0374cf9f723cb50e1e6e99",
  measurementId: "G-FYWNEQ4X3H"
};

firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();

export default firebase;
