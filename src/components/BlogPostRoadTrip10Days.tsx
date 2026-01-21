import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, MapPin, Calendar, Compass, Mountain, Waves, Sunrise, Camera, Navigation, Check } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const BlogPostRoadTrip10Days: React.FC = () => {
  const itinerary = [
    {
      day: 1,
      title: "Arrivée et côte ouest : Saint-Gilles-les-Bains",
      region: "Ouest",
      color: "blue",
      activities: [
        "Récupération du van à l'aéroport Roland Garros",
        "Installation à Cap Homard ou plage de l'Hermitage",
        "Baignade dans le lagon protégé",
        "Coucher de soleil face à l'océan",
        "Première nuit en van face à la mer"
      ],
      tips: "Arrivez tôt pour profiter de l'après-midi plage. Faites vos courses pour 2-3 jours à Saint-Gilles."
    },
    {
      day: 2,
      title: "Activités nautiques à Saint-Gilles",
      region: "Ouest",
      color: "cyan",
      activities: [
        "Session de plongée sous-marine ou snorkeling dans le lagon",
        "Observation des dauphins et baleines (saison)",
        "Déjeuner les pieds dans le sable",
        "Exploration de Saint-Leu (surf, parapente)",
        "Nuit à Cap Homard ou parking de Saint-Leu"
      ],
      tips: "Réservez vos activités nautiques la veille. Les sorties dauphins partent tôt le matin (6h-7h)."
    },
    {
      day: 3,
      title: "Direction Cilaos : le cirque mythique",
      region: "Cirque de Cilaos",
      color: "purple",
      activities: [
        "Route des 400 virages vers Cilaos (2h de conduite)",
        "Installation camping/parking au village",
        "Balade digestive au centre thermal",
        "Dégustation de vin de Cilaos et lentilles",
        "Nuit au village de Cilaos"
      ],
      tips: "Conduite délicate avec 400 virages. Prenez votre temps, les paysages sont spectaculaires."
    },
    {
      day: 4,
      title: "Canyoning et randonnée à Cilaos",
      region: "Cirque de Cilaos",
      color: "green",
      activities: [
        "Matinée canyoning dans le canyon de Fleurs Jaunes",
        "Déjeuner au village",
        "Randonnée l'après-midi (Bras Rouge ou cascade)",
        "Détente aux thermes de Cilaos",
        "Deuxième nuit à Cilaos"
      ],
      tips: "Le canyoning de Fleurs Jaunes est sportif mais inoubliable. Réservez à l'avance."
    },
    {
      day: 5,
      title: "Piton de la Fournaise : le volcan actif",
      region: "Sud-Est",
      color: "red",
      activities: [
        "Départ tôt vers la Plaine des Cafres",
        "Route du volcan jusqu'au Pas de Bellecombe",
        "Randonnée vers le cratère Dolomieu (4h A/R)",
        "Découverte de la Plaine des Sables",
        "Nuit au parking du Pas de Bellecombe (2300m)"
      ],
      tips: "Il fait froid la nuit au volcan. Prévoyez gros duvet et vêtements chauds. Remplissez le réservoir d'eau."
    },
    {
      day: 6,
      title: "Lever de soleil au volcan et descente vers l'est",
      region: "Est sauvage",
      color: "orange",
      activities: [
        "Lever de soleil magique face au cratère",
        "Descente vers Saint-Benoît et la côte est",
        "Visite de l'Anse des Cascades",
        "Spot de Bois Blanc (jungle tropicale)",
        "Baignade dans les bassins naturels",
        "Nuit à Bois Blanc ou Grand Anse"
      ],
      tips: "L'est est humide et verdoyant. Explorez les nombreux bassins et cascades accessibles."
    },
    {
      day: 7,
      title: "Forêt de Bélouve et Trou de Fer",
      region: "Hauts de l'Est",
      color: "teal",
      activities: [
        "Montée vers la forêt de Bélouve",
        "Randonnée au Trou de Fer (canyon vertigineux)",
        "Pique-nique en forêt primaire",
        "Observation de la faune endémique",
        "Nuit en forêt de Bélouve (ambiance jungle)"
      ],
      tips: "Route sinueuse mais magnifique. La forêt est humide, prévoyez k-way et bonnes chaussures."
    },
    {
      day: 8,
      title: "Cirque de Salazie et Hell-Bourg",
      region: "Cirque de Salazie",
      color: "yellow",
      activities: [
        "Descente vers Salazie par route spectaculaire",
        "Visite du plus beau village : Hell-Bourg",
        "Cascade du Voile de la Mariée",
        "Randonnée vers le Trou de Fer (autre accès)",
        "Nuit à Hell-Bourg ou parking Salazie"
      ],
      tips: "Hell-Bourg est classé plus beau village de France. Cases créoles et végétation luxuriante."
    },
    {
      day: 9,
      title: "Le Maïdo : lever de soleil sur Mafate",
      region: "Hauts de l'Ouest",
      color: "pink",
      activities: [
        "Route matinale vers le Maïdo",
        "Lever de soleil face au cirque de Mafate",
        "Balade à cheval en forêt de Cryptomérias (option)",
        "Randonnée courte (Maïdo - Roche Verre Bouteille)",
        "Descente vers Saint-Paul",
        "Nuit au Maïdo ou retour côte ouest"
      ],
      tips: "LE spot incontournable du voyage. Arrivez la veille au soir pour profiter du lever de soleil."
    },
    {
      day: 10,
      title: "Dernière journée et restitution",
      region: "Ouest",
      color: "indigo",
      activities: [
        "Dernière matinée plage à l'Hermitage",
        "Snorkeling dans le lagon",
        "Déjeuner créole au marché de Saint-Paul",
        "Shopping souvenirs (vanille, rhum, épices)",
        "Restitution du van et transfert aéroport"
      ],
      tips: "Prévoyez 2-3h pour nettoyer le van avant restitution. Les propriétaires apprécient un van propre."
    }
  ];

  const essentials = [
    { icon: "🚐", title: "Van tout équipé", desc: "Cuisine, couchage, autonomie" },
    { icon: "🗺️", title: "GPS / Maps.me", desc: "Navigation hors ligne essentielle" },
    { icon: "🏕️", title: "Carte des spots", desc: "Campings et parkings autorisés" },
    { icon: "💧", title: "Réserves d'eau", desc: "45-100L selon le van" },
    { icon: "🔋", title: "Panneaux solaires", desc: "Autonomie électrique 3-5 jours" },
    { icon: "🍳", title: "Kit cuisine complet", desc: "Gaz, vaisselle, ustensiles" }
  ];

  const activities = [
    { name: "Canyoning à Cilaos", link: "/canyoning-reunion", price: "70-100€" },
    { name: "Randonnées guidées", link: "/randonnees-reunion", price: "55-90€" },
    { name: "Balades à cheval Maïdo", link: "/balades-cheval-reunion", price: "50-180€" },
    { name: "Plongée Saint-Gilles", link: "/", price: "60-80€" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Road Trip Van Réunion : Itinéraire 10 jours complet (2025)</title>
        <meta name="description" content="Itinéraire détaillé de 10 jours en van à La Réunion : cirques, volcan, plages, spots van, activités incontournables. Le guide complet pour votre road trip réussi." />
        <meta name="keywords" content="road trip van réunion, itinéraire 10 jours réunion, van réunion circuit, tour de la réunion en van, voyage van réunion, itinéraire complet réunion" />
        <link rel="canonical" href="https://dineo.re/blog/road-trip-van-reunion-10-jours" />

        {/* Open Graph */}
        <meta property="og:title" content="Road Trip en Van à La Réunion : Itinéraire de 10 jours" />
        <meta property="og:description" content="Le circuit complet pour découvrir La Réunion en van : cirques, volcan, plages, activités. Spots van, conseils pratiques, budget détaillé." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://dineo.re/blog/road-trip-van-reunion-10-jours" />
        <meta property="article:published_time" content="2025-01-21" />
        <meta property="article:author" content="Équipe Dineo" />
      </Helmet>

      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-blue-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-900">Road trip 10 jours en van</span>
        </nav>

        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour au blog
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=1200&q=80"
              alt="Van aménagé à La Réunion avec paysage de montagne"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-orange-600 px-3 py-1 rounded-full text-sm font-medium">Van & Road Trip</span>
                <span className="flex items-center text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  12 Janvier 2026
                </span>
                <span className="text-sm">20 min de lecture</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Road Trip en Van à La Réunion
              </h1>
              <p className="text-xl text-gray-200">
                L'itinéraire complet de 10 jours pour découvrir tous les trésors de l'île intense
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Un <strong>road trip en van à La Réunion</strong> est l'aventure ultime pour découvrir toute la diversité de l'île intense. En 10 jours, vous explorerez les trois cirques classés UNESCO, dormirez au pied du volcan actif, nagerez dans des lagons paradisiaques et vous réveillerez face aux plus beaux panoramas de l'océan Indien.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Ce guide détaille le <strong>circuit complet en van aménagé</strong> jour par jour : itinéraire optimisé, spots où dormir, activités incontournables, budget et conseils pratiques. Que vous soyez en couple, en famille ou entre amis, cet itinéraire vous fait vivre le meilleur de La Réunion en totale liberté.
              </p>

              {/* CTA Location Van */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-600 p-6 rounded-lg my-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Navigation className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Prêt à partir à l'aventure ?
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Louez un van aménagé tout équipé dès 50€/jour : cuisine complète, panneaux solaires, couchage confortable, autonomie 3-5 jours. Livraison à l'aéroport Roland Garros disponible.
                    </p>
                    <Link
                      to="/location-van-reunion"
                      className="inline-flex items-center bg-orange-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                    >
                      Réserver mon van
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte Itinéraire Visuelle */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Compass className="w-8 h-8 text-orange-600 mr-3" />
                Vue d'ensemble : le tour complet en 10 jours
              </h2>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">Résumé du circuit</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">→</span>
                        <span><strong>Jours 1-2 :</strong> Côte ouest (Saint-Gilles, plages, lagon)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">→</span>
                        <span><strong>Jours 3-4 :</strong> Cirque de Cilaos (canyoning, randos)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">→</span>
                        <span><strong>Jours 5-6 :</strong> Volcan + Est sauvage (Fournaise, cascades)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">→</span>
                        <span><strong>Jour 7 :</strong> Forêt de Bélouve (Trou de Fer, jungle)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">→</span>
                        <span><strong>Jour 8 :</strong> Cirque de Salazie (Hell-Bourg)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-600 mr-2">→</span>
                        <span><strong>Jour 9 :</strong> Maïdo (vue sur Mafate, chevaux)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">→</span>
                        <span><strong>Jour 10 :</strong> Retour côte ouest et départ</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">Points forts</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-2" />
                        <span>3 cirques classés UNESCO explorés</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-2" />
                        <span>Nuit au pied du volcan actif</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-2" />
                        <span>Plages et lagon de l'ouest</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-2" />
                        <span>Canyoning dans les plus beaux spots</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-2" />
                        <span>Lever de soleil au Maïdo face à Mafate</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-2" />
                        <span>Est verdoyant avec cascades et bassins</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Itinéraire Détaillé Jour par Jour */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Calendar className="w-8 h-8 text-blue-600 mr-3" />
                Itinéraire détaillé jour par jour
              </h2>

              <div className="space-y-8">
                {itinerary.map((day, index) => (
                  <div key={index} className={`bg-${day.color}-50 rounded-xl p-6 border-l-4 border-${day.color}-600 hover:shadow-lg transition-shadow`}>
                    <div className="flex items-start mb-4">
                      <div className={`flex-shrink-0 w-12 h-12 bg-${day.color}-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4`}>
                        J{day.day}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {day.title}
                          </h3>
                          <span className={`text-sm bg-${day.color}-100 px-3 py-1 rounded-full text-${day.color}-800 font-medium`}>
                            {day.region}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="ml-16">
                      <h4 className="font-semibold text-gray-900 mb-3">Programme de la journée :</h4>
                      <ul className="space-y-2 mb-4">
                        {day.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <span className={`text-${day.color}-600 mr-2 font-bold`}>•</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={`bg-${day.color}-100 rounded-lg p-4 border border-${day.color}-200`}>
                        <p className="text-sm text-gray-800">
                          <span className="font-semibold">💡 Conseil du jour :</span> {day.tips}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activités Recommandées */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Mountain className="w-8 h-8 text-green-600 mr-3" />
                Activités à intégrer dans votre road trip
              </h2>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 mb-6">
                <p className="text-gray-700 mb-6">
                  Votre van vous offre une liberté totale, mais certaines <strong>activités guidées valent vraiment le détour</strong>. Elles vous font découvrir des spots inaccessibles seul et enrichissent votre expérience avec l'expertise de guides locaux passionnés.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {activities.map((activity, index) => (
                    <Link
                      key={index}
                      to={activity.link}
                      className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {activity.name}
                        </h3>
                        <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                          {activity.price}
                        </span>
                      </div>
                      <p className="text-sm text-blue-600 font-medium group-hover:translate-x-1 transition-transform flex items-center">
                        Voir les activités
                        <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Canyoning Detail */}
              <div className="bg-cyan-50 rounded-xl p-6 mb-4 border-l-4 border-cyan-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🌊 Canyoning à Cilaos : l'incontournable</h3>
                <p className="text-gray-700 mb-3">
                  Le <strong>canyon de Fleurs Jaunes</strong> à Cilaos est l'activité sensations fortes à ne pas manquer. Rappels le long de cascades, toboggans naturels, sauts dans des vasques turquoise : 4h d'aventure aquatique pure dans un décor grandiose.
                </p>
                <Link
                  to="/canyoning-reunion"
                  className="inline-flex items-center text-cyan-700 hover:text-cyan-900 font-semibold"
                >
                  Découvrir tous les canyons de La Réunion
                  <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                </Link>
              </div>

              {/* Randonnées Detail */}
              <div className="bg-green-50 rounded-xl p-6 mb-4 border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🥾 Randonnées guidées : l'expertise locale</h3>
                <p className="text-gray-700 mb-3">
                  Les <strong>randonnées avec guide</strong> vous emmènent sur des sentiers méconnus et apportent une vraie plus-value naturaliste. Faune endémique, flore exceptionnelle, géologie volcanique : chaque rando devient une leçon de sciences naturelles passionnante.
                </p>
                <Link
                  to="/randonnees-reunion"
                  className="inline-flex items-center text-green-700 hover:text-green-900 font-semibold"
                >
                  Voir toutes les randonnées guidées
                  <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                </Link>
              </div>

              {/* Balades à cheval Detail */}
              <div className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🐴 Balade à cheval au Maïdo : le moment magique</h3>
                <p className="text-gray-700 mb-3">
                  Au Jour 9, offrez-vous une <strong>randonnée équestre en forêt de Cryptomérias</strong> au Maïdo. Chevaucher entre les arbres centenaires avec vue sur le cirque de Mafate crée des souvenirs impérissables. Accessible à tous les niveaux.
                </p>
                <Link
                  to="/balades-cheval-reunion"
                  className="inline-flex items-center text-amber-700 hover:text-amber-900 font-semibold"
                >
                  Découvrir les balades à cheval
                  <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                </Link>
              </div>
            </div>

            {/* Spots Van Détaillés */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-8 h-8 text-orange-600 mr-3" />
                Où dormir chaque soir : les meilleurs spots van
              </h2>

              <p className="text-gray-700 mb-6">
                L'itinéraire optimise vos nuits dans les <strong>spots les plus spectaculaires de La Réunion</strong>. Chaque soir offre une expérience unique : océan, montagne, forêt ou volcan.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="font-bold text-gray-900 mb-3">🌊 Cap Homard (Jours 1-2)</h3>
                  <p className="text-sm text-gray-700">
                    Face au lagon, couchers de soleil magiques, douches de plage, ambiance vanlife conviviale. LE spot côte ouest incontournable.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                  <h3 className="font-bold text-gray-900 mb-3">⛰️ Village de Cilaos (Jours 3-4)</h3>
                  <p className="text-sm text-gray-700">
                    Camping du village ou parking gratuits. Accès commerces, thermes, départ randos. Ambiance cirque montagnard authentique.
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                  <h3 className="font-bold text-gray-900 mb-3">🌋 Pas de Bellecombe (Jour 5)</h3>
                  <p className="text-sm text-gray-700">
                    À 2300m face au volcan. Nuit froide mais lever de soleil exceptionnel sur le cratère. Ciel étoilé incroyable. Inoubliable.
                  </p>
                </div>

                <div className="bg-teal-50 rounded-lg p-6 border border-teal-200">
                  <h3 className="font-bold text-gray-900 mb-3">🏝️ Bois Blanc / Grand Anse (Jour 6)</h3>
                  <p className="text-sm text-gray-700">
                    Est sauvage, jungle luxuriante, cascades à proximité. Spots calmes et authentiques loin du tourisme de masse.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h3 className="font-bold text-gray-900 mb-3">🌿 Forêt de Bélouve (Jour 7)</h3>
                  <p className="text-sm text-gray-700">
                    Immersion totale en forêt primaire. Brume matinale féérique, chants d'oiseaux, humidité tropicale. Nature à l'état pur.
                  </p>
                </div>

                <div className="bg-pink-50 rounded-lg p-6 border border-pink-200">
                  <h3 className="font-bold text-gray-900 mb-3">⛰️ Le Maïdo (Jour 9)</h3>
                  <p className="text-sm text-gray-700">
                    Vue panoramique sur Mafate au lever du soleil. L'expérience vanlife ultime à La Réunion. Fraîcheur nocturne garantie.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Camera className="w-5 h-5 mr-2 text-orange-600" />
                  Guide complet des spots van
                </h3>
                <p className="text-gray-700 mb-3">
                  Vous voulez connaître TOUS les spots où dormir en van à La Réunion, avec les détails pratiques, infrastructures, avantages/inconvénients de chaque lieu ?
                </p>
                <Link
                  to="/blog/ou-dormir-en-van-reunion"
                  className="inline-flex items-center text-orange-700 hover:text-orange-900 font-semibold"
                >
                  Lire le guide complet des spots van
                  <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                </Link>
              </div>
            </div>

            {/* Budget Détaillé */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                💰 Budget pour 10 jours en van
              </h2>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8">
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">Budget par personne (base 2 personnes)</h3>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <div>
                          <p className="font-semibold text-gray-900">Location van 10 jours</p>
                          <p className="text-sm text-gray-600">Van tout équipé avec réduction longue durée</p>
                        </div>
                        <span className="text-lg font-bold text-blue-600">300€</span>
                      </div>

                      <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <div>
                          <p className="font-semibold text-gray-900">Essence</p>
                          <p className="text-sm text-gray-600">~800km à parcourir, consommation moyenne</p>
                        </div>
                        <span className="text-lg font-bold text-blue-600">80€</span>
                      </div>

                      <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <div>
                          <p className="font-semibold text-gray-900">Courses alimentaires</p>
                          <p className="text-sm text-gray-600">Cuisine au van + quelques restos</p>
                        </div>
                        <span className="text-lg font-bold text-blue-600">200€</span>
                      </div>

                      <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <div>
                          <p className="font-semibold text-gray-900">Activités guidées</p>
                          <p className="text-sm text-gray-600">Canyoning + 1-2 randos guidées (optionnel)</p>
                        </div>
                        <span className="text-lg font-bold text-blue-600">150€</span>
                      </div>

                      <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <div>
                          <p className="font-semibold text-gray-900">Campings / aires</p>
                          <p className="text-sm text-gray-600">2-3 nuits en camping (reste gratuit)</p>
                        </div>
                        <span className="text-lg font-bold text-blue-600">50€</span>
                      </div>

                      <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <div>
                          <p className="font-semibold text-gray-900">Divers</p>
                          <p className="text-sm text-gray-600">Entrées sites, douches, imprévus</p>
                        </div>
                        <span className="text-lg font-bold text-blue-600">70€</span>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t-2 border-gray-300">
                        <p className="text-xl font-bold text-gray-900">TOTAL par personne</p>
                        <span className="text-2xl font-bold text-orange-600">850€</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="font-semibold text-gray-900 mb-3">💡 Économies possibles</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span><strong>Réduction longue durée :</strong> -15% dès 10 jours de location van</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span><strong>Cuisine au van :</strong> Économisez 200-300€ vs restaurants quotidiens</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span><strong>Spots gratuits :</strong> 7 nuits sur 10 en spots naturels (0€)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span><strong>Randos libres :</strong> Sentiers balisés accessibles sans guide</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Essentiels à prévoir */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                🎒 Les essentiels pour votre road trip
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {essentials.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mt-6 border-l-4 border-blue-600">
                <h3 className="font-bold text-gray-900 mb-3">📱 Applications indispensables</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-blue-600 mr-2" />
                    <span><strong>Maps.me :</strong> Navigation hors ligne (essentiel en montagne)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-blue-600 mr-2" />
                    <span><strong>Park4Night :</strong> Spots van testés par la communauté</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-blue-600 mr-2" />
                    <span><strong>Météo France Réunion :</strong> Prévisions locales précises</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-blue-600 mr-2" />
                    <span><strong>Dineo :</strong> Toutes les activités à réserver en ligne</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Conseils Pratiques */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                🧭 Conseils pratiques pour réussir votre road trip
              </h2>

              <div className="space-y-6">
                <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🚗 Conduite à La Réunion</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Routes de montagne sinueuses (400 virages pour Cilaos !). Prenez votre temps.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Distances courtes mais temps de trajet longs : 50km = 1h30 en montagne</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Faites le plein avant de monter en altitude (stations rares)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Attention à la hauteur du van : certains parkings souterrains interdits</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-cyan-50 rounded-xl p-6 border-l-4 border-cyan-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🌡️ Climat et températures</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Côte :</strong> 22-30°C toute l'année (shorts et maillots)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Altitude 1500m :</strong> 15-20°C (sweat, k-way)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Altitude 2300m (volcan) :</strong> 5-12°C (gros duvet indispensable)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Meilleure saison :</strong> Mai à octobre (saison sèche, ciel dégagé)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">💧 Gestion eau et autonomie</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Remplissez aux campings, stations-service, fontaines publiques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Réserve moyenne : 45-100L selon van (2-3 jours d'autonomie)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Économisez l'eau en altitude et spots isolés (vaisselle, douche)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Panneaux solaires = autonomie électrique 3-5 jours sans problème</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🏕️ Stationnement et campement</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Camping sauvage toléré en montagne, INTERDIT sur plages et zones protégées</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Arrivez tard (après 18h), partez tôt (avant 9h) sur spots naturels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Ne videz JAMAIS eaux usées dans nature (utilisez bornes campings)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Emportez tous vos déchets, laissez les spots propres</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Variantes d'itinéraire */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                🔄 Variantes et adaptations
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">⚡ Version 7 jours (express)</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Si vous avez moins de temps, concentrez-vous sur les essentiels :
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Jours 1-2 : Saint-Gilles (lagon)</li>
                    <li>• Jour 3 : Cilaos + canyoning</li>
                    <li>• Jours 4-5 : Volcan + Pas de Bellecombe</li>
                    <li>• Jour 6 : Maïdo lever de soleil</li>
                    <li>• Jour 7 : Retour côte ouest</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">🏕️ Version 14 jours (complète)</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Plus de temps ? Ajoutez ces extensions :
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 2 jours à Mafate (trek et nuit en gîte)</li>
                    <li>• Sud sauvage : Saint-Philippe, Cap Méchant</li>
                    <li>• Nord : Saint-Denis, La Montagne</li>
                    <li>• Plongée avancée à Saint-Gilles</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6 border border-green-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">👨‍👩‍👧‍👦 Version famille</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Avec des enfants, privilégiez :
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Plus de temps à la plage (3 jours ouest)</li>
                    <li>• Randos faciles (Bassin La Paix, La Fenêtre)</li>
                    <li>• Balades à poney au Maïdo</li>
                    <li>• Canyoning familial (éviter Fleurs Jaunes)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">🏃 Version sportive</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Pour les aventuriers, intensifiez :
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 2 canyons (Fleurs Jaunes + Trou Blanc)</li>
                    <li>• Piton des Neiges de nuit (3070m)</li>
                    <li>• Traversée de Mafate (2-3 jours)</li>
                    <li>• Parapente à Saint-Leu</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl text-white p-8 md:p-12 text-center mb-12">
              <div className="max-w-2xl mx-auto">
                <Sunrise className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">
                  Votre road trip commence ici
                </h2>
                <p className="text-xl text-orange-100 mb-6">
                  Réservez votre van aménagé dès maintenant et partez à la conquête de La Réunion. Location entre particuliers dès 50€/jour, tout équipé, livraison aéroport possible.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/location-van-reunion"
                    className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Réserver mon van
                    <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center bg-orange-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-900 transition-colors"
                  >
                    Voir les activités
                  </Link>
                </div>
                <p className="text-sm text-orange-200 mt-4">
                  💡 Réduction -15% dès 10 jours • Assurance tous risques incluse • Annulation flexible
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                En route pour l'aventure réunionnaise
              </h2>
              <p className="text-gray-700 mb-4">
                Ce <strong>road trip de 10 jours en van à La Réunion</strong> vous fait découvrir toute la richesse de l'île intense. Des plages paradisiaques de l'ouest aux paysages lunaires du volcan, des cirques vertigineux aux forêts primaires, chaque journée apporte son lot de découvertes et d'émerveillement.
              </p>
              <p className="text-gray-700 mb-4">
                La liberté du van vous permet d'adapter votre rythme, de changer de spot selon vos envies, et de vous réveiller chaque matin dans un décor différent. C'est cette flexibilité qui fait du <strong>voyage en van aménagé</strong> la meilleure façon de découvrir La Réunion.
              </p>
              <p className="text-gray-700">
                N'oubliez pas de ponctuer votre itinéraire d'<strong>activités guidées exceptionnelles</strong> (canyoning, randos, balades à cheval) qui enrichiront votre expérience. Ces moments partagés avec des guides passionnés resteront gravés dans vos mémoires au même titre que les levers de soleil au Maïdo ou les nuits au pied du volcan. Bon road trip à La Réunion !
              </p>
            </div>

            {/* Author & Date */}
            <div className="border-t border-gray-200 mt-12 pt-8">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <Compass className="w-5 h-5 mr-2 text-orange-600" />
                  <span>Par <strong>Équipe Dineo</strong></span>
                </div>
                <div className="flex items-center">
                  <span>Publié le 21 janvier 2025</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Articles recommandés</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/blog/ou-dormir-en-van-reunion" className="group">
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Où dormir en van à La Réunion ? Top 10 des spots
                </h4>
                <p className="text-sm text-gray-600">Cap Homard, Maïdo, volcan... Tous les meilleurs spots détaillés</p>
              </div>
            </Link>
            <Link to="/location-van-reunion" className="group">
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Location de van à La Réunion dès 50€/jour
                </h4>
                <p className="text-sm text-gray-600">Tous les vans aménagés disponibles entre particuliers</p>
              </div>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostRoadTrip10Days;
