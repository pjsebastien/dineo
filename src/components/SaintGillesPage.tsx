import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Waves, Fish, Sun } from 'lucide-react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import Header from './Header';
import Footer from './Footer';
import { Activity } from '../types/Activity';

const SaintGillesPage: React.FC = () => {
  // Filtrage automatique des activités à Saint-Gilles-Les-Bains
  const saintGillesActivities = activities.filter(activity =>
    activity.lieu.toLowerCase().includes('saint-gilles')
  );

  const handleBookActivity = (activity: Activity) => {
    window.open(activity.url, '_blank');
  };

  const faqs = [
    {
      question: "Quelles sont les meilleures activités à faire à Saint-Gilles-Les-Bains ?",
      answer: "Saint-Gilles est la capitale balnéaire de La Réunion, offrant plongée sous-marine, snorkeling, observation des dauphins et baleines, surf et paddle. La plage des Roches Noires et le lagon protégé permettent la baignade en toute sécurité. C'est le paradis des activités nautiques de l'île."
    },
    {
      question: "Pourquoi Saint-Gilles est-elle si prisée pour les activités aquatiques ?",
      answer: "Saint-Gilles bénéficie du lagon le plus développé de La Réunion, protégé par une barrière de corail. Ses eaux calmes et claires sont idéales pour la plongée, avec une biodiversité marine exceptionnelle. La proximité avec le large permet l'observation des cétacés. Le climat ensoleillé garantit des conditions optimales toute l'année."
    },
    {
      question: "Combien coûtent les activités à Saint-Gilles ?",
      answer: "Les sorties observation dauphins/baleines débutent à 45-60€, les baptêmes de plongée à 60-80€, le snorkeling à 30-40€. Ces tarifs incluent généralement l'équipement et l'encadrement professionnel. Un excellent rapport qualité-prix pour découvrir les richesses marines de l'océan Indien."
    },
    {
      question: "Quelle est la meilleure période pour les activités à Saint-Gilles ?",
      answer: "La période mai à octobre (hiver austral) offre les meilleures conditions avec une mer calme et une visibilité excellente pour la plongée. L'observation des baleines se concentre de juin à octobre. L'été (novembre-avril) est plus chaud mais peut connaître des cyclones."
    },
    {
      question: "Peut-on voir des dauphins et des baleines à Saint-Gilles ?",
      answer: "Oui, Saint-Gilles est le meilleur spot de La Réunion pour observer les dauphins (présents toute l'année) et les baleines à bosse (juin à octobre). Les sorties matinales offrent les meilleures chances d'observation. Les prestataires respectent une charte éthique garantissant le bien-être des cétacés."
    },
    {
      question: "Saint-Gilles convient-elle aux familles avec enfants ?",
      answer: "Absolument ! Le lagon de Saint-Gilles est peu profond et protégé, idéal pour les enfants. Les plages sont surveillées, les activités adaptées dès 6-8 ans (snorkeling, kayak, paddle). L'ambiance familiale et les infrastructures complètes en font la destination balnéaire familiale par excellence."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Que faire à Saint-Gilles-Les-Bains à La Réunion ?</title>
        <meta name="description" content="Découvrez les activités à Saint-Gilles-Les-Bains : plongée, observation dauphins et baleines, snorkeling, surf. La station balnéaire de La Réunion." />
        <meta name="keywords" content="que faire saint-gilles réunion, saint-gilles-les-bains, plongée saint-gilles, dauphins réunion, lagon saint-gilles, activités nautiques réunion" />
        <link rel="canonical" href="https://dineo.re/que-faire-saint-gilles-les-bains-reunion" />
          <meta property="og:title" content="Que faire à Saint-Gilles-Les-Bains à La Réunion ?" />
          <meta property="og:description" content="Découvrez les activités à Saint-Gilles-Les-Bains : plongée, observation dauphins et baleines, snorkeling, surf. La station balnéaire de La Réunion." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dineo.re/que-faire-saint-gilles-les-bains-reunion" />
          <meta property="og:image" content="https://dineo.re/og-image.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Que faire à Saint-Gilles-Les-Bains à La Réunion ?" />
          <meta name="twitter:description" content="Découvrez les activités à Saint-Gilles-Les-Bains : plongée, observation dauphins et baleines, snorkeling, surf. La station balnéaire de La Réunion." />
          <meta name="twitter:image" content="https://dineo.re/og-image.jpg" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <span className="text-gray-900">Saint-Gilles-Les-Bains</span>
        </nav>

        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux activités
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Que faire à Saint-Gilles-Les-Bains ?
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-blue-100">
              Découvrez {saintGillesActivities.length} activités dans la capitale balnéaire de La Réunion
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Waves className="w-5 h-5 mr-2" />
                <span>Lagon protégé</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Fish className="w-5 h-5 mr-2" />
                <span>Plongée & snorkeling</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sun className="w-5 h-5 mr-2" />
                <span>Dauphins & baleines</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        {saintGillesActivities.length > 0 ? (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Activités à Saint-Gilles-Les-Bains
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {saintGillesActivities.map((activity, index) => (
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
              Aucune activité spécifique à Saint-Gilles-Les-Bains pour le moment.
            </p>
            <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
              Voir toutes les activités à La Réunion
            </Link>
          </div>
        )}

        {/* SEO Content */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Que faire à Saint-Gilles-Les-Bains à La Réunion ?
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-gray-600 mb-6">
              <strong>Saint-Gilles-Les-Bains</strong> est la station balnéaire incontournable de La Réunion. Située sur la côte ouest, elle bénéficie d'un ensoleillement exceptionnel, d'un lagon protégé et d'une offre d'activités nautiques sans égale dans l'océan Indien. C'est le point de départ idéal pour explorer les richesses marines de l'île intense.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Le lagon de Saint-Gilles : paradis aquatique
            </h3>
            <p className="mb-6">
              <strong>Visiter Saint-Gilles à La Réunion</strong> signifie découvrir le plus beau lagon de l'île. Protégé par une barrière de corail, il offre des eaux calmes et transparentes idéales pour la baignade, le snorkeling et la plongée. Les plages de sable blanc comme celle des Roches Noires contrastent magnifiquement avec les eaux turquoise et créent des paysages dignes d'une carte postale tropicale.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Plongée sous-marine : explorer les fonds marins
            </h3>
            <p className="mb-4">
              La <strong>plongée à Saint-Gilles</strong> révèle une biodiversité marine exceptionnelle. Les sites de plongée abritent tortues marines, poissons tropicaux colorés, raies, murènes et parfois même requins de récif. Les tombants coralliens descendent jusqu'à 60 mètres, offrant des paysages sous-marins spectaculaires accessibles à tous les niveaux.
            </p>
            <p className="mb-6">
              Les <strong>activités à Saint-Gilles</strong> incluent baptêmes de plongée pour débutants, explorations pour plongeurs certifiés et formations PADI/SSI. Les centres de plongée professionnels garantissent sécurité et respect de l'environnement marin. Les sorties matinales offrent les meilleures conditions de visibilité et de rencontres marines.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Observation des dauphins et baleines
            </h3>
            <p className="mb-4">
              <strong>Que faire à Saint-Gilles</strong> pour une expérience inoubliable ? Les sorties d'observation des cétacés attirent des visiteurs du monde entier. Les dauphins long-bec, dauphins tachetés et grands dauphins évoluent au large toute l'année. De juin à octobre, les baleines à bosse viennent se reproduire dans les eaux chaudes, offrant des spectacles aquatiques majestueux.
            </p>
            <p className="mb-6">
              Les prestataires respectent une charte éthique stricte garantissant le bien-être des animaux. Les observations se font à distance respectueuse, sans nage avec les dauphins sauvages (pratique interdite). Ces sorties matinales de 2-3 heures combinent souvent observation des cétacés et snorkeling dans le lagon.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Sports nautiques et activités de glisse
            </h3>
            <p className="mb-4">
              Les <strong>activités nautiques à Saint-Gilles</strong> satisfont tous les goûts. Le surf se pratique aux spots de Roches Noires et Boucan Canot (avec vigies anti-requin). Le paddle et le kayak permettent d'explorer le lagon en douceur. Le kitesurf trouve des conditions idéales avec les alizés réguliers de la côte ouest.
            </p>
            <p className="mb-6">
              Les écoles de voile proposent cours et locations. La pêche au gros attire les passionnés avec possibilité de capturer marlins, thons et dorades coryphènes. Ces activités variées font de Saint-Gilles le centre névralgique des loisirs nautiques réunionnais.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Vie nocturne et ambiance festive
            </h3>
            <p className="mb-4">
              <strong>Visiter Saint-Gilles-Les-Bains</strong> c'est aussi profiter de l'ambiance animée du front de mer. Les restaurants proposent cuisine créole, fruits de mer frais et saveurs du monde. Le marché forain hebdomadaire offre produits locaux et artisanat. Les bars et clubs animent les nuits avec concerts et soirées DJ.
            </p>
            <p className="mb-6">
              La marina accueille bateaux de plaisance et yachts de luxe. Les boutiques de plongée, surf-shops et galeries d'art créent une atmosphère décontractée typique des stations balnéaires tropicales. Cette vie sociale dynamique contraste avec la tranquillité des autres régions de l'île.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Conseils pratiques pour votre séjour à Saint-Gilles
            </h3>
            <p className="mb-4">
              Pour profiter pleinement des <strong>activités à faire à Saint-Gilles</strong>, réservez vos sorties nautiques à l'avance en haute saison (juillet-août, vacances scolaires). Respectez les zones de baignade surveillées et les consignes de sécurité anti-requin. La crème solaire est indispensable mais choisissez des formules respectueuses des coraux.
            </p>
            <p className="mb-6">
              L'hébergement à Saint-Gilles varie des hôtels de luxe aux locations saisonnières et chambres d'hôtes. La proximité avec l'aéroport de Saint-Denis (45 minutes) facilite l'accès. Location de voiture recommandée pour explorer les autres sites de l'île tout en profitant du soleil garanti de Saint-Gilles.
            </p>

            <div className="bg-cyan-50 p-6 rounded-lg mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Programme type d'une journée à Saint-Gilles-Les-Bains
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Matinée</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 7h : Sortie observation dauphins et baleines</li>
                    <li>• 10h : Retour et petit-déjeuner en terrasse</li>
                    <li>• 11h : Session snorkeling dans le lagon</li>
                    <li>• 12h30 : Déjeuner poissons grillés</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Après-midi</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 14h : Plongée sous-marine (2 plongées)</li>
                    <li>• 17h : Détente plage des Roches Noires</li>
                    <li>• 19h : Coucher de soleil sur la marina</li>
                    <li>• 20h : Dîner fruits de mer front de mer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur Saint-Gilles-Les-Bains
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

export default SaintGillesPage;
