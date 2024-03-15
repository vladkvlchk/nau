import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main-container">
      <header className="header">
        <h1>ПУТІВНИК НАУ</h1>
      </header>
      <div className="content">
        <p>
          Цей Путівник створений для зручного та швидкого доступу до всіх
          офіційних джерел Національного авіаційного університету. Завдяки йому
          всі важливі та корисні покликання будуть завжди під рукою.
        </p>
        <div className="care-statement">
          З турботою про вас,
          <br />
          НАУ.
        </div>
        <nav className="navigation">
          <Link to="/admissions">
            <button className="nav-button">ПРИЙМАЛЬНА КОМІСІЯ</button>
          </Link>
          <Link to="https://nau.edu.ua/">
            <button className="nav-button">САЙТ НАУ</button>
          </Link>
          <Link to="/official-sources">
            <button className="nav-button">ОФІЦІЙНІ СОЦМЕРЕЖІ</button>
          </Link>
          <Link to="/faculty-websites">
            <button className="nav-button">ФАКУЛЬТЕТИ</button>
          </Link>
          <Link to="https://studcity.nau.edu.ua/">
            <button className="nav-button">САЙТ СТУДМІСТЕЧКА</button>
          </Link>
        </nav>
      </div>
      <div className="emptyFooter"></div>
    </div>
  );
};

export default Main;
