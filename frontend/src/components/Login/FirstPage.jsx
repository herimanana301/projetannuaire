import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function FirstPage() {
  return (
    <div className="firstpage">
      <img
        src="https://cdn.discordapp.com/attachments/1046791933583949824/1050694287517569064/logo.png"
        alt="logo"
      />
      <h1>BOOKI</h1>
      <Link to="/Register">
        <button className="login-button" type="button">
          Register
        </button>
      </Link>

      <Link to="/Login">Already have an acount ?</Link>
    </div>
  );
}

export default FirstPage;
