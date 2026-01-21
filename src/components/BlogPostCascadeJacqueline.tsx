import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, Clock, MapPin, AlertTriangle, Camera, Compass, Heart, ThermometerSun, Droplets, Mountain, Car } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const BlogPostCascadeJacqueline: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Cascade Jacqueline Langevin : randonnée, baignade et accès</title>
        <meta name="description" content="Découvrez la Cascade Jacqueline à Langevin : randonnée facile 1h A/R, magnifique bassin pour la baignade, accès depuis Saint-Joseph. Itinéraire détaillé et conseils." />
        <meta name="keywords" content="cascade jacqueline réunion, cascade jacqueline langevin, baignade cascade jacqueline, randonnée langevin, cascades sud réunion" />
        <link rel="canonical" href="https://dineo.re/blog/cascade-jacqueline-langevin" />

        {/* Open Graph */}
        <meta property="og:title" content="Cascade Jacqueline Langevin : randonnée et baignade" />
        <meta property="og:description" content="Cascade Jacqueline à Langevin : randonnée facile, magnifique bassin pour la baignade. Itinéraire et conseils." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://dineo.re/blog/cascade-jacqueline-langevin" />
        <meta property="og:image" content="https://www.blog.dineo.re/wp-content/uploads/2023/03/cascade-jacqueline-langevin-1170x630.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cascade Jacqueline Langevin : randonnée et baignade" />
        <meta name="twitter:description" content="Découvrez la Cascade Jacqueline : randonnée facile, magnifique bassin." />
        <meta name="twitter:image" content="https://www.blog.dineo.re/wp-content/uploads/2023/03/cascade-jacqueline-langevin-1170x630.jpg" />

        {/* Article structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Cascade Jacqueline Langevin : randonnée, baignade et accès",
            "image": "https://www.blog.dineo.re/wp-content/uploads/2023/03/cascade-jacqueline-langevin-1170x630.jpg",
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
            "datePublished": "2025-01-21",
            "dateModified": "2025-01-21"
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
          <span className="text-gray-900">Cascade Jacqueline Langevin</span>
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
              src="https://www.blog.dineo.re/wp-content/uploads/2023/03/cascade-jacqueline-langevin-1170x630.jpg"
              alt="Cascade Jacqueline à Langevin, La Réunion"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-green-600 px-3 py-1 rounded-full text-sm font-medium">Randonnée</span>
                <span className="flex items-center text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  8 Novembre 2025
                </span>
                <span className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  10 min
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Cascade Jacqueline à Langevin : randonnée et baignade
              </h1>
              <p className="text-xl text-gray-200">
                Magnifique cascade du sud sauvage accessible par une randonnée facile avec un superbe bassin pour la baignade
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8 md:p-12">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                La <strong>Cascade Jacqueline</strong>, située dans la commune de Saint-Joseph, est l'une des plus belles cascades du sud sauvage de La Réunion. Nichée dans la vallée de Langevin, cette cascade de 15 mètres offre un spectacle naturel enchanteur avec son eau cristalline qui se jette dans un grand bassin propice à la baignade. L'accès se fait par une randonnée facile et bien aménagée d'environ 1h aller-retour, ce qui en fait une sortie idéale pour les familles et tous les niveaux de marcheurs.
              </p>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 not-prose">
                <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-600">
                  <div className="flex items-center mb-2">
                    <Clock className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-gray-900">Durée</span>
                  </div>
                  <p className="text-gray-700">1h aller-retour</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-600">
                  <div className="flex items-center mb-2">
                    <Mountain className="w-5 h-5 text-green-600 mr-2" />
                    <span className="font-semibold text-gray-900">Difficulté</span>
                  </div>
                  <p className="text-gray-700">Facile (tout public)</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 border-l-4 border-purple-600">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="font-semibold text-gray-900">Lieu</span>
                  </div>
                  <p className="text-gray-700">Langevin, Saint-Joseph</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Où se trouve la Cascade Jacqueline ?
              </h2>

              <p className="mb-4">
                La <strong>Cascade Jacqueline</strong> est située dans la vallée de Langevin, sur la commune de Saint-Joseph, dans le sud de La Réunion. Cette région, surnommée le "sud sauvage", concentre de nombreuses cascades magnifiques grâce à son climat humide et sa végétation luxuriante.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 my-8 not-prose">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Accès en voiture</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Depuis Saint-Joseph :</strong> Suivez la direction de Langevin via la RN2, puis prenez la route de Langevin (D33). Continuez jusqu'au parking aménagé "Cascade Jacqueline" sur votre gauche.
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Coordonnées GPS :</strong> -21.3565, 55.6912
                    </p>
                    <p className="text-gray-700 text-sm mt-3">
                      Temps de trajet : 15 min depuis Saint-Joseph centre, 45 min depuis Saint-Pierre, 1h30 depuis Saint-Denis.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Randonnée vers la Cascade Jacqueline : itinéraire
              </h2>

              <p className="mb-4">
                La randonnée vers la <strong>Cascade Jacqueline</strong> est courte et accessible à tous. Le sentier est bien aménagé et balisé, traversant une magnifique forêt tropicale humide.
              </p>

              <div className="relative rounded-xl overflow-hidden my-8 not-prose">
                <img
                  src="https://www.blog.dineo.re/wp-content/uploads/2023/03/randonnee-cascade-jacqueline-1024x538.jpg"
                  alt="Sentier de randonnée vers la Cascade Jacqueline"
                  className="w-full h-96 object-cover"
                />
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 my-8 not-prose">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Itinéraire pas à pas</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div className="ml-4">
                      <p className="text-gray-900 font-medium">Départ du parking</p>
                      <p className="text-gray-700 text-sm">Depuis le parking aménagé, repérez le panneau "Cascade Jacqueline". Le sentier démarre directement à côté. Bien balisé en jaune.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div className="ml-4">
                      <p className="text-gray-900 font-medium">Traversée de la forêt (20 min)</p>
                      <p className="text-gray-700 text-sm">Le sentier serpente à travers une belle forêt tropicale humide. Végétation luxuriante, fougères géantes, bambous. Le chemin est large et ombragé.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div className="ml-4">
                      <p className="text-gray-900 font-medium">Descente vers la rivière (10 min)</p>
                      <p className="text-gray-700 text-sm">Le sentier descend progressivement vers la rivière Langevin. Vous entendrez le bruit de la cascade qui se rapproche.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <div className="ml-4">
                      <p className="text-gray-900 font-medium">Arrivée au bassin</p>
                      <p className="text-gray-700 text-sm">Le sentier débouche sur le magnifique bassin de la Cascade Jacqueline. Eau turquoise, cascade de 15m, végétation luxuriante tout autour.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg my-8 not-prose">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Conseils pour la randonnée</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Portez des chaussures fermées avec bonne adhérence (sentier parfois glissant)</li>
                      <li>• Prévoyez de l'eau (1L minimum par personne)</li>
                      <li>• Le sentier peut être boueux après la pluie</li>
                      <li>• Anti-moustiques recommandé (zone humide)</li>
                      <li>• Prévoir 2h sur place si vous voulez vous baigner</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Baignade à la Cascade Jacqueline
              </h2>

              <div className="relative rounded-xl overflow-hidden my-8 not-prose">
                <img
                  src="https://www.blog.dineo.re/wp-content/uploads/2023/03/baignade-cascade-jacqueline-1024x538.jpg"
                  alt="Bassin de baignade Cascade Jacqueline"
                  className="w-full h-96 object-cover"
                />
              </div>

              <p className="mb-4">
                Le <strong>bassin de la Cascade Jacqueline</strong> est l'un des plus beaux spots de baignade du sud de La Réunion. L'eau y est cristalline, d'un magnifique bleu-vert, et le cadre naturel est exceptionnel avec la cascade en toile de fond.
              </p>

              <div className="bg-cyan-50 rounded-xl p-6 my-8 not-prose">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Droplets className="w-5 h-5 text-cyan-600 mr-2" />
                  Informations sur le bassin
                </h4>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p>• <strong>Profondeur :</strong> Variable de 1 à 4 mètres selon les zones</p>
                  <p>• <strong>Température de l'eau :</strong> 20-22°C (fraîche mais agréable)</p>
                  <p>• <strong>Taille du bassin :</strong> Grand, permet à plusieurs groupes de se baigner</p>
                  <p>• <strong>Fond :</strong> Rocheux, attention aux pieds (chaussures aquatiques recommandées)</p>
                  <p>• <strong>Courant :</strong> Modéré, sauf après fortes pluies</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 my-8 not-prose">
                <h4 className="font-semibold text-gray-900 mb-3">Conseils pour la baignade</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>✓ La baignade est autorisée et surveillée en période touristique</li>
                  <li>✓ Eau fraîche (20-22°C) : idéale pour se rafraîchir après la randonnée</li>
                  <li>✓ Évitez de vous baigner juste après de fortes pluies (eau trouble, courants)</li>
                  <li>✓ Ne plongez pas depuis les rochers (profondeur variable)</li>
                  <li>✓ Respectez les lieux : pas de savon, pas de crème solaire dans l'eau</li>
                  <li>✓ Surveillez les enfants : le fond est rocheux et peut être glissant</li>
                </ul>
              </div>

              {/* CTA Block 1 - Randonnées */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 p-6 rounded-lg my-8 not-prose">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Compass className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Découvrez d'autres cascades avec un guide
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Explorez les plus belles cascades de La Réunion avec nos guides diplômés : Trou de Fer, Cascade Blanche, Bassin la Paix... Randonnées adaptées à tous les niveaux dans des sites exceptionnels.
                    </p>
                    <Link to="/randonnees-reunion" className="inline-flex items-center bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                      Voir les randonnées guidées
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </Link>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Quand visiter la Cascade Jacqueline ?
              </h2>

              <p className="mb-4">
                La <strong>Cascade Jacqueline est accessible toute l'année</strong>, mais certaines périodes sont plus favorables que d'autres.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
                  <div className="flex items-center mb-3">
                    <ThermometerSun className="w-6 h-6 text-green-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">Saison sèche (mai-nov)</h4>
                  </div>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <p><strong>Meilleure période</strong> pour visiter la cascade</p>
                    <p>✓ Sentier sec et sécurisé</p>
                    <p>✓ Eau claire et cristalline</p>
                    <p>✓ Débit modéré idéal pour la baignade</p>
                    <p>✓ Conditions photos parfaites</p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
                  <div className="flex items-center mb-3">
                    <Droplets className="w-6 h-6 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">Saison des pluies (déc-avr)</h4>
                  </div>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <p>Cascade impressionnante avec fort débit</p>
                    <p>⚠ Baignade déconseillée après pluies</p>
                    <p>⚠ Sentier glissant et boueux</p>
                    <p>✓ Végétation luxuriante au maximum</p>
                    <p>✓ Cascade spectaculaire</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Autres cascades à proximité
              </h2>

              <p className="mb-4">
                La vallée de Langevin et le sud de La Réunion regorgent d'autres cascades magnifiques à découvrir.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <div className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Grand Galet (Langevin)</h4>
                  <p className="text-gray-700 text-sm mb-3">À 5 min en voiture. Site aménagé avec plusieurs bassins et toboggans naturels. Parfait pour les familles.</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <Car className="w-4 h-4 mr-1" />
                    <span>5 min</span>
                    <span className="mx-2">•</span>
                    <span className="text-green-600 font-medium">Très facile</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Cascade de la Grande Ravine</h4>
                  <p className="text-gray-700 text-sm mb-3">À 15 min. Cascade de 100m de haut visible depuis la route. Impressionnante mais pas de baignade.</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <Car className="w-4 h-4 mr-1" />
                    <span>15 min</span>
                    <span className="mx-2">•</span>
                    <span className="text-green-600 font-medium">Vue directe</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Bassin 18</h4>
                  <p className="text-gray-700 text-sm mb-3">À 20 min. Spot de canyoning célèbre avec 18 cascades successives. Accessible uniquement avec guide.</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <Car className="w-4 h-4 mr-1" />
                    <span>20 min</span>
                    <span className="mx-2">•</span>
                    <Link to="/canyoning-reunion" className="text-cyan-600 font-medium hover:text-cyan-700">Canyoning →</Link>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Cascade Niagara</h4>
                  <p className="text-gray-700 text-sm mb-3">À 45 min (côte est). Randonnée très facile 30 min A/R. Excellent bassin de baignade.</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <Car className="w-4 h-4 mr-1" />
                    <span>45 min</span>
                    <span className="mx-2">•</span>
                    <Link to="/blog/cascade-niagara-la-reunion" className="text-blue-600 font-medium hover:text-blue-700">Lire l'article →</Link>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Conseils pratiques
              </h2>

              <div className="bg-orange-50 rounded-xl p-6 my-8 not-prose">
                <h4 className="font-semibold text-gray-900 mb-4">Liste du matériel à prévoir</h4>
                <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">✓</span>
                    <span className="text-gray-700"><strong>Chaussures de randonnée</strong> ou baskets avec bon grip</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">✓</span>
                    <span className="text-gray-700"><strong>Maillot de bain</strong> et serviette</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">✓</span>
                    <span className="text-gray-700"><strong>Chaussures aquatiques</strong> (fond rocheux)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">✓</span>
                    <span className="text-gray-700"><strong>Eau</strong> (1L minimum par personne)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">✓</span>
                    <span className="text-gray-700"><strong>Anti-moustiques</strong> (forêt humide)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">✓</span>
                    <span className="text-gray-700"><strong>Sac étanche</strong> pour téléphone/appareil photo</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">✓</span>
                    <span className="text-gray-700"><strong>Encas</strong> (fruits, barres énergétiques)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">✓</span>
                    <span className="text-gray-700"><strong>Sac poubelle</strong> (ne rien laisser sur place)</span>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 rounded-xl p-6 my-8 not-prose">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Heart className="w-5 h-5 text-teal-600 mr-2" />
                  Respect de l'environnement
                </h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Ramenez tous vos déchets (y compris mégots et déchets organiques)</li>
                  <li>• N'utilisez pas de savon ou shampoing dans le bassin</li>
                  <li>• Restez sur les sentiers balisés (protection de la végétation)</li>
                  <li>• Ne cueillez pas de plantes (site naturel protégé)</li>
                  <li>• Respectez la tranquillité des lieux (pas de musique forte)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 my-12 not-prose">
                <div className="flex items-start mb-4">
                  <Heart className="w-8 h-8 text-green-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Notre verdict sur la Cascade Jacqueline
                    </h3>
                    <p className="text-gray-700 mb-4">
                      La <strong>Cascade Jacqueline</strong> est un incontournable du sud de La Réunion. Sa randonnée facile, son magnifique bassin et son cadre naturel exceptionnel en font un spot parfait pour une demi-journée en famille ou entre amis. Le rapport effort/récompense est excellent : 30 minutes de marche pour un lieu paradisiaque.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                      <span className="mr-2">✓</span> Points forts
                    </h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Randonnée très accessible (1h A/R)</li>
                      <li>• Magnifique bassin de baignade</li>
                      <li>• Eau cristalline</li>
                      <li>• Cadre naturel exceptionnel</li>
                      <li>• Parfait pour les familles</li>
                      <li>• Gratuit</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-700 mb-2 flex items-center">
                      <span className="mr-2">⚠</span> Points d'attention
                    </h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Fréquenté le week-end</li>
                      <li>• Sentier glissant après pluie</li>
                      <li>• Eau fraîche (20-22°C)</li>
                      <li>• Fond rocheux (chaussures aquatiques utiles)</li>
                      <li>• Moustiques en forêt</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 mt-6 font-medium">
                  💡 <strong>Notre conseil :</strong> Venez en semaine et arrivez tôt le matin (8h-9h) pour profiter du site en toute tranquillité. Prévoyez 2-3h sur place pour avoir le temps de vous baigner et pique-niquer.
                </p>
              </div>

              <div className="bg-gray-100 rounded-xl p-8 my-12 not-prose text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Prêt à découvrir la Cascade Jacqueline ?
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Accessible, rafraîchissante et magnifique : la Cascade Jacqueline est l'une des plus belles sorties du sud de La Réunion. Parfaite pour une demi-journée nature en famille !
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/randonnees-reunion"
                    className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    <Compass className="w-5 h-5 mr-2" />
                    Randonnées guidées
                  </Link>
                  <Link
                    to="/blog/cascade-niagara-la-reunion"
                    className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-gray-300"
                  >
                    Cascade Niagara
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Author Box */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              D
            </div>
            <div className="ml-4">
              <div className="font-semibold text-gray-900">Équipe Dineo</div>
              <div className="text-sm text-gray-600">
                Passionnés de La Réunion, nous testons et partageons les meilleures cascades et spots de l'île intense.
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Poursuivez votre lecture</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/blog/cascade-niagara-la-reunion" className="group">
              <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://www.blog.dineo.re/wp-content/uploads/2023/03/cascade-niagara-la-reunion-1170x630.jpg"
                  alt="Cascade Niagara"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Cascade Niagara : accès et baignade
                  </h4>
                  <p className="text-sm text-gray-600">
                    Randonnée très facile 30 min A/R vers une des plus belles cascades accessibles
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/blog/road-trip-van-reunion-10-jours" className="group">
              <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=400&q=80"
                  alt="Road trip van réunion"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Road trip en van : itinéraire 10 jours
                  </h4>
                  <p className="text-sm text-gray-600">
                    L'itinéraire parfait pour découvrir La Réunion en van aménagé
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostCascadeJacqueline;
