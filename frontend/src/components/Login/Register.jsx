import React from "react";
import "./register.css";
import PropTypes from "prop-types";

function Register({ setEmail, setPassword, firstname, lastname, register }) {
  return (
    <div className="register">
      <img
        src="https://cdn.discordapp.com/attachments/1046791933583949824/1050694287517569064/logo.png"
        alt="logo"
      />
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
        id="text"
        name="firstname"
        type="text"
        onChange={(e) => {
          firstname(e.target.value);
        }}
      />
      <label htmlFor="text">Last name</label>
      <input
        id="text"
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
      <button type="submit" onClick={register}>
        Register
      </button>
    </div>
  );
}

Register.propTypes = {
  setEmail: PropTypes.string.isRequired,
  setPassword: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  register: PropTypes.string.isRequired,
};

export default Register;
