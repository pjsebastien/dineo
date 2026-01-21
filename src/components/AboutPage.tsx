import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { MapPin, Heart, Users, Shield, ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>À propos de Dineo | Toutes les activités à La Réunion</title>
        <meta name="description" content="Découvrez Dineo, votre plateforme de référence pour trouver et réserver les meilleures activités à La Réunion. Notre mission : vous faire vivre des expériences inoubliables." />
        <meta name="keywords" content="à propos dineo, dineo réunion, plateforme activités réunion, réservation activités" />
        <link rel="canonical" href="https://dineo.re/a-propos" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <span className="text-gray-900">À propos</span>
        </nav>

        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'accueil
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À propos de Dineo
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Votre guide de confiance pour découvrir et réserver les plus belles activités à La Réunion
            </p>
          </div>
        </div>

        {/* Notre Mission */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Heart className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Notre mission</h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl mb-6">
              Chez <strong>Dineo</strong>, nous sommes passionnés par l'île de La Réunion et ses trésors naturels. Notre mission est simple : vous aider à découvrir et vivre les plus belles expériences que l'île intense a à offrir.
            </p>

            <p className="mb-6">
              Que vous soyez à la recherche d'aventures sportives comme le canyoning et la randonnée, d'activités familiales pour créer des souvenirs inoubliables, ou d'expériences romantiques pour partager des moments privilégiés, Dineo est votre compagnon de voyage idéal.
            </p>

            <p className="mb-6">
              Nous sélectionnons avec soin les meilleures activités et les prestataires les plus fiables de l'île pour vous garantir des expériences de qualité, en toute sécurité. Chaque activité présente sur Dineo a été choisie pour sa valeur ajoutée et l'authenticité de l'expérience qu'elle propose.
            </p>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Shield className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Nos valeurs</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Authenticité
              </h3>
              <p className="text-gray-700">
                Nous privilégions les expériences authentiques qui vous permettent de découvrir la vraie nature de La Réunion, loin du tourisme de masse. Nos partenaires sont des passionnés qui connaissent l'île sur le bout des doigts.
              </p>
            </div>

            <div className="border-l-4 border-cyan-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Transparence
              </h3>
              <p className="text-gray-700">
                Toutes les informations sur les activités sont claires et détaillées : prix, durée, niveau de difficulté, politique d'annulation. Pas de mauvaise surprise, vous savez exactement ce que vous réservez.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Qualité
              </h3>
              <p className="text-gray-700">
                Nous travaillons uniquement avec des prestataires professionnels et expérimentés. La sécurité et la satisfaction de nos utilisateurs sont nos priorités absolues.
              </p>
            </div>

            <div className="border-l-4 border-orange-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Flexibilité
              </h3>
              <p className="text-gray-700">
                La météo à La Réunion peut être capricieuse. C'est pourquoi la plupart des activités proposent une annulation flexible, vous permettant d'adapter votre programme selon les conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <MapPin className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Comment ça marche</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Explorez
              </h3>
              <p className="text-gray-700">
                Parcourez notre sélection d'activités par catégorie, destination ou budget. Utilisez nos filtres pour trouver l'expérience parfaite.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Découvrez
              </h3>
              <p className="text-gray-700">
                Consultez les détails complets de chaque activité : description, photos, prix, avis, points de rendez-vous et toutes les informations pratiques.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Réservez
              </h3>
              <p className="text-gray-700">
                Cliquez sur "Réserver" et vous serez redirigé vers notre partenaire de réservation pour finaliser votre booking en toute sécurité.
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi La Réunion */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Users className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Pourquoi La Réunion ?</h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl mb-6">
              <strong>La Réunion</strong> est une île unique qui concentre une diversité naturelle extraordinaire sur un territoire de seulement 2500 km². Du lagon turquoise aux sommets de plus de 3000 mètres, des plages de sable blanc aux coulées de lave, l'île offre un condensé de beautés naturelles exceptionnelles.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Des paysages époustouflants</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>3 cirques classés UNESCO (Mafate, Cilaos, Salazie)</li>
                  <li>Le Piton de la Fournaise, volcan actif</li>
                  <li>Des lagons protégés pour la plongée</li>
                  <li>Des cascades spectaculaires</li>
                  <li>Une forêt primaire unique</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Des activités pour tous</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Randonnées de tous niveaux</li>
                  <li>Canyoning dans des cadres paradisiaques</li>
                  <li>Plongée et snorkeling dans le lagon</li>
                  <li>Survols en hélicoptère et parapente</li>
                  <li>Découverte de la culture créole</li>
                </ul>
              </div>
            </div>

            <p className="mb-6">
              Cette diversité fait de La Réunion une destination rêvée pour les amoureux de nature et d'aventure. Que vous veniez en famille, en couple ou entre amis, l'île intense vous promet des expériences inoubliables.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white p-8">
          <h2 className="text-3xl font-bold mb-4">Une question ? Contactez-nous</h2>
          <p className="text-xl text-blue-100 mb-6">
            Notre équipe est à votre écoute pour vous aider à organiser votre séjour à La Réunion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:contact@dineo.re"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
            >
              Nous écrire
            </a>
            <Link
              to="/"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-center"
            >
              Découvrir les activités
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
