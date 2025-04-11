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
        viewport={{ once: true }}
      >
        Let's Connect
      </motion.h2>

      <div className="icon-links">
        {/* ✅ Email link using Gmail compose */}
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

        {/* ✅ LinkedIn */}
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

