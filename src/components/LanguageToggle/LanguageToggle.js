import React from 'react';
import { IoLanguage } from 'react-icons/io5';
import './LanguageToggle.css';

const LanguageToggle = ({ language, toggleLanguage }) => {
  return (
    <button className="language-toggle" onClick={toggleLanguage} aria-label="Toggle language">
      <IoLanguage />
      <span>{language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageToggle; 