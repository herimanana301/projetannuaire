import { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get("http://localhost:3305/admin/allusers");
      setUsers(result.data);
      console.warn(result.data);
    };
    getData();
  }, []);
  return (
    <div>
      {users.length < 1 ? (
        <p>There is no user yet</p>
      ) : (
        users.map((user) => {
          return (
            <div>
              <ul>
                <li key={user.id}>
                  {user.first_name}
                  {" | "}
                  {user.email}
                </li>
              </ul>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Admin;
