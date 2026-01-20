import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Trees, Waves, Bird, Cloud } from 'lucide-react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import Header from './Header';
import Footer from './Footer';
import { Activity } from '../types/Activity';

const PlainePalmistesPage: React.FC = () => {
  // Filtrage automatique des activités à Plaine des Palmistes / Bélouve
  const plainePalmistesActivities = activities.filter(activity =>
    activity.lieu.toLowerCase().includes('plaine-des-palmistes') ||
    activity.lieu.toLowerCase().includes('plaine des palmistes') ||
    activity.lieu.toLowerCase().includes('bélouve') ||
    activity.lieu.toLowerCase().includes('belouve')
  );

  const handleBookActivity = (activity: Activity) => {
    window.open(activity.url, '_blank');
  };

  const faqs = [
    {
      question: "Quelles sont les meilleures activités à faire à Plaine des Palmistes et Bélouve ?",
      answer: "La Plaine des Palmistes et Bélouve sont réputées pour le canyoning extrême dans le canyon de Takamaka, l'un des plus techniques de l'océan Indien. La région offre également des randonnées forestières exceptionnelles, l'observation d'oiseaux endémiques et la découverte de la forêt primaire de Bélouve. Le climat frais et la brume créent une atmosphère mystique unique."
    },
    {
      question: "Pourquoi choisir Plaine des Palmistes pour le canyoning sportif ?",
      answer: "Le canyon de Takamaka à Bélouve est considéré comme l'un des plus beaux et des plus difficiles de La Réunion. Avec ses rappels de plus de 50 mètres, ses sauts vertigineux et ses vasques profondes, il attire les canyoneurs expérimentés du monde entier. L'environnement de forêt primaire et le débit important garantissent une expérience intense et mémorable."
    },
    {
      question: "Combien coûtent les activités à Plaine des Palmistes ?",
      answer: "Le canyoning de Takamaka coûte environ 90-120€ pour une journée complète, réservé aux pratiquants expérimentés. Les randonnées guidées dans la forêt de Bélouve varient de 40€ à 80€ selon la durée. Ces tarifs incluent l'encadrement par des professionnels diplômés et le matériel technique nécessaire pour le canyoning."
    },
    {
      question: "Quelle est la meilleure période pour visiter Plaine des Palmistes ?",
      answer: "La Plaine des Palmistes se visite toute l'année grâce à son climat d'altitude tempéré. La saison sèche (mai à octobre) offre moins de pluie mais plus de brume matinale. Pour le canyoning de Takamaka, évitez les périodes de fortes pluies (décembre à mars) où le débit peut être dangereux. Les matinées sont généralement plus dégagées."
    },
    {
      question: "Comment accéder à Plaine des Palmistes et Bélouve ?",
      answer: "La Plaine des Palmistes se situe à 35 minutes de Saint-Benoît et 1h de Saint-Denis via la route forestière. Pour accéder à Bélouve et au départ du canyon de Takamaka, suivez la route forestière depuis le bourg jusqu'au gîte de Bélouve. Un véhicule est indispensable car les transports en commun sont inexistants dans cette zone d'altitude."
    },
    {
      question: "Le canyon de Takamaka est-il accessible aux débutants ?",
      answer: "Non, le canyon de Takamaka est strictement réservé aux canyoneurs expérimentés en excellente condition physique. Il nécessite une maîtrise technique des rappels, de la nage en eaux vives et une endurance importante car le parcours dure 6 à 8 heures. Les débutants peuvent se tourner vers les randonnées forestières de Bélouve, accessibles à tous."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Que faire à Plaine des Palmistes / Bélouve à La Réunion ? | Activités</title>
        <meta name="description" content="Découvrez les activités à Plaine des Palmistes et Bélouve : canyoning extrême Takamaka, randonnées en forêt primaire, observation nature. Altitude et fraîcheur." />
        <meta name="keywords" content="que faire plaine palmistes réunion, activités bélouve, canyoning takamaka, forêt bélouve, randonnée plaine palmistes réunion" />
        <link rel="canonical" href="https://dineo.re/que-faire-plaine-palmistes-belouve-reunion" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <span className="text-gray-900">Plaine des Palmistes / Bélouve</span>
        </nav>

        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux activités
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-teal-700 to-green-800 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Que faire à Plaine des Palmistes / Bélouve ?
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-teal-100">
              Découvrez {plainePalmistesActivities.length} activités dans les forêts d'altitude
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Waves className="w-5 h-5 mr-2" />
                <span>Canyoning extrême</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Trees className="w-5 h-5 mr-2" />
                <span>Forêt primaire</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Cloud className="w-5 h-5 mr-2" />
                <span>Climat frais</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        {plainePalmistesActivities.length > 0 ? (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Activités à Plaine des Palmistes / Bélouve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plainePalmistesActivities.map((activity, index) => (
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
              Aucune activité spécifique à Plaine des Palmistes / Bélouve pour le moment.
            </p>
            <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
              Voir toutes nos activités à La Réunion
            </Link>
          </div>
        )}

        {/* SEO Content */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Que faire à Plaine des Palmistes et Bélouve à La Réunion ?
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-gray-600 mb-6">
              <strong>La Plaine des Palmistes</strong> et le plateau de <strong>Bélouve</strong> constituent l'un des écosystèmes les plus remarquables de La Réunion. Située à 1000 mètres d'altitude, cette région forestière offre un climat frais, une nature luxuriante et certaines des activités outdoor les plus exigeantes de l'île.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Le canyon de Takamaka : défi ultime du canyoning
            </h3>
            <p className="mb-4">
              L'<strong>activité phare de Bélouve</strong> est sans conteste le canyon de Takamaka, considéré comme l'un des plus beaux et des plus techniques de l'océan Indien. Ce parcours extrême réservé aux canyoneurs expérimentés propose des rappels spectaculaires de plus de 50 mètres dans des cascades puissantes, des sauts vertigineux et des vasques profondes creusées dans la roche volcanique.
            </p>
            <p className="mb-6">
              Le <strong>canyoning de Takamaka</strong> exige une excellente condition physique et une maîtrise technique parfaite. Le parcours dure 6 à 8 heures et traverse la forêt primaire de Bélouve avant de plonger dans les gorges encaissées. L'environnement sauvage, l'engagement physique et la beauté des lieux en font une expérience inoubliable pour les pratiquants aguerris. L'encadrement par des guides diplômés est obligatoire.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              La forêt primaire de Bélouve : trésor naturel
            </h3>
            <p className="mb-4">
              <strong>Visiter Plaine des Palmistes à La Réunion</strong>, c'est découvrir l'une des dernières forêts primaires de l'île. La forêt de Bélouve abrite des espèces endémiques rares : palmistes rouges, fougères arborescentes géantes, bois de couleurs et orchidées sauvages. L'atmosphère humide et fraîche, souvent enveloppée de brume, crée un décor mystique digne d'un film fantastique.
            </p>
            <p className="mb-6">
              Les sentiers de randonnée serpentent entre les arbres centenaires, offrant différents niveaux de difficulté. Le sentier du Trou de Fer, accessible depuis le gîte de Bélouve, mène au belvédère surplombant ce gouffre vertigineux de 300 mètres de profondeur où se jettent six cascades. Cette <strong>randonnée à Bélouve</strong> de 3 heures aller-retour offre des panoramas exceptionnels sur cette merveille naturelle.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Observation de la faune et la flore endémiques
            </h3>
            <p className="mb-4">
              <strong>Que faire à Plaine des Palmistes</strong> pour les amoureux de nature ? L'observation ornithologique est exceptionnelle dans cette région préservée. Le Tuit-tuit, oiseau endémique de La Réunion en danger critique d'extinction, vit exclusivement dans les forêts de Bélouve et Bébour. Les ornithologues du monde entier viennent tenter de l'apercevoir dans son habitat naturel.
            </p>
            <p className="mb-6">
              D'autres espèces endémiques peuplent ces forêts : le Papangue (busard de Maillard), le Zoizo vert (zostérops), et de nombreux invertébrés uniques au monde. Les guides naturalistes proposent des sorties spécialisées pour découvrir cette biodiversité exceptionnelle. La fraîcheur de l'altitude et l'humidité constante créent des conditions idéales pour la mousse, les lichens et les fougères épiphytes qui tapissent les arbres.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Le bourg de Plaine des Palmistes : charme créole d'altitude
            </h3>
            <p className="mb-4">
              Le village de Plaine des Palmistes offre un cadre paisible pour se ressourcer après les <strong>activités sportives</strong>. Les maisons créoles traditionnelles, les jardins fleuris et l'église au clocher typique créent une ambiance de village de montagne. Les températures fraîches toute l'année (15-20°C) en font une destination appréciée pour échapper à la chaleur côtière.
            </p>
            <p className="mb-6">
              Le domaine des Tourelles, avec son jardin botanique et son atmosphère d'antan, mérite une visite. Les restaurants locaux proposent une cuisine créole adaptée au climat d'altitude : civet de tangue, cari de porc aux haricots rouges et bien sûr les fameux palmistes cuisinés de différentes façons. Le marché du dimanche matin offre fruits des hauts, miel et produits artisanaux.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Route vers le Piton de la Fournaise
            </h3>
            <p className="mb-4">
              La Plaine des Palmistes constitue une étape stratégique sur la <strong>route du volcan</strong>. La route forestière qui grimpe vers le Pas de Bellecombe traverse des paysages spectaculaires, passant de la forêt luxuriante aux plaines d'altitude couvertes de bruyères. Cette ascension progressive permet d'observer les différents étages de végétation caractéristiques de La Réunion.
            </p>
            <p className="mb-6">
              Les points de vue le long de cette route offrent des panoramas sur la côte est et l'océan. Par temps clair, on distingue Saint-Benoît en contrebas et les cascades qui dévalent les pentes. Cette <strong>excursion depuis Plaine des Palmistes</strong> vers le volcan peut se combiner avec les activités forestières pour une journée complète de découverte nature.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Conseils pratiques pour votre visite
            </h3>
            <p className="mb-4">
              Pour profiter pleinement des <strong>activités à faire à Plaine des Palmistes</strong>, prévoyez absolument des vêtements chauds et imperméables. Le climat d'altitude est frais et humide toute l'année, avec des températures pouvant descendre à 10°C en hiver. La brume et les averses sont fréquentes, surtout l'après-midi. Un K-way et un pull sont indispensables même en été.
            </p>
            <p className="mb-6">
              Pour le canyon de Takamaka, une expérience préalable en canyoning technique est obligatoire. Les prestataires vérifient le niveau des participants et peuvent refuser les personnes non qualifiées pour des raisons de sécurité. Réservez plusieurs semaines à l'avance car les places sont limitées. L'accès au gîte de Bélouve nécessite un véhicule, la route forestière étant parfois fermée en cas de mauvais temps ou de chasse.
            </p>

            <div className="bg-teal-50 p-6 rounded-lg mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Programme type d'une journée à Plaine des Palmistes / Bélouve
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Matinée</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 7h : Départ pour le canyon de Takamaka</li>
                    <li>• 7h30 : Briefing technique et équipement</li>
                    <li>• 8h-14h : Descente intégrale du canyon</li>
                    <li>• 14h : Pique-nique au gîte de Bélouve</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Après-midi</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 15h : Randonnée belvédère du Trou de Fer</li>
                    <li>• 17h : Observation ornithologique en forêt</li>
                    <li>• 18h : Retour au bourg de Plaine des Palmistes</li>
                    <li>• 19h : Dîner créole d'altitude</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur Plaine des Palmistes / Bélouve
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

export default PlainePalmistesPage;
