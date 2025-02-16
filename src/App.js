import React, { useState, useEffect } from 'react';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import LanguageToggle from './components/LanguageToggle/LanguageToggle';
import './styles/theme.css';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  return (
    <>
      <div className="toggles-container">
        <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </div>
      <PortfolioPage language={language} />
    </>
  );
}

export default App;
