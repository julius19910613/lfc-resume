import React from 'react';
import useResumeData from '../hooks/useResumeData';

const Projects = () => {
  const { getProjects } = useResumeData();

  return (
    <div className="area">
      <h2>项目经历</h2>
      {getProjects.map((project, index) => (
        <div key={index} className="project-item">
          <div className="sub">
            <span className="sub-company">{project.name}</span>
            <span className="sub-period">{project.period}</span>
          </div>
          <div className="sub-position">{project.role}</div>
          
          <h4 className="sub-h4">现有痛点</h4>
          {project.painPoints.map((point, pointIndex) => (
            <p key={pointIndex} className="line">{point}</p>
          ))}
          
          <h4 className="sub-h4">解决过程</h4>
          {project.solutions.map((solution, solutionIndex) => (
            <p key={solutionIndex} className="line">{solution}</p>
          ))}
          
          <h4 className="sub-h4">项目成果</h4>
          <p className="line">{project.results}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;