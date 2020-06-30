import React from 'react';
import HelpIconBig from '../../../assets/images/help.png';
import HelpIconSmall from '../../../assets/icons/help.png';
import { DesktopIcon, DialogContent } from '../../';

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
