import {StrictMode} from 'react';
// @ts-expect-error react-dom/client types are unavailable in the current project configuration.
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
// @ts-expect-error CSS module declarations are unavailable in the current project configuration.
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
