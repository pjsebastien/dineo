import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Heart, Sunset, Camera, Sparkles } from 'lucide-react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import Header from './Header';
import Footer from './Footer';
import { Activity } from '../types/Activity';

const CoupleActivitiesPage: React.FC = () => {
  // Sélection des activités romantiques pour couples
  const coupleActivities = activities.filter(activity => {
    // Activités romantiques : parapente, hélicoptère, observation dauphins/baleines, plongée, balades à cheval
    const romanticActivities = [
      'parapente', 'hélicoptère', 'observation', 'plongée', 'cheval', 'ulm', 'snorkeling'
    ];
    
    const isRomantic = romanticActivities.some(keyword => 
      activity.sous_categorie.toLowerCase().includes(keyword) ||
      activity.titre.toLowerCase().includes(keyword)
    );
    
    // Privilégier les activités avec de beaux paysages et moments intimes
    const hasRomanticKeywords = activity.points_forts.toLowerCase().includes('vue') ||
      activity.points_forts.toLowerCase().includes('lagon') ||
      activity.points_forts.toLowerCase().includes('panorama') ||
      activity.lieu.includes('Saint-Leu') ||
      activity.lieu.includes('Saint-Gilles');
    
    return isRomantic || hasRomanticKeywords;
  }).slice(0, 12);

  const handleBookActivity = (activity: Activity) => {
    window.open(activity.url, '_blank');
  };

  const faqs = [
    {
      question: "Quelles sont les activités les plus romantiques à La Réunion pour un couple ?",
      answer: "Les activités les plus romantiques incluent le vol en parapente au-dessus du lagon de Saint-Leu, les survols en hélicoptère des cirques au coucher du soleil, l'observation des dauphins et baleines en petit comité, et les balades à cheval dans les hauteurs du Maïdo. Ces expériences offrent des moments intimes avec des paysages à couper le souffle."
    },
    {
      question: "Quel budget prévoir pour des activités de couple à La Réunion ?",
      answer: "Comptez entre 170€ et 690€ pour un couple selon l'activité choisie. Les sorties observation dauphins coûtent environ 80€ pour deux, le parapente 170€, et les vols en hélicoptère de 610€ à 690€. Ces tarifs incluent généralement tout l'équipement et l'encadrement professionnel."
    },
    {
      question: "Quelle est la meilleure période pour un séjour romantique à La Réunion ?",
      answer: "La saison sèche (mai à octobre) est idéale avec un climat doux et peu de pluie. Pour les activités nautiques, toute l'année convient. Les couchers de soleil sont particulièrement beaux d'avril à septembre. Évitez janvier-mars pour les risques cycloniques."
    },
    {
      question: "Les activités de couple nécessitent-elles une condition physique particulière ?",
      answer: "La plupart des activités romantiques sont accessibles à tous : parapente, hélicoptère, observation des cétacés. Seules les randonnées et le canyoning demandent une condition physique correcte. Les prestataires s'adaptent toujours au niveau des participants."
    },
    {
      question: "Peut-on privatiser certaines activités pour plus d'intimité ?",
      answer: "Oui ! Beaucoup de prestataires proposent des sorties privées : vols en hélicoptère privatisés, balades à cheval en duo, sorties plongée personnalisées. Ces options, plus coûteuses, garantissent une expérience exclusive et romantique."
    },
    {
      question: "Comment immortaliser ces moments à deux à La Réunion ?",
      answer: "Beaucoup d'activités proposent des photos/vidéos professionnelles en option (15-30€). Pour les vols, apportez votre appareil photo. Les guides connaissent les meilleurs spots pour des photos de couple inoubliables avec les paysages réunionnais en arrière-plan."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Activités Romantiques à La Réunion en Couple | Sorties à Deux</title>
        <meta name="description" content="Découvrez les activités les plus romantiques à La Réunion : parapente, hélicoptère, observation dauphins. Expériences inoubliables pour couples." />
        <meta name="keywords" content="activités couple la réunion, romantique réunion, sortie amoureux réunion, voyage de noces réunion, activité romantique réunion" />
        <link rel="canonical" href="https://dineo.re/activites-couple-reunion" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <span className="text-gray-900">Activités en couple</span>
        </nav>

        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux activités
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Activités Romantiques à La Réunion
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-pink-100">
              Vivez des moments magiques à deux : {coupleActivities.length} expériences romantiques dans l'île intense
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Heart className="w-5 h-5 mr-2" />
                <span>Expériences intimes</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sunset className="w-5 h-5 mr-2" />
                <span>Paysages à couper le souffle</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Camera className="w-5 h-5 mr-2" />
                <span>Souvenirs inoubliables</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Nos expériences romantiques sélectionnées
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coupleActivities.map((activity, index) => (
              <ActivityCard
                key={index}
                activity={activity}
                onBook={handleBookActivity}
              />
            ))}
          </div>
        </section>

        {/* SEO Content */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Guide des activités romantiques à La Réunion
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-gray-600 mb-6">
              La Réunion est une destination de rêve pour les <strong>activités en couple</strong>. L'île intense offre un cadre exceptionnel pour vivre des moments romantiques inoubliables, entre lagons turquoise, sommets volcaniques et couchers de soleil magiques.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Pourquoi choisir La Réunion pour un séjour romantique ?
            </h3>
            <p className="mb-6">
              Les <strong>activités romantiques à La Réunion</strong> bénéficient d'un cadre naturel préservé unique au monde. Des lagons cristallins de la côte ouest aux panoramas vertigineux des cirques, chaque expérience devient un moment privilégié à partager. L'île offre cette rare combinaison entre aventure et intimité, permettant aux couples de vivre des <strong>expériences à deux</strong> authentiques dans un environnement tropical exceptionnel.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Les expériences aériennes : l'émotion à son paroxysme
            </h3>
            <p className="mb-4">
              Le <strong>vol en parapente au-dessus du lagon</strong> de Saint-Leu constitue l'une des expériences les plus romantiques de l'île. Suspendus ensemble dans les airs, vous survolerez les eaux turquoise pendant 20 à 40 minutes selon la formule choisie. Cette sensation de liberté partagée, avec vue panoramique sur la côte ouest, crée des souvenirs indélébiles.
            </p>
            <p className="mb-6">
              Les <strong>survols en hélicoptère</strong> offrent une perspective unique sur les merveilles de La Réunion. Le vol de 45 minutes au-dessus des cirques et du Piton de la Fournaise, ou celui de 55 minutes pour un tour complet de l'île, transforment votre <strong>sortie en couple</strong> en aventure extraordinaire. Les commentaires du pilote enrichissent cette découverte aérienne des paysages les plus spectaculaires de l'océan Indien.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Découvertes marines : intimité et émerveillement
            </h3>
            <p className="mb-4">
              L'<strong>observation des dauphins et baleines</strong> depuis Saint-Gilles offre des moments d'émotion pure. Ces sorties matinales de 2 heures, en petit comité, permettent d'approcher ces mammifères marins dans leur environnement naturel. La magie de ces rencontres, partagée à deux, renforce la complicité du couple face à la beauté de la nature.
            </p>
            <p className="mb-6">
              Les <strong>baptêmes de plongée</strong> dans les eaux cristallines de Saint-Leu ou Saint-Gilles constituent une initiation parfaite pour découvrir ensemble les fonds marins tropicaux. Cette première immersion, encadrée par des moniteurs expérimentés, révèle un monde sous-marin coloré et préservé, créant une expérience partagée unique.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Escapades terrestres romantiques
            </h3>
            <p className="mb-4">
              Les <strong>balades à cheval</strong> dans les hauteurs du Maïdo ou autour du Grand Étang offrent une découverte douce et romantique des paysages réunionnais. Ces sorties équestres, adaptées aux débutants, permettent de partager des moments de complicité tout en admirant les panoramas sur les cirques ou la côte ouest.
            </p>
            <p className="mb-6">
              Pour les couples en quête d'aventure, les <strong>randonnées guidées</strong> vers le Piton de la Fournaise proposent une expérience intense au cœur du volcan actif. Cette marche de 6 heures dans les paysages lunaires de l'enclos crée une aventure partagée inoubliable, ponctuée de pauses contemplatives face aux cratères et coulées de lave.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Conseils pour réussir votre séjour romantique
            </h3>
            <p className="mb-4">
              Planifier des <strong>activités de couple à La Réunion</strong> nécessite de considérer les goûts et le niveau de chacun. Alternez entre moments d'adrénaline et instants de détente. Les activités aériennes et nautiques offrent des sensations fortes, tandis que les balades à cheval ou l'observation des cétacés privilégient la contemplation.
            </p>
            <p className="mb-4">
              Réservez vos activités à l'avance, particulièrement pour les vols en hélicoptère et les sorties privatisées. Beaucoup de prestataires proposent des options exclusives pour les couples : vol privé, sortie en mer personnalisée, ou balade à cheval en duo.
            </p>
            <p className="mb-6">
              N'oubliez pas d'immortaliser ces moments : beaucoup d'activités proposent des photos/vidéos professionnelles en option. Pour les vols, apportez votre appareil photo et profitez des conseils des guides pour capturer les plus beaux panoramas.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Budget et organisation de votre escapade romantique
            </h3>
            <p className="mb-4">
              Les tarifs des <strong>sorties romantiques à La Réunion</strong> varient de 80€ à 690€ pour un couple selon l'activité. L'observation des dauphins (80€ pour deux) et les balades à cheval (70-100€ pour deux) restent accessibles, tandis que les vols en hélicoptère représentent un investissement plus important (610-690€ pour deux).
            </p>
            <p className="mb-6">
              Pour optimiser votre séjour, concentrez vos activités par région : la côte ouest pour les expériences nautiques et aériennes, les hauts pour les randonnées et balades à cheval. Cette organisation limite les déplacements et maximise le temps passé ensemble dans chaque environnement.
            </p>

            <div className="bg-pink-50 p-6 rounded-lg mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Notre sélection d'activités par moment de la journée
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Matinée romantique</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Observation des dauphins (départ 7h)</li>
                    <li>• Vol en hélicoptère (lumière douce)</li>
                    <li>• Balade à cheval au lever du soleil</li>
                    <li>• Snorkeling dans les lagons calmes</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Après-midi magique</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Parapente avec vue sur le coucher de soleil</li>
                    <li>• Plongée dans les eaux cristallines</li>
                    <li>• Vol en ULM côte ouest</li>
                    <li>• Kayak transparent en fin de journée</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur les activités de couple
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

export default CoupleActivitiesPage;