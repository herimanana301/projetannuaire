import React from "react";
import { Link } from "react-router-dom";
import pagenotfoundImage from "../../assets/pagenotfound.jpg";

function PageNotFound() {
  return (
    <div className="pageNotFound">
      <h1>Oops..! 404 Page Not Found</h1>
      <p>Looks like you came to wrong page on our server</p>
      <Link to="/">Return to a safe place</Link>
      <img src={pagenotfoundImage} height="500" width="500" alt="not found" />
    </div>
  );
}

export default PageNotFound;
