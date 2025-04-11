import React from 'react';
import { motion } from 'framer-motion';
import './Resume.css';

function Resume() {
  const handleDownloadError = () => {
    console.error("Failed to download resume.");
  };

  return (
    <section className="resume-section" id="resume">
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Wanna dive deeper?
      </motion.h2>

      <motion.a
        href="/ResumeMounaSaadaoui.pdf"
        className="resume-btn"
        aria-label="Download Mouna Saadaoui's Resume"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        target="_blank"
        rel="noopener noreferrer"
        download="ResumeMounaSaadaoui.pdf"
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

