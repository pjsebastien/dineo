import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Mountain, Waves, TreePine } from 'lucide-react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import Header from './Header';
import Footer from './Footer';
import { Activity } from '../types/Activity';

const SalaziePage: React.FC = () => {
  // Filtrage automatique des activités au Cirque de Salazie
  const salazieActivities = activities.filter(activity =>
    activity.lieu.toLowerCase().includes('salazie') ||
    activity.lieu.toLowerCase().includes('hell-bourg')
  );

  const handleBookActivity = (activity: Activity) => {
    window.open(activity.url, '_blank');
  };

  const faqs = [
    {
      question: "Quelles sont les meilleures activités à faire au Cirque de Salazie ?",
      answer: "Salazie offre des canyons mythiques comme Trou Blanc, considéré comme l'un des plus beaux de l'île avec ses rappels jusqu'à 40m et sa tyrolienne. Les cascades spectaculaires comme le Voile de la Mariée et le village classé de Hell-Bourg sont incontournables. La randonnée vers le Trou de Fer complète l'expérience."
    },
    {
      question: "Pourquoi le Cirque de Salazie est-il si spectaculaire ?",
      answer: "Salazie est le cirque le plus humide et verdoyant de La Réunion grâce à ses précipitations abondantes. Cette humidité crée des centaines de cascades qui dévalent les parois vertigineuses, dont le célèbre Voile de la Mariée. Les pitons escarpés et la végétation luxuriante composent des paysages à couper le souffle."
    },
    {
      question: "Combien coûtent les activités au Cirque de Salazie ?",
      answer: "Le canyoning de Trou Blanc coûte à partir de 90€ pour 6 heures d'aventure intense incluant matériel complet et photos. C'est un investissement pour une expérience exceptionnelle dans un canyon mythique. Les randonnées sont gratuites mais peuvent nécessiter un guide selon votre niveau."
    },
    {
      question: "Quelle est la meilleure période pour visiter Salazie ?",
      answer: "La saison sèche (mai à octobre) offre les meilleures conditions pour les activités, bien que Salazie reçoive de la pluie toute l'année. Les matinées sont généralement plus claires. Évitez les périodes de fortes pluies qui rendent les canyons dangereux et les sentiers glissants."
    },
    {
      question: "Comment accéder au Cirque de Salazie ?",
      answer: "Salazie est accessible en voiture depuis Saint-André via une route spectaculaire de 40km qui serpente dans la vallée. Comptez 1h de trajet avec de nombreux points de vue sur les cascades. Hell-Bourg se situe au cœur du cirque, point de départ idéal pour les activités."
    },
    {
      question: "Le canyon de Trou Blanc est-il réservé aux experts ?",
      answer: "Trou Blanc est un canyon sportif nécessitant une bonne condition physique et convenant aux pratiquants dès 13 ans. Les rappels de 40m sont impressionnants mais bien encadrés. C'est l'expérience ultime pour ceux qui veulent repousser leurs limites dans un cadre grandiose."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Que faire au Cirque de Salazie à La Réunion ? | Activités</title>
        <meta name="description" content="Découvrez les activités au Cirque de Salazie : canyoning de Trou Blanc, cascades spectaculaires, Hell-Bourg classé, randonnées. Le cirque le plus verdoyant de La Réunion." />
        <meta name="keywords" content="que faire salazie réunion, cirque salazie, canyon trou blanc, hell-bourg, voile de la mariée, activités salazie, visiter salazie" />
        <link rel="canonical" href="https://dineo.re/que-faire-cirque-salazie-reunion" />
          <meta property="og:title" content="Que faire au Cirque de Salazie à La Réunion ? | Activités" />
          <meta property="og:description" content="Découvrez les activités au Cirque de Salazie : canyoning de Trou Blanc, cascades spectaculaires, Hell-Bourg classé, randonnées. Le cirque le plus verdoyant de La Réunion." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dineo.re/que-faire-cirque-salazie-reunion" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <span className="text-gray-900">Cirque de Salazie</span>
        </nav>

        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux activités
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Que faire au Cirque de Salazie à La Réunion ?
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-emerald-100">
              Découvrez {salazieActivities.length} activités dans le cirque aux cent cascades
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Waves className="w-5 h-5 mr-2" />
                <span>Canyon Trou Blanc</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Mountain className="w-5 h-5 mr-2" />
                <span>Cascades spectaculaires</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <TreePine className="w-5 h-5 mr-2" />
                <span>Hell-Bourg classé</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        {salazieActivities.length > 0 ? (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Activités au Cirque de Salazie
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {salazieActivities.map((activity, index) => (
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
              Aucune activité spécifique au Cirque de Salazie pour le moment.
            </p>
            <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
              Voir toutes les activités à La Réunion
            </Link>
          </div>
        )}

        {/* SEO Content */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Que faire au Cirque de Salazie à La Réunion ?
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-gray-600 mb-6">
              <strong>Le Cirque de Salazie</strong> est le plus accessible et le plus verdoyant des trois cirques de La Réunion. Caractérisé par ses précipitations abondantes qui alimentent des centaines de cascades, Salazie offre des paysages spectaculaires où la nature s'exprime avec une force rare.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Hell-Bourg : plus beau village de France
            </h3>
            <p className="mb-6">
              <strong>Visiter Salazie à La Réunion</strong> passe obligatoirement par Hell-Bourg, classé parmi les plus beaux villages de France. Ce village créole niché à 900m d'altitude a conservé ses cases colorées, ses jardins fleuris et son charme d'antan. Les eaux thermales qui ont fait sa renommée au XIXe siècle attirent toujours curieux et amateurs d'histoire locale.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Canyon de Trou Blanc : l'expérience ultime
            </h3>
            <p className="mb-4">
              Le <strong>canyoning à Salazie</strong> atteint son apogée avec le canyon de Trou Blanc. Cette descente intégrale de 6 heures est considérée comme l'une des plus belles de l'océan Indien. Les rappels jusqu'à 40 mètres le long des cascades, la tyrolienne au-dessus des bassins turquoise et les sauts facultatifs composent une aventure sportive inoubliable.
            </p>
            <p className="mb-6">
              Les <strong>activités à Salazie</strong> incluent ce canyon mythique qui demande une bonne condition physique mais reste accessible dès 13 ans avec un encadrement professionnel. Le parcours traverse des paysages grandioses où les parois verticales se parent de végétation luxuriante et de cascades éphémères après chaque pluie.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Le Voile de la Mariée et les cascades
            </h3>
            <p className="mb-4">
              <strong>Que faire à Salazie</strong> en dehors du canyoning ? La cascade du Voile de la Mariée est un arrêt obligatoire sur la route du cirque. Cette chute d'eau spectaculaire dévale les parois en créant un rideau vaporeux qui justifie son nom poétique. Accessible depuis un belvédère aménagé, elle offre un spectacle gratuit et photogénique.
            </p>
            <p className="mb-6">
              Le cirque compte des dizaines d'autres cascades, temporaires ou permanentes, qui jaillissent des parois vertigineuses après les pluies tropicales. Cette abondance d'eau crée une symphonie visuelle et sonore permanente qui caractérise l'atmosphère unique de Salazie.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Randonnées au cœur du cirque
            </h3>
            <p className="mb-4">
              Les <strong>randonnées à Salazie</strong> révèlent des paysages variés. Le sentier du Trou de Fer mène à un point de vue vertigineux sur ce gouffre de 300 mètres où six cascades se jettent simultanément. Cette randonnée de niveau intermédiaire (4-5h aller-retour) est l'une des plus spectaculaires de l'île.
            </p>
            <p className="mb-6">
              Le tour du piton d'Anchaing offre des panoramas circulaires sur le cirque et ses remparts. Les sentiers balisés permettent également de relier les différents îlets du cirque, découvrant au passage la vie rurale préservée et l'hospitalité créole légendaire.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Patrimoine culturel et gastronomie
            </h3>
            <p className="mb-4">
              <strong>Visiter Hell-Bourg</strong> révèle un patrimoine architectural remarquable. Les cases créoles restaurées abritent chambres d'hôtes, restaurants et boutiques artisanales. La Maison Folio, jardin créole luxuriant, témoigne de l'art de vivre d'antan. Le musée des musiques et instruments de l'océan Indien enrichit la découverte culturelle.
            </p>
            <p className="mb-6">
              Les restaurants du cirque servent une cuisine créole authentique mettant en valeur les produits locaux : chouchous (christophines), cœurs de palmistes, fruits tropicaux. Les tables d'hôtes permettent de partager un repas convivial avec les habitants et découvrir leurs histoires de vie dans le cirque.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Conseils pratiques pour votre visite à Salazie
            </h3>
            <p className="mb-4">
              Pour profiter pleinement des <strong>activités à faire à Salazie</strong>, prévoyez vêtements de pluie et vêtements chauds car le cirque reçoit des précipitations fréquentes et les températures sont fraîches en altitude. Réservez votre hébergement à Hell-Bourg pour vivre l'ambiance unique du village le soir venu.
            </p>
            <p className="mb-6">
              La route d'accès depuis Saint-André offre de nombreux points de vue spectaculaires mais reste étroite et sinueuse. Conduisez prudemment et prenez votre temps pour profiter des paysages. Les activités de canyoning se réservent à l'avance et dépendent des conditions météorologiques.
            </p>

            <div className="bg-teal-50 p-6 rounded-lg mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Programme type d'une journée au Cirque de Salazie
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Matinée</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 7h : Départ pour le canyon de Trou Blanc</li>
                    <li>• 7h30 : Briefing et équipement</li>
                    <li>• 8h-13h : Descente du canyon (6h)</li>
                    <li>• 13h30 : Retour et douche à Hell-Bourg</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Après-midi</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 14h : Déjeuner créole à Hell-Bourg</li>
                    <li>• 15h30 : Visite du village et Maison Folio</li>
                    <li>• 17h : Cascade du Voile de la Mariée</li>
                    <li>• 18h30 : Dîner en table d'hôte</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur le Cirque de Salazie
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

export default SalaziePage;
