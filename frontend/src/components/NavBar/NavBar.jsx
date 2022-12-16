import React from "react";
import { Link } from "react-router-dom";
import "../PhoneBook/contactpage.css";

function NavBar() {
  return (
    <div className="navbar">
      <input type="text" />
      <Link to="/CreateContact">
        <button type="button">
          <img src="../src/assets/add.png" alt="+" />
        </button>
      </Link>
    </div>
  );
}

export default NavBar;
