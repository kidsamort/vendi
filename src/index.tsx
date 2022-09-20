import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from 'redux/store';
import { GlobalStyles } from 'style/global.styled';
import Theme from './components/theme';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from 'components/router/router';


const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <GlobalStyles />
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Theme>
    </Provider>
  </React.StrictMode>,
);
