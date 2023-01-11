import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

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

export { ForLogedPage, ToHome };
