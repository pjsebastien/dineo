import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, Clock, ThermometerSun, CloudRain, Droplets, Sun, Wind, Mountain, Waves, Camera, AlertTriangle, Compass, Heart, TrendingUp, Users, Thermometer } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const BlogPostNovemberReunion: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Voyager à La Réunion en novembre : météo, avis et activités</title>
        <meta name="description" content="Novembre à La Réunion : la transition vers l'été austral. Températures en hausse, premières pluies et tarifs attractifs. Guide complet pour votre voyage." />
        <meta name="keywords" content="réunion novembre, météo réunion novembre, voyage réunion novembre, activités réunion novembre, climat réunion novembre, vacances réunion novembre" />
        <link rel="canonical" href="https://dineo.re/blog/voyage-reunion-novembre" />

        {/* Open Graph */}
        <meta property="og:title" content="Voyager à La Réunion en novembre : météo, avis et activités" />
        <meta property="og:description" content="Novembre à La Réunion : transition vers l'été austral avec des températures agréables et des tarifs attractifs. Guide complet." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://dineo.re/blog/voyage-reunion-novembre" />
        <meta property="og:image" content="https://www.blog.dineo.re/wp-content/uploads/2026/01/plage-ile-de-La-Reunion.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Voyager à La Réunion en novembre : météo, avis et activités" />
        <meta name="twitter:description" content="Novembre à La Réunion : météo détaillée, activités incontournables et conseils pratiques pour votre voyage." />
        <meta name="twitter:image" content="https://www.blog.dineo.re/wp-content/uploads/2026/01/plage-ile-de-La-Reunion.jpg" />

        {/* Article structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Voyager à La Réunion en novembre : météo, avis et activités",
            "image": "https://www.blog.dineo.re/wp-content/uploads/2026/01/plage-ile-de-La-Reunion.jpg",
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
            "datePublished": "2026-01-30",
            "dateModified": "2026-01-30"
          })}
        </script>
      </Helmet>

      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-blue-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-900">Voyage à La Réunion en novembre</span>
        </nav>

        {/* Back to Blog */}
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour au blog
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-96">
            <img
              src="https://www.blog.dineo.re/wp-content/uploads/2026/01/plage-ile-de-La-Reunion.jpg"
              alt="Paysage de La Réunion en novembre avec flamboyants"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-orange-600 px-3 py-1 rounded-full text-sm font-medium">Voyage & Saisons</span>
                <span className="flex items-center text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  30 Janvier 2026
                </span>
                <span className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  13 min
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Voyager à La Réunion en novembre : météo, avis et activités
              </h1>
              <p className="text-xl text-gray-200">
                La transition vers l'été austral : chaleur, flamboyants et bons plans
              </p>
            </div>
          </div>

          <div className="p-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                Novembre marque le début de <strong>l'été austral</strong> à La Réunion. Les températures grimpent, les journées s'allongent et les flamboyants sont en pleine floraison, offrant un spectacle flamboyant (c'est le cas de le dire !). C'est aussi le début de la saison des pluies, mais ne vous laissez pas effrayer : les averses sont généralement brèves et localisées. Novembre reste une excellente période pour visiter l'île, avec des tarifs encore très attractifs avant les fêtes.
              </p>
            </div>

            {/* Météo Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <ThermometerSun className="w-8 h-8 mr-3 text-orange-600" />
                Météo en novembre à La Réunion
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Thermometer className="w-5 h-5 mr-2 text-red-500" />
                    Températures
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Côtes :</strong> 23°C à 29°C</li>
                    <li><strong>Plaines :</strong> 17°C à 24°C</li>
                    <li><strong>Hauts :</strong> 12°C à 20°C</li>
                    <li><strong>Eau de mer :</strong> 24°C à 25°C</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Droplets className="w-5 h-5 mr-2 text-blue-500" />
                    Précipitations
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Jours de pluie :</strong> 10 à 14 jours</li>
                    <li><strong>Type :</strong> Averses tropicales brèves</li>
                    <li><strong>Est vs Ouest :</strong> Est nettement plus arrosé</li>
                    <li><strong>Ensoleillement :</strong> Bon (7-8h/jour)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <CloudRain className="w-5 h-5 mr-2 text-orange-600" />
                  Début de la saison humide
                </h3>
                <p className="text-gray-700">
                  Novembre marque le début officiel de la saison des pluies, mais celle-ci reste encore modérée. Les averses sont généralement concentrées en fin d'après-midi ou en soirée, et le soleil reprend vite ses droits. L'ouest de l'île (Saint-Gilles, Saint-Leu, Saint-Pierre) reste relativement épargné par les pluies. C'est aussi le mois où le risque cyclonique commence, mais les cyclones en novembre restent exceptionnels.
                </p>
              </div>
            </section>

            {/* Pourquoi partir en novembre */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="w-8 h-8 mr-3 text-red-500" />
                Pourquoi partir à La Réunion en novembre ?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-green-700 mb-3">✅ Les avantages</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Flamboyants en pleine floraison (spectaculaire !)</li>
                    <li>• Tarifs très attractifs (basse saison)</li>
                    <li>• Peu de touristes</li>
                    <li>• Températures chaudes mais supportables</li>
                    <li>• Eau de mer agréable pour la baignade</li>
                    <li>• Cascades à leur plus beau débit</li>
                    <li>• Ambiance locale authentique</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-orange-700 mb-3">⚠️ À considérer</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Averses plus fréquentes (surtout à l'est)</li>
                    <li>• Début du risque cyclonique (très faible)</li>
                    <li>• Chaleur parfois humide</li>
                    <li>• Fin de la saison des baleines</li>
                    <li>• Quelques sentiers de randonnée glissants</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Activités recommandées */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Compass className="w-8 h-8 mr-3 text-blue-600" />
                Activités incontournables en novembre
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Camera className="w-6 h-6 mr-2 text-red-600" />
                    Route des flamboyants
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Novembre est LE mois pour admirer les flamboyants en fleurs. Ces arbres majestueux aux fleurs rouge vif bordent les routes de l'île et créent des paysages dignes de cartes postales. La route entre Saint-Denis et Saint-Pierre offre un spectacle particulièrement saisissant.
                  </p>
                  <p className="text-sm text-orange-700 font-medium">
                    📸 Conseil photo : Les meilleures lumières sont tôt le matin ou en fin d'après-midi.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Waves className="w-6 h-6 mr-2 text-blue-600" />
                    Activités nautiques au lagon
                  </h3>
                  <p className="text-gray-700 mb-4">
                    L'eau atteint une température idéale pour toutes les activités aquatiques. Le lagon de l'Ermitage, de Saint-Leu ou de Saint-Pierre vous attend pour du snorkeling, du paddle, ou simplement pour vous détendre sur les plages de sable blanc.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link to="/activite/bapteme-plongee-saint-gilles-reunion-diving" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Plongée sous-marine
                    </Link>
                    <Link to="/activite/sortie-snorkeling-lagon-reunion" className="inline-flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
                      Snorkeling
                    </Link>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Mountain className="w-6 h-6 mr-2 text-green-600" />
                    Randonnées matinales
                  </h3>
                  <p className="text-gray-700 mb-4">
                    La randonnée reste possible en novembre, mais privilégiez les départs très tôt le matin pour profiter de la fraîcheur et éviter les averses d'après-midi. Les cascades sont particulièrement spectaculaires grâce aux premières pluies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link to="/randonnees-reunion" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      Découvrir les randonnées
                    </Link>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Sun className="w-6 h-6 mr-2 text-purple-600" />
                    Découverte du volcan
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Le Piton de la Fournaise est accessible en novembre, avec une météo généralement clémente le matin. Partez à l'aube pour atteindre le cratère avant les nuages qui s'installent en fin de matinée.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link to="/volcan-reunion" className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      Explorer le volcan
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Fête du Dipavali */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🪔</span>
                Événement spécial : Dipavali
              </h2>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6">
                <p className="text-gray-700 mb-4">
                  La fête hindoue des lumières, <strong>Dipavali</strong>, est souvent célébrée en novembre (la date varie selon le calendrier lunaire). C'est l'occasion de découvrir la richesse culturelle de La Réunion à travers les temples tamouls illuminés, les processions et les célébrations dans les familles.
                </p>
                <p className="text-gray-700 mb-4">
                  Les principaux temples de Saint-Denis, Saint-André et Saint-Pierre s'illuminent de milliers de lampes à huile. Une expérience culturelle unique qui témoigne du métissage réunionnais.
                </p>
                <div className="bg-white rounded-lg p-4 mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">À ne pas manquer :</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Temples illuminés de Saint-Denis et Saint-André</li>
                    <li>• Décorations colorées dans les quartiers tamouls</li>
                    <li>• Gastronomie indienne dans les restaurants locaux</li>
                    <li>• Processions traditionnelles</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Budget */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-8 h-8 mr-3 text-green-600" />
                Budget pour novembre
              </h2>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <p className="text-green-800 font-medium">
                  💰 Novembre est l'un des mois les moins chers pour visiter La Réunion ! Hors vacances scolaires et avant les fêtes de fin d'année, c'est la période idéale pour les voyageurs au budget serré.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-200 px-4 py-3 text-left">Poste</th>
                      <th className="border border-gray-200 px-4 py-3 text-left">Budget moyen</th>
                      <th className="border border-gray-200 px-4 py-3 text-left">Commentaire</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">Vol A/R Paris</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">500€ - 700€</td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Parmi les tarifs les plus bas de l'année</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium">Hébergement/nuit</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">50€ - 100€</td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Large choix et disponibilité</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">Location voiture/jour</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">25€ - 45€</td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Pas de pénurie de véhicules</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium">Budget total 2 sem.</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-bold">1 800€ - 2 800€</td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Excellent rapport qualité/prix</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-600 mt-4">
                * Budget estimé pour 2 personnes, incluant vol, hébergement, location de voiture et activités.
              </p>
            </section>

            {/* Conseils pratiques */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="w-8 h-8 mr-3 text-amber-500" />
                Conseils pratiques pour novembre
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-amber-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">🧳 Que mettre dans sa valise ?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Vêtements légers et respirants</li>
                    <li>• Maillot de bain (indispensable !)</li>
                    <li>• K-way ou veste imperméable légère</li>
                    <li>• Chaussures de randonnée (antidérapantes)</li>
                    <li>• Protection solaire forte (UV intenses)</li>
                    <li>• Chapeau ou casquette</li>
                    <li>• Pull léger pour les soirées en altitude</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">💡 Astuces locales</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Partez en randonnée dès 6h du matin</li>
                    <li>• Privilégiez l'ouest pour le beau temps</li>
                    <li>• Consultez météo-france.re chaque jour</li>
                    <li>• Emportez toujours de l'eau (chaleur !)</li>
                    <li>• Réservez les gîtes de montagne à l'avance</li>
                    <li>• Goûtez aux letchis qui arrivent fin novembre</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Notre avis */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre avis sur novembre</h2>

              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-3xl">🌺</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Le bon plan méconnu</h3>
                    <p className="text-gray-700 mb-4">
                      Novembre est souvent injustement boudé par les voyageurs qui craignent la saison des pluies. Pourtant, c'est l'un des meilleurs mois pour découvrir La Réunion avec un petit budget ! Les flamboyants en fleurs, l'atmosphère authentique loin des foules, et les tarifs très attractifs en font une période idéale.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Notre conseil : Adoptez le rythme local ! Levez-vous tôt pour profiter des belles matinées, faites une pause aux heures chaudes, et savourez les soirées douces sur la côte. C'est le secret pour un voyage réussi en novembre.
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-600">Notre note :</span>
                      <div className="flex">
                        {[1, 2, 3, 4].map((star) => (
                          <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                        <svg className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">(4/5 - Très bon choix budget)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* En résumé */}
            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">En résumé</h2>

              <div className="bg-gray-900 text-white rounded-xl p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <ThermometerSun className="w-10 h-10 mx-auto mb-3 text-orange-400" />
                    <h3 className="font-semibold mb-2">Climat</h3>
                    <p className="text-gray-300 text-sm">Chaud et parfois humide, 23-29°C sur les côtes</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-10 h-10 mx-auto mb-3 text-green-400" />
                    <h3 className="font-semibold mb-2">Affluence</h3>
                    <p className="text-gray-300 text-sm">Faible (basse saison)</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-10 h-10 mx-auto mb-3 text-green-400" />
                    <h3 className="font-semibold mb-2">Budget</h3>
                    <p className="text-gray-300 text-sm">Économique (l'un des moins chers)</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <p className="text-center text-gray-300">
                    <strong className="text-white">Idéal pour :</strong> Les voyageurs au budget serré, les amateurs de photographie florale, ceux qui fuient les foules touristiques.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </article>

        {/* Author Box */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              D
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Équipe Dineo</h3>
              <p className="text-gray-600">Experts de La Réunion depuis 2020</p>
              <p className="text-sm text-gray-500 mt-1">
                Notre équipe locale vous partage ses meilleurs conseils pour découvrir l'île intense.
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles similaires</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/blog/voyage-reunion-octobre" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gradient-to-br from-pink-400 to-purple-500"></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">La Réunion en octobre</h3>
                <p className="text-gray-600 text-sm">Le printemps austral et ses floraisons</p>
              </div>
            </Link>
            <Link to="/blog/voyage-reunion-decembre" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gradient-to-br from-red-400 to-orange-500"></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">La Réunion en décembre</h3>
                <p className="text-gray-600 text-sm">L'été austral et les fêtes</p>
              </div>
            </Link>
            <Link to="/activites-reunion" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gradient-to-br from-blue-400 to-cyan-500"></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Toutes les activités</h3>
                <p className="text-gray-600 text-sm">Découvrez nos meilleures expériences</p>
              </div>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostNovemberReunion;
