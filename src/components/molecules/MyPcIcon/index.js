import React from 'react';
import moment from 'moment';
import { DesktopIcon } from '../../';
import { SOCIAL_LINKS } from '../../../constants';
import agentIcon from '../../../assets/images/agent.png';
import pcIcon from '../../../assets/images/computer.png';
import pcIconSmall from '../../../assets/icons/computer.png';
import classes from './styles.module.scss';

function MyPcDialogContent() {
  return (
    <div className={classes.myPcDialogContent}>
      <img src={agentIcon} alt="" />
      <strong>© Alexander Triukhan</strong>
      <div>{moment().format('YYYY')}</div>
      {Object.entries(SOCIAL_LINKS).map(([media, link], index) => (
        <div key={index}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {media}
          </a>
        </div>
      ))}
    </div>
  );
}

function MyPcIcon() {
  return (
    <DesktopIcon
      iconSrc={pcIcon}
      iconName="My Computer"
      dialogIconSrc={pcIconSmall}
      dialogContent={<MyPcDialogContent />}
    />
  );
}

export default MyPcIcon;
