import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import resumeData from '../data/resumeData';

const STORAGE_KEY = 'lfc-resume-data';

const loadFromStorage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

const saveToStorage = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch { }
};

const ResumeDataContext = createContext(null);

export const ResumeDataProvider = ({ children }) => {
  const [lang, setLang] = useState('zh');
  const [data, setData] = useState(() => loadFromStorage() || resumeData);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    saveToStorage(data);
  }, [data]);

  const value = useMemo(() => {
    const current = data?.[lang] ?? data?.zh ?? {};

    return {
      lang,
      setLang,
      data,
      setData,
      editing,
      setEditing,

      ui: current.ui ?? {},
      personalInfo: current.personalInfo ?? {},
      summary: current.summary ?? [],
      skills: current.skills ?? [],
      education: current.education ?? [],
      experience: current.experience ?? [],
      projects: current.projects ?? [],
      achievements: current.achievements ?? []
    };
  }, [data, lang, editing]);

  return (
    <ResumeDataContext.Provider value={value}>
      {children}
    </ResumeDataContext.Provider>
  );
};

const useResumeData = () => {
  const ctx = useContext(ResumeDataContext);
  if (!ctx) {
    throw new Error('useResumeData must be used within ResumeDataProvider');
  }

  const updateField = useCallback((section, path, value) => {
    ctx.setData(prev => {
      const langData = { ...(prev[ctx.lang] ?? {}) };
      if (path === null) {
        langData[section] = value;
      } else if (typeof path === 'number') {
        const arr = [...(langData[section] || [])];
        arr[path] = value;
        langData[section] = arr;
      } else {
        const parts = path.split('.');
        let target = langData[section];
        if (!target) {
          langData[section] = {};
          target = langData[section];
        }
        const last = parts.pop();
        for (const p of parts) {
          target[p] = { ...(target[p] || {}) };
          target = target[p];
        }
        target[last] = value;
      }
      return { ...prev, [ctx.lang]: langData };
    });
  }, [ctx.lang]);

  const updatePersonalInfo = useCallback((field, value) => {
    ctx.setData(prev => {
      const langData = { ...(prev[ctx.lang] ?? {}) };
      langData.personalInfo = { ...(langData.personalInfo ?? {}), [field]: value };
      return { ...prev, [ctx.lang]: langData };
    });
  }, [ctx.lang]);

  const updateArrayItem = useCallback((section, index, field, value) => {
    ctx.setData(prev => {
      const langData = { ...(prev[ctx.lang] ?? {}) };
      const arr = [...(langData[section] || [])];
      if (typeof field === 'string' && field !== '') {
        arr[index] = { ...(arr[index] || {}), [field]: value };
      } else {
        arr[index] = value;
      }
      langData[section] = arr;
      return { ...prev, [ctx.lang]: langData };
    });
  }, [ctx.lang]);

  const updateNestedArrayItem = useCallback((section, index, subField, subIndex, value) => {
    ctx.setData(prev => {
      const langData = { ...(prev[ctx.lang] ?? {}) };
      const arr = [...(langData[section] || [])];
      const item = { ...(arr[index] || {}) };
      const subArr = [...(item[subField] || [])];
      subArr[subIndex] = value;
      item[subField] = subArr;
      arr[index] = item;
      langData[section] = arr;
      return { ...prev, [ctx.lang]: langData };
    });
  }, [ctx.lang]);

  const addItem = useCallback((section, template = {}) => {
    ctx.setData(prev => {
      const langData = { ...(prev[ctx.lang] ?? {}) };
      langData[section] = [...(langData[section] || []), template];
      return { ...prev, [ctx.lang]: langData };
    });
  }, [ctx.lang]);

  const removeItem = useCallback((section, index) => {
    ctx.setData(prev => {
      const langData = { ...(prev[ctx.lang] ?? {}) };
      const arr = [...(langData[section] || [])];
      arr.splice(index, 1);
      langData[section] = arr;
      return { ...prev, [ctx.lang]: langData };
    });
  }, [ctx.lang]);

  const addSkillTag = useCallback((groupIndex, tag) => {
    ctx.setData(prev => {
      const langData = { ...(prev[ctx.lang] ?? {}) };
      const skills = [...(langData.skills || [])];
      skills[groupIndex] = [...(skills[groupIndex] || []), tag];
      langData.skills = skills;
      return { ...prev, [ctx.lang]: langData };
    });
  }, [ctx.lang]);

  const removeSkillTag = useCallback((groupIndex, tagIndex) => {
    ctx.setData(prev => {
      const langData = { ...(prev[ctx.lang] ?? {}) };
      const skills = [...(langData.skills || [])];
      skills[groupIndex] = [...(skills[groupIndex] || [])];
      skills[groupIndex].splice(tagIndex, 1);
      langData.skills = skills;
      return { ...prev, [ctx.lang]: langData };
    });
  }, [ctx.lang]);

  const resetData = useCallback(() => {
    ctx.setData(resumeData);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    getResumeData: ctx,
    getPersonalInfo: ctx.personalInfo,
    getEducation: ctx.education,
    getSkills: ctx.skills,
    getExperience: ctx.experience,
    getProjects: ctx.projects,
    getSummary: ctx.summary,
    getAchievements: ctx.achievements,
    getUi: ctx.ui,
    lang: ctx.lang,
    setLang: ctx.setLang,
    editing: ctx.editing,
    setEditing: ctx.setEditing,
    data: ctx.data,

    updateField,
    updatePersonalInfo,
    updateArrayItem,
    updateNestedArrayItem,
    addItem,
    removeItem,
    addSkillTag,
    removeSkillTag,
    resetData,
  };
};

export default useResumeData;
