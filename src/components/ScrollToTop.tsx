import { useLayoutEffect, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, search } = useLocation();
  const prevPathRef = useRef<string>('');

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
      prevPathRef.current = pathname;
      return;
    }

    // Vérifier si le chemin a réellement changé
    if (prevPathRef.current === pathname) {
      return;
    }
    prevPathRef.current = pathname;

    // Fonction pour forcer le scroll en haut
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Exécuter immédiatement
    scrollToTop();

    // Répéter plusieurs fois pour contrer les comportements du navigateur
    requestAnimationFrame(scrollToTop);

    // Délai court pour les navigateurs qui restaurent le scroll après le render
    const timer1 = setTimeout(scrollToTop, 0);
    const timer2 = setTimeout(scrollToTop, 50);
    const timer3 = setTimeout(scrollToTop, 100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
