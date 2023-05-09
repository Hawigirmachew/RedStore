import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import banner from "../assets/image1.png";
function Account() {
  // const [display, setDisplay] = useState(false)
  const login = () => {
    document.getElementById("login").style.transform = "translateX(0)";
    document.getElementById("signup").style.transform = "translateX(500px)";
    document.getElementById("btn-line").style.transform = "translateX(-62px)";
    
  };
  const signup = () => {
    document.getElementById("login").style.transform = "translateX(500px)";
    document.getElementById("signup").style.transform = "translateX(0px)";
    document.getElementById("btn-line").style.transform = "translateX(50px)";
    
  };
  return (
    <div className="container account">
      <img src={banner} alt="banner" />
      <div className="form-container">
        <div className="form-btn">
          <button className="btn" onClick={login}>
            Login
           
          </button>
          <button className="btn" onClick={signup}>
            Register
            
          </button>
          <hr id="btn-line" />
        </div>
        <form action="" className="login-form" id="login">
          <input type="text" name="" id="" placeholder="Username" required />
          <input type="password" name="" id="" placeholder="Password" required />
          <button type="submit" className="btn-login">
            Login
          </button>
          <Link path="/password">Forgot Password</Link>
        </form>
        <form action="" className="signup-form" id="signup">
          <input type="text" name="" id="" placeholder="Username" required/>
          <input type="email" name="" id="" placeholder="Email" required/>
          <input type="password" name="" id="" placeholder="Password" required/>
          <button type="submit" className="btn-signup">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Account;
