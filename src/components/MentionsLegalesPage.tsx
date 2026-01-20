import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const MentionsLegalesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Mentions légales - Dineo</title>
        <meta name="description" content="Mentions légales du site Dineo - Activités à La Réunion" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'accueil
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions légales</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Éditeur du site</h2>
              <p className="text-gray-700 mb-2">
                Le site internet <strong>dineo.re</strong> est édité par :
              </p>
              <ul className="list-none text-gray-700 space-y-1 ml-0">
                <li><strong>Sébastien P.</strong></li>
                <li>Email : contact@dineo.re</li>
                <li>Siège social : La Réunion, France</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Hébergement</h2>
              <p className="text-gray-700 mb-2">
                Le site est hébergé par :
              </p>
              <ul className="list-none text-gray-700 space-y-1 ml-0">
                <li><strong>Vercel Inc.</strong></li>
                <li>340 S Lemon Ave #4133</li>
                <li>Walnut, CA 91789, USA</li>
                <li>Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">vercel.com</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Directeur de la publication</h2>
              <p className="text-gray-700">
                Le directeur de la publication du site est <strong>Sébastien P.</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Propriété intellectuelle</h2>
              <p className="text-gray-700 mb-4">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, etc.) est la propriété
                exclusive de Dineo ou de ses partenaires, sauf mention contraire.
              </p>
              <p className="text-gray-700 mb-4">
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces
                différents éléments est strictement interdite sans l'accord exprès par écrit de Dineo.
              </p>
              <p className="text-gray-700">
                Les images des activités sont fournies par nos partenaires de réservation et leurs prestataires
                d'activités respectifs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Nature du service</h2>
              <p className="text-gray-700 mb-4">
                Dineo est un <strong>site comparateur et d'affiliation</strong> qui présente une sélection
                d'activités touristiques à La Réunion.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Dineo ne gère pas directement les réservations</strong> ni l'organisation des activités.
                Les réservations sont effectuées via nos plateformes partenaires de confiance qui assurent :
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>La gestion des paiements sécurisés</li>
                <li>La confirmation des réservations</li>
                <li>Le service client lié aux réservations</li>
                <li>Les relations avec les prestataires d'activités</li>
              </ul>
              <p className="text-gray-700 mt-4">
                En cliquant sur "Réserver", vous êtes redirigé vers la plateforme de notre partenaire qui
                finalise la transaction et établit la relation contractuelle avec vous.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Programme d'affiliation</h2>
              <p className="text-gray-700">
                Dineo participe à des programmes d'affiliation. Certaines réservations réalisées via nos liens
                peuvent générer une commission pour Dineo, sans surcoût pour l'utilisateur. Cette commission
                nous permet de maintenir et développer notre service gratuit de sélection et d'information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Responsabilité</h2>
              <p className="text-gray-700 mb-4">
                Dineo s'efforce de fournir des informations exactes et à jour concernant les activités présentées.
                Toutefois, Dineo ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations
                disponibles sur le site.
              </p>
              <p className="text-gray-700 mb-4">
                Les informations concernant les prix, disponibilités, conditions d'annulation et caractéristiques
                des activités sont fournies à titre indicatif et peuvent être modifiées par les prestataires sans
                préavis.
              </p>
              <p className="text-gray-700">
                Dineo ne saurait être tenu responsable de tout dommage direct ou indirect résultant de l'utilisation
                du site ou de l'impossibilité de l'utiliser, ni des activités réservées via nos partenaires.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Liens hypertextes</h2>
              <p className="text-gray-700 mb-4">
                Le site peut contenir des liens hypertextes vers d'autres sites internet. Dineo n'exerce aucun
                contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
              <p className="text-gray-700">
                La création de liens hypertextes vers le site dineo.re nécessite l'autorisation préalable de l'éditeur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Données personnelles</h2>
              <p className="text-gray-700">
                Pour toute information concernant la collecte et le traitement de vos données personnelles,
                veuillez consulter notre{' '}
                <Link to="/politique-confidentialite" className="text-blue-600 hover:text-blue-800 font-medium">
                  Politique de confidentialité
                </Link>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Cookies</h2>
              <p className="text-gray-700">
                Le site peut utiliser des cookies pour améliorer l'expérience utilisateur et réaliser des
                statistiques de visite. Vous pouvez configurer votre navigateur pour refuser les cookies,
                mais certaines fonctionnalités du site pourraient ne pas fonctionner correctement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Droit applicable</h2>
              <p className="text-gray-700">
                Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut
                d'accord amiable, le litige sera porté devant les tribunaux compétents français.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact</h2>
              <p className="text-gray-700">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter à l'adresse :
                <strong> contact@dineo.re</strong>
              </p>
            </section>

            <p className="text-sm text-gray-500 mt-8">
              Dernière mise à jour : Janvier 2026
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MentionsLegalesPage;
