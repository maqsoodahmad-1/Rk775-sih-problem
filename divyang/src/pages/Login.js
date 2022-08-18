import React, { useEffect, useState } from "react";
import { link, useNavigate } from "react-router-dom"
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, erro] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(loading) {
            //may trigger a loading screen 
            return;
        }
        if(user) navigate('/home');
    }, [user, loading]);
    return(
        <div className="login">
        <div className="login__container">
          <input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            className="login__btn"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
          <button className="login__btn login__google" onClick={signInWithGoogle}>
            Login with Google
          </button>
          <div>
            <link to="/reset">Forgot Password</link>
          </div>
          <div>
            Don't have an account? <link to="/register">Register</link> now.
          </div>
        </div>
      </div>
    );

}
export default Login