//Library for creating views
import React from 'react'; 

//Library used to render the UI in the browser
import ReactDOM from 'react-dom/client'; 

import './index.css'; 

//Importing the App component
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//Render the 'App' React element into the root DOM node
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
