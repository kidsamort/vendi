import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { setupStore } from 'redux/store';

import { GlobalStyles } from './style/global.styled';
import App from './App';


const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
);
