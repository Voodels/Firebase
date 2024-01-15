import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDvXVfyJQdZxc3rVV1AWW-Y1O4Ovyboszs",
  authDomain: "yt-app-30fff.firebaseapp.com",
  projectId: "yt-app-30fff",
  storageBucket: "yt-app-30fff.appspot.com",
  messagingSenderId: "138250701265",
  appId: "1:138250701265:web:704df774e4a94ae44478f0",
  databaseURL: "https://yt-app-30fff-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const FirebaseContext = createContext(null);
const db = getDatabase(app);

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((e) => {
        console.log(e);
      })
      .catch((err) => console.log(err));
  };

  const putData = (key, data) => {
    set(ref(db, data), {});
  };

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        putData,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
