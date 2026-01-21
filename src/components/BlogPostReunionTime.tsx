import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, Clock, Globe, Sun, Moon, Plane, MapPin } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const BlogPostReunionTime: React.FC = () => {
  const [reunionTime, setReunionTime] = useState('');
  const [parisTime, setParisTime] = useState('');
  const [timeDiff, setTimeDiff] = useState('');

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();

      // Heure à La Réunion (UTC+4 toute l'année)
      const reunionTimeStr = now.toLocaleTimeString('fr-FR', {
        timeZone: 'Indian/Reunion',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      // Heure à Paris
      const parisTimeStr = now.toLocaleTimeString('fr-FR', {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      // Calculer le décalage horaire
      const reunionHour = parseInt(reunionTimeStr.split(':')[0]);
      const parisHour = parseInt(parisTimeStr.split(':')[0]);
      let diff = reunionHour - parisHour;
      if (diff < 0) diff += 24;

      setReunionTime(reunionTimeStr);
      setParisTime(parisTimeStr);
      setTimeDiff(diff === 2 ? '+2h (hiver européen)' : '+3h (été européen)');
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Quelle heure est-il à La Réunion ? Décalage horaire et fuseau</title>
        <meta name="description" content="Heure actuelle à La Réunion : UTC+4 toute l'année. Décalage horaire avec la France métropolitaine (+2h ou +3h selon la saison). Explications et conseils pratiques." />
        <meta name="keywords" content="heure réunion, quelle heure réunion, décalage horaire réunion, fuseau horaire réunion, heure locale réunion, heure france réunion" />
        <link rel="canonical" href="https://dineo.re/blog/quelle-heure-est-il-a-la-reunion" />

        {/* Open Graph */}
        <meta property="og:title" content="Quelle heure est-il à La Réunion ? Décalage horaire" />
        <meta property="og:description" content="Heure actuelle à La Réunion et décalage horaire avec la France. UTC+4 toute l'année." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://dineo.re/blog/quelle-heure-est-il-a-la-reunion" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1501139083538-0139583c060f?w=1200&q=80" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quelle heure est-il à La Réunion ? Décalage horaire" />
        <meta name="twitter:description" content="Heure actuelle à La Réunion et décalage horaire avec la France." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1501139083538-0139583c060f?w=1200&q=80" />

        {/* Article structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Quelle heure est-il à La Réunion ? Décalage horaire et fuseau",
            "image": "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=1200&q=80",
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
          <span className="text-gray-900">Quelle heure est-il à La Réunion</span>
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
              src="https://images.unsplash.com/photo-1501139083538-0139583c060f?w=1200&q=80"
              alt="Horloge et décalage horaire"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">Pratique</span>
                <span className="flex items-center text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  3 Décembre 2025
                </span>
                <span className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  6 min
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Quelle heure est-il à La Réunion ?
              </h1>
              <p className="text-xl text-gray-200">
                Décalage horaire, fuseau horaire et tout ce qu'il faut savoir sur l'heure locale réunionnaise
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8 md:p-12">
            {/* Live Clock */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 mb-8 text-white not-prose">
              <div className="text-center">
                <Clock className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-2">Heure actuelle à La Réunion</h2>
                <div className="text-6xl font-bold mb-6 font-mono">{reunionTime}</div>

                <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
                  <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className="font-semibold">La Réunion</span>
                    </div>
                    <div className="text-3xl font-mono font-bold">{reunionTime}</div>
                    <div className="text-sm opacity-90 mt-1">UTC+4 (toute l'année)</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className="font-semibold">Paris (France)</span>
                    </div>
                    <div className="text-3xl font-mono font-bold">{parisTime}</div>
                    <div className="text-sm opacity-90 mt-1">
                      Décalage : {timeDiff}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                <strong>La Réunion se situe dans le fuseau horaire UTC+4</strong>, ce qui signifie qu'elle a 4 heures d'avance sur le temps universel coordonné (UTC). Le décalage horaire avec la France métropolitaine varie selon la saison : <strong>+2 heures en hiver européen</strong> et <strong>+3 heures en été européen</strong> (lorsque la France passe à l'heure d'été). Contrairement à la métropole, La Réunion ne change jamais d'heure et reste sur UTC+4 toute l'année.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Fuseau horaire de La Réunion : UTC+4
              </h2>

              <p className="mb-4">
                La Réunion utilise le <strong>fuseau horaire UTC+4</strong>, également connu sous le nom de "Heure de La Réunion" ou "Reunion Time". Ce fuseau est stable toute l'année : il n'y a <strong>pas de changement d'heure</strong> entre hiver et été.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 my-8 not-prose">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Globe className="w-5 h-5 text-blue-600 mr-2" />
                  Autres territoires utilisant UTC+4
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  La Réunion partage son fuseau horaire avec plusieurs régions et pays :
                </p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>Maurice</strong> (île voisine)</li>
                  <li>• <strong>Seychelles</strong></li>
                  <li>• <strong>Dubaï et Émirats arabes unis</strong></li>
                  <li>• <strong>Géorgie</strong></li>
                  <li>• <strong>Azerbaïdjan</strong></li>
                  <li>• Partie de la <strong>Russie</strong> (Samara)</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Décalage horaire avec la France métropolitaine
              </h2>

              <p className="mb-4">
                Le décalage horaire entre La Réunion et la France métropolitaine n'est pas constant : il varie de <strong>2 à 3 heures</strong> selon la période de l'année, car la France passe à l'heure d'été alors que La Réunion reste sur UTC+4.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-600">
                  <div className="flex items-center mb-3">
                    <Sun className="w-6 h-6 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">En été européen</h4>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Période :</strong> Fin mars à fin octobre</p>
                    <p><strong>Décalage :</strong> +3 heures</p>
                    <p className="text-sm mt-3 bg-white/60 p-3 rounded">
                      Quand il est <strong>12h00</strong> à Paris, il est <strong>15h00</strong> à La Réunion.
                    </p>
                  </div>
                </div>

                <div className="bg-cyan-50 rounded-xl p-6 border-l-4 border-cyan-600">
                  <div className="flex items-center mb-3">
                    <Moon className="w-6 h-6 text-cyan-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">En hiver européen</h4>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Période :</strong> Fin octobre à fin mars</p>
                    <p><strong>Décalage :</strong> +2 heures</p>
                    <p className="text-sm mt-3 bg-white/60 p-3 rounded">
                      Quand il est <strong>12h00</strong> à Paris, il est <strong>14h00</strong> à La Réunion.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Tableau de conversion rapide
              </h3>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-sm border-collapse not-prose">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Paris (hiver)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">La Réunion</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Paris (été)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">La Réunion</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">08h00</td>
                      <td className="border border-gray-300 px-4 py-2 bg-blue-50 font-semibold">10h00</td>
                      <td className="border border-gray-300 px-4 py-2">08h00</td>
                      <td className="border border-gray-300 px-4 py-2 bg-blue-50 font-semibold">11h00</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">12h00</td>
                      <td className="border border-gray-300 px-4 py-2 bg-blue-50 font-semibold">14h00</td>
                      <td className="border border-gray-300 px-4 py-2">12h00</td>
                      <td className="border border-gray-300 px-4 py-2 bg-blue-50 font-semibold">15h00</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">18h00</td>
                      <td className="border border-gray-300 px-4 py-2 bg-blue-50 font-semibold">20h00</td>
                      <td className="border border-gray-300 px-4 py-2">18h00</td>
                      <td className="border border-gray-300 px-4 py-2 bg-blue-50 font-semibold">21h00</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">22h00</td>
                      <td className="border border-gray-300 px-4 py-2 bg-blue-50 font-semibold">00h00 (lendemain)</td>
                      <td className="border border-gray-300 px-4 py-2">22h00</td>
                      <td className="border border-gray-300 px-4 py-2 bg-blue-50 font-semibold">01h00 (lendemain)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Décalage horaire avec d'autres pays
              </h2>

              <div className="bg-gray-50 rounded-xl p-6 my-8 not-prose">
                <h4 className="font-semibold text-gray-900 mb-4">Décalage avec les grandes villes mondiales</h4>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700 text-sm">
                  <div>
                    <p className="font-medium mb-1">🇫🇷 Paris (hiver / été)</p>
                    <p>+2h / +3h</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">🇬🇧 Londres (hiver / été)</p>
                    <p>+3h / +4h</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">🇺🇸 New York (hiver / été)</p>
                    <p>+9h / +9h</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">🇨🇦 Montréal (hiver / été)</p>
                    <p>+9h / +9h</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">🇯🇵 Tokyo</p>
                    <p>-5h</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">🇦🇺 Sydney (hiver / été)</p>
                    <p>-7h / -6h</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">🇲🇺 Maurice</p>
                    <p>Même heure (UTC+4)</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">🇸🇨 Seychelles</p>
                    <p>Même heure (UTC+4)</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">🇿🇦 Afrique du Sud (hiver / été)</p>
                    <p>-2h / -2h</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">🇦🇪 Dubaï</p>
                    <p>Même heure (UTC+4)</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Conséquences pratiques du décalage horaire
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Pour les appels et visioconférences
              </h3>

              <p className="mb-4">
                Le décalage horaire entre La Réunion et la France métropolitaine a un <strong>impact modéré sur les communications</strong>. Avec seulement 2 à 3 heures de décalage, il reste relativement facile de trouver des créneaux communs pour les appels professionnels ou familiaux.
              </p>

              <div className="bg-green-50 rounded-xl p-6 my-8 not-prose">
                <h4 className="font-semibold text-gray-900 mb-3">Meilleurs créneaux pour appeler</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div>
                    <p className="font-medium">Depuis La Réunion vers la France</p>
                    <p>• <strong>Matin à La Réunion (8h-11h)</strong> = Début de matinée en France (6h-9h en hiver, 5h-8h en été) ⚠️ Tôt</p>
                    <p>• <strong>Midi à La Réunion (12h-14h)</strong> = Matinée en France (10h-12h en hiver, 9h-11h en été) ✓ Idéal</p>
                    <p>• <strong>Après-midi à La Réunion (14h-17h)</strong> = Midi/début d'après-midi en France ✓ Parfait</p>
                    <p>• <strong>Soirée à La Réunion (18h-21h)</strong> = Après-midi en France (16h-19h en hiver, 15h-18h en été) ✓ Bon</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Pour les vols et voyages
              </h3>

              <p className="mb-4">
                Lors d'un vol entre Paris et La Réunion, vous devez <strong>avancer votre montre de 2 ou 3 heures</strong> selon la saison. Le vol dure environ 11 heures, et avec le décalage horaire, vous arrivez le lendemain matin heure locale.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 my-8 not-prose">
                <div className="flex items-start">
                  <Plane className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Exemple de vol Paris → La Réunion</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      <strong>Départ :</strong> Paris 23h00 (lundi soir)<br />
                      <strong>Arrivée :</strong> La Réunion 12h00 (mardi midi) - heure locale<br />
                      <strong>Durée réelle du vol :</strong> 11 heures<br />
                      <strong>Explication :</strong> 11h de vol + 2h de décalage (hiver) = vous arrivez 13h après le départ heure de Paris
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>Conseil :</strong> Réglez votre montre sur l'heure de La Réunion dès l'embarquement pour faciliter l'adaptation au décalage horaire.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Jet lag et adaptation au décalage
              </h3>

              <p className="mb-4">
                Avec seulement 2 à 3 heures de décalage, le <strong>jet lag est généralement léger</strong> et se résorbe rapidement (1-2 jours maximum). C'est beaucoup plus facile qu'un voyage vers l'Asie ou les Amériques.
              </p>

              <div className="bg-yellow-50 rounded-xl p-6 my-8 not-prose">
                <h4 className="font-semibold text-gray-900 mb-3">Conseils pour s'adapter rapidement</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• <strong>Pendant le vol :</strong> Dormez si vous arrivez le matin, restez éveillé si vous arrivez le soir</li>
                  <li>• <strong>Premier jour :</strong> Forcez-vous à rester éveillé jusqu'à 21h-22h heure locale, même si vous êtes fatigué</li>
                  <li>• <strong>Exposition au soleil :</strong> Sortez dès l'arrivée pour profiter de la lumière naturelle, qui aide à recaler votre horloge biologique</li>
                  <li>• <strong>Hydratation :</strong> Buvez beaucoup d'eau pendant et après le vol</li>
                  <li>• <strong>Évitez les siestes longues :</strong> Limitez-vous à 20-30 minutes si vraiment nécessaire</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Lever et coucher du soleil à La Réunion
              </h2>

              <p className="mb-4">
                Les horaires de lever et coucher du soleil varient peu à La Réunion en raison de sa <strong>proximité avec le tropique du Capricorne</strong>. Les journées sont relativement constantes tout au long de l'année.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-600">
                  <div className="flex items-center mb-3">
                    <Sun className="w-6 h-6 text-orange-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">Été austral (nov-mars)</h4>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Lever du soleil :</strong> 5h30 - 6h00</p>
                    <p><strong>Coucher du soleil :</strong> 18h30 - 19h00</p>
                    <p><strong>Durée du jour :</strong> ~13 heures</p>
                  </div>
                </div>

                <div className="bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-600">
                  <div className="flex items-center mb-3">
                    <Moon className="w-6 h-6 text-indigo-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">Hiver austral (mai-sept)</h4>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Lever du soleil :</strong> 6h30 - 7h00</p>
                    <p><strong>Coucher du soleil :</strong> 17h30 - 18h00</p>
                    <p><strong>Durée du jour :</strong> ~11 heures</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-lg my-8 not-prose">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Sun className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Profitez des levers de soleil spectaculaires
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Avec le décalage horaire modéré, il est facile de se lever tôt pour assister aux magnifiques levers de soleil sur le volcan ou au Maïdo. Nos randonnées matinales vous emmènent aux plus beaux points de vue de l'île.
                    </p>
                    <Link to="/randonnees-reunion" className="inline-flex items-center bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Voir les randonnées guidées
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </Link>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Questions fréquentes
              </h2>

              <div className="space-y-6 my-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">La Réunion change-t-elle d'heure en été/hiver ?</h4>
                  <p className="text-gray-700 text-sm">
                    <strong>Non.</strong> La Réunion reste sur UTC+4 toute l'année. Il n'y a pas de changement d'heure été/hiver comme en France métropolitaine.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Quel est le meilleur moment pour appeler la France depuis La Réunion ?</h4>
                  <p className="text-gray-700 text-sm">
                    Entre <strong>12h et 17h heure de La Réunion</strong>, ce qui correspond à 10h-15h en France (hiver) ou 9h-14h (été). C'est le créneau où tout le monde est disponible.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Le décalage horaire est-il difficile à supporter ?</h4>
                  <p className="text-gray-700 text-sm">
                    <strong>Non, le jet lag est très léger</strong> avec seulement 2-3h de décalage. La plupart des voyageurs s'adaptent en 1-2 jours sans problème majeur.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Mon téléphone va-t-il se mettre à l'heure automatiquement ?</h4>
                  <p className="text-gray-700 text-sm">
                    <strong>Oui</strong>, si vous avez activé le réglage automatique de l'heure sur votre smartphone. Dès l'atterrissage, votre téléphone se connectera au réseau réunionnais et se mettra à l'heure locale.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 my-12 not-prose text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Prêt à découvrir La Réunion ?
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Avec un décalage horaire modéré, La Réunion est une destination facile d'accès qui ne vous fatiguera pas avant même le début de votre voyage. Explorez l'île intense sans contrainte !
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Découvrir toutes les activités
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Link>
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
                Experts de La Réunion, nous vous aidons à préparer votre voyage avec toutes les informations pratiques.
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Poursuivez votre lecture</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/blog/voyage-reunion-mai" className="group">
              <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80"
                  alt="La Réunion en mai"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Voyager à La Réunion en mai
                  </h4>
                  <p className="text-sm text-gray-600">
                    Conditions idéales, météo parfaite : découvrez pourquoi mai est excellent
                  </p>
                </div>
              </div>
            </Link>

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
                    Saison chaude et humide : tout savoir pour profiter de janvier
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

export default BlogPostReunionTime;
