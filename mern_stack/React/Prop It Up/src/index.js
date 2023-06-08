import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name={"Doe, Jabe"} age={45} color={"Black"} />
    <App name={"Smith, John"} age={88} color={"Brown"} />
    <App name={"Fillmore, Millard"} age={50} color={"Brown"} />
    <App name={"Smith, Maria"} age={62} color={"Brown"} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
