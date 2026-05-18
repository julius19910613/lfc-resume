import React from 'react';
import { ActionIcon } from '@mantine/core';
import useResumeData from '../hooks/useResumeData';
import EditableField from './EditableField';

const Experience = () => {
  const { getExperience, getUi, editing, updateArrayItem, updateNestedArrayItem, addItem, removeItem } = useResumeData();

  return (
    <div className="area">
      <h2>
        {getUi.experienceTitle}
        {editing && (
          <ActionIcon
            type="button"
            className="add-btn mantine-icon-btn"
            variant="light"
            color="indigo"
            radius="xl"
            onClick={() => addItem('experience', { company: '', position: '', period: '', responsibilities: [''] })}
            aria-label={`Add ${getUi.experienceTitle}`}
          >
            +
          </ActionIcon>
        )}
      </h2>
      {getExperience.map((exp, index) => (
        <div key={index} className="experience-item">
          {editing && (
            <ActionIcon
              type="button"
              className="remove-btn mantine-icon-btn"
              variant="light"
              color="red"
              radius="xl"
              onClick={() => removeItem('experience', index)}
              aria-label={`Remove ${getUi.experienceTitle}`}
            >
              ×
            </ActionIcon>
          )}
          <div className="sub">
            {editing ? (
              <>
                <EditableField value={exp.company} onChange={v => updateArrayItem('experience', index, 'company', v)} className="sub-company editable-sub" />
                <EditableField value={exp.period} onChange={v => updateArrayItem('experience', index, 'period', v)} className="sub-period editable-sub" />
              </>
            ) : (
              <>
                <span className="sub-company">{exp.company}</span>
                <span className="sub-period">{exp.period}</span>
              </>
            )}
          </div>
          {editing ? (
            <EditableField value={exp.position} onChange={v => updateArrayItem('experience', index, 'position', v)} className="sub-position editable-sub" />
          ) : (
            <div className="sub-position">{exp.position}</div>
          )}
          {exp.responsibilities.map((resp, respIndex) => (
            editing ? (
              <EditableField
                key={respIndex}
                value={resp}
                onChange={v => updateNestedArrayItem('experience', index, 'responsibilities', respIndex, v)}
                className="line editable-line"
                multiline
              />
            ) : (
              <p key={respIndex} className="line">{resp}</p>
            )
          ))}
        </div>
      ))}
    </div>
  );
};

export default Experience;
