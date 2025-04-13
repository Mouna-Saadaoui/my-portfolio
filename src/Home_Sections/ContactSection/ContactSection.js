import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-title-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="contact-title">
          <b>Let's connect</b>
          <img
            src={`${process.env.PUBLIC_URL}/MeLogo.webp`} 
            alt="Logo" 
            loading="lazy"
            className="contact-logo"
          />
        </h2>
      </motion.div>

      <div className="icon-links">
        <motion.a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mouna.saadaoui202@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className="icon-link"
        >
          <FaEnvelope />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/mouna-saadaoui-2524a6312/"
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
