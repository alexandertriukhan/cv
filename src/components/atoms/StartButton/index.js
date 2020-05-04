import React from 'react';
import StartIcon from '../../../assets/icons/start.png';
import styles from './styles.module.scss';

function StartButton({ onClick }) {
  return (
    <button className={styles.startButton} onClick={onClick}>
      <img src={StartIcon} alt="" />
      <h5>Start</h5>
    </button>
  );
}

export default StartButton;
