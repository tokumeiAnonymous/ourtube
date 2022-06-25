import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
/*
const  firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID
}
*/
const firebaseConfig = {
  apiKey: "AIzaSyA1b8xk_tyjJ5wpradxixVacfbPBdoZF70",
  authDomain: "ourtube-development.firebaseapp.com",
  projectId: "ourtube-development",
  storageBucket: "ourtube-development.appspot.com",
  messagingSenderId: "62290376483",
  appId: "1:62290376483:web:633304d645265e86ab7e96"
}
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;