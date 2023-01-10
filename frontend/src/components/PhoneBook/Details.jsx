import { React, useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import CryptoJS from "crypto-js";
import PropTypes from "prop-types";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details() {
  const key = CryptoJS.enc.Utf8.parse("0123456789abcdef0123456789abcdef");
  const [contactData, setContactData] = useState([]);
  const token = Cookies.get("access_token");
  const decodedToken = jwtDecode(token);
  const idUser = decodedToken.userId;
  const { idUsers } = useParams();
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `http://localhost:3305/api/contacts/${idUser}`
      );
      setContactData(result.data);
    };
    getData();
  }, []);
  const data = contactData.filter((Type) => Type.id === parseInt(idUsers, 10));
  // const [favoris, setFavoris] = useState(false)| Pour plus tard
  return (
    <div>
      {data.map((dataFiltered) => (
        <ul>
          <img
            src={dataFiltered.contact_profilePicture}
            alt="contact_profile"
          />
          <li>{dataFiltered.contact_firstname}</li>
          <li>{dataFiltered.contact_lastname}</li>
          <li>{dataFiltered.contact_phonenumber}</li>
          <li>{dataFiltered.contact_email}</li>
        </ul>
      ))}
    </div>
  );
}

export default Details;
