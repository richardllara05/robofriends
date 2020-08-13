import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import 'tachyons';

// React has
// 1. Component
// 2. State
// 3. Children

ReactDOM.render(
  <React.StrictMode>
    <div className="tc">
      <App />
    </div>
  </React.StrictMode>,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
