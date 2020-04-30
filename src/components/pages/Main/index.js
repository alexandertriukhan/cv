import React from 'react';
import { Provider } from 'react-redux';
import { Taskbar, Desktop, DialogContainer } from '../../index';
import configureStore from '../../../store';
import styles from './styles.module.scss';

function Main() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <div className={styles.main}>
        <DialogContainer />
        <Desktop />
        <Taskbar />
      </div>
    </Provider>
  );
}

export default Main;
