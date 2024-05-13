// firebase.js

import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDsjLod-kjbvMPQ9JjUufFVC3BNmNlEowM",
  authDomain: "app-asksophia.firebaseapp.com",
  projectId: "app-asksophia",
  storageBucket: "app-asksophia.appspot.com",
  messagingSenderId: "80846742304",
  appId: "1:80846742304:web:e69b7d0f0a28dc8e04ad45",
  measurementId: "G-3FESVQHYPM"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
