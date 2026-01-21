import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Waves, Users, Droplets, Sun } from 'lucide-react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import Header from './Header';
import Footer from './Footer';
import { Activity } from '../types/Activity';

const SainteSuzannePage: React.FC = () => {
  // Filtrage automatique des activités à Sainte-Suzanne
  const sainteSuzanneActivities = activities.filter(activity =>
    activity.lieu.toLowerCase().includes('sainte-suzanne') ||
    activity.lieu.toLowerCase().includes('sainte‑suzanne') ||
    activity.lieu.toLowerCase().includes('ste-suzanne')
  );

  const handleBookActivity = (activity: Activity) => {
    window.open(activity.url, '_blank');
  };

  const faqs = [
    {
      question: "Quelles sont les meilleures activités à faire à Sainte-Suzanne ?",
      answer: "Sainte-Suzanne est réputée pour le canyoning familial dans la Rivière Sainte-Suzanne et le Bassin Bœuf. Ces parcours aquatiques adaptés à tous les niveaux proposent sauts, toboggans naturels et descentes en rappel dans des vasques cristallines. La commune offre également de belles randonnées vers les cascades Niagara et les bassins naturels."
    },
    {
      question: "Pourquoi choisir Sainte-Suzanne pour le canyoning en famille ?",
      answer: "Les canyons de Sainte-Suzanne sont parmi les plus accessibles de La Réunion, parfaits pour les familles avec enfants dès 8 ans. Le Bassin Bœuf propose un parcours ludique avec des sauts facultatifs de 3 à 7 mètres, idéal pour une première expérience. L'encadrement professionnel et les vasques peu profondes rassurent les parents tout en amusant les enfants."
    },
    {
      question: "Combien coûtent les activités à Sainte-Suzanne ?",
      answer: "Le canyoning à Sainte-Suzanne est accessible avec des tarifs de 50€ à 70€ pour une demi-journée incluant l'encadrement diplômé et tout le matériel (combinaison néoprène, casque, baudrier). Les tarifs enfants sont souvent réduits. C'est l'une des activités les plus abordables de l'île pour découvrir le canyoning en famille."
    },
    {
      question: "Quelle est la meilleure période pour les activités à Sainte-Suzanne ?",
      answer: "Le canyoning à Sainte-Suzanne se pratique toute l'année grâce au climat tropical du nord. La saison sèche (mai à novembre) offre les meilleures conditions avec des débits d'eau modérés et un temps ensoleillé. Évitez les périodes de fortes pluies (janvier à mars) où le débit des rivières peut rendre les parcours dangereux."
    },
    {
      question: "Comment se rendre aux sites d'activités depuis Sainte-Suzanne ?",
      answer: "Sainte-Suzanne se situe à 20 minutes de Saint-Denis sur la côte nord. Les départs de canyoning se font depuis différents points d'accès à la rivière Sainte-Suzanne. Les prestataires communiquent le lieu de rendez-vous précis lors de la réservation. Un véhicule personnel facilite l'accès aux départs de randonnées et aux cascades."
    },
    {
      question: "Le canyoning à Sainte-Suzanne convient-il aux débutants complets ?",
      answer: "Absolument ! Les parcours de la Rivière Sainte-Suzanne sont spécialement conçus pour les débutants et les familles. Aucune expérience préalable n'est nécessaire. Les moniteurs adaptent le parcours selon l'âge et les capacités, tous les sauts sont facultatifs et des passages de contournement existent. C'est l'endroit idéal pour une première expérience de canyoning."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Que faire à Sainte-Suzanne à La Réunion ? | Activités et Visites</title>
        <meta name="description" content="Découvrez les activités à Sainte-Suzanne : canyoning familial Bassin Bœuf, Rivière Sainte-Suzanne, cascades Niagara, bassins naturels. Côte nord de La Réunion." />
        <meta name="keywords" content="que faire sainte-suzanne réunion, activités sainte-suzanne, canyoning sainte-suzanne, bassin bœuf, cascade niagara réunion" />
        <link rel="canonical" href="https://dineo.re/que-faire-sainte-suzanne-reunion" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <span className="text-gray-900">Sainte-Suzanne</span>
        </nav>

        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux activités
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Que faire à Sainte-Suzanne à La Réunion ?
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-blue-100">
              Découvrez {sainteSuzanneActivities.length} activités aquatiques sur la côte nord
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Waves className="w-5 h-5 mr-2" />
                <span>Canyoning familial</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Droplets className="w-5 h-5 mr-2" />
                <span>Cascades & bassins</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sun className="w-5 h-5 mr-2" />
                <span>Côte nord ensoleillée</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        {sainteSuzanneActivities.length > 0 ? (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Activités à Sainte-Suzanne
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sainteSuzanneActivities.map((activity, index) => (
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
              Aucune activité spécifique à Sainte-Suzanne pour le moment.
            </p>
            <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
              Voir toutes les activités à La Réunion
            </Link>
          </div>
        )}

        {/* SEO Content */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Que faire à Sainte-Suzanne à La Réunion ?
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-gray-600 mb-6">
              <strong>Sainte-Suzanne</strong> est une commune dynamique de la côte nord de La Réunion, réputée pour ses activités aquatiques familiales et ses paysages naturels préservés. Entre mer et montagnes, cette destination offre un accès privilégié aux cascades, bassins naturels et canyons ludiques parfaits pour toute la famille.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Canyoning familial dans la Rivière Sainte-Suzanne
            </h3>
            <p className="mb-4">
              L'<strong>activité phare de Sainte-Suzanne</strong> est le canyoning dans la rivière du même nom. Ce parcours aquatique ludique et accessible propose une succession de sauts, toboggans naturels et descentes en rappel dans des vasques aux eaux cristallines. Contrairement aux canyons extrêmes de l'île, celui de Sainte-Suzanne se distingue par son caractère familial et sécurisé.
            </p>
            <p className="mb-6">
              Le <strong>canyon de Sainte-Suzanne</strong> convient parfaitement aux familles avec enfants dès 8 ans et aux débutants. Les sauts sont tous facultatifs (de 3 à 7 mètres) avec des passages de contournement, les vasques sont peu profondes et l'encadrement par des moniteurs diplômés garantit sécurité et plaisir. La durée de 2 à 3 heures permet de profiter sans fatigue excessive, idéal pour une première expérience de canyoning.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Le Bassin Bœuf : joyau aquatique accessible
            </h3>
            <p className="mb-4">
              <strong>Visiter Sainte-Suzanne à La Réunion</strong>, c'est découvrir le fameux Bassin Bœuf, accessible depuis la Rivière Sainte-Suzanne ou depuis Saint-Benoît. Ce bassin naturel aux eaux turquoise est entouré de parois rocheuses et de végétation tropicale luxuriante. Le site offre un cadre paradisiaque pour le canyoning, la baignade et la détente en pleine nature.
            </p>
            <p className="mb-6">
              Le parcours aquatique jusqu'au Bassin Bœuf alterne nage, sauts et toboggans dans une eau fraîche et pure. Les formations géologiques créent des vasques successives où l'on peut plonger, sauter ou simplement nager. Ce <strong>site naturel de Sainte-Suzanne</strong> reste préservé du tourisme de masse malgré son accessibilité, offrant une expérience authentique de la nature réunionnaise.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Les cascades Niagara : spectacle naturel
            </h3>
            <p className="mb-4">
              <strong>Que faire à Sainte-Suzanne</strong> pour les amateurs de randonnée ? Les cascades Niagara constituent une destination prisée pour une balade familiale. Cette cascade à deux niveaux, haute d'environ 25 mètres, se jette dans un bassin où la baignade est possible. L'accès se fait par un sentier aménagé d'environ 20 minutes depuis le parking, adapté aux familles.
            </p>
            <p className="mb-6">
              Le site des cascades Niagara offre un cadre idyllique pour un pique-nique ou une pause rafraîchissante. La végétation tropicale environnante crée une ambiance de jardin d'Eden, avec fougères géantes, bananiers sauvages et arbres endémiques. Les matinées sont idéales pour profiter du site avant l'affluence et bénéficier d'une belle lumière pour les photos.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Patrimoine et culture à Sainte-Suzanne
            </h3>
            <p className="mb-4">
              Au-delà des <strong>activités nature à Sainte-Suzanne</strong>, la commune possède un riche patrimoine historique. Le Domaine du Grand Hazier, ancien domaine sucrier, abrite aujourd'hui un musée et un conservatoire botanique. Les allées ombragées, le jardin créole et l'architecture coloniale témoignent du passé agricole de l'île. C'est une halte culturelle enrichissante après les activités sportives.
            </p>
            <p className="mb-6">
              Le front de mer de Sainte-Suzanne offre une promenade agréable avec vue sur l'océan Indien. Les restaurants créoles proposent poissons grillés, rougails et carris dans une ambiance décontractée. Le marché forain du week-end permet de découvrir fruits tropicaux, épices et produits locaux. Cette dimension culturelle complète parfaitement les expériences nature.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Randonnées et balades nature
            </h3>
            <p className="mb-4">
              Les <strong>sentiers de randonnée à Sainte-Suzanne</strong> offrent différents niveaux de difficulté. La balade du Bocage traverse champs de cannes et forêts tropicales sur des sentiers ombragés. Le sentier du Niagara, bien aménagé, convient aux familles avec enfants. Pour les plus sportifs, la montée vers les hauts de Sainte-Suzanne offre des panoramas sur la côte nord et l'océan.
            </p>
            <p className="mb-6">
              Ces randonnées permettent d'observer la faune et la flore locales : oiseaux endémiques, papillons colorés, plantes médicinales traditionnelles. Les guides locaux partagent leur connaissance du territoire, racontant l'histoire du peuplement, les légendes créoles et les usages des plantes. Ces <strong>balades guidées depuis Sainte-Suzanne</strong> enrichissent la découverte sportive d'une dimension culturelle.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Conseils pratiques pour votre visite à Sainte-Suzanne
            </h3>
            <p className="mb-4">
              Pour profiter pleinement des <strong>activités à faire à Sainte-Suzanne</strong>, réservez vos sorties de canyoning à l'avance, surtout pendant les vacances scolaires et les week-ends. Prévoyez maillot de bain, serviette et vêtements de rechange. Les prestataires fournissent tout le matériel technique : combinaison néoprène, casque, baudrier et chaussures adaptées.
            </p>
            <p className="mb-6">
              Sainte-Suzanne se situe à 20 minutes de Saint-Denis, facilement accessible par la route nationale côtière. La commune offre restaurants, commerces et hébergements pour faciliter votre séjour. Pour le canyoning, suivez scrupuleusement les consignes de sécurité et vérifiez la météo avant de partir. En cas de pluies importantes, les rivières peuvent monter rapidement et devenir dangereuses. Les matinées sont généralement plus favorables avec moins d'affluence sur les sites.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Programme type d'une journée à Sainte-Suzanne en famille
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Matinée</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 8h : Rendez-vous pour le canyoning</li>
                    <li>• 8h30 : Briefing et équipement</li>
                    <li>• 9h-12h : Descente Rivière Sainte-Suzanne</li>
                    <li>• 12h : Pique-nique aux cascades Niagara</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Après-midi</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 13h : Baignade au bassin des cascades</li>
                    <li>• 15h : Visite Domaine du Grand Hazier</li>
                    <li>• 17h : Promenade front de mer</li>
                    <li>• 19h : Dîner créole en bord de mer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur Sainte-Suzanne
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

export default SainteSuzannePage;
