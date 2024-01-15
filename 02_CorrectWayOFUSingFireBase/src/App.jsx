import { useEffect, useState } from "react";
import "./App.css";
import { useFirebase } from "./context/Firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const firebase = useFirebase();
  console.log(firebase);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataToSend, setDataToSend] = useState("");

  const [user, setuser] = useState();
  useEffect(() => {
    onAuthStateChanged(firebase.firebaseAuth, (user) => {
      if (user) {
        setuser(user);
      } else {
        console.log("No user is signed Out.");
        setuser(null);
      }
    });
  }, []);

  return (
    <>
      <div className="container">
        <h1>FireBase</h1>

        {user == null ? (
          <>
            <div>
              <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
            </div>
            <button
              onClick={() => {
                const initialName = email.split("@")[0].toLowerCase();
                firebase.signupUsersWithEmailAndPassword(email, password);
                firebase.putData(`user/${initialName}`, {
                  email,
                  password,
                });
              }}
            >
              SignUP
            </button>
            <br />
            <button
              onClick={() => {
                firebase.signupWithGoogle();
              }}
            >
              Sign in with Google
            </button>
            <br />

            <div>
              <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

              <button
                onClick={() => {
                  firebase.LoginInWithEmailAndPassword(email, password);
                }}
              >
                Login
              </button>
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <h1>Welcome {user.email}</h1>
              <button
                onClick={() => {
                  firebase.firebaseAuth.signOut();
                }}
              >
                SignOut
              </button>
            </div>
          </>
        )}

        <h1>FireStore</h1>
        {/* <div>
          <input
            type="text"
            placeholder="Enter Data to Send"
            onChange={(e) => {
              setDataToSend(e.target.value);
            }}
            value={dataToSend}
          /> */}
        {/* <button
            onClick={() => {
              firebase.writeData(dataToSend);
            }}
          >
            Write Data
          </button> */}
        {/* <button
            onClick={() => {
              firebase.readData();
            }}
          >
            Read Data
          </button> */}
        {/* <button
            onClick={() => {
              putDatanew();
            }}
          >
            Put Data New
          </button> */}
        <br />
        {/* <button
            onClick={() => {
              firebase.getDataBase_val();
            }}
          >
            Get Data from DataBase
          </button> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
