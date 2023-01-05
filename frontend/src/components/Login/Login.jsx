import React from "react";
import "./login.css";
import PropTypes from "prop-types";
import logo from "../../assets/logo.png";

function Login({ setEmail, setPassword, login }) {
  return (
    <div className="firstpage">
      <img src={logo} alt="logo" />
      <div className="wording">
        <label htmlFor="email">Email</label>
        <input
          className="input-insertion"
          id="email"
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          className="input-insertion"
          id="password"
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="login-button" type="submit" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export default Login;
