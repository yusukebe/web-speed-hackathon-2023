import './polyfill/install';

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { App } from './components/application/App';
import { injectGlobalStyle } from './global.styles';

injectGlobalStyle();

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
