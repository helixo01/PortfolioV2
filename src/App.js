import React, { useState, useEffect } from 'react';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './styles/theme.css';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <LanguageProvider>
      <PortfolioPage isDark={isDark} toggleTheme={toggleTheme} />
      <ScrollToTop />
    </LanguageProvider>
  );
}

export default App;
