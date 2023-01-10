import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import axios from "axios";

const token = Cookies.get("access_token");
function ForLogedPage(component) {
  if (!token) {
    return <Navigate to="/login" />;
  }
  return component;
}

function ToHome(component) {
  if (token) {
    return <Navigate to="/home" />;
  }
  return component;
}

// function ToAdmin(component) {
//   const [isAdmin, setIsAdmin] = useState(false);
//   useEffect(() => {
//     const decodedToken = jwtDecode(token);
//     const idUser = decodedToken.userId;
//     const getData = async () => {
//       try {
//         const result = await axios.post(`http://localhost:3305/currentuser`, {
//           idUser,
//         });
//         if (result.data.isadmin === 1) {
//           setIsAdmin(true);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     getData();
//   }, []);
//   if (!isAdmin) {
//     return <Navigate to="/home" />;
//   }
//   return component;
// }
export { ForLogedPage, ToHome };
