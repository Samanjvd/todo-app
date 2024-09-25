import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app-section/App';
import main from './main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const script = ReactDOM.createRoot(document.querySelector('.script'));
script.render(
  <main/>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
