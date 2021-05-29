import React, { useState } from 'react';
import classNames from 'classnames';
import Draggable from 'react-draggable';
import styles from './styles.module.scss';

const Z_INDEX_BASE = 5;
const Z_INDEX_ACTIVE_MODIFIER = 5;

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
  index,
}) {
  const [isMaximized, setIsMaximized] = useState(maximizeOnStart);
  const [position, setPosition] = useState({ x: 100, y: 100 });
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
    e.stopPropagation();
    onClose(dialogName);
  };

  const onStopDrag = (e, position) => {
    e.preventDefault();
    e.stopPropagation();
    setPosition({ x: position.x, y: position.y });
  };

  // TODO: Draggable breaks button click
  return (
    <Draggable position={position} onStop={onStopDrag} bounds="parent" handle=".title-bar">
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
                <button aria-label="Minimize" onClick={handleMinimize} />
                <button aria-label="Maximize" onClick={handleMaximize} />
              </>
            )}
            <button aria-label="Close" onClick={handleClose} />
          </div>
        </div>
        <div className="window-body">{children}</div>
      </div>
    </Draggable>
  );
}

export default Dialog;
