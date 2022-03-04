import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const LandingLayout = ({ children }) => {
  return (
    <div className="Main-container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export { LandingLayout };
