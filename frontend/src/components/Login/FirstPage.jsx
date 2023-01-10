import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function FirstPage() {
  return (
    <div className="firstpage">
      <img src={logo} alt="logo" />
      <h1>BOOKI</h1>
      <div className="firstpagebutton">
        <Link to="/register">
          <button className="login-button" type="button">
            Register
          </button>
        </Link>
        <Link to="/login">
          <button className="register-button" type="button">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FirstPage;
