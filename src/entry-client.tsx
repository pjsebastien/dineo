import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// En production, on hydrate le HTML pré-rendu
// En dev, on monte normalement
const root = document.getElementById('root')!;

if (root.innerHTML) {
  // Il y a du HTML pré-rendu, on hydrate
  ReactDOM.hydrateRoot(
    root,
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  // Pas de HTML pré-rendu (dev mode), on monte normalement
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
