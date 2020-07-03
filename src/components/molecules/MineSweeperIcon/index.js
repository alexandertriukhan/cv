import React from 'react';
import { MineSweeperGame } from '../../';
import mineSweeperIcon from '../../../assets/images/minesweeper.png';
import mineSweeperIconSmall from '../../../assets/icons/mine.png';
import { DesktopIcon } from '../../';

function MineSweeperIcon() {
  return (
    <DesktopIcon
      iconSrc={mineSweeperIcon}
      iconName="Minesweeper.exe"
      dialogIconSrc={mineSweeperIconSmall}
      dialogContent={<MineSweeperGame />}
    />
  );
}

export default MineSweeperIcon;
