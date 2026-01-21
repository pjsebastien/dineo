import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, MapPin, Clock, Users, Shield, Star, ChevronRight } from 'lucide-react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import Header from './Header';
import Footer from './Footer';
import { Activity } from '../types/Activity';

const HorseRidingPage: React.FC = () => {
  // Filtrage des activités équestres
  const horseRidingActivities = activities.filter(activity =>
    activity.sous_categorie.toLowerCase().includes('cheval') ||
    activity.sous_categorie.toLowerCase().includes('poney') ||
    activity.titre.toLowerCase().includes('cheval') ||
    activity.titre.toLowerCase().includes('équestre') ||
    activity.titre.toLowerCase().includes('poney')
  );

  const handleBookActivity = (activity: Activity) => {
    window.open(activity.url, '_blank');
  };

  // Destinations avec balades à cheval
  const destinations = [
    { name: 'Piton de la Fournaise', icon: '🌋', activities: 1 },
    { name: 'Maïdo', icon: '🏔️', activities: 2 },
    { name: 'Bassin Bœuf', icon: '💧', activities: 1 },
    { name: 'Grand Étang', icon: '🌿', activities: 1 }
  ];

  const faqs = [
    {
      question: "Quelles sont les plus belles balades à cheval à La Réunion ?",
      answer: "Les plus belles balades à cheval se trouvent au Piton de la Fournaise avec traversée de la Plaine des Sables, au Maïdo dans la forêt de Cryptomérias, et au Bassin Bœuf avec nage avec les chevaux. Ces randonnées équestres offrent des paysages spectaculaires entre volcans, forêts d'altitude et rivières sauvages."
    },
    {
      question: "Quel est le prix d'une balade à cheval à La Réunion ?",
      answer: "Les prix varient selon la durée et le type d'expérience : 25€ pour une initiation poney enfants (1h30-3h), 50€ pour une balade à poney avec goûter (3h), 150€ pour une randonnée au Bassin Bœuf avec nage (journée), et 180€ pour la randonnée exceptionnelle au Piton de la Fournaise (journée complète). Ces tarifs incluent l'encadrement diplômé et le matériel de sécurité."
    },
    {
      question: "Faut-il savoir monter à cheval pour faire une balade à La Réunion ?",
      answer: "Pas nécessairement. Les centres équestres proposent des activités pour tous niveaux : initiations pour débutants complets, balades à poney accompagnées pour enfants dès 3 ans, et randonnées pour cavaliers confirmés. Les moniteurs diplômés adaptent chaque sortie au niveau des participants. Pour les randonnées sportives (Fournaise, Bassin Bœuf), il faut être à l'aise aux 3 allures."
    },
    {
      question: "Quelle est la meilleure période pour une balade à cheval à La Réunion ?",
      answer: "Les balades à cheval se pratiquent toute l'année à La Réunion. La saison sèche (mai-octobre) offre des conditions optimales avec moins de pluie. Les matinées sont idéales pour profiter de la fraîcheur en altitude et observer la faune. Au Maïdo, prévoyez des vêtements chauds quelle que soit la saison (2200m d'altitude)."
    },
    {
      question: "Les enfants peuvent-ils faire des balades à cheval à La Réunion ?",
      answer: "Oui, plusieurs activités sont spécialement conçues pour les enfants dès 3 ans. Les balades à poney au Maïdo avec préparation, pansage et goûter sont parfaites pour une première approche. L'initiation en carrière permet d'apprendre les bases. Les parents accompagnent gratuitement les plus jeunes en tenant le poney. Poids maximum généralement 30-40kg selon l'âge."
    },
    {
      question: "Où se trouvent les centres équestres à La Réunion ?",
      answer: "Les principaux centres équestres se situent au Maïdo (route forestière 68 de Cryptomérias, Saint-Paul) et au Grand Étang (RN3 pont payet, Saint-Benoît). Ces fermes équestres proposent des randonnées dans des cadres naturels exceptionnels : forêt primaire, volcans, cascades. Véhicule indispensable car accès en transport en commun compliqué."
    },
    {
      question: "Que comprend une balade à cheval à La Réunion ?",
      answer: "Une balade typique comprend : accueil et briefing sécurité, fourniture du matériel (bombe, chaps si besoin), préparation du cheval ou poney, randonnée encadrée par moniteur diplômé BPJEPS. Selon la formule : repas du midi pour journées complètes, goûter pour balades enfants, session de nage avec chevaux pour Bassin Bœuf. Photos souvenirs souvent incluses."
    },
    {
      question: "Quelles sont les randonnées à cheval les plus sportives à La Réunion ?",
      answer: "Les randonnées sportives pour cavaliers confirmés sont : le Piton de la Fournaise (180€, 1 jour, passage Plaine des Sables, repas inclus) et le Bassin Bœuf avec nage (150€, 1 jour, session aquatique avec les chevaux). Ces sorties nécessitent d'être à l'aise aux 3 allures et de savoir nager pour Bassin Bœuf. Minimum 12 ans et bonne condition physique requise."
    }
  ];

  const reviews = [
    {
      name: "Marie L.",
      rating: 5,
      date: "Il y a 2 semaines",
      comment: "Randonnée au Piton de la Fournaise absolument magique ! Les paysages lunaires de la Plaine des Sables à cheval, c'est une expérience unique. Les chevaux sont très bien dressés et le guide passionnant. Grosse journée mais ça vaut vraiment le coup."
    },
    {
      name: "Thomas & Léa",
      rating: 5,
      date: "Il y a 1 mois",
      comment: "Balade à poney au Maïdo pour notre fille de 5 ans. Elle était ravie de préparer son poney, de se balader en forêt et le goûter était top. Les moniteurs sont super patients avec les enfants. On recommande à 100%!"
    },
    {
      name: "Julien M.",
      rating: 5,
      date: "Il y a 3 semaines",
      comment: "Incroyable expérience au Bassin Bœuf avec nage avec les chevaux ! C'est sportif mais tellement beau. Nager aux côtés de son cheval dans un bassin naturel entouré de nature, c'est inoubliable. Guide au top."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Balades à Cheval à La Réunion | Les Meilleures Randonnées Équestres 2026</title>
        <meta name="description" content="Découvrez les plus belles balades à cheval à La Réunion : randonnée au Piton de la Fournaise, Maïdo, Bassin Bœuf. Promenades équestres pour tous niveaux dès 25€. Réservation en ligne." />
        <meta name="keywords" content="balade cheval réunion, randonnée équestre réunion, balade à cheval la réunion, promenade cheval réunion, équitation réunion, cheval piton fournaise, balade poney réunion, centre équestre réunion" />
        <link rel="canonical" href="https://dineo.re/balades-cheval-reunion" />

        {/* Open Graph */}
        <meta property="og:title" content="Balades à Cheval à La Réunion | Les Meilleures Randonnées Équestres" />
        <meta property="og:description" content="Découvrez les plus belles balades à cheval à La Réunion : volcans, forêts, cascades. Pour tous niveaux dès 25€." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dineo.re/balades-cheval-reunion" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">Balades à cheval</span>
        </nav>

        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux activités
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-2xl text-white p-8 md:p-12 mb-12">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⭐ {horseRidingActivities.length} balades à cheval disponibles
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Les meilleures balades à cheval à La Réunion
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Explorez l'île intense à dos de cheval : volcans, forêts d'altitude et cascades. Randonnées équestres pour tous les niveaux, de l'initiation poney aux raids sportifs.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-semibold">4 destinations</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                <Clock className="w-5 h-5 mr-2" />
                <span className="font-semibold">De 1h30 à 1 jour</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-semibold">Dès 3 ans</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                <Shield className="w-5 h-5 mr-2" />
                <span className="font-semibold">Encadrement diplômé</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Navigation rapide</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href="#activites" className="text-center p-3 rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all">
              <div className="text-2xl mb-1">🐴</div>
              <div className="text-sm font-medium text-gray-900">Toutes les activités</div>
            </a>
            <a href="#destinations" className="text-center p-3 rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all">
              <div className="text-2xl mb-1">📍</div>
              <div className="text-sm font-medium text-gray-900">Destinations</div>
            </a>
            <a href="#guide" className="text-center p-3 rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all">
              <div className="text-2xl mb-1">📖</div>
              <div className="text-sm font-medium text-gray-900">Tout savoir</div>
            </a>
            <a href="#faq" className="text-center p-3 rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all">
              <div className="text-2xl mb-1">❓</div>
              <div className="text-sm font-medium text-gray-900">Questions</div>
            </a>
          </div>
        </div>

        {/* Activities Grid */}
        <section id="activites" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Balades à cheval à La Réunion
              </h2>
              <p className="text-gray-600 text-lg">
                {horseRidingActivities.length} randonnées équestres disponibles
              </p>
            </div>
          </div>

          {horseRidingActivities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {horseRidingActivities.map((activity, index) => (
                <ActivityCard
                  key={index}
                  activity={activity}
                  onBook={handleBookActivity}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl">
              <p className="text-gray-500 text-lg">Chargement des activités équestres...</p>
            </div>
          )}

          {/* Price Comparison */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              💰 Tarifs des balades à cheval à La Réunion
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
                <div className="text-sm font-semibold text-blue-600 mb-2">DÉCOUVERTE ENFANTS</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">Dès 25€</div>
                <div className="text-gray-700 space-y-1">
                  <div>✓ Initiation équitation (1h30-3h)</div>
                  <div>✓ Dès 3 ans</div>
                  <div>✓ Encadrement BPJEPS</div>
                  <div>✓ Matériel fourni</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-2 border-orange-200">
                <div className="text-sm font-semibold text-orange-600 mb-2">BALADE ENFANTS</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">Dès 50€</div>
                <div className="text-gray-700 space-y-1">
                  <div>✓ Balade à poney (3h)</div>
                  <div>✓ Forêt de Cryptomérias</div>
                  <div>✓ Goûter inclus</div>
                  <div>✓ Parent accompagnateur</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-2 border-green-200">
                <div className="text-sm font-semibold text-green-600 mb-2">RANDONNÉE AQUATIQUE</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">Dès 150€</div>
                <div className="text-gray-700 space-y-1">
                  <div>✓ Bassin Bœuf (1 jour)</div>
                  <div>✓ Nage avec les chevaux</div>
                  <div>✓ Repas inclus</div>
                  <div>✓ Niveau confirmé</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-2 border-red-200">
                <div className="text-sm font-semibold text-red-600 mb-2">RANDONNÉE VOLCAN</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">Dès 180€</div>
                <div className="text-gray-700 space-y-1">
                  <div>✓ Piton de la Fournaise (1 jour)</div>
                  <div>✓ Plaine des Sables</div>
                  <div>✓ Repas inclus</div>
                  <div>✓ Expérience unique</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section id="destinations" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Où faire une balade à cheval à La Réunion ?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="text-4xl mr-4">{destination.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                    <div className="text-sm text-gray-600 mb-3">
                      {destination.activities} activité{destination.activities > 1 ? 's' : ''} équestre{destination.activities > 1 ? 's' : ''}
                    </div>
                    <p className="text-gray-700 text-sm">
                      {destination.name === 'Piton de la Fournaise' && "Randonnée exceptionnelle à travers la Plaine des Sables jusqu'au volcan actif. Paysages lunaires uniques au monde."}
                      {destination.name === 'Maïdo' && "Balades en forêt de Cryptomérias à 2200m d'altitude. Vue spectaculaire sur le cirque de Mafate. Idéal enfants."}
                      {destination.name === 'Bassin Bœuf' && "Randonnée aquatique unique avec session de nage avec les chevaux dans des bassins naturels. Pour cavaliers confirmés."}
                      {destination.name === 'Grand Étang' && "Base équestre dans l'est sauvage. Point de départ des randonnées vers le Fournaise et Bassin Bœuf."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            ⭐ Avis sur les balades à cheval
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Complete Guide */}
        <section id="guide" className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Tout savoir sur les balades à cheval à La Réunion
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              L'<strong>équitation à La Réunion</strong> offre une manière unique et privilégiée de découvrir les paysages spectaculaires de l'île intense. Des volcans majestueux aux forêts primaires, en passant par des rivières sauvages et des cascades cachées, les <strong>balades à cheval à La Réunion</strong> vous emmènent là où les voitures ne vont pas.
            </p>

            <div className="space-y-8 mt-8">
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Randonnée à cheval au Piton de la Fournaise : l'expérience ultime
                </h3>
                <p className="mb-4">
                  La <strong>randonnée équestre au Piton de la Fournaise</strong> représente l'une des expériences les plus extraordinaires de l'île. Cette sortie d'une journée complète pour cavaliers confirmés traverse la mythique Plaine des Sables, un paysage lunaire de cendres et de scories volcaniques qui vous transporte dans un autre monde.
                </p>
                <p>
                  Au départ du Grand Étang, vous chevauchez à travers différents écosystèmes : forêts tropicales luxuriantes, puis végétation d'altitude rabougrie, avant d'atteindre le désert volcanique de la Plaine des Sables. Le contraste entre la verdure du départ et l'aridité de la plaine crée une sensation de voyage interplanétaire. Cette <strong>balade à cheval au volcan</strong> nécessite d'être à l'aise aux trois allures (pas, trot, galop) et offre des panoramas uniques sur le cratère du Piton de la Fournaise, l'un des volcans les plus actifs au monde.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Balade à cheval au Maïdo : la forêt de Cryptomérias
                </h3>
                <p className="mb-4">
                  Le <strong>Maïdo</strong> offre un cadre magique pour les <strong>balades équestres en famille</strong>. Perché à 2200 mètres d'altitude, ce site propose des randonnées à cheval et à poney dans la splendide forêt de Cryptomérias, ces arbres japonais centenaires qui créent une ambiance féerique, particulièrement quand la brume matinale flotte entre les troncs.
                </p>
                <p className="mb-4">
                  Les centres équestres du Maïdo proposent plusieurs formules adaptées à tous les âges. Pour les enfants dès 3 ans, les <strong>balades à poney à La Réunion</strong> incluent la préparation du poney (pansage, brossage), une balade encadrée en forêt et un goûter bien mérité. C'est une première approche idéale de l'équitation dans un cadre naturel exceptionnel, avec vue sur le cirque de Mafate.
                </p>
                <p>
                  Les <strong>cours d'équitation pour enfants</strong> en carrière permettent d'apprendre les bases du monte et de la conduite avant de partir en balade. Les moniteurs diplômés BPJEPS adaptent leur enseignement à chaque tranche d'âge (3-5 ans et 6-10 ans). Le matériel de sécurité (bombe et chaps) est fourni, et les parents peuvent accompagner gratuitement les plus jeunes.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Randonnée équestre au Bassin Bœuf : l'aventure aquatique
                </h3>
                <p className="mb-4">
                  Pour les cavaliers en quête d'expériences uniques, la <strong>randonnée à cheval au Bassin Bœuf</strong> combine équitation et baignade dans un cadre naturel préservé. Cette sortie sportive d'une journée complète dans l'est sauvage de La Réunion culmine avec une session de nage avec les chevaux dans les bassins naturels de la rivière des Marsouins.
                </p>
                <p>
                  Imaginez-vous chevaucher à travers une forêt tropicale luxuriante, longer des cascades spectaculaires, puis entrer dans l'eau aux côtés de votre monture. Cette expérience magique de <strong>baignade avec les chevaux</strong> crée un lien privilégié avec l'animal et reste gravée dans les mémoires. La randonnée nécessite de savoir nager, d'être à l'aise aux trois allures et de porter un pantalon long (pas de short). Le repas du midi est inclus, permettant de profiter pleinement de cette journée d'exception.
                </p>
              </div>

              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Les centres équestres de La Réunion
                </h3>
                <p className="mb-4">
                  La Réunion compte plusieurs <strong>centres équestres professionnels</strong> offrant des prestations de qualité dans des cadres naturels exceptionnels. La Ferme équestre du Grand Étang à Saint-Benoît organise les randonnées sportives vers le Piton de la Fournaise et le Bassin Bœuf. Les Chevaux du Maïdo à Saint-Paul proposent les activités familiales en forêt de Cryptomérias.
                </p>
                <p>
                  Ces établissements disposent de chevaux et poneys parfaitement dressés et habitués aux terrains variés de l'île. Les moniteurs diplômés connaissent parfaitement les sentiers, la faune et la flore locales, enrichissant chaque sortie de commentaires naturalistes passionnants. Ils veillent scrupuleusement à la sécurité des cavaliers tout en leur faisant vivre une aventure inoubliable.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Équitation en famille à La Réunion
                </h3>
                <p className="mb-4">
                  Les <strong>balades à cheval en famille à La Réunion</strong> créent des souvenirs inoubliables. Les plus jeunes découvrent le plaisir de monter à poney dans des paysages de carte postale, tandis que les parents peuvent choisir des randonnées adaptées à leur niveau. Les centres proposent des formules où chacun trouve son bonheur : initiation poney pour les 3-5 ans, balades accompagnées pour les 6-10 ans, et randonnées classiques pour les adultes.
                </p>
                <p>
                  L'ambiance familiale et bienveillante des fermes équestres réunionnaises, la beauté des sites naturels et la gentillesse des poneys créent les conditions parfaites pour une activité familiale réussie. Les goûters inclus dans certaines formules (jus de fruits, gâteaux créoles) ajoutent une touche de convivialité appréciée après l'effort.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Quel niveau faut-il pour une balade à cheval à La Réunion ?
            </h3>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Niveau requis selon les activités :</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <div className="font-medium text-gray-900">Débutants / Enfants</div>
                    <div className="text-sm text-gray-600">Initiation poney et balade Maïdo avec accompagnement. Aucune expérience requise. Dès 3 ans.</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">!</div>
                  <div>
                    <div className="font-medium text-gray-900">Cavaliers confirmés</div>
                    <div className="text-sm text-gray-600">Randonnées Fournaise et Bassin Bœuf. Être à l'aise aux 3 allures (pas, trot, galop). Savoir nager pour Bassin Bœuf.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cyan-50 rounded-xl p-6 mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Meilleure période pour une balade à cheval
              </h3>
              <p className="mb-4">
                Les <strong>randonnées équestres à La Réunion</strong> se pratiquent toute l'année grâce au climat tropical. Cependant, la saison sèche de mai à octobre offre les meilleures conditions avec moins de pluie et une visibilité optimale sur les sommets. Les matinées sont idéales pour profiter de la fraîcheur en altitude et observer la faune (oiseaux endémiques, papangues).
              </p>
              <p>
                Au Maïdo, prévoyez toujours des vêtements chauds quelle que soit la saison (l'altitude de 2200m apporte de la fraîcheur). Pour les randonnées sportives, évitez la saison des pluies intenses (janvier-mars) où les sentiers peuvent être glissants et dangereux.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              Que prévoir pour votre balade à cheval ?
            </h3>
            <div className="bg-amber-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Liste du matériel recommandé :</h4>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-gray-700">
                <div>✓ Pantalon long confortable (obligatoire, pas de short)</div>
                <div>✓ Chaussures fermées type baskets ou boots</div>
                <div>✓ Sweat ou k-way (altitude = fraîcheur)</div>
                <div>✓ Crème solaire et chapeau/casquette</div>
                <div>✓ Bouteille d'eau (1,5L pour journées complètes)</div>
                <div>✓ Maillot et serviette (pour Bassin Bœuf)</div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                💡 Le matériel de sécurité (bombe, chaps si besoin) est fourni par les centres équestres
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Budget balade à cheval à La Réunion
              </h3>
              <p className="mb-4">
                Les <strong>tarifs des balades à cheval</strong> varient selon la durée, le type de prestation et le niveau requis. Comptez 25€ pour une initiation poney enfants de 1h30 à 3h, 50€ pour une balade à poney de 3h avec goûter, 150€ pour une journée complète au Bassin Bœuf avec nage, et 180€ pour la randonnée exceptionnelle au Piton de la Fournaise.
              </p>
              <p>
                Ces tarifs incluent systématiquement l'encadrement par un moniteur diplômé BPJEPS, le matériel de sécurité (bombe, chaps), et pour les journées complètes le repas du midi. C'est un excellent rapport qualité-prix pour vivre une expérience unique dans des paysages extraordinaires. La plupart des centres proposent une politique d'annulation flexible, pratique avec la météo changeante de l'île.
              </p>
            </div>

            <div className="bg-teal-50 rounded-xl p-6 mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Respect de l'environnement et bien-être animal
              </h3>
              <p className="mb-4">
                Les centres équestres partenaires de Dineo s'engagent pour le <strong>bien-être de leurs chevaux</strong> et le respect de l'environnement. Les montures travaillent dans des conditions optimales avec des temps de repos respectés, une alimentation adaptée et des soins vétérinaires réguliers. Les effectifs de cavaliers sont limités (maximum 8-10 par sortie) pour préserver la qualité de l'expérience et minimiser l'impact sur les sentiers.
              </p>
              <p>
                Sur les chemins, les cavaliers sont sensibilisés au respect de la nature : rester sur les sentiers balisés, ne pas déranger la faune, ne laisser aucun déchet. Cette approche responsable garantit la pérennité de ces activités exceptionnelles dans les espaces naturels préservés de La Réunion.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-xl mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                En résumé : Quelle balade à cheval choisir à La Réunion ?
              </h4>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <div className="text-2xl mr-3">👶</div>
                  <div>
                    <span className="font-semibold">Pour les tout-petits (3-5 ans) :</span> Initiation poney au Maïdo avec parent accompagnateur
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">👧</div>
                  <div>
                    <span className="font-semibold">Pour les enfants (6-10 ans) :</span> Balade à poney en forêt de Cryptomérias avec goûter
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🔰</div>
                  <div>
                    <span className="font-semibold">Pour les débutants adultes :</span> Initiation en carrière puis balade courte au Maïdo
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">⚡</div>
                  <div>
                    <span className="font-semibold">Pour les cavaliers confirmés :</span> Randonnée au Piton de la Fournaise ou Bassin Bœuf avec nage
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">👨‍👩‍👧</div>
                  <div>
                    <span className="font-semibold">En famille :</span> Balade Maïdo adaptable à chaque âge avec paysages magnifiques
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur les balades à cheval à La Réunion
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                  <span className="text-blue-600 mr-2">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed ml-6">
                  <span className="text-blue-600 font-semibold">R.</span> {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-2xl text-white p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt pour votre balade à cheval à La Réunion ?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Réservez dès maintenant votre randonnée équestre et vivez une expérience inoubliable à dos de cheval dans les paysages spectaculaires de l'île intense.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#activites"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition-colors shadow-lg"
            >
              Voir toutes les balades
            </a>
            <Link
              to="/"
              className="inline-block bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-800 transition-colors"
            >
              Découvrir toutes les activités
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HorseRidingPage;
