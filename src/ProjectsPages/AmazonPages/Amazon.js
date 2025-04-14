import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Amazon.css';
import { useLocation } from 'react-router-dom';

function AmazonPage() {
  const location = useLocation();
  const fromIndex = location.state?.fromIndex ?? 0;

  return (
    <motion.div
      className="amazon-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="amazon-container">
        <motion.div
          className="amazon-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1>Optimizing Amazon Through Business Intelligence</h1>
          <p>
            This project focuses on building a data warehouse for Amazon to optimize operations and support strategic decision-making. It includes data gathering, dimensional modeling, ETL development using Python, and data visualization in Power BI. Key insights highlight product performance, regional trends, and customer behavior, aiming to improve efficiency, marketing, and resource allocation.
          </p>

          <p className="amazon-note">
            For full access to my work, check my{' '}
            <a
              href="https://www.linkedin.com/in/mouna-saadaoui-2524a6312/"
              target="_blank"
              rel="noopener noreferrer"
              className="amazon-linkedin"
            >
              <FaLinkedin className="linkedin-icon" />
              <span className="linkedin-handle">LinkedIn profile</span>
            </a>
          </p>
        </motion.div>

        <motion.div
          className="amazon-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.img
            src={`${process.env.PUBLIC_URL}/Amazon.webp`}
            alt="Amazon Visual"
            loading="lazy"
            className="amazon-image"
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          />
        </motion.div>
      </div>

      <HashLink
  smooth
  to={`/#projects-${fromIndex}`}
  scroll={(el) => el?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
  className="back-btn"
>
  ← Back to Projects
</HashLink>

    </motion.div>
  );
}

export default AmazonPage;


