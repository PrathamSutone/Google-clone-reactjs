import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ResultContextProvider } from './context/ContextProvider';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-000000-01');

ReactDOM.render(
  <React.StrictMode>
    <ResultContextProvider>
      <App />
    </ResultContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactGA.pageview(window.location.pathname + window.location.search);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
