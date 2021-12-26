import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoreProvider } from './store/index'
import 'normalize.css'
ReactDOM.render(
  <div>
    <StoreProvider>
    <App />
    </StoreProvider>
  </div>,
  document.getElementById('root')
);
