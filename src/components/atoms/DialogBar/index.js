import React from 'react';
import { connect } from 'react-redux';
import { setActive } from '../../../store/actions/dialogActions';
import classNames from 'classnames';
import styles from './styles.module.scss';

function DialogBar({ dialogStack, activeDialog, setActive }) {
  const modifyDialogButton = isActive => {
    return classNames(styles.dialogButton, isActive && styles['dialogButton_active']);
  };

  return dialogStack.map(({ icon, dialogName }) => (
    <button
      key={dialogName}
      onClick={() => setActive(dialogName)}
      className={modifyDialogButton(dialogName === activeDialog)}
    >
      <img src={icon} alt="" />
      {dialogName}
    </button>
  ));
}

const mapDispatchToProps = {
  setActive,
};

const mapStateToProps = state => ({
  dialogStack: state.dialogReducer.dialogStack,
  activeDialog: state.dialogReducer.activeDialog,
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogBar);
