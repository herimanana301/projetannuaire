import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

function Admin() {
  const [admin, setAdmin] = useState(false);
  const [redirect, setRedirect] = useState(null);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const token = Cookies.get("access_token");
    const decodedToken = jwtDecode(token);
    const isadmin = decodedToken.isAdmin;
    try {
      if (isadmin === 1) {
        setAdmin(true);
      } else {
        setRedirect(<Navigate to="/*" />);
      }
      console.log(isadmin);
      console.log(admin);
    } catch (error) {
      console.error(error);
    }
  }, []);
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get("http://localhost:3305/admin/allusers");
      setUsers(result.data);
    };
    getData();
  }, []);
  return (
    <div>
      {admin ? (
        users.length < 1 ? (
          <p>There is no user yet</p>
        ) : (
          users.map((user) => {
            return (
              <div key={user.id}>
                <ul>
                  <li>
                    {user.first_name}
                    {" | "}
                    {user.email}
                  </li>
                </ul>
              </div>
            );
          })
        )
      ) : (
        redirect
      )}
    </div>
  );
}

export default Admin;
