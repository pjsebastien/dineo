import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AppRoutes } from './App';

export function render(url: string) {
  // Vider tout état résiduel de Helmet du rendu précédent
  Helmet.renderStatic();

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </React.StrictMode>
  );

  // Extraire les meta tags générés par Helmet pour injection dans le <head>
  const helmet = Helmet.renderStatic();

  return {
    html,
    helmet: {
      title: helmet.title.toString(),
      meta: helmet.meta.toString(),
      link: helmet.link.toString(),
      script: helmet.script.toString(),
    }
  };
}
