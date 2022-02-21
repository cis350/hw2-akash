import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Question from './Question';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Question />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
