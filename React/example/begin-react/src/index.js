import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import useInputs from './useInputs';
import ContextSample from './ContextSample';

ReactDOM.render(
  // page에서 root인 것을 찾아서 <App />을 넣겠다.
  <React.StrictMode>
    <ContextSample />
  </React.StrictMode>,
  document.getElementById('root') 
  // in public/index.html
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 