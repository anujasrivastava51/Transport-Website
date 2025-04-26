import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo_transparent.png';
import download from '../../assets/download.png';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Function to toggle the navbar
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // Function to close the navbar after clicking a NavLink
  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbarBg navbar-blur fixed-top">
      <div className="container-fluid">
        {/* Logo Section */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          {/* <img className="logo" src={download} alt="Logo" /> */}
          <h1 className='logo'>TRANSPORT</h1>
        </a>

        {/* Toggle Button for Small Screens */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarSupportedContent"
          aria-expanded={isNavbarOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="d-flex gap-4 navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/"
                activeClassName="active"
                onClick={closeNavbar}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/About"
                activeClassName="active"
                onClick={closeNavbar}
              >
                ABOUT US
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Services"
                activeClassName="active"
                onClick={closeNavbar}
              >
                SERVICES
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Testimonials"
                activeClassName="active"
                onClick={closeNavbar}
              >
                TESTIMONIALS
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Blog"
                activeClassName="active"
                onClick={closeNavbar}
              >
                BLOG
              </NavLink>
            </li> */}
            
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Contact"
                activeClassName="active"
                onClick={closeNavbar}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



