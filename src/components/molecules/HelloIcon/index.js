import React from 'react';

import HelpIconSmall from '../../../assets/icons/help.png';
import HelpIconBig from '../../../assets/images/help.png';
import { DialogContent } from '../../atoms';
import { DesktopIcon } from '../../templates';

function HelloIcon() {
  return (
    <DesktopIcon
      iconSrc={HelpIconBig}
      iconName="Hello.txt"
      dialogIconSrc={HelpIconSmall}
      dialogContent={<DialogContent mdFileName="hello.md" />}
    />
  );
}

export default HelloIcon;
