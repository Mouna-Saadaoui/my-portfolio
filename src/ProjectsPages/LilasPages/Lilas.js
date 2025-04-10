import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Lilas.css';

function LilasPage() {
  return (
    <motion.div
      className="lilas-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="lilas-container">
        <motion.div
          className="lilas-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1>Expanding Lilas Beyond Borders</h1>
          <p>
          This project analyzes the international expansion strategy of Lilas, a Tunisian hygiene brand. It identifies Italy as the most suitable market based on economic potential, consumer demand, and alignment with Lilas’s eco-friendly values. The project outlines a complete marketing plan using the 4 Ps—product standardization, competitive pricing, indirect distribution, and digital promotion—to help Lilas successfully enter and grow in the Italian market.          </p>

          <p className="lilas-note">
            For full access to my reports and work, please check my{' '}
            <a
              href="https://www.linkedin.com/in/mouna-saadaoui-2524a6312/"
              target="_blank"
              rel="noopener noreferrer"
              className="lilas-linkedin"
            >
              <FaLinkedin className="linkedin-icon" />
              <span className="linkedin-handle">LinkedIn profile</span>
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          className="lilas-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.img
            src="/Lilas.png"
            alt="Lilas Visual"
            className="lilas-image"
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          />
        </motion.div>
      </div>

      <Link to="/" className="back-btn">← Back to Projects</Link>
    </motion.div>
  );
}

export default LilasPage;

