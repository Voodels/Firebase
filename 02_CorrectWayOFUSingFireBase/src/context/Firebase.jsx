import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set, get, child } from "firebase/database";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnLUIzsjhX3cGjgQiy5chHGxhtfcV1xYQ",
  authDomain: "context-api-firebase-1667b.firebaseapp.com",
  projectId: "context-api-firebase-1667b",
  storageBucket: "context-api-firebase-1667b.appspot.com",
  messagingSenderId: "194219543559",
  appId: "1:194219543559:web:4403c434808c3200722ea2",
  databaseURL: "https://context-api-firebase-1667b-default-rtdb.firebaseio.com",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
const googlProvider = new GoogleAuthProvider();
const FirebaseContext = createContext(null);
const firestore = getFirestore(firebaseApp);

export const useFirebase = () => {
  return useContext(FirebaseContext);
};
export const FirebaseProvider = (props) => {
  const signupUsersWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  const putData = (Key, data) => {
    set(ref(database, Key), {
      data,
    });
  };
  const signupWithGoogle = () => {
    return signInWithPopup(firebaseAuth, googlProvider);
  };

  const LoginInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  // //function to add data to firestore
  // const writeData = async (dataObj) => {
  //   const result = addDoc(collection(firestore, "collection_1"), {
  //     //map fields to here
  //     dataObj,
  //   });

  //   console.log(result);
  // };

  // const readData = async () => {
  //   const docref = doc(firestore, "collection_1", "doc_1");
  //   const docSnap = await getDoc(docref);
  //   console.log(docSnap.data());
  // };

  // const getDataBase_val = async () => {
  //   get(child(ref(database), "grandfather/father"))
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         console.log(snapshot.val());
  //       } else {
  //         console.log("No data available");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  get(child);

  return (
    <FirebaseContext.Provider
      value={{
        signupUsersWithEmailAndPassword,
        putData,
        signupWithGoogle,
        firebaseAuth,
        LoginInWithEmailAndPassword,
        writeData,
        readData,
        getDataBase_val,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
