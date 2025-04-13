import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Herbeos.css';

function HerbeosPage() {
  return (
    <motion.div
      className="herbeos-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="herbeos-container">
        <motion.div
          className="herbeos-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1>Strategic Branding & Communication for Herbeos</h1>
          <p>
            This project focuses on promoting <em>Herbéos</em>, a Tunisian brand of natural skincare products.
            It aims to improve the brand's visibility, reach more customers, and highlight its commitment to
            quality and sustainability through an effective marketing communication strategy.
          </p>

          <p className="herbeos-note">
            For full access to my reports and work, please check my{' '}
            <a
              href="https://www.linkedin.com/in/mouna-saadaoui-2524a6312/"
              target="_blank"
              rel="noopener noreferrer"
              className="herbeos-linkedin"
            >
              <FaLinkedin className="linkedin-icon" />
              <span className="linkedin-handle">LinkedIn profile</span>
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          className="herbeos-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >  
        <motion.img
            src={`${process.env.PUBLIC_URL}/Herbeos.webp`}
            alt="Herbeos Visual" 
            loading="lazy"
            className="herbeos-image"
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          />
        </motion.div>
         
      </div>

      <Link to="/" className="back-btn">← Back to Projects</Link>
    </motion.div>
  );
}

export default HerbeosPage;
