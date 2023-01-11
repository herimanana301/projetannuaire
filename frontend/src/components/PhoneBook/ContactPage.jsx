import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import NavBar from "../NavBar/NavBar";
import "./contactpage.css";

function ContactPage() {
  const key = new TextEncoder().encode("0123456789abcdef0123456789abcdef");
  const [userContact, setUserContact] = useState([]);
  const token = Cookies.get("access_token");
  const decodedToken = jwtDecode(token);
  const idUser = decodedToken.userId;
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `http://localhost:3305/api/contacts/${idUser}`
      );
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
        userContact.map((contact) => {
          return (
            <div key={contact.contact_email}>
              <ul>
                <Link to={`/details/${contact.id}`}>
                  <li>
                    {contact.contact_profilepicture}
                    {contact.contact_firstname}
                    {contact.contact_lastname}
                    {contact.contact_email}
                    {contact.contact_phonenumber}
                    {contact.favoris}
                  </li>
                </Link>
              </ul>
            </div>
          );
        })
      )}

      <NavBar />
    </div>
  );
}

export default ContactPage;
