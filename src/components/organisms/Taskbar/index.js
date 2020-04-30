import React from 'react';
import { DialogBar, StartButton, TimeBar } from '../../';
import classNames from 'classnames';
import styles from './styles.module.scss';

function Taskbar() {
  return (
    <div className={classNames('window', styles.taskbar)}>
      <div>
        <StartButton />
        <hr />
        <DialogBar />
      </div>
      <div>
        <hr />
        <TimeBar />
      </div>
    </div>
  );
}

export default Taskbar;
