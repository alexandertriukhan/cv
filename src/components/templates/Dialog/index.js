import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import classNames from 'classnames';
import { ConditionalWrapper } from '../../';
import Draggable from 'react-draggable';
import styles from './styles.module.scss';

const Z_INDEX_BASE = 5;
const Z_INDEX_ACTIVE_MODIFIER = 5;

const MOBILE_START_POSITION = {
  x: 0,
  y: 0,
};

function Dialog({
  children,
  icon,
  dialogName,
  onClick,
  onMinimize,
  onClose,
  isMinimized,
  isActive,
  fullControl = true,
  maximizeOnStart = false,
  noBackdrop,
  index,
}) {
  const [isMaximized, setIsMaximized] = useState(isMobile ? true : maximizeOnStart);
  const [position, setPosition] = useState(isMobile ? MOBILE_START_POSITION : { x: 100, y: 100 });
  const [minimizedPosition, setMinimizedPosition] = useState({ x: 0, y: 0 });

  function modifyDialog() {
    return classNames(
      'window',
      styles.dialog,
      isMinimized && styles['dialog--minimized'],
      isMaximized && styles['dialog--maximized'],
      isActive && styles['dialog--active'],
    );
  }

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

  const onStopDrag = (e, position) => {
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
        className={modifyDialog()}
        onClick={() => onClick(dialogName)}
        style={{
          zIndex: isActive ? Z_INDEX_BASE + index + Z_INDEX_ACTIVE_MODIFIER : Z_INDEX_BASE + index,
        }}
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
        <div className={classNames('window-body', styles.dialog__body)}>
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
