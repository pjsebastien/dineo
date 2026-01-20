import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes } from './App';
import './index.css';

const root = document.getElementById('root')!;

// Vérifie si le contenu a été pré-rendu (SSR)
if (root.innerHTML && root.innerHTML.trim() !== '' && !root.innerHTML.includes('<!--app-html-->')) {
  // Hydrate le HTML pré-rendu
  ReactDOM.hydrateRoot(
    root,
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
} else {
  // Pas de HTML pré-rendu (dev mode), monte normalement
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
}
