import React from 'react';
import useResumeData from '../hooks/useResumeData';
import EditableField from './EditableField';

const Summary = () => {
  const { getSummary, getUi, editing, updateField } = useResumeData();

  if (!getSummary?.length && !editing) return null;

  return (
    <div className="sidebar-section">
      <h3 className="sidebar-section-title">{getUi.summaryTitle}</h3>
      <div className="sidebar-lines">
        {getSummary.map((line, idx) => (
          editing ? (
            <EditableField
              key={idx}
              value={line}
              onChange={v => updateField('summary', idx, v)}
              className="sidebar-line editable-line"
              multiline
            />
          ) : (
            <p key={idx} className="sidebar-line">{line}</p>
          )
        ))}
      </div>
    </div>
  );
};

export default Summary;
