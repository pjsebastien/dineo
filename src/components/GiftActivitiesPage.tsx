import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Gift, Heart, Star, Calendar } from 'lucide-react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import Header from './Header';
import Footer from './Footer';
import { Activity } from '../types/Activity';

const GiftActivitiesPage: React.FC = () => {
  // Sélection des activités idéales à offrir
  const giftActivities = activities.filter(activity => {
    // Activités spectaculaires et mémorables
    const giftWorthyActivities = [
      'hélicoptère', 'parapente', 'plongée', 'observation', 'cheval', 'ulm', 'canyoning', 'quad'
    ];
    
    const isGiftWorthy = giftWorthyActivities.some(keyword => 
      activity.sous_categorie.toLowerCase().includes(keyword) ||
      activity.titre.toLowerCase().includes(keyword)
    );
    
    // Privilégier les activités avec de bonnes notes et des expériences marquantes
    const rating = parseFloat(activity.note.split('/')[0]);
    const hasGoodRating = rating >= 4.7;
    
    // Activités avec des points forts attractifs
    const hasGiftKeywords = activity.points_forts.toLowerCase().includes('vue') ||
      activity.points_forts.toLowerCase().includes('spectaculaire') ||
      activity.points_forts.toLowerCase().includes('unique') ||
      activity.points_forts.toLowerCase().includes('inoubliable');
    
    return (isGiftWorthy && hasGoodRating) || hasGiftKeywords;
  }).slice(0, 12);

  const handleBookActivity = (activity: Activity) => {
    window.open(activity.url, '_blank');
  };

  const faqs = [
    {
      question: "Comment offrir une activité à La Réunion en cadeau ?",
      answer: "La plupart des prestataires proposent des bons cadeaux valables 6 à 12 mois. Lors de la réservation via notre plateforme partenaire, sélectionnez l'option bon cadeau. Vous recevrez un voucher par email que vous pouvez imprimer ou transférer. Le bénéficiaire choisit ensuite sa date selon ses disponibilités et la météo."
    },
    {
      question: "Quelles sont les meilleures activités à offrir pour un anniversaire ?",
      answer: "Les vols en hélicoptère, parapente et ULM créent des souvenirs inoubliables. Pour les amateurs de nature, l'observation des dauphins/baleines ou les balades à cheval sont parfaites. Les baptêmes de plongée marquent aussi les esprits pour une première expérience sous-marine."
    },
    {
      question: "Peut-on offrir une activité sans connaître le niveau de la personne ?",
      answer: "Oui ! Privilégiez les activités 'Accessible à tous' comme l'hélicoptère, l'observation des cétacés, ou les balades à cheval découverte. Ces expériences s'adaptent à tous les niveaux et ne nécessitent aucune expérience préalable."
    },
    {
      question: "Quel budget prévoir pour offrir une activité mémorable ?",
      answer: "Comptez 85-110€ pour des expériences marquantes comme le parapente ou les balades à cheval longues, 305-345€ pour les vols en hélicoptère exceptionnels. Les activités à 40-65€ comme l'observation des dauphins restent des cadeaux très appréciés."
    },
    {
      question: "Les bons cadeaux ont-ils une date de validité ?",
      answer: "Généralement 6 à 12 mois selon le prestataire. Cette durée permet au bénéficiaire de choisir la meilleure période selon ses disponibilités et la saison (baleines visibles juillet-octobre par exemple). Les conditions sont précisées sur chaque bon cadeau."
    },
    {
      question: "Peut-on personnaliser le cadeau avec un message ?",
      answer: "Absolument ! La plupart des bons cadeaux permettent d'ajouter un message personnalisé. Vous pouvez aussi choisir une présentation spéciale (carte cadeau, coffret) selon le prestataire. Certains proposent même des certificats personnalisés avec photo."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Activités à Offrir à La Réunion | Bons Cadeaux Expériences</title>
        <meta name="description" content="Offrez une expérience inoubliable à La Réunion : hélicoptère, parapente, plongée, observation dauphins. Bons cadeaux valables 12 mois, souvenirs garantis." />
        <meta name="keywords" content="cadeau activité la réunion, bon cadeau réunion, offrir expérience réunion, cadeau original réunion, voucher activité réunion" />
        <link rel="canonical" href="https://dineo.re/activites-a-offrir-reunion" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <span className="text-gray-900">Activités à offrir</span>
        </nav>

        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux activités
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Activités à Offrir à La Réunion
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-red-100">
              Offrez des souvenirs inoubliables : {giftActivities.length} expériences exceptionnelles en bons cadeaux
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Gift className="w-5 h-5 mr-2" />
                <span>Bons cadeaux disponibles</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Validité 6-12 mois</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Heart className="w-5 h-5 mr-2" />
                <span>Souvenirs garantis</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Nos expériences cadeaux sélectionnées
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {giftActivities.map((activity, index) => (
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
            Offrir une activité à La Réunion
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-gray-600 mb-6">
              Offrir une <strong>activité à La Réunion</strong> constitue un cadeau original et mémorable. L'île intense propose des expériences uniques qui marquent les esprits et créent des souvenirs durables, bien plus précieux que les objets matériels.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Pourquoi offrir une expérience plutôt qu'un objet ?
            </h3>
            <p className="mb-6">
              Les <strong>cadeaux d'expérience à La Réunion</strong> créent des souvenirs impérissables. Contrairement aux objets qui s'usent ou se cassent, une expérience vécue reste gravée dans la mémoire. Elle permet aussi de découvrir de nouvelles passions, de sortir de sa zone de confort, et de vivre des émotions authentiques dans le cadre exceptionnel de l'île intense.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Les expériences aériennes : des cadeaux spectaculaires
            </h3>
            <p className="mb-4">
              Les <strong>vols en hélicoptère</strong> constituent le cadeau ultime pour découvrir La Réunion sous un angle unique. Ces survols de 45 à 55 minutes au-dessus des cirques, cascades et du Piton de la Fournaise offrent des perspectives inoubliables. Le bénéficiaire repart avec un diplôme de vol et des souvenirs extraordinaires de cette aventure aérienne.
            </p>
            <p className="mb-6">
              Le <strong>parapente au-dessus du lagon</strong> de Saint-Leu propose une expérience plus accessible mais tout aussi mémorable. Ces vols de 20 à 40 minutes selon la formule permettent de survoler les eaux turquoise en toute sécurité, encadré par des moniteurs diplômés. L'émotion de ce vol libre reste gravée longtemps dans les mémoires.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Découvertes marines inoubliables
            </h3>
            <p className="mb-4">
              L'<strong>observation des dauphins et baleines</strong> constitue un cadeau émouvant pour les amoureux de la nature. Ces sorties de 2 heures depuis Saint-Gilles permettent d'approcher ces mammifères marins dans leur environnement naturel. La magie de ces rencontres crée des moments d'émotion pure, particulièrement appréciés des enfants et adolescents.
            </p>
            <p className="mb-6">
              Les <strong>baptêmes de plongée</strong> dans les eaux cristallines de Saint-Leu ou Saint-Gilles offrent une première découverte du monde sous-marin tropical. Cette initiation de 3 heures, avec 20-25 minutes d'immersion, révèle la richesse des fonds coralliens réunionnais. Le diplôme remis à l'issue constitue un souvenir tangible de cette première expérience aquatique.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Aventures terrestres mémorables
            </h3>
            <p className="mb-4">
              Les <strong>balades à cheval</strong> dans les hauteurs du Maïdo ou autour du Grand Étang séduisent par leur accessibilité et leur poésie. Ces sorties équestres, adaptées aux débutants, permettent une découverte douce des paysages réunionnais. L'initiation incluse rassure les novices et permet à chacun de profiter pleinement de l'expérience.
            </p>
            <p className="mb-6">
              Les <strong>randonnées guidées</strong> vers le Piton de la Fournaise constituent un cadeau exceptionnel pour les amateurs de nature et de géologie. Cette aventure de 6 heures au cœur du volcan actif, accompagnée d'un guide de montagne, révèle des paysages lunaires uniques au monde et sensibilise à la formation géologique de l'île.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Expériences originales et insolites
            </h3>
            <p className="mb-4">
              Le <strong>canyoning</strong> dans les rivières Langevin ou Fleurs Jaunes propose une aventure rafraîchissante et ludique. Ces descentes de 3 à 5 heures, ponctuées de rappels, toboggans et sauts dans des vasques cristallines, créent des souvenirs d'aventure partagée au cœur de la végétation tropicale.
            </p>
            <p className="mb-6">
              Les <strong>randonnées en quad</strong> sur les pistes du Maïdo offrent une découverte motorisée des hauteurs réunionnaises. Ces sorties, de 40 minutes à une journée complète, révèlent des panoramas secrets sur les cirques tout en procurant des sensations de pilotage dans un cadre naturel préservé.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Comment choisir l'activité cadeau parfaite ?
            </h3>
            <p className="mb-4">
              Pour choisir le <strong>bon cadeau d'activité</strong>, considérez les goûts et la personnalité du bénéficiaire. Les amateurs de sensations fortes apprécieront hélicoptère, parapente ou canyoning. Les amoureux de la nature préféreront observation des cétacés, balades à cheval ou randonnées guidées.
            </p>
            <p className="mb-4">
              Vérifiez les contraintes physiques et l'âge minimum requis. Privilégiez les activités "Accessible à tous" si vous ne connaissez pas le niveau du bénéficiaire. La plupart des prestataires s'adaptent et proposent des alternatives selon les capacités de chacun.
            </p>
            <p className="mb-6">
              Considérez la saison : certaines activités comme l'observation des baleines sont saisonnières (juillet-octobre), tandis que d'autres se pratiquent toute l'année. Les bons cadeaux ont généralement une validité de 6 à 12 mois, laissant le temps de choisir le moment idéal.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Modalités pratiques des bons cadeaux
            </h3>
            <p className="mb-4">
              Les <strong>bons cadeaux d'activité</strong> se commandent facilement en ligne. Vous recevez un voucher par email, personnalisable avec un message, que vous pouvez imprimer ou transférer directement. Le bénéficiaire contacte ensuite le prestataire pour choisir sa date selon ses disponibilités et les conditions météorologiques.
            </p>
            <p className="mb-6">
              La validité varie de 6 à 12 mois selon l'activité, permettant une planification flexible. En cas d'annulation météo, une nouvelle date est proposée sans frais supplémentaires. Cette flexibilité garantit que le cadeau pourra être utilisé dans les meilleures conditions.
            </p>

            <div className="bg-red-50 p-6 rounded-lg mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Nos suggestions cadeaux par occasion
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Anniversaires marquants</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Vol en hélicoptère (expérience ultime)</li>
                    <li>• Parapente XL 40 min (sensations)</li>
                    <li>• Canyoning Fleurs Jaunes (aventure)</li>
                    <li>• Randonnée Fournaise (découverte)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Premières expériences</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Observation dauphins (émotion)</li>
                    <li>• Baptême plongée (découverte)</li>
                    <li>• Balade à cheval (douceur)</li>
                    <li>• Vol ULM (initiation aérienne)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur les cadeaux d'activité
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

export default GiftActivitiesPage;