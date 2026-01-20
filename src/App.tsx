import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Star, MapPin, Search } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Filters from './components/Filters';
import ActivityCard from './components/ActivityCard';
import ActivityPage from './components/ActivityPage';
import FamilyActivitiesPage from './components/FamilyActivitiesPage';
import CoupleActivitiesPage from './components/CoupleActivitiesPage';
import UnusualActivitiesPage from './components/UnusualActivitiesPage';
import BudgetActivitiesPage from './components/BudgetActivitiesPage';
import GiftActivitiesPage from './components/GiftActivitiesPage';
import SaintPierrePage from './components/SaintPierrePage';
import SaintLeuPage from './components/SaintLeuPage';
import CilaosPage from './components/CilaosPage';
import PitonFournaisePage from './components/PitonFournaisePage';
import SaintBenoitPage from './components/SaintBenoitPage';
import SEOContent from './components/SEOContent';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFoundPage';
import RedirectComponent from './components/RedirectComponent';
import SitemapGenerator from './components/SitemapGenerator';
import MentionsLegalesPage from './components/MentionsLegalesPage';
import PolitiqueConfidentialitePage from './components/PolitiqueConfidentialitePage';
import CGVPage from './components/CGVPage';
import { activities } from './data/activities';
import { Activity, FilterState } from './types/Activity';
import { extractPrice, extractDuration } from './utils/seo';

const HomePage: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    location: '',
    priceRange: '',
    duration: '',
    searchQuery: ''
  });

  // Gérer les paramètres URL pour la recherche
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    if (searchParam) {
      setFilters(prev => ({ ...prev, searchQuery: searchParam }));
      // Scroll vers les activités après un court délai
      setTimeout(() => {
        scrollToActivities();
      }, 100);
    }
  }, []);
  const activitiesRef = React.useRef<HTMLDivElement>(null);
  
  // Extract unique categories and locations
  const categories = useMemo(() => {
    return Array.from(new Set(activities.map(activity => activity.categorie)));
  }, []);

  const locations = useMemo(() => {
    return Array.from(new Set(activities.map(activity => activity.lieu.split(',')[0])));
  }, []);

  // Filter activities
  const filteredActivities = useMemo(() => {
    return activities.filter(activity => {
      // Search query filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const searchableText = `${activity.titre} ${activity.resume} ${activity.lieu} ${activity.sous_categorie}`.toLowerCase();
        if (!searchableText.includes(query)) return false;
      }

      // Category filter
      if (filters.category && activity.categorie !== filters.category) return false;

      // Location filter
      if (filters.location && !activity.lieu.includes(filters.location)) return false;

      // Price range filter
      if (filters.priceRange) {
        const price = extractPrice(activity.prix_des);
        const [min, max] = filters.priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
        if (price < min || (max !== Infinity && price > max)) return false;
      }

      // Duration filter
      if (filters.duration) {
        const duration = extractDuration(activity.duree);
        const [min, max] = filters.duration.split('-').map(d => d === '+' ? Infinity : parseInt(d));
        if (duration < min || (max !== Infinity && duration > max)) return false;
      }

      return true;
    });
  }, [filters]);

  const handleBookActivity = (activity: Activity) => {
    window.location.href = `/activite/${activity.slug}`;
  };

  const handleSearch = (query: string) => {
    setFilters(prev => ({ ...prev, searchQuery: query }));
  };

  const scrollToActivities = () => {
    activitiesRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
    // Petit délai pour s'assurer que le scroll est terminé, puis ajuster
    setTimeout(() => {
      if (activitiesRef.current) {
        const rect = activitiesRef.current.getBoundingClientRect();
        const headerHeight = 80; // Hauteur approximative du header
        if (rect.top < headerHeight) {
          window.scrollBy(0, rect.top - headerHeight - 20);
        }
      }
    }, 500);
  };

  return (
    <>
      <Helmet>
        <title>Dineo - Activités à La Réunion | Réservation en ligne</title>
        <meta name="description" content="Découvrez et réservez les meilleures activités à La Réunion : randonnées, plongée, parapente, quad. Annulation flexible et prix garantis." />
        <meta name="keywords" content="activités la réunion, activité la réunion, activités île de la réunion, que faire à la réunion, réservation activités réunion" />
        <meta property="og:title" content="Dineo - Activités à La Réunion" />
        <meta property="og:description" content="Réservez les meilleures activités à La Réunion en quelques clics" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dineo.re" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header onSearch={handleSearch} />
        <Hero onSearch={handleSearch} onScrollToActivities={scrollToActivities} />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Section d'introduction complète */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Votre spécialiste des activités à La Réunion
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Dineo vous accompagne dans la découverte de l'île intense à travers une sélection rigoureuse
                des meilleures expériences proposées par nos partenaires. Que vous soyez amateur de sensations fortes,
                passionné de nature ou en quête de détente, trouvez l'activité parfaite pour vous.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Qualité garantie</h3>
                <p className="text-gray-600">
                  Tous nos prestataires sont sélectionnés pour leur expertise, leur sérieux et leur respect 
                  de l'environnement exceptionnel de La Réunion.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Toute l'île couverte</h3>
                <p className="text-gray-600">
                  Des cirques classés UNESCO aux lagons cristallins, en passant par le volcan actif, 
                  découvrez tous les trésors de l'île intense.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Réservation simple</h3>
                <p className="text-gray-600">
                  Trouvez l'activité idéale et réservez en quelques clics via nos partenaires de confiance.
                  La plupart des activités offrent une annulation flexible.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Pourquoi choisir Dineo pour vos activités à La Réunion ?
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">🏆 Excellence et sécurité</h4>
                    <p className="text-gray-700 mb-4">
                      Chaque activité est proposée par des professionnels diplômés et assurés. Nous privilégions 
                      les prestataires locaux qui connaissent parfaitement leur terrain et respectent l'environnement 
                      fragile de La Réunion.
                    </p>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">💰 Transparence des prix</h4>
                    <p className="text-gray-700 mb-4">
                      Nos tarifs sont clairs et sans surprise. Vous savez exactement ce qui est inclus dans votre 
                      activité et pouvez comparer facilement les différentes options disponibles.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">🌟 Réservation facilitée</h4>
                    <p className="text-gray-700 mb-4">
                      Nous vous orientons vers les meilleures expériences et vous connectons directement
                      avec nos partenaires de réservation pour finaliser votre booking en toute sécurité.
                    </p>

                    <h4 className="text-lg font-semibold text-gray-900 mb-4">🔄 Flexibilité maximale</h4>
                    <p className="text-gray-700">
                      La plupart des activités proposées bénéficient d'une annulation flexible. Vous pouvez adapter
                      votre programme selon la météo ou vos envies du moment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mb-8" ref={activitiesRef}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Toutes nos activités à La Réunion
            </h2>
            <p className="text-gray-600 text-lg">
              Avec Dineo, découvrez toutes les activités à faire à La Réunion et réservez en quelques clics.
            </p>
          </div>

          <Filters
            filters={filters}
            onFilterChange={setFilters}
            categories={categories}
            locations={locations}
          />

          <div className="mb-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-600">
                {filteredActivities.length} activité{filteredActivities.length > 1 ? 's' : ''} trouvée{filteredActivities.length > 1 ? 's' : ''}
                {filters.searchQuery && (
                  <span className="ml-2 text-blue-600 font-medium">
                    pour "{filters.searchQuery}"
                  </span>
                )}
              </p>
              {filters.searchQuery && (
                <button
                  onClick={() => {
                    setFilters(prev => ({ ...prev, searchQuery: '' }));
                    // Mettre à jour l'URL sans le paramètre search
                    const url = new URL(window.location.href);
                    url.searchParams.delete('search');
                    window.history.replaceState({}, '', url.toString());
                  }}
                  className="text-sm text-gray-500 hover:text-gray-700 underline"
                >
                  Effacer la recherche
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredActivities.map((activity, index) => (
              <ActivityCard
                key={index}
                activity={activity}
                onBook={handleBookActivity}
              />
            ))}
          </div>

          {filteredActivities.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500">
                <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h3 className="text-xl font-semibold mb-2">Aucune activité trouvée</h3>
                {filters.searchQuery ? (
                  <div>
                    <p className="text-lg mb-4">
                      Aucun résultat pour "<span className="font-medium text-gray-700">{filters.searchQuery}</span>"
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm">Suggestions :</p>
                      <ul className="text-sm space-y-1">
                        <li>• Vérifiez l'orthographe de votre recherche</li>
                        <li>• Essayez des mots-clés plus généraux (ex: "plongée" au lieu de "baptême plongée")</li>
                        <li>• Utilisez des termes comme "randonnée", "parapente", "volcan"</li>
                      </ul>
                    </div>
                    <button
                      onClick={() => {
                        setFilters(prev => ({ ...prev, searchQuery: '' }));
                        const url = new URL(window.location.href);
                        url.searchParams.delete('search');
                        window.history.replaceState({}, '', url.toString());
                      }}
                      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Voir toutes les activités
                    </button>
                  </div>
                ) : (
                  <p className="text-lg">
                    Aucune activité ne correspond à vos critères. Essayez de modifier vos filtres.
                  </p>
                )}
              </div>
            </div>
          )}
        </main>

        <SEOContent />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

// Export les routes pour SSR
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/activite/:slug" element={<ActivityPage />} />
      <Route path="/activites-famille-reunion" element={<FamilyActivitiesPage />} />
      <Route path="/activites-couple-reunion" element={<CoupleActivitiesPage />} />
      <Route path="/activites-insolites-reunion" element={<UnusualActivitiesPage />} />
      <Route path="/activites-pas-cheres-reunion" element={<BudgetActivitiesPage />} />
      <Route path="/activites-a-offrir-reunion" element={<GiftActivitiesPage />} />
      <Route path="/que-faire-saint-pierre-reunion" element={<SaintPierrePage />} />
      <Route path="/que-faire-saint-leu-reunion" element={<SaintLeuPage />} />
      <Route path="/que-faire-cilaos-reunion" element={<CilaosPage />} />
      <Route path="/que-faire-piton-fournaise-reunion" element={<PitonFournaisePage />} />
      <Route path="/que-faire-saint-benoit-reunion" element={<SaintBenoitPage />} />
      <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
      <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage />} />
      <Route path="/cgu" element={<CGVPage />} />
      <Route path="/sitemap-generator" element={<SitemapGenerator />} />
      <Route path="/:path" element={<RedirectComponent />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;