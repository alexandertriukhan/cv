import classNames from 'classnames';
import { useState, PropsWithChildren, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import Draggable from 'react-draggable';
import useOutsideClick from '../../../hooks/useOutsideClick';
import { Props as HeaderMenuProps } from '../../molecules/HeaderMenu';

import { ConditionalWrapper } from '..';
import styles from './styles.module.scss';
import HeaderMenu from '../../molecules/HeaderMenu/HeaderMenu';

const Z_INDEX_BASE = 5;
const Z_INDEX_ACTIVE_MODIFIER = 5;

const MOBILE_START_POSITION = {
  x: 0,
  y: 0,
};

export type PassableProps = {
  fullControl?: boolean;
  maximizeOnStart?: boolean;
  noBackdrop?: boolean;
  headerMenuItems?: HeaderMenuProps;
};

type Props = PropsWithChildren<
  {
    icon: string;
    dialogName: string;
    onClick: (dialogName: string) => void;
    onMinimize: (dialogName: string) => void;
    onClose: (dialogName: string) => void;
    onOutsideClick: () => void;
    isMinimized?: boolean;
    isActive?: boolean;
    index: number;
  } & PassableProps
>;

function Dialog({
  children,
  icon,
  dialogName,
  onClick,
  onMinimize,
  onClose,
  onOutsideClick,
  isMinimized,
  isActive,
  fullControl = true,
  maximizeOnStart = false,
  noBackdrop = false,
  headerMenuItems,
  index,
}: Props) {
  const dialogRef = useRef(null);
  const [isMaximized, setIsMaximized] = useState(isMobile ? true : maximizeOnStart);
  const [position, setPosition] = useState(isMobile ? MOBILE_START_POSITION : { x: 100, y: 100 });
  const [minimizedPosition, setMinimizedPosition] = useState({ x: 0, y: 0 });

  const handleOutsideClick = () => {
    isActive && onOutsideClick();
  };

  useOutsideClick(dialogRef, handleOutsideClick);

  const handleMinimize = e => {
    e.stopPropagation();
    onMinimize(dialogName);
  };

  const handleMaximize = () => {
    if (isMaximized) {
      setPosition(minimizedPosition);
    } else {
      setMinimizedPosition(position);
      setPosition({ x: 0, y: 0 });
    }
    setIsMaximized(!isMaximized);
  };

  const handleClose = e => {
    e.preventDefault();
    e.stopPropagation();
    onClose(dialogName);
  };

  const onStopDrag = (e, position: { x: number; y: number }) => {
    e.preventDefault();
    e.stopPropagation();
    setPosition({ x: position.x, y: position.y });
  };

  return (
    <Draggable
      position={position}
      onStop={onStopDrag}
      bounds="parent"
      handle=".title-bar"
      cancel=".no-drag"
    >
      <div
        className={classNames(
          'window',
          styles.dialog,
          isMinimized && styles['dialog--minimized'],
          isMaximized && styles['dialog--maximized'],
          isActive && styles['dialog--active'],
        )}
        onClick={() => onClick(dialogName)}
        style={{
          zIndex: isActive ? Z_INDEX_BASE + index + Z_INDEX_ACTIVE_MODIFIER : Z_INDEX_BASE + index,
        }}
        ref={dialogRef}
      >
        <div className="title-bar">
          <div className={classNames('title-bar-text', styles.titleBarText)}>
            <img src={icon} alt="" />
            {dialogName}
          </div>
          <div className="title-bar-controls">
            {fullControl && (
              <>
                <button className="no-drag" aria-label="Minimize" onClick={handleMinimize} />
                <button className="no-drag" aria-label="Maximize" onClick={handleMaximize} />
              </>
            )}
            <button className="no-drag" aria-label="Close" onClick={handleClose} />
          </div>
        </div>
        <div
          className={classNames(
            'window-body',
            styles.dialog__body,
            Boolean(headerMenuItems) && styles['dialog__body--withMenu'],
          )}
        >
          {Boolean(headerMenuItems) && <HeaderMenu items={headerMenuItems} />}
          <ConditionalWrapper
            condition={!noBackdrop}
            wrapper={children => <div className={styles.dialog__backdrop}>{children}</div>}
          >
            {children}
          </ConditionalWrapper>
        </div>
      </div>
    </Draggable>
  );
}

export default Dialog;
