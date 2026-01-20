import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const PolitiqueConfidentialitePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Politique de confidentialité - Dineo</title>
        <meta name="description" content="Politique de confidentialité et protection des données personnelles de Dineo" />
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de confidentialité</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                La présente Politique de confidentialité décrit la manière dont Dineo collecte, utilise et
                protège vos données personnelles lorsque vous utilisez notre site internet <strong>dineo.re</strong>.
              </p>
              <p className="text-gray-700 mb-4">
                Dineo s'engage à protéger la vie privée de ses utilisateurs et à respecter la réglementation
                applicable en matière de protection des données personnelles, notamment le Règlement Général
                sur la Protection des Données (RGPD).
              </p>
              <p className="text-gray-700">
                <strong>Responsable du traitement :</strong> Sébastien P., éditeur du site dineo.re
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Données collectées</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.1. Données de navigation</h3>
              <p className="text-gray-700 mb-4">
                Lors de votre visite sur dineo.re, nous pouvons collecter automatiquement certaines informations
                techniques, notamment :
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Votre adresse IP</li>
                <li>Le type et la version de votre navigateur</li>
                <li>Votre système d'exploitation</li>
                <li>Les pages que vous consultez et la durée de visite</li>
                <li>La date et l'heure de votre visite</li>
                <li>Le site depuis lequel vous avez été redirigé</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2. Données transmises à nos partenaires</h3>
              <p className="text-gray-700 mb-4">
                <strong>Important :</strong> Dineo ne collecte pas directement de données personnelles d'identification
                (nom, prénom, email, coordonnées bancaires, etc.).
              </p>
              <p className="text-gray-700">
                Lorsque vous cliquez sur "Réserver" et êtes redirigé vers la plateforme de notre partenaire de
                réservation, vous quittez le site dineo.re. Les données que vous fournissez lors de la réservation
                (informations personnelles, coordonnées bancaires, etc.) sont collectées et traitées directement
                par notre partenaire selon sa propre politique de confidentialité.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Finalités de la collecte</h2>
              <p className="text-gray-700 mb-4">
                Les données collectées par Dineo sont utilisées pour :
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Assurer le bon fonctionnement technique du site</li>
                <li>Améliorer l'expérience utilisateur et la navigation</li>
                <li>Réaliser des statistiques de fréquentation anonymisées</li>
                <li>Détecter et prévenir les fraudes et abus</li>
                <li>Respecter nos obligations légales</li>
                <li>Optimiser le référencement de nos partenaires (programme d'affiliation)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Base légale du traitement</h2>
              <p className="text-gray-700 mb-4">
                Les traitements de données personnelles effectués par Dineo reposent sur les bases légales suivantes :
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li><strong>Intérêt légitime :</strong> amélioration de nos services, sécurité du site, statistiques</li>
                <li><strong>Consentement :</strong> cookies non essentiels (après acceptation)</li>
                <li><strong>Obligation légale :</strong> conservation de certaines données pour répondre aux obligations fiscales et légales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies</h2>
              <p className="text-gray-700 mb-4">
                Le site dineo.re peut utiliser des cookies pour améliorer votre expérience de navigation.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.1. Types de cookies utilisés</h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li><strong>Cookies techniques :</strong> essentiels au fonctionnement du site (navigation, sécurité)</li>
                <li><strong>Cookies analytiques :</strong> mesure d'audience et statistiques de visite</li>
                <li><strong>Cookies d'affiliation :</strong> suivi des redirections vers nos partenaires</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.2. Gestion des cookies</h3>
              <p className="text-gray-700 mb-4">
                Vous pouvez à tout moment configurer votre navigateur pour :
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Accepter ou refuser les cookies</li>
                <li>Être informé avant l'enregistrement d'un cookie</li>
                <li>Supprimer les cookies enregistrés</li>
              </ul>
              <p className="text-gray-700 mt-4">
                La suppression des cookies peut affecter certaines fonctionnalités du site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Durée de conservation</h2>
              <p className="text-gray-700 mb-4">
                Les données de navigation sont conservées pour une durée maximale de :
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li><strong>Données de connexion :</strong> 12 mois maximum</li>
                <li><strong>Cookies analytiques :</strong> 13 mois maximum</li>
                <li><strong>Cookies d'affiliation :</strong> selon les conditions de nos partenaires (généralement 30 à 90 jours)</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Au-delà de ces durées, les données sont supprimées ou anonymisées.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Partage des données</h2>
              <p className="text-gray-700 mb-4">
                Dineo ne vend, ne loue ni ne partage vos données personnelles avec des tiers, à l'exception :
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>De nos partenaires de réservation, uniquement lors de votre redirection volontaire vers leur plateforme</li>
                <li>Des prestataires techniques nécessaires au fonctionnement du site (hébergement, analytics)</li>
                <li>Des autorités compétentes si la loi l'exige</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Nos partenaires et prestataires sont soumis à des obligations de confidentialité et ne peuvent
                utiliser vos données qu'aux fins définies contractuellement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Transferts internationaux</h2>
              <p className="text-gray-700 mb-4">
                Notre hébergeur Vercel est situé aux États-Unis. Les données techniques collectées peuvent donc
                faire l'objet d'un transfert hors de l'Union Européenne.
              </p>
              <p className="text-gray-700">
                Ce transfert est encadré par des garanties appropriées conformes au RGPD, notamment les clauses
                contractuelles types approuvées par la Commission Européenne.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Sécurité</h2>
              <p className="text-gray-700 mb-4">
                Dineo met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos
                données contre :
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>La destruction accidentelle ou illicite</li>
                <li>La perte accidentelle</li>
                <li>L'altération, la diffusion ou l'accès non autorisé</li>
                <li>Toute autre forme de traitement illicite</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Ces mesures incluent notamment : connexion HTTPS, hébergement sécurisé, accès restreint aux données,
                et sauvegarde régulière.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Vos droits</h2>
              <p className="text-gray-700 mb-4">
                Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li><strong>Droit d'accès :</strong> obtenir la confirmation que des données vous concernant sont traitées
                  et accéder à ces données</li>
                <li><strong>Droit de rectification :</strong> demander la correction de données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données dans certaines conditions</li>
                <li><strong>Droit à la limitation :</strong> demander la limitation du traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré et couramment utilisé</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données pour des raisons
                  tenant à votre situation particulière</li>
                <li><strong>Droit de retirer votre consentement :</strong> pour les traitements basés sur le consentement</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Exercer vos droits</h3>
              <p className="text-gray-700 mb-4">
                Pour exercer vos droits, vous pouvez nous contacter à l'adresse email suivante :
                <strong> contact@dineo.re</strong>
              </p>
              <p className="text-gray-700 mb-4">
                Votre demande doit être accompagnée d'une copie d'un titre d'identité signé. Nous nous engageons
                à vous répondre dans un délai d'un mois maximum.
              </p>
              <p className="text-gray-700">
                Vous disposez également du droit d'introduire une réclamation auprès de la Commission Nationale
                de l'Informatique et des Libertés (CNIL) si vous estimez que le traitement de vos données
                constitue une violation de la réglementation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Données des mineurs</h2>
              <p className="text-gray-700">
                Dineo ne collecte pas sciemment de données personnelles concernant des mineurs de moins de 16 ans.
                Si vous êtes parent ou tuteur légal et que vous découvrez que votre enfant nous a fourni des
                données personnelles, veuillez nous contacter afin que nous puissions supprimer ces informations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Modifications de la politique</h2>
              <p className="text-gray-700 mb-4">
                Dineo se réserve le droit de modifier à tout moment la présente Politique de confidentialité
                pour refléter les changements apportés à nos pratiques ou pour toute autre raison opérationnelle,
                légale ou réglementaire.
              </p>
              <p className="text-gray-700">
                Toute modification sera publiée sur cette page avec une mise à jour de la date de "Dernière mise à jour".
                Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques
                en matière de protection des données.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact</h2>
              <p className="text-gray-700">
                Pour toute question concernant cette Politique de confidentialité ou le traitement de vos données
                personnelles, vous pouvez nous contacter à :
              </p>
              <p className="text-gray-700 mt-4">
                <strong>Email :</strong> contact@dineo.re<br />
                <strong>Responsable du traitement :</strong> Sébastien P.
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

export default PolitiqueConfidentialitePage;
