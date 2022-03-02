// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import 'firebase/compat/firestore';
import {
  // getAuth, // authentication 설정
  signInWithPopup, // google 로그인을 팝업창에 띄우기 위함
  GoogleAuthProvider, // google login 기능
  // email 로그인
  // email 회원가입
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';

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

// auth 설정
const auth = getAuth();

// Email 로그인
export const signupEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Email 회원가입
export const loginEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const firestore = firebase.firestore();

export { firestore, auth };
