import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Users, Heart, Shield, Clock } from 'lucide-react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import Header from './Header';
import Footer from './Footer';
import { Activity } from '../types/Activity';

const FamilyActivitiesPage: React.FC = () => {
  // Sélection des activités adaptées aux familles
  const familyActivities = activities.filter(activity => {
    const minAge = parseInt(activity.age_min);
    const isAccessible = activity.niveau === 'Accessible à tous' || activity.niveau === 'Sportif occasionnel';
    const isFamilyFriendly = minAge <= 10 && isAccessible;
    
    // Activités spécifiquement adaptées aux familles
    const familyKeywords = ['famille', 'enfant', 'accessible', 'découverte', 'balade', 'observation'];
    const hasFamilyKeywords = familyKeywords.some(keyword => 
      activity.resume.toLowerCase().includes(keyword) || 
      activity.points_forts.toLowerCase().includes(keyword)
    );
    
    return isFamilyFriendly || hasFamilyKeywords;
  }).slice(0, 12); // Limiter à 12 activités max

  const handleBookActivity = (activity: Activity) => {
    window.open(activity.url, '_blank');
  };

  const faqs = [
    {
      question: "Quelles sont les meilleures activités à La Réunion pour les familles avec enfants ?",
      answer: "Les activités familiales incontournables incluent l'observation des dauphins depuis Saint-Gilles, les balades à cheval au Grand Étang ou au Maïdo, le snorkeling dans les lagons protégés, et les sorties en kayak transparent. Ces activités sont adaptées dès 5-6 ans et offrent des découvertes en toute sécurité."
    },
    {
      question: "À partir de quel âge peut-on faire des activités à La Réunion en famille ?",
      answer: "Dès 2 ans pour les vols en hélicoptère (sur siège individuel), 5 ans pour le parapente et le kayak transparent, 6 ans pour le snorkeling, et 8 ans pour la plongée et le canyoning. Chaque activité précise l'âge minimum requis pour la sécurité des enfants."
    },
    {
      question: "Les activités familiales à La Réunion sont-elles sécurisées ?",
      answer: "Absolument ! Tous nos prestataires sont diplômés et spécialisés dans l'accueil des familles. L'équipement de sécurité est adapté aux enfants, les guides ajustent le rythme selon l'âge, et les parcours sont choisis pour leur accessibilité et leur sécurité."
    },
    {
      question: "Combien coûtent les activités familiales à La Réunion ?",
      answer: "Les tarifs varient de 35€ à 110€ par personne selon l'activité. Les enfants bénéficient souvent de tarifs réduits. Comptez environ 50-70€ par personne pour la plupart des activités familiales comme les balades à cheval, le snorkeling ou l'observation des dauphins."
    },
    {
      question: "Quelle est la meilleure période pour faire des activités en famille à La Réunion ?",
      answer: "La Réunion se visite toute l'année ! L'hiver austral (mai à octobre) offre un climat plus sec et des températures douces, idéal pour les randonnées. L'été (novembre à avril) est parfait pour les activités nautiques. Évitez janvier-mars pour les risques cycloniques."
    },
    {
      question: "Comment choisir une activité adaptée à l'âge de mes enfants ?",
      answer: "Vérifiez l'âge minimum indiqué, le niveau requis ('Accessible à tous' est idéal), et la durée de l'activité. Les plus jeunes préféreront des sorties courtes (1-2h) comme l'observation des dauphins, tandis que les ados peuvent profiter d'activités plus longues comme les randonnées guidées."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Activités à La Réunion en Famille | Sorties avec Enfants</title>
        <meta name="description" content="Découvrez les meilleures activités familiales à La Réunion : observation dauphins, balades à cheval, snorkeling enfants. Activités sécurisées dès 2 ans." />
        <meta name="keywords" content="activités famille la réunion, sortie enfant réunion, activité familiale réunion, que faire en famille réunion, loisirs famille réunion" />
        <link rel="canonical" href="https://dineo.re/activites-famille-reunion" />
          <meta property="og:title" content="Activités à La Réunion en Famille | Sorties avec Enfants" />
          <meta property="og:description" content="Découvrez les meilleures activités familiales à La Réunion : observation dauphins, balades à cheval, snorkeling enfants. Activités sécurisées dès 2 ans." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dineo.re/activites-famille-reunion" />
          <meta property="og:image" content="https://dineo.re/og-image.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Activités à La Réunion en Famille | Sorties avec Enfants" />
          <meta name="twitter:description" content="Découvrez les meilleures activités familiales à La Réunion : observation dauphins, balades à cheval, snorkeling enfants. Activités sécurisées dès 2 ans." />
          <meta name="twitter:image" content="https://dineo.re/og-image.jpg" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <span className="text-gray-900">Activités en famille</span>
        </nav>

        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux activités
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Activités à La Réunion en Famille
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-green-100">
              Découvrez l'île intense avec vos enfants : {familyActivities.length} activités sécurisées et adaptées à toute la famille
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="w-5 h-5 mr-2" />
                <span>Dès 2 ans</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 mr-2" />
                <span>Encadrement pro</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Heart className="w-5 h-5 mr-2" />
                <span>Souvenirs inoubliables</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Les activités familiales sélectionnées
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {familyActivities.map((activity, index) => (
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
            Toutes les activités familiales à La Réunion
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-gray-600 mb-6">
              La Réunion est une destination exceptionnelle pour les <strong>activités en famille</strong>. L'île intense offre une diversité d'expériences adaptées aux enfants de tous âges, dans un cadre naturel préservé et sécurisé.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Pourquoi choisir La Réunion pour des vacances en famille ?
            </h3>
            <p className="mb-6">
              Les <strong>activités familiales à La Réunion</strong> se distinguent par leur diversité et leur accessibilité. Des lagons cristallins de l'ouest aux sommets volcaniques, chaque région propose des <strong>sorties en famille</strong> adaptées. Les prestataires locaux sont habitués à accueillir les enfants et proposent un matériel de sécurité adapté à chaque âge. Que vous recherchiez des <strong>loisirs en famille</strong> tranquilles ou des aventures plus dynamiques, l'île offre un terrain de jeu naturel exceptionnel.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Les incontournables des activités avec enfants à La Réunion
            </h3>
            <p className="mb-4">
              L'<strong>observation des dauphins</strong> depuis Saint-Gilles reste l'activité phare des familles. Accessible dès 2 ans, cette sortie en mer de 2 heures permet d'approcher ces mammifères marins dans leur environnement naturel. Les <strong>balades à cheval</strong> au Grand Étang ou au Maïdo offrent une découverte douce des paysages réunionnais, parfaite pour initier les enfants à l'équitation.
            </p>
            <p className="mb-6">
              Le <strong>snorkeling dans les lagons</strong> constitue une excellente introduction à la découverte des fonds marins. Les sites de Saint-Leu et Saint-Gilles, protégés par la barrière de corail, offrent des conditions idéales pour les premiers masque et tuba des enfants. L'eau peu profonde et la richesse de la faune marine garantissent émerveillement et sécurité.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Activités terrestres pour toute la famille
            </h3>
            <p className="mb-4">
              Les <strong>randonnées familiales</strong> à La Réunion s'adaptent à tous les niveaux. Le sentier du Grand Étang propose une balade facile de 2 heures dans un cadre enchanteur, tandis que les hauteurs du Maïdo offrent des panoramas spectaculaires sur le cirque de Mafate. Ces <strong>sorties nature en famille</strong> permettent de sensibiliser les enfants à la préservation de l'environnement tropical.
            </p>
            <p className="mb-6">
              Pour les familles en quête de sensations, les <strong>vols en hélicoptère</strong> acceptent les enfants dès 2 ans sur siège individuel. Cette expérience unique offre une perspective aérienne sur les cirques classés UNESCO et le Piton de la Fournaise, créant des souvenirs inoubliables pour petits et grands.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Conseils pratiques pour réussir vos sorties familiales
            </h3>
            <p className="mb-4">
              Planifier des <strong>activités en famille à La Réunion</strong> nécessite quelques précautions. Vérifiez toujours l'âge minimum requis et les conditions physiques nécessaires. La plupart des activités fournissent l'équipement adapté aux enfants, mais pensez à apporter crème solaire, chapeau et eau en quantité suffisante.
            </p>
            <p className="mb-4">
              Le climat tropical impose des horaires adaptés : privilégiez les sorties matinales pour éviter la chaleur de midi. Les <strong>activités nautiques</strong> sont idéales toute l'année, tandis que les randonnées se pratiquent mieux pendant la saison sèche (mai à octobre).
            </p>
            <p className="mb-6">
              N'hésitez pas à communiquer avec les guides sur les spécificités de vos enfants. Les professionnels réunionnais sont habitués aux familles et sauront adapter leur approche pour que chacun profite pleinement de l'expérience.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Budget et organisation des activités familiales
            </h3>
            <p className="mb-4">
              Les tarifs des <strong>loisirs familiaux à La Réunion</strong> varient de 35€ à 110€ par personne selon l'activité choisie. Les enfants bénéficient souvent de réductions, et certaines activités comme l'observation des dauphins proposent des tarifs dégressifs pour les familles nombreuses.
            </p>
            <p className="mb-6">
              Pour optimiser votre budget, réservez à l'avance et groupez vos activités par région. La côte ouest concentre la majorité des activités nautiques, tandis que les hauts offrent randonnées et découvertes terrestres. Cette organisation permet de limiter les déplacements et de profiter pleinement de chaque région.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Notre sélection d'activités par âge
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">2-6 ans</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Observation des dauphins</li>
                    <li>• Balades à cheval découverte</li>
                    <li>• Kayak transparent (avec adulte)</li>
                    <li>• Vols en hélicoptère</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">7-12 ans</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Snorkeling dans les lagons</li>
                    <li>• Baptême de plongée (dès 8 ans)</li>
                    <li>• Randonnées guidées faciles</li>
                    <li>• Rafting sur rivière calme</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur les activités familiales
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

export default FamilyActivitiesPage;