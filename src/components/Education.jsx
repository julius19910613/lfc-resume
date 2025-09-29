import React from 'react';
import useResumeData from '../hooks/useResumeData';

const Education = () => {
  const { getEducation } = useResumeData();

  return (
    <div className="area">
      <h2>教育经历</h2>
      <table className="education-table">
        <tbody>
          {getEducation.map((edu, index) => (
            <tr key={index}>
              <td>{edu.school}</td>
              <td>{edu.degree}</td>
              <td>{edu.period}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Education;