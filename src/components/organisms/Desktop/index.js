import React from 'react';
import { DialogContainer, RecycleBinIcon, MyPcIcon, HelloIcon } from '../../';
import styles from './styles.module.scss';

function Desktop() {
  return (
    <div className={styles.desktop}>
      <DialogContainer />
      <MyPcIcon />
      <HelloIcon />
      <RecycleBinIcon />
    </div>
  );
}

export default Desktop;
