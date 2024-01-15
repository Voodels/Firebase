import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
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
    <div className="container">
      <h1>SignIn</h1>
      <form>
        <div className="inputEmailPassword">
          <div className="email">
            <label>
              Email
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter your email"
              />
            </label>
          </div>
          <div className="password">
            <label>
              Password
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Enter your password"
              />
            </label>
            <button
              type="button" // Set the type to "button"
              onClick={SignInUser}
            >
              Sign Me IN!!!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
