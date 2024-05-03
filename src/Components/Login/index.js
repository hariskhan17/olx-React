import { MdEmail } from "react-icons/md";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signIn } from "../../Firebase/firebase";
import { FaLock } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginHua = async () => {
    try{
      await signIn({ email, password });
      navigate('/home')
    }catch(e){
      console.log(e)
    }
  };

  return (
<div className="loginbody">
<div className="loginpage">
             
             <h1>Login</h1>
                <label htmlFor="email" className="form-label">
                  
                </label>
<div className="input-box">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"  
                />
                <MdEmail className="icon" />
                </div>         
             <br/>
                <label htmlFor="password" className="form-label">
                  
                </label>
<div className="input-box">
                  <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
                <FaLock className="icon" />
                </div>       
              <br/>
              <br/>
              <button className="loginbtn" onClick={loginHua}>
                Login
              </button>
              <p className="next">
               Don't have an account?{" "}
              <a><span onClick={() => navigate("/register")}>Register</span></a>  
              </p>
              
              </div></div>  );
}

export default Login;
