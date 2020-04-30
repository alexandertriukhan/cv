import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

function Dialog({ children, dialogName, onClick, onMinimize, onClose, isMinimized, fullControl = true }) {
  function modifyDialog() {
    return classNames('window', styles.dialog, isMinimized && styles['dialog_minimized']);
  }

  const handleMinimize = e => {
    e.stopPropagation();
    onMinimize(dialogName);
  }

  const handleClose = e => {
    e.stopPropagation();
    onClose(dialogName);
  }

  return (
    <div className={modifyDialog()} onClick={() => onClick(dialogName)}>
      <div className="title-bar">
        <div className="title-bar-text">{dialogName}</div>
        <div className="title-bar-controls">
          {fullControl && (
            <>
              <button aria-label="Minimize" onClick={handleMinimize} />
              <button aria-label="Maximize" />
            </>
          )}
          <button aria-label="Close" onClick={handleClose} />
        </div>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
}

export default Dialog;
