import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <CookiesProvider>
    <App />
    </CookiesProvider>
  </React.StrictMode>
);
reportWebVitals();
