import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import './ProjectsSection.css';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Boosting Herbéos Market Presence Through Integrated Communication',
    link: '/projects/herbeos',
    reflection: "This project helped me craft a strategic communication plan that connects brand values with audience needs to boost awareness and loyalty.",
  },
  {
    title: 'Lilas Beyond Borders: A Tactical Roadmap for International Market Penetration',
    link: '/projects/lilas',
    reflection: "This project allowed me to apply international marketing concepts to build a real-world expansion strategy for a Tunisian hygiene brand.",
  },
  {
    title: 'Ben Yaghlane & the Tunisian Consumer: Where Personality Meets Purchase',
    link: '/projects/benyaghlane',
    reflection: "This project deepened my understanding of how lifestyle, identity, and brand personality influence consumer choices in a culturally rooted market."

    
  },
  {
    title: 'Optimizing Amazon Operations Through Business Intelligence and Data Warehousing.',
  link: '/projects/amazon',
    reflection: "This project helped me develop skills in multidimensional modeling, ETL design, and extracting data-driven insights for strategic decision-making.",
  }, 
  {
    title: 'EnergyHive: A Strategic Business Model for Smarter Solar Energy Management',
    link: '/projects/energyhive',
    reflection: "In this project, I focused on the business side—developing the value proposition, market strategy, and B2B/B2C plans to position EnergyHive for real-world impact.",
  },
  {
    title: 'Personal Portfolio',
    subtitle: 'The space where I turned code into storytelling, and stories into identity.',
    reflection: "You're walking through it now, this site is both my resume and my personality, wrapped in design and intention.",
  },
];

const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delayChildren: 0.4,
      staggerChildren: 0.2,
      ease: 'easeOut'
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function ProjectsSection() {
  const [index, setIndex] = useState(0);

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="projects-section" id="projects">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        Projects I'm Proud Of
      </motion.h2>

      <motion.p
        className="projects-subheading"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5}}
      >
        Each one has a piece of my story.
      </motion.p>

      <div className="carousel">
        <button className="arrow left" onClick={prevProject}>❮</button>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="project-slide"
            initial={{ opacity: 0, x: 100, rotateY: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, rotateY: -10, scale: 0.95 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          >
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="project-content"
            >
              <motion.h3 variants={itemVariants}>{projects[index].title}</motion.h3>
              <motion.p className="project-reflection" variants={itemVariants}>{projects[index].reflection}</motion.p>
              {projects[index].title !== 'Personal Portfolio' && (
  <motion.div variants={itemVariants}>
    <Link to={projects[index].link} className="project-btn">
      View Project
    </Link>
  </motion.div>
)}

              <motion.p className="slide-indicator" variants={itemVariants}>
                {index + 1} / {projects.length}
              </motion.p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <button className="arrow right" onClick={nextProject}>❯</button>
      </div>
    </section>
  );
}

export default ProjectsSection;



