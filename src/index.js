import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import { App } from 'components/App';
import { theme } from './theme';
import { ModalContextProvider } from 'context/ModalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/praktika">
    <ThemeProvider theme={theme}>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </ThemeProvider>
  </BrowserRouter>
);
