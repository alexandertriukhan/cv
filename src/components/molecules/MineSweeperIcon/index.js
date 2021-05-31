import React from 'react';
import { MineSweeperGame } from '../../';
import mineSweeperIcon from '../../../assets/images/minesweeper.png';
import mineSweeperIconSmall from '../../../assets/icons/mine.png';
import { DesktopIcon } from '../../';
import styles from './styles.module.scss';

function MineSweeperIcon() {
  return (
    <div className={styles.mineSweeper}>
      <DesktopIcon
        iconSrc={mineSweeperIcon}
        iconName="Minesweeper.exe"
        dialogIconSrc={mineSweeperIconSmall}
        dialogContent={<MineSweeperGame />}
        dialogProps={{
          fullControl: false,
          noBackdrop: true,
        }}
      />
    </div>
  );
}

export default MineSweeperIcon;
