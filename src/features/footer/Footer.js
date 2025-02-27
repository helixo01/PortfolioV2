import React, { useState } from 'react';
import { IoLogoGithub, IoLogoLinkedin, IoMail, IoDocumentText, IoClose } from 'react-icons/io5';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null);

  const translations = {
    fr: {
      rights: "Tous droits réservés",
      legal: "Mentions légales",
      privacy: "Politique de confidentialité",
      cookies: "Gestion des cookies",
      accessibility: "Accessibilité",
      contact: "Contact",
      socials: "Réseaux sociaux",
      cv: "Télécharger CV",
      close: "Fermer",
      legalContent: `Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.

      Propriétaire : Sébastien RICART
      Contact : contact@example.com
      Hébergeur : [Nom de l'hébergeur]`,
      
      privacyContent: `Nous accordons une importance particulière au droit à la vie privée des utilisateurs et nous nous conformons strictement aux lois en vigueur sur la protection des données personnelles.

      Les informations que nous collectons sont uniquement utilisées pour améliorer votre expérience utilisateur.
      Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.`,
      
      cookiesContent: `Ce site utilise des cookies pour améliorer votre expérience de navigation.
      
      Types de cookies utilisés :
      - Cookies essentiels au fonctionnement du site
      - Cookies analytiques (mesure d'audience)
      - Cookies de préférences (langue, thème)
      
      Vous pouvez à tout moment modifier vos préférences de cookies.`,
      
      accessibilityContent: `Nous nous efforçons de rendre ce site accessible à tous les utilisateurs, quelles que soient leurs capacités ou leur matériel.

      Nos engagements :
      - Structure claire et navigation cohérente
      - Contrastes de couleurs optimisés
      - Compatibilité avec les lecteurs d'écran
      - Navigation possible au clavier`
    },
    en: {
      rights: "All rights reserved",
      legal: "Legal Notice",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
      accessibility: "Accessibility",
      contact: "Contact",
      socials: "Social Media",
      cv: "Download Resume",
      close: "Close",
      legalContent: `In accordance with the provisions of law No. 2004-575 of June 21, 2004, for trust in the digital economy, users of the site are informed of the identity of the various parties involved in its creation and monitoring.

      Owner: Sébastien RICART
      Contact: contact@example.com
      Host: [Host name]`,
      
      privacyContent: `We place great importance on users' right to privacy and strictly comply with applicable data protection laws.

      The information we collect is only used to improve your user experience.
      You have the right to access, rectify and delete your personal data.`,
      
      cookiesContent: `This site uses cookies to improve your browsing experience.
      
      Types of cookies used:
      - Essential cookies for site operation
      - Analytical cookies (audience measurement)
      - Preference cookies (language, theme)
      
      You can modify your cookie preferences at any time.`,
      
      accessibilityContent: `We strive to make this site accessible to all users, regardless of their abilities or equipment.

      Our commitments:
      - Clear structure and consistent navigation
      - Optimized color contrasts
      - Screen reader compatibility
      - Keyboard navigation possible`
    }
  };

  const content = translations[language];

  const handleModalOpen = (modalType) => {
    setActiveModal(modalType);
    document.body.style.overflow = 'hidden';
  };

  const handleModalClose = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-section">
              <h3>{content.contact}</h3>
              <div className="contact-info">
                <a href="mailto:sebastien.ricart@viacesi.fr" className="footer-link">
                  <IoMail /> sebastien.ricart@viacesi.fr
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h3>{content.socials}</h3>
              <div className="social-links">
                <a 
                  href="https://github.com/helixo01" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <IoLogoGithub /> GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/sébastien-ricart-02b79b250/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <IoLogoLinkedin /> LinkedIn
                </a>
                <a 
                  href="/documents/CV_Sebastien_RICART.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                  download
                >
                  <IoDocumentText /> {content.cv}
                </a>
              </div>
            </div>
          </div>

          <div className="footer-legal">
            <div className="legal-links">
              <button onClick={() => handleModalOpen('legal')} className="legal-link">{content.legal}</button>
              <button onClick={() => handleModalOpen('privacy')} className="legal-link">{content.privacy}</button>
              <button onClick={() => handleModalOpen('cookies')} className="legal-link">{content.cookies}</button>
              <button onClick={() => handleModalOpen('accessibility')} className="legal-link">{content.accessibility}</button>
            </div>
            <p className="copyright">
              © {currentYear} Sébastien RICART. {content.rights}.
            </p>
          </div>
        </div>
      </footer>

      {activeModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleModalClose}>
              <IoClose /> {content.close}
            </button>
            <h2>{content[activeModal]}</h2>
            <div className="modal-text">
              {content[`${activeModal}Content`].split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer; 