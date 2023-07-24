import React from 'react';

import EducationIconSmall from '../../../assets/icons/academic.png';
import EducationIconBig from '../../../assets/images/academic.png';
import { DialogContent } from '../../atoms';
import { DesktopIcon } from '../../templates';

const EducationIcon = () => (
  <DesktopIcon
    iconName="Academic Qualifications"
    iconSrc={EducationIconBig}
    dialogIconSrc={EducationIconSmall}
    dialogContent={<DialogContent mdFileName="education.md" className="dialog__body-variant" />}
  />
);

export default EducationIcon;
