import React from 'react';
import useResumeData from '../hooks/useResumeData';
import EditableField from './EditableField';

const Education = () => {
  const { getEducation, getUi, editing, updateArrayItem, addItem, removeItem } = useResumeData();

  return (
    <div className="sidebar-section">
      <h3 className="sidebar-section-title">
        {getUi.educationTitle}
        {editing && (
          <button type="button" className="add-btn" onClick={() => addItem('education', { school: '', degree: '', period: '' })}>+</button>
        )}
      </h3>
      {getEducation.map((edu, index) => (
        <div key={index} className="education-item">
          {editing && (
            <button type="button" className="remove-btn" onClick={() => removeItem('education', index)}>×</button>
          )}
          {editing ? (
            <>
              <EditableField value={edu.school} onChange={v => updateArrayItem('education', index, 'school', v)} className="education-school editable-edu" />
              <EditableField value={edu.degree} onChange={v => updateArrayItem('education', index, 'degree', v)} className="education-degree editable-edu" />
              <EditableField value={edu.period} onChange={v => updateArrayItem('education', index, 'period', v)} className="education-period editable-edu" />
            </>
          ) : (
            <>
              <div className="education-school">{edu.school}</div>
              <div className="education-degree">{edu.degree}</div>
              <div className="education-period">{edu.period}</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Education;
