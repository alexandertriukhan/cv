import React, { useState } from 'react';
import moment from 'moment';
import classes from './styles.module.scss';

/**
 * Component renders a win98 styled time bar inside a taskbar
 */

function TimeBar() {
  const [currentTime, setCurrentTime] = useState(moment().format('A hh:mm'));
  setInterval(() => {
    const newTime = moment().format('A hh:mm');
    if (newTime !== currentTime) {
      setCurrentTime(newTime);
    }
  }, 1000);

  return <div className={classes.timeBar}>{currentTime}</div>;
}

export default TimeBar;
