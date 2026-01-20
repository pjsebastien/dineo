import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, MapPin, Waves, Wind, Fish } from 'lucide-react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import Header from './Header';
import Footer from './Footer';
import { Activity } from '../types/Activity';

const SaintLeuPage: React.FC = () => {
  // Filtrage automatique des activités à Saint-Leu
  const saintLeuActivities = activities.filter(activity => 
    activity.lieu.toLowerCase().includes('saint-leu') ||
    activity.lieu.toLowerCase().includes('saint‑leu') ||
    activity.lieu.toLowerCase().includes('baie de saint-leu') ||
    activity.lieu.toLowerCase().includes('baie de saint‑leu')
  );

  const handleBookActivity = (activity: Activity) => {
    window.open(activity.url, '_blank');
  };

  const faqs = [
    {
      question: "Quelles sont les meilleures activités nautiques à Saint-Leu ?",
      answer: "Saint-Leu est réputé pour ses activités aquatiques exceptionnelles : snorkeling dans la Réserve marine, baptêmes de plongée sous-marine, et kayak transparent. La baie protégée offre des conditions idéales toute l'année avec une eau cristalline et une faune marine riche."
    },
    {
      question: "Pourquoi Saint-Leu est-il idéal pour le parapente ?",
      answer: "Saint-Leu bénéficie de conditions aérologiques exceptionnelles avec des vents thermiques réguliers et un relief favorable. Les vols au-dessus du lagon offrent des panoramas uniques, et l'atterrissage se fait en douceur sur la plage. C'est l'un des meilleurs spots de parapente de l'océan Indien."
    },
    {
      question: "La Réserve marine de Saint-Leu est-elle accessible aux débutants ?",
      answer: "Absolument ! La Réserve naturelle marine de La Réunion à Saint-Leu propose des activités adaptées à tous les niveaux. Les baptêmes de plongée se déroulent à faible profondeur (6m maximum), et le snorkeling est accessible dès 6 ans avec un guide expérimenté."
    },
    {
      question: "Quelle est la meilleure période pour les activités à Saint-Leu ?",
      answer: "Saint-Leu bénéficie d'un climat favorable toute l'année. La saison sèche (mai-octobre) offre une mer plus calme pour la plongée, tandis que l'été austral (novembre-avril) est idéal pour les activités aériennes. Les conditions de parapente sont excellentes d'avril à novembre."
    },
    {
      question: "Peut-on voir des tortues marines à Saint-Leu ?",
      answer: "Oui ! La Réserve marine de Saint-Leu abrite des tortues vertes et imbriquées. Le centre Kélonia, situé à proximité, se consacre à leur protection. Les sorties snorkeling et plongée offrent de bonnes chances d'observation, surtout tôt le matin ou en fin d'après-midi."
    },
    {
      question: "Comment combiner plusieurs activités à Saint-Leu dans la journée ?",
      answer: "Saint-Leu permet facilement de combiner activités nautiques le matin (plongée ou snorkeling) et aériennes l'après-midi (parapente). La proximité des sites et la concentration des prestataires facilitent l'organisation. Prévoyez du temps de repos entre les activités."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Que faire à Saint-Leu à La Réunion ? | Activités Nautiques et Parapente</title>
        <meta name="description" content="Découvrez les activités incontournables à Saint-Leu : plongée Réserve marine, parapente lagon, snorkeling. Guide complet des expériences aquatiques et aériennes." />
        <meta name="keywords" content="que faire saint-leu réunion, activités saint-leu, plongée saint-leu, parapente saint-leu, réserve marine saint-leu, snorkeling saint-leu" />
        <link rel="canonical" href="https://dineo.re/que-faire-saint-leu-reunion" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <span className="text-gray-900">Saint-Leu</span>
        </nav>

        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux activités
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Que faire à Saint-Leu à La Réunion ?
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-blue-100">
              Découvrez {saintLeuActivities.length} activités exceptionnelles entre lagon et ciel
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Waves className="w-5 h-5 mr-2" />
                <span>Réserve marine</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Wind className="w-5 h-5 mr-2" />
                <span>Parapente lagon</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Fish className="w-5 h-5 mr-2" />
                <span>Plongée sous-marine</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        {saintLeuActivities.length > 0 ? (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Activités à Saint-Leu
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {saintLeuActivities.map((activity, index) => (
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
              Aucune activité spécifique à Saint-Leu pour le moment.
            </p>
            <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
              Voir toutes nos activités à La Réunion
            </Link>
          </div>
        )}

        {/* SEO Content */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Guide complet : que faire à Saint-Leu à La Réunion ?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-gray-600 mb-6">
              <strong>Saint-Leu</strong> est l'une des destinations les plus prisées de La Réunion pour les activités nautiques et aériennes. Cette commune de la côte ouest combine parfaitement lagon protégé, Réserve marine exceptionnelle et conditions de vol idéales pour le parapente.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              La Réserve marine : joyau des activités aquatiques
            </h3>
            <p className="mb-4">
              Les <strong>activités à Saint-Leu</strong> sont dominées par la Réserve naturelle marine de La Réunion, qui s'étend sur 35 km² de récifs coralliens protégés. Cette zone préservée abrite une biodiversité marine exceptionnelle : poissons tropicaux multicolores, tortues marines, coraux fluorescents et raies pastenagues.
            </p>
            <p className="mb-6">
              Le <strong>snorkeling à Saint-Leu</strong> révèle cette richesse sous-marine dès la surface. Les sorties guidées de 1h30 incluent tout l'équipement et l'accompagnement d'un guide naturaliste qui identifie les espèces rencontrées. La baie protégée offre des conditions idéales même pour les débutants et les enfants dès 6 ans.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Plongée sous-marine : immersion dans l'océan Indien
            </h3>
            <p className="mb-4">
              Les <strong>baptêmes de plongée à Saint-Leu</strong> constituent une initiation parfaite aux fonds marins tropicaux. Ces sorties de 3 heures, avec 20 minutes d'immersion à 6 mètres maximum, se déroulent dans les eaux cristallines de la Réserve marine. L'encadrement par des moniteurs diplômés d'État garantit sécurité et découverte optimale.
            </p>
            <p className="mb-6">
              La richesse des sites de plongée saint-leuois attire plongeurs débutants et confirmés. Les tombants coralliens, grottes sous-marines et jardins de corail offrent des spectacles sous-marins variés. La visibilité excellente (souvent 20-30 mètres) et la température agréable (24-28°C) créent des conditions de plongée exceptionnelles.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Parapente : voler au-dessus du lagon
            </h3>
            <p className="mb-4">
              <strong>Que faire à Saint-Leu</strong> pour les amateurs de sensations aériennes ? Le parapente au-dessus du lagon constitue l'expérience phare. Les conditions aérologiques exceptionnelles de Saint-Leu, avec ses vents thermiques réguliers et son relief favorable, en font l'un des meilleurs spots de parapente de l'océan Indien.
            </p>
            <p className="mb-6">
              Les vols tandem de 20 à 40 minutes selon la formule offrent des panoramas uniques sur le lagon turquoise, la barrière de corail et les montagnes de l'intérieur. Le décollage depuis les hauteurs et l'atterrissage en douceur sur la plage créent une expérience complète, accessible dès 5 ans avec des moniteurs diplômés.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Innovations nautiques : le kayak transparent
            </h3>
            <p className="mb-4">
              Les <strong>activités originales à Saint-Leu</strong> incluent le kayak transparent, innovation remarquable pour l'observation marine. Cette embarcation à coque translucide transforme la balade en véritable aquarium naturel, permettant d'observer poissons et coraux sans se mouiller.
            </p>
            <p className="mb-6">
              Cette sortie de 2 heures, guidée par un naturaliste expert, révèle la faune du lagon sous un angle totalement inédit. L'expérience combine sport nautique doux et découverte scientifique, idéale pour les familles et les curieux de nature. Le lagon protégé de Saint-Leu offre des conditions parfaites pour cette activité innovante.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Centre Kélonia et protection des tortues
            </h3>
            <p className="mb-4">
              <strong>Visiter Saint-Leu</strong> inclut souvent la découverte du centre Kélonia, observatoire des tortues marines de l'océan Indien. Ce centre de recherche et de sensibilisation présente les différentes espèces de tortues, leurs habitats et les enjeux de conservation. Les bassins d'observation permettent d'approcher ces reptiles marins fascinants.
            </p>
            <p className="mb-6">
              La proximité de Kélonia avec les sites de plongée n'est pas fortuite : les eaux de Saint-Leu abritent tortues vertes et imbriquées. Les sorties snorkeling et plongée offrent de bonnes chances d'observation de ces animaux protégés dans leur milieu naturel, complétant parfaitement la visite du centre.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Surf et sports de glisse
            </h3>
            <p className="mb-4">
              Au-delà des activités encadrées, <strong>Saint-Leu à La Réunion</strong> est mondialement reconnu pour ses spots de surf. La gauche de Saint-Leu accueille régulièrement des compétitions internationales, attirant les meilleurs surfeurs mondiaux. Les vagues puissantes et régulières créent des conditions de glisse exceptionnelles.
            </p>
            <p className="mb-6">
              Cette réputation surf contribue à l'ambiance décontractée de Saint-Leu, mélange de culture océanienne et de lifestyle tropical. Les nombreux bars et restaurants face à l'océan permettent d'observer les surfeurs tout en dégustant spécialités créoles et poissons frais du jour.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Conseils pratiques pour votre journée à Saint-Leu
            </h3>
            <p className="mb-4">
              Pour optimiser vos <strong>activités à faire à Saint-Leu</strong>, planifiez les sorties nautiques le matin quand la mer est plus calme, et les vols en parapente l'après-midi quand les thermiques se développent. Cette organisation permet de combiner plusieurs expériences dans la même journée.
            </p>
            <p className="mb-6">
              Saint-Leu dispose de tous les services nécessaires : parkings gratuits près des sites d'activités, restaurants créoles, commerces et distributeurs. La concentration des prestataires facilite les réservations et les transferts entre activités. Prévoyez crème solaire, eau et vêtements de rechange pour une journée complète.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Journée type à Saint-Leu
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Matinée aquatique</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 8h : Baptême de plongée (3h)</li>
                    <li>• ou Snorkeling guidé (1h30)</li>
                    <li>• 11h : Visite centre Kélonia</li>
                    <li>• 12h : Déjeuner créole front de mer</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Après-midi aérienne</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 14h : Vol parapente lagon (30-40 min)</li>
                    <li>• 15h30 : Kayak transparent (2h)</li>
                    <li>• 17h30 : Détente plage</li>
                    <li>• 19h : Coucher de soleil océan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur Saint-Leu
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

export default SaintLeuPage;