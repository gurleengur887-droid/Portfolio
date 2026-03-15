
import React from "react";
import './header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="top-header">
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
         <li>
              <Link to="/About">About Me</Link>
         </li>
         <li>
          <Link to="/Project">Projects</Link>
         </li>
         <li>
          <Link to="/Contact">Contact Me</Link>
         </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
