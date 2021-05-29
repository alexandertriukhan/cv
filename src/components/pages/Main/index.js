import React from 'react';
import { Provider } from 'react-redux';
import { Taskbar, Desktop } from '../../index';
import Div100vh from 'react-div-100vh';
import configureStore from '../../../store';

function Main() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Div100vh as="main">
        <Desktop />
        <Taskbar />
      </Div100vh>
    </Provider>
  );
}

export default Main;
