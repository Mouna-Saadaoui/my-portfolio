// src/Layout/MobileLayout.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FiMenu, FiX } from 'react-icons/fi';
import Footer from '../Home_Sections/Footer/Footer';
import './MobileLayout.css';

function MobileLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="mobile-wrapper">
      <header className="mobile-navbar">
      <HashLink to="/#home" className="mobile-logo" onClick={closeMenu}>
  My Portfolio.
</HashLink>
        <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </header>

      <nav className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <HashLink to="/#home" onClick={closeMenu}>Home</HashLink>
        <HashLink to="/#skills" onClick={closeMenu}>Skills</HashLink>
        <HashLink to="/#projects" onClick={closeMenu}>Projects</HashLink>
        <HashLink to="/#resume" onClick={closeMenu}>Resume</HashLink>
        <HashLink to="/#contact" onClick={closeMenu}>Contact</HashLink>
        <NavLink to="/aboutme/aboutme" onClick={closeMenu}>About Me</NavLink>
      </nav>

      <main className="mobile-content">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default MobileLayout;







