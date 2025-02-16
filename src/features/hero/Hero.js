import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import './Hero.css';

const Hero = () => {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero');
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      setShowScroll(window.scrollY < heroBottom - 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    const contentSection = document.getElementById('about');
    contentSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="top-text">PORTFOLIO</div>
      </div>
      <div className="hero-content">
        <span className="hero-greeting">Bonjour, je suis</span>
        <h1 className="hero-title">John Doe</h1>
        <p className="hero-subtitle">Ingénieur Informatique</p>
      </div>
      {showScroll && (
        <div className="scroll-indicator" onClick={scrollToContent} role="button" tabIndex={0}>
          <span>Découvrir</span>
          <IoIosArrowDown className="scroll-arrow-icon" />
        </div>
      )}
    </section>
  );
};

export default Hero; 