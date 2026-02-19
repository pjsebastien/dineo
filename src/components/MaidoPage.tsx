import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Mountain, Sunrise, Trees } from 'lucide-react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import Header from './Header';
import Footer from './Footer';
import { Activity } from '../types/Activity';

const MaidoPage: React.FC = () => {
  // Filtrage automatique des activités au Maïdo
  const maidoActivities = activities.filter(activity =>
    activity.lieu.toLowerCase().includes('maïdo') ||
    activity.lieu.toLowerCase().includes('maido')
  );

  const handleBookActivity = (activity: Activity) => {
    window.open(activity.url, '_blank');
  };

  const faqs = [
    {
      question: "Quelles sont les meilleures activités à faire au Maïdo ?",
      answer: "Le Maïdo offre des activités équestres exceptionnelles pour toute la famille. Les balades à poney pour enfants et les initiations à l'équitation se déroulent dans la magnifique forêt de Cryptomérias, à plus de 2000m d'altitude. Ces activités permettent de découvrir ce site naturel unique tout en s'initiant au monde équestre."
    },
    {
      question: "Pourquoi choisir le Maïdo pour des activités en famille ?",
      answer: "Le Maïdo est idéal pour les familles grâce à ses activités adaptées aux enfants dès 3 ans. La fraîcheur de l'altitude, les paysages spectaculaires sur le cirque de Mafate et la forêt de Cryptomérias créent un cadre magique. Les structures équestres proposent un encadrement professionnel et des installations adaptées."
    },
    {
      question: "Combien coûtent les activités au Maïdo ?",
      answer: "Les activités équestres au Maïdo sont accessibles : l'initiation équitation débute à 25€ pour 1h30-3h, la balade à poney avec goûter est à 50€ pour 3h. Ces tarifs incluent l'encadrement diplômé, le matériel de sécurité (bombe, chaps) et pour certaines formules le goûter."
    },
    {
      question: "Quelle est la meilleure période pour visiter le Maïdo ?",
      answer: "Le Maïdo se visite toute l'année, mais les matinées offrent la meilleure visibilité sur le cirque de Mafate. La saison sèche (mai à octobre) garantit un temps plus stable. Prévoyez toujours des vêtements chauds car l'altitude (2200m) apporte de la fraîcheur même en été."
    },
    {
      question: "Comment se rendre au Maïdo depuis Saint-Paul ?",
      answer: "Le Maïdo se situe à environ 1h de route depuis Saint-Paul via la route forestière. La montée spectaculaire traverse différents étages de végétation. Les centres équestres se trouvent le long de la route forestière 68 de Cryptomérias. Un véhicule est indispensable car l'accès en bus est compliqué."
    },
    {
      question: "Les activités au Maïdo sont-elles adaptées aux débutants ?",
      answer: "Absolument ! Les activités proposées au Maïdo sont spécialement conçues pour les débutants et les enfants. Les poneys sont dociles, l'encadrement est adapté à chaque âge (3-5 ans, 6-10 ans) et les parents peuvent accompagner gratuitement les plus jeunes en tenant le poney."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Que faire au Piton Maïdo à La Réunion ? | Activités et Visites</title>
        <meta name="description" content="Découvrez les activités au Maïdo : balades à poney pour enfants, équitation en forêt de Cryptomérias, vue sur Mafate. Activités familiales à 2200m d'altitude." />
        <meta name="keywords" content="que faire maïdo réunion, activités maïdo, balade poney maïdo, équitation maïdo, maïdo mafate, visiter maïdo réunion" />
        <link rel="canonical" href="https://dineo.re/que-faire-maido-reunion" />
          <meta property="og:title" content="Que faire au Piton Maïdo à La Réunion ? | Activités et Visites" />
          <meta property="og:description" content="Découvrez les activités au Maïdo : balades à poney pour enfants, équitation en forêt de Cryptomérias, vue sur Mafate. Activités familiales à 2200m d'altitude." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dineo.re/que-faire-maido-reunion" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <span className="text-gray-900">Maïdo</span>
        </nav>

        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux activités
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Que faire au Piton Maïdo à La Réunion ?
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-green-100">
              Découvrez {maidoActivities.length} activités au cœur de la forêt de Cryptomérias
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Mountain className="w-5 h-5 mr-2" />
                <span>Vue sur Mafate</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Trees className="w-5 h-5 mr-2" />
                <span>Forêt de Cryptomérias</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sunrise className="w-5 h-5 mr-2" />
                <span>2200m d'altitude</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        {maidoActivities.length > 0 ? (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Activités au Maïdo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {maidoActivities.map((activity, index) => (
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
              Aucune activité spécifique au Maïdo pour le moment.
            </p>
            <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
              Voir toutes les activités à La Réunion
            </Link>
          </div>
        )}

        {/* SEO Content */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Que faire au Piton Maïdo à La Réunion ?
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-gray-600 mb-6">
              <strong>Le Piton Maïdo</strong> est l'un des sites naturels les plus spectaculaires de La Réunion, culminant à 2203 mètres d'altitude. Offrant une vue panoramique exceptionnelle sur le cirque de Mafate et l'océan Indien, ce sommet accessible en voiture constitue un terrain d'aventure unique pour les activités en pleine nature.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              La forêt de Cryptomérias : un décor magique
            </h3>
            <p className="mb-6">
              <strong>Visiter le Maïdo à La Réunion</strong>, c'est découvrir la magnifique forêt de Cryptomérias qui entoure le site. Ces arbres originaires du Japon créent une ambiance féérique, particulièrement le matin quand la brume flotte entre les troncs centenaires. Cette forêt d'altitude abrite des centres équestres qui proposent des activités pour toute la famille dans un cadre exceptionnel.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Activités équestres pour enfants au Maïdo
            </h3>
            <p className="mb-4">
              Les <strong>activités au Maïdo</strong> sont particulièrement adaptées aux familles avec enfants. Les balades à poney permettent aux plus jeunes (dès 3 ans) de découvrir l'équitation dans un cadre sécurisé. Les enfants participent à la préparation de leur poney, apprennent les bases du pansage et partent ensuite pour une balade encadrée dans la forêt, suivie d'un goûter bien mérité.
            </p>
            <p className="mb-6">
              L'initiation à l'équitation en carrière propose une approche pédagogique progressive. Les moniteurs diplômés BPJEPS adaptent leur enseignement à chaque tranche d'âge (3-5 ans et 6-10 ans). Le matériel de sécurité (bombe et chaps) est fourni, et les parents peuvent accompagner gratuitement les plus jeunes en tenant le poney.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Le lever de soleil au Maïdo : spectacle naturel
            </h3>
            <p className="mb-4">
              <strong>Que faire au Maïdo</strong> avant une activité ? Assister au lever de soleil est une expérience inoubliable. Les rayons illuminent progressivement les pitons du cirque de Mafate, créant un jeu d'ombres et de lumières spectaculaire. Ce moment magique attire de nombreux visiteurs qui arrivent avant l'aube pour profiter de ce spectacle gratuit.
            </p>
            <p className="mb-6">
              La plateforme panoramique du Maïdo offre une vue dégagée à 360 degrés. Par temps clair, on distingue les îlets de Mafate, le Grand Bénare, le Piton des Neiges et même l'océan à l'horizon. Cette accessibilité fait du Maïdo l'un des rares sites où contempler un cirque sans randonnée difficile.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Randonnées et sentiers autour du Maïdo
            </h3>
            <p className="mb-4">
              Les <strong>randonnées depuis le Maïdo</strong> offrent différents niveaux de difficulté. Le sentier vers le Grand Bénare (2896m, point culminant des Mascareignes) convient aux randonneurs expérimentés. Les balades plus courtes dans la forêt de Cryptomérias sont accessibles aux familles et permettent de découvrir la flore endémique.
            </p>
            <p className="mb-6">
              La descente vers Mafate par le sentier du Maïdo représente une aventure plus engagée. Cette randonnée technique nécessite une bonne condition physique et une préparation adéquate. Elle constitue l'une des principales voies d'accès au cirque isolé, avec possibilité de passer la nuit dans les gîtes des îlets.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Informations pratiques pour votre visite au Maïdo
            </h3>
            <p className="mb-4">
              Pour profiter pleinement des <strong>activités à faire au Maïdo</strong>, prévoyez des vêtements chauds quelle que soit la saison. L'altitude apporte fraîcheur et vent, avec des températures pouvant descendre près de 0°C en hiver austral. Un coupe-vent, un pull et des chaussures fermées sont indispensables.
            </p>
            <p className="mb-6">
              L'accès au Maïdo nécessite un véhicule personnel, l'accès en transport en commun étant très limité. La route forestière depuis Saint-Paul prend environ 1 heure et offre des paysages changeants. Les centres équestres se situent avant le sommet, le long de la route forestière 68 de Cryptomérias. Réservez vos activités équestres à l'avance car les places sont limitées.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Programme type d'une journée au Maïdo en famille
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Matinée</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 6h : Départ de Saint-Paul pour le lever de soleil</li>
                    <li>• 7h : Lever de soleil au belvédère du Maïdo</li>
                    <li>• 8h : Petit-déjeuner pique-nique</li>
                    <li>• 9h : Balade à poney pour les enfants (3h)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Après-midi</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 12h : Pique-nique en forêt de Cryptomérias</li>
                    <li>• 13h30 : Balade familiale dans la forêt</li>
                    <li>• 15h30 : Retour vers la côte</li>
                    <li>• 17h : Baignade à Saint-Gilles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur le Maïdo
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

export default MaidoPage;
