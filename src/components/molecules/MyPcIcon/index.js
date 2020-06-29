import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { DesktopIcon } from '../../';
import { SOCIAL_LINKS } from '../../../constants';
import pcIcon from '../../../assets/images/computer.png';
import { openDialog } from '../../../store/actions/dialogActions';
import pcIconSmall from '../../../assets/icons/computer.png';
import classes from './styles.module.scss';

const dialogName = 'My Computer';

function MyPcDialogContent() {
  return (
    <div className={classes.myPcDialogContent}>
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

export const getDialog = {
  icon: pcIconSmall,
  dialogName: dialogName,
  children: <MyPcDialogContent />,
};

function MyPcIcon({ openDialog }) {
  return (
    <div onClick={() => openDialog(getDialog)}>
      <DesktopIcon iconSrc={pcIcon} iconName="My Computer" />
    </div>
  );
}

const mapDispatchToProps = {
  openDialog,
};

export default connect(() => ({}), mapDispatchToProps)(MyPcIcon);
