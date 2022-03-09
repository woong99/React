// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBdOftADdVX8NHG2PTemQxpbD56bE6XH-8',
  authDomain: 'study-firebase-8f6d3.firebaseapp.com',
  projectId: 'study-firebase-8f6d3',
  storageBucket: 'study-firebase-8f6d3.appspot.com',
  messagingSenderId: '994927653132',
  appId: '1:994927653132:web:905a8e7f497d79644c5929',
  measurementId: 'G-RXQLVY6ZL2',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
