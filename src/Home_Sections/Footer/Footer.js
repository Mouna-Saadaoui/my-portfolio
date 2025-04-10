import React from 'react';
import './Footer.css';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-icons">
          <a
            href="mailto:mouna.saadaoui202@gmail.com"
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

        <nav className="footer-nav">
          <a href="/" className="footer-link">Home</a>
          <a href="#skills" className="footer-link">Skills</a>
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#resume" className="footer-link">Resume</a>
          <NavLink to="/aboutme/aboutme" className="footer-link">About Me</NavLink>
          <a href="#contact" className="footer-link">Contact</a>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Moona Saadaoui. All rights reserved.</p>
        <p className="footer-tagline">Made with vision & caffeine </p>
      </div>
    </footer>
  );
}

export default Footer;

