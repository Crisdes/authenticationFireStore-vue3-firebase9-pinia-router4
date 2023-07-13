import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite" //paquete para usar los metodos de firestore

const firebaseConfig = {
  apiKey: "AIzaSyAQ-W7jfgBZYuSniUHtT7LpQmPRDow5DZA",
  authDomain: "vue-3-2023-d7d42.firebaseapp.com",
  projectId: "vue-3-2023-d7d42",
  storageBucket: "vue-3-2023-d7d42.appspot.com",
  messagingSenderId: "325822212189",
  appId: "1:325822212189:web:af088fad9c0b80999b05b4"
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore

export { auth, db }