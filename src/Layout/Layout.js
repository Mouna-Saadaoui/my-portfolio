import React from 'react';
import Navbar from '../Home_Sections/Navbar/Navbar';
import Footer from '../Home_Sections/Footer/Footer';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;

