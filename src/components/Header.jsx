import React from 'react';
import useResumeData from '../hooks/useResumeData';

const Header = () => {
  const { getPersonalInfo } = useResumeData();
  const { name, phone, email } = getPersonalInfo;

  return (
    <div className="sidebar-section">
      <h1 className="sidebar-name">{name}</h1>
      <div className="sidebar-title">前端开发工程师</div>
      <h3 className="sidebar-section-title">联系方式</h3>
      <ul className="contact-list">
        <li className="contact-item">
          <span className="contact-label">电话</span>
          {phone}
        </li>
        <li className="contact-item">
          <span className="contact-label">邮箱</span>
          {email}
        </li>
      </ul>
    </div>
  );
};

export default Header;
