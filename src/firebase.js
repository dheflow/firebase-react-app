// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyTPzDavrgQxM1YWY8UwhhNfedbFUWdYQ",
  authDomain: "facebookclone-data.firebaseapp.com",
  projectId: "facebookclone-data",
  storageBucket: "facebookclone-data.appspot.com",
  messagingSenderId: "179617100353",
  appId: "1:179617100353:web:2014fbb9632ca5f9e4ccc0",
  measurementId: "G-MF1BDMHZG5"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
const db = getFirestore(app);

export default db;