// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { SharedVariablesProvider } from './context/SharedVariableContextFile.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SharedVariablesProvider>
        <App />
      </SharedVariablesProvider>
    </BrowserRouter>
  </React.StrictMode>,
);



