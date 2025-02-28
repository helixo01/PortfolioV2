import React, { useState } from 'react';
import './About.css';

const About = ({ language }) => {
  const [filter, setFilter] = useState('all');

  const experiences = [
    {
      year: "Depuis Octobre 2023",
      title: language === 'fr' ? "Alternance - Développement d'application" : "Apprenticeship - Application Development",
      company: "OP Mobility (ex-Plastic Omnium), Ruitz (France)",
      type: "professional",
      description: language === 'fr'
        ? "Reprise en main du projet pour un déployement sur toute la partie assemblage tout en allant plus en détails."
        : "Project takeover for deployment across the entire assembly section while going into more detail."
    },
    {
      year: "Depuis Octobre 2023",
      title: language === 'fr' ? "Cycle ingénieur" : "Engineering Cycle",
      company: language === 'fr' ? "CESI École d'ingénieur, Arras (France)" : "CESI Graduate School of Engineering, Arras (France)",
      type: "education",
      description: language === 'fr'
        ? "Réussite de la première année du cycle ingénieur en alternance"
        : "Successful completion of the first year of engineering cycle in work-study program"
    },
    {
      year: "Avril - Juillet 2023",
      title: language === 'fr' ? "Stage - Développement d'une application" : "Internship - Web Application Development",
      company: "OP Mobility (ex-Plastic Omnium), Ruitz (France)",
      type: "professional",
      description: language === 'fr'
        ? "Démonstration de faisabilité de la digitalisation d'une ligne d'assemblage industriel. Conception et réalisation de cette solution permettant de faire valider le projet."
        : "Feasibility demonstration of an industrial assembly line digitalization. Design and implementation of this solution leading to project validation."
    },
    {
      year: "2021-2023",
      title: language === 'fr' ? "Cycle préparatoire intégré" : "Integrated Preparatory Cycle",
      company: language === 'fr' ? "CESI École d'ingénieur, Arras (France)" : "CESI Graduate School of Engineering, Arras (France)",
      type: "education",
      description: language === 'fr'
        ? "Passage des 2 premières années du cycle préparatoire"
        : "Completion of the first two years of preparatory cycle"
    },
    {
      year: "2018-2021",
      title: language === 'fr' ? "Baccalauréat Général" : "French Secondary High School Diploma",
      company: "Lycée Gambetta-Carnot, Arras (France)",
      type: "education",
      description: language === 'fr'
        ? "Mention Bien - Spécialités Mathématiques et Sciences de l'ingénieur"
        : "Honors Degree - Specialization in Mathematics and Engineering Sciences"
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
            <div className="photo-container">
              <img src="./images/Photo.webp" alt="Profile" />
            </div>
            <div className="text-content">
              {highlightText(
                language === 'fr' 
                  ? "Actuellement en 2e année du cycle ingénieur sous statut alternant, je suis quelqu'un de curieux et de polyvalant pouvant travailler dans de nombreux domaines. Avec des expériences dans le développement Web et logiciel, le réseau et la Data mais la nouveauté ne me fait pas peur et je me ferais une joie de découvrir de nouveau sujets."
                  : "Currently in my 2nd year of engineering studies as a work-study student, I am a curious and versatile person who can work in many fields. With experience in Web and software development, networking and Data, but I'm not afraid of novelty and I would be happy to discover new subjects."
              )}
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
                className={`filter-btn ${filter === 'education' ? 'active' : ''}`}
                onClick={() => setFilter('education')}
              >
                {language === 'fr' ? 'Formation' : 'Education'}
              </button>
              <button 
                className={`filter-btn ${filter === 'professional' ? 'active' : ''}`}
                onClick={() => setFilter('professional')}
              >
                {language === 'fr' ? 'Expérience Professionnelle' : 'Work Experience'}
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
      </div>
    </section>
  );
};

export default About; 