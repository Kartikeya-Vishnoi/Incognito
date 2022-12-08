import React, { useState,useContext } from "react";
import classes from "./InvestorLogin.module.css";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FireBase";
import {useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/AuthContext";

function InvestorLogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, SetError] = useState(false);
  const {dispatch}=useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    //const auth=getAuth();
    signInWithEmailAndPassword (auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        navigate("/investorhome")
      })
      .catch((error) => {
        console.log(error)
        SetError(true)
      });
  };
  return (
    <React.Fragment>
    
      <form>
      <div className={classes.login}>
        <input
          id="email-address"
          name="email"
          type="email"
          required
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={handleLogin}>
          Login
        </button>
        <p>New User?</p>
        </div>
        <div className={classes.signup}>
        <button onClick={() => {navigate("/signup")}}>
          Sign Up
        </button>
        </div>
        {error && <p className={classes.warning}>Wrong Email or Password</p>}
      </form>
    
    </React.Fragment>
  );
}
export default InvestorLogIn;
