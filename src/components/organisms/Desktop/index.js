import React from 'react';
import { DialogContainer, RecycleBinIcon, MyPcIcon, HelloIcon, MineSweeperIcon } from '../../';
import styles from './styles.module.scss';

function Desktop() {
  return (
    <div className={styles.desktop}>
      <DialogContainer />
      <MyPcIcon />
      <HelloIcon />
      <RecycleBinIcon />
      <MineSweeperIcon />
    </div>
  );
}

export default Desktop;
