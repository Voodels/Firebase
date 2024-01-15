import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/FireBase";
import { useEffect, useState } from "react";
import AlreadyLoggedIn from "../components/AlreadyLoggedIn";
const Login = () => {
  const firebase = useFirebase();
  console.log(firebase);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log("Logining UP ..........");
    const result = await firebase.signInUserWithEmailAndPassword(
      email,
      password
    );
    console.log("Loged UP!!!!!!", result);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (firebase.isLoggedIn == true) {
      //navigate to Home
      navigate("/");
    }

    // what to give here >
    // this function will run when the component unmounts>
    // what to do here >
    // we want to stop listening for auth changes>
    // so we will unsubscribe from the
  }, [firebase, navigate]);
  // why passing firebase and navigate in the array>
  // if we don't pass them in the array then the useEffect will run every time the component re-renders> and we don't want that> we want it to run only once when the component mounts> so we pass the array to tell the useEffect to run only when the values in the array change> and since the values in the array are not going to change> the useEffect will run only once when the component mounts> and that's what we want>

  return (
    <>
      <div className="container">
        <h1
          style={{
            textAlign: "center",
            padding: 20,
          }}
          className="text-muted"
        >
          Login
        </h1>
        <Form onSubmit={handelSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>

        <div className=" mt-4">
          <h1
            style={{
              textAlign: "center",
            }}
          >
            {"---------- OR ----------"}
          </h1>

          <div className="mt-4 text-center">
            <button
              className="btn btn-light"
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
              onClick={firebase.signInWithGoogle}
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
