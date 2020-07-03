import React from 'react';
import {
  DialogContainer,
  RecycleBinIcon,
  MyPcIcon,
  HelloIcon,
  MineSweeperIcon,
  JobExperienceIcon,
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
    </div>
  );
}

export default Desktop;
