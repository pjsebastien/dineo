import React from 'react';
import { MapPin, Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { activities } from '../data/activities';
import { Activity } from '../types/Activity';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState<Activity[]>([]);
  const [showResults, setShowResults] = React.useState(false);
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Fonction de recherche
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch?.(query);
    
    if (query.trim().length > 0) {
      const filtered = activities.filter(activity => {
        const searchableText = `${activity.titre} ${activity.resume} ${activity.lieu} ${activity.sous_categorie}`.toLowerCase();
        return searchableText.includes(query.toLowerCase());
      }).slice(0, 8);
      
      setSearchResults(filtered);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  // Fonction pour gérer la soumission du formulaire de recherche
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Naviguer vers la page d'accueil avec le paramètre de recherche
      window.location.href = `/?search=${encodeURIComponent(searchQuery.trim())}`;
      setShowResults(false);
      setIsMobileMenuOpen(false);
    }
  };

  // Fonction pour gérer la touche Entrée
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearchSubmit(e as any);
    }
  };

  // Fermer les résultats quand on clique ailleurs
  React.useEffect(() => {
    const handleClickOutside = () => {
      setShowResults(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);
  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <MapPin className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Dineo</h1>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
                  Activités
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link to="/activites-famille-reunion" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Activités en famille
                    </Link>
                    <Link to="/activites-couple-reunion" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Activités en couple
                    </Link>
                    <Link to="/activites-insolites-reunion" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Activités insolites
                    </Link>
                    <Link to="/activites-pas-cheres-reunion" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Activités pas chères
                    </Link>
                    <Link to="/activites-a-offrir-reunion" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Activités à offrir
                    </Link>
                    <div className="border-t border-gray-200 my-2"></div>
                    <Link to="/balades-cheval-reunion" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      🐴 Balades à cheval
                    </Link>
                    <Link to="/canyoning-reunion" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      🌊 Canyoning
                    </Link>
                    <Link to="/location-van-reunion" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      🚐 Location de van
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
                  Destinations
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link to="/que-faire-saint-pierre-reunion" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Saint-Pierre
                    </Link>
                    <Link to="/que-faire-saint-leu-reunion" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Saint-Leu
                    </Link>
                    <Link to="/que-faire-cilaos-reunion" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Cilaos
                    </Link>
                    <Link to="/que-faire-piton-fournaise-reunion" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Piton de la Fournaise
                    </Link>
                    <Link to="/que-faire-saint-benoit-reunion" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Saint-Benoît
                    </Link>
                    <Link to="/que-faire-maido-reunion" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Maïdo
                    </Link>
                    <Link to="/que-faire-saint-joseph-langevin-reunion" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Saint-Joseph / Langevin
                    </Link>
                    <Link to="/que-faire-cirque-salazie-reunion" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Cirque de Salazie
                    </Link>
                    <Link to="/que-faire-saint-gilles-les-bains-reunion" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Saint-Gilles-Les-Bains
                    </Link>
                    <Link to="/que-faire-la-saline-les-bains-reunion" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      La Saline Les Bains
                    </Link>
                    <Link to="/que-faire-plaine-palmistes-belouve-reunion" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Plaine des Palmistes
                    </Link>
                    <Link to="/que-faire-sainte-suzanne-reunion" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Sainte-Suzanne
                    </Link>
                  </div>
                </div>
              </div>
              <a 
                href="https://www.blog.dineo.re/" 
                target="_blank" 
                rel="dofollow"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Blog
              </a>
              <Link to="/a-propos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                À propos
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block" onClick={(e) => e.stopPropagation()}>
                <form onSubmit={handleSearchSubmit} className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Rechercher une activité..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => searchQuery && setShowResults(true)}
                    onKeyDown={handleKeyDown}
                  />
                </form>
                
                {/* Résultats de recherche */}
                {showResults && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
                    <div className="py-2">
                      <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                        {searchResults.length} résultat{searchResults.length > 1 ? 's' : ''} trouvé{searchResults.length > 1 ? 's' : ''}
                      </div>
                      {searchResults.map((activity, index) => (
                        <Link
                          key={index}
                          to={`/activite/${activity.slug}`}
                          className="block px-4 py-4 hover:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-colors group"
                          onClick={() => {
                            setShowResults(false);
                            setSearchQuery('');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                        >
                          <div className="flex items-start space-x-4">
                            <img
                              src={activity.image_url_1}
                              alt={activity.titre}
                              className="w-16 h-16 object-cover rounded-lg flex-shrink-0 shadow-sm"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                {activity.titre}
                              </h4>
                              <p className="text-xs text-gray-600 mt-1 flex items-center">
                                <MapPin className="w-3 h-3 mr-1" />
                                {activity.lieu}
                              </p>
                              <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                                {activity.resume}
                              </p>
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                                  {activity.categorie}
                                </span>
                                <span className="text-sm font-bold text-gray-900">
                                  {activity.prix_des}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                      
                      {searchQuery && (
                        <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
                          <Link
                            to={`/?search=${encodeURIComponent(searchQuery)}`}
                            className="text-sm text-blue-600 hover:text-blue-800 font-semibold flex items-center justify-center"
                            onClick={() => {
                              setShowResults(false);
                              setSearchQuery('');
                            }}
                          >
                            Voir tous les résultats pour "{searchQuery}" →
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Message si aucun résultat */}
                {showResults && searchResults.length === 0 && searchQuery.trim().length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="px-4 py-6 text-center text-gray-500">
                      <Search className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                      Aucune activité trouvée pour "{searchQuery}"
                      <p className="text-xs mt-1">Essayez avec d'autres mots-clés</p>
                      <button
                        onClick={() => handleSearchSubmit({ preventDefault: () => {} } as any)}
                        className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-semibold"
                      >
                        Rechercher quand même →
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Menu burger pour mobile */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-600" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <div className="relative mb-4" onClick={(e) => e.stopPropagation()}>
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Rechercher une activité..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => searchQuery && setShowResults(true)}
                  onKeyDown={handleKeyDown}
                />
              </form>
              
              {/* Résultats de recherche mobile */}
              {showResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-80 overflow-y-auto">
                  <div className="py-2">
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                      {searchResults.length} résultat{searchResults.length > 1 ? 's' : ''} trouvé{searchResults.length > 1 ? 's' : ''}
                    </div>
                    {searchResults.map((activity, index) => (
                      <Link
                        key={index}
                        to={`/activite/${activity.slug}`}
                        className="block px-3 py-3 hover:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-colors group"
                        onClick={() => {
                          setShowResults(false);
                          setSearchQuery('');
                          setIsMobileMenuOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
                        <div className="flex items-start space-x-3">
                          <img
                            src={activity.image_url_1}
                            alt={activity.titre}
                            className="w-12 h-12 object-cover rounded-lg flex-shrink-0 shadow-sm"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                              {activity.titre}
                            </h4>
                            <p className="text-xs text-gray-600 mt-1 flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              {activity.lieu}
                            </p>
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-medium">
                                {activity.categorie}
                              </span>
                              <span className="text-sm font-bold text-gray-900">
                                {activity.prix_des}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                    
                    {searchQuery && (
                      <div className="px-3 py-2 border-t border-gray-200 bg-gray-50">
                        <Link
                          to={`/?search=${encodeURIComponent(searchQuery)}`}
                          className="text-sm text-blue-600 hover:text-blue-800 font-semibold flex items-center justify-center"
                          onClick={() => {
                            setShowResults(false);
                            setSearchQuery('');
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          Voir tous les résultats →
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {/* Message si aucun résultat mobile */}
              {showResults && searchResults.length === 0 && searchQuery.trim().length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="px-3 py-4 text-center text-gray-500">
                    <Search className="w-6 h-6 mx-auto mb-2 text-gray-300" />
                    Aucune activité trouvée pour "{searchQuery}"
                    <p className="text-xs mt-1">Essayez d'autres mots-clés</p>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/a-propos"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              À propos
            </Link>
            
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Activités
            </div>
            <Link to="/activites-famille-reunion" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Activités en famille
            </Link>
            <Link to="/activites-couple-reunion" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Activités en couple
            </Link>
            <Link to="/activites-insolites-reunion" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Activités insolites
            </Link>
            <Link to="/activites-pas-cheres-reunion" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Activités pas chères
            </Link>
            <Link to="/activites-a-offrir-reunion" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Activités à offrir
            </Link>
            <Link to="/balades-cheval-reunion" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              🐴 Balades à cheval
            </Link>
            <Link to="/canyoning-reunion" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              🌊 Canyoning
            </Link>
            <Link to="/location-van-reunion" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              🚐 Location de van
            </Link>

            <a
              href="https://www.blog.dineo.re/"
              target="_blank"
              rel="dofollow"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </a>
            
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide mt-2">
              Destinations
            </div>
            <Link to="/que-faire-saint-pierre-reunion" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Saint-Pierre
            </Link>
            <Link to="/que-faire-saint-leu-reunion" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Saint-Leu
            </Link>
            <Link to="/que-faire-cilaos-reunion" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Cilaos
            </Link>
            <Link to="/que-faire-piton-fournaise-reunion" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Piton de la Fournaise
            </Link>
            <Link to="/que-faire-saint-benoit-reunion" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Saint-Benoît
            </Link>
            <Link to="/que-faire-maido-reunion" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Maïdo
            </Link>
            <Link to="/que-faire-saint-joseph-langevin-reunion" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Saint-Joseph / Langevin
            </Link>
            <Link to="/que-faire-cirque-salazie-reunion" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Cirque de Salazie
            </Link>
            <Link to="/que-faire-saint-gilles-les-bains-reunion" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Saint-Gilles-Les-Bains
            </Link>
            <Link to="/que-faire-la-saline-les-bains-reunion" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              La Saline Les Bains
            </Link>
            <Link to="/que-faire-plaine-palmistes-belouve-reunion" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Plaine des Palmistes
            </Link>
            <Link to="/que-faire-sainte-suzanne-reunion" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Sainte-Suzanne
            </Link>
            <a
              href="#"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;