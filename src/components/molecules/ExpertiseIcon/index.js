import React from 'react';
import ExpertiseIconBig from '../../../assets/images/expertise.png';
import ExpertiseIconSmall from '../../../assets/icons/expertise.png';
import { DesktopIcon, DialogContent } from '../../';

function ExpertiseIcon() {
  return (
    <DesktopIcon
      iconName="Areas of expertise"
      iconSrc={ExpertiseIconBig}
      dialogIconSrc={ExpertiseIconSmall}
      dialogContent={<DialogContent mdFileName="expertise.md" className="dialog__body-variant" />}
    />
  );
}

export default ExpertiseIcon;
