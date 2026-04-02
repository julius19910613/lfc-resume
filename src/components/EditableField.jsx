import React from 'react';

const EditableField = ({ value, onChange, multiline = false, className = '', placeholder = '', style = {} }) => {
  const InputTag = multiline ? 'textarea' : 'input';

  return (
    <InputTag
      type="text"
      className={`editable-field ${className}`}
      value={value || ''}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      style={style}
      rows={multiline ? 3 : undefined}
    />
  );
};

export default EditableField;
