import React from "react";
import "./login.css";
import PropTypes from "prop-types";

function Login({ setEmail, setPassword, login }) {
  return (
    <div className="firstpage">
      <img
        src="https://cdn.discordapp.com/attachments/1046791933583949824/1050694287517569064/logo.png"
        alt="logo"
      />
      <div className="wording">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
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
