// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyD71fdJORDikBgInvsHgrA2uSj1Z03Y1ac',
    authDomain: 'side-project-ayoung.firebaseapp.com',
    projectId: 'side-project-ayoung',
    storageBucket: 'side-project-ayoung.appspot.com',
    messagingSenderId: '606367920386',
    appId: '1:606367920386:web:05cb12052910e5cda0d21b',
    measurementId: 'G-YE3MTG3DTW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
