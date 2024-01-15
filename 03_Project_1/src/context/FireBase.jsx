import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//making a context for firebase
const FireBaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyDBLKaKGAvXJ_-Dje3-1kyFRn_PUIMwYkw",
  authDomain: "book-shelf-d7f27.firebaseapp.com",
  projectId: "book-shelf-d7f27",
  storageBucket: "book-shelf-d7f27.appspot.com",
  messagingSenderId: "732109670995",
  appId: "1:732109670995:web:1ddde218eff7e057e594a6",
};

const firebaseApp = initializeApp(firebaseConfig);

//creating a custom hook to use the context in any component in the app without having to import the context in every component that needs it and then using the useContext hook to access the context in the component
export const useFirebase = () => {
  return useContext(FireBaseContext);
};

//making EmailPass SignUP
const firebaseAuth = getAuth(firebaseApp);

const googleProvider = new GoogleAuthProvider(firebaseAuth);

const firestore = getFirestore(firebaseApp);

const storage = getStorage(firebaseApp);

//exporting the context provider to wrap the app in the index.js file so that the app can access the context provider and the context provider can access the firebase
export const FireBaseContextProvider = (props) => {
  /*
    adding state to determine if user is logged in Or not 
  */

  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
      console.log("user=>", user);
    });
  }, []);
  const isLoggedIn = user ? true : false;

  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signInUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(firebaseAuth, googleProvider);
  };

  console.log(user);
  const navigate = useNavigate();

  const handleCreateNewListing = async (name, isbn, price, cover) => {
    const imgref = ref(storage, `uploads/images/${Date.now()}-${cover.name}`);
    const uploadResult = await uploadBytes(imgref, cover);
    await addDoc(collection(firestore, "books"), {
      name,
      isbn,
      price,
      coverPic: uploadResult.ref.fullPath,
      userID: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
    navigate("/");
  };
  const ListAllBooks = async () => {
    return getDocs(collection(firestore, "books"));
  };

  const getImageURL = (path) => {
    return getDownloadURL(ref(storage, path));
  };
  return (
    <FireBaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        signInUserWithEmailAndPassword,
        signInWithGoogle,
        isLoggedIn,
        handleCreateNewListing,
        ListAllBooks,
        getImageURL,
      }}
    >
      {props.children}
    </FireBaseContext.Provider>
  );
};
