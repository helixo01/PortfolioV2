import React from 'react';

const SkillCard = ({ skill, getSkillLevel }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">{skill.icon}</div>
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className={`skill-level level-${skill.level}`}>
          {getSkillLevel(skill.level)}
        </span>
      </div>
    </div>
  );
};

export default React.memo(SkillCard); 