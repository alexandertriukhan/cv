import classNames from 'classnames';
import { connect } from 'react-redux';

import { setActive } from '../../../store/actions/dialogActions';
import styles from './styles.module.scss';
import { DialogType } from '../../../store/reducers/dialogReducer';

/**
 * Component renders a list of open dialogs inside a TaskBar
 */

type Props = {
  dialogStack: DialogType[];
  activeDialog: string;
  setActive: typeof setActive;
};

const DialogBar = ({ dialogStack, activeDialog, setActive }: Props) => {
  const modifyDialogButton = (isActive: boolean) => {
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
};

const mapDispatchToProps = {
  setActive,
};

const mapStateToProps = state => ({
  dialogStack: state.dialogReducer.dialogStack,
  activeDialog: state.dialogReducer.activeDialog,
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogBar);
