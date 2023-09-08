import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/auth0-theme.css';
import './styles/main.css';
import 'highlight.js/styles/vs2015.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
