import React from 'react';
import { Taskbar, Desktop } from '../../index';
import styles from './styles.module.scss';

function Main() {
  return (
    <div className={styles.main}>
      <Desktop />
      <Taskbar />
    </div>
  );
}

export default Main;
