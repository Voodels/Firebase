import React from "react";

const SignUp = ({
  handleEmail,
  handlePassword,
  SignUpUser,
  email,
  password,
}) => {
  return (
    <div className="container" style={{}}>
      <h1>SignUP Page</h1>
      <div className="box">
        <form>
          <div className="inputBox">
            <label>
              Email
              <input type="email" onChange={handleEmail} value={email} />
            </label>
          </div>
          <div className="inputBox">
            <label>
              Password
              <input
                type="password"
                onChange={handlePassword}
                value={password}
              />
            </label>
          </div>
          <button
            type="button" // Set the type to "button"
            style={{
              marginTop: "10px",
              padding: "10px",
            }}
            onClick={SignUpUser}
          >
            SignUp User
          </button>
        </form>
      </div>
      <hr />
    </div>
  );
};

export default SignUp;
