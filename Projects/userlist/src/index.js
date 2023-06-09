import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App1 from './1/App1';
import reportWebVitals from './reportWebVitals';
import App2 from './2/App2';
import Navbar from './components/navbar';
import App3 from './3/App3';
import App4 from './4/App4';
import App5 from './5/App5';
import App6 from './6/App6';
import App7 from './7/App7';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App7 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
