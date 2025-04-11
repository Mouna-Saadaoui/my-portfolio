import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import MobileLayout from './Layout/MobileLayout';
import useIsMobile from './hooks/useIsMobile'; // ✅ import the hook

// Sections
import HeroSection from './Home_Sections/HeroSection/HeroSection';
import SkillsSection from './Home_Sections/SkillsSection/SkillsSection';
import ProjectsSection from './Home_Sections/ProjectsSection/ProjectsSection';
import Resume from './Home_Sections/Resume/Resume';
import ContactSection from './Home_Sections/ContactSection/ContactSection';

// Pages
import HerbeosPage from './ProjectsPages/Herbeos/HerbeosPages/Herbeos';
import LilasPage from './ProjectsPages/LilasPages/Lilas';
import BenYaghlanePage from './ProjectsPages/BenYaghlanePages/BenYaghlane';
import AmazonPage from './ProjectsPages/AmazonPages/Amazon';
import EnergyHivePage from './ProjectsPages/EnergyHivePages/EnergyHive';
import AboutMePage from './AboutMePages/AboutMe';

function App() {
  const isMobile = useIsMobile();

  const LayoutComponent = isMobile ? MobileLayout : Layout;

  return (
    <Router>
      <LayoutComponent>
        <div className="main-content">
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
        </div>
      </LayoutComponent>
    </Router>
  );
}

export default App;





