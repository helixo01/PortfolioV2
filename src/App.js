import React, { useState, useEffect } from 'react';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import './styles/theme.css';
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
    </LanguageProvider>
  );
}

export default App;
