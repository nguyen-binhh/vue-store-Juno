import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLO16XMZiLJwAv6GiLUnhNC-xPqxa1ysU",
  authDomain: "ecommerce-vue-shop.firebaseapp.com",
  databaseURL:
    "https://ecommerce-vue-shop-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "ecommerce-vue-shop",
  storageBucket: "ecommerce-vue-shop.appspot.com",
  messagingSenderId: "963850710992",
  appId: "1:963850710992:web:aa146d928582556e0493d5",
  measurementId: "G-Q3S8GHX35N",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
