import React from 'react';
import useResumeData from '../hooks/useResumeData';

const Experience = () => {
  const { getExperience } = useResumeData();

  return (
    <div className="area">
      <h2>工作经历</h2>
      {getExperience.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="sub">
            <span className="sub-company">{exp.company}</span>
            <span className="sub-period">{exp.period}</span>
          </div>
          <div className="sub-position">{exp.position}</div>
          {exp.responsibilities.map((resp, respIndex) => (
            <p key={respIndex} className="line">{resp}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Experience;