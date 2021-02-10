import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX1urHkOdLwo9dPAaIkJRWQGXIOHYN8pA",
  authDomain: "pandapatter-bd157.firebaseapp.com",
  projectId: "pandapatter-bd157",
  storageBucket: "pandapatter-bd157.appspot.com",
  messagingSenderId: "1031861828761",
  appId: "1:1031861828761:web:c7c67c0359d346175ccc08",
  measurementId: "G-LK22L2JBD0",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
