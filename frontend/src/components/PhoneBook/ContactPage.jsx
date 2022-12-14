import React from "react";
import NavBar from "../NavBar/NavBar";

function ContactPage() {
  return (
    <div className="contactpage">
      <button className="allcontact" type="button">
        All
      </button>
      <button className="addnewcategorie" type="button">
        Add New Category
      </button>

      <p>There is no contact yet</p>
      <NavBar />
    </div>
  );
}

export default ContactPage;
