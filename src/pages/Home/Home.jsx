import React from 'react';
import { Slider } from '../../components/Landing/Slider/Slider';
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
