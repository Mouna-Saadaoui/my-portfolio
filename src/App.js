// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout'; // this file should be src/Layout.js

// Import homepage sections:
import HeroSection from './Home_Sections/HeroSection/HeroSection';
import SkillsSection from './Home_Sections/SkillsSection/SkillsSection';
import ProjectsSection from './Home_Sections/ProjectsSection/ProjectsSection';
import Resume from './Home_Sections/Resume/Resume';
import ContactSection from './Home_Sections/ContactSection/ContactSection'; 


// Import project pages:
import HerbeosPage from './ProjectsPages/Herbeos/HerbeosPages/Herbeos';
import LilasPage from './ProjectsPages/LilasPages/Lilas';
import BenYaghlanePage from './ProjectsPages/BenYaghlanePages/BenYaghlane';
import AmazonPage from './ProjectsPages/AmazonPages/Amazon';
import EnergyHivePage from './ProjectsPages/EnergyHivePages/EnergyHive';
import AboutMePage from './AboutMePages/AboutMe';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <SkillsSection />
                <ProjectsSection />
                <Resume />
                <ContactSection />
              </>
            }
          />
          <Route path="/projects/herbeos" element={<HerbeosPage />} />
          <Route path="/projects/lilas" element={<LilasPage />} />
          <Route path="/projects/benyaghlane" element={<BenYaghlanePage />} />
          <Route path="/projects/amazon" element={<AmazonPage />} />
          <Route path="/projects/energyhive" element={<EnergyHivePage />} />
          <Route path="/aboutme/aboutme" element={<AboutMePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

