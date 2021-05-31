import React from 'react';
import {
  DialogContainer,
  RecycleBinIcon,
  MyPcIcon,
  HelloIcon,
  MineSweeperIcon,
  JobExperienceIcon,
  EducationIcon,
  ExpertiseIcon,
  SoftSkillsIcon,
  PDFIcon,
} from '../../';
import styles from './styles.module.scss';

function Desktop() {
  return (
    <div className={styles.desktop}>
      <DialogContainer />
      <MyPcIcon />
      <HelloIcon />
      <RecycleBinIcon />
      <MineSweeperIcon />
      <JobExperienceIcon />
      <EducationIcon />
      <ExpertiseIcon />
      <SoftSkillsIcon />
      <PDFIcon />
    </div>
  );
}

export default Desktop;
