import React from "react";
import { Link } from "react-router-dom";
import "../PhoneBook/contactpage.css";
import addImage from "../../assets/add.png";
import "./navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <input type="text" />
      <Link to="/addcontact">
        <button className="add" type="button">
          <img className="img-add" src={addImage} alt="+" />
        </button>
      </Link>
    </div>
  );
}

export default NavBar;
