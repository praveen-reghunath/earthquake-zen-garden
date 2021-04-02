import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import { AppContextProvider } from 'state/appState';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);