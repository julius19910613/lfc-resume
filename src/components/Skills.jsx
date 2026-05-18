import React from 'react';
import { TextInput } from '@mantine/core';
import useResumeData from '../hooks/useResumeData';

const Skills = () => {
  const { getSkills, getUi, editing, updateField } = useResumeData();

  const handleSkillChange = (flatIndex, nextValue) => {
    let count = 0;
    for (let g = 0; g < getSkills.length; g++) {
      for (let s = 0; s < getSkills[g].length; s++) {
        if (count === flatIndex) {
          const group = [...getSkills[g]];
          group[s] = nextValue;
          const newSkills = [...getSkills];
          newSkills[g] = group;
          updateField('skills', null, newSkills);
          return;
        }
        count++;
      }
    }
  };

  return (
    <div className="sidebar-section">
      <h3 className="sidebar-section-title">{getUi.skillsTitle}</h3>
      <div className="skills-list">
        {getSkills.flat().map((skill, index) => (
          editing ? (
            <TextInput
              key={index}
              value={String(skill)}
              onChange={e => handleSkillChange(index, e.target.value)}
              variant="unstyled"
              classNames={{ input: 'skill-tag editable-skill' }}
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
