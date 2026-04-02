import React from 'react';
import useResumeData from '../hooks/useResumeData';
import EditableField from './EditableField';

const Achievements = () => {
  const { getAchievements, getUi, editing, updateField, addItem, removeItem } = useResumeData();

  if (!getAchievements?.length && !editing) return null;

  return (
    <div className="area">
      <h2>
        {getUi.achievementsTitle}
        {editing && (
          <button type="button" className="add-btn" onClick={() => addItem('achievements', '')}>+</button>
        )}
      </h2>
      {getAchievements.map((item, idx) => (
        <div key={idx} className="achievement-entry">
          {editing && (
            <button type="button" className="remove-btn" onClick={() => removeItem('achievements', idx)}>×</button>
          )}
          {editing ? (
            <EditableField value={item} onChange={v => updateField('achievements', idx, v)} className="line editable-line" multiline />
          ) : (
            <p className="line">{item}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Achievements;
