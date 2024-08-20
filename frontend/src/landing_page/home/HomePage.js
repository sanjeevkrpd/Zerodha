import React from 'react';
import Hero from './Hero';
import Award from './Award';
import Pricing from './Pricing';
import Education from './Education';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';


const HomePage = () => {
  return (
      <>
      <Hero/>
      <Award/>
      <Stats/>
      <Pricing/>
      <Education/>
      <OpenAccount/>
      </>
  );
};

export default HomePage;