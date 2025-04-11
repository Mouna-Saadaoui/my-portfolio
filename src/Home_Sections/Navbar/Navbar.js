import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <HashLink smooth to="/#home" className="logo" onClick={closeMenu}>
          My portfolio.
        </HashLink>
      </div>

      <div className={`hamburger-icon`} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`navbar-right ${isOpen ? 'open' : ''}`}>
        <HashLink smooth to="/#home" className="nav-link" onClick={closeMenu}>Home</HashLink>
        <HashLink smooth to="/#skills" className="nav-link" onClick={closeMenu}>Skills</HashLink>
        <HashLink smooth to="/#projects" className="nav-link" onClick={closeMenu}>Projects</HashLink>
        <HashLink smooth to="/#resume" className="nav-link" onClick={closeMenu}>Resume</HashLink>
        <HashLink smooth to="/#contact" className="nav-link" onClick={closeMenu}>Contact</HashLink>
        <NavLink to="/aboutme/aboutme" className="nav-link" onClick={closeMenu}>About Me</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;


