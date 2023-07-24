import React from 'react';

import StartIcon from '../../../assets/icons/start.png';
import styles from './styles.module.scss';

/**
 * A win98 styled start button
 */

type Props = {
  onClick: () => void;
};

const StartButton = ({ onClick }: Props) => (
  <button className={styles.startButton} onClick={onClick}>
    <img src={StartIcon} alt="" />
    <h5>Start</h5>
  </button>
);

export default StartButton;
