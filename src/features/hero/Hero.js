import React, { useEffect, useState, useRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useLanguage } from '../../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const [showScroll, setShowScroll] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const { language } = useLanguage();
  const heroRef = useRef(null);

  const translations = {
    fr: {
      greeting: "Bonjour, je suis",
      role: "Apprenti Ingénieur spécialisé en informatique",
      discover: "Découvrir",
      portfolio: "PORTFOLIO"
    },
    en: {
      greeting: "Hello, I am",
      role: "Apprentice Software Engineer",
      discover: "Discover",
      portfolio: "PORTFOLIO"
    }
  };

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
      setShowScroll(window.scrollY < heroBottom - 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = translations[language];

  const scrollToContent = () => {
    const contentSection = document.getElementById('about');
    if (!contentSection) return;
    
    const start = window.pageYOffset;
    const end = contentSection.offsetTop;
    const duration = 1000;
    const startTime = performance.now();

    const easeInOutCubic = t => t < 0.5 
      ? 4 * t * t * t 
      : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    const animate = currentTime => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, start + (end - start) * easeInOutCubic(progress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-background">
        {isLoaded && <div className="top-text" loading="eager">{content.portfolio}</div>}
      </div>
      <div className="hero-content">
        <span className="hero-greeting">{content.greeting}</span>
        <h1 className="hero-title">Sébastien RICART</h1>
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