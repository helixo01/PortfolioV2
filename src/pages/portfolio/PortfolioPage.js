import React from 'react';
import Hero from '../../features/hero/Hero';
import Header from '../../features/header/Header';
import About from '../../features/about/About';
import Projects from '../../features/projects/Projects';
import Skills from '../../features/skills/Skills';
import Footer from '../../features/footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import './PortfolioPage.css';

function PortfolioPage({ isDark, toggleTheme }) {
  const { language } = useLanguage();

  return (
    <div className="portfolio">
      <Hero />
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <About language={language} />
        <Projects language={language} />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default PortfolioPage; 