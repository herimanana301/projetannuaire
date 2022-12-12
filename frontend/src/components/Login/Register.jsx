import React from "react";
import "./login.css";

function Register() {
  return (
    <div className="firstpage">
      <img
        src="https://cdn.discordapp.com/attachments/1046791933583949824/1050694287517569064/logo.png"
        alt="logo"
      />
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" />
      <label htmlFor="text">First name</label>
      <input id="text" name="firstname" type="text" />
      <label htmlFor="text">Last name</label>
      <input id="text" name="lastname" type="text" />
      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" />
      <button type="submit">Register</button>

      <href>Already have an account</href>
    </div>
  );
}

export default Register;
