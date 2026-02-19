import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, MapPin, Mountain, Droplets, TreePine } from 'lucide-react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import Header from './Header';
import Footer from './Footer';
import { Activity } from '../types/Activity';

const CilaosPage: React.FC = () => {
  // Filtrage automatique des activités à Cilaos
  const cilaosActivities = activities.filter(activity => 
    activity.lieu.toLowerCase().includes('cilaos') ||
    activity.lieu.toLowerCase().includes('cirque de cilaos')
  );

  const handleBookActivity = (activity: Activity) => {
    window.open(activity.url, '_blank');
  };

  const faqs = [
    {
      question: "Quelles sont les activités incontournables à Cilaos ?",
      answer: "Cilaos offre le mythique canyon de Fleurs Jaunes, l'un des plus beaux de La Réunion avec rappels spectaculaires et vasques cristallines. Le cirque propose aussi des randonnées vers le Piton des Neiges, des sources thermales naturelles et la découverte de l'artisanat local (broderie, lentilles)."
    },
    {
      question: "Le canyoning de Fleurs Jaunes est-il accessible aux débutants ?",
      answer: "Le canyon de Fleurs Jaunes s'adresse aux sportifs avec une bonne condition physique. Les rappels atteignent 18 mètres et nécessitent de ne pas craindre le vide. Cependant, les sauts sont non obligatoires et les guides adaptent le parcours. Une première expérience en canyoning est recommandée."
    },
    {
      question: "Comment accéder à Cilaos depuis la côte ?",
      answer: "L'accès à Cilaos se fait par la célèbre route aux 400 virages depuis Saint-Louis. Ce trajet spectaculaire de 45 minutes traverse des paysages de montagne époustouflants mais nécessite une conduite prudente. La route est bien entretenue mais sinueuse."
    },
    {
      question: "Quelle est la meilleure période pour visiter Cilaos ?",
      answer: "La saison sèche (mai à octobre) est idéale pour le canyoning et les randonnées avec moins de risques de crues. L'hiver austral offre des températures fraîches agréables en altitude. Évitez la saison des pluies (décembre-avril) pour les activités en rivière."
    },
    {
      question: "Que faire d'autre à Cilaos en dehors du canyoning ?",
      answer: "Cilaos propose les sources thermales naturelles, la randonnée vers le Piton des Neiges (point culminant de l'océan Indien), la découverte de la broderie traditionnelle, la dégustation du vin de Cilaos et des lentilles locales. Le village thermal offre un cadre authentique."
    },
    {
      question: "Faut-il une condition physique particulière pour les activités à Cilaos ?",
      answer: "L'altitude (1200m) et le relief montagneux demandent une bonne condition physique. Le canyoning nécessite de savoir nager et d'être à l'aise avec le vide. Les randonnées varient de faciles (village) à très difficiles (Piton des Neiges). Choisissez selon votre niveau."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Que faire à Cilaos à La Réunion ? | Canyoning et Randonnées</title>
        <meta name="description" content="Découvrez les activités à Cilaos : canyon Fleurs Jaunes, randonnées Piton des Neiges, sources thermales. Toutes les activités du cirque montagnard de La Réunion." />
        <meta name="keywords" content="que faire cilaos réunion, canyoning cilaos, fleurs jaunes cilaos, randonnée cilaos, piton des neiges, cirque cilaos activités" />
        <link rel="canonical" href="https://dineo.re/que-faire-cilaos-reunion" />
          <meta property="og:title" content="Que faire à Cilaos à La Réunion ? | Canyoning et Randonnées" />
          <meta property="og:description" content="Découvrez les activités à Cilaos : canyon Fleurs Jaunes, randonnées Piton des Neiges, sources thermales. Toutes les activités du cirque montagnard de La Réunion." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dineo.re/que-faire-cilaos-reunion" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <span className="text-gray-900">Cilaos</span>
        </nav>

        <Link to="/" className="inline-flex items-components text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux activités
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Que faire à Cilaos à La Réunion ?
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-green-100">
              Découvrez {cilaosActivities.length} activités dans le cirque montagnard le plus authentique
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Mountain className="w-5 h-5 mr-2" />
                <span>Cirque UNESCO</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Droplets className="w-5 h-5 mr-2" />
                <span>Canyoning mythique</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <TreePine className="w-5 h-5 mr-2" />
                <span>Randonnées d'altitude</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        {cilaosActivities.length > 0 ? (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Activités à Cilaos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cilaosActivities.map((activity, index) => (
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
              Aucune activité spécifique à Cilaos pour le moment.
            </p>
            <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
              Voir toutes les activités à La Réunion
            </Link>
          </div>
        )}

        {/* SEO Content */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Que faire à Cilaos à La Réunion ?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-gray-600 mb-6">
              <strong>Cilaos</strong> est l'un des trois cirques classés UNESCO de La Réunion, réputé pour ses paysages montagnards spectaculaires et ses activités d'aventure. Perché à 1200 mètres d'altitude, ce cirque authentique offre un terrain de jeu exceptionnel pour les amateurs de sensations fortes et de nature préservée.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Le canyon de Fleurs Jaunes : joyau du canyoning réunionnais
            </h3>
            <p className="mb-4">
              Le <strong>canyoning à Cilaos</strong> atteint son apogée avec le mythique canyon de Fleurs Jaunes, considéré comme l'un des plus beaux parcours de l'océan Indien. Cette descente de 5 heures combine rappels spectaculaires jusqu'à 18 mètres, toboggans naturels et sauts dans des vasques aux eaux cristallines.
            </p>
            <p className="mb-6">
              Les <strong>activités à Cilaos</strong> incluent cette expérience unique qui traverse des paysages encaissés au cœur du cirque. L'équipement complet est fourni (combinaison, casque, baudrier, descendeur) et l'encadrement par des guides diplômés garantit sécurité et découverte optimale. Les sauts restent non obligatoires, permettant à chacun de progresser selon son niveau de confort.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Randonnées d'exception vers les sommets
            </h3>
            <p className="mb-4">
              <strong>Que faire à Cilaos</strong> pour les amateurs de randonnée ? Le cirque constitue le point de départ privilégié vers le Piton des Neiges, point culminant de l'océan Indien à 3070 mètres. Cette ascension mythique, généralement réalisée en 2 jours avec nuit au gîte de la Caverne Dufour, révèle des panoramas à 360° sur toute l'île.
            </p>
            <p className="mb-6">
              Les sentiers de Cilaos offrent aussi des randonnées plus accessibles : le tour du cirque, la cascade de Bras Rouge, ou encore les sources chaudes naturelles. Ces parcours révèlent la diversité des paysages cilaosiens, des forêts de cryptomérias aux remparts vertigineux, en passant par les îlets traditionnels perchés sur les pentes.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Thermalisme et bien-être en altitude
            </h3>
            <p className="mb-4">
              Les <strong>activités de détente à Cilaos</strong> incluent la découverte des sources thermales naturelles, vestige de l'activité volcanique ancienne. Ces eaux chaudes riches en minéraux jaillissent à 35°C et possèdent des vertus thérapeutiques reconnues, particulièrement pour les affections rhumatismales et dermatologiques.
            </p>
            <p className="mb-6">
              Le centre thermal de Cilaos propose soins et cures dans un cadre montagnard exceptionnel. Cette approche du bien-être, combinée à l'air pur d'altitude et aux paysages apaisants, crée une expérience de ressourcement unique. Les promenades digestives dans le village thermal complètent parfaitement les soins.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Artisanat et gastronomie d'altitude
            </h3>
            <p className="mb-4">
              <strong>Visiter Cilaos</strong> révèle un patrimoine artisanal unique avec la broderie traditionnelle, art transmis depuis le 19ème siècle. Les brodeuses cilaosaises perpétuent cette tradition délicate, créant nappes, vêtements et objets décoratifs aux motifs floraux caractéristiques. Les ateliers ouverts permettent de découvrir ce savoir-faire exceptionnel.
            </p>
            <p className="mb-6">
              La gastronomie cilaosienne se distingue par ses lentilles cultivées en altitude, réputées dans tout l'océan Indien pour leur qualité. Le vin de Cilaos, seul vignoble de l'hémisphère sud à cette altitude, produit des cuvées originales dans un terroir volcanique unique. Ces spécialités se dégustent dans les restaurants du village thermal.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              La route aux 400 virages : spectacle en soi
            </h3>
            <p className="mb-4">
              L'accès à Cilaos constitue déjà une aventure avec la célèbre route aux 400 virages depuis Saint-Louis. Ce trajet spectaculaire de 45 minutes traverse des paysages de montagne époustouflants : gorges profondes, cascades vertigineuses, végétation tropicale puis tempérée selon l'altitude.
            </p>
            <p className="mb-6">
              Cette route d'ingénierie remarquable, taillée dans la roche volcanique, offre des points de vue exceptionnels sur les remparts du cirque. Les nombreux belvédères permettent d'admirer l'architecture géologique unique de Cilaos, formé par l'effondrement d'anciens volcans. Le trajet devient ainsi partie intégrante de l'expérience cilaosienne.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Climat et spécificités d'altitude
            </h3>
            <p className="mb-4">
              Les <strong>activités à faire à Cilaos</strong> bénéficient d'un climat d'altitude rafraîchissant, avec des températures moyennes de 5 à 10°C inférieures au littoral. Cette fraîcheur naturelle rend les efforts physiques plus agréables et offre un contraste saisissant avec la chaleur tropicale de la côte.
            </p>
            <p className="mb-6">
              L'altitude influence aussi la végétation : forêts de cryptomérias, fougères arborescentes et plantes endémiques créent des paysages uniques. Cette biodiversité d'altitude, différente du littoral, enrichit les découvertes botaniques lors des randonnées et sorties canyoning dans les gorges préservées.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Conseils pratiques pour votre séjour à Cilaos
            </h3>
            <p className="mb-4">
              Pour optimiser vos <strong>activités à Cilaos à La Réunion</strong>, prévoyez des vêtements chauds car les températures chutent rapidement avec l'altitude, surtout le matin et le soir. Une veste imperméable est indispensable car le cirque peut être arrosé même quand le littoral reste sec.
            </p>
            <p className="mb-6">
              Réservez vos activités canyoning à l'avance, particulièrement en saison sèche quand les conditions sont optimales. Le village thermal propose hébergements, restaurants et commerces pour un séjour complet. Comptez au minimum 2 jours pour découvrir Cilaos sans précipitation et profiter de l'atmosphère montagnarde unique.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Week-end type à Cilaos
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Jour 1 - Aventure</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Matin : Canyon Fleurs Jaunes (5h)</li>
                    <li>• Après-midi : Repos et découverte village</li>
                    <li>• Soir : Dîner spécialités locales</li>
                    <li>• Nuit : Hébergement thermal</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Jour 2 - Détente</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Matin : Sources thermales</li>
                    <li>• 11h : Atelier broderie traditionnelle</li>
                    <li>• 14h : Randonnée cascade Bras Rouge</li>
                    <li>• 16h : Dégustation vin et lentilles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur Cilaos
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

export default CilaosPage;