import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import BenefitsSection from '../components/BenefitsSection';
import Board from '../components/Board';

const HeroPattern = ({ pttrn, children }) =>
  <div className={pttrn}>
    {children}
  </div>

const HomePage = () => (
  <HeroPattern pttrn={'topography-pattern'}>
  <div className='md:px-[60px]   '>

    <Header />
    <HeroSection />
    <div id='features'>
      <FeaturesSection />
    </div>
   <Board/>
    <div id='benefits'>
      <BenefitsSection />
    </div>
  </div>
  </HeroPattern>
);

export default HomePage;
