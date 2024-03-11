// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { SharedVariablesProvider } from './context/SharedVariableContextFile.jsx'; // Ensure this path is correct

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SharedVariablesProvider>
        <App />
      </SharedVariablesProvider>
    </BrowserRouter>
  </React.StrictMode>,
);



// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// )
