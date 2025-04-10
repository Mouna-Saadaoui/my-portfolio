import React from 'react';
import { motion } from 'framer-motion';
import './Resume.css';

function Resume() {
  const handleDownloadError = () => {
    console.error("Failed to download resume."); // Or show a user-friendly message
  };

  return (
    <section className="resume-section" id="resume">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Wanna dive deeper?
      </motion.h2>

      <motion.a
        href="/Resume, Mouna Saadaoui.pdf" // Ensure this file is in the public folder
        className="resume-btn"
        aria-label="Download Mouna Saadaoui's Resume"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        target="_blank"
        rel="noopener noreferrer"
        download="Mouna_Saadaoui_Resume.pdf" // Explicit filename for download
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        onError={handleDownloadError}
      >
        Download My Resume
      </motion.a>
    </section>
  );
}

export default Resume;
