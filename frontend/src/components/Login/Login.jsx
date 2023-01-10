import { useState } from "react";
import "./login.css";
import PropTypes from "prop-types";
import Axios from "axios";
import Cookies from "js-cookie";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Login({ setEmail, setPassword, email, password }) {
  const [errorState, setErrorState] = useState();
  const handleLogin = () => {
    Axios.post("http://localhost:3305/login", {
      email,
      password,
    })
      .then((response) => {
        Cookies.set("access_token", response.data.accessToken, {
          sameSite: "Lax",
        });
        window.location.reload(false);
      })
      .catch((error) => {
        if (error) {
          setErrorState(true);
        }
      });
  };
  return (
    <div className="firstpage">
      {errorState ? <h1>Vos identifiants sont incorrect</h1> : null}
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
        <button className="login-button" type="submit" onClick={handleLogin}>
          Login
        </button>
      </div>
      <Link className="login-link" to="/register">
        don't have an account ?
      </Link>
    </div>
  );
}

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default Login;
