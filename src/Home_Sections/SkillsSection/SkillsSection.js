import React from 'react';
import { motion } from 'framer-motion';
import './SkillsSection.css';
import { FaLightbulb, FaTools, FaCode, FaLanguage } from 'react-icons/fa';

function SkillsSection() {
  const skills = [
    {
      icon: <FaLightbulb />,
      description: 'I craft marketing strategies that connect brands with people.',
      items: ['Marketing Communication','Social Media Marketing', 'Digital Campaigns', 'Brand Positioning', 'Market Research'],
    },
    {
      icon: <FaTools />,
      description: 'I use creative & analytical tools to get things done fast.',
      items: ['Canva', 'Power BI'],
    },
    {
      icon: <FaCode />,
      description: 'I have a foundation in code and systems.',
      items: ['React.Js', 'SQL', 'HTML/CSS','JS', 'Python','C', 'Linux', 'MongoDB'],
    },
    {
      icon: <FaLanguage />,
      description: 'I connect across cultures and languages.',
      items: ['English', 'French', 'Arabic'],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        How I Work
      </motion.h2>

      <motion.p
        className="skills-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I bring together strategy, creativity, and tech.
      </motion.p>

      <div className="skills-grid">
        {skills.map((category, index) => (
          <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="skill-icon">{category.icon}</div>
            <p className="skill-desc">{category.description}</p>
            <ul>
              {category.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;


