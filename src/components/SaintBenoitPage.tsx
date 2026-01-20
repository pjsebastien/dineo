import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Mountain, Droplets, Waves, TreePine } from 'lucide-react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import Header from './Header';
import Footer from './Footer';
import { Activity } from '../types/Activity';

const SaintBenoitPage: React.FC = () => {
  // Filtrage automatique des activités à Saint-Benoît
  const saintBenoitActivities = activities.filter(activity => 
    activity.lieu.toLowerCase().includes('saint-benoît') ||
    activity.lieu.toLowerCase().includes('saint‑benoît') ||
    activity.lieu.toLowerCase().includes('grand étang') ||
    activity.lieu.toLowerCase().includes('marsouins')
  );

  const handleBookActivity = (activity: Activity) => {
    window.open(activity.url, '_blank');
  };

  const faqs = [
    {
      question: "Quelles sont les meilleures activités à faire à Saint-Benoît ?",
      answer: "Saint-Benoît propose des activités aquatiques et équestres exceptionnelles. Le canyoning dans la Rivière des Marsouins et le Bassin Bœuf offre des descentes adaptées à tous niveaux avec sauts, toboggans naturels et rappels. Les balades à cheval permettent de découvrir la nature sauvage de l'est, entre cascades et forêts luxuriantes."
    },
    {
      question: "Pourquoi choisir Saint-Benoît pour ses activités nature ?",
      answer: "Saint-Benoît est la porte d'entrée du Piton de la Fournaise par l'est et offre une nature préservée et authentique. Les rivières comme la Rivière des Marsouins abritent des bassins cristallins parfaits pour le canyoning. Le climat plus humide garantit une végétation luxuriante et des cascades permanentes tout au long de l'année."
    },
    {
      question: "Combien coûtent les activités à Saint-Benoît ?",
      answer: "Les activités à Saint-Benoît sont accessibles et variées. Le canyoning dans le Bassin Bœuf ou la Rivière des Marsouins coûte environ 60-80€ pour une demi-journée. Les balades équestres varient de 40€ à 90€ selon la durée. Ces tarifs incluent l'encadrement diplômé et tout le matériel de sécurité nécessaire."
    },
    {
      question: "Quelle est la meilleure période pour les activités à Saint-Benoît ?",
      answer: "Le canyoning se pratique toute l'année à Saint-Benoît grâce au climat humide de l'est. La saison sèche (mai à octobre) offre des conditions optimales avec des débits d'eau modérés. Évitez les périodes de fortes pluies et de cyclones (janvier-mars) où les rivières peuvent être dangereuses."
    },
    {
      question: "Comment se rendre aux sites d'activités depuis Saint-Benoît ?",
      answer: "Saint-Benoît est accessible par la route nationale depuis Saint-Denis (45 minutes). Les départs de canyoning se font depuis différents points : Bassin La Paix, Bassin Bœuf, Rivière des Marsouins. Les prestataires indiquent précisément les lieux de rendez-vous. Un véhicule est recommandé pour accéder aux sites naturels."
    },
    {
      question: "Les activités à Saint-Benoît sont-elles adaptées aux débutants ?",
      answer: "Absolument ! Les canyons de Saint-Benoît proposent des parcours variés adaptés à tous les niveaux. Le Bassin Bœuf convient aux familles et débutants avec des sauts facultatifs. Les moniteurs diplômés adaptent les parcours selon les capacités de chacun. Les balades à cheval sont également accessibles aux cavaliers débutants."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Que faire à Saint-Benoît à La Réunion ? | Activités et Visites</title>
        <meta name="description" content="Découvrez les activités à Saint-Benoît : canyoning Rivière des Marsouins, Bassin Bœuf, balades à cheval, accès Piton de la Fournaise. Nature sauvage de l'est." />
        <meta name="keywords" content="que faire saint-benoît réunion, activités saint-benoît, canyoning saint-benoît, bassin bœuf, rivière marsouins, cheval saint-benoît réunion" />
        <link rel="canonical" href="https://dineo.re/que-faire-saint-benoit-reunion" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <span className="text-gray-900">Saint-Benoît</span>
        </nav>

        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux activités
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Que faire à Saint-Benoît à La Réunion ?
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-green-100">
              Découvrez {saintBenoitActivities.length} activités dans la nature sauvage de l'est
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Waves className="w-5 h-5 mr-2" />
                <span>Canyoning & cascades</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <TreePine className="w-5 h-5 mr-2" />
                <span>Balades équestres</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Mountain className="w-5 h-5 mr-2" />
                <span>Porte du volcan Est</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        {saintBenoitActivities.length > 0 ? (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Activités à Saint-Benoît
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {saintBenoitActivities.map((activity, index) => (
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
              Aucune activité spécifique à Saint-Benoît pour le moment.
            </p>
            <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
              Voir toutes nos activités à La Réunion
            </Link>
          </div>
        )}

        {/* SEO Content */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Que faire à Saint-Benoît à La Réunion ?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-gray-600 mb-6">
              <strong>Saint-Benoît</strong> est la commune la plus à l'est de La Réunion, réputée pour sa nature sauvage et préservée. Cette région humide et verdoyante offre des rivières cristallines, des cascades spectaculaires et un accès privilégié au Piton de la Fournaise par la route forestière de la Plaine des Palmistes.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Canyoning dans les rivières de Saint-Benoît
            </h3>
            <p className="mb-4">
              Les <strong>activités à Saint-Benoît</strong> sont dominées par le canyoning dans les nombreuses rivières qui dévalent les pentes du volcan. La Rivière des Marsouins propose plusieurs parcours adaptés à différents niveaux : du canyon découverte familial aux descentes sportives pour les plus aventureux. Les bassins successifs offrent sauts, toboggans naturels et rappels dans une eau pure et rafraîchissante.
            </p>
            <p className="mb-6">
              Le <strong>Bassin Bœuf</strong> est l'un des sites phares de Saint-Benoît, accessible depuis la Rivière des Marsouins ou la Rivière Sainte-Suzanne. Ce canyon ludique convient parfaitement aux familles et débutants avec ses sauts facultatifs de 3 à 7 mètres, ses toboggans naturels et ses vasques cristallines. L'encadrement par des moniteurs diplômés garantit sécurité et plaisir dans ces décors exceptionnels.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Balades à cheval dans la nature sauvage
            </h3>
            <p className="mb-4">
              <strong>Visiter Saint-Benoît à La Réunion</strong> à cheval offre une perspective unique sur cette région préservée. Les centres équestres locaux proposent des randonnées dans les hauts de Saint-Benoît, traversant champs de cannes, forêts tropicales et points de vue sur l'océan. Ces balades permettent de découvrir la faune et la flore endémiques tout en profitant de la quiétude des paysages de l'est.
            </p>
            <p className="mb-6">
              Les parcours équestres s'adaptent à tous les niveaux, du débutant au cavalier confirmé. Les guides locaux partagent leur connaissance du territoire, pointant les plantes médicinales, les oiseaux endémiques et les sites historiques. Ces <strong>sorties à cheval depuis Saint-Benoît</strong> durent de 1 à 3 heures selon les formules choisies.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Porte d'entrée Est du Piton de la Fournaise
            </h3>
            <p className="mb-4">
              <strong>Que faire à Saint-Benoît</strong> pour découvrir le volcan ? La commune constitue le point de départ de l'accès Est au Piton de la Fournaise via la route forestière qui monte à la Plaine des Palmistes puis au Pas de Bellecombe. Cet itinéraire moins fréquenté que l'accès Sud offre des paysages magnifiques et une approche progressive du volcan.
            </p>
            <p className="mb-6">
              La route traverse différents étages de végétation, des forêts luxuriantes de basse altitude aux paysages lunaires de haute altitude. Les points de vue sur la côte est et l'océan Indien sont spectaculaires. Cette <strong>excursion depuis Saint-Benoît</strong> permet de combiner découverte du volcan et exploration de la région orientale de l'île.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Les cascades et bassins : trésors naturels de l'est
            </h3>
            <p className="mb-4">
              Saint-Benoît et ses environs abritent de nombreuses <strong>cascades accessibles</strong> pour la baignade et la détente. Le Bassin La Paix, niché dans la végétation tropicale, offre un cadre idyllique pour se rafraîchir après une randonnée. Ces sites naturels restent préservés du tourisme de masse et conservent leur authenticité.
            </p>
            <p className="mb-6">
              La Rivière des Marsouins, qui prend sa source dans les hauts de l'île, descend en cascade jusqu'à l'océan. Son parcours crée des bassins naturels aux eaux cristallines, parfaits pour les activités aquatiques. Le climat humide de l'est garantit des débits importants même en saison sèche, assurant des conditions optimales pour le canyoning toute l'année.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Culture et patrimoine de Saint-Benoît
            </h3>
            <p className="mb-4">
              Au-delà des <strong>activités nature à Saint-Benoît</strong>, la ville possède un riche patrimoine culturel. L'église Sainte-Anne, avec ses fresques colorées réalisées par des artistes tamouls, témoigne du métissage culturel réunionnais. Le marché forain propose fruits tropicaux, épices et spécialités locales dans une atmosphère authentique.
            </p>
            <p className="mb-6">
              Les champs de vanille et de cannes à sucre entourent la ville, offrant des visites guidées pour découvrir ces cultures emblématiques de La Réunion. Les gousses de vanille Bourbon, cultivées traditionnellement dans la région, constituent un souvenir parfumé apprécié. Cette dimension culturelle enrichit la découverte sportive du territoire.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Conseils pratiques pour votre séjour à Saint-Benoît
            </h3>
            <p className="mb-4">
              Pour profiter pleinement des <strong>activités à faire à Saint-Benoît</strong>, prévoyez des vêtements imperméables car le climat de l'est est le plus humide de l'île. Les après-midis sont souvent pluvieux, privilégiez donc les activités matinales. Pour le canyoning, suivez scrupuleusement les consignes de sécurité et vérifiez la météo avant de partir.
            </p>
            <p className="mb-6">
              Saint-Benoît se situe à 45 minutes de Saint-Denis par la route nationale côtière. La ville offre restaurants créoles, hébergements et commerces pour faciliter votre séjour. Les prestataires d'activités fournissent tout le matériel nécessaire : combinaisons néoprène, casques, baudriers et chaussures adaptées pour le canyoning. Réservez vos activités à l'avance, surtout en haute saison touristique.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Programme type d'une journée à Saint-Benoît
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Matinée</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 8h : Départ pour le canyoning Bassin Bœuf</li>
                    <li>• 8h30 : Briefing et équipement</li>
                    <li>• 9h-12h : Descente de canyon (sauts, toboggans)</li>
                    <li>• 12h : Retour et déjeuner créole</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Après-midi</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 14h : Balade à cheval dans les hauts</li>
                    <li>• 16h : Visite des champs de vanille</li>
                    <li>• 17h : Découverte église Sainte-Anne</li>
                    <li>• 18h : Marché forain et spécialités locales</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur Saint-Benoît
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

export default SaintBenoitPage;