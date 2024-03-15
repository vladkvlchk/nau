import React from "react";
import { Link } from "react-router-dom";
import FacultyItem from "../../components/FacultyItem";
import FooterBtn from "../../components/FooterBtn";

const FacultyWebsites = () => {
  const faculties = [
    {
      shortName: "АКФ",
      fullName: "Аерокосмічний факультет",
      link: "http://aki.nau.edu.ua/en/",
    },
    {
      shortName: "ЮФ",
      fullName: "Юридичний факультет",
      link: "http://www.law.nau.edu.ua/",
    },
    {
      shortName: "ФКПІ",
      fullName: "Факультет кібербезпеки та програмної інженерії",
      link: "https://fkpi.nau.edu.ua/",
    },
    {
      shortName: "ФКНТ",
      fullName: "Факультет комп'ютерних наук і технологій",
      link: "https://fcst.nau.edu.ua/",
    },
    {
      shortName: "ФАЕТ",
      fullName: "Факультет аеронавігації, електроніки та телекомунікації",
      link: "https://sites.google.com/npp.nau.edu.ua/faet/Home",
    },
    {
      shortName: "ФЕБІТ",
      fullName: "Факультет екологічної безпеки, інженерії та технологій",
      link: "https://febit.nau.edu.ua/",
    },
    {
      shortName: "ФТМЛ",
      fullName: "Факультет транспорту, менеджменту і логістики",
      link: "https://ftml.nau.edu.ua/",
    },
    {
      shortName: "ФЕБА",
      fullName: "Факультет економіки та бізнес-адміністрування",
      link: "https://feba.nau.edu.ua/",
    },
    {
      shortName: "ФЛСК",
      fullName: "Факультет лінгвістики та соціальних комунікацій",
      link: "https://flsc.nau.edu.ua/",
    },
    {
      shortName: "ФНСА",
      fullName: "Факультет наземних споруд і аеродромів",
      link: "http://fgsa.nau.edu.ua/",
    },
    {
      shortName: "ФМВ",
      fullName: "Факультет міжнародних відносин",
      link: "http://fmv.nau.edu.ua/",
    },
    {
      shortName: "ННІНО",
      fullName: "Навчально-науковий інститут неперервної освіти",
      link: "https://ino.nau.edu.ua/",
    },
    {
      shortName: "КВП",
      fullName: "Кафедра військової підготовки НАУ",
      link: "http://www.kvp.nau.edu.ua/",
    },
  ];
  return (
    <div className="main-container">
      <header className="header">
        <h1>ПУТІВНИК НАУ</h1>
      </header>
      <div className="page-name">САЙТИ ФАКУЛЬТІВ</div>
      <div className="content">
        <nav className="facultyList">
          {faculties.map((faculty) => (
            <FacultyItem {...faculty} />
          ))}
        </nav>
      </div>
      <FooterBtn />
    </div>
  );
};

export default FacultyWebsites;
