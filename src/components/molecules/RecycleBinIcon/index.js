import React from 'react';

import iconSmall from '../../../assets/icons/recycle.png';
import iconWordPress from '../../../assets/images/directory.png';
import iconSrc from '../../../assets/images/recycle.png';
import iconJquery from '../../../assets/images/script.png';
import { DesktopIcon } from '../../templates';
import styles from './styles.module.scss';

const RecycleBinDialog = () => {
  return (
    <div className={styles.recycleBin__content}>
      <DesktopIcon iconSrc={iconJquery} iconName="jquery-3.6.0.min.js" invert />
      <DesktopIcon iconSrc={iconWordPress} iconName="wordpress.zip" invert />
    </div>
  );
};

function RecycleBinIcon() {
  return (
    <div className={styles.recycleBin}>
      <DesktopIcon
        iconSrc={iconSrc}
        iconName="Recycle Bin"
        dialogIconSrc={iconSmall}
        dialogContent={<RecycleBinDialog />}
      />
    </div>
  );
}

export default RecycleBinIcon;
