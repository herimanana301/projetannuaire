import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function FirstPage() {
  return (
    <div className="firstpage">
      <img src="/src/assets/logo.png" alt="logo" />
      <h1>BOOKI</h1>
      <Link to="/Register">
        <button className="login-button" type="button">
          Register
        </button>
      </Link>

      <Link className="login-link" to="/Login">
        Already have an acount ?
      </Link>
    </div>
  );
}

export default FirstPage;
