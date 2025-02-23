import React, { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import { useLanguage } from '../../context/LanguageContext';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import './HamburgerMenu.css';

const HamburgerMenu = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
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

  const content = translations[language];

  const handleClick = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <button 
        className="hamburger-button" 
        onClick={handleClick}
        aria-label="Menu"
      >
        {isOpen ? <IoClose /> : <IoMenu />}
      </button>

      <nav className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="toggles-container">
            <LanguageToggle />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          </div>
        </div>
        <ul className="mobile-nav-links">
          <li>
            <a href="#about" onClick={handleLinkClick}>
              {content.about}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick}>
              {content.projects}
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleLinkClick}>
              {content.skills}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMenu; 