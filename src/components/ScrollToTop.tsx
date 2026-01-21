import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  // useLayoutEffect s'exécute AVANT que le navigateur ne peigne l'écran
  // Cela empêche le navigateur de restaurer la position de scroll
  useLayoutEffect(() => {
    // Ne pas scroller si on a un paramètre de recherche et qu'on est sur la page d'accueil
    if (pathname === '/' && search.includes('search=')) {
      return;
    }

    // Scroll immédiat en haut de page
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
