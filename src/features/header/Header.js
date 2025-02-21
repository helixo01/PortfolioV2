import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Header.css';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState('');
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
      const heroSection = document.querySelector('.hero');
      const heroHeight = heroSection.offsetHeight;
      
      if (window.scrollY <= heroHeight) {
        // Si on est dans la section hero, le header revient à sa position initiale
        setIsFixed(false);
      } else {
        // Sinon, on fixe le header en fonction de sa position
        setIsFixed(window.scrollY > headerPosition - 50);
      }

      // Détection de la section active
      const sections = ['about', 'projects', 'skills'];
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
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
          <li>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
            >
              {content.about}
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? 'active' : ''}
            >
              {content.projects}
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={activeSection === 'skills' ? 'active' : ''}
            >
              {content.skills}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 