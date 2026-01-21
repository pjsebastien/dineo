import React from 'react';
import NotFoundPage from './NotFoundPage';

// Ce composant capture les URLs inconnues à un segment (/:path)
// Les redirections sont gérées par Vercel dans vercel.json
// Si on arrive ici, c'est que l'URL n'existe pas -> 404
const RedirectComponent: React.FC = () => {
  return <NotFoundPage />;
};

export default RedirectComponent;