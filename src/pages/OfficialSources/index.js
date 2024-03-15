import React from "react";
import { Link } from "react-router-dom";
import FooterBtn from "../../components/FooterBtn";

const OfficialSources = () => {
  return (
    <div className="main-container">
      <header className="header">
        <h1>ПУТІВНИК НАУ</h1>
      </header>
      <div className="page-name">ОФІЦІЙНІ СОЦМЕРЕЖІ</div>
      <div className="content">
        <nav className="navigation">
          <Link to="https://t.me/officialnau">
            <button className="nav-button">TELEGRAM</button>
          </Link>
          <Link to="https://www.facebook.com/officialnau">
            <button className="nav-button">FACEBOOK</button>
          </Link>
          <Link to="https://www.instagram.com/nau.inst?igshid=MzRlODBiNWFlZA%3D%3D">
            <button className="nav-button">INSTAGRAM</button>
          </Link>
          <Link to="https://www.youtube.com/@medianau">
            <button className="nav-button">YOUTUBE</button>
          </Link>
          <Link to="https://www.tiktok.com/@nau_tik_tok?_t=8dvqfF5fRDB&_r=1">
            <button className="nav-button">TIKTOK</button>
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

export default OfficialSources;
