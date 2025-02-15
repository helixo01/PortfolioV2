import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      category: "Langages de programmation",
      items: ["JavaScript", "Python", "Java", "C++"]
    },
    {
      category: "Frontend",
      items: ["React", "Vue.js", "HTML5", "CSS3"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Django", "Spring Boot"]
    },
    {
      category: "Base de données",
      items: ["MongoDB", "PostgreSQL", "MySQL"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2>Compétences</h2>
        <div className="skills-grid">
          {skills.map(skillGroup => (
            <div key={skillGroup.category} className="skill-category">
              <h3>{skillGroup.category}</h3>
              <ul className="skill-list">
                {skillGroup.items.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 