import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">John Doe</h1>
        <p className="hero-subtitle">Ingénieur Informatique</p>
        <div className="scroll-indicator">
          <span>Découvrir</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 