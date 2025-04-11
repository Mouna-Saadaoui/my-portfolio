import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './AboutMe.css'; 
function AboutMePage() {
  return (
    <motion.div
      className="ab-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="ab-container">
        <motion.div
          className="ab-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1>About Me</h1>
          <p>
            I'm Moona Saadaoui, a 21-year-old marketing and IT student at Tunis Business School.
            I've gained experience in many areas—from branding and digital strategy to data storytelling,
            project coordination, and client communication. Whether through internships, global programs,
            or hands-on projects, I've learned how to bring ideas to life with clarity and intention.
          </p>
          <p>
            Outside of my academic and professional life, I enjoy photography, drawing, and playing music—
            creative passions that keep me grounded and inspired.
          </p>
          <p>
            Curious, versatile, and driven by impact, I'm always exploring new ways to grow and create with purpose.
          </p>
        </motion.div>

        <motion.div
          className="ab-right"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
        <img
  src={process.env.PUBLIC_URL + "/Me.png"}
  alt="Mouna Avatar"
  className="ab-img"
/>
        </motion.div>
      </div>

      <motion.div
        className="back-btn"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link to="/">← Back to HomePage</Link>
      </motion.div>
    </motion.div>
  );
}

export default AboutMePage;



