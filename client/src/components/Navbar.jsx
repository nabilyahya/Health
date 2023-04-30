import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <header className="navbar-fixed-top">
      <div className="container">
        <div className="logo">
          <a href="index.html">
            {/**
          <img src="images/logo.png" alt="" />
        */}
          </a>
        </div>
        <nav className="webimenu">
          <div className="menu-toggle">
            <i className="fa fa-bars"></i>
          </div>
          <ul className="ownmenu">
            <li className="active">
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="02-about-us.html">About us</a>
            </li>
            <li>
              <a href="services.html">SERVICES</a>
            </li>
            <li>
              <a href="12-contact.html">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
