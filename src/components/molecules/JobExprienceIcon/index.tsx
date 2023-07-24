import React from 'react';

import JobIconSmall from '../../../assets/icons/job.png';
import JobIconBig from '../../../assets/images/job.png';
import { DialogContent } from '../../atoms';
import { DesktopIcon } from '../../templates';

const JobExperienceIcon = () => (
  <DesktopIcon
    iconName="Job Experience"
    iconSrc={JobIconBig}
    dialogIconSrc={JobIconSmall}
    dialogContent={<DialogContent mdFileName="job.md" className="dialog__body-variant" />}
  />
);

export default JobExperienceIcon;
