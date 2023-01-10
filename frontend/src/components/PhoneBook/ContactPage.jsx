import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import NavBar from "../NavBar/NavBar";
import "./contactpage.css";

function ContactPage() {
  const [userContact, setUserContact] = useState([]);
  const token = Cookies.get("access_token");
  const decodedToken = jwtDecode(token);
  const idUser = decodedToken.userId;
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `http://localhost:3305/api/contacts/${idUser}`
      );
      console.warn(result.data);
      setUserContact(result.data);
    };
    getData();
  }, []);
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
      {userContact.length < 1 ? (
        <p>There is no contact yet</p>
      ) : (
        userContact.map((contact) => (
          <div>
            <ul>
              <li key={contact.id}>
                {contact.contact_profilepicture}
                {contact.contact_firstname}
                {contact.contact_lastname}
                {contact.contact_email}
                {contact.contact_phonenumber}
                {contact.favoris}
              </li>
            </ul>
          </div>
        ))
      )}

      <NavBar />
    </div>
  );
}

export default ContactPage;
