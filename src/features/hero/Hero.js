import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { translations } from '../../translations/content';
import './Hero.css';

const Hero = ({ language }) => {
  const [showScroll, setShowScroll] = useState(true);
  const content = translations[language];

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
        <div className="top-text">{content.portfolio}</div>
      </div>
      <div className="hero-content">
        <span className="hero-greeting">{content.greeting}</span>
        <h1 className="hero-title">John Doe</h1>
        <p className="hero-subtitle">{content.role}</p>
      </div>
      {showScroll && (
        <div className="scroll-indicator" onClick={scrollToContent} role="button" tabIndex={0}>
          <span>{content.discover}</span>
          <IoIosArrowDown className="scroll-arrow-icon" />
        </div>
      )}
    </section>
  );
};

export default Hero; 