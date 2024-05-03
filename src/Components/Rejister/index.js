import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../../Firebase/firebase";

function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const register = async () => {
    try {
           await signUp({ email, password, firstName, lastName });
     
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="signup-page">
      <h1>Register</h1>

      <input
        onChange={(e) => setFirstName(e.target.value)}
        type="text"
        className="form-control"
        id="firstName"
        placeholder="Enter your first name"
      />

      <br />
      <br />

      <input
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        className="form-control"
        id="lastName"
        placeholder="Enter your last name"
      />
      <br />

      <br />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        className="form-control"
        id="email"
        placeholder="Enter your email"
      />
      <br />

      <br />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="form-control"
        id="password"
        placeholder="Enter your password"
      />
      <br /><br />


      <button className="signupbtn" onClick={register} >
       Register
      </button>
      <p className="signupnext">
        Already have an account?{" "}
        <span onClick={() => navigate("/login")}>Login</span>
      </p>
    </div>

  );
}

export default Register;
