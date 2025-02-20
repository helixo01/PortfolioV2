import React from 'react';
import { IoLanguage } from 'react-icons/io5';
import './LanguageToggle.css';
import { useLanguage } from '../../context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button className="language-toggle" onClick={toggleLanguage} aria-label="Toggle language">
      <IoLanguage />
      <span>{language === 'fr' ? 'EN' : 'FR'}</span>
    </button>
  );
};

export default LanguageToggle; 