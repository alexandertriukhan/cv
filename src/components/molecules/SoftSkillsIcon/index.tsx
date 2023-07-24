import React from 'react';

import SoftIconSmall from '../../../assets/icons/soft.png';
import SoftIconBig from '../../../assets/images/soft.png';
import { DialogContent } from '../../atoms';
import { DesktopIcon } from '../../templates';

const SoftSkillsIcon = () => (
  <DesktopIcon
    iconName="Soft Skills"
    iconSrc={SoftIconBig}
    dialogIconSrc={SoftIconSmall}
    dialogContent={<DialogContent mdFileName="softskills.md" className="dialog__body-variant" />}
  />
);

export default SoftSkillsIcon;
