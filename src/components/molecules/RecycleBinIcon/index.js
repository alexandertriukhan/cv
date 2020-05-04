import React from 'react';
import { DesktopIcon } from '../../';
import iconSrc from '../../../assets/images/recycle_bin_empty.png';
import styles from './styles.module.scss';

function RecycleBinIcon() {
  return (
    <div className={styles.recycleBin}>
      <DesktopIcon iconSrc={iconSrc} iconName="Recycle Bin" />
    </div>
  );
}

export default RecycleBinIcon;