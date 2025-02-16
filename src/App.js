import React, { useState, useEffect } from 'react';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import './styles/theme.css';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <PortfolioPage />
    </>
  );
}

export default App;
