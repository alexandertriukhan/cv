import React from 'react';
import EducationIconBig from '../../../assets/images/academic.png';
import EducationIconSmall from '../../../assets/icons/academic.png';
import { DesktopIcon, DialogContent } from '../../';

function EducationIcon() {
  return (
    <DesktopIcon
      iconName="Academic Qualifications"
      iconSrc={EducationIconBig}
      dialogIconSrc={EducationIconSmall}
      dialogContent={<DialogContent mdFileName="education.md" className="dialog__body-variant" />}
    />
  );
}

export default EducationIcon;
