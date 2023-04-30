import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navbar() {
  const publicUrl = process.env.REACT_APP_PUBLIC_URL;

  return (
    <header className="navbar-fixed-top">
      <div className="container">
        <div className="logo">
          <Link to="/">
            {/**
          <img src={`${publicUrl}/images/logo.png`} alt="" />
        */}
          </Link>
        </div>
        <nav className="webimenu">
          <div className="menu-toggle">
            <i className="fa fa-bars"></i>
          </div>
          <ul className="ownmenu">
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/ourservices">SERVICES</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
