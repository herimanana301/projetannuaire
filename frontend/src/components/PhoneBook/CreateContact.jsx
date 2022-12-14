import React from "react";
import "./createcontact.css";

function CreateContact() {
  return (
    <div className="createcontact">
      <img src="../assets/profilepic.png" alt="profilepicture" />
      <div className="formcontact">
        <label htmlFor="text">Last name</label>
        <input id="lastname" name="lastname" type="text" />
        <label htmlFor="text">First name</label>
        <input id="firstname" name="firstname" type="text" />
        <label htmlFor="text">Phone Number</label>
        <input id="phonenumber" name="phonenumber" type="tel" />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
        <button
          className="Create-Contact"
          type="submit"
          onClick={CreateContact}
        >
          Create Contact
        </button>
      </div>
    </div>
  );
}

export default CreateContact;
