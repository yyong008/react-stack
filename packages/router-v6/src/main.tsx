import { createRoot } from 'react-dom/client';

import '@purge-icons/generated'

import App from './App';

const render = () => {
  createRoot(document.querySelector('#root')!).render(<App />);
}

render();


