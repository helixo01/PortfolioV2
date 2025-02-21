import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import LanguageToggle from '../../components/LanguageToggle/LanguageToggle';
import './Header.css';

const Header = ({ isDark, toggleTheme }) => {
  const [isFixed, setIsFixed] = useState(false);
  const { language } = useLanguage();

  const translations = {
    fr: {
      about: "À propos",
      projects: "Projets",
      skills: "Compétences",
    },
    en: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      const headerPosition = header.offsetTop;
      
      setIsFixed(window.scrollY > headerPosition - 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = translations[language];

  return (
    <header className={`header ${isFixed ? 'fixed' : ''}`}>
      <nav className="nav-container">
        <div className="logo">
          <h1>JD</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#about">{content.about}</a></li>
          <li><a href="#projects">{content.projects}</a></li>
          <li><a href="#skills">{content.skills}</a></li>
        </ul>
        <div className="header-actions">
          <LanguageToggle />
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>
      </nav>
    </header>
  );
};

export default Header; 