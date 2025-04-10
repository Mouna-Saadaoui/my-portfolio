import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        Let's Connect
      </motion.h2>

      <div className="icon-links">
        <motion.a
          href="mailto:mouna.saadaoui202@gmail.com" // Replace with your email
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className="icon-link"
        >
          <FaEnvelope />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/mouna-saadaoui-2524a6312/" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className="icon-link"
        >
          <FaLinkedin />
        </motion.a>
      </div>
    </section>
  );
}

export default Contact;
