import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header>
      <div className="navbar navbar-expand-lg ">
        <div id="branding">
          <h1>
            <span className="highlight">IT </span> World
          </h1>
        </div>
        
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        
        <nav className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link text-white">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="services" className="nav-link text-white">
                Services
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};


export default Navbar;
