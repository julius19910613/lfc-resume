import React from 'react';
import useResumeData from '../hooks/useResumeData';

const Education = () => {
  const { getEducation } = useResumeData();

  return (
    <div className="sidebar-section">
      <h3 className="sidebar-section-title">教育经历</h3>
      {getEducation.map((edu, index) => (
        <div key={index} className="education-item">
          <div className="education-school">{edu.school}</div>
          <div className="education-degree">{edu.degree}</div>
          <div className="education-period">{edu.period}</div>
        </div>
      ))}
    </div>
  );
};

export default Education;
