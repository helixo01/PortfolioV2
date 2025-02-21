import React, { useState, useEffect } from 'react';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import LanguageToggle from './components/LanguageToggle/LanguageToggle';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './styles/theme.css';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero');
      const heroHeight = heroSection.offsetHeight;
      setIsHeaderFixed(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <LanguageProvider>
      <div className={`toggles-container ${isHeaderFixed ? 'with-header' : ''}`}>
        <LanguageToggle />
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </div>
      <PortfolioPage />
      <ScrollToTop />
    </LanguageProvider>
  );
}

export default App;
