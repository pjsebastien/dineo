import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Ne pas scroller si on a un paramètre de recherche et qu'on est sur la page d'accueil
    // car le scroll vers les activités sera géré par HomePage
    if (pathname === '/' && search.includes('search=')) {
      return;
    }

    // Force immediate scroll to top
    // Utiliser un timeout de 0 pour s'assurer que le scroll se fait après le rendu
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior
      });

      // Fallback pour les navigateurs plus anciens
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Scroll immédiat
    scrollToTop();

    // Scroll de secours après un court délai (pour gérer les rendus asynchrones)
    const timeoutId = setTimeout(scrollToTop, 0);

    return () => clearTimeout(timeoutId);
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
