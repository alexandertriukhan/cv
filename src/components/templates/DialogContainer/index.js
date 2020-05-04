import React from 'react';
import { connect } from 'react-redux';
import { Dialog } from '../..';
import { closeDialog, minimizeDialog, setActive } from '../../../store/actions/dialogActions';

function DialogContainer({ dialogStack, closeDialog, minimizeDialog, setActive }) {
  return dialogStack.map(({ icon, dialogName, isMinimized, children }) => (
    <Dialog
      icon={icon}
      dialogName={dialogName}
      key={dialogName}
      onClick={setActive}
      onClose={closeDialog}
      onMinimize={minimizeDialog}
      isMinimized={isMinimized}
    >
      {children}
    </Dialog>
  ));
}

const mapDispatchToProps = {
  closeDialog,
  minimizeDialog,
  setActive,
};

const mapStateToProps = state => ({
  dialogStack: state.dialogReducer.dialogStack,
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogContainer);
