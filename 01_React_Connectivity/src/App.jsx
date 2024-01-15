import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { FirebaseProvider } from "./context/Firebase";

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const SignUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <FirebaseProvider>
      <center>
        <h1>React Connectivity</h1>
        <SignUp
          handleEmail={handleEmail}
          handlePassword={handlePassword}
          SignUpUser={SignUpUser}
          email={email}
          password={password}
        />
        <SignIn />
      </center>
    </FirebaseProvider>
  );
}
export default App;
