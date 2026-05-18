import React from 'react';
import { TextInput, Textarea } from '@mantine/core';

const EditableField = ({ value, onChange, multiline = false, className = '', placeholder = '', style = {} }) => {
  const sharedProps = {
    value: value || '',
    placeholder,
    onChange: e => onChange(e.target.value),
    style,
    variant: 'unstyled',
    classNames: {
      input: `editable-field ${className}`.trim(),
    },
  };

  if (multiline) {
    return <Textarea {...sharedProps} autosize minRows={3} />;
  }

  return <TextInput {...sharedProps} type="text" />;
};

export default EditableField;
