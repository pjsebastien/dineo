import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import App from './App';

// Mock document et window pour SSR
if (typeof document === 'undefined') {
  (global as any).document = {
    createElement: () => ({}),
    head: { appendChild: () => {}, removeChild: () => {} },
    body: {},
    querySelectorAll: () => [],
    addEventListener: () => {},
  };
  (global as any).window = {
    addEventListener: () => {},
    removeEventListener: () => {},
    location: {},
    navigator: { userAgent: 'SSR' },
  };
  (global as any).navigator = { userAgent: 'SSR' };
}

export function render(url: string) {
  // Render l'app
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <MemoryRouter initialEntries={[url]}>
        <App />
      </MemoryRouter>
    </React.StrictMode>
  );

  // Récupérer les données Helmet
  const helmet = Helmet.renderStatic();

  // Retourner le HTML + les métadonnées Helmet
  return {
    html,
    helmet: {
      htmlAttributes: helmet.htmlAttributes.toString(),
      title: helmet.title.toString(),
      meta: helmet.meta.toString(),
      link: helmet.link.toString(),
      script: helmet.script.toString(),
    }
  };
}
