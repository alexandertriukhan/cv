import { Provider } from 'react-redux';

import Div100vh from 'react-div-100vh';
import { isMobile } from 'react-device-detect';
import { ConditionalWrapper } from '../../templates';
import configureStore from '../../../store';
import { Desktop, Taskbar } from '../../organisms';

const Main = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <ConditionalWrapper
        condition={isMobile}
        wrapper={children => <Div100vh>{children}</Div100vh>}
        falsyWrapper={children => <div style={{ height: '100vh' }}>{children}</div>}
      >
        <Desktop />
        <Taskbar />
      </ConditionalWrapper>
    </Provider>
  );
};

export default Main;
