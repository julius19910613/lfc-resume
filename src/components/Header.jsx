import React from 'react';
import useResumeData from '../hooks/useResumeData';

const Header = () => {
  const { getPersonalInfo } = useResumeData();
  const { name, birthDate, phone, email } = getPersonalInfo;

  return (
    <header className="header">
      <div className="header-content">
        <h2>{name}</h2>
        <div className="header-contact">
          <span>{birthDate}</span>
          <span>{phone}</span>
          <span>{email}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;