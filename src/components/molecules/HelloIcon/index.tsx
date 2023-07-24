import React from 'react';

import HelpIconSmall from '../../../assets/icons/help.png';
import HelpIconBig from '../../../assets/images/help.png';
import { DialogContent } from '../../atoms';
import { DesktopIcon } from '../../templates';

const HelloIcon = () => (
  <DesktopIcon
    iconSrc={HelpIconBig}
    iconName="Hello.txt"
    dialogIconSrc={HelpIconSmall}
    dialogContent={<DialogContent mdFileName="hello.md" />}
  />
);

export default HelloIcon;
