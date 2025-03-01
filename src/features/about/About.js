import React, { useState } from 'react';
import './About.css';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

const About = ({ language }) => {
  const [filter, setFilter] = useState('all');
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleRow = (rowIndex) => {
    setExpandedRow(expandedRow === rowIndex ? null : rowIndex);
  };

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

  // Calculer le nombre d'éléments par ligne
  const itemsPerRow = window.innerWidth > 1200 ? 3 : window.innerWidth > 768 ? 2 : 1;

  // Organiser les expériences en lignes
  const rows = filteredExperiences.reduce((acc, exp, index) => {
    const rowIndex = Math.floor(index / itemsPerRow);
    if (!acc[rowIndex]) {
      acc[rowIndex] = [];
    }
    acc[rowIndex].push({ ...exp, index });
    return acc;
  }, []);

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
                  ? "Actuellement en 2e année du cycle ingénieur en alternance à <a href='https://ecole-ingenieurs.cesi.fr/' target='_blank' rel='noopener noreferrer'><u>CESI</u></a> et employé par <a href='https://www.opmobility.com/en/' target='_blank' rel='noopener noreferrer'><u>OPMobility</u></a>, je suis passionné par le développement et la technologie. Curieux et polyvalent, j'aime explorer différents domaines comme le <strong>développement Web</strong>, le <strong>développement logiciel</strong>, le <strong>réseau</strong> ou encore la <strong>Data</strong>. Découvrir de nouvelles technologies et relever de nouveaux défis ne me fait pas peur : je suis toujours partant pour apprendre et innover."
                  : "Currently in my 2nd year of engineering studies as a work-study student at <a href='https://ecole-ingenieurs.cesi.fr/en/' target='_blank' rel='noopener noreferrer'><u>CESI</u></a> and employed by <a href='https://www.opmobility.com/en/' target='_blank' rel='noopener noreferrer'><u>OPMobility</u></a>, I am passionate about development and technology. Curious and versatile, I enjoy exploring different fields such as <strong>Web development</strong>, <strong>software development</strong>, <strong>networking</strong> and <strong>Data</strong>. Discovering new technologies and taking on new challenges doesn't scare me: I'm always eager to learn and innovate."
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
              {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="experience-row">
                  {row.map((exp, colIndex) => (
                    <div 
                      key={colIndex} 
                      className={`experience-card ${expandedRow === rowIndex ? 'expanded' : ''}`}
                    >
                      <div className="experience-year">{exp.year}</div>
                      <h4 className="experience-title">{exp.title}</h4>
                      <span className="experience-company">{exp.company}</span>
                      <div className="experience-description-wrapper">
                        <p className={`experience-description ${expandedRow === rowIndex ? 'expanded' : ''}`}>
                          {exp.description}
                        </p>
                        <button 
                          className="show-more-button" 
                          onClick={() => toggleRow(rowIndex)}
                        >
                          {expandedRow === rowIndex ? 
                            (language === 'fr' ? 'Moins de détails' : 'Less details') : 
                            (language === 'fr' ? 'Plus de détails' : 'More details')
                          }
                          {expandedRow === rowIndex ? 
                            <IoChevronUp className="show-more-icon" /> : 
                            <IoChevronDown className="show-more-icon" />
                          }
                        </button>
                      </div>
                    </div>
                  ))}
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