import React from 'react';
import Hero from '../../features/hero/Hero';
import Header from '../../features/header/Header';
import About from '../../features/about/About';
import Projects from '../../features/projects/Projects';
import Skills from '../../features/skills/Skills';
import Contact from '../../features/contact/Contact';
import './PortfolioPage.css';

function PortfolioPage({ language }) {
  return (
    <div className="portfolio">
      <Hero language={language} />
      <Header />
      <main>
        <About language={language} />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default PortfolioPage; 