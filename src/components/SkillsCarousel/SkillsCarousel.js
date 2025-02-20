import React, { useState } from 'react';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import './SkillsCarousel.css';

const SkillsCarousel = ({ skills, language }) => {
  const [currentCategory, setCurrentCategory] = useState(0);

  const handleSlide = (direction) => {
    if (direction === 'next') {
      setCurrentCategory((prev) => 
        prev === skills.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentCategory((prev) => 
        prev === 0 ? skills.length - 1 : prev - 1
      );
    }
  };

  const getSkillLevel = (level) => {
    if (language === 'fr') {
      switch(level) {
        case 1: return "Débutant";
        case 2: return "Élémentaire";
        case 3: return "Intermédiaire";
        case 4: return "Avancé";
        case 5: return "Expert";
        default: return "Débutant";
      }
    } else {
      switch(level) {
        case 1: return "Beginner";
        case 2: return "Elementary";
        case 3: return "Intermediate";
        case 4: return "Advanced";
        case 5: return "Expert";
        default: return "Beginner";
      }
    }
  };

  return (
    <div className="skills-carousel">
      <div className="carousel-content">
        <div className="category-info">
          <h3>{skills[currentCategory].category}</h3>
          <p className="category-description">
            {language === 'fr' ? 
              skills[currentCategory].descriptionFr : 
              skills[currentCategory].descriptionEn
            }
          </p>
        </div>
        
        <div className="skills-grid">
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
  );
};

export default SkillsCarousel; 