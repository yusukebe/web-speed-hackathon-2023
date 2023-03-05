import './polyfill/install';

import React, { StrictMode } from 'react';
// eslint-disable-next-line import/order
import * as ReactDOM from 'react-dom/client';

// eslint-disable-next-line import/order, @typescript-eslint/ban-ts-comment
// @ts-ignore
//import { whyDidYouUpdate } from 'why-did-you-update';

import { App } from './components/application/App';
import { injectGlobalStyle } from './global.styles';

injectGlobalStyle();

//if (process.env.NODE_ENV !== 'production') {
///  whyDidYouUpdate(React);
//}

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
