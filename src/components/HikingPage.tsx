import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, MapPin, Clock, TrendingUp, Mountain } from 'lucide-react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import Header from './Header';
import Footer from './Footer';
import { Activity } from '../types/Activity';

const HikingPage: React.FC = () => {
  // Filtrage automatique des activités de randonnée
  const hikingActivities = activities.filter(activity =>
    activity.sous_categorie.toLowerCase().includes('randonnée')
  );

  const handleBookActivity = (activity: Activity) => {
    window.open(activity.url, '_blank');
  };

  const faqs = [
    {
      question: "Quelles sont les meilleures randonnées à faire à La Réunion ?",
      answer: "Les randonnées incontournables incluent le Piton de la Fournaise (volcan actif), le Piton des Neiges (point culminant), le cirque de Mafate (isolé et sauvage), la cascade de Trou de Fer, et le Maïdo avec vue sur Mafate. Chaque randonnée offre des paysages uniques entre volcans, cirques, forêts tropicales et cascades spectaculaires."
    },
    {
      question: "Quel niveau faut-il pour randonner à La Réunion ?",
      answer: "La Réunion propose des randonnées pour tous les niveaux. Les sentiers faciles comme le Bassin La Paix conviennent aux familles. Les parcours intermédiaires (Piton de la Fournaise, Maïdo) demandent une condition correcte. Les randonnées sportives (Piton des Neiges, traversée de Mafate) nécessitent une excellente condition physique et de l'expérience en montagne."
    },
    {
      question: "Combien coûtent les randonnées guidées à La Réunion ?",
      answer: "Les randonnées guidées débutent à 55-60€ pour une demi-journée (Fournaise, cascades), 70-90€ pour une journée complète (cirques, sommets), et 150-200€ pour des raids de 2-3 jours avec nuits en gîte. Ces tarifs incluent l'encadrement professionnel, la sécurité et souvent le pique-nique. Les guides apportent une réelle plus-value sur la connaissance de la faune, flore et géologie."
    },
    {
      question: "Quelle est la meilleure période pour randonner à La Réunion ?",
      answer: "La saison sèche de mai à octobre offre les meilleures conditions avec temps stable, ciel dégagé et températures agréables (20-25°C). Les matinées sont idéales pour éviter les nuages qui arrivent l'après-midi en montagne. Évitez janvier-mars (saison des pluies intenses, cyclones possibles). L'hiver austral (juin-août) apporte de la fraîcheur en altitude mais une visibilité parfaite."
    },
    {
      question: "Faut-il un guide pour randonner à La Réunion ?",
      answer: "Un guide n'est pas obligatoire sur les sentiers balisés, mais fortement recommandé pour certaines randonnées : cirque de Mafate (orientation complexe), Piton des Neiges de nuit (pour le lever de soleil), canyons et sites isolés. Les guides diplômés connaissent la météo locale, les passages délicats, et enrichissent la randonnée de commentaires naturalistes sur la faune et flore endémiques."
    },
    {
      question: "Peut-on randonner avec des enfants à La Réunion ?",
      answer: "Oui, de nombreuses randonnées familiales existent : Bassin La Paix (facile, 1h), Cascade Biberon (courte et ludique), sentier du Maïdo (adapté dès 6 ans). Pour les plus grands (10-12 ans sportifs), le Piton de la Fournaise est accessible. Privilégiez les matinées (moins chaud), prévoyez eau en quantité, encas et crème solaire. Les guides proposent des sorties spéciales familles avec rythme adapté."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Meilleures randonnées à La Réunion | Trek & hiking 2026</title>
        <meta name="description" content="Découvrez les meilleures randonnées à La Réunion : Piton de la Fournaise, cirque de Mafate, Piton des Neiges. Guides experts, tous niveaux. Réservez en ligne." />
        <meta name="keywords" content="randonnée réunion, trek réunion, piton de la fournaise, mafate, piton des neiges, randonnée guidée réunion, trek volcan réunion" />
        <link rel="canonical" href="https://dineo.re/randonnees-reunion" />
          <meta property="og:title" content="Meilleures randonnées à La Réunion | Trek & hiking 2026" />
          <meta property="og:description" content="Découvrez les meilleures randonnées à La Réunion : Piton de la Fournaise, cirque de Mafate, Piton des Neiges. Guides experts, tous niveaux. Réservez en ligne." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dineo.re/randonnees-reunion" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <span className="text-gray-900">Randonnées</span>
        </nav>

        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux activités
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-2xl text-white p-8 md:p-12 mb-12">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⭐ {hikingActivities.length} randonnées disponibles
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Les meilleures randonnées à La Réunion
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Explorez les trésors de l'île intense : volcans actifs, cirques classés UNESCO, cascades spectaculaires et forêts primaires. Randonnées guidées pour tous les niveaux.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                <Mountain className="w-5 h-5 mr-2" />
                <span className="font-semibold">Volcans & Cirques</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-semibold">Sites UNESCO</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span className="font-semibold">Tous niveaux</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{hikingActivities.length}</div>
            <div className="text-gray-600">Randonnées disponibles</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">3</div>
            <div className="text-gray-600">Cirques classés UNESCO</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">55€</div>
            <div className="text-gray-600">À partir de</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-cyan-600 mb-2">12 mois</div>
            <div className="text-gray-600">Praticable toute l'année</div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Navigation rapide</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href="#activites" className="text-center p-3 rounded-lg border-2 border-gray-200 hover:border-green-600 hover:bg-green-50 transition-all">
              <div className="text-2xl mb-1">🥾</div>
              <div className="text-sm font-medium text-gray-900">Les randonnées</div>
            </a>
            <a href="#avantages" className="text-center p-3 rounded-lg border-2 border-gray-200 hover:border-green-600 hover:bg-green-50 transition-all">
              <div className="text-2xl mb-1">⭐</div>
              <div className="text-sm font-medium text-gray-900">Avantages</div>
            </a>
            <a href="#guide" className="text-center p-3 rounded-lg border-2 border-gray-200 hover:border-green-600 hover:bg-green-50 transition-all">
              <div className="text-2xl mb-1">📖</div>
              <div className="text-sm font-medium text-gray-900">Tout savoir</div>
            </a>
            <a href="#faq" className="text-center p-3 rounded-lg border-2 border-gray-200 hover:border-green-600 hover:bg-green-50 transition-all">
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
                Randonnées à La Réunion
              </h2>
              <p className="text-gray-600 text-lg">
                {hikingActivities.length} randonnées guidées disponibles
              </p>
            </div>
          </div>

          {hikingActivities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {hikingActivities.map((activity, index) => (
                <ActivityCard
                  key={index}
                  activity={activity}
                  onBook={handleBookActivity}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-md">
              <p className="text-gray-500 text-lg">Chargement des randonnées...</p>
            </div>
          )}
        </section>

        {/* Advantages Section */}
        <section id="avantages" className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Pourquoi réserver vos randonnées avec Dineo ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Guides experts diplômés</h3>
              <p className="text-gray-700">
                Guides de haute montagne diplômés d'État, connaissant parfaitement les sentiers, la météo et les sites naturels de l'île.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tous niveaux</h3>
              <p className="text-gray-700">
                Des balades familiales faciles aux treks sportifs en haute montagne. Chaque randonneur trouve son parcours idéal.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Réservation flexible</h3>
              <p className="text-gray-700">
                Annulation gratuite jusqu'à 48h avant. Idéal avec la météo changeante de La Réunion. Report possible selon disponibilités.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Pourquoi choisir une randonnée guidée à La Réunion ?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🗺️", title: "Orientation sécurisée", description: "Évitez de vous perdre dans les cirques et forêts denses" },
              { icon: "🌿", title: "Découverte naturaliste", description: "Apprenez sur la faune et flore endémiques uniques au monde" },
              { icon: "📸", title: "Meilleurs spots photo", description: "Les guides connaissent les plus beaux points de vue" },
              { icon: "⛑️", title: "Sécurité maximale", description: "Gestion des risques météo, secours et premiers soins" },
              { icon: "🥾", title: "Matériel fourni", description: "Bâtons de randonnée et équipement de sécurité inclus" },
              { icon: "🤝", title: "Petits groupes", description: "Maximum 12 personnes pour un encadrement optimal" }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Complete Guide */}
        <section id="guide" className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Tout savoir sur les randonnées à La Réunion
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              La <strong>randonnée à La Réunion</strong> est bien plus qu'une simple marche en montagne. C'est une immersion totale dans des paysages volcaniques spectaculaires, des forêts primaires luxuriantes et des cirques classés au patrimoine mondial de l'UNESCO. L'île intense offre plus de 1000 km de sentiers balisés pour tous les niveaux.
            </p>

            <div className="space-y-8 mt-8">
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Piton de la Fournaise : randonner sur un volcan actif
                </h3>
                <p className="mb-4">
                  Le <strong>Piton de la Fournaise</strong> est l'un des volcans les plus actifs au monde et la randonnée la plus emblématique de La Réunion. L'approche du cratère traverse la Plaine des Sables, un paysage lunaire de cendres volcaniques aux couleurs ocre et rouge. Cette randonnée de 5h aller-retour (niveau modéré) démarre du parking de Pas de Bellecombe à 2300m d'altitude.
                </p>
                <p className="mb-4">
                  Le sentier descend dans l'enclos Fouqué par un escalier aménagé, puis traverse la lave solidifiée jusqu'au cratère Dolomieu. Les paysages changent à chaque pas : coulées de lave récentes aux reflets argentés, fumerolles témoignant de l'activité souterraine, cônes volcaniques secondaires. Par temps clair, la vue depuis le sommet à 2632m embrasse toute l'île.
                </p>
                <p>
                  Les <strong>randonnées guidées au Fournaise</strong> apportent une réelle plus-value : les guides volcanologues expliquent l'histoire éruptive, les différentes coulées, et adaptent l'itinéraire selon la météo qui change très vite en altitude. Ils connaissent les meilleurs horaires (tôt le matin avant les nuages de l'après-midi) et les spots photos incontournables.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Cirque de Mafate : le paradis des randonneurs
                </h3>
                <p className="mb-4">
                  Le <strong>cirque de Mafate</strong> est unique en France : aucune route ne le dessert, seuls des sentiers de randonnée permettent d'y accéder. Ce cirque montagneux classé UNESCO abrite 800 habitants répartis dans 9 hameaux isolés (La Nouvelle, Marla, Cayenne...). La <strong>randonnée dans Mafate</strong> offre une expérience d'immersion totale dans une nature préservée.
                </p>
                <p className="mb-4">
                  Les randonnées à la journée depuis le Col des Bœufs ou le Maïdo permettent de découvrir les villages de Marla ou La Nouvelle (6-7h aller-retour, sportif). Pour une expérience complète, optez pour un trek de 2-3 jours avec nuits en gîte de montagne. Vous traverserez plusieurs hameaux, découvrirez l'hospitalité des Mafatais, et profiterez de panoramas exceptionnels depuis les cols.
                </p>
                <p>
                  L'orientation dans Mafate est complexe avec de nombreux embranchements. Un <strong>guide de randonnée Mafate</strong> est fortement recommandé pour les premières fois. Ils gèrent la logistique des gîtes, connaissent les passages délicats (échelles, passages étroits) et racontent l'histoire fascinante de ce cirque refuge des esclaves marrons.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Piton des Neiges : le toit de l'océan Indien
                </h3>
                <p className="mb-4">
                  À 3070m, le <strong>Piton des Neiges</strong> est le point culminant de l'océan Indien. Cette randonnée mythique se fait généralement en 2 jours avec nuit au gîte de la Caverne Dufour (2h avant le sommet), permettant d'assister au lever de soleil depuis le sommet. Le spectacle est inoubliable : les trois cirques en contrebas, la mer au loin, et parfois la Plaine des Sables et le Piton de la Fournaise visibles.
                </p>
                <p className="mb-4">
                  Le départ se fait depuis Cilaos (1200m) pour une montée progressive de 1900m de dénivelé répartie sur 8-9h. Le sentier traverse différents écosystèmes : forêt de tamarins, puis végétation d'altitude rabougrie, enfin zone minérale près du sommet. Les derniers 100m sont les plus raides avec un passage rocheux nécessitant l'usage des mains.
                </p>
                <p>
                  La <strong>randonnée guidée Piton des Neiges</strong> garantit la sécurité sur ce parcours exigeant où la météo peut changer brutalement. Les guides gèrent les réservations au gîte (souvent complet), fournissent lampes frontales pour le départ nocturne (3h du matin), et adaptent le rythme au groupe. L'effort est largement récompensé par la fierté d'atteindre ce sommet mythique.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Cirque de Cilaos : canyon et forêt primaire
                </h3>
                <p className="mb-4">
                  Le <strong>cirque de Cilaos</strong> accessible par la route aux 400 virages offre de superbes randonnées pour tous les niveaux. Le sentier des Sources (facile, 2h) longe la rivière avec ses bassins d'eau chaude naturelle. La Roche Merveilleuse (modéré, 3h) offre un panorama exceptionnel sur le cirque. Pour les sportifs, le Dimitile (difficile, 6h) monte jusqu'à 2000m avec vue plongeante.
                </p>
                <p className="mb-4">
                  La forêt de Bébour-Bélouve à proximité abrite une forêt primaire de tamarins centenaires couverts de mousses et lichens. Le Trou de Fer est un canyon de 300m de profondeur où se jettent 6 cascades simultanément - un spectacle naturel unique accessible par le sentier de la plaine des Lianes (sportif, 5h).
                </p>
                <p>
                  Les <strong>guides de Cilaos</strong> connaissent les sentiers secondaires moins fréquentés, les meilleurs horaires pour éviter les nuages, et les histoires locales de ce cirque autrefois refuge puis colonie thermale. Ils adaptent les randonnées selon votre niveau et vos envies (cascades, panoramas, botanique).
                </p>
              </div>

              <div className="bg-cyan-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Cirque de Salazie : cascades et villages créoles
                </h3>
                <p className="mb-4">
                  Le <strong>cirque de Salazie</strong> est le plus verdoyant et humide des trois cirques. Le village d'Hell-Bourg, classé plus beau village de France, est le point de départ de nombreuses randonnées familiales. Le Belvédère, le sentier des Fleurs Jaunes, ou la cascade Blanche sont accessibles à tous et offrent de beaux points de vue sur le cirque luxuriant.
                </p>
                <p>
                  Pour les plus sportifs, la randonnée jusqu'au Trou de Fer par le gîte de Bélouve (8h aller-retour) traverse la forêt primaire avant d'atteindre le belvédère surplombant ce canyon spectaculaire. Le Piton d'Anchaing (6h) offre une vue panoramique sur Salazie et ses cascades dont le Voile de la Mariée visible depuis la route.
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Randonnées côtières et littorales
                </h3>
                <p className="mb-4">
                  La Réunion ne se résume pas à ses montagnes. Les <strong>randonnées côtières</strong> dans le sud sauvage offrent des paysages contrastés entre falaises basaltiques et plages de sable noir. Le sentier du littoral de Saint-Philippe traverse coulées de lave, criques secrètes et points de vue sur l'océan.
                </p>
                <p>
                  La pointe au sel, la Grande Chaloupe, ou encore le sentier de la Roche écrite dans les hauts de Saint-Denis proposent des alternatives aux randonnées d'altitude, parfaites quand le temps est bouché en montagne. Ces sentiers présentent moins de dénivelé mais nécessitent protection solaire et eau en quantité (chaleur, peu d'ombre).
                </p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Matériel et équipement de randonnée
                </h3>
                <p className="mb-4">
                  Pour randonner à La Réunion, prévoyez : chaussures de randonnée montantes (chevilles protégées), sac à dos 25-30L avec poche à eau, vêtements techniques respirants en couches (le système 3 couches), k-way imperméable (pluies fréquentes en altitude), casquette et lunettes de soleil, crème solaire SPF50+, en-cas énergétiques.
                </p>
                <p className="mb-4">
                  Les <strong>guides fournissent</strong> généralement : bâtons de randonnée télescopiques, trousse de premiers secours, téléphone satellite pour les zones isolées, lampes frontales pour les départs nocturnes. Pour les treks de plusieurs jours, ils gèrent la logistique complète des gîtes, repas et transferts.
                </p>
                <p>
                  En altitude (Fournaise, Piton des Neiges), les températures descendent à 5-10°C tôt le matin même en été. Prévoyez polaire et veste chaude. La météo change très vite : partez tôt (6-7h) pour profiter du beau temps matinal avant que les nuages n'arrivent l'après-midi.
                </p>
              </div>

              <div className="bg-pink-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Randonnées familiales avec enfants
                </h3>
                <p className="mb-4">
                  La Réunion offre de nombreuses <strong>randonnées familiales</strong> adaptées aux enfants. Le Bassin La Paix (1h, très facile) mène à une cascade et un bassin pour se baigner. La Cascade Biberon à Salazie (45min) est courte et ludique. Le sentier botanique du Maïdo (1h30) découvre la forêt de Cryptomérias avec panneaux pédagogiques.
                </p>
                <p className="mb-4">
                  Pour les enfants plus grands (8-10 ans sportifs), le Piton de la Fournaise est faisable en adaptant le rythme et en prévoyant des pauses fréquentes. Les guides spécialisés familles utilisent une approche pédagogique ludique (jeux nature, chasse au trésor botanique) maintenant l'attention des plus jeunes.
                </p>
                <p>
                  Avec des enfants, privilégiez les randonnées courtes (2-3h max), avec un objectif motivant (cascade, bassin, point de vue), et prévoyez beaucoup d'eau, encas et jeux pour les pauses. Les matinées sont préférables (moins chaud). Évitez les sentiers avec passages aériens ou zones exposées.
                </p>
              </div>

              <div className="bg-teal-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Sécurité et respect de l'environnement
                </h3>
                <p className="mb-4">
                  La sécurité en randonnée à La Réunion nécessite vigilance et préparation. Consultez la météo avant de partir (site Météo France Réunion), prévenez votre hébergement de votre itinéraire, ne partez jamais seul sur les sentiers isolés. En cas d'orage en altitude, descendez immédiatement (risque de foudre sur les crêtes).
                </p>
                <p className="mb-4">
                  Le <strong>respect de l'environnement</strong> est fondamental dans ces espaces naturels exceptionnels classés UNESCO. Restez sur les sentiers balisés (érosion), ne cueillez rien (flore endémique protégée), ne dérangez pas la faune (oiseaux nicheurs), remportez tous vos déchets. Les espèces invasives menacent la biodiversité unique de l'île : nettoyez vos chaussures entre randonnées.
                </p>
                <p>
                  Les guides diplômés sont formés aux premiers secours et aux évacuations en montagne. Ils connaissent les refuges d'urgence, ont des contacts avec le PGHM (Peloton de Gendarmerie de Haute Montagne), et savent gérer les situations délicates. Cette expertise justifie largement le coût d'une randonnée guidée sur les parcours exigeants.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                En résumé : Quelle randonnée choisir à La Réunion ?
              </h4>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <div className="text-2xl mr-3">👨‍👩‍👧</div>
                  <div>
                    <span className="font-semibold">En famille :</span> Bassin La Paix, Cascade Biberon, sentier du Maïdo (faciles, 1-2h)
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🥾</div>
                  <div>
                    <span className="font-semibold">Première fois :</span> Piton de la Fournaise guidé, idéal pour découvrir la randonnée volcanique
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">💪</div>
                  <div>
                    <span className="font-semibold">Sportifs :</span> Piton des Neiges (2j), traversée Mafate (3j), Trou de Fer
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">📸</div>
                  <div>
                    <span className="font-semibold">Photographes :</span> Lever de soleil Piton des Neiges, Plaine des Sables, cirque de Mafate
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🌿</div>
                  <div>
                    <span className="font-semibold">Nature lovers :</span> Forêt de Bébour, Trou de Fer, cirque de Salazie (cascades)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur les randonnées à La Réunion
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                  <span className="text-green-600 mr-2">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-6">
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

export default HikingPage;
