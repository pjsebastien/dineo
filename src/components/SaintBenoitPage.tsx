import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, MapPin, Waves, TreePine, Mountain } from 'lucide-react';
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
      question: "Quelles activités peut-on faire à Saint-Benoît ?",
      answer: "Saint-Benoît propose des balades à cheval au Grand Étang dans un cadre naturel préservé, du rafting sur la rivière des Marsouins, et l'accès aux randonnées vers la Plaine des Palmistes. Cette région authentique de l'est offre des expériences nature variées loin des foules touristiques."
    },
    {
      question: "La balade à cheval au Grand Étang est-elle accessible aux débutants ?",
      answer: "Absolument ! Les balades à cheval au Grand Étang sont spécialement conçues pour accueillir les débutants. Les chevaux sont calmes et habitués aux novices, l'encadrement est attentionné, et le rythme s'adapte au niveau du groupe. C'est une excellente initiation à l'équitation en milieu naturel."
    },
    {
      question: "Le rafting sur la rivière des Marsouins est-il sécurisé ?",
      answer: "Oui, le rafting sur la rivière des Marsouins est encadré par des guides diplômés avec tout l'équipement de sécurité fourni (raft, casque, gilet, combinaison). Le parcours est adapté selon le niveau d'eau et convient aux familles dès 8 ans. Les rapides sont ludiques sans être dangereux."
    },
    {
      question: "Quelle est la particularité du Grand Étang ?",
      answer: "Le Grand Étang est un site naturel préservé de l'est de La Réunion, caractérisé par ses paysages de forêt tropicale humide, ses étangs naturels et sa tranquillité. C'est un écrin de verdure idéal pour les balades à cheval contemplatives, loin de l'agitation touristique de l'ouest."
    },
    {
      question: "Comment se rendre à Saint-Benoît depuis les autres régions ?",
      answer: "Saint-Benoît se situe sur la côte est, accessible par la route du littoral depuis Saint-Denis (45 min) ou par la route des Plaines depuis Saint-Pierre (1h15). La région est moins fréquentée que l'ouest, offrant une découverte plus authentique de La Réunion."
    },
    {
      question: "Peut-on combiner plusieurs activités à Saint-Benoît ?",
      answer: "Oui, Saint-Benoît permet de combiner balade à cheval au Grand Étang le matin et rafting sur la rivière des Marsouins l'après-midi. La proximité des sites facilite l'organisation. Ajoutez la visite de la vanilleraie ou du temple tamoul pour une journée complète."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Que faire à Saint-Benoît à La Réunion ? | Nature et Authenticité</title>
        <meta name="description" content="Découvrez les activités à Saint-Benoît : balades à cheval Grand Étang, rafting rivière Marsouins. Guide de l'est authentique de La Réunion, loin des foules." />
        <meta name="keywords" content="que faire saint-benoît réunion, grand étang saint-benoît, rafting marsouins, balade cheval saint-benoît, est réunion activités" />
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
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Que faire à Saint-Benoît à La Réunion ?
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-green-100">
              Découvrez {saintBenoitActivities.length} activités dans l'est authentique et préservé de l'île
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <TreePine className="w-5 h-5 mr-2" />
                <span>Nature préservée</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Waves className="w-5 h-5 mr-2" />
                <span>Rivières sauvages</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Mountain className="w-5 h-5 mr-2" />
                <span>Authenticité créole</span>
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
              <strong>Saint-Benoît</strong> représente l'authenticité réunionnaise loin des circuits touristiques classiques. Cette commune de l'est de l'île offre des expériences nature préservées : balades à cheval dans des écrins de verdure, rafting sur rivières sauvages et découverte de la culture créole traditionnelle.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Le Grand Étang : écrin naturel pour balades équestres
            </h3>
            <p className="mb-4">
              Les <strong>balades à cheval au Grand Étang</strong> constituent l'activité phare de Saint-Benoît. Ce site naturel préservé, niché dans la forêt tropicale humide de l'est, offre un cadre enchanteur pour découvrir l'équitation. Les chevaux calmes et habitués aux débutants permettent une approche douce de cette activité dans un environnement exceptionnel.
            </p>
            <p className="mb-6">
              Ces <strong>activités équestres à Saint-Benoît</strong> se déroulent sur 2 heures, incluant initiation et balade encadrée. Les paysages du Grand Étang, avec ses étangs naturels, sa végétation luxuriante et sa tranquillité, créent une atmosphère apaisante idéale pour les familles et les amateurs de nature. L'encadrement attentionné adapte le rythme au niveau de chaque cavalier.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Rafting sur la rivière des Marsouins
            </h3>
            <p className="mb-4">
              Le <strong>rafting à Saint-Benoît</strong> sur la rivière des Marsouins propose une descente ludique de 3 heures dans un cadre verdoyant préservé. Cette activité familiale, accessible dès 8 ans, combine sport nautique et découverte de la végétation tropicale qui borde les rives de cette rivière de l'est.
            </p>
            <p className="mb-6">
              Les <strong>activités nautiques à Saint-Benoît</strong> incluent cette expérience rafraîchissante avec équipement complet fourni (raft, casque, gilet, combinaison) et encadrement par des guides expérimentés. Le parcours variable selon le niveau d'eau offre rapides ludiques et passages plus calmes pour admirer la nature environnante. Cette alternative aux activités de l'ouest révèle une facette différente de La Réunion.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Découverte de l'est authentique
            </h3>
            <p className="mb-4">
              <strong>Visiter Saint-Benoît</strong> permet de découvrir une région moins touristique mais riche en authenticité créole. Cette commune de l'est a conservé son caractère rural et traditionnel, avec ses champs de canne à sucre, ses vanilleraies et ses temples tamouls colorés qui témoignent de la diversité culturelle réunionnaise.
            </p>
            <p className="mb-6">
              Les <strong>activités culturelles à Saint-Benoît</strong> incluent la visite de la vanilleraie du Grand Hazier, où l'on découvre les secrets de cette épice précieuse, et l'exploration du temple Gol Govindin, l'un des plus beaux temples tamouls de l'île. Ces découvertes complètent parfaitement les activités nature pour une immersion complète dans l'est réunionnais.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Porte d'entrée vers les Hauts de l'Est
            </h3>
            <p className="mb-4">
              <strong>Que faire à Saint-Benoît</strong> pour les amateurs de randonnée ? La commune constitue le point de départ idéal vers la Plaine des Palmistes et les Hauts de l'Est. Ces régions d'altitude offrent des paysages tempérés contrastant avec la luxuriance tropicale du littoral, créant une diversité remarquable sur de courtes distances.
            </p>
            <p className="mb-6">
              Les sentiers de randonnée depuis Saint-Benoît mènent vers des sites préservés : forêt de Bébour-Bélouve, cascade du Voile de la Mariée, ou encore les sentiers botaniques de la Plaine des Palmistes. Ces <strong>randonnées depuis Saint-Benoît</strong> révèlent la richesse de la flore endémique réunionnaise dans des environnements moins fréquentés.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Climat et spécificités de l'est
            </h3>
            <p className="mb-4">
              Les <strong>activités à Saint-Benoît à La Réunion</strong> bénéficient du climat tropical humide de l'est, plus arrosé que l'ouest mais créant cette végétation luxuriante caractéristique. Cette humidité naturelle maintient la fraîcheur des sous-bois et alimente les rivières qui permettent les activités nautiques.
            </p>
            <p className="mb-6">
              Cette spécificité climatique influence le choix des activités : les balades à cheval matinales évitent les averses d'après-midi, tandis que le rafting profite des débits soutenus des rivières. Cette adaptation aux conditions locales fait partie du charme de la découverte de l'est réunionnais, plus sauvage et authentique.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Gastronomie et artisanat local
            </h3>
            <p className="mb-4">
              <strong>Saint-Benoît à La Réunion</strong> révèle une gastronomie créole authentique dans ses restaurants familiaux et tables d'hôtes. Les spécialités locales incluent curry de poisson frais, rougail saucisse traditionnel et desserts à base de fruits tropicaux cultivés localement. Cette cuisine familiale contraste avec l'offre plus touristique de l'ouest.
            </p>
            <p className="mb-6">
              L'artisanat saint-benoîtois perpétue les traditions créoles : vannerie en vacoa, sculpture sur bois, et bien sûr la transformation de la vanille. Ces savoir-faire traditionnels se découvrent dans les ateliers locaux et enrichissent la compréhension de la culture réunionnaise au-delà des activités sportives.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Avantages de choisir l'est pour ses activités
            </h3>
            <p className="mb-4">
              Les <strong>activités à faire à Saint-Benoît</strong> offrent plusieurs avantages : tarifs souvent plus abordables, groupes plus restreints, contact privilégié avec les prestataires locaux et découverte d'une région moins connue mais tout aussi belle. Cette approche permet une expérience plus personnalisée et authentique.
            </p>
            <p className="mb-6">
              La moindre fréquentation touristique de l'est garantit des expériences plus intimes avec la nature et les habitants. Les guides locaux partagent volontiers leurs connaissances sur leur région, créant des échanges enrichissants impossibles dans les zones sur-touristiques. Cette dimension humaine ajoute une valeur inestimable aux activités.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Conseils pratiques pour votre découverte de Saint-Benoît
            </h3>
            <p className="mb-4">
              Pour optimiser vos <strong>activités à Saint-Benoît</strong>, prévoyez des vêtements adaptés au climat humide : veste imperméable légère, chaussures fermées antidérapantes, et vêtements de rechange. L'est étant plus arrosé, cette préparation garantit le confort même en cas d'averse tropicale.
            </p>
            <p className="mb-6">
              Planifiez vos activités en matinée quand les conditions sont souvent plus stables, et gardez l'après-midi pour les découvertes culturelles à l'abri. Cette organisation permet de profiter pleinement des spécificités de l'est tout en s'adaptant à son climat particulier. N'oubliez pas l'anti-moustique, plus nécessaire qu'à l'ouest.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Journée découverte à Saint-Benoît
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Matinée nature</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 8h : Balade à cheval Grand Étang (2h)</li>
                    <li>• 10h30 : Découverte vanilleraie</li>
                    <li>• 12h : Déjeuner créole authentique</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Après-midi aventure</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 14h : Rafting rivière Marsouins (3h)</li>
                    <li>• 17h : Visite temple tamoul</li>
                    <li>• 18h : Coucher de soleil côte est</li>
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