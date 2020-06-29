import React from 'react';
import PropTypes from 'prop-types';
import classes from './styles.module.scss';

/**
 * Component renders a win98 styled Desktop Icon
 *
 * @param {string} iconSrc
 * @param {string} iconName
 */

function DesktopIcon({ iconSrc, iconName }) {
  return (
    <div className={classes.desktopIcon}>
      <img src={iconSrc} alt="" />
      <span>{iconName}</span>
    </div>
  );
}

DesktopIcon.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default DesktopIcon;
