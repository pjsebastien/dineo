import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, Clock, Plane, Euro, MapPin, Clock3, Users, Star, TrendingUp, Mountain, Waves, Camera, Heart, CheckCircle, AlertCircle } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const BlogPostHelicopterPrice: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Tarif vol en hélicoptère à La Réunion : prix et réservation</title>
        <meta name="description" content="Découvrez les tarifs des vols en hélicoptère à La Réunion : de 110€ à 390€ selon la durée. Survol du volcan, cirques, cascades. Réservation en ligne et conseils pratiques." />
        <meta name="keywords" content="tarif hélicoptère réunion, prix vol hélicoptère réunion, survol hélicoptère réunion, baptême hélicoptère réunion, réserver hélicoptère réunion" />
        <link rel="canonical" href="https://dineo.re/blog/tarif-vol-helicoptere-la-reunion" />

        {/* Open Graph */}
        <meta property="og:title" content="Tarif vol en hélicoptère à La Réunion : prix et réservation" />
        <meta property="og:description" content="Tarifs des vols en hélicoptère à La Réunion : de 110€ à 390€. Survol du volcan, cirques, cascades. Réservation en ligne." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://dineo.re/blog/tarif-vol-helicoptere-la-reunion" />
        <meta property="og:image" content="https://www.blog.dineo.re/wp-content/uploads/2023/03/helicoptere-reunion-tarifs-et-avis-1170x630.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tarif vol en hélicoptère à La Réunion : prix et réservation" />
        <meta name="twitter:description" content="Tarifs des vols en hélicoptère à La Réunion : de 110€ à 390€. Survol du volcan, cirques, cascades." />
        <meta name="twitter:image" content="https://www.blog.dineo.re/wp-content/uploads/2023/03/helicoptere-reunion-tarifs-et-avis-1170x630.jpg" />

        {/* Article structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Tarif vol en hélicoptère à La Réunion : prix et réservation",
            "image": "https://www.blog.dineo.re/wp-content/uploads/2023/03/helicoptere-reunion-tarifs-et-avis-1170x630.jpg",
            "author": {
              "@type": "Organization",
              "name": "Équipe Dineo"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Dineo",
              "logo": {
                "@type": "ImageObject",
                "url": "https://dineo.re/logo.png"
              }
            },
            "datePublished": "2026-01-21",
            "description": "Découvrez les tarifs des vols en hélicoptère à La Réunion : de 110€ à 390€ selon la durée. Survol du volcan, cirques, cascades."
          })}
        </script>
      </Helmet>

      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour au blog
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-96">
            <img
              src="https://www.blog.dineo.re/wp-content/uploads/2023/03/helicoptere-reunion-tarifs-et-avis-1170x630.jpg"
              alt="Hélicoptère survolant La Réunion"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">Activités aériennes</span>
                <span className="flex items-center text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  21 Janvier 2026
                </span>
                <span className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  14 min
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Quel est le tarif d'un vol en hélicoptère à La Réunion ?
              </h1>
              <p className="text-xl text-gray-200">
                Découvrez tous les prix, circuits et conseils pour réserver votre survol inoubliable de l'île intense
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8 md:p-12 prose prose-lg max-w-none">

            {/* Introduction */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
              <p className="text-lg text-gray-800 mb-0">
                <strong>Réponse rapide :</strong> Les tarifs des vols en hélicoptère à La Réunion varient de <strong>110€ à 390€ par personne</strong> selon la durée du survol (15 à 55 minutes). Les circuits les plus populaires sont le survol du volcan (260€, 35 min) et le tour complet de l'île (390€, 55 min).
              </p>
            </div>

            <p className="text-lg leading-relaxed text-gray-700">
              Un vol en hélicoptère à La Réunion est l'une des expériences les plus spectaculaires que vous puissiez vivre sur l'île. Survoler le Piton de la Fournaise en éruption, admirer les cirques de Mafate et Cilaos depuis le ciel, découvrir les cascades du Trou de Fer... C'est une perspective unique sur les paysages volcaniques de l'île intense.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Dans cet article, nous détaillons tous les tarifs, circuits disponibles, et nos meilleurs conseils pour réserver votre vol en hélicoptère à La Réunion.
            </p>

            {/* Grille tarifaire */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Euro className="w-8 h-8 mr-3 text-blue-600" />
                Grille des tarifs 2026
              </h2>

              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Circuit</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Durée</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tarif</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Points forts</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Baptême découverte</td>
                      <td className="px-6 py-4 text-gray-700">15 min</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">110€</td>
                      <td className="px-6 py-4 text-gray-700">Littoral ouest, Saint-Gilles</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Cirques et cascades</td>
                      <td className="px-6 py-4 text-gray-700">25 min</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">190€</td>
                      <td className="px-6 py-4 text-gray-700">Mafate, Trou de Fer, Takamaka</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-blue-50">
                      <td className="px-6 py-4 font-medium text-gray-900">🌋 Survol du volcan</td>
                      <td className="px-6 py-4 text-gray-700">35 min</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">260€</td>
                      <td className="px-6 py-4 text-gray-700">Piton de la Fournaise, Enclos</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Tour complet</td>
                      <td className="px-6 py-4 text-gray-700">45 min</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">320€</td>
                      <td className="px-6 py-4 text-gray-700">3 cirques + volcan + littoral</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-green-50">
                      <td className="px-6 py-4 font-medium text-gray-900">⭐ Tour intégral</td>
                      <td className="px-6 py-4 text-gray-700">55 min</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">390€</td>
                      <td className="px-6 py-4 text-gray-700">Île complète, maximum de sites</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-gray-700 flex items-start">
                  <AlertCircle className="w-5 h-5 mr-2 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Bon à savoir :</strong> Les tarifs sont généralement dégressifs pour les groupes de 4 personnes ou plus. Des surcharges s'appliquent pendant les périodes d'éruption volcanique (forte demande).</span>
                </p>
              </div>
            </div>

            {/* Circuit le plus populaire */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Star className="w-8 h-8 mr-3 text-blue-600" />
                Notre circuit recommandé : Survol du volcan (260€)
              </h2>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Pourquoi c'est le meilleur rapport qualité-prix
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>35 minutes de vol</strong> : durée idéale pour profiter sans se ruiner</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Piton de la Fournaise</strong> : survolez l'un des volcans les plus actifs au monde</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>L'Enclos Fouqué</strong> : paysages lunaires et cratères spectaculaires</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Plaine des Sables</strong> : désert volcanique aux couleurs ocre</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Coulées de lave</strong> : anciennes et récentes, jusqu'à l'océan</span>
                  </li>
                </ul>
              </div>

              <img
                src="https://www.blog.dineo.re/wp-content/uploads/2023/03/compagnie-helicopetere-la-reunion.jpg"
                alt="Vue aérienne du Piton de la Fournaise"
                className="w-full h-96 object-cover rounded-xl shadow-lg mb-6"
              />

              <div className="bg-white border-2 border-blue-600 rounded-xl p-6 text-center">
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  Réservez votre survol du volcan en hélicoptère
                </p>
                <Link
                  to="/?search=hélicoptère"
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  <Plane className="w-5 h-5 mr-2" />
                  Voir les disponibilités et réserver
                </Link>
                <p className="text-sm text-gray-600 mt-3">
                  Annulation gratuite jusqu'à 48h avant • Meilleurs prix garantis
                </p>
              </div>
            </div>

            {/* Comparaison avec autres activités */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-8 h-8 mr-3 text-blue-600" />
                Hélicoptère vs autres activités : quel budget ?
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                L'hélicoptère représente un budget conséquent, mais offre une expérience unique. Voici une comparaison avec d'autres activités phares à La Réunion :
              </p>

              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md mb-6">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Activité</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Durée</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tarif moyen</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type d'expérience</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 bg-blue-50">
                      <td className="px-6 py-4 font-medium text-gray-900">🚁 Vol hélicoptère</td>
                      <td className="px-6 py-4 text-gray-700">35 min</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">260€</td>
                      <td className="px-6 py-4 text-gray-700">Vue panoramique aérienne</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">🪂 Parapente</td>
                      <td className="px-6 py-4 text-gray-700">20-30 min</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">90€</td>
                      <td className="px-6 py-4 text-gray-700">Vol libre, sensations douces</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">🌊 Canyoning</td>
                      <td className="px-6 py-4 text-gray-700">3-6h</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">55-75€</td>
                      <td className="px-6 py-4 text-gray-700">Immersion nature, sportif</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">🤿 Plongée sous-marine</td>
                      <td className="px-6 py-4 text-gray-700">2-3h</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">60-80€</td>
                      <td className="px-6 py-4 text-gray-700">Découverte fonds marins</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">🥾 Randonnée guidée</td>
                      <td className="px-6 py-4 text-gray-700">Journée</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">45-60€</td>
                      <td className="px-6 py-4 text-gray-700">Découverte à pied, culture</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6">
                <p className="text-gray-800">
                  <strong>Notre conseil :</strong> Si votre budget le permet, l'hélicoptère offre une perspective incomparable sur La Réunion. Pour une expérience aérienne plus accessible, le <Link to="/?search=parapente" className="text-blue-600 hover:underline font-semibold">parapente</Link> est une excellente alternative à 90€. Si vous préférez l'aventure au sol, le <Link to="/canyoning-reunion" className="text-blue-600 hover:underline font-semibold">canyoning</Link> vous plongera au cœur des cascades et ravines.
                </p>
              </div>
            </div>

            {/* Points de départ */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-8 h-8 mr-3 text-blue-600" />
                D'où décoller ? Les bases hélicoptères
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">📍 Base de Saint-Pierre (Sud)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Idéal pour survol du <strong>volcan</strong></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Accès rapide au Piton de la Fournaise</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Parking gratuit sur place</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">📍 Base de Saint-Gilles (Ouest)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Parfait pour survol des <strong>cirques</strong></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Proximité des hôtels de la côte ouest</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Baptêmes découverte disponibles</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conseils pratiques */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="w-8 h-8 mr-3 text-blue-600" />
                Nos conseils pour réussir votre vol
              </h2>

              <div className="space-y-6">
                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🌤️ Choisir le bon moment</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Tôt le matin (7h-9h)</strong> : meilleure visibilité, moins de nuages, lumière dorée parfaite pour les photos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Saison sèche (mai à novembre)</strong> : conditions météo optimales</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Période d'éruption</strong> : spectacle exceptionnel mais réservez très en avance</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">📸 Réussir vos photos</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Camera className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Demandez une place <strong>côté hublot</strong> lors de la réservation</span>
                    </li>
                    <li className="flex items-start">
                      <Camera className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Évitez le flash, réglez votre appareil en mode <strong>ISO élevé</strong></span>
                    </li>
                    <li className="flex items-start">
                      <Camera className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Collez l'objectif au hublot pour éviter les reflets</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">⚠️ Avant le vol</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Arrivez <strong>30 minutes en avance</strong> (briefing sécurité obligatoire)</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Poids maximum généralement limité à <strong>120 kg par personne</strong></span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Évitez les repas lourds juste avant (risque de mal des transports)</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Prévoyez <strong>vêtements chauds</strong> (température plus fraîche en altitude)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA final */}
            <div className="my-12">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white text-center">
                <Plane className="w-16 h-16 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">
                  Prêt à survoler La Réunion en hélicoptère ?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Réservez votre vol dès maintenant et découvrez les paysages époustouflants de l'île intense depuis le ciel. Meilleurs tarifs garantis et annulation gratuite.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/?search=hélicoptère"
                    className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                  >
                    <Plane className="w-5 h-5 mr-2" />
                    Réserver mon vol en hélicoptère
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex items-center bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-lg border-2 border-white"
                  >
                    Voir toutes les activités aériennes
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ rapide */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Peut-on voler en hélicoptère même s'il y a du vent ?</h3>
                  <p className="text-gray-700">
                    Les vols sont maintenus tant que les conditions météo restent sûres. En cas de vent fort ou de mauvaise visibilité, le vol peut être reporté. Les compagnies vous préviendront la veille ou le matin même si les conditions ne sont pas optimales.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Les enfants peuvent-ils faire un vol en hélicoptère ?</h3>
                  <p className="text-gray-700">
                    Oui, dès 2 ans généralement. Les enfants de moins de 12 ans doivent être accompagnés d'un adulte. Certaines compagnies proposent des tarifs enfants réduits (environ -20%).
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Que se passe-t-il si le vol est annulé à cause de la météo ?</h3>
                  <p className="text-gray-700">
                    En cas d'annulation météo, vous avez le choix entre un report gratuit à une autre date ou un remboursement intégral. Aucun frais d'annulation ne sera appliqué si la décision vient de la compagnie.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Combien de passagers par hélicoptère ?</h3>
                  <p className="text-gray-700">
                    La plupart des hélicoptères accueillent 4 à 5 passagers + le pilote. Toutes les places offrent une vue panoramique grâce aux grandes baies vitrées. Si vous réservez pour un groupe de 4-5 personnes, vous privatisez l'appareil.
                  </p>
                </div>
              </div>
            </div>

            {/* Autres activités */}
            <div className="my-12 bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Découvrez aussi nos autres activités à La Réunion</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/?search=parapente" className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all group">
                  <div className="text-4xl mb-3">🪂</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">Parapente</h3>
                  <p className="text-gray-600 text-sm">Vol en tandem au-dessus des plus beaux paysages de l'île</p>
                  <p className="text-blue-600 font-semibold mt-2">À partir de 90€</p>
                </Link>

                <Link to="/canyoning-reunion" className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all group">
                  <div className="text-4xl mb-3">🌊</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">Canyoning</h3>
                  <p className="text-gray-600 text-sm">Descente de cascades et sauts dans des bassins naturels</p>
                  <p className="text-blue-600 font-semibold mt-2">À partir de 55€</p>
                </Link>

                <Link to="/randonnees-reunion" className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all group">
                  <div className="text-4xl mb-3">🥾</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">Randonnées guidées</h3>
                  <p className="text-gray-600 text-sm">Explorez les cirques et le volcan avec un guide expert</p>
                  <p className="text-blue-600 font-semibold mt-2">À partir de 45€</p>
                </Link>
              </div>
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostHelicopterPrice;
