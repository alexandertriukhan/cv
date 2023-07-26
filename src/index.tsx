import '98.css';
import './styles/index.scss';

import { createRoot } from 'react-dom/client';

import Main from './components/pages/Main';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<Main />);
