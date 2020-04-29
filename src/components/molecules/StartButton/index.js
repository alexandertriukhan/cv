import React from 'react';
import StartIcon from '../../../assets/images/startIcon.png';
import styles from './styles.module.scss';

function StartButton() {
  return (
    <button className={styles.startButton}>
      <img src={StartIcon} alt="" />
      <h5>Start</h5>
    </button>
  );
}

export default StartButton;
