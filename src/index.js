import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

import { Provider } from 'react-redux';
import Store from './Redux/Store/Store';

ReactDOM.render(
  <>
    <Provider store={Store}>
      <App />
    </Provider>
    {/* <App /> */}
  </>,
  document.getElementById('root')
);