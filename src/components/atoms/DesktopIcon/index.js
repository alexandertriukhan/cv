import React from 'react';
import classes from './styles.module.scss';

function DesktopIcon({ iconSrc, iconName }) {
  return (
    <div className={classes.desktopIcon}>
      <img src={iconSrc} alt="" />
      <span>{iconName}</span>
    </div>
  );
}

export default DesktopIcon;
