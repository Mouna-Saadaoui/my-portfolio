// src/Layout/Layout.js
import React from 'react';
import Navbar from '../Home_Sections/Navbar/Navbar';
import Footer from '../Home_Sections/Footer/Footer';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="main-content">
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;


