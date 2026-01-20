import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const CGVPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Conditions Générales d'Utilisation - Dineo</title>
        <meta name="description" content="Conditions générales d'utilisation du site Dineo - Activités à La Réunion" />
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Conditions Générales d'Utilisation</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Présentation du service</h2>
              <p className="text-gray-700 mb-4">
                Dineo est un <strong>site comparateur et plateforme d'affiliation</strong> proposant une sélection
                d'activités touristiques et de loisirs à La Réunion.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Important :</strong> Dineo n'est pas un organisateur d'activités, ni une agence de voyage,
                ni une plateforme de réservation directe.
              </p>
              <p className="text-gray-700">
                Notre rôle se limite à :
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2 mt-2">
                <li>Présenter et comparer des activités proposées par des prestataires tiers</li>
                <li>Fournir des informations sur ces activités (descriptions, prix, conditions)</li>
                <li>Rediriger les utilisateurs vers nos partenaires de réservation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Acceptation des conditions</h2>
              <p className="text-gray-700 mb-4">
                L'utilisation du site dineo.re implique l'acceptation pleine et entière des présentes Conditions
                Générales d'Utilisation (CGU).
              </p>
              <p className="text-gray-700">
                Si vous n'acceptez pas ces conditions, nous vous demandons de ne pas utiliser ce site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Nature de la relation contractuelle</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.1. Dineo est un intermédiaire</h3>
              <p className="text-gray-700 mb-4">
                <strong>Dineo ne contracte pas avec vous.</strong> Nous mettons uniquement en relation les utilisateurs
                avec nos partenaires de réservation et les prestataires d'activités.
              </p>
              <p className="text-gray-700">
                La relation contractuelle concernant la réservation et la réalisation de l'activité s'établit
                directement entre :
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2 mt-2">
                <li><strong>Vous</strong> (l'utilisateur/client)</li>
                <li><strong>La plateforme partenaire de réservation</strong> (qui gère le paiement et la confirmation)</li>
                <li><strong>Le prestataire de l'activité</strong> (qui réalise l'activité sur le terrain)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.2. Responsabilités</h3>
              <p className="text-gray-700 mb-4">
                En cliquant sur "Réserver" et en étant redirigé vers notre partenaire :
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Vous quittez le site dineo.re</li>
                <li>Vous acceptez les conditions générales de vente du partenaire de réservation</li>
                <li>Le contrat de réservation est conclu entre vous et ce partenaire</li>
                <li>Dineo n'est pas partie au contrat et ne peut être tenu responsable de son exécution</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Informations fournies</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.1. Exactitude des informations</h3>
              <p className="text-gray-700 mb-4">
                Dineo s'efforce de fournir des informations exactes, complètes et à jour concernant les activités
                présentées (descriptions, prix, disponibilités, conditions).
              </p>
              <p className="text-gray-700 mb-4">
                Toutefois, ces informations sont fournies par nos partenaires et prestataires. Dineo ne peut
                garantir leur exactitude absolue en temps réel.
              </p>
              <p className="text-gray-700">
                <strong>Les informations affichées sur Dineo sont indicatives.</strong> Les prix, disponibilités
                et conditions définitives sont ceux indiqués sur la plateforme du partenaire au moment de la réservation.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.2. Mise à jour</h3>
              <p className="text-gray-700">
                Dineo met à jour régulièrement les informations affichées, mais ne peut garantir qu'elles reflètent
                en permanence les modifications apportées par les prestataires (changements tarifaires, conditions,
                disponibilités).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Réservations et paiements</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.1. Processus de réservation</h3>
              <p className="text-gray-700 mb-4">
                La réservation d'une activité présentée sur Dineo s'effectue en plusieurs étapes :
              </p>
              <ol className="list-decimal ml-6 text-gray-700 space-y-2">
                <li>Vous consultez les informations de l'activité sur dineo.re</li>
                <li>Vous cliquez sur le bouton "Réserver"</li>
                <li>Vous êtes redirigé vers la plateforme de notre partenaire de réservation</li>
                <li>Vous complétez la réservation selon les modalités du partenaire</li>
                <li>Vous effectuez le paiement directement sur la plateforme du partenaire</li>
                <li>Vous recevez la confirmation de réservation du partenaire</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.2. Paiement</h3>
              <p className="text-gray-700 mb-4">
                <strong>Dineo n'encaisse aucun paiement.</strong> Tous les paiements sont effectués directement
                sur la plateforme du partenaire de réservation via des systèmes de paiement sécurisés.
              </p>
              <p className="text-gray-700">
                En cas de question concernant votre paiement, contactez directement le partenaire de réservation.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.3. Confirmation</h3>
              <p className="text-gray-700">
                La confirmation de réservation est émise par le partenaire de réservation. Dineo n'émet aucun
                voucher, billet ou confirmation de réservation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Annulations, modifications et litiges</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.1. Annulation et modification</h3>
              <p className="text-gray-700 mb-4">
                Les conditions d'annulation et de modification sont définies par :
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>La plateforme partenaire de réservation</li>
                <li>Le prestataire de l'activité</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Pour annuler ou modifier votre réservation, référez-vous aux conditions communiquées lors de
                votre réservation et contactez directement le partenaire de réservation via votre espace client.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.2. Remboursements</h3>
              <p className="text-gray-700 mb-4">
                Les remboursements éventuels sont gérés exclusivement par le partenaire de réservation selon
                ses propres conditions générales de vente.
              </p>
              <p className="text-gray-700">
                Dineo n'intervient pas dans le processus de remboursement.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.3. Litiges</h3>
              <p className="text-gray-700 mb-4">
                En cas de litige concernant :
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>La réservation, le paiement ou l'annulation → contactez le partenaire de réservation</li>
                <li>Le déroulement de l'activité, la qualité du service → contactez le prestataire via le partenaire</li>
                <li>Les informations affichées sur dineo.re → contactez-nous à contact@dineo.re</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation de responsabilité</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.1. Rôle d'intermédiaire</h3>
              <p className="text-gray-700 mb-4">
                En tant qu'intermédiaire, Dineo ne peut être tenu responsable :
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>De la non-exécution, de l'exécution défectueuse ou de l'annulation d'une activité</li>
                <li>Des dommages corporels, matériels ou immatériels survenus pendant une activité</li>
                <li>Des modifications de prix, conditions ou disponibilités effectuées par les prestataires</li>
                <li>Des problèmes techniques rencontrés sur les plateformes de réservation de nos partenaires</li>
                <li>De l'inexactitude des informations fournies par les prestataires</li>
                <li>Des litiges entre vous et le partenaire de réservation ou le prestataire</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.2. Disponibilité du site</h3>
              <p className="text-gray-700 mb-4">
                Dineo s'efforce d'assurer l'accessibilité du site 24h/24 et 7j/7, mais ne peut garantir une
                disponibilité permanente.
              </p>
              <p className="text-gray-700">
                Le site peut être temporairement indisponible pour maintenance, mise à jour ou pour toute autre
                raison technique. Dineo ne saurait être tenu responsable des conséquences de ces interruptions.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.3. Exactitude des contenus</h3>
              <p className="text-gray-700">
                Malgré nos efforts pour fournir des informations exactes, Dineo ne garantit pas l'exactitude,
                la complétude ou l'actualité des informations présentées sur le site. Les utilisateurs sont
                invités à vérifier les informations sur la plateforme du partenaire avant de finaliser une réservation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Programme d'affiliation et rémunération</h2>
              <p className="text-gray-700 mb-4">
                <strong>Transparence :</strong> Dineo participe à des programmes d'affiliation avec ses partenaires
                de réservation.
              </p>
              <p className="text-gray-700 mb-4">
                Lorsque vous effectuez une réservation via un lien présent sur dineo.re, Dineo peut percevoir
                une commission de la part du partenaire de réservation.
              </p>
              <p className="text-gray-700">
                <strong>Cette commission n'entraîne aucun surcoût pour vous.</strong> Le prix que vous payez est
                identique à celui que vous paieriez en vous rendant directement sur le site du partenaire.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Utilisation du site</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">9.1. Utilisation conforme</h3>
              <p className="text-gray-700 mb-4">
                En utilisant dineo.re, vous vous engagez à :
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Utiliser le site de manière loyale et conforme à sa destination</li>
                <li>Ne pas tenter de nuire au fonctionnement du site</li>
                <li>Ne pas utiliser de robots, scripts ou autres moyens automatisés pour extraire des données</li>
                <li>Ne pas reproduire, copier ou exploiter commercialement le contenu du site sans autorisation</li>
                <li>Respecter les droits de propriété intellectuelle</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">9.2. Sanctions</h3>
              <p className="text-gray-700">
                Dineo se réserve le droit de suspendre ou d'interdire l'accès au site à tout utilisateur qui
                ne respecterait pas les présentes conditions ou qui adopterait un comportement inapproprié.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Propriété intellectuelle</h2>
              <p className="text-gray-700 mb-4">
                Le site dineo.re et l'ensemble de son contenu (textes, images, logos, icônes, structure, design)
                sont protégés par le droit de la propriété intellectuelle.
              </p>
              <p className="text-gray-700 mb-4">
                Toute reproduction, représentation, modification, publication, adaptation totale ou partielle du
                site ou de son contenu est strictement interdite sans autorisation écrite préalable de Dineo.
              </p>
              <p className="text-gray-700">
                Les images et descriptions des activités appartiennent à nos partenaires et prestataires et sont
                utilisées avec leur autorisation dans le cadre du programme d'affiliation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Liens hypertextes</h2>
              <p className="text-gray-700 mb-4">
                Le site dineo.re contient des liens vers des sites internet tiers (plateformes de réservation,
                sites de prestataires).
              </p>
              <p className="text-gray-700 mb-4">
                Ces liens sont fournis pour votre commodité. Dineo n'a aucun contrôle sur ces sites externes et
                décline toute responsabilité concernant :
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Leur contenu</li>
                <li>Leur disponibilité</li>
                <li>Leur politique de confidentialité</li>
                <li>Les transactions effectuées sur ces sites</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Protection des données personnelles</h2>
              <p className="text-gray-700">
                La collecte et le traitement de vos données personnelles sont régis par notre{' '}
                <Link to="/politique-confidentialite" className="text-blue-600 hover:text-blue-800 font-medium">
                  Politique de confidentialité
                </Link>, que nous vous invitons à consulter.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Modification des CGU</h2>
              <p className="text-gray-700 mb-4">
                Dineo se réserve le droit de modifier à tout moment les présentes Conditions Générales d'Utilisation.
              </p>
              <p className="text-gray-700">
                Les modifications prennent effet dès leur publication sur cette page. Il est de votre responsabilité
                de consulter régulièrement cette page. Votre utilisation continue du site après modification
                vaut acceptation des nouvelles conditions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Droit applicable et juridiction</h2>
              <p className="text-gray-700 mb-4">
                Les présentes Conditions Générales d'Utilisation sont régies par le droit français.
              </p>
              <p className="text-gray-700 mb-4">
                En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux
                compétents français, conformément aux règles de droit commun.
              </p>
              <p className="text-gray-700">
                Conformément à l'article L.612-1 du Code de la consommation, vous pouvez recourir gratuitement
                à un médiateur de la consommation en cas de litige avec Dineo. Pour plus d'informations,
                consultez le site : <a href="https://www.economie.gouv.fr/mediation-conso" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">www.economie.gouv.fr/mediation-conso</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contact</h2>
              <p className="text-gray-700 mb-4">
                Pour toute question concernant ces Conditions Générales d'Utilisation, vous pouvez nous contacter à :
              </p>
              <p className="text-gray-700">
                <strong>Email :</strong> contact@dineo.re<br />
                <strong>Éditeur :</strong> Sébastien P.
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

export default CGVPage;
