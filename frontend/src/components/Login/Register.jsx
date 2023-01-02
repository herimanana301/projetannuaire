import { React } from "react";
import "./login.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Register({ setEmail, setPassword, firstname, lastname, register }) {
  return (
    <div className="firstpage">
      <img
        src="https://cdn.discordapp.com/attachments/1046791933583949824/1050694287517569064/logo.png"
        alt="logo"
      />
      <div className="form">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="text">First name</label>
        <input
          id="firstname"
          name="firstname"
          type="text"
          onChange={(e) => {
            firstname(e.target.value);
          }}
        />
        <label htmlFor="text">Last name</label>
        <input
          id="lastname"
          name="lastname"
          type="text"
          onChange={(e) => {
            lastname(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="login-button" type="submit" onClick={register}>
          Register
        </button>
      </div>
      <Link to="/Login">Already have an account ?</Link>
    </div>
  );
}

Register.propTypes = {
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  firstname: PropTypes.func.isRequired,
  lastname: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

export default Register;
