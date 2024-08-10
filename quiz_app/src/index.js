import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { AuthState } from './context/AuthState';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthState >
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </AuthState> 
  </React.StrictMode>
);
