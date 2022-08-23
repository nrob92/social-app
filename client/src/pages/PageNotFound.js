import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>PageNotFound :/</h1>
      <h3>Go to home page:</h3>
      <Link to="/">Home</Link>
    </div>
  );
};

export default PageNotFound;
