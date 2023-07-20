import PropTypes from 'prop-types';
import React from 'react';

import StartIcon from '../../../assets/icons/start.png';
import styles from './styles.module.scss';

/**
 * A win98 styled start button
 *
 * Props:
 * @param {function} onClick
 */

function StartButton({ onClick }) {
  return (
    <button className={styles.startButton} onClick={onClick}>
      <img src={StartIcon} alt="" />
      <h5>Start</h5>
    </button>
  );
}

StartButton.propTypes = {
  onClick: PropTypes.func,
};

export default StartButton;
