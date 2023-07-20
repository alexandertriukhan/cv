import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';

import pcIconSmall from '../../../assets/icons/computer.png';
import { openDialog } from '../../../store/actions/dialogActions';
import { DialogBar, StartButton, TimeBar } from '../../atoms';
import { MyPcDialogContent } from '../../molecules/MyPcIcon';
import styles from './styles.module.scss';

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
