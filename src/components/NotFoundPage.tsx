import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Home, Search, MapPin, Compass, ArrowRight } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const NotFoundPage: React.FC = () => {
  const popularActivities = [
    { name: "Parapente Saint-Leu", slug: "parapente-biplace-saint-leu-lagon-reunion" },
    { name: "Hélicoptère volcans", slug: "helicoptere-volcans-cirques-saint-pierre-reunion" },
    { name: "Observation dauphins", slug: "observation-dauphins-baleines-saint-gilles-reunion" },
    { name: "Randonnée Fournaise", slug: "randonnee-piton-de-la-fournaise-reunion" },
    { name: "Plongée Saint-Leu", slug: "bapteme-plongee-saint-leu-reserve-marine-reunion" },
    { name: "Canyoning Cilaos", slug: "canyoning-fleurs-jaunes-cilaos-reunion" }
  ];

  const destinations = [
    { name: "Saint-Leu", path: "/que-faire-saint-leu-reunion" },
    { name: "Saint-Pierre", path: "/que-faire-saint-pierre-reunion" },
    { name: "Cilaos", path: "/que-faire-cilaos-reunion" },
    { name: "Piton de la Fournaise", path: "/que-faire-piton-fournaise-reunion" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Page non trouvée - Dineo | Activités à La Réunion</title>
        <meta name="description" content="Cette page n'existe pas. Découvrez les activités à La Réunion : parapente, hélicoptère, plongée, randonnées et bien plus encore." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section 404 */}
        <div className="text-center mb-16">
          <div className="relative mb-8">
            <div className="text-9xl font-bold text-blue-100 select-none">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="w-24 h-24 text-blue-600" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Oups ! Cette page s'est perdue dans les cirques
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Comme un randonneur égaré dans Mafate, cette page n'existe pas ou plus. 
            Mais pas de panique ! Nous allons vous aider à retrouver votre chemin vers l'aventure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Home className="w-5 h-5 mr-2" />
              Retour à l'accueil
            </Link>
            
            <Link
              to="/?search=parapente"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Search className="w-5 h-5 mr-2" />
              Rechercher une activité
            </Link>
          </div>
        </div>

        {/* Suggestions d'activités populaires */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <Compass className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Activités les plus populaires
              </h2>
              <p className="text-gray-600 text-lg">
                Découvrez les expériences préférées de nos visiteurs à La Réunion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularActivities.map((activity, index) => (
                <Link
                  key={index}
                  to={`/activite/${activity.slug}`}
                  className="group bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 p-6 rounded-xl border border-blue-100 hover:border-blue-200 transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {activity.name}
                    </span>
                    <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations populaires */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl text-white p-8">
            <div className="text-center mb-8">
              <MapPin className="w-12 h-12 text-white mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Explorez nos destinations
              </h2>
              <p className="text-green-100 text-lg">
                Chaque région de La Réunion offre des expériences uniques
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {destinations.map((destination, index) => (
                <Link
                  key={index}
                  to={destination.path}
                  className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-200 text-center"
                >
                  <span className="font-semibold text-white group-hover:text-green-100 transition-colors">
                    {destination.name}
                  </span>
                  <ArrowRight className="w-5 h-5 text-white mx-auto mt-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section recherche */}
        <section className="text-center">
          <div className="bg-gray-100 rounded-2xl p-8">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Vous cherchiez quelque chose de précis ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Utilisez notre barre de recherche pour trouver l'activité parfaite : 
              randonnée, plongée, parapente, hélicoptère... L'île intense n'attend que vous !
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher une activité..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const query = (e.target as HTMLInputElement).value;
                      if (query.trim()) {
                        window.location.href = `/?search=${encodeURIComponent(query)}`;
                      }
                    }
                  }}
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Appuyez sur Entrée pour rechercher
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotFoundPage;