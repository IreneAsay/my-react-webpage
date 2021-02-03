import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-font">
        <span className="navbar-brand mb-0 h1">Irene Asay</span>
        <div className="ml-auto">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <link rel="stylesheet" href="" />

              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active"
              >
                {" "}
                About
              </NavLink>

              <NavLink
                to="/portfolio"
                className="nav-link"
                activeClassName="active"
              >
                {" "}
                Portfolio
              </NavLink>

              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
