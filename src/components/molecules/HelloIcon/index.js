import React from 'react';
import { connect } from 'react-redux';
import HelpIconBig from '../../../assets/images/help.png';
import HelpIconSmall from '../../../assets/icons/help.png';
import { DesktopIcon } from '../../';
import { openDialog } from '../../../store/actions/dialogActions';

const dialogName = 'Help.txt';

function HelloDialogContent() {
  return <h1>Hello World!</h1>;
}

export const getDialog = {
  icon: HelpIconSmall,
  dialogName: dialogName,
  children: <HelloDialogContent />,
};

function HelloIcon({ openDialog }) {
  return (
    <div onClick={() => openDialog(getDialog)}>
      <DesktopIcon iconSrc={HelpIconBig} iconName={dialogName} />
    </div>
  );
}

const mapDispatchToProps = {
  openDialog,
};

export default connect(() => ({}), mapDispatchToProps)(HelloIcon);
