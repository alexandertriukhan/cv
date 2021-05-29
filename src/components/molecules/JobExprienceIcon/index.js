import React from 'react';
import JobIconBig from '../../../assets/images/job.png';
import JobIconSmall from '../../../assets/icons/job.png';
import { DesktopIcon, DialogContent } from '../../';

function JobExperienceIcon() {
  return (
    <DesktopIcon
      iconName="Job Experience"
      iconSrc={JobIconBig}
      dialogIconSrc={JobIconSmall}
      dialogContent={<DialogContent mdFileName="job.md" className="dialog__body-variant" />}
    />
  );
}

export default JobExperienceIcon;
