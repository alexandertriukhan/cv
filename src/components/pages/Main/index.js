import React from 'react';
import { Provider } from 'react-redux';
import { Taskbar, Desktop } from '../../index';
import configureStore from '../../../store';
import styles from './styles.module.scss';

function Main() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <div className={styles.main}>
        <Desktop />
        <Taskbar />
      </div>
    </Provider>
  );
}

export default Main;
