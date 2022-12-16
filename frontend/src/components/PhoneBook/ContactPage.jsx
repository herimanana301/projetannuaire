import React from "react";
import NavBar from "../NavBar/NavBar";
import "./contactpage.css";

function ContactPage() {
  return (
    <div className="contactpage">
      <div className="categorie">
        <button className="allcontact" type="button">
          All
        </button>

        <button className="addnewcategorie" type="button">
          Add New Category
        </button>
      </div>
      <p>There is no contact yet</p>
      <NavBar />
    </div>
  );
}

export default ContactPage;
