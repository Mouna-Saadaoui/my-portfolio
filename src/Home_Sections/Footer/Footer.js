import React from 'react';
import './Footer.css';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // for smooth scrolling

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        {/* Contact Icons */}
        <div className="footer-icons">
          {/* Opens Gmail Compose */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mouna.saadaoui202@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/mouna-saadaoui-2524a6312/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="footer-nav">
          <HashLink smooth to="/#home" className="footer-link">Home</HashLink>
          <HashLink smooth to="/#skills" className="footer-link">Skills</HashLink>
          <HashLink smooth to="/#projects" className="footer-link">Projects</HashLink>
          <HashLink smooth to="/#resume" className="footer-link">Resume</HashLink>
          <NavLink to="/aboutme/aboutme" className="footer-link">About Me</NavLink>
          <HashLink smooth to="/#contact" className="footer-link">Contact</HashLink>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Moona Saadaoui. All rights reserved.</p>
        <p className="footer-tagline">Made with vision & caffeine</p>
      </div>
    </footer>
  );
}

export default Footer;


