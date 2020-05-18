import React from 'react';
import { connect } from 'react-redux';
import { MineSweeperGame } from '../../';
import mineSweeperIcon from '../../../assets/images/minesweeper.png';
import { DesktopIcon } from '../../';
import { openDialog } from '../../../store/actions/dialogActions';

const dialogName = 'Minesweeper.exe';

function MineSweeperDialogContent() {
  return <MineSweeperGame />;
}

export const getDialog = {
  icon: mineSweeperIcon,
  dialogName: dialogName,
  children: <MineSweeperDialogContent />,
};

function MineSweeperIcon({ openDialog }) {
  return (
    <div onClick={() => openDialog(getDialog)}>
      <DesktopIcon iconSrc={mineSweeperIcon} iconName={dialogName} />
    </div>
  )
}

const mapDispatchToProps = {
  openDialog,
};

export default connect(() => ({}), mapDispatchToProps)(MineSweeperIcon);