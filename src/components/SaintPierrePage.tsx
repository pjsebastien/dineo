import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, MapPin, Mountain, Camera, Compass } from 'lucide-react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import Header from './Header';
import Footer from './Footer';
import { Activity } from '../types/Activity';

const SaintPierrePage: React.FC = () => {
  // Filtrage automatique des activités à Saint-Pierre
  const saintPierreActivities = activities.filter(activity => 
    activity.lieu.toLowerCase().includes('saint-pierre') ||
    activity.lieu.toLowerCase().includes('saint‑pierre')
  );

  const handleBookActivity = (activity: Activity) => {
    window.open(activity.url, '_blank');
  };

  const faqs = [
    {
      question: "Quelles sont les meilleures activités à faire à Saint-Pierre ?",
      answer: "Saint-Pierre offre des expériences aériennes exceptionnelles avec les survols en hélicoptère depuis l'aéroport de Pierrefonds. Ces vols permettent de découvrir les cirques, cascades et le Piton de la Fournaise sous un angle unique. La ville est le point de départ idéal pour explorer le sud sauvage de l'île."
    },
    {
      question: "Pourquoi choisir Saint-Pierre comme base pour ses activités ?",
      answer: "Saint-Pierre bénéficie d'un emplacement stratégique au sud de l'île, proche du Piton de la Fournaise et des cirques. L'aéroport de Pierrefonds permet les survols panoramiques, tandis que la ville offre tous les services nécessaires : restaurants, hébergements et commerces."
    },
    {
      question: "Combien coûtent les activités à Saint-Pierre ?",
      answer: "Les survols en hélicoptère depuis Saint-Pierre varient de 305€ à 345€ selon la durée (45 à 55 minutes). Ces tarifs incluent le briefing sécurité, le vol commenté par le pilote et souvent un diplôme de vol. C'est un investissement pour une expérience inoubliable."
    },
    {
      question: "Quelle est la meilleure période pour les activités à Saint-Pierre ?",
      answer: "Les activités aériennes se pratiquent toute l'année, mais la saison sèche (mai à octobre) offre une meilleure visibilité. Les matinées sont souvent plus claires avec moins de nuages sur les sommets. Évitez la saison cyclonique (janvier-mars) pour plus de sécurité."
    },
    {
      question: "Comment se rendre aux points de départ des activités depuis Saint-Pierre ?",
      answer: "L'aéroport de Pierrefonds se trouve à 5 minutes du centre-ville de Saint-Pierre. Pour les activités au Piton de la Fournaise, comptez 1h30 de route via la route du volcan. La ville est bien desservie et constitue une base logistique idéale."
    },
    {
      question: "Peut-on combiner plusieurs activités depuis Saint-Pierre ?",
      answer: "Absolument ! Saint-Pierre permet de combiner survol en hélicoptère le matin et randonnée au volcan l'après-midi. La proximité des sites permet d'optimiser son temps. Prévoyez cependant des temps de repos entre les activités intenses."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Que faire à Saint-Pierre à La Réunion ? | Activités et Visites</title>
        <meta name="description" content="Découvrez les meilleures activités à Saint-Pierre : survols en hélicoptère, accès Piton de la Fournaise. Toutes les expériences depuis le sud de La Réunion." />
        <meta name="keywords" content="que faire saint-pierre réunion, activités saint-pierre réunion, hélicoptère saint-pierre, piton fournaise saint-pierre, visiter saint-pierre réunion" />
        <link rel="canonical" href="https://dineo.re/que-faire-saint-pierre-reunion" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <span className="text-gray-900">Saint-Pierre</span>
        </nav>

        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux activités
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Que faire à Saint-Pierre à La Réunion ?
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-orange-100">
              Découvrez {saintPierreActivities.length} activités exceptionnelles depuis la capitale du sud
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Mountain className="w-5 h-5 mr-2" />
                <span>Porte du volcan</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Camera className="w-5 h-5 mr-2" />
                <span>Survols panoramiques</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Compass className="w-5 h-5 mr-2" />
                <span>Base stratégique</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        {saintPierreActivities.length > 0 ? (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Activités à Saint-Pierre
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {saintPierreActivities.map((activity, index) => (
                <ActivityCard
                  key={index}
                  activity={activity}
                  onBook={handleBookActivity}
                />
              ))}
            </div>
          </section>
        ) : (
          <div className="text-center py-12 mb-16">
            <p className="text-gray-500 text-lg">
              Aucune activité spécifique à Saint-Pierre pour le moment.
            </p>
            <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
              Voir toutes nos activités à La Réunion
            </Link>
          </div>
        )}

        {/* SEO Content */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Que faire à Saint-Pierre à La Réunion ?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-gray-600 mb-6">
              <strong>Saint-Pierre</strong> est la capitale économique du sud de La Réunion et constitue une base idéale pour explorer cette région authentique de l'île intense. Située stratégiquement entre océan et montagnes, la ville offre un accès privilégié aux merveilles naturelles du sud.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Pourquoi choisir Saint-Pierre pour ses activités ?
            </h3>
            <p className="mb-6">
              <strong>Visiter Saint-Pierre à La Réunion</strong> offre de nombreux avantages pour les amateurs d'activités. La ville abrite l'aéroport de Pierrefonds, point de départ des survols en hélicoptère les plus spectaculaires de l'île. Sa position géographique permet un accès rapide au Piton de la Fournaise, aux cirques de Cilaos et Mafate, ainsi qu'aux plages du sud sauvage.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Les survols en hélicoptère : l'expérience phare de Saint-Pierre
            </h3>
            <p className="mb-4">
              Les <strong>activités à Saint-Pierre</strong> sont dominées par les survols aériens exceptionnels. L'aéroport de Pierrefonds propose des vols panoramiques de 45 à 55 minutes au-dessus des cirques classés UNESCO, des cascades vertigineuses et du Piton de la Fournaise. Ces expériences aériennes révèlent des perspectives uniques sur les paysages les plus spectaculaires de l'océan Indien.
            </p>
            <p className="mb-6">
              Le vol de 45 minutes survole les trois cirques et le volcan, tandis que la formule de 55 minutes propose un tour complet de l'île. Ces <strong>sorties depuis Saint-Pierre</strong> incluent les commentaires du pilote, un briefing sécurité et souvent un diplôme de vol souvenir. Les départs matinaux offrent les meilleures conditions de visibilité.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Saint-Pierre, porte d'entrée du Piton de la Fournaise
            </h3>
            <p className="mb-4">
              <strong>Que faire à Saint-Pierre</strong> quand on s'intéresse au volcan ? La ville constitue le point de départ idéal pour rejoindre le Piton de la Fournaise via la route du volcan. Ce trajet spectaculaire de 1h30 traverse des paysages variés, de la côte tropicale aux plaines d'altitude, jusqu'aux paysages lunaires de la Plaine des Sables.
            </p>
            <p className="mb-6">
              Les randonnées guidées vers le cratère principal partent généralement tôt le matin depuis Saint-Pierre. Cette organisation permet d'éviter les nuages d'altitude et de profiter des meilleures conditions météorologiques. Le retour en fin d'après-midi laisse le temps de découvrir les spécialités culinaires saint-pierraises.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Découverte culturelle et gastronomique
            </h3>
            <p className="mb-4">
              Au-delà des <strong>activités nature à Saint-Pierre</strong>, la ville révèle un patrimoine créole authentique. Le marché couvert du samedi matin propose fruits tropicaux, épices et spécialités locales. Les restaurants du front de mer servent une cuisine créole raffinée, mélange d'influences africaines, indiennes et européennes.
            </p>
            <p className="mb-6">
              La plage de Saint-Pierre, avec son sable noir volcanique, offre un cadre unique pour se détendre après les activités. Les couchers de soleil depuis la jetée constituent un spectacle quotidien apprécié des locaux et visiteurs. Cette ambiance décontractée fait de Saint-Pierre une base de séjour agréable.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Accès aux cirques depuis Saint-Pierre
            </h3>
            <p className="mb-4">
              La position centrale de Saint-Pierre facilite l'accès aux trois cirques de La Réunion. Cilaos se rejoint en 45 minutes par la route aux 400 virages, offrant des paysages de montagne spectaculaires. Cette proximité permet de combiner survol aérien le matin et découverte terrestre l'après-midi.
            </p>
            <p className="mb-6">
              Les <strong>excursions depuis Saint-Pierre</strong> vers Mafate passent par le Maïdo ou les sentiers de randonnée. Salazie reste accessible via Saint-André, mais Saint-Pierre constitue une base logistique excellente pour rayonner dans toute l'île. Cette centralité géographique optimise les temps de transport.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Conseils pratiques pour votre séjour à Saint-Pierre
            </h3>
            <p className="mb-4">
              Pour profiter pleinement des <strong>activités à faire à Saint-Pierre</strong>, réservez vos survols en hélicoptère à l'avance, surtout en haute saison. Les conditions météorologiques peuvent modifier les plannings, une flexibilité est donc recommandée. L'aéroport de Pierrefonds se trouve à 5 minutes du centre-ville.
            </p>
            <p className="mb-6">
              Côté hébergement, Saint-Pierre propose des options variées, des hôtels de charme aux chambres d'hôtes créoles. La ville dispose de tous les services nécessaires : banques, pharmacies, supermarchés et stations-service. Cette infrastructure complète facilite l'organisation de votre séjour aventure.
            </p>

            <div className="bg-orange-50 p-6 rounded-lg mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Programme type d'une journée à Saint-Pierre
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Matinée</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 7h : Survol en hélicoptère (45-55 min)</li>
                    <li>• 9h : Petit-déjeuner créole en ville</li>
                    <li>• 10h : Visite du marché couvert</li>
                    <li>• 11h : Départ vers le Piton de la Fournaise</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Après-midi</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 12h30 : Randonnée au volcan</li>
                    <li>• 16h : Retour à Saint-Pierre</li>
                    <li>• 17h : Détente plage de sable noir</li>
                    <li>• 19h : Dîner créole front de mer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur Saint-Pierre
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SaintPierrePage;