import React from "react";
import "../PhoneBook/style.css";

function NavBar() {
  return (
    <div className="navbar">
      <input type="text" />
      <button type="button">
        <img src="../src/assets/add.png" alt="+" />
      </button>
    </div>
  );
}

export default NavBar;
