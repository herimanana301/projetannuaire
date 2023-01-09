import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function ForLogedPage(component) {
  const token = Cookies.get("access_token");
  if (!token) {
    return <Navigate to="/login" />;
  }
  return component;
}

export default ForLogedPage;
