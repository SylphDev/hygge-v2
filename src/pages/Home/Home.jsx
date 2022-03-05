import React from 'react';
import { Slider } from '../../components/Landing/Slider/Slider';
import { HomeContent } from '../../components/Landing/HomeContent/HomeContent';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { setViewAction } from '../../redux/actions/actions';

const Home = () => {

  return (
    <div className="Home-container">
      <Slider />
      <HomeContent />
    </div>
  );
};

export { Home };
