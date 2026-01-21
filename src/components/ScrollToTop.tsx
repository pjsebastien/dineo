import { useLayoutEffect, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  // Désactiver la restauration automatique du scroll par le navigateur
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  // useLayoutEffect s'exécute AVANT que le navigateur ne peigne l'écran
  useLayoutEffect(() => {
    // Ne pas scroller si on a un paramètre de recherche et qu'on est sur la page d'accueil
    if (pathname === '/' && search.includes('search=')) {
      return;
    }

    // Forcer le scroll en haut de façon agressive
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Double vérification après un micro-délai (pour contrer le navigateur)
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
