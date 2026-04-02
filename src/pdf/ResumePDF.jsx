import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: 'NotoSansSC',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/notosanssc/v36/notosanssc-regular.ttf',
      fontWeight: 400,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontFamily: 'NotoSansSC',
    fontSize: 10,
    lineHeight: 1.5,
  },
  sidebar: {
    width: 220,
    backgroundColor: '#1a1a2e',
    color: '#e8e8e8',
    padding: 36,
    paddingTop: 40,
  },
  main: {
    flex: 1,
    padding: 40,
    paddingRight: 44,
    paddingTop: 40,
  },
  sidebarName: {
    fontSize: 22,
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: 4,
    fontFamily: 'NotoSansSC',
  },
  sidebarTitle: {
    fontSize: 12,
    color: '#00b4d8',
    fontWeight: 500,
    marginBottom: 20,
  },
  sidebarMeta: {
    fontSize: 10,
    color: '#8892b0',
    marginBottom: 12,
  },
  sidebarSection: {
    marginBottom: 22,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: 1.2,
    color: '#00b4d8',
    marginBottom: 10,
    paddingBottom: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(255,255,255,0.12)',
  },
  contactItem: {
    fontSize: 10,
    color: '#8892b0',
    marginBottom: 8,
  },
  contactLabel: {
    fontSize: 9,
    color: '#90e0ef',
    marginBottom: 2,
    fontWeight: 500,
  },
  sidebarLine: {
    fontSize: 10,
    color: '#8892b0',
    marginBottom: 6,
    lineHeight: 1.5,
  },
  skillTag: {
    fontSize: 9,
    color: '#90e0ef',
    backgroundColor: 'rgba(0,180,216,0.12)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    marginRight: 4,
    marginBottom: 4,
  },
  skillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  eduItem: {
    marginBottom: 12,
  },
  eduSchool: {
    fontSize: 11,
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: 2,
  },
  eduDegree: {
    fontSize: 9,
    color: '#8892b0',
    marginBottom: 1,
  },
  eduPeriod: {
    fontSize: 9,
    color: '#8892b0',
    opacity: 0.7,
  },
  area: {
    marginBottom: 24,
  },
  areaTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: '#1a1a2e',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 14,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#00b4d8',
    borderBottomLeftRadius: 1,
    width: 36,
  },
  expItem: {
    marginBottom: 18,
    paddingBottom: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e9ecef',
  },
  subRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 3,
  },
  companyName: {
    fontSize: 13,
    fontWeight: 700,
    color: '#2d3436',
  },
  period: {
    fontSize: 10,
    color: '#6c757d',
    fontWeight: 500,
  },
  position: {
    fontSize: 11,
    fontWeight: 500,
    color: '#00b4d8',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 10,
    color: '#6c757d',
    marginBottom: 4,
    paddingLeft: 14,
    lineHeight: 1.6,
  },
  subH4: {
    fontSize: 11,
    fontWeight: 600,
    color: '#2d3436',
    marginTop: 10,
    marginBottom: 6,
    paddingLeft: 10,
    borderLeftWidth: 2.5,
    borderLeftColor: '#00b4d8',
  },
});

const Sidebar = ({ data }) => {
  const { personalInfo, ui, summary, skills, education } = data;

  return (
    <View style={styles.sidebar}>
      <Text style={styles.sidebarName}>{personalInfo?.name || ''}</Text>
      <Text style={styles.sidebarTitle}>{personalInfo?.title || ''}</Text>
      {personalInfo?.location && <Text style={styles.sidebarMeta}>{personalInfo.location}</Text>}

      <View style={styles.sidebarSection}>
        <Text style={styles.sectionTitle}>{ui?.contactTitle || 'Contact'}</Text>
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>{ui?.phoneLabel || 'Phone'}</Text>
          <Text>{personalInfo?.phone || ''}</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>{ui?.emailLabel || 'Email'}</Text>
          <Text>{personalInfo?.email || ''}</Text>
        </View>
      </View>

      {summary?.length > 0 && (
        <View style={styles.sidebarSection}>
          <Text style={styles.sectionTitle}>{ui?.summaryTitle || 'Summary'}</Text>
          {summary.map((line, i) => (
            <Text key={i} style={styles.sidebarLine}>{line}</Text>
          ))}
        </View>
      )}

      {skills?.length > 0 && (
        <View style={styles.sidebarSection}>
          <Text style={styles.sectionTitle}>{ui?.skillsTitle || 'Skills'}</Text>
          <View style={styles.skillRow}>
            {skills.flat().map((skill, i) => (
              <Text key={i} style={styles.skillTag}>{String(skill)}</Text>
            ))}
          </View>
        </View>
      )}

      {education?.length > 0 && (
        <View style={styles.sidebarSection}>
          <Text style={styles.sectionTitle}>{ui?.educationTitle || 'Education'}</Text>
          {education.map((edu, i) => (
            <View key={i} style={styles.eduItem}>
              <Text style={styles.eduSchool}>{edu.school}</Text>
              <Text style={styles.eduDegree}>{edu.degree}</Text>
              <Text style={styles.eduPeriod}>{edu.period}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const MainContent = ({ data }) => {
  const { ui, experience, projects, achievements } = data;

  return (
    <View style={styles.main}>
      {experience?.length > 0 && (
        <View style={styles.area}>
          <Text style={styles.areaTitle}>{ui?.experienceTitle || 'Experience'}</Text>
          {experience.map((exp, i) => (
            <View key={i} style={[styles.expItem, i === experience.length - 1 ? { borderBottomWidth: 0, marginBottom: 0, paddingBottom: 0 } : {}]}>
              <View style={styles.subRow}>
                <Text style={styles.companyName}>{exp.company}</Text>
                <Text style={styles.period}>{exp.period}</Text>
              </View>
              <Text style={styles.position}>{exp.position}</Text>
              {exp.responsibilities?.map((resp, j) => (
                <Text key={j} style={styles.bullet}>• {resp}</Text>
              ))}
            </View>
          ))}
        </View>
      )}

      {projects?.length > 0 && (
        <View style={styles.area}>
          <Text style={styles.areaTitle}>{ui?.projectsTitle || 'Projects'}</Text>
          {projects.map((proj, i) => (
            <View key={i} style={[styles.expItem, i === projects.length - 1 ? { borderBottomWidth: 0, marginBottom: 0, paddingBottom: 0 } : {}]}>
              <View style={styles.subRow}>
                <Text style={styles.companyName}>{proj.name}</Text>
                <Text style={styles.period}>{proj.period}</Text>
              </View>
              <Text style={styles.position}>{proj.role}</Text>

              {proj.painPoints?.length > 0 && (
                <>
                  <Text style={styles.subH4}>{ui?.painPointsTitle || 'Context'}</Text>
                  {proj.painPoints.map((p, j) => (
                    <Text key={j} style={styles.bullet}>• {p}</Text>
                  ))}
                </>
              )}

              {proj.solutions?.length > 0 && (
                <>
                  <Text style={styles.subH4}>{ui?.solutionsTitle || 'Highlights'}</Text>
                  {proj.solutions.map((s, j) => (
                    <Text key={j} style={styles.bullet}>• {s}</Text>
                  ))}
                </>
              )}

              {proj.results && (
                <>
                  <Text style={styles.subH4}>{ui?.resultsTitle || 'Outcome'}</Text>
                  <Text style={styles.bullet}>• {proj.results}</Text>
                </>
              )}
            </View>
          ))}
        </View>
      )}

      {achievements?.length > 0 && (
        <View style={styles.area}>
          <Text style={styles.areaTitle}>{ui?.achievementsTitle || 'Achievements'}</Text>
          {achievements.map((item, i) => (
            <Text key={i} style={styles.bullet}>• {item}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

const ResumePDF = ({ data, lang }) => {
  const langData = data?.[lang] ?? data?.zh ?? {};

  return (
    <Document
      producer="lfc-resume"
      creator="lfc-resume"
    >
      <Page size="A4" style={styles.page}>
        <Sidebar data={langData} />
        <MainContent data={langData} />
      </Page>
    </Document>
  );
};

export default ResumePDF;
