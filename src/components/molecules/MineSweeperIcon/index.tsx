import React from 'react';

import mineSweeperIconSmall from '../../../assets/icons/mine.png';
import mineSweeperIcon from '../../../assets/images/minesweeper.png';
import { MineSweeperGame } from '../../organisms';
import { DesktopIcon } from '../../templates';
import styles from './styles.module.scss';

const MineSweeperIcon = () => (
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

export default MineSweeperIcon;
