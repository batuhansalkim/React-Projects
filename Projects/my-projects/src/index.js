import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { App2 } from './proje2/app2';
import App3 from './proje3/app3';
import reportWebVitals from './reportWebVitals';
import { App4 } from './proje4/app4';
import Appbatu from './proje5/app5';
import App6 from './proje6/app6';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App6/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
