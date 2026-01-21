import React from 'react';
import { Link, LinkProps, useNavigate } from 'react-router-dom';

interface ScrollLinkProps extends LinkProps {
  children: React.ReactNode;
}

// Composant Link qui force le scroll en haut de page avant la navigation
const ScrollLink: React.FC<ScrollLinkProps> = ({ to, children, onClick, ...props }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Appeler le onClick original si présent
    if (onClick) {
      onClick(e);
    }

    // Forcer le scroll en haut AVANT la navigation
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Naviguer vers la nouvelle page
    navigate(to as string);

    // Double vérification après navigation
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default ScrollLink;
