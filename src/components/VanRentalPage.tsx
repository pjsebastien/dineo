import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, MapPin, Users, Bed, Star, ChevronRight, Check, DollarSign } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface Van {
  name: string;
  pricePerDay: number;
  sleeps: number;
  image: string;
  features: string[];
  highlight?: string;
}

const VanRentalPage: React.FC = () => {
  const vans: Van[] = [
    {
      name: "Petit fourgon aménagé économique",
      pricePerDay: 50,
      sleeps: 2,
      image: "https://www.souslesetoiles974.re/wp-content/uploads/2025/04/fourgon-amenage-en-location-avec-particulier-pas-cher-sur-lile-de-La-Reunion.webp",
      features: [
        "2 places de couchage confortables",
        "Frigo et glacière intégrés",
        "Prises USB pour recharger vos appareils",
        "Gazinière de camping avec recharge gaz",
        "BBQ portable pour vos soirées",
        "Kit ustensiles de cuisine complet",
        "Réserve d'eau 45L",
        "Kit détente avec hamacs",
        "Livraison possible à l'aéroport"
      ],
      highlight: "Le plus économique"
    },
    {
      name: "Van aménagé tout équipé autonome",
      pricePerDay: 65,
      sleeps: 2,
      image: "https://www.souslesetoiles974.re/wp-content/uploads/2025/04/van-pas-cher-en-location-a-la-reunion-saint-denis.webp",
      features: [
        "2 couchages doubles spacieux",
        "Coin cuisine équipé avec lavabo",
        "Cafetière italienne incluse",
        "Panneau solaire pour autonomie totale",
        "Douche extérieure avec eau chaude",
        "Toilettes sèches intégrées",
        "Auvent latéral 2m x 2,50m",
        "Table et chaises de camping",
        "Batterie auxiliaire rechargeable"
      ],
      highlight: "Totalement autonome"
    },
    {
      name: "Van aménagé familial 4 couchages",
      pricePerDay: 65,
      sleeps: 4,
      image: "https://www.souslesetoiles974.re/wp-content/uploads/2025/04/van-en-location-a-la-possession-974.webp",
      features: [
        "4 places de couchage (2 adultes + 2 enfants)",
        "Tente de toit pour 2 personnes",
        "Couchage double intérieur lit confort",
        "Douche solaire à pression",
        "Cuisine équipée pour 4 personnes",
        "Batterie auxiliaire puissante",
        "Lampes LED et éclairage intérieur",
        "Réchaud gaz double feu",
        "Rideaux occultants pour intimité",
        "Guides randonnées et bivouacs inclus",
        "Carte des campings de l'île"
      ],
      highlight: "Idéal en famille"
    }
  ];

  const handleBookVan = () => {
    const link = document.createElement('a');
    link.href = 'https://www.yescapa.fr/campervan-hire/la-reunion?ae=620&aev=dineo';
    link.target = '_blank';
    link.rel = 'nofollow noopener noreferrer';
    link.click();
  };

  const faqs = [
    {
      question: "Quel est le prix de la location de van à La Réunion ?",
      answer: "Les tarifs de location de van à La Réunion varient de 50€ à 75€ par jour selon le modèle et les équipements. Le petit fourgon aménagé coûte 50€/jour, idéal pour les budgets serrés. Les vans tout équipés avec panneaux solaires et douche sont à partir de 65€/jour. Le van familial 4 couchages avec tente de toit commence à 65€/jour. Ces prix incluent l'assurance de base et le kilométrage illimité."
    },
    {
      question: "Comment fonctionne la location de van entre particuliers à La Réunion ?",
      answer: "La location de van entre particuliers à La Réunion via Yescapa permet de louer directement auprès de propriétaires locaux. Vous réservez en ligne, communiquez avec le propriétaire pour organiser la remise des clés (aéroport, domicile, etc.), récupérez le van avec un état des lieux complet, et le restituez à la fin. L'assurance tous risques est incluse via Yescapa. C'est plus économique qu'une agence classique et les vans sont souvent mieux équipés."
    },
    {
      question: "Où peut-on dormir en van aménagé à La Réunion ?",
      answer: "À La Réunion, vous pouvez dormir en van dans les campings aménagés (20-30 sites sur l'île), les aires de camping-car officielles, certains parkings autorisés en montagne (cirques), et chez l'habitant via des plateformes. Le camping sauvage est toléré dans certaines zones reculées mais évitez les plages et zones protégées. Les campings offrent sanitaires, électricité et wifi. Demandez la carte des spots au propriétaire à la remise du van."
    },
    {
      question: "Faut-il un permis spécial pour louer un van à La Réunion ?",
      answer: "Non, le permis B (permis voiture classique) suffit pour tous les vans aménagés disponibles. Ils font moins de 3,5 tonnes et sont classés comme véhicules légers. Vous devez avoir le permis depuis plus de 2 ans et avoir minimum 23 ans pour la location. Un second conducteur peut être ajouté gratuitement s'il remplit les mêmes conditions. Carte bancaire obligatoire pour la caution (700-1500€ selon van)."
    },
    {
      question: "Quelle est la meilleure période pour louer un van à La Réunion ?",
      answer: "La haute saison (juillet-août, vacances scolaires) offre le meilleur climat mais les tarifs augmentent de 20-30% et il faut réserver 2-3 mois à l'avance. La saison intermédiaire (mai-juin, septembre-octobre) propose le meilleur rapport qualité-prix avec beau temps et tarifs normaux. L'été austral (novembre-avril) est plus humide avec risque cyclonique mais les vans sont disponibles et moins chers. Évitez janvier-mars (pluies intenses)."
    },
    {
      question: "Que comprend la location de van aménagé à La Réunion ?",
      answer: "La location inclut : le van tout équipé (cuisine, couchage, rangements), kilométrage illimité, assurance tous risques avec franchise, kit vaisselle et ustensiles, linge de lit et oreillers, chaises et table de camping, équipement gaz (recharge comprise), réserve d'eau pleine. Certains vans incluent douche, toilettes, panneau solaire, BBQ, hamacs, guides randonnées. La livraison à l'aéroport est possible (supplément 30-50€). Assistance 24/7 en cas de problème."
    },
    {
      question: "Peut-on louer un van pas cher à La Réunion ?",
      answer: "Oui, la location entre particuliers via Yescapa permet de trouver des vans pas chers dès 50€/jour (vs 80-120€ en agence classique). Pour économiser : réservez longue durée (dégressif dès 7 jours), évitez haute saison, choisissez un petit fourgon 2 places, prenez en charge au domicile du propriétaire (évitez frais livraison aéroport), louez en semaine plutôt que week-end. Location 2 semaines = environ 600€ au lieu de 1000€."
    },
    {
      question: "Comment se passe la remise du van à La Réunion ?",
      answer: "Remise flexible selon arrangement avec le propriétaire : à l'aéroport Roland Garros (frais livraison 30-50€), au domicile du propriétaire à Saint-Denis/Saint-Paul/Saint-Pierre, ou à un point de rendez-vous convenu. État des lieux complet avec photos (30 min), explication du fonctionnement (gaz, eau, électricité), remise des clés et carte grise. Le propriétaire donne ses bons plans spots et campings. Restitution identique en fin de séjour avec plein de carburant."
    }
  ];

  const reviews = [
    {
      name: "Marine & Thomas",
      rating: 5,
      date: "Il y a 1 semaine",
      comment: "Van parfait pour notre road trip de 10 jours ! Tout l'équipement était là, le propriétaire nous a donné plein de bons plans de spots. On a fait tout le tour de l'île en dormant dans des endroits magnifiques. Meilleur moyen de découvrir La Réunion !"
    },
    {
      name: "Julie P.",
      rating: 5,
      date: "Il y a 2 semaines",
      comment: "Location entre particuliers au top via Yescapa. Van nickel, bien entretenu, livraison à l'aéroport super pratique. Le panneau solaire nous a permis d'être totalement autonomes. Bien moins cher qu'un hôtel et tellement plus de liberté !"
    },
    {
      name: "Alexandre & famille",
      rating: 5,
      date: "Il y a 3 semaines",
      comment: "Van 4 places parfait pour notre famille. Les enfants adoraient dormir dans la tente de toit ! Équipement complet, propriétaire disponible et de bons conseils. Nous avons économisé une fortune comparé à une location en agence classique. À refaire sans hésiter !"
    }
  ];

  const benefits = [
    { icon: "💰", title: "Prix imbattables", description: "50 à 75€/jour, jusqu'à 40% moins cher qu'en agence" },
    { icon: "🚐", title: "Vans équipés", description: "Cuisine, couchage, eau, gaz, tout est inclus" },
    { icon: "🔋", title: "Autonomie totale", description: "Panneaux solaires, réserves d'eau, douche" },
    { icon: "✈️", title: "Livraison aéroport", description: "Récupération à Roland Garros possible" },
    { icon: "🏕️", title: "Liberté totale", description: "Dormez où vous voulez, changez de spot chaque jour" },
    { icon: "👥", title: "Entre particuliers", description: "Propriétaires locaux, conseils et bons plans inclus" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Location de van à La Réunion | Van aménagé dès 50€/jour</title>
        <meta name="description" content="Location de van aménagé à La Réunion entre particuliers dès 50€/jour. Van pas cher tout équipé : cuisine, couchage, panneau solaire. Livraison aéroport. Réservation via Yescapa." />
        <meta name="keywords" content="location van réunion, location van aménagé réunion, van aménagé la réunion, location van pas cher réunion, location van entre particuliers réunion, louer van réunion, road trip van réunion" />
        <link rel="canonical" href="https://dineo.re/location-van-reunion" />

        {/* Open Graph */}
        <meta property="og:title" content="Location de van à La Réunion | Van aménagé dès 50€/jour" />
        <meta property="og:description" content="Louez un van aménagé entre particuliers à La Réunion dès 50€/jour. Totalement équipés, autonomes, livraison aéroport possible." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dineo.re/location-van-reunion" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">Location de van</span>
        </nav>

        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux activités
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl text-white p-8 md:p-12 mb-12">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⭐ {vans.length} vans aménagés disponibles
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Location de van à La Réunion
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Louez un van aménagé entre particuliers dès 50€/jour. Totalement équipés : cuisine, couchage, panneau solaire. Vivez un road trip inoubliable en toute liberté sur l'île intense.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                <DollarSign className="w-5 h-5 mr-2" />
                <span className="font-semibold">Dès 50€/jour</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                <Bed className="w-5 h-5 mr-2" />
                <span className="font-semibold">2 à 4 couchages</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-semibold">Livraison aéroport</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-semibold">Entre particuliers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Navigation rapide</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href="#vans" className="text-center p-3 rounded-lg border-2 border-gray-200 hover:border-orange-600 hover:bg-orange-50 transition-all">
              <div className="text-2xl mb-1">🚐</div>
              <div className="text-sm font-medium text-gray-900">Les vans</div>
            </a>
            <a href="#avantages" className="text-center p-3 rounded-lg border-2 border-gray-200 hover:border-orange-600 hover:bg-orange-50 transition-all">
              <div className="text-2xl mb-1">💰</div>
              <div className="text-sm font-medium text-gray-900">Avantages</div>
            </a>
            <a href="#guide" className="text-center p-3 rounded-lg border-2 border-gray-200 hover:border-orange-600 hover:bg-orange-50 transition-all">
              <div className="text-2xl mb-1">📖</div>
              <div className="text-sm font-medium text-gray-900">Tout savoir</div>
            </a>
            <a href="#faq" className="text-center p-3 rounded-lg border-2 border-gray-200 hover:border-orange-600 hover:bg-orange-50 transition-all">
              <div className="text-2xl mb-1">❓</div>
              <div className="text-sm font-medium text-gray-900">Questions</div>
            </a>
          </div>
        </div>

        {/* Vans Grid */}
        <section id="vans" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Vans aménagés à louer à La Réunion
              </h2>
              <p className="text-gray-600 text-lg">
                {vans.length} vans tout équipés disponibles en location entre particuliers
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {vans.map((van, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group">
                {van.highlight && (
                  <div className="bg-orange-600 text-white text-center py-2 text-sm font-bold">
                    {van.highlight}
                  </div>
                )}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={van.image}
                    alt={van.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{van.name}</h3>

                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                    <div>
                      <div className="text-3xl font-bold text-orange-600">
                        {van.pricePerDay}€
                        <span className="text-base font-normal text-gray-600">/jour</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="w-5 h-5 mr-2" />
                      <span className="font-semibold">{van.sleeps} {van.sleeps > 1 ? 'couchages' : 'couchage'}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {van.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {van.features.length > 5 && (
                      <div className="text-sm text-gray-500 italic">
                        + {van.features.length - 5} autres équipements
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleBookVan}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Réserver ce van
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Price Comparison */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              💰 Tarifs de location de van à La Réunion
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border-2 border-green-200">
                <div className="text-sm font-semibold text-green-600 mb-2">ÉCONOMIQUE</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">50€/jour</div>
                <div className="text-gray-700 space-y-1">
                  <div>✓ Petit fourgon 2 places</div>
                  <div>✓ Cuisine équipée</div>
                  <div>✓ Livraison aéroport possible</div>
                  <div>✓ Kilométrage illimité</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-2 border-orange-200">
                <div className="text-sm font-semibold text-orange-600 mb-2">CONFORT</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">65€/jour</div>
                <div className="text-gray-700 space-y-1">
                  <div>✓ Van tout équipé 2 places</div>
                  <div>✓ Panneau solaire autonome</div>
                  <div>✓ Douche + toilettes</div>
                  <div>✓ Auvent inclus</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-2 border-red-200">
                <div className="text-sm font-semibold text-red-600 mb-2">FAMILIAL</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">65€/jour</div>
                <div className="text-gray-700 space-y-1">
                  <div>✓ Van 4 couchages</div>
                  <div>✓ Tente de toit incluse</div>
                  <div>✓ Cuisine 4 personnes</div>
                  <div>✓ Guides randos offerts</div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-700 mb-4">
                <strong>Réduction longue durée :</strong> -10% dès 7 jours, -15% dès 14 jours, -20% dès 21 jours
              </p>
              <button
                onClick={handleBookVan}
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Voir tous les vans disponibles
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="avantages" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Pourquoi louer un van aménagé à La Réunion ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            ⭐ Avis sur la location de van
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Complete Guide */}
        <section id="guide" className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Tout savoir sur la location de van à La Réunion
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              La <strong>location de van aménagé à La Réunion</strong> est devenue le mode de voyage préféré des aventuriers en quête de liberté. Louer un van entre particuliers permet de découvrir l'île intense à son rythme, de dormir face à l'océan ou au pied des cirques, tout en réalisant des économies substantielles par rapport aux hôtels.
            </p>

            <div className="space-y-8 mt-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Pourquoi choisir la location de van entre particuliers ?
                </h3>
                <p className="mb-4">
                  La <strong>location de van entre particuliers à La Réunion</strong> via des plateformes comme Yescapa présente de nombreux avantages. Les tarifs sont 30 à 40% moins élevés qu'en agence traditionnelle, avec des vans dès 50€/jour contre 80-120€ en agence classique. Les propriétaires sont des passionnés locaux qui partagent leurs bons plans, spots secrets et conseils authentiques.
                </p>
                <p>
                  Les vans entre particuliers sont généralement mieux équipés et entretenus car utilisés personnellement par les propriétaires. Vous bénéficiez d'un service personnalisé avec remise flexible (aéroport, domicile), état des lieux détaillé et assistance en cas de besoin. L'assurance tous risques est incluse via la plateforme Yescapa, vous êtes donc parfaitement protégé.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Location de van pas cher à La Réunion : les bons plans
                </h3>
                <p className="mb-4">
                  Pour trouver une <strong>location de van pas cher à La Réunion</strong>, plusieurs astuces existent. Réservez en longue durée pour bénéficier de tarifs dégressifs : -10% dès 7 jours, -15% dès 14 jours, -20% au-delà de 21 jours. Une location de 2 semaines revient ainsi à environ 600€ au lieu de 900€.
                </p>
                <p className="mb-4">
                  Évitez la haute saison (juillet-août, vacances scolaires) où les prix augmentent de 20 à 30%. Privilégiez les périodes intermédiaires (mai-juin, septembre-octobre) pour bénéficier des meilleurs tarifs. Optez pour un petit fourgon 2 places si vous voyagez en couple plutôt qu'un grand van familial.
                </p>
                <p>
                  Récupérez le van directement au domicile du propriétaire pour éviter les frais de livraison aéroport (30-50€). Louez en semaine plutôt que le week-end quand c'est possible. Comparez les annonces sur Yescapa pour trouver les meilleures offres. Avec ces astuces, vous pouvez facilement trouver un van équipé pour moins de 400€ la semaine.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Road trip en van à La Réunion : l'itinéraire parfait
                </h3>
                <p className="mb-4">
                  Un <strong>road trip en van aménagé à La Réunion</strong> permet de découvrir toutes les merveilles de l'île. L'itinéraire classique de 10-14 jours fait le tour complet : côte ouest avec ses plages et lagon (Saint-Gilles, La Saline), sud sauvage avec le Piton de la Fournaise, est verdoyant avec cascades et bassins, et les trois cirques classés UNESCO.
                </p>
                <p className="mb-4">
                  Commencez par récupérer votre van à l'aéroport Roland Garros et dirigez-vous vers la côte ouest. Passez 2-3 jours à explorer Saint-Gilles et ses activités nautiques (plongée, observation dauphins), tout en dormant sur un parking face au lagon. Montez ensuite au cirque de Cilaos pour 2 jours de randonnées et canyoning.
                </p>
                <p>
                  Poursuivez vers le sud pour visiter le Piton de la Fournaise (2 jours), puis remontez la côte est en passant par Saint-Benoît et la cascade du Trou de Fer. Terminez par le cirque de Salazie et Hell-Bourg (2 jours) avant de rejoindre le Maïdo pour un lever de soleil mémorable. Votre van vous permet de changer de spot chaque soir et de dormir dans des endroits magiques.
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Où dormir en van aménagé à La Réunion ?
                </h3>
                <p className="mb-4">
                  La Réunion compte une vingtaine de campings aménagés répartis sur toute l'île, avec sanitaires, électricité, wifi et parfois piscine. Comptez 15-25€ la nuit. Les aires de camping-car officielles sont gratuites ou à petit prix (5-10€) et offrent des emplacements sécurisés, notamment à Saint-Leu, Saint-Pierre et Cilaos.
                </p>
                <p className="mb-4">
                  Certains parkings en montagne tolèrent le stationnement nocturne : col de Bellevue (vue sur Mafate), parking de la Plaine des Sables (Fournaise), belvédère du Maïdo. Respectez la propreté des lieux et arrivez tard/partez tôt pour éviter les problèmes. Plusieurs propriétaires locaux proposent un emplacement chez eux via des plateformes dédiées.
                </p>
                <p>
                  Le camping sauvage est toléré dans certaines zones reculées de montagne mais strictement interdit sur les plages, zones protégées et bords de route. Privilégiez toujours les solutions légales et respectueuses. Demandez la carte des meilleurs spots au propriétaire lors de la remise du van, ils connaissent tous les bons plans locaux.
                </p>
              </div>

              <div className="bg-cyan-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Vans tout équipés : l'autonomie totale
                </h3>
                <p className="mb-4">
                  Les <strong>vans aménagés équipés de panneaux solaires</strong> offrent une autonomie totale pour votre séjour. Le panneau solaire recharge la batterie auxiliaire qui alimente l'éclairage intérieur, les prises USB, le frigo et la pompe à eau. Vous pouvez ainsi passer plusieurs jours sans accès à l'électricité.
                </p>
                <p>
                  Les réserves d'eau (45 à 100L selon les modèles) permettent de tenir 2-3 jours en autonomie. Remplissez aux campings, stations-service ou fontaines publiques. La douche extérieure (solaire ou raccordée au réservoir) permet de se rafraîchir après une randonnée. Les toilettes sèches évitent la dépendance aux sanitaires. Cette autonomie vous donne une liberté totale dans le choix de vos spots.
                </p>
              </div>

              <div className="bg-pink-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Comment réserver votre van sur Yescapa ?
                </h3>
                <p className="mb-4">
                  La réservation sur <strong>Yescapa</strong> est simple et sécurisée. Créez votre compte gratuit, recherchez les vans disponibles à La Réunion pour vos dates en filtrant par budget et nombre de couchages. Consultez les annonces détaillées avec photos, équipements, avis des locataires précédents et tarifs exacts.
                </p>
                <p className="mb-4">
                  Envoyez une demande de réservation au propriétaire qui dispose de 24h pour accepter. Échangez avec lui via la messagerie pour organiser la remise (aéroport, domicile, point de rendez-vous). Une fois la réservation acceptée, payez en ligne de manière sécurisée. Le paiement est bloqué jusqu'à la remise effective du van.
                </p>
                <p>
                  L'assurance tous risques avec assistance 24/7 est automatiquement incluse dans le tarif. Vous recevez tous les documents nécessaires (contrat, assurance, coordonnées du propriétaire). Le jour J, rendez-vous au point convenu pour l'état des lieux et la remise des clés. Le propriétaire vous explique tout le fonctionnement et vous donne ses meilleurs conseils pour découvrir l'île.
                </p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Conseils pratiques pour votre location de van
                </h3>
                <p className="mb-4">
                  Avant de partir, vérifiez que vous avez bien : permis B depuis plus de 2 ans, minimum 23 ans, carte bancaire pour la caution (700-1500€ selon van, débloquée à la restitution). Prévoyez votre liste de campings et spots en amont car certains affichent complet en haute saison.
                </p>
                <p className="mb-4">
                  Côté conduite, les vans sont plus hauts et larges qu'une voiture. Soyez vigilant dans les virages serrés des routes de montagne (Cilaos notamment avec ses 400 virages). Roulez prudemment, l'île est petite mais les trajets prennent du temps. Anticipez votre plein de carburant, surtout avant de monter en altitude où les stations sont rares.
                </p>
                <p>
                  Respectez les règles de stationnement et campement pour préserver ce mode de voyage. Ne videz jamais vos eaux usées dans la nature, utilisez les bornes prévues. Laissez les spots propres pour les prochains voyageurs. Soyez discret en camping sauvage. Le respect de l'environnement et des réglementations garantit la pérennité de cette liberté.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-xl mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                En résumé : quel van choisir pour votre road trip ?
              </h4>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <div className="text-2xl mr-3">💰</div>
                  <div>
                    <span className="font-semibold">Budget serré :</span> Petit fourgon 2 places à 50€/jour, tout équipé pour voyager économique
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">⚡</div>
                  <div>
                    <span className="font-semibold">Autonomie maximale :</span> Van tout équipé 65€/jour avec panneau solaire, douche et toilettes
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">👨‍👩‍👧</div>
                  <div>
                    <span className="font-semibold">En famille :</span> Van 4 couchages avec tente de toit à 65€/jour, cuisine équipée pour 4
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">📅</div>
                  <div>
                    <span className="font-semibold">Longue durée :</span> Tous les vans avec réductions dégressives (-20% dès 21 jours)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur la location de van à La Réunion
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                  <span className="text-orange-600 mr-2">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed ml-6">
                  <span className="text-orange-600 font-semibold">R.</span> {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl text-white p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt pour votre road trip en van à La Réunion ?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Réservez dès maintenant votre van aménagé entre particuliers et vivez une aventure inoubliable en toute liberté sur l'île intense. Location dès 50€/jour, entièrement équipé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBookVan}
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition-colors shadow-lg"
            >
              Réserver mon van sur Yescapa
            </button>
            <Link
              to="/"
              className="inline-block bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-800 transition-colors"
            >
              Découvrir toutes les activités
            </Link>
          </div>
          <p className="text-sm text-orange-100 mt-6">
            ✓ Assurance tous risques incluse • ✓ Assistance 24/7 • ✓ Annulation flexible
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VanRentalPage;
