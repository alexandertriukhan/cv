import { connect } from 'react-redux';

import { DialogType } from '../../../store/reducers/dialogReducer';
import {
  closeDialog,
  minimizeDialog,
  setActive,
  setInactive,
} from '../../../store/actions/dialogActions';
import { Dialog } from '..';

type Props = {
  dialogStack: DialogType[];
  activeDialog: string;
  closeDialog: typeof closeDialog;
  minimizeDialog: typeof minimizeDialog;
  setActive: typeof setActive;
  setInactive: typeof setInactive;
};

const DialogContainer = ({
  dialogStack,
  activeDialog,
  closeDialog,
  minimizeDialog,
  setActive,
  setInactive,
}: Props) =>
  dialogStack.map(({ icon, dialogName, isMinimized, children, props }, index) => (
    <Dialog
      icon={icon}
      dialogName={dialogName}
      key={dialogName}
      onClick={setActive}
      onClose={closeDialog}
      onMinimize={minimizeDialog}
      onOutsideClick={setInactive}
      isMinimized={isMinimized}
      isActive={activeDialog === dialogName}
      index={index}
      {...props}
    >
      {children}
    </Dialog>
  ));

const mapDispatchToProps = {
  closeDialog,
  minimizeDialog,
  setActive,
  setInactive,
};

const mapStateToProps = state => ({
  dialogStack: state.dialogReducer.dialogStack,
  activeDialog: state.dialogReducer.activeDialog,
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogContainer);
