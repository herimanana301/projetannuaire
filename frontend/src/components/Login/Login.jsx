import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="firstpage">
      <img src="src/assets/logo.png" alt="logo" />
      <div className="wording">
        <label htmlFor="email">Email</label>
        <input required id="email" name="email" type="email" />
        <label htmlFor="password">Password</label>
        <input required id="password" name="password" type="password" />
        <button className="login-button" type="submit">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
