import React, { useState } from 'react';
import { Slider } from '../../components/App/Slider/Slider';
import { HomeContent } from '../../components/Landing/HomeContent/HomeContent';
import './Home.css';

const Home = () => {

  return (
    <div className="Home-container">
      <Slider />
      <HomeContent />
    </div>
  );
};

export { Home };
