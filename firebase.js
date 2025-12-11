// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9Xa-E7sgFHPagNjj1NUg4A1cp1bzKoio",
  authDomain: "obs-a6552.firebaseapp.com",
  projectId: "obs-a6552",
  storageBucket: "obs-a6552.firebasestorage.app",
  messagingSenderId: "1027999373510",
  appId: "1:1027999373510:web:91632558fe56f8b9779fc7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);