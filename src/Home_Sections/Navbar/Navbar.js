import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <HashLink smooth to="/#home" className="logo">
          My portfolio.
        </HashLink>
      </div>
      <div className="navbar-right">
        <HashLink smooth to="/#home" className="nav-link">Home</HashLink>
        <HashLink smooth to="/#skills" className="nav-link">Skills</HashLink>
        <HashLink smooth to="/#projects" className="nav-link">Projects</HashLink>
        <HashLink smooth to="/#resume" className="nav-link">Resume</HashLink>
        <HashLink smooth to="/#contact" className="nav-link">Contact</HashLink>
        <NavLink to="/aboutme/aboutme" className="nav-link">About Me</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

