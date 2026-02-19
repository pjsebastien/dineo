import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Waves, Trees, Mountain } from 'lucide-react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import Header from './Header';
import Footer from './Footer';
import { Activity } from '../types/Activity';

const SaintJosephLangevinPage: React.FC = () => {
  // Filtrage automatique des activités à Saint-Joseph / Langevin
  const langevinActivities = activities.filter(activity =>
    activity.lieu.toLowerCase().includes('saint-joseph') ||
    activity.lieu.toLowerCase().includes('langevin')
  );

  const handleBookActivity = (activity: Activity) => {
    window.open(activity.url, '_blank');
  };

  const faqs = [
    {
      question: "Quelles sont les meilleures activités à faire à Saint-Joseph et la rivière Langevin ?",
      answer: "La rivière Langevin est le paradis du canyoning à La Réunion. Le canyon de Grand Galet est l'activité phare de la région, offrant cascades spectaculaires, toboggans naturels et sauts dans des bassins cristallins. Cette rivière sauvage du sud est réputée pour ses eaux claires et ses paysages tropicaux préservés."
    },
    {
      question: "Pourquoi la rivière Langevin est-elle si prisée pour le canyoning ?",
      answer: "La Langevin offre des conditions idéales pour le canyoning : eau de source pure, cascades variées, bassins profonds et végétation luxuriante. La cascade Grand Galet, haute de 10 mètres, est particulièrement photogénique et accessible facilement. La région bénéficie d'un débit régulier permettant la pratique toute l'année."
    },
    {
      question: "Combien coûtent les activités à la rivière Langevin ?",
      answer: "Le canyoning de Grand Galet à la rivière Langevin coûte à partir de 70€ pour une demi-journée. Ce tarif inclut l'encadrement professionnel, le matériel de sécurité complet (combinaison, baudrier, casque) et les navettes si nécessaires. Un excellent rapport qualité-prix pour une expérience aquatique intense."
    },
    {
      question: "Quelle est la meilleure période pour le canyoning à Langevin ?",
      answer: "Le canyoning à la Langevin se pratique toute l'année grâce au climat tropical du sud. La saison sèche (mai à octobre) offre des conditions optimales avec un débit modéré et une eau claire. Évitez les périodes de fortes pluies où le débit peut rendre la pratique dangereuse."
    },
    {
      question: "Comment accéder à la cascade et aux sites de canyoning de Langevin ?",
      answer: "La cascade Grand Galet se situe à 5 minutes du centre de Saint-Joseph. Un parking facilite l'accès au site. Les départs de canyoning se font depuis différents points de la rivière selon les parcours. Les prestataires fournissent généralement les navettes depuis Saint-Joseph."
    },
    {
      question: "Le canyoning à Langevin est-il adapté aux débutants ?",
      answer: "Oui, le canyon de Grand Galet convient aux débutants à partir de 12 ans ayant une condition physique moyenne. Les guides adaptent le parcours aux capacités du groupe et les sauts restent facultatifs. Une initiation parfaite au canyoning dans un cadre magnifique et sécurisé."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Que faire à Saint-Joseph et la rivière Langevin à La Réunion ?</title>
        <meta name="description" content="Découvrez les activités à Saint-Joseph et la rivière Langevin : canyoning de Grand Galet, cascade spectaculaire, toboggans naturels. Le paradis du canyoning au sud de La Réunion." />
        <meta name="keywords" content="que faire saint-joseph réunion, rivière langevin, cascade grand galet, canyoning langevin, activités saint-joseph, cascade langevin réunion" />
        <link rel="canonical" href="https://dineo.re/que-faire-saint-joseph-langevin-reunion" />
        <meta property="og:title" content="Que faire à Saint-Joseph et la rivière Langevin à La Réunion ?" />
        <meta property="og:description" content="Découvrez les activités à Saint-Joseph et la rivière Langevin : canyoning de Grand Galet, cascade spectaculaire, toboggans naturels. Le paradis du canyoning au sud de La Réunion." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dineo.re/que-faire-saint-joseph-langevin-reunion" />
        <meta property="og:image" content="https://dineo.re/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Que faire à Saint-Joseph et la rivière Langevin à La Réunion ?" />
        <meta name="twitter:description" content="Découvrez les activités à Saint-Joseph et la rivière Langevin : canyoning de Grand Galet, cascade spectaculaire, toboggans naturels. Le paradis du canyoning au sud de La Réunion." />
        <meta name="twitter:image" content="https://dineo.re/og-image.jpg" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <span className="text-gray-900">Saint-Joseph / Langevin</span>
        </nav>

        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux activités
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Que faire à Saint-Joseph et la rivière Langevin ?
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-blue-100">
              Découvrez {langevinActivities.length} activités aquatiques dans le paradis du canyoning
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Waves className="w-5 h-5 mr-2" />
                <span>Canyoning Grand Galet</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Mountain className="w-5 h-5 mr-2" />
                <span>Cascades spectaculaires</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Trees className="w-5 h-5 mr-2" />
                <span>Nature sauvage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        {langevinActivities.length > 0 ? (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Activités à Saint-Joseph / Langevin
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {langevinActivities.map((activity, index) => (
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
              Aucune activité spécifique à Saint-Joseph / Langevin pour le moment.
            </p>
            <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
              Voir toutes les activités à La Réunion
            </Link>
          </div>
        )}

        {/* SEO Content */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Que faire à Saint-Joseph et la rivière Langevin à La Réunion ?
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-gray-600 mb-6">
              <strong>Saint-Joseph</strong> et la <strong>rivière Langevin</strong> constituent l'épicentre du canyoning à La Réunion. Cette région du sud sauvage offre des paysages tropicaux préservés, des cascades spectaculaires et des rivières cristallines qui attirent les amateurs de sensations aquatiques du monde entier.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              La cascade Grand Galet : joyau de la Langevin
            </h3>
            <p className="mb-6">
              <strong>Visiter la rivière Langevin à La Réunion</strong> commence souvent par la découverte de la cascade Grand Galet. Cette chute d'eau de 10 mètres se jette dans un grand bassin naturel entouré de végétation tropicale luxuriante. Accessible en quelques minutes depuis le parking, elle constitue un spot photo incontournable et un lieu de baignade rafraîchissant apprécié des familles.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Canyoning de Grand Galet : aventure aquatique intense
            </h3>
            <p className="mb-4">
              Le <strong>canyoning à la Langevin</strong> offre l'une des plus belles expériences aquatiques de l'île. Le parcours de Grand Galet combine sauts dans des bassins profonds, toboggans naturels polis par l'eau et descentes en rappel le long des cascades. L'eau cristalline permet d'admirer le fond rocheux, ajoutant une dimension visuelle spectaculaire à l'aventure.
            </p>
            <p className="mb-6">
              Les <strong>activités à Saint-Joseph</strong> incluent différents niveaux de canyoning adaptés aux capacités de chacun. Les parcours débutants permettent de s'initier aux techniques de base dans un environnement sécurisé, tandis que les formules avancées proposent des défis plus techniques pour les pratiquants expérimentés. L'encadrement professionnel garantit sécurité et plaisir.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              La végétation tropicale de la vallée de Langevin
            </h3>
            <p className="mb-4">
              <strong>Que faire à Saint-Joseph</strong> au-delà du canyoning ? La vallée de la Langevin révèle une biodiversité remarquable. Les fougères arborescentes, les orchidées sauvages et les arbres endémiques créent un jardin tropical naturel. Les sentiers pédestres permettent d'explorer cette nature exubérante et d'accéder à des points de vue sur les cascades.
            </p>
            <p className="mb-6">
              La fraîcheur de la vallée contraste agréablement avec la chaleur de la côte. Cette microclimate favorise une végétation dense qui filtre la lumière, créant une ambiance de forêt primaire. Les photographes apprécient particulièrement les jeux de lumière sur l'eau et la végétation en début de matinée.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Saint-Joseph : village créole authentique
            </h3>
            <p className="mb-4">
              Le village de Saint-Joseph conserve son charme créole traditionnel. Le marché local propose fruits tropicaux, épices et produits artisanaux. Les cases créoles colorées témoignent de l'architecture traditionnelle réunionnaise. Cette authenticité fait de Saint-Joseph un point de départ idéal pour découvrir le sud authentique.
            </p>
            <p className="mb-6">
              Les <strong>restaurants de Saint-Joseph</strong> servent une cuisine créole savoureuse, mêlant influences africaines, indiennes et chinoises. Le cari, le rougail et les achards accompagnent généreusement le riz. Les rhumeries locales proposent des rhums arrangés aux parfums exotiques, parfaits après une journée de canyoning.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Autres sites naturels autour de Saint-Joseph
            </h3>
            <p className="mb-4">
              La région de Saint-Joseph offre d'autres merveilles naturelles. La cascade Jacqueline, plus confidentielle que Grand Galet, séduit par son cadre intimiste. Les bassins de baignade naturels jalonnent les rivières de la région, offrant des pauses rafraîchissantes dans un décor tropical.
            </p>
            <p className="mb-6">
              Le sud sauvage se caractérise par ses côtes volcaniques noires, ses champs de canne à sucre ondulant au vent et ses villages pittoresques. Saint-Joseph constitue une porte d'entrée vers cette région préservée du tourisme de masse, où l'authenticité créole se vit au quotidien.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Conseils pratiques pour votre visite à Saint-Joseph / Langevin
            </h3>
            <p className="mb-4">
              Pour profiter pleinement des <strong>activités à faire à Saint-Joseph</strong>, réservez votre canyoning à l'avance, surtout en haute saison. Prévoyez des chaussures d'eau fermées, un maillot de bain et une serviette. Les prestataires fournissent le matériel technique (combinaison, baudrier, casque).
            </p>
            <p className="mb-6">
              L'accès à la cascade Grand Galet se fait depuis le parking aménagé sur la route de la Langevin. Le site peut être bondé le week-end ; privilégiez les matinées en semaine pour plus de tranquillité. Respectez l'environnement en ne laissant aucun déchet et en restant sur les sentiers balisés.
            </p>

            <div className="bg-cyan-50 p-6 rounded-lg mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Programme type d'une journée à Saint-Joseph / Langevin
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Matinée</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 8h : Arrivée à Saint-Joseph et briefing</li>
                    <li>• 8h30 : Départ pour le canyoning Grand Galet</li>
                    <li>• 12h : Fin du canyon et retour</li>
                    <li>• 12h30 : Douche et changement</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Après-midi</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 13h : Déjeuner créole à Saint-Joseph</li>
                    <li>• 14h30 : Visite de la cascade Grand Galet</li>
                    <li>• 16h : Baignade dans les bassins naturels</li>
                    <li>• 17h30 : Exploration du village</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur Saint-Joseph / Langevin
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

export default SaintJosephLangevinPage;
