import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import Firestore from Firebase modular SDK

const firebaseConfig = {
    apiKey: 'AIzaSyD71fdJORDikBgInvsHgrA2uSj1Z03Y1ac',
    authDomain: 'side-project-ayoung.firebaseapp.com',
    projectId: 'side-project-ayoung',
    storageBucket: 'side-project-ayoung.appspot.com',
    messagingSenderId: '606367920386',
    appId: '1:606367920386:web:ec928f13d180ecd1a0d21b',
    measurementId: 'G-7EYW57RLXM',
};

const app = initializeApp(firebaseConfig); // Initialize the app
const firestore = getFirestore(app); // Initialize Firestore using the app instance

export { app, firestore }; // Export app and firestore for use in other parts of your application
