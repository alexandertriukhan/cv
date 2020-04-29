import React from 'react';
import StartButton from '../../molecules/StartButton';
import TimeBar from '../../atoms/TimeBar';
import classNames from 'classnames';
import styles from './styles.module.scss';

function Taskbar() {
  return (
    <div className={classNames('window', styles.taskbar)}>
      <div>
        <StartButton />
        <hr />
      </div>
      <div>
        <hr />
        <TimeBar />
      </div>
    </div>
  );
}

export default Taskbar;
