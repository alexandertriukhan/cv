import React from 'react';
import Div100vh from 'react-div-100vh';
import { Provider } from 'react-redux';

import configureStore from '../../../store';
import { Desktop, Taskbar } from '../../organisms';

const Main = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Div100vh>
        <Desktop />
        <Taskbar />
      </Div100vh>
    </Provider>
  );
};

export default Main;
