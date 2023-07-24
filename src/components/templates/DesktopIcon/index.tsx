import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { PassableProps as DialogProps } from '../Dialog';
import { connect } from 'react-redux';

import { openDialog, OpenDialogActionPayloadType } from '../../../store/actions/dialogActions';
import classes from './styles.module.scss';

/**
 * Component renders a win98 styled Desktop Icon with attached Dialog
 */

type Props = {
  iconSrc: string;
  iconName: string;
  dialogIconSrc?: string;
  dialogName?: string;
  dialogContent?: ReactNode;
  openDialog: (payload: OpenDialogActionPayloadType) => void;
  invert?: boolean;
  dialogProps?: DialogProps | {};
  onClick?: () => void;
};

const DesktopIcon = ({
  iconSrc,
  iconName,
  dialogIconSrc = iconSrc,
  dialogName = iconName,
  dialogContent,
  openDialog,
  invert,
  dialogProps = {},
  onClick = () => {},
}: Props) => {
  const handleClick = () => {
    if (dialogContent) {
      openDialog({
        icon: dialogIconSrc,
        dialogName: dialogName,
        children: dialogContent,
        props: dialogProps,
      });
    }
    onClick();
  };

  return (
    <button
      className={classNames(classes.desktopIcon, { [classes['desktopIcon--invert']]: invert })}
      onClick={handleClick}
    >
      <img src={iconSrc} alt="" />
      <span>{iconName}</span>
    </button>
  );
};

const mapDispatchToProps = {
  openDialog,
};

export default connect(() => ({}), mapDispatchToProps)(DesktopIcon);
