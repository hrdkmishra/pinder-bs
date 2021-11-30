import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7hkQ1vW-oByuETI4fDzUWX9AHwjsBDMM",
  authDomain: "pinder-cicada313.firebaseapp.com",
  projectId: "pinder-cicada313",
  storageBucket: "pinder-cicada313.appspot.com",
  messagingSenderId: "288473623748",
  appId: "1:288473623748:web:2f0313b6e3e9830635ed91",
  measurementId: "G-17CKHY5P4Z",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
