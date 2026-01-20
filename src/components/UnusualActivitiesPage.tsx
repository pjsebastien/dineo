import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Zap, Eye, Mountain, Waves } from 'lucide-react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import Header from './Header';
import Footer from './Footer';
import { Activity } from '../types/Activity';

const UnusualActivitiesPage: React.FC = () => {
  // Sélection des activités insolites
  const unusualActivities = activities.filter(activity => {
    // Activités considérées comme insolites
    const unusualKeywords = [
      'spéléologie', 'tunnels de lave', 'ulm', 'canyoning', 'kayak transparent', 
      'nage avec les dauphins', 'quad', 'vtt', 'parapente xl'
    ];
    
    const isUnusual = unusualKeywords.some(keyword => 
      activity.titre.toLowerCase().includes(keyword) ||
      activity.sous_categorie.toLowerCase().includes(keyword) ||
      activity.resume.toLowerCase().includes(keyword)
    );
    
    // Activités avec des caractéristiques uniques
    const hasUnusualFeatures = activity.points_forts.toLowerCase().includes('tunnels') ||
      activity.points_forts.toLowerCase().includes('transparent') ||
      activity.points_forts.toLowerCase().includes('nage avec') ||
      activity.points_forts.toLowerCase().includes('xl') ||
      activity.duree.includes('6 h') ||
      activity.lieu.includes('Fournaise');
    
    return isUnusual || hasUnusualFeatures;
  }).slice(0, 12);

  const handleBookActivity = (activity: Activity) => {
    window.open(activity.url, '_blank');
  };

  const faqs = [
    {
      question: "Qu'est-ce qui rend ces activités insolites à La Réunion ?",
      answer: "Ces activités sortent de l'ordinaire par leur caractère unique : explorer les tunnels de lave du volcan, naviguer en kayak transparent, nager avec les dauphins, ou encore découvrir l'île en ULM. Elles offrent des perspectives et des sensations qu'on ne trouve nulle part ailleurs."
    },
    {
      question: "La spéléologie dans les tunnels de lave est-elle accessible aux débutants ?",
      answer: "Oui ! Les parcours s'adaptent à tous les niveaux, de 1h à 6h selon votre expérience. L'équipement est fourni et les guides spéléologues vous initient aux techniques de progression. Seule condition : ne pas être claustrophobe et avoir une bonne condition physique."
    },
    {
      question: "Comment fonctionne le kayak transparent ?",
      answer: "Le kayak transparent possède une coque en matériau translucide qui permet d'observer les fonds marins tout en pagayant. Cette innovation offre une expérience unique d'observation de la faune et flore sous-marines du lagon, guidée par un naturaliste."
    },
    {
      question: "Peut-on vraiment nager avec les dauphins à La Réunion ?",
      answer: "Oui, mais dans le respect strict de la charte d'approche des cétacés. Cette activité encadrée permet une mise à l'eau respectueuse pour observer et parfois nager près des dauphins. L'observation n'est jamais garantie car nous respectons la liberté des animaux."
    },
    {
      question: "Les activités insolites sont-elles plus dangereuses ?",
      answer: "Non, elles sont encadrées par des professionnels diplômés avec un matériel aux normes. Le caractère 'insolite' vient de l'originalité de l'expérience, pas d'un niveau de risque supérieur. Chaque activité respecte des protocoles de sécurité stricts."
    },
    {
      question: "Quelle est la meilleure période pour ces activités originales ?",
      answer: "La plupart se pratiquent toute l'année. Les tunnels de lave sont accessibles en permanence, le kayak transparent idéal par mer calme, les vols ULM selon la météo. Seule la nage avec dauphins/baleines varie selon les saisons (baleines de juillet à octobre)."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Activités Insolites à La Réunion | Expériences Originales</title>
        <meta name="description" content="Découvrez les activités les plus insolites de La Réunion : spéléologie tunnels de lave, kayak transparent, nage avec dauphins. Expériences uniques au monde." />
        <meta name="keywords" content="activités insolites la réunion, activité originale réunion, expérience unique réunion, tunnels de lave réunion, kayak transparent réunion" />
        <link rel="canonical" href="https://dineo.re/activites-insolites-reunion" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <span className="text-gray-900">Activités insolites</span>
        </nav>

        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux activités
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Activités Insolites à La Réunion
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-purple-100">
              Sortez des sentiers battus : {unusualActivities.length} expériences originales et uniques au monde
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Zap className="w-5 h-5 mr-2" />
                <span>Expériences uniques</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Eye className="w-5 h-5 mr-2" />
                <span>Perspectives inédites</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Mountain className="w-5 h-5 mr-2" />
                <span>Aventures extraordinaires</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Nos expériences insolites sélectionnées
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {unusualActivities.map((activity, index) => (
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
            Guide des activités insolites à La Réunion
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-gray-600 mb-6">
              La Réunion regorge d'<strong>activités insolites</strong> qui sortent de l'ordinaire. L'île intense offre des expériences uniques au monde, impossibles à vivre ailleurs, grâce à son environnement volcanique exceptionnel et sa biodiversité marine préservée.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Spéléologie volcanique : explorer les entrailles de la terre
            </h3>
            <p className="mb-4">
              La <strong>spéléologie dans les tunnels de lave</strong> du Piton de la Fournaise constitue l'une des expériences les plus extraordinaires de l'île. Ces galeries naturelles, formées par l'activité volcanique, offrent un voyage au cœur de la formation géologique de La Réunion. Les parcours, adaptés de 1 à 6 heures selon votre niveau, vous mènent dans un monde souterrain unique.
            </p>
            <p className="mb-6">
              Équipés de casques avec lampes frontales et accompagnés de guides spéléologues expérimentés, vous découvrirez des formations rocheuses spectaculaires, des coulées de lave figées et des paysages lunaires souterrains. Cette <strong>activité originale à La Réunion</strong> révèle une facette méconnue du volcan, accessible uniquement aux explorateurs curieux.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Innovations nautiques : le kayak transparent révolutionnaire
            </h3>
            <p className="mb-4">
              Le <strong>kayak transparent</strong> dans le lagon de Saint-Gilles représente une innovation remarquable pour l'observation marine. Cette embarcation à coque translucide transforme votre balade en véritable aquarium naturel, permettant d'observer poissons tropicaux et coraux sans se mouiller.
            </p>
            <p className="mb-6">
              Guidée par un naturaliste expert, cette sortie de 2 heures révèle la richesse des fonds marins réunionnais sous un angle totalement inédit. L'expérience combine sport nautique et découverte scientifique, offrant une perspective unique sur l'écosystème corallien protégé du lagon.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Rencontres marines exceptionnelles
            </h3>
            <p className="mb-4">
              La <strong>nage avec les dauphins et baleines</strong> à Saint-Gilles propose une approche respectueuse et encadrée de ces mammifères marins. Cette activité, strictement réglementée par la charte d'approche des cétacés, permet des mises à l'eau exceptionnelles pour observer ces animaux dans leur environnement naturel.
            </p>
            <p className="mb-6">
              Les sorties matinales de 2h30, limitées à de petits groupes, maximisent les chances de rencontres tout en respectant la tranquillité des animaux. Cette <strong>expérience unique à La Réunion</strong> crée des souvenirs inoubliables et sensibilise à la préservation marine.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Aventures terrestres hors du commun
            </h3>
            <p className="mb-4">
              Les <strong>randonnées en quad</strong> sur les pistes du Maïdo offrent une découverte motorisée des hauteurs réunionnaises. Ces sorties, de 40 minutes à une journée complète, vous mènent sur des sentiers forestiers inaccessibles en voiture classique, révélant des panoramas secrets sur les cirques.
            </p>
            <p className="mb-4">
              La <strong>descente VTT du Piton Maïdo</strong> propose une approche sportive et originale de la montagne réunionnaise. Après une montée en navette, vous dévalez les pentes sur des singles techniques avec vue imprenable sur Mafate, combinant adrénaline et contemplation.
            </p>
            <p className="mb-6">
              Le <strong>canyoning</strong> dans les rivières Langevin ou Fleurs Jaunes transforme la descente de cours d'eau en aventure ludique. Rappels, toboggans naturels et sauts dans des vasques cristallines créent une expérience rafraîchissante au cœur de la végétation tropicale luxuriante.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Perspectives aériennes inédites
            </h3>
            <p className="mb-4">
              Le <strong>vol en ULM multiaxe</strong> depuis Saint-Paul offre une approche plus intime de l'aviation que l'hélicoptère. Aux côtés du pilote, vous découvrez les commandes et profitez d'une vue dégagée sur la côte ouest, avec possibilité de prendre les commandes sous supervision.
            </p>
            <p className="mb-6">
              Les <strong>vols en parapente XL</strong> de 40 minutes au-dessus du lagon prolongent l'expérience aérienne classique. Cette durée exceptionnelle permet d'explorer différents secteurs de vol et de profiter pleinement des thermiques pour des évolutions spectaculaires au-dessus des eaux turquoise.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Conseils pour profiter de ces expériences uniques
            </h3>
            <p className="mb-4">
              Les <strong>activités insolites à La Réunion</strong> nécessitent souvent une réservation anticipée en raison de leur caractère exclusif. Vérifiez les conditions météorologiques et physiques requises, car certaines activités comme la spéléologie demandent de ne pas être claustrophobe.
            </p>
            <p className="mb-4">
              Préparez-vous physiquement et mentalement à sortir de votre zone de confort. Ces expériences originales révèlent des aspects méconnus de l'île et de vous-même. N'hésitez pas à poser des questions aux guides, véritables passionnés qui enrichiront votre découverte.
            </p>
            <p className="mb-6">
              Documentez ces moments exceptionnels : beaucoup d'activités proposent des photos/vidéos professionnelles, et certaines permettent d'apporter votre propre matériel. Ces souvenirs visuels prolongeront l'émotion de ces expériences uniques.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Nos activités insolites par niveau d'aventure
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Découverte douce</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Kayak transparent (observation)</li>
                    <li>• Vol ULM côte ouest</li>
                    <li>• Spéléologie 1h (initiation)</li>
                    <li>• Quad découverte 40 min</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Aventure intense</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Nage avec dauphins/baleines</li>
                    <li>• Canyoning Fleurs Jaunes</li>
                    <li>• Spéléologie 6h (expert)</li>
                    <li>• Descente VTT Maïdo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur les activités insolites
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

export default UnusualActivitiesPage;