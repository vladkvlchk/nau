import React from "react";
import { Link } from "react-router-dom";

const FacultyItem = ({ shortName, fullName, link }) => {
  return (
    <Link to={link}>
      <div className="facultyBtn">
        <div className="facultyBtn_leftSide">
          <p>{shortName}</p>
        </div>
        <div className="facultyBtn_rightSide">
          <p>{fullName}</p>
        </div>
      </div>
    </Link>
  );
};

export default FacultyItem;
