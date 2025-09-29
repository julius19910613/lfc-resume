import React from 'react';
import useResumeData from '../hooks/useResumeData';

const Skills = () => {
  const { getSkills } = useResumeData();

  return (
    <div className="area">
      <h2>专业技能</h2>
      <div className="skills-grid">
        {getSkills.map((skillRow, rowIndex) => (
          <div key={rowIndex} className="skill-row">
            {skillRow.map((skill, colIndex) => (
              <div key={colIndex} className="skill-item">{skill}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;