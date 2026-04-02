import React from 'react';
import useResumeData from '../hooks/useResumeData';
import EditableField from './EditableField';

const Header = () => {
  const { getPersonalInfo, getUi, editing, updatePersonalInfo } = useResumeData();
  const { name, phone, email, title, location } = getPersonalInfo;

  return (
    <div className="sidebar-section">
      {editing ? (
        <>
          <EditableField
            value={name}
            onChange={v => updatePersonalInfo('name', v)}
            className="sidebar-name editable-name"
          />
          <EditableField
            value={title}
            onChange={v => updatePersonalInfo('title', v)}
            className="sidebar-title editable-title"
          />
          <EditableField
            value={location}
            onChange={v => updatePersonalInfo('location', v)}
            className="sidebar-meta editable-meta"
            placeholder="Location"
          />
        </>
      ) : (
        <>
          <h1 className="sidebar-name">{name}</h1>
          <div className="sidebar-title">{title}</div>
          {location ? <div className="sidebar-meta">{location}</div> : null}
        </>
      )}
      <h3 className="sidebar-section-title">{getUi.contactTitle}</h3>
      <ul className="contact-list">
        <li className="contact-item">
          <span className="contact-label">{getUi.phoneLabel}</span>
          {editing ? (
            <EditableField
              value={phone}
              onChange={v => updatePersonalInfo('phone', v)}
              className="editable-inline"
            />
          ) : phone}
        </li>
        <li className="contact-item">
          <span className="contact-label">{getUi.emailLabel}</span>
          {editing ? (
            <EditableField
              value={email}
              onChange={v => updatePersonalInfo('email', v)}
              className="editable-inline"
            />
          ) : email}
        </li>
      </ul>
    </div>
  );
};

export default Header;
