import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBqU7YUuzuUo-cIOn1rfNQAs58oqDnRAc",
  authDomain: "ta-tracking-f43e5.firebaseapp.com",
  projectId: "ta-tracking-f43e5",
  storageBucket: "ta-tracking-f43e5.appspot.com",
  messagingSenderId: "418458706305",
  appId: "1:418458706305:web:cddf4dfbf954d4fc150880",
  measurementId: "G-ZBD5HZTG1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;