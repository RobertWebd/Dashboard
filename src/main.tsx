import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styled.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);