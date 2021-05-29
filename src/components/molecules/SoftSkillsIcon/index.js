import React from 'react';
import SoftIconBig from '../../../assets/images/soft.png';
import SoftIconSmall from '../../../assets/icons/soft.png';
import { DesktopIcon, DialogContent } from '../../';

function SoftSkillsIcon() {
  return (
    <DesktopIcon
      iconName="Soft Skills"
      iconSrc={SoftIconBig}
      dialogIconSrc={SoftIconSmall}
      dialogContent={<DialogContent mdFileName="softskills.md" className="dialog__body-variant" />}
    />
  );
}

export default SoftSkillsIcon;
