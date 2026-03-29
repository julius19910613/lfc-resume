import React from 'react';
import useResumeData from '../hooks/useResumeData';

const Skills = () => {
  const { getSkills } = useResumeData();

  return (
    <div className="sidebar-section">
      <h3 className="sidebar-section-title">专业技能</h3>
      <div className="skills-list">
        {getSkills.flat().map((skill, index) => (
          <span key={index} className="skill-tag">{skill.replace('• ', '')}</span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
