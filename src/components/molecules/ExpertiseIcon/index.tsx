import React from 'react';

import ExpertiseIconSmall from '../../../assets/icons/expertise.png';
import ExpertiseIconBig from '../../../assets/images/expertise.png';
import { DialogContent } from '../../atoms';
import { DesktopIcon } from '../../templates';

const ExpertiseIcon = () => (
  <DesktopIcon
    iconName="Areas of expertise"
    iconSrc={ExpertiseIconBig}
    dialogIconSrc={ExpertiseIconSmall}
    dialogContent={<DialogContent mdFileName="expertise.md" className="dialog__body-variant" />}
  />
);

export default ExpertiseIcon;
