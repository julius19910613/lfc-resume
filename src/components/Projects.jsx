import React from 'react';
import useResumeData from '../hooks/useResumeData';
import EditableField from './EditableField';

const Projects = () => {
  const { getProjects, getUi, editing, updateArrayItem, updateNestedArrayItem, addItem, removeItem } = useResumeData();

  return (
    <div className="area">
      <h2>
        {getUi.projectsTitle}
        {editing && (
          <button type="button" className="add-btn" onClick={() => addItem('projects', { name: '', role: '', period: '', painPoints: [''], solutions: [''], results: '' })}>+</button>
        )}
      </h2>
      {getProjects.map((project, index) => (
        <div key={index} className="project-item">
          {editing && (
            <button type="button" className="remove-btn" onClick={() => removeItem('projects', index)}>×</button>
          )}
          <div className="sub">
            {editing ? (
              <>
                <EditableField value={project.name} onChange={v => updateArrayItem('projects', index, 'name', v)} className="sub-company editable-sub" />
                <EditableField value={project.period} onChange={v => updateArrayItem('projects', index, 'period', v)} className="sub-period editable-sub" />
              </>
            ) : (
              <>
                <span className="sub-company">{project.name}</span>
                <span className="sub-period">{project.period}</span>
              </>
            )}
          </div>
          {editing ? (
            <EditableField value={project.role} onChange={v => updateArrayItem('projects', index, 'role', v)} className="sub-position editable-sub" />
          ) : (
            <div className="sub-position">{project.role}</div>
          )}

          <h4 className="sub-h4">{getUi.painPointsTitle}</h4>
          {project.painPoints.map((point, pointIndex) => (
            editing ? (
              <EditableField key={pointIndex} value={point} onChange={v => updateNestedArrayItem('projects', index, 'painPoints', pointIndex, v)} className="line editable-line" multiline />
            ) : (
              <p key={pointIndex} className="line">{point}</p>
            )
          ))}

          <h4 className="sub-h4">{getUi.solutionsTitle}</h4>
          {project.solutions.map((solution, solutionIndex) => (
            editing ? (
              <EditableField key={solutionIndex} value={solution} onChange={v => updateNestedArrayItem('projects', index, 'solutions', solutionIndex, v)} className="line editable-line" multiline />
            ) : (
              <p key={solutionIndex} className="line">{solution}</p>
            )
          ))}

          <h4 className="sub-h4">{getUi.resultsTitle}</h4>
          {editing ? (
            <EditableField value={project.results} onChange={v => updateArrayItem('projects', index, 'results', v)} className="line editable-line" multiline />
          ) : (
            <p className="line">{project.results}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
