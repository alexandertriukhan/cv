import React from 'react';
import { connect } from 'react-redux';
import { DialogBar, StartButton, TimeBar } from '../../';
import pcIconSmall from '../../../assets/icons/computer.png';
import { MyPcDialogContent } from '../../molecules/MyPcIcon';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { openDialog } from '../../../store/actions/dialogActions';

function Taskbar({ openDialog }) {
  const handleStartClick = () => {
    openDialog({
      icon: pcIconSmall,
      dialogName: 'My Computer',
      children: <MyPcDialogContent />,
      props: {
        fullControl: false,
        noBackdrop: true,
      },
    });
  };

  return (
    <div className={classNames('window', styles.taskbar)}>
      <div>
        <StartButton onClick={handleStartClick} />
        <hr />
        <div className={styles.dialogBar}>
          <DialogBar />
        </div>
      </div>
      <div>
        <hr />
        <TimeBar />
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  openDialog,
};

export default connect(() => ({}), mapDispatchToProps)(Taskbar);
