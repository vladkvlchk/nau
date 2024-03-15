import React from "react";
import { Link } from "react-router-dom";
import FooterBtn from "../../components/FooterBtn";

const Admissions = () => {
  return (
    <div className="main-container">
      <header className="header">
        <h1>ПУТІВНИК НАУ</h1>
      </header>
      <div className="page-name">ПРИЙМАЛЬНА КОМІСІЯ</div>
      <div className="content">
        <div>
          <b>{`+38(044) 497 41 05`}</b>
        </div>
        <div>
          <b>pk@nau.edu.ua</b>
        </div>
        <nav className="navigation">
          <Link to="https://pk.nau.edu.ua/">
            <button className="nav-button">САЙТ ПК</button>
          </Link>
          <Link to="https://www.facebook.com/pk.nau.ua">
            <button className="nav-button">FACEBOOK ПК</button>
          </Link>
          <Link to="https://t.me/pknau">
            <button className="nav-button">TELEGRAM ПК</button>
          </Link>
          <Link to="https://t.me/NAU_channel_bot">
            <button className="nav-button">БОТ ДЛЯ ЗАПИТАНЬ</button>
          </Link>
        </nav>
      </div>
      <FooterBtn />
    </div>
  );
};

export default Admissions;
