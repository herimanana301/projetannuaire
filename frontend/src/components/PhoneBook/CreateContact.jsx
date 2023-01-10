import { useState } from "react";
import axios from "axios";
import "./createcontact.css";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

function CreateContact() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstname] = useState("");
  const [phoneNumber, setPhoneNumer] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const token = Cookies.get("access_token");
  const decodedToken = jwtDecode(token);
  const idUser = decodedToken.userId;

  const handlePush = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3305/api/contacts", {
        idUser,
        lastName,
        firstName,
        phoneNumber,
        email,
      });
      if (response) {
        setSuccess(true);
      }
    } catch (err) {
      if (err) {
        console.error(err);
      }
    }
  };
  return (
    <div className="createcontact">
      {success ? <h1>Contact enregistrer avec succes</h1> : null}
      <img src="/src/assets/profilepic.png" alt="profilepicture" />
      <div className="formcontact">
        <label htmlFor="text">Last name</label>
        <input
          id="lastname"
          name="lastname"
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          required
        />
        <label htmlFor="text">First name</label>
        <input
          id="firstname"
          name="firstname"
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          required
        />
        <label htmlFor="text">Phone Number</label>
        <input
          id="phonenumber"
          name="phonenumber"
          type="tel"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumer(e.target.value);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button className="Create-Contact" type="submit" onClick={handlePush}>
          Create Contact
        </button>
      </div>
    </div>
  );
}

export default CreateContact;
