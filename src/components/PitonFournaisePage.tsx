import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, MapPin, Flame, Mountain, Eye } from 'lucide-react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import Header from './Header';
import Footer from './Footer';
import { Activity } from '../types/Activity';

const PitonFournaisePage: React.FC = () => {
  // Filtrage automatique des activités au Piton de la Fournaise
  const pitonFournaiseActivities = activities.filter(activity => 
    activity.lieu.toLowerCase().includes('piton de la fournaise') ||
    activity.lieu.toLowerCase().includes('fournaise') ||
    activity.titre.toLowerCase().includes('fournaise') ||
    activity.titre.toLowerCase().includes('volcan')
  );

  const handleBookActivity = (activity: Activity) => {
    window.open(activity.url, '_blank');
  };

  const faqs = [
    {
      question: "Quelles activités peut-on faire au Piton de la Fournaise ?",
      answer: "Le Piton de la Fournaise propose des randonnées guidées vers le cratère principal, de la spéléologie dans les tunnels de lave, et des survols en hélicoptère. Ces activités révèlent différentes facettes du volcan : paysages lunaires de surface, galeries souterraines et perspectives aériennes uniques."
    },
    {
      question: "La randonnée au Piton de la Fournaise est-elle difficile ?",
      answer: "La randonnée classique vers le cratère Dolomieu nécessite une bonne condition physique : 6h de marche, dénivelé de 500m, altitude > 2000m. Le terrain volcanique est escarpé mais les sentiers sont balisés. Un guide expérimenté adapte le rythme et partage ses connaissances géologiques."
    },
    {
      question: "Peut-on visiter les tunnels de lave en toute sécurité ?",
      answer: "Oui, la spéléologie dans les tunnels de lave est encadrée par des guides spéléologues diplômés. L'équipement complet est fourni (casque, lampe frontale, gants). Les parcours s'adaptent de 1h à 6h selon le niveau. Seules conditions : ne pas être claustrophobe et avoir une condition physique correcte."
    },
    {
      question: "Quelle est la meilleure période pour visiter le volcan ?",
      answer: "La saison sèche (mai à octobre) offre les meilleures conditions avec moins de nuages et de pluie. Les matinées sont souvent plus claires. Attention : l'enclos peut être fermé en cas d'éruption ou de conditions météo dangereuses. Vérifiez les arrêtés préfectoraux avant de partir."
    },
    {
      question: "Comment se rendre au Piton de la Fournaise ?",
      answer: "L'accès se fait par la route du volcan depuis Saint-Pierre (1h30) ou Sainte-Rose (1h). Le parking du Pas de Bellecombe marque le début des randonnées. Cette route traverse des paysages spectaculaires : Plaine des Cafres, Plaine des Sables aux allures lunaires."
    },
    {
      question: "Que prévoir pour une journée au volcan ?",
      answer: "Équipement indispensable : 2L d'eau minimum, pique-nique, vêtements chauds et de pluie, chaussures de randonnée, protection solaire, sac 25L. Les conditions changent rapidement en altitude. Partez tôt le matin pour éviter les nuages d'après-midi."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Que faire au Piton de la Fournaise à La Réunion ? | Volcan Actif</title>
        <meta name="description" content="Découvrez les activités au Piton de la Fournaise : randonnées cratère, spéléologie tunnels de lave, survols hélicoptère. Toutes les activités du volcan actif de La Réunion." />
        <meta name="keywords" content="piton de la fournaise activités, randonnée volcan réunion, spéléologie tunnels lave, cratère dolomieu, volcan actif réunion" />
        <link rel="canonical" href="https://dineo.re/que-faire-piton-fournaise-reunion" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <span className="text-gray-900">Piton de la Fournaise</span>
        </nav>

        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux activités
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Que faire au Piton de la Fournaise ?
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-red-100">
              Découvrez {pitonFournaiseActivities.length} activités exceptionnelles sur l'un des volcans les plus actifs au monde
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Flame className="w-5 h-5 mr-2" />
                <span>Volcan actif</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Mountain className="w-5 h-5 mr-2" />
                <span>Paysages lunaires</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Eye className="w-5 h-5 mr-2" />
                <span>Expérience unique</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        {pitonFournaiseActivities.length > 0 ? (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Activités au Piton de la Fournaise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pitonFournaiseActivities.map((activity, index) => (
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
              Aucune activité spécifique au Piton de la Fournaise pour le moment.
            </p>
            <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
              Voir toutes nos activités à La Réunion
            </Link>
          </div>
        )}

        {/* SEO Content */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Que faire au Piton de la Fournaise ?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-gray-600 mb-6">
              Le <strong>Piton de la Fournaise</strong> est l'un des volcans les plus actifs au monde et constitue l'attraction naturelle majeure de La Réunion. Ce géant de 2632 mètres d'altitude offre des expériences uniques : randonnées dans des paysages lunaires, exploration de tunnels de lave et survols aériens spectaculaires.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Randonnées au cœur du volcan actif
            </h3>
            <p className="mb-4">
              La <strong>randonnée au Piton de la Fournaise</strong> constitue l'expérience phare pour découvrir ce volcan exceptionnel. Le parcours classique de 6 heures mène au cratère principal Dolomieu, traversant l'enclos Fouqué aux paysages lunaires saisissants. Cette aventure guidée révèle coulées de lave récentes, fumerolles actives et formations géologiques uniques.
            </p>
            <p className="mb-6">
              Les <strong>activités au volcan de La Réunion</strong> incluent cette randonnée accompagnée d'un guide de montagne diplômé qui partage ses connaissances sur la volcanologie, la formation de l'île et l'évolution des paysages. Le départ matinal depuis le Pas de Bellecombe permet d'éviter les nuages d'altitude et de profiter des meilleures conditions de visibilité.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Spéléologie dans les tunnels de lave
            </h3>
            <p className="mb-4">
              L'<strong>exploration des tunnels de lave</strong> offre une perspective souterraine unique du Piton de la Fournaise. Ces galeries naturelles, formées par l'écoulement de lave en fusion, créent un réseau de cavités spectaculaires aux formations rocheuses extraordinaires. La spéléologie volcanique révèle l'architecture interne du volcan.
            </p>
            <p className="mb-6">
              Les parcours s'adaptent de 1 à 6 heures selon l'expérience et les envies, encadrés par des guides spéléologues expérimentés. L'équipement complet (casque avec lampe frontale, gants, protections) est fourni pour cette aventure souterraine unique au monde. Ces <strong>activités insolites au Piton de la Fournaise</strong> complètent parfaitement la découverte de surface.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Survols aériens du volcan
            </h3>
            <p className="mb-4">
              Les <strong>survols en hélicoptère du Piton de la Fournaise</strong> depuis Saint-Pierre offrent des perspectives aériennes saisissantes sur le volcan et ses coulées récentes. Ces vols de 45 à 55 minutes révèlent l'ampleur de l'enclos, la géométrie parfaite des cratères et les contrastes colorés entre lave noire et végétation tropicale.
            </p>
            <p className="mb-6">
              Cette approche aérienne permet d'appréhender la dimension géologique du volcan, ses relations avec les cirques environnants et l'évolution des paysages au fil des éruptions. Les commentaires du pilote enrichissent cette découverte panoramique, inaccessible depuis le sol. Ces survols constituent souvent le point d'orgue d'un séjour réunionnais.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              La route du volcan : spectacle géologique
            </h3>
            <p className="mb-4">
              L'accès au <strong>Piton de la Fournaise</strong> constitue déjà une aventure géologique exceptionnelle. La route du volcan depuis Saint-Pierre traverse des paysages d'une diversité saisissante : forêts tropicales humides, Plaine des Cafres tempérée, puis Plaine des Sables aux allures martiennes.
            </p>
            <p className="mb-6">
              Cette traversée de 1h30 révèle l'étagement altitudinal de La Réunion et les différents stades de formation volcanique. Les nombreux belvédères permettent d'admirer les remparts des cirques, les pitons rocheux et les coulées de lave historiques. Le Pas de Bellecombe offre le premier aperçu saisissant de l'enclos Fouqué.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Géologie et volcanologie exceptionnelles
            </h3>
            <p className="mb-4">
              <strong>Que faire au volcan de La Réunion</strong> pour comprendre sa formation ? Les activités géologiques révèlent l'histoire de ce volcan-bouclier né il y a 500 000 ans. Les différentes coulées, les types de roches volcaniques et les formations minérales racontent l'évolution de ce géant du feu.
            </p>
            <p className="mb-6">
              L'observatoire volcanologique surveille en permanence l'activité du Piton de la Fournaise, l'un des volcans les mieux instrumentés au monde. Cette surveillance scientifique permet de prédire les éruptions et d'assurer la sécurité des visiteurs. Les guides partagent ces connaissances scientifiques lors des sorties terrain.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Biodiversité d'altitude unique
            </h3>
            <p className="mb-4">
              Les <strong>activités nature au Piton de la Fournaise</strong> révèlent une biodiversité d'altitude remarquable. Malgré les conditions extrêmes (altitude, vent, variations thermiques), une flore spécialisée colonise les coulées récentes : lichens pionniers, fougères résistantes, plantes endémiques adaptées.
            </p>
            <p className="mb-6">
              Cette recolonisation végétale illustre la résilience de la nature face aux perturbations volcaniques. Les guides naturalistes expliquent ces processus d'adaptation et de succession écologique, transformant la randonnée en véritable leçon de biologie évolutive. Cette dimension scientifique enrichit considérablement l'expérience volcanique.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Sécurité et réglementation
            </h3>
            <p className="mb-4">
              Les <strong>activités au Piton de la Fournaise</strong> sont strictement réglementées pour assurer la sécurité des visiteurs. L'accès à l'enclos peut être interdit en cas d'éruption, de conditions météorologiques dangereuses ou d'instabilité géologique. Les arrêtés préfectoraux sont mis à jour régulièrement.
            </p>
            <p className="mb-6">
              Cette réglementation, loin d'être contraignante, garantit des expériences sécurisées sur l'un des volcans les plus surveillés au monde. Les guides professionnels connaissent parfaitement ces règles et adaptent les itinéraires selon les conditions. Cette approche responsable permet de profiter du volcan en toute sérénité.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Conseils pratiques pour votre visite
            </h3>
            <p className="mb-4">
              Pour optimiser vos <strong>activités à faire au Piton de la Fournaise</strong>, partez très tôt le matin (6h-7h) pour éviter les nuages d'altitude qui se forment l'après-midi. Prévoyez équipement chaud car les températures chutent rapidement avec l'altitude, même sous les tropiques.
            </p>
            <p className="mb-6">
              L'équipement indispensable inclut : 2 litres d'eau minimum, pique-nique énergétique, vêtements chauds et imperméables, chaussures de randonnée montantes, protection solaire renforcée (réverbération sur lave noire), sac à dos 25L. Cette préparation garantit une expérience volcanique optimale et sécurisée.
            </p>

            <div className="bg-red-50 p-6 rounded-lg mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Journée type au Piton de la Fournaise
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Programme randonnée</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 6h : Départ Saint-Pierre</li>
                    <li>• 7h30 : Arrivée Pas de Bellecombe</li>
                    <li>• 8h : Début randonnée cratère (6h)</li>
                    <li>• 14h : Retour parking</li>
                    <li>• 15h30 : Route du retour</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Alternative spéléologie</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 9h : Tunnels de lave (1-6h)</li>
                    <li>• 12h : Pique-nique Plaine des Sables</li>
                    <li>• 14h : Belvédères route du volcan</li>
                    <li>• 16h : Retour côte</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur le Piton de la Fournaise
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

export default PitonFournaisePage;