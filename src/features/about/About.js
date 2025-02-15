import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>À propos de moi</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Je suis un ingénieur passionné par le développement logiciel et 
              les nouvelles technologies. Spécialisé dans le développement web 
              et les architectures modernes.
            </p>
            <p>
              Mon objectif est de créer des solutions innovantes et efficaces 
              pour répondre aux défis techniques d'aujourd'hui.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">années d'expérience</span>
            </div>
            <div className="stat">
              <span className="stat-number">20+</span>
              <span className="stat-label">projets réalisés</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 