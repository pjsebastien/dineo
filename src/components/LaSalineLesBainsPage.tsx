import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Waves, Palmtree, Sun } from 'lucide-react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import Header from './Header';
import Footer from './Footer';
import { Activity } from '../types/Activity';

const LaSalineLesBainsPage: React.FC = () => {
  // Filtrage automatique des activités à La Saline Les Bains
  const laSalineActivities = activities.filter(activity =>
    activity.lieu.toLowerCase().includes('la saline') ||
    activity.lieu.toLowerCase().includes('l\'hermitage')
  );

  const handleBookActivity = (activity: Activity) => {
    window.open(activity.url, '_blank');
  };

  const faqs = [
    {
      question: "Quelles sont les meilleures activités à faire à La Saline Les Bains ?",
      answer: "La Saline Les Bains offre le plus beau lagon de La Réunion, parfait pour le snorkeling, le paddle, le kayak transparent et la plongée. La plage de l'Hermitage est idéale pour la détente en famille. Les activités nautiques douces dans un cadre paradisiaque font sa renommée."
    },
    {
      question: "Pourquoi le lagon de La Saline est-il si réputé ?",
      answer: "Le lagon de La Saline-Hermitage est le plus étendu et le mieux préservé de l'île. Ses eaux peu profondes, claires et calmes sont parfaites pour les familles. Le récif corallien abrite une biodiversité exceptionnelle visible même en surface. La plage de sable blanc et les filaos créent un décor idyllique."
    },
    {
      question: "Combien coûtent les activités à La Saline Les Bains ?",
      answer: "Le snorkeling guidé coûte 30-40€, la location de kayak transparent 20-30€/h, le paddle 15-25€/h. Les sorties dauphins depuis La Saline sont à 50-60€. Ces tarifs abordables permettent de profiter du lagon sans se ruiner, avec du matériel de qualité et un encadrement si souhaité."
    },
    {
      question: "Quelle est la meilleure période pour visiter La Saline ?",
      answer: "La Saline bénéficie d'un ensoleillement exceptionnel toute l'année. La période mai-octobre offre une mer calme et une visibilité optimale. Les week-ends et vacances scolaires voient affluer les locaux ; privilégiez les jours de semaine pour plus de tranquillité sur la plage."
    },
    {
      question: "La Saline convient-elle aux enfants en bas âge ?",
      answer: "Absolument ! La Saline est la plage familiale par excellence à La Réunion. Le lagon peu profond permet aux enfants de barboter en sécurité. Les zones ombragées sous les filaos, les sanitaires, les food-trucks et l'absence de vagues en font un paradis pour les familles."
    },
    {
      question: "Peut-on observer des tortues marines à La Saline ?",
      answer: "Oui, le lagon de La Saline abrite des tortues marines vertes et imbriquées qui viennent brouter les herbiers. Les observer en snorkeling depuis la plage est fréquent, surtout tôt le matin. Respectez la distance de sécurité et ne les touchez jamais pour préserver ces espèces protégées."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Que faire à La Saline Les Bains à La Réunion ?</title>
        <meta name="description" content="Découvrez les activités à La Saline Les Bains : snorkeling dans le plus beau lagon, plage de l'Hermitage, paddle, kayak transparent, tortues marines. Station balnéaire familiale." />
        <meta name="keywords" content="que faire la saline réunion, lagon hermitage, plage la saline, snorkeling la saline, activités nautiques réunion, tortues marines réunion" />
        <link rel="canonical" href="https://dineo.re/que-faire-la-saline-les-bains-reunion" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <span className="text-gray-900">La Saline Les Bains</span>
        </nav>

        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux activités
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-400 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Que faire à La Saline Les Bains ?
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-cyan-100">
              Découvrez {laSalineActivities.length} activités dans le plus beau lagon de La Réunion
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Waves className="w-5 h-5 mr-2" />
                <span>Lagon exceptionnel</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Palmtree className="w-5 h-5 mr-2" />
                <span>Plage de l'Hermitage</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sun className="w-5 h-5 mr-2" />
                <span>Paradis familial</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        {laSalineActivities.length > 0 ? (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Activités à La Saline Les Bains
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {laSalineActivities.map((activity, index) => (
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
              Aucune activité spécifique à La Saline Les Bains pour le moment.
            </p>
            <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
              Voir toutes nos activités à La Réunion
            </Link>
          </div>
        )}

        {/* SEO Content */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Que faire à La Saline Les Bains à La Réunion ?
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-gray-600 mb-6">
              <strong>La Saline Les Bains</strong> abrite le plus beau lagon de La Réunion, la fameuse plage de l'Hermitage. Cette station balnéaire familiale de la côte ouest combine eaux cristallines, sable blanc immaculé et filaos majestueux pour créer un décor paradisiaque digne des Maldives ou des Seychelles.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              La plage de l'Hermitage : joyau de La Réunion
            </h3>
            <p className="mb-6">
              <strong>Visiter La Saline à La Réunion</strong> commence par la découverte de la plage de l'Hermitage. Cette étendue de sable blanc bordée de filaos centenaires offre ombrage naturel et cadre enchanteur. Le lagon peu profond s'étend sur plusieurs centaines de mètres, permettant de marcher loin dans l'eau tout en gardant pied. Cette configuration unique fait de l'Hermitage la plage préférée des familles réunionnaises.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Snorkeling : explorer le jardin sous-marin
            </h3>
            <p className="mb-4">
              Le <strong>snorkeling à La Saline</strong> révèle un aquarium naturel exceptionnel. Le récif corallien abrite poissons-perroquets multicolores, poissons-chirurgiens, poissons-anges et bien d'autres espèces tropicales. Les tortues marines vertes et imbriquées fréquentent régulièrement le lagon pour se nourrir d'algues et de méduses.
            </p>
            <p className="mb-6">
              Les <strong>activités à La Saline</strong> incluent des sorties snorkeling guidées qui vous emmènent vers les plus beaux spots du récif. Les guides naturalistes partagent leurs connaissances sur la biodiversité marine et les écosystèmes coralliens. Location de matériel disponible sur place pour explorer le lagon en autonomie.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Kayak transparent et paddle : glisser sur le lagon
            </h3>
            <p className="mb-4">
              <strong>Que faire à La Saline</strong> pour admirer les fonds sans se mouiller ? Le kayak transparent permet d'observer le récif comme dans un aquarium tout en pagayant tranquillement. Cette activité ludique plaît particulièrement aux enfants qui découvrent la vie marine sans masque ni tuba.
            </p>
            <p className="mb-6">
              Le stand-up paddle (SUP) connaît un succès grandissant à La Saline. L'eau calme du lagon offre des conditions parfaites pour débuter. Les locations proposent planches rigides ou gonflables, avec possibilité de cours d'initiation. Une façon originale et sportive d'explorer le lagon tout en travaillant son équilibre.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Observation des tortues marines
            </h3>
            <p className="mb-4">
              Les <strong>tortues de La Saline</strong> constituent une attraction naturelle majeure. Deux espèces protégées fréquentent le lagon : la tortue verte (la plus commune) et la tortue imbriquée. Observer ces reptiles marins gracieux dans leur habitat naturel émerveille petits et grands.
            </p>
            <p className="mb-6">
              Les meilleurs moments pour les observer sont tôt le matin ou en fin d'après-midi quand le lagon est moins fréquenté. Respectez une distance de sécurité de 5 mètres minimum et ne tentez jamais de les toucher ou les poursuivre. Ces pratiques stressent les animaux et sont sanctionnées par la loi.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Infrastructures et commodités
            </h3>
            <p className="mb-4">
              <strong>Visiter La Saline Les Bains</strong> est facilité par des infrastructures complètes. Parkings gratuits (arrivez tôt le week-end), sanitaires publics, douches, food-trucks proposant cuisine créole et glaces artisanales. Les vendeurs ambulants offrent fruits frais, beignets et boissons fraîches.
            </p>
            <p className="mb-6">
              Les maîtres-nageurs surveillent certaines zones pendant les périodes touristiques. Les commerces de location proposent masques, tubas, palmes, bouées et parasols. Cette organisation parfaite permet de passer une journée entière à la plage sans manquer de rien.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Conseils pratiques pour profiter du lagon
            </h3>
            <p className="mb-4">
              Pour profiter pleinement des <strong>activités à faire à La Saline</strong>, arrivez avant 9h le week-end pour trouver du stationnement. Apportez crème solaire bio respectueuse des coraux, chapeau et lunettes de soleil. L'ombre des filaos est précieuse mais ne suffit pas toujours.
            </p>
            <p className="mb-6">
              Ne marchez jamais sur les coraux, même morts, pour préserver l'écosystème fragile. Ne nourrissez pas les poissons, cette pratique modifie leur comportement naturel. Ramenez tous vos déchets pour maintenir la propreté légendaire de cette plage paradisiaque.
            </p>

            <div className="bg-cyan-50 p-6 rounded-lg mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Programme type d'une journée à La Saline Les Bains
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Matinée</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 8h : Arrivée et installation sous les filaos</li>
                    <li>• 8h30 : Session snorkeling recherche tortues</li>
                    <li>• 10h : Baignade en famille dans le lagon</li>
                    <li>• 11h30 : Pause glace artisanale</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Après-midi</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 12h : Pique-nique à l'ombre des filaos</li>
                    <li>• 14h : Location kayak transparent (1h)</li>
                    <li>• 16h : Détente et lecture sur la plage</li>
                    <li>• 18h : Coucher de soleil sur le lagon</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur La Saline Les Bains
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

export default LaSalineLesBainsPage;
