import React from "react";
import Logo from "./logo.svg";
import "./NavLogo.css"

const NavLogo = (props) => {
    return (
      <nav id="navbar" onClick={props.customClickEvent}>
        <div className="nav-wrapper">
          <a
            to={"/"}
            className="left brand-logo"
          >
            <img src={Logo} alt="logo" className="photo" />
          </a>
        </div>
      </nav>
    );
}

export default NavLogo;
