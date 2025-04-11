import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hell, I'm <span className="typewriter">Mouna</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0 }}
        >
          Marketer & IT enthusiast studying at Tunis Business School.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="/aboutme/aboutme" className="hero-btn">
            Learn More
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
<img src={`${process.env.PUBLIC_URL}/Me.png`} alt="Me" className="hero-img" />

      </motion.div>
    </section>
  );
}

export default HeroSection;
