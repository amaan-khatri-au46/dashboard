import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  App  from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { ThemeProvider } from '@mui/material';
import responsiveTheme from './theme/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={responsiveTheme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>,
);
