// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBYDWs_MyC5kTqHGjPiuhqVlvQrKGwrE0c',
  authDomain: 'netflix-clone-f8e74.firebaseapp.com',
  projectId: 'netflix-clone-f8e74',
  storageBucket: 'netflix-clone-f8e74.appspot.com',
  messagingSenderId: '32909608850',
  appId: '1:32909608850:web:581a822d219f7ea910a34b',
  measurementId: 'G-KJWJ638RKT',
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
