import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, MapPin, Clock, Users, Shield, Star, ChevronRight } from 'lucide-react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import Header from './Header';
import Footer from './Footer';
import { Activity } from '../types/Activity';

const CanyoningPage: React.FC = () => {
  // Filtrage des activités de canyoning
  const canyoningActivities = activities.filter(activity =>
    activity.sous_categorie.toLowerCase().includes('canyoning') ||
    activity.titre.toLowerCase().includes('canyon')
  );

  const handleBookActivity = (activity: Activity) => {
    window.open(activity.url, '_blank');
  };

  // Destinations avec canyoning
  const destinations = [
    { name: 'Cirque de Cilaos', icon: '🏔️', activities: 2, description: 'Fleurs Jaunes et Bras Rouge' },
    { name: 'Rivière Langevin', icon: '💧', activities: 2, description: 'Grand Galet et canyon classique' },
    { name: 'Cirque de Salazie', icon: '🌊', activities: 1, description: 'Trou Blanc mythique' },
    { name: 'Sainte-Suzanne', icon: '🌿', activities: 2, description: 'Bassin Bœuf et canyon familial' }
  ];

  const faqs = [
    {
      question: "Quels sont les plus beaux canyons de La Réunion ?",
      answer: "Les canyons emblématiques sont Fleurs Jaunes à Cilaos (grand classique avec rappels et toboggans), Trou Blanc à Salazie (descente intégrale sportive), Grand Galet à Langevin (accessible et spectaculaire), et Bras Rouge à Cilaos (varié et ludique). Chaque canyon offre des paysages uniques : vasques turquoise, cascades vertigineuses et végétation tropicale luxuriante."
    },
    {
      question: "Quel est le prix d'une sortie canyoning à La Réunion ?",
      answer: "Les tarifs varient selon la difficulté et la durée : 50-60€ pour les canyons découverte (demi-journée, Sainte-Suzanne), 70-75€ pour les parcours intermédiaires (Langevin, Grand Galet), et 90-100€ pour les descentes sportives (Trou Blanc, Fleurs Jaunes). Ces prix incluent l'encadrement diplômé, tout le matériel technique (combinaison, baudrier, casque) et souvent les photos souvenirs."
    },
    {
      question: "Faut-il savoir nager pour faire du canyoning à La Réunion ?",
      answer: "Oui, savoir nager est généralement obligatoire pour le canyoning car vous évoluez dans l'eau (vasques, toboggans naturels). Cependant, certains canyons famille comme celui de Sainte-Suzanne acceptent les non-nageurs avec gilet de sauvetage. Le niveau de natation requis varie selon le canyon : débutant pour les parcours découverte, confirmé pour les descentes sportives."
    },
    {
      question: "Quelle est la meilleure période pour le canyoning à La Réunion ?",
      answer: "Le canyoning se pratique toute l'année à La Réunion. La saison sèche (mai à octobre) offre les meilleures conditions avec des débits modérés et une eau claire. Évitez les périodes de fortes pluies (janvier-mars) où les débits peuvent rendre les canyons dangereux. Les matinées sont idéales pour profiter d'une eau plus fraîche et éviter l'affluence."
    },
    {
      question: "Les débutants peuvent-ils faire du canyoning à La Réunion ?",
      answer: "Absolument ! De nombreux canyons sont conçus pour les débutants dès 8-10 ans. Le canyon de Sainte-Suzanne et la rivière Langevin sont parfaits pour une première expérience avec des rappels courts et des sauts facultatifs. Les guides diplômés adaptent le parcours au niveau du groupe et enseignent toutes les techniques de base. Aucune expérience préalable n'est nécessaire."
    },
    {
      question: "Où se situent les principaux canyons de La Réunion ?",
      answer: "Les canyons se répartissent dans toute l'île : Cilaos (ouest) pour Fleurs Jaunes et Bras Rouge, Saint-Joseph (sud) pour la rivière Langevin et Grand Galet, Salazie (nord-est) pour Trou Blanc, Sainte-Suzanne (nord-est) pour Bassin Bœuf, et Saint-Benoît (est) pour Takamaka. Comptez 45 minutes à 1h30 de route depuis Saint-Denis selon les sites."
    },
    {
      question: "Que comprend une sortie canyoning à La Réunion ?",
      answer: "Une sortie typique comprend : accueil et briefing sécurité, fourniture complète du matériel technique (combinaison néoprène, baudrier, casque, descendeur), marche d'approche jusqu'au canyon, descente encadrée par guide diplômé d'État, apprentissage des techniques de rappel et de progression. Durée totale 3-6h selon le canyon. Photos souvenirs souvent incluses."
    },
    {
      question: "Quels sont les canyons les plus sportifs de La Réunion ?",
      answer: "Les canyons sportifs pour pratiquants confirmés sont : Trou Blanc à Salazie (6h, rappels jusqu'à 40m, tyrolienne), Takamaka (extrême, réservé experts), Fleurs Jaunes à Cilaos (rappels techniques, sauts engagés), et Bras Rouge (parcours varié et physique). Ces descentes nécessitent une bonne condition physique, l'aisance en rappel et parfois une expérience préalable en canyoning."
    }
  ];

  const reviews = [
    {
      name: "Sophie M.",
      rating: 5,
      date: "Il y a 1 semaine",
      comment: "Descente du canyon de Fleurs Jaunes incroyable ! Les rappels sont impressionnants mais le guide nous met en confiance. Les vasques turquoise sont magnifiques. Une expérience à vivre absolument à La Réunion !"
    },
    {
      name: "Maxime & Julie",
      rating: 5,
      date: "Il y a 2 semaines",
      comment: "Premier canyoning à la rivière Langevin, parfait pour débuter ! Les toboggans naturels sont géniaux, l'eau est cristalline. Les enfants (10 et 12 ans) se sont régalés. Guide super sympa et professionnel."
    },
    {
      name: "Alexandre P.",
      rating: 5,
      date: "Il y a 3 semaines",
      comment: "Trou Blanc à Salazie = canyon de folie ! Très sportif mais tellement beau. Le rappel de 40m face à la cascade, sensations garanties. Pour les amateurs de sensations fortes, c'est THE canyon à faire à La Réunion."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Canyoning à La Réunion | Les Meilleurs Canyons 2026</title>
        <meta name="description" content="Découvrez les plus beaux canyons de La Réunion : Fleurs Jaunes, Trou Blanc, Langevin, Grand Galet. Descentes pour tous niveaux dès 50€. Réservation en ligne." />
        <meta name="keywords" content="canyoning réunion, canyon réunion, fleurs jaunes cilaos, trou blanc salazie, canyon langevin, grand galet, descente canyon réunion, canyoning ile réunion" />
        <link rel="canonical" href="https://dineo.re/canyoning-reunion" />

        {/* Open Graph */}
        <meta property="og:title" content="Canyoning à La Réunion | Les Meilleurs Canyons" />
        <meta property="og:description" content="Découvrez les plus beaux canyons de La Réunion : rappels, toboggans, sauts. Pour tous niveaux dès 50€." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dineo.re/canyoning-reunion" />
        <meta property="og:image" content="https://dineo.re/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Canyoning à La Réunion | Les Meilleurs Canyons" />
        <meta name="twitter:description" content="Découvrez les plus beaux canyons de La Réunion : rappels, toboggans, sauts. Pour tous niveaux dès 50€." />
        <meta name="twitter:image" content="https://dineo.re/og-image.jpg" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">Canyoning</span>
        </nav>

        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux activités
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-2xl text-white p-8 md:p-12 mb-12">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⭐ {canyoningActivities.length} canyons disponibles
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Les meilleurs canyons à La Réunion
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-100">
              Explorez les plus beaux canyons de l'île intense : rappels vertigineux, toboggans naturels, sauts dans des vasques turquoise. Descentes aquatiques pour tous les niveaux.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-semibold">4 régions</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                <Clock className="w-5 h-5 mr-2" />
                <span className="font-semibold">3h à 6h</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-semibold">Dès 8 ans</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                <Shield className="w-5 h-5 mr-2" />
                <span className="font-semibold">Guides diplômés</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Navigation rapide</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href="#activites" className="text-center p-3 rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all">
              <div className="text-2xl mb-1">🌊</div>
              <div className="text-sm font-medium text-gray-900">Tous les canyons</div>
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
                Canyoning à La Réunion
              </h2>
              <p className="text-gray-600 text-lg">
                {canyoningActivities.length} descentes de canyons disponibles
              </p>
            </div>
          </div>

          {canyoningActivities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {canyoningActivities.map((activity, index) => (
                <ActivityCard
                  key={index}
                  activity={activity}
                  onBook={handleBookActivity}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl">
              <p className="text-gray-500 text-lg">Chargement des canyons...</p>
            </div>
          )}

          {/* Price Comparison */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              💰 Tarifs du canyoning à La Réunion
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border-2 border-green-200">
                <div className="text-sm font-semibold text-green-600 mb-2">DÉCOUVERTE</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">Dès 50€</div>
                <div className="text-gray-700 space-y-1">
                  <div>✓ Canyon familial (demi-journée)</div>
                  <div>✓ Sainte-Suzanne</div>
                  <div>✓ Dès 8 ans</div>
                  <div>✓ Matériel complet fourni</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
                <div className="text-sm font-semibold text-blue-600 mb-2">INTERMÉDIAIRE</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">Dès 70€</div>
                <div className="text-gray-700 space-y-1">
                  <div>✓ Langevin, Grand Galet</div>
                  <div>✓ Demi-journée à journée</div>
                  <div>✓ Rappels et toboggans</div>
                  <div>✓ Photos incluses</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-2 border-red-200">
                <div className="text-sm font-semibold text-red-600 mb-2">SPORTIF</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">Dès 90€</div>
                <div className="text-gray-700 space-y-1">
                  <div>✓ Trou Blanc, Fleurs Jaunes</div>
                  <div>✓ Journée complète (6h)</div>
                  <div>✓ Rappels jusqu'à 40m</div>
                  <div>✓ Niveau confirmé</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section id="destinations" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Où faire du canyoning à La Réunion ?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="text-4xl mr-4">{destination.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                    <div className="text-sm text-gray-600 mb-3">
                      {destination.activities} canyon{destination.activities > 1 ? 's' : ''}
                    </div>
                    <p className="text-gray-700 text-sm mb-2">
                      {destination.description}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {destination.name === 'Cirque de Cilaos' && "Canyons classiques et techniques dans le cirque emblématique. Rappels, toboggans et sauts dans des vasques limpides."}
                      {destination.name === 'Rivière Langevin' && "Canyons ludiques et accessibles dans la rivière la plus célèbre de l'île. Eau cristalline et végétation luxuriante."}
                      {destination.name === 'Cirque de Salazie' && "Canyon mythique de Trou Blanc : descente intégrale sportive avec rappels vertigineux et tyrolienne spectaculaire."}
                      {destination.name === 'Sainte-Suzanne' && "Canyons variés du familial au sportif. Bassin Bœuf offre des sauts impressionnants dans des bassins naturels."}
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
            ⭐ Avis sur le canyoning
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
            Tout savoir sur le canyoning à La Réunion
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Le <strong>canyoning à La Réunion</strong> est l'une des activités les plus spectaculaires de l'île intense. Entre rappels vertigineux le long de cascades, toboggans naturels polis par l'eau et sauts dans des vasques turquoise, la descente de canyons offre des sensations uniques dans des décors tropicaux à couper le souffle.
            </p>

            <div className="space-y-8 mt-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Canyon de Fleurs Jaunes à Cilaos : le grand classique
                </h3>
                <p className="mb-4">
                  Le <strong>canyon de Fleurs Jaunes</strong> est sans doute le canyon le plus célèbre de La Réunion. Situé au cœur du cirque de Cilaos, ce parcours mythique combine rappels techniques, toboggans naturels et sauts facultatifs dans des vasques aux eaux cristallines. La descente intégrale dure environ 4 heures et traverse un environnement minéral spectaculaire.
                </p>
                <p>
                  Les rappels successifs, dont certains dépassent 20 mètres, offrent des points de vue exceptionnels sur les parois vertigineuses du cirque. Les vasques d'un bleu intense invitent à la baignade entre deux obstacles. Ce <strong>canyon de Cilaos</strong> nécessite une bonne condition physique et convient aux pratiquants ayant déjà une première expérience. L'encadrement professionnel garantit sécurité et plaisir tout au long de l'aventure.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Canyon de Trou Blanc à Salazie : l'expérience ultime
                </h3>
                <p className="mb-4">
                  Le <strong>canyon de Trou Blanc</strong> représente le summum du canyoning sportif à La Réunion. Cette descente intégrale de 6 heures dans le cirque de Salazie est réservée aux pratiquants confirmés en quête de sensations fortes. Les rappels atteignent 40 mètres et se succèdent dans un décor grandiose où cascades et végétation luxuriante composent des tableaux naturels époustouflants.
                </p>
                <p>
                  Le point d'orgue de la descente est la tyrolienne spectaculaire au-dessus d'une vasque émeraude. Cette traversée aérienne offre une perspective unique sur le canyon. Les sauts, bien que facultatifs, permettent aux plus téméraires de repousser leurs limites. Le <strong>canyon de Salazie</strong> nécessite une excellente condition physique, l'aisance en rappel et idéalement une expérience préalable en canyon sportif.
                </p>
              </div>

              <div className="bg-cyan-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Rivière Langevin : canyoning accessible et ludique
                </h3>
                <p className="mb-4">
                  La <strong>rivière Langevin à Saint-Joseph</strong> offre plusieurs canyons parfaits pour découvrir l'activité dans un cadre préservé. Le canyon classique de la Langevin convient aux débutants dès 8 ans et propose une initiation progressive avec rappels courts, toboggans naturels et sauts facultatifs. L'eau cristalline et la végétation tropicale créent une ambiance paradisiaque.
                </p>
                <p className="mb-4">
                  Le <strong>canyon de Grand Galet</strong>, toujours sur la Langevin, monte d'un cran en intensité avec des rappels plus longs et des obstacles variés. Ce parcours intermédiaire satisfait ceux qui recherchent plus de sensations tout en restant accessible. La cascade Grand Galet, haute de 10 mètres, constitue un spot photo incontournable visible depuis la route.
                </p>
                <p>
                  Les guides locaux connaissent parfaitement ces canyons et adaptent le rythme au niveau du groupe. Les toboggans naturels polis par l'eau offrent des glissades ludiques très appréciées des familles. Cette région du sud sauvage concentre certains des plus beaux <strong>canyons de La Réunion</strong> dans un périmètre restreint.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Canyons de Sainte-Suzanne : variété et accessibilité
                </h3>
                <p className="mb-4">
                  La région de Sainte-Suzanne propose plusieurs canyons adaptés à tous les niveaux. Le <strong>canyon familial de Sainte-Suzanne</strong> est idéal pour une première expérience avec des enfants. Court et ludique, il permet de découvrir les bases du canyoning en toute sécurité : progression en rivière, petits rappels, toboggans naturels.
                </p>
                <p>
                  Le <strong>Bassin Bœuf</strong>, plus sportif, attire les amateurs de sauts avec ses vasques profondes entourées de falaises. Ce canyon varié combine rappels techniques et passages aquatiques dans un environnement préservé. La difficulté intermédiaire le rend accessible aux débutants motivés tout en offrant assez de challenge pour satisfaire les pratiquants réguliers.
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Matériel et équipement pour le canyoning
                </h3>
                <p className="mb-4">
                  Tout le <strong>matériel technique de canyoning</strong> est fourni par les prestataires : combinaison néoprène intégrale (protection thermique et contre les chocs), baudrier avec longes de sécurité, descendeur pour les rappels, casque renforcé. Ce matériel professionnel est régulièrement contrôlé et répond aux normes de sécurité les plus strictes.
                </p>
                <p>
                  Vous devez prévoir : chaussures fermées type baskets (qui seront mouillées), maillot de bain, serviette, eau et encas énergétiques, crème solaire waterproof. Les chaussures de canyon peuvent être louées mais des baskets usagées font largement l'affaire. Prévoyez des vêtements de rechange dans votre voiture pour après la descente.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Quel niveau faut-il pour faire du canyoning à La Réunion ?
            </h3>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Niveau requis selon les canyons :</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <div className="font-medium text-gray-900">Débutants / Familles</div>
                    <div className="text-sm text-gray-600">Canyon de Sainte-Suzanne, rivière Langevin initiation. Aucune expérience requise. Dès 8 ans. Savoir nager obligatoire.</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">!</div>
                  <div>
                    <div className="font-medium text-gray-900">Intermédiaires</div>
                    <div className="text-sm text-gray-600">Grand Galet, Bras Rouge, Bassin Bœuf. Bonne condition physique. Aisance en rappel appréciée.</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">⚠</div>
                  <div>
                    <div className="font-medium text-gray-900">Confirmés / Sportifs</div>
                    <div className="text-sm text-gray-600">Trou Blanc, Fleurs Jaunes, Takamaka. Excellente condition physique. Expérience canyoning recommandée.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 rounded-xl p-6 mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Meilleure période pour le canyoning
              </h3>
              <p className="mb-4">
                Le <strong>canyoning à La Réunion</strong> se pratique toute l'année grâce au climat tropical. Cependant, la saison sèche de mai à octobre offre les conditions optimales avec des débits modérés et une eau claire. Les matinées sont idéales : l'eau est plus fraîche, il y a moins de monde et la lumière crée de beaux effets dans les canyons.
              </p>
              <p>
                Évitez absolument les périodes de fortes pluies (janvier-mars notamment) où les débits peuvent rendre les canyons extrêmement dangereux. Les guides surveillent constamment la météo et n'hésitent pas à annuler ou reporter une sortie si les conditions ne sont pas optimales. Votre sécurité prime toujours sur le reste.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Budget canyoning à La Réunion
              </h3>
              <p className="mb-4">
                Les tarifs varient selon la difficulté et la durée : comptez 50-60€ pour un canyon découverte en demi-journée (Sainte-Suzanne), 70-75€ pour les parcours intermédiaires (Langevin, Grand Galet, Bassin Bœuf), et 90-100€ pour les descentes sportives d'une journée complète (Trou Blanc, Fleurs Jaunes).
              </p>
              <p>
                Ces tarifs incluent systématiquement l'encadrement par un guide diplômé d'État, tout le matériel technique (combinaison, baudrier, casque, descendeur), le briefing sécurité et souvent les photos souvenirs de la descente. C'est un excellent rapport qualité-prix pour vivre une aventure aquatique intense dans des décors naturels exceptionnels.
              </p>
            </div>

            <div className="bg-teal-50 rounded-xl p-6 mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Sécurité et respect de l'environnement
              </h3>
              <p className="mb-4">
                La sécurité est la priorité absolue en canyoning. Les guides diplômés d'État maîtrisent parfaitement les techniques de progression et de sauvetage. Ils évaluent en permanence les conditions (débit, météo) et adaptent le parcours au niveau du groupe. Les effectifs sont limités (maximum 8-10 participants par guide) pour garantir un encadrement optimal.
              </p>
              <p>
                Le respect de l'environnement est fondamental. Les canyons sont des écosystèmes fragiles : restez groupés, ne dérangez pas la faune aquatique, n'arrachez pas la végétation. Les prestataires partenaires de Dineo s'engagent pour un canyoning responsable préservant ces merveilles naturelles pour les générations futures.
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-xl mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                En résumé : quel canyon choisir à La Réunion ?
              </h4>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <div className="text-2xl mr-3">👶</div>
                  <div>
                    <span className="font-semibold">Pour une première fois / en famille :</span> Canyon de Sainte-Suzanne ou rivière Langevin initiation
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🔰</div>
                  <div>
                    <span className="font-semibold">Pour les débutants motivés :</span> Grand Galet à Langevin ou Bassin Bœuf à Sainte-Suzanne
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">⚡</div>
                  <div>
                    <span className="font-semibold">Pour les sportifs / confirmés :</span> Fleurs Jaunes à Cilaos ou Bras Rouge
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🔥</div>
                  <div>
                    <span className="font-semibold">Pour l'expérience ultime :</span> Trou Blanc à Salazie (descente intégrale 6h, rappels 40m)
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🌊</div>
                  <div>
                    <span className="font-semibold">Pour les amateurs de sauts :</span> Bassin Bœuf avec ses vasques profondes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur le canyoning à La Réunion
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
        <section className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-2xl text-white p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt pour votre descente de canyon à La Réunion ?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Réservez dès maintenant votre canyoning et vivez une aventure aquatique inoubliable dans les plus beaux canyons de l'île intense.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#activites"
              className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-50 transition-colors shadow-lg"
            >
              Voir tous les canyons
            </a>
            <Link
              to="/"
              className="inline-block bg-cyan-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-800 transition-colors"
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

export default CanyoningPage;
