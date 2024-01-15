// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useContext } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvXVfyJQdZxc3rVV1AWW-Y1O4Ovyboszs",
  authDomain: "yt-app-30fff.firebaseapp.com",
  projectId: "yt-app-30fff",
  storageBucket: "yt-app-30fff.appspot.com",
  messagingSenderId: "138250701265",
  appId: "1:138250701265:web:704df774e4a94ae44478f0",
  databaseURL: "https://yt-app-30fff-default-rtdb.firebaseio.com",
};

export const useFireBase = () => useContext(FireBaseContext)
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// 

