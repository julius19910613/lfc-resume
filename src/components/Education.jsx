import React from 'react';
import { ActionIcon } from '@mantine/core';
import useResumeData from '../hooks/useResumeData';
import EditableField from './EditableField';

const Education = () => {
  const { getEducation, getUi, editing, updateArrayItem, addItem, removeItem } = useResumeData();

  return (
    <div className="sidebar-section">
      <h3 className="sidebar-section-title">
        {getUi.educationTitle}
        {editing && (
          <ActionIcon
            type="button"
            className="add-btn mantine-icon-btn"
            variant="light"
            color="indigo"
            radius="xl"
            onClick={() => addItem('education', { school: '', degree: '', period: '' })}
            aria-label={`Add ${getUi.educationTitle}`}
          >
            +
          </ActionIcon>
        )}
      </h3>
      {getEducation.map((edu, index) => (
        <div key={index} className="education-item">
          {editing && (
            <ActionIcon
              type="button"
              className="remove-btn mantine-icon-btn"
              variant="light"
              color="red"
              radius="xl"
              onClick={() => removeItem('education', index)}
              aria-label={`Remove ${getUi.educationTitle}`}
            >
              ×
            </ActionIcon>
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
