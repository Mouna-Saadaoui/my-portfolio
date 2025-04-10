import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './BenYaghlane.css';

function BenYaghlanePage() {
  return (
    <motion.div
      className="by-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="by-container">
        <motion.div
          className="by-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1>Ben Yaghlane & the Tunisian Consumer</h1>
          <p>
          This project analyzes the consumer-brand relationship of Ben Yaghlane, a Tunisian fine grocery chain, through the lens of self-concept, personality, and lifestyle. It explores how the brand reflects and supports the identities of Tunisian consumers, especially young adults seeking a mix of tradition and modernity. The report offers insights into customer motivations, lifestyle fit, and provides recommendations to improve affordability, loyalty, and cultural engagement.
          </p>

          <p className="by-note">
            For full access to my reports and insights, please check my{' '}
            <a
              href="https://www.linkedin.com/in/mouna-saadaoui-2524a6312/"
              target="_blank"
              rel="noopener noreferrer"
              className="herbeos-linkedin"
            >
              <FaLinkedin className="linkedin-icon" />
              <span className="linkedin-handle">LinkedIn profile</span>
            </a>
          </p>
        </motion.div>

        <motion.div
          className="by-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.img
            src="/BY.png"
            alt="Ben Yaghlane Visual"
            className="by-image"
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          />
        </motion.div>
      </div>

      <Link to="/" className="back-btn">← Back to Projects</Link>
    </motion.div>
  );
}

export default BenYaghlanePage;
