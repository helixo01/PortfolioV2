import React, { useState } from 'react';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import './SkillsCarousel.css';

const SkillsCarousel = ({ skills, language }) => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSlide = (direction) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (direction === 'next') {
      setCurrentCategory((prev) => 
        prev === skills.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentCategory((prev) => 
        prev === 0 ? skills.length - 1 : prev - 1
      );
    }

    // Ajuster le délai pour correspondre à l'animation la plus longue
    setTimeout(() => {
      setIsAnimating(false);
    }, 700); // Augmenté pour prendre en compte tous les délais + durée de l'animation
  };

  const getSkillLevel = (level) => {
    if (language === 'fr') {
      switch(level) {
        case 1: return "Débutant";
        case 2: return "Intermédiaire";
        case 3: return "Avancé";
        case 4: return "Expert";
        default: return "Débutant";
      }
    } else {
      switch(level) {
        case 1: return "Beginner";
        case 2: return "Intermediate";
        case 3: return "Advanced";
        case 4: return "Expert";
        default: return "Beginner";
      }
    }
  };

  return (
    <div className="skills-carousel">
      <div className="carousel-content">
        <div className="category-info" key={`category-${currentCategory}`}>
          <h3>{skills[currentCategory].category}</h3>
          <p className="category-description">
            {language === 'fr' ? 
              skills[currentCategory].descriptionFr : 
              skills[currentCategory].descriptionEn
            }
          </p>
        </div>
        
        <div className="skills-grid" key={`grid-${currentCategory}`}>
          {skills[currentCategory].items.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className={`skill-level level-${skill.level}`}>
                  {getSkillLevel(skill.level)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-navigation">
        <div className="projects-navigation">
          <button 
            className="nav-button prev" 
            onClick={() => handleSlide('prev')}
            aria-label="Previous category"
          >
            <IoArrowBack />
          </button>
          <div className="carousel-indicators">
            {skills.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentCategory ? 'active' : ''}`}
                onClick={() => setCurrentCategory(index)}
                aria-label={`Go to category ${index + 1}`}
              />
            ))}
          </div>
          <button 
            className="nav-button next" 
            onClick={() => handleSlide('next')}
            aria-label="Next category"
          >
            <IoArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsCarousel; 