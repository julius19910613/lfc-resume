import React from 'react';
import useResumeData from '../hooks/useResumeData';

const Skills = () => {
  const { getSkills, getUi, editing, updateField } = useResumeData();

  return (
    <div className="sidebar-section">
      <h3 className="sidebar-section-title">{getUi.skillsTitle}</h3>
      <div className="skills-list">
        {getSkills.flat().map((skill, index) => (
          editing ? (
            <input
              key={index}
              type="text"
              className="skill-tag editable-skill"
              value={String(skill)}
              onChange={e => {
                const flatIndex = index;
                let count = 0;
                for (let g = 0; g < getSkills.length; g++) {
                  for (let s = 0; s < getSkills[g].length; s++) {
                    if (count === flatIndex) {
                      const group = [...getSkills[g]];
                      group[s] = e.target.value;
                      const newSkills = [...getSkills];
                      newSkills[g] = group;
                      updateField('skills', null, newSkills);
                      return;
                    }
                    count++;
                  }
                }
              }}
            />
          ) : (
            <span key={index} className="skill-tag">{String(skill).replace('• ', '')}</span>
          )
        ))}
      </div>
    </div>
  );
};

export default Skills;
