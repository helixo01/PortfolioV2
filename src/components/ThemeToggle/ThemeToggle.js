import React from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';
import './ThemeToggle.css';

const ThemeToggle = ({ isDark, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {isDark ? <IoSunny /> : <IoMoon />}
    </button>
  );
};

export default ThemeToggle; 