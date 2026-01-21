import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, Clock, ThermometerSun, CloudRain, Droplets, Sun, Wind, Mountain, Waves, Camera, Compass, Heart, TrendingUp, Users, Star } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const BlogPostMayReunion: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Voyager à La Réunion en mai : météo, conseils et activités</title>
        <meta name="description" content="Mai à La Réunion : l'une des meilleures périodes de l'année. Météo idéale, saison sèche, températures agréables. Conseils pour profiter pleinement de votre séjour." />
        <meta name="keywords" content="réunion mai, météo réunion mai, voyage réunion mai, activités réunion mai, climat réunion mai, vacances réunion mai" />
        <link rel="canonical" href="https://dineo.re/blog/voyage-reunion-mai" />

        {/* Open Graph */}
        <meta property="og:title" content="Voyager à La Réunion en mai : météo, conseils et activités" />
        <meta property="og:description" content="Mai à La Réunion : l'une des meilleures périodes de l'année. Météo idéale, saison sèche, activités parfaites." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://dineo.re/blog/voyage-reunion-mai" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Voyager à La Réunion en mai : météo, conseils et activités" />
        <meta name="twitter:description" content="Mai à La Réunion : l'une des meilleures périodes de l'année avec une météo idéale." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80" />

        {/* Article structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Voyager à La Réunion en mai : météo, conseils et activités",
            "image": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
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
          <span className="text-gray-900">Voyage à La Réunion en mai</span>
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
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
              alt="Paysages de La Réunion en mai"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-green-600 px-3 py-1 rounded-full text-sm font-medium">Voyage & Saisons</span>
                <span className="flex items-center text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  15 Décembre 2025
                </span>
                <span className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  13 min
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Voyager à La Réunion en mai : météo, conseils et activités
              </h1>
              <p className="text-xl text-gray-200">
                L'une des meilleures périodes de l'année : saison sèche, températures agréables et conditions idéales pour toutes les activités
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8 md:p-12">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                <strong>Mai est l'un des meilleurs mois pour visiter La Réunion</strong>. En plein cœur de l'hiver austral (la saison sèche), mai offre des conditions météorologiques idéales : températures agréables, peu de pluie, ensoleillement généreux et conditions parfaites pour la randonnée. C'est le moment où l'île révèle son meilleur visage, avec une nature encore verdoyante après l'été austral et des températures confortables pour toutes les activités. Découvrez pourquoi mai est la période favorite de nombreux voyageurs et comment en profiter au maximum.
              </p>

              {/* Quick Summary */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 my-8 not-prose">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Star className="w-6 h-6 text-green-600 mr-2" />
                  En résumé : mai à La Réunion
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <ThermometerSun className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Températures</p>
                      <p className="text-sm text-gray-700">23-27°C sur le littoral, 15-20°C en altitude</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Sun className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Ensoleillement</p>
                      <p className="text-sm text-gray-700">Excellent, 7-8h de soleil/jour</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CloudRain className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Précipitations</p>
                      <p className="text-sm text-gray-700">Faibles (6-10 jours de pluie légère)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Notre avis</p>
                      <p className="text-sm text-gray-700">⭐⭐⭐⭐⭐ Période idéale !</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Météo à La Réunion en mai : des conditions parfaites
              </h2>

              <p className="mb-4">
                Mai marque le début de l'<strong>hiver austral</strong> à La Réunion, synonyme de saison sèche et de conditions météorologiques optimales. C'est l'un des mois les plus agréables de l'année pour explorer l'île.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Températures en mai : l'équilibre parfait
              </h3>

              <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-600">
                  <div className="flex items-center mb-3">
                    <Sun className="w-6 h-6 text-orange-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">Sur le littoral</h4>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Températures moyennes :</strong> 23-27°C</p>
                    <p><strong>Température de l'eau :</strong> 25-26°C</p>
                    <p><strong>Ressenti :</strong> Agréable et sec, ni trop chaud ni trop frais</p>
                    <p className="text-sm mt-3 bg-white/60 p-3 rounded">
                      Parfait pour la plage, les activités nautiques et les visites. Pensez à une petite laine pour les soirées sur la côte sud.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
                  <div className="flex items-center mb-3">
                    <Mountain className="w-6 h-6 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">En altitude</h4>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Cirques (Cilaos, Salazie, Mafate) :</strong> 15-20°C</p>
                    <p><strong>Piton des Neiges / Maïdo :</strong> 8-15°C</p>
                    <p><strong>Volcan Piton de la Fournaise :</strong> 12-18°C</p>
                    <p className="text-sm mt-3 bg-white/60 p-3 rounded">
                      Températures fraîches mais idéales pour la randonnée. Il peut geler au sommet du Piton des Neiges tôt le matin. Prévoyez des vêtements chauds.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Pluies en mai : faibles et rares
              </h3>

              <p className="mb-4">
                Mai est l'un des <strong>mois les plus secs de l'année</strong> à La Réunion. Les précipitations sont nettement réduites par rapport à l'été austral, et même la côte est, habituellement très arrosée, connaît une accalmie.
              </p>

              <div className="bg-cyan-50 rounded-xl p-6 my-8 not-prose">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <CloudRain className="w-5 h-5 text-cyan-600 mr-2" />
                  Précipitations par région en mai
                </h4>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="font-medium text-gray-900">Côte ouest (Saint-Gilles, Saint-Leu)</p>
                    <p className="text-sm">Très sec : 3-5 jours de pluie légère par mois. Ensoleillement maximal. Parfait pour le lagon et les activités de plage.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Côte est (Sainte-Rose, Saint-Benoît)</p>
                    <p className="text-sm">Modérément sec : 8-12 jours de pluie. Beaucoup moins arrosé qu'en été. Les cascades gardent un débit correct.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Les Hauts et cirques</p>
                    <p className="text-sm">Sec : 6-10 jours de pluie. Conditions excellentes pour la randonnée. Ciel souvent dégagé le matin.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Sud sauvage (Saint-Joseph, Grand-Anse)</p>
                    <p className="text-sm">Très sec : 4-6 jours de pluie. Parfait pour explorer le sud et la Route des Laves.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Ensoleillement et luminosité
              </h3>

              <p className="mb-4">
                Mai bénéficie d'un <strong>excellent ensoleillement</strong> avec 7 à 8 heures de soleil par jour en moyenne. Les journées sont encore relativement longues (lever vers 6h30, coucher vers 17h45) et le ciel est souvent dégagé, offrant des conditions parfaites pour la photographie et les panoramas.
              </p>

              <div className="bg-yellow-50 rounded-xl p-5 my-8 not-prose">
                <div className="flex items-start">
                  <Sun className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Alizés : le petit plus de mai</h4>
                    <p className="text-gray-700 text-sm">
                      Les <strong>alizés</strong> (vents réguliers du sud-est) soufflent de manière modérée en mai, apportant une brise agréable qui rafraîchit naturellement sans gêner les activités. Parfait pour les sports de voile et pour supporter la chaleur en journée.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Notre avis : pourquoi mai est-il exceptionnel ?
              </h2>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 my-8 not-prose">
                <div className="flex items-start mb-4">
                  <Heart className="w-8 h-8 text-green-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Notre verdict : ⭐⭐⭐⭐⭐ Période idéale
                    </h3>
                    <p className="text-gray-700 mb-4">
                      <strong>Mai est unanimement considéré comme l'une des trois meilleures périodes</strong> pour visiter La Réunion (avec juin et septembre-octobre). Le rapport météo/affluence/tarifs est optimal. C'est le mois parfait pour découvrir l'île dans des conditions idéales.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                      <span className="text-xl mr-2">✓</span> Avantages majeurs de mai
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Météo excellente et stable</li>
                      <li>• Très peu de pluie</li>
                      <li>• Températures parfaites (ni trop chaud ni trop frais)</li>
                      <li>• Conditions optimales pour la randonnée</li>
                      <li>• Eau encore chaude (25-26°C)</li>
                      <li>• Moins de touristes qu'en juillet-août</li>
                      <li>• Tarifs raisonnables hors vacances scolaires</li>
                      <li>• Paysages encore verts après l'été austral</li>
                      <li>• Visibilité excellente pour les panoramas</li>
                      <li>• Pas de risque cyclonique</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-700 mb-3 flex items-center">
                      <span className="text-xl mr-2">⚠</span> Points d'attention (mineurs)
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Journées plus courtes qu'en été (lever 6h30, coucher 17h45)</li>
                      <li>• Fraîcheur matinale en altitude (prévoir polaire)</li>
                      <li>• Certaines cascades ont un débit réduit</li>
                      <li>• Alizés parfois soutenus (rarement gênant)</li>
                      <li>• Baleine moins fréquente qu'en juillet-septembre</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-white/60 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">
                    💡 <strong>Pour qui mai est-il parfait ?</strong>
                  </p>
                  <p className="text-gray-700 text-sm mt-2">
                    Mai convient à <strong>tous les profils de voyageurs</strong> : familles, couples, randonneurs, amateurs de plage, photographes... C'est la période où vous avez le moins de contraintes et le maximum de possibilités. Si vous avez le choix de vos dates, mai est un choix gagnant à tous les niveaux.
                  </p>
                </div>
              </div>

              {/* CTA Block 1 */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-lg my-8 not-prose">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Compass className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Profitez des conditions parfaites de mai
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Mai offre les meilleures conditions pour toutes nos activités : randonnées avec vues dégagées, canyoning dans des conditions optimales, balades à cheval sous un ciel bleu...
                    </p>
                    <Link to="/" className="inline-flex items-center bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Découvrir toutes les activités
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </Link>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Quelles activités faire à La Réunion en mai ?
              </h2>

              <p className="mb-6">
                En mai, <strong>toutes les activités sont praticables dans d'excellentes conditions</strong>. C'est le mois où vous avez le plus de flexibilité et où les conditions météo ne seront presque jamais un frein.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Randonnées : la période optimale
              </h3>

              <p className="mb-4">
                Mai est <strong>LE mois idéal pour la randonnée</strong> à La Réunion. Températures agréables, peu de pluie, visibilité excellente, sentiers en bon état : toutes les conditions sont réunies.
              </p>

              <div className="bg-green-50 rounded-xl p-6 my-8 not-prose">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Mountain className="w-5 h-5 text-green-600 mr-2" />
                  Randonnées incontournables en mai
                </h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900">Piton de la Fournaise (volcan)</p>
                    <p className="text-sm text-gray-700 mb-1">Conditions parfaites : ciel dégagé, températures agréables. Le volcan est souvent visible depuis le Pas de Bellecombe. Vue spectaculaire garantie.</p>
                    <div className="flex items-center mt-2">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Conditions optimales</span>
                      <span className="text-xs text-gray-600 ml-3">5h de marche A/R</span>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-gray-900">Piton des Neiges (3071m)</p>
                    <p className="text-sm text-gray-700 mb-1">Le point culminant de l'océan Indien. Lever de soleil exceptionnel au sommet. Températures fraîches (0-5°C au sommet le matin) mais ciel souvent dégagé.</p>
                    <div className="flex items-center mt-2">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Excellent en mai</span>
                      <span className="text-xs text-gray-600 ml-3">8h A/R depuis Cilaos</span>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-gray-900">Mafate (traversée ou randonnée à la journée)</p>
                    <p className="text-sm text-gray-700 mb-1">Le cirque sauvage sans route accessible. Mai offre les meilleures conditions : sentiers secs, températures agréables, vues dégagées sur les pitons.</p>
                    <div className="flex items-center mt-2">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Période idéale</span>
                      <span className="text-xs text-gray-600 ml-3">Variable selon itinéraire</span>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-gray-900">Trou de Fer</p>
                    <p className="text-sm text-gray-700 mb-1">Canyon spectaculaire avec 6 cascades. Le débit est encore correct en mai. Randonnée en forêt primaire magnifique.</p>
                    <div className="flex items-center mt-2">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Très recommandé</span>
                      <span className="text-xs text-gray-600 ml-3">4h30 A/R</span>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-gray-900">Maïdo (lever de soleil)</p>
                    <p className="text-sm text-gray-700 mb-1">Vue panoramique sur Mafate. En mai, le ciel est souvent dégagé au lever du soleil. Un des plus beaux panoramas de l'île.</p>
                    <div className="flex items-center mt-2">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Visibilité excellente</span>
                      <span className="text-xs text-gray-600 ml-3">Accessible en voiture</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 p-6 rounded-lg my-8 not-prose">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Compass className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Randonnées guidées en mai
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Profitez des conditions optimales de mai avec un guide diplômé : accès aux meilleurs points de vue, connaissance de la faune et flore, sécurité maximale. Mai est la période idéale pour les randos en altitude.
                    </p>
                    <Link to="/randonnees-reunion" className="inline-flex items-center bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                      Voir les randonnées guidées
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </Link>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Activités nautiques et plage
              </h3>

              <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <div className="bg-white rounded-xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-colors">
                  <div className="flex items-center mb-3">
                    <Waves className="w-6 h-6 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">Lagon et snorkeling</h4>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    Eau à 25-26°C, visibilité excellente, peu de vagues. Le lagon de Saint-Gilles et l'Hermitage sont magnifiques. Parfait pour observer les poissons tropicaux et les tortues.
                  </p>
                  <span className="text-sm text-green-600 font-medium">✓ Conditions excellentes</span>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-cyan-200 hover:border-cyan-400 transition-colors">
                  <div className="flex items-center mb-3">
                    <Droplets className="w-6 h-6 text-cyan-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">Plongée sous-marine</h4>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    Mai offre une excellente visibilité (20-30m). Plongées sur épaves, tombants, rencontre avec raies et requins pointes blanches. Eau confortable pour des plongées longues.
                  </p>
                  <span className="text-sm text-green-600 font-medium">✓ Visibilité maximale</span>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-colors">
                  <div className="flex items-center mb-3">
                    <Wind className="w-6 h-6 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">Surf et kitesurf</h4>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    Alizés réguliers, conditions stables. Saint-Leu est excellent pour le surf. Les alizés offrent de bonnes conditions pour le kitesurf à Étang-Salé et Saint-Pierre.
                  </p>
                  <span className="text-sm text-green-600 font-medium">✓ Vent régulier</span>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-teal-200 hover:border-teal-400 transition-colors">
                  <div className="flex items-center mb-3">
                    <Droplets className="w-6 h-6 text-teal-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">Canyoning</h4>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    Débits corrects dans tous les canyons. Eau fraîche mais supportable avec combinaison néoprène. Conditions idéales pour découvrir cette activité phare de La Réunion.
                  </p>
                  <Link to="/canyoning-reunion" className="text-teal-600 text-sm font-medium hover:text-teal-700 inline-flex items-center">
                    En savoir plus →
                  </Link>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Autres activités à faire en mai
              </h3>

              <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
                <div className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Balades à cheval</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Températures parfaites pour des balades au Maïdo ou dans les Hauts. Vue dégagée sur Mafate, paysages magnifiques.
                  </p>
                  <Link to="/balades-cheval-reunion" className="text-blue-600 text-sm font-medium hover:text-blue-700 inline-flex items-center">
                    En savoir plus →
                  </Link>
                </div>

                <div className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Parapente</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Alizés réguliers, thermiques stables. Vols biplaces depuis Saint-Leu avec vue sur le lagon. Conditions optimales.
                  </p>
                  <span className="text-green-600 text-sm font-medium">✓ Excellentes conditions</span>
                </div>

                <div className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">VTT et vélo</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Routes sèches, températures agréables. Parfait pour la Route Forestière du Volcan ou les descentes depuis les Hauts.
                  </p>
                  <span className="text-green-600 text-sm font-medium">✓ Conditions idéales</span>
                </div>

                <div className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Road trip en van</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Météo stable, routes en bon état. Parfait pour faire le tour de l'île en toute liberté et dormir face aux plus beaux spots.
                  </p>
                  <Link to="/location-van-reunion" className="text-orange-600 text-sm font-medium hover:text-orange-700 inline-flex items-center">
                    Louer un van →
                  </Link>
                </div>

                <div className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Photographie</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Luminosité excellente, ciel dégagé, paysages verts. Mai est parfait pour les photographes : levers/couchers de soleil spectaculaires.
                  </p>
                  <span className="text-green-600 text-sm font-medium">✓ Lumière parfaite</span>
                </div>

                <div className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Visites culturelles</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Cirques (Hell-Bourg, Cilaos), marchés locaux, musées, distilleries de rhum. Météo parfaite pour les visites en extérieur.
                  </p>
                  <span className="text-blue-600 text-sm font-medium">Tous les jours</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Conseils pratiques pour mai
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Que mettre dans sa valise ?
              </h3>

              <div className="bg-blue-50 rounded-xl p-6 my-8 not-prose">
                <h4 className="font-semibold text-gray-900 mb-4">Valise idéale pour mai</h4>
                <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    <span className="text-gray-700"><strong>Vêtements légers</strong> pour la journée (T-shirts, shorts)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    <span className="text-gray-700"><strong>Pull ou polaire</strong> pour les soirées et l'altitude</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    <span className="text-gray-700"><strong>Coupe-vent imperméable</strong> (quelques averses possibles)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    <span className="text-gray-700"><strong>Vêtements chauds</strong> si rando en altitude (bonnet, gants)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    <span className="text-gray-700"><strong>Chaussures de randonnée</strong> montantes avec bon grip</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    <span className="text-gray-700"><strong>Maillots de bain</strong> (2-3 pour rotation)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    <span className="text-gray-700"><strong>Crème solaire SPF 50+</strong> (soleil puissant)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    <span className="text-gray-700"><strong>Lunettes de soleil</strong> et casquette/chapeau</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    <span className="text-gray-700"><strong>Lampe frontale</strong> pour les randos matinales</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    <span className="text-gray-700"><strong>Gourde réutilisable</strong> (1,5-2L)</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Budget et affluence en mai
              </h3>

              <p className="mb-4">
                Mai est une période <strong>moyennement haute</strong> en termes de fréquentation. Les vacances scolaires françaises (zone C) tombent généralement mi-avril, donc mai est relativement calme. Les tarifs sont modérés, sauf durant le week-end de l'Ascension et le pont du 8 mai.
              </p>

              <div className="bg-purple-50 rounded-xl p-6 my-8 not-prose">
                <h4 className="font-semibold text-gray-900 mb-4">Estimation budget mai (10 jours, par personne)</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Vol Paris - La Réunion</span>
                    <span className="font-semibold text-purple-700">550-800€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Hébergement (10 nuits)</span>
                    <span className="font-semibold text-purple-700">400-700€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Location voiture/van</span>
                    <span className="font-semibold text-purple-700">300-500€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Nourriture</span>
                    <span className="font-semibold text-purple-700">300-500€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Activités</span>
                    <span className="font-semibold text-purple-700">200-400€</span>
                  </div>
                  <div className="pt-3 border-t-2 border-purple-200 flex justify-between items-center">
                    <span className="font-bold text-gray-900">Total estimé</span>
                    <span className="font-bold text-purple-700 text-xl">1750-2900€</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">💡 Réservez 2-3 mois à l'avance pour les meilleurs tarifs de vol.</p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-600 p-6 rounded-lg my-8 not-prose">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Compass className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Maximisez votre liberté en mai
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Avec la météo stable de mai, un van vous offre une liberté totale : suivez le soleil, réveillez-vous face au volcan, endormez-vous face à l'océan. Location dès 50€/jour.
                    </p>
                    <Link to="/location-van-reunion" className="inline-flex items-center bg-orange-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                      Voir les vans disponibles
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </Link>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Mai vs autres mois : comparaison
              </h2>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-sm border-collapse not-prose">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Critère</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Mai</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Janvier</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Juillet-Août</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Météo</td>
                      <td className="border border-gray-300 px-4 py-2 text-center bg-green-50">⭐⭐⭐⭐⭐ Excellent</td>
                      <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-50">⭐⭐⭐ Chaud et pluvieux</td>
                      <td className="border border-gray-300 px-4 py-2 text-center bg-green-50">⭐⭐⭐⭐ Très bon</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Affluence</td>
                      <td className="border border-gray-300 px-4 py-2 text-center bg-green-50">⭐⭐⭐⭐ Modérée</td>
                      <td className="border border-gray-300 px-4 py-2 text-center bg-green-50">⭐⭐⭐⭐ Faible</td>
                      <td className="border border-gray-300 px-4 py-2 text-center bg-orange-50">⭐⭐ Très élevée</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Tarifs</td>
                      <td className="border border-gray-300 px-4 py-2 text-center bg-green-50">⭐⭐⭐⭐ Raisonnables</td>
                      <td className="border border-gray-300 px-4 py-2 text-center bg-green-50">⭐⭐⭐⭐ Attractifs</td>
                      <td className="border border-gray-300 px-4 py-2 text-center bg-orange-50">⭐⭐ Élevés</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Randonnée</td>
                      <td className="border border-gray-300 px-4 py-2 text-center bg-green-50">⭐⭐⭐⭐⭐ Parfait</td>
                      <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-50">⭐⭐⭐ Compliqué</td>
                      <td className="border border-gray-300 px-4 py-2 text-center bg-green-50">⭐⭐⭐⭐ Très bon</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Température eau</td>
                      <td className="border border-gray-300 px-4 py-2 text-center bg-green-50">25-26°C</td>
                      <td className="border border-gray-300 px-4 py-2 text-center bg-green-50">27-28°C</td>
                      <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-50">23-24°C</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                En résumé : mai, le choix gagnant
              </h2>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 my-8 not-prose">
                <p className="text-gray-700 mb-4 text-lg">
                  <strong>Mai est l'un des trois meilleurs mois pour visiter La Réunion</strong>, avec juin et septembre-octobre. Si vous avez la flexibilité de choisir vos dates, mai offre le meilleur rapport météo/affluence/tarifs. C'est la période où vous pouvez tout faire sans contrainte : randonnées, plage, activités nautiques, road trip...
                </p>

                <div className="bg-white/60 p-5 rounded-lg mt-6">
                  <p className="font-semibold text-green-700 mb-3">Mai est parfait pour :</p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>✓ Les randonneurs (conditions optimales)</li>
                    <li>✓ Les familles (météo stable et agréable)</li>
                    <li>✓ Les photographes (luminosité excellente)</li>
                    <li>✓ Les amateurs d'activités outdoor (tout est praticable)</li>
                    <li>✓ Les voyageurs cherchant le meilleur rapport qualité/prix</li>
                  </ul>
                </div>

                <p className="text-gray-700 mt-6 font-medium text-center">
                  💡 <strong>Notre conseil :</strong> Réservez vos vols 2-3 mois à l'avance pour les meilleurs tarifs. Mai se remplit vite car les connaisseurs savent que c'est l'un des meilleurs mois !
                </p>
              </div>

              <div className="bg-gray-100 rounded-xl p-8 my-12 not-prose text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Prêt à découvrir La Réunion en mai ?
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Conditions parfaites, activités variées et paysages époustouflants : mai est le moment idéal pour vivre l'expérience réunionnaise dans les meilleures conditions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    <Compass className="w-5 h-5 mr-2" />
                    Découvrir toutes les activités
                  </Link>
                  <Link
                    to="/blog/voyage-reunion-janvier"
                    className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-gray-300"
                  >
                    Comparer avec janvier
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
                Experts de La Réunion, nous vous aidons à choisir la meilleure période pour votre voyage selon vos envies.
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Poursuivez votre lecture</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/blog/voyage-reunion-janvier" className="group">
              <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=400&q=80"
                  alt="La Réunion en janvier"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Voyager à La Réunion en janvier
                  </h4>
                  <p className="text-sm text-gray-600">
                    Saison chaude et humide : découvrez si janvier convient à votre voyage
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

export default BlogPostMayReunion;
