// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {initializeFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDT2L_VJqPKPlUsUVRtGt4_ZhndD0JJgJw',
  authDomain: 'library-firebase-2b449.firebaseapp.com',
  databaseURL:
    'https://library-firebase-2b449-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'library-firebase-2b449',
  storageBucket: 'library-firebase-2b449.appspot.com',
  messagingSenderId: '490894087523',
  appId: '1:490894087523:web:2c0730122e1de872beef56',
  measurementId: 'G-PQ5VDQVKM4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
