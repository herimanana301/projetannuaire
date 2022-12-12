import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="firstpage">
      <img
        src="https://cdn.discordapp.com/attachments/1046791933583949824/1050694287517569064/logo.png"
        alt="logo"
      />
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" />
      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" />
    </div>
  );
}

export default Login;
