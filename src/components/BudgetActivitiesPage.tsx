import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, DollarSign, ThumbsUp, Clock, Users } from 'lucide-react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import Header from './Header';
import Footer from './Footer';
import { Activity } from '../types/Activity';
import { extractPrice } from '../utils/seo';

const BudgetActivitiesPage: React.FC = () => {
  // Sélection des activités pas chères (moins de 70€)
  const budgetActivities = activities.filter(activity => {
    const price = extractPrice(activity.prix_des);
    return price <= 70;
  }).sort((a, b) => extractPrice(a.prix_des) - extractPrice(b.prix_des));

  const handleBookActivity = (activity: Activity) => {
    window.open(activity.url, '_blank');
  };

  const faqs = [
    {
      question: "Quelles sont les activités les moins chères à La Réunion ?",
      answer: "Les activités les plus abordables incluent les balades à cheval découverte (35€), le snorkeling dans les lagons (35€), l'observation des dauphins (40€), et les randonnées guidées (57€). Ces tarifs incluent généralement l'équipement et l'encadrement professionnel."
    },
    {
      question: "Peut-on faire des activités de qualité avec un petit budget à La Réunion ?",
      answer: "Absolument ! Les activités à petit prix ne sacrifient rien sur la qualité. Tous nos prestataires sont diplômés, l'équipement est aux normes, et l'encadrement reste professionnel. Le tarif reflète souvent la durée ou la complexité logistique, pas la qualité de service."
    },
    {
      question: "Y a-t-il des réductions pour les familles ou groupes ?",
      answer: "Beaucoup de prestataires proposent des tarifs dégressifs pour les familles nombreuses ou les groupes. Les enfants bénéficient souvent de réductions. N'hésitez pas à demander lors de votre réservation, surtout pour les activités comme l'observation des dauphins."
    },
    {
      question: "Comment économiser sur les activités à La Réunion ?",
      answer: "Réservez à l'avance pour bénéficier des meilleurs tarifs, groupez vos activités par région pour limiter les déplacements, et privilégiez les sorties matinales souvent moins chères. Certaines activités proposent des formules courtes plus abordables."
    },
    {
      question: "Les activités pas chères incluent-elles l'équipement ?",
      answer: "Oui, même les activités à petit prix incluent tout l'équipement nécessaire : masques et tubas pour le snorkeling, casques et bombes pour l'équitation, gilets de sauvetage pour les sorties en mer. Seuls les effets personnels restent à votre charge."
    },
    {
      question: "Quelle est la différence entre activités chères et pas chères ?",
      answer: "La différence porte souvent sur la durée (1h30 vs 3h), le moyen de transport (bateau vs hélicoptère), ou la complexité logistique. La qualité de l'encadrement et la sécurité restent identiques. Les activités courtes permettent de découvrir à moindre coût."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Activités Pas Chères à La Réunion | Petit Budget</title>
        <meta name="description" content="Découvrez les meilleures activités à petit prix à La Réunion : snorkeling 35€, balades à cheval 35€, observation dauphins 40€. Qualité garantie, budget maîtrisé." />
        <meta name="keywords" content="activités pas chères la réunion, petit budget réunion, activité abordable réunion, pas cher réunion, économique réunion" />
        <link rel="canonical" href="https://dineo.re/activites-pas-cheres-reunion" />
          <meta property="og:title" content="Activités Pas Chères à La Réunion | Petit Budget" />
          <meta property="og:description" content="Découvrez les meilleures activités à petit prix à La Réunion : snorkeling 35€, balades à cheval 35€, observation dauphins 40€. Qualité garantie, budget maîtrisé." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dineo.re/activites-pas-cheres-reunion" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <span className="text-gray-900">Activités pas chères</span>
        </nav>

        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux activités
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Activités Pas Chères à La Réunion
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-green-100">
              Découvrez l'île intense sans vous ruiner : {budgetActivities.length} activités de qualité à partir de 35€
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <DollarSign className="w-5 h-5 mr-2" />
                <span>À partir de 35€</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <ThumbsUp className="w-5 h-5 mr-2" />
                <span>Qualité garantie</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="w-5 h-5 mr-2" />
                <span>Accessible à tous</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Les activités à petit prix sélectionnées
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {budgetActivities.map((activity, index) => (
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
            Toutes les activités abordables à La Réunion
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-gray-600 mb-6">
              Découvrir La Réunion ne nécessite pas un budget conséquent. L'île propose de nombreuses <strong>activités pas chères</strong> qui permettent de vivre des expériences authentiques et mémorables sans compromettre la qualité de l'encadrement ou de l'équipement.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Pourquoi choisir des activités à petit budget ?
            </h3>
            <p className="mb-6">
              Les <strong>activités abordables à La Réunion</strong> offrent un excellent rapport qualité-prix. Elles permettent de multiplier les expériences durant votre séjour, de découvrir différents aspects de l'île, et de garder du budget pour d'autres plaisirs comme la gastronomie locale ou les souvenirs. Ces activités économiques ne sacrifient rien sur la sécurité, l'encadrement professionnel ou la qualité de l'équipement fourni.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Découvertes marines à prix doux
            </h3>
            <p className="mb-4">
              Le <strong>snorkeling dans les lagons</strong> de Saint-Leu ou Saint-Gilles, proposé dès 35€, constitue l'une des meilleures introductions aux richesses sous-marines réunionnaises. Cette sortie de 1h30 inclut tout l'équipement (masque, tuba, palmes, combinaison) et l'accompagnement d'un guide expérimenté qui vous révèle les secrets de la faune corallienne.
            </p>
            <p className="mb-6">
              L'<strong>observation des dauphins</strong> depuis Saint-Gilles, accessible dès 40€, offre 2 heures d'émotion pure en mer. Ces sorties matinales en petit comité maximisent les chances de rencontres avec ces mammifères marins tout en respectant leur environnement naturel. Le tarif inclut l'embarquement et l'expertise du skipper diplômé.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Aventures terrestres économiques
            </h3>
            <p className="mb-4">
              Les <strong>balades à cheval découverte</strong> au Maïdo ou au Grand Étang, proposées dès 35€, permettent une approche douce et accessible des paysages réunionnais. Ces sorties d'1 heure incluent l'initiation, l'équipement de sécurité et l'accompagnement sur des chevaux parfaitement dressés pour les débutants.
            </p>
            <p className="mb-6">
              Les <strong>randonnées guidées</strong> vers le Piton de la Fournaise, dès 57€ en formule groupe, offrent 6 heures d'aventure au cœur du volcan actif. Ce tarif exceptionnel inclut l'accompagnement par un guide de montagne diplômé et une collation locale, pour une découverte approfondie des paysages lunaires de l'enclos.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Activités sportives à budget maîtrisé
            </h3>
            <p className="mb-4">
              Le <strong>rafting sur la rivière des Marsouins</strong>, proposé dès 50€, combine sport et découverte de la végétation tropicale. Cette descente de 3 heures inclut tout l'équipement de sécurité (raft, casque, gilet, combinaison) et l'encadrement par des guides expérimentés qui adaptent le parcours au niveau d'eau.
            </p>
            <p className="mb-6">
              La <strong>descente VTT du Maïdo</strong>, dès 55€, propose 4 heures d'aventure incluant le transport en navette vers le sommet, la location du VTT et de l'équipement de protection, plus l'accompagnement d'un guide connaisseur des meilleurs singles avec vue sur Mafate.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Expériences aquatiques originales
            </h3>
            <p className="mb-4">
              Le <strong>kayak transparent</strong> dans le lagon de Saint-Gilles, dès 50€, révolutionne l'observation marine. Cette sortie de 2 heures avec embarcation à coque translucide permet d'observer les fonds marins tout en pagayant, guidée par un naturaliste expert qui enrichit votre découverte de la biodiversité corallienne.
            </p>
            <p className="mb-6">
              Le <strong>canyoning dans la rivière Langevin</strong>, proposé dès 65€, offre 3 heures d'aventure rafraîchissante. Cette initiation ludique aux techniques de canyon inclut l'équipement complet (combinaison, casque, baudrier) et même les photos de votre descente, pour des souvenirs inoubliables à petit prix.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Conseils pour optimiser votre budget activités
            </h3>
            <p className="mb-4">
              Pour profiter au maximum des <strong>activités économiques à La Réunion</strong>, planifiez vos sorties par région pour limiter les frais de transport. La côte ouest concentre les activités nautiques abordables, tandis que les hauts offrent randonnées et balades à cheval à prix doux.
            </p>
            <p className="mb-4">
              Réservez à l'avance pour bénéficier des meilleurs tarifs et de la disponibilité. Beaucoup d'activités proposent des réductions pour les réservations anticipées ou les groupes. N'hésitez pas à demander les conditions spéciales familles ou étudiants.
            </p>
            <p className="mb-6">
              Privilégiez les sorties matinales, souvent moins chères et offrant de meilleures conditions (mer plus calme, températures douces, faune plus active). Ces créneaux permettent aussi de garder l'après-midi libre pour des découvertes gratuites comme les plages ou sentiers botaniques.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Nos meilleures affaires par budget
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">35-40€</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Snorkeling lagon (35€)</li>
                    <li>• Balade cheval découverte (35€)</li>
                    <li>• Observation dauphins (40€)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">45-55€</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Spéléologie tunnels lave (45€)</li>
                    <li>• Kayak transparent (50€)</li>
                    <li>• Rafting Marsouins (50€)</li>
                    <li>• Descente VTT Maïdo (55€)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">57-70€</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Randonnée Fournaise (57€)</li>
                    <li>• Canyoning Langevin (65€)</li>
                    <li>• Balade cheval Grand Étang (50€)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur les activités à petit budget
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

export default BudgetActivitiesPage;