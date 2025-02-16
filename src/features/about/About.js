import React, { useState } from 'react';
import './About.css';

const About = ({ language }) => {
  const [filter, setFilter] = useState('all');

  const stats = [
    { number: "5+", label: language === 'fr' ? "années d'expérience" : "years of experience" },
    { number: "20+", label: language === 'fr' ? "projets réalisés" : "projects completed" },
    { number: "10+", label: language === 'fr' ? "technologies maîtrisées" : "technologies mastered" }
  ];

  const experiences = [
    {
      year: "2023",
      title: language === 'fr' ? "Développeur Senior" : "Senior Developer",
      company: "Tech Company",
      type: "fullstack",
      description: language === 'fr' 
        ? "Lead développeur sur des projets d'envergure"
        : "Lead developer on major projects"
    },
    {
      year: "2021",
      title: language === 'fr' ? "Développeur Full Stack" : "Full Stack Developer",
      company: "Web Agency",
      type: "fullstack",
      description: language === 'fr'
        ? "Développement d'applications web complexes"
        : "Development of complex web applications"
    },
    {
      year: "2019",
      title: language === 'fr' ? "Développeur Frontend" : "Frontend Developer",
      company: "Startup",
      type: "frontend",
      description: language === 'fr'
        ? "Création d'interfaces utilisateur modernes"
        : "Creation of modern user interfaces"
    }
  ];

  const highlightText = (text) => {
    const keywords = ['développeur', 'developer', 'web', 'architectures modernes', 'modern architectures', 'solutions innovantes', 'innovative solutions'];
    let highlightedText = text;
    keywords.forEach(keyword => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<span class="highlight">$1</span>');
    });
    return <p dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  const filteredExperiences = filter === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.type === filter);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>{language === 'fr' ? 'À propos de moi' : 'About me'}</h2>
        <div className="about-content">
          <div className="about-text-and-photo">
            <div className="profile-photo">
              <div className="photo-container grain-overlay">
                <img src="./images/test.png" alt="Profile" />
              </div>
            </div>
            <div className="text-content">
              {highlightText(
                language === 'fr' 
                  ? "Je suis un développeur passionné par le développement web et les architectures modernes. Spécialisé dans le développement web et les architectures modernes."
                  : "I am a developer passionate about web development and modern architectures. Specialized in web development and modern architectures."
              )}
              {highlightText(
                language === 'fr'
                  ? "Mon objectif est de créer des solutions innovantes et efficaces pour répondre aux défis techniques d'aujourd'hui."
                  : "My goal is to create innovative solutions and efficient solutions to address today's technical challenges."
              )}
            </div>
          </div>
          <div className="stats-container">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="experience-section">
          <h3>{language === 'fr' ? 'Mon Parcours' : 'My Journey'}</h3>
          <div className="experience-filters">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              {language === 'fr' ? 'Tous' : 'All'}
            </button>
            <button 
              className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
              onClick={() => setFilter('frontend')}
            >
              Frontend
            </button>
            <button 
              className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
              onClick={() => setFilter('fullstack')}
            >
              Full Stack
            </button>
          </div>
          <div className="experience-grid">
            {filteredExperiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-year">{exp.year}</div>
                <h4 className="experience-title">{exp.title}</h4>
                <span className="experience-company">{exp.company}</span>
                <p className="experience-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 