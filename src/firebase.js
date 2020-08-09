import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCNdjAXeOW7IzYwssSADQAk6vtYz5SlZEs",
  authDomain: "ideas-management.firebaseapp.com",
  databaseURL: "https://ideas-management.firebaseio.com",
  projectId: "ideas-management",
  storageBucket: "ideas-management.appspot.com",
  messagingSenderId: "575232047443",
  appId: "1:575232047443:web:4ce44286d87bee9ea949a6"
};

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();

export const increment = firebase.firestore.FieldValue.increment(1);
