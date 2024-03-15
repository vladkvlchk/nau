import React from "react";
import { Link } from "react-router-dom";

const FooterBtn = () => {
  return (
    <Link to="/">
      <button className="goHomeBtn">
        <h1>^</h1>
        <h2>ГОЛОВНА СТОРІНКА</h2>
      </button>
    </Link>
  );
};

export default FooterBtn;
