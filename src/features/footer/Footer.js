import React from 'react';
import { IoLogoGithub, IoLogoLinkedin, IoMail, IoDocumentText } from 'react-icons/io5';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const translations = {
    fr: {
      rights: "Tous droits réservés",
      legal: "Mentions légales",
      privacy: "Politique de confidentialité",
      cookies: "Gestion des cookies",
      accessibility: "Accessibilité",
      contact: "Contact",
      socials: "Réseaux sociaux",
      cv: "Télécharger CV"
    },
    en: {
      rights: "All rights reserved",
      legal: "Legal Notice",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
      accessibility: "Accessibility",
      contact: "Contact",
      socials: "Social Media",
      cv: "Download Resume"
    }
  };

  const content = translations[language];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-section">
            <h3>{content.contact}</h3>
            <div className="contact-info">
              <a href="mailto:contact@example.com" className="footer-link">
                <IoMail /> contact@example.com
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>{content.socials}</h3>
            <div className="social-links">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                <IoLogoGithub /> GitHub
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                <IoLogoLinkedin /> LinkedIn
              </a>
              <a 
                href="/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                <IoDocumentText /> {content.cv}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-legal">
          <div className="legal-links">
            <a href="/legal" className="legal-link">{content.legal}</a>
            <a href="/privacy" className="legal-link">{content.privacy}</a>
            <a href="/cookies" className="legal-link">{content.cookies}</a>
            <a href="/accessibility" className="legal-link">{content.accessibility}</a>
          </div>
          <p className="copyright">
            © {currentYear} John Doe. {content.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 