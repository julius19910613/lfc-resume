import React from 'react';
import { ActionIcon } from '@mantine/core';
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
          <ActionIcon
            type="button"
            className="add-btn mantine-icon-btn"
            variant="light"
            color="indigo"
            radius="xl"
            onClick={() => addItem('achievements', '')}
            aria-label={`Add ${getUi.achievementsTitle}`}
          >
            +
          </ActionIcon>
        )}
      </h2>
      {getAchievements.map((item, idx) => (
        <div key={idx} className="achievement-entry">
          {editing && (
            <ActionIcon
              type="button"
              className="remove-btn mantine-icon-btn"
              variant="light"
              color="red"
              radius="xl"
              onClick={() => removeItem('achievements', idx)}
              aria-label={`Remove ${getUi.achievementsTitle}`}
            >
              ×
            </ActionIcon>
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
