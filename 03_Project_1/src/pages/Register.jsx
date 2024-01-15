import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../context/FireBase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const firebase = useFirebase();
  console.log(firebase);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log("Signing UP ..........");
    const result = await firebase.signupUserWithEmailAndPassword(
      email,
      password
    );
    console.log("Signed UP!!!!!!", result);
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

  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
          padding: 20,
        }}
      >
        Register
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
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
          Create Account
        </Button>
      </Form>
    </div>
  );
};
export default Register;
