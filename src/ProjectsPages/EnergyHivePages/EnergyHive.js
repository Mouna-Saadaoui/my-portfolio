import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './EnergyHive.css';

function EnergyHivePage() {
  return (
    <motion.div
      className="energyhive-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="energyhive-container">
        <motion.div
          className="energyhive-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1>EnergyHive: Smarter Solar Energy Management</h1>
          <p>
            This project focused on building a smart solution designed to help solar panel owners optimize energy usage through real-time insights, predictions, and actionable alerts. As the Team Coordinator, I focused on the business aspect of the project—developing the market strategy, defining B2B/B2C plans, analyzing customer needs, and ensuring our solution met real-world demands and scalability goals.
          </p>

          <p className="energyhive-note">
            For full access to my reports and project details, check my{' '}
            <a
              href="https://www.linkedin.com/in/mouna-saadaoui-2524a6312/"
              target="_blank"
              rel="noopener noreferrer"
              className="energyhive-linkedin"
            >
              <FaLinkedin className="linkedin-icon" />
              <span className="linkedin-handle">LinkedIn profile</span>
            </a>.
          </p>
        </motion.div>

        <motion.div
          className="energyhive-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.img
src={`${process.env.PUBLIC_URL}/energyhive.png`}
    alt="EnergyHive Project Visual"
            className="energyhive-image"
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          />
        </motion.div>
      </div>

      <Link to="/" className="back-btn">← Back to Projects</Link>
    </motion.div>
  );
}

export default EnergyHivePage;

