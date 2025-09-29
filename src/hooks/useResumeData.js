import { useState, useMemo } from 'react';
import resumeData from '../data/resumeData';

// 自定义Hook：管理简历数据
const useResumeData = () => {
  const [data, setData] = useState(resumeData);

  // 获取所有简历数据
  const getResumeData = useMemo(() => data, [data]);

  // 获取个人信息
  const getPersonalInfo = useMemo(() => data.personalInfo, [data.personalInfo]);

  // 获取教育经历
  const getEducation = useMemo(() => data.education, [data.education]);

  // 获取专业技能
  const getSkills = useMemo(() => data.skills, [data.skills]);

  // 获取工作经历
  const getExperience = useMemo(() => data.experience, [data.experience]);

  // 获取项目经历
  const getProjects = useMemo(() => data.projects, [data.projects]);

  // 更新个人信息（如果需要）
  const updatePersonalInfo = (newInfo) => {
    setData(prevData => ({
      ...prevData,
      personalInfo: { ...prevData.personalInfo, ...newInfo }
    }));
  };

  // 更新教育经历（如果需要）
  const updateEducation = (newEducation) => {
    setData(prevData => ({
      ...prevData,
      education: newEducation
    }));
  };

  // 更新专业技能（如果需要）
  const updateSkills = (newSkills) => {
    setData(prevData => ({
      ...prevData,
      skills: newSkills
    }));
  };

  // 更新工作经历（如果需要）
  const updateExperience = (newExperience) => {
    setData(prevData => ({
      ...prevData,
      experience: newExperience
    }));
  };

  // 更新项目经历（如果需要）
  const updateProjects = (newProjects) => {
    setData(prevData => ({
      ...prevData,
      projects: newProjects
    }));
  };

  return {
    // 获取数据的方法
    getResumeData,
    getPersonalInfo,
    getEducation,
    getSkills,
    getExperience,
    getProjects,
    
    // 更新数据的方法
    updatePersonalInfo,
    updateEducation,
    updateSkills,
    updateExperience,
    updateProjects
  };
};

export default useResumeData;