import React from "react";
import { Link } from "react-router-dom";
import Dark from '../../assets/img/dark.svg'
import Light from '../../assets/img/light.svg'
import "../../commonstyles/Globalstyles.css";
import { UseTheme } from "../../context/store/theme";


import "./style.css";
function Navbar() {
    const {theme,themeChange} = UseTheme()
  return (
    <div className="content-flexspace flex-row flex-wrap nav-container">
      <Link  to="/">
        <h2 className="heading logo-leftpad">
          <span className="color-lightblue">My</span>Notes
        </h2>
      </Link>
      <div className="flex-row">
        
        <Link className="nav-item sub-heading" to="/dashboard">
          Dashboard
        </Link>

        <Link className="nav-item sub-heading" to="/trash">
          Trash
        </Link>

        <Link className="nav-item sub-heading" to="/archive">
          Archived
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
