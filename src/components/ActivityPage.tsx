import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Clock, Users, Star, MapPin, ArrowLeft, ExternalLink, Calendar, Shield, Info } from 'lucide-react';
import { activities } from '../data/activities';
import { Activity } from '../types/Activity';
import { generateStructuredData, getRandomInternalLink } from '../utils/seo';
import Header from './Header';
import ActivityCard from './ActivityCard';
import Footer from './Footer';

const ActivityPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const activity = activities.find(a => a.slug === slug);

  if (!activity) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Activité non trouvée</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Retour à l'accueil
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const rating = parseFloat(activity.note.split('/')[0]);
  const reviewCount = activity.nb_avis.replace('≈', '').replace('~', '');
  const structuredData = generateStructuredData(activity);
  const internalLink = getRandomInternalLink();

  // Find similar activities (same category or location, excluding current activity)
  const similarActivities = activities
    .filter(a => a.slug !== activity.slug)
    .filter(a => 
      a.categorie === activity.categorie || 
      a.lieu.includes(activity.lieu.split(',')[0]) ||
      a.sous_categorie === activity.sous_categorie
    )
    .slice(0, 3);

  const handleBooking = () => {
    window.open(activity.url, '_blank');
  };

  const handleSimilarActivityBook = (similarActivity: Activity) => {
    window.open(similarActivity.url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{activity.seo_title}</title>
        <meta name="description" content={activity.meta_description} />
        <meta name="keywords" content={`${activity.titre}, ${activity.lieu}, ${activity.sous_categorie}, la réunion, activité, réservation`} />
        <meta property="og:title" content={activity.seo_title} />
        <meta property="og:description" content={activity.meta_description} />
        <meta property="og:image" content={activity.image_url_1} />
        <meta property="og:type" content="product" />
        <link rel="canonical" href={`https://dineo.re/activite/${activity.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <span className="text-gray-900">{activity.titre}</span>
        </nav>

        {/* Back button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux activités
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Hero section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="relative">
                <img
                  src={activity.image_url_1}
                  alt={activity.titre}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {activity.categorie}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <button
                    onClick={handleBooking}
                    className="flex items-center space-x-1 hover:bg-white/100 transition-colors rounded-lg px-1 py-1"
                  >
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium text-gray-900">{rating}</span>
                    <span className="text-sm text-gray-600">({reviewCount} avis)</span>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {activity.titre}
                </h1>
                
                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-lg">{activity.lieu}</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Durée</div>
                    <div className="font-semibold">{activity.duree}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Âge minimum</div>
                    <div className="font-semibold">{activity.age_min}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Shield className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Niveau</div>
                    <div className="font-semibold">{activity.niveau}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Annulation</div>
                    <div className="font-semibold">{activity.politique_annulation}</div>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  {activity.resume}
                </p>
              </div>
            </div>

            {/* Additional images */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <img
                src={activity.image_url_2}
                alt={`${activity.titre} - Image 2`}
                className="w-full h-48 object-cover rounded-xl shadow-md"
              />
              <img
                src={activity.image_url_3}
                alt={`${activity.titre} - Image 3`}
                className="w-full h-48 object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Points forts */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Points forts</h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  {activity.points_forts.split(';').map((point, index) => (
                    <li key={index} className="flex items-start text-gray-800">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>{point.trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Détails pratiques */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations pratiques</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Info className="w-5 h-5 mr-2 text-blue-600" />
                    Inclus dans l'activité
                  </h3>
                  <p className="text-gray-700 bg-green-50 p-3 rounded-lg">{activity.comprend}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Info className="w-5 h-5 mr-2 text-orange-600" />
                    À prévoir
                  </h3>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <ul className="space-y-2">
                      {activity.a_prevoir.split(';').map((item, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <span className="text-orange-600 mr-2 mt-1">•</span>
                          <span>{item.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Point de rendez-vous</h3>
                <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{activity.point_de_rdv}</p>
              </div>

              {activity.pre_requis && (
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Prérequis</h3>
                  <p className="text-gray-700 bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
                    {activity.pre_requis}
                  </p>
                </div>
              )}

              {activity.conditions_particulieres && (
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Conditions particulières</h3>
                  <p className="text-gray-700 bg-blue-50 p-3 rounded-lg">
                    {activity.conditions_particulieres}
                  </p>
                </div>
              )}
            </div>

            {/* SEO Content */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Tout savoir sur cette expérience à La Réunion
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Comment se déroule cette activité ?</h3>
                <p className="mb-4">
                  {activity.sous_categorie === 'Randonnée' ? 
                    `Votre aventure commence dès votre arrivée au point de rendez-vous ${activity.point_de_rdv}. Après un briefing complet sur la sécurité et l'itinéraire, vous partirez accompagné d'un guide expérimenté qui connaît parfaitement le terrain. Cette randonnée de ${activity.duree} vous permettra de découvrir des paysages exceptionnels tout en bénéficiant des explications de votre accompagnateur sur la faune, la flore et l'histoire géologique de La Réunion.` :
                  activity.sous_categorie === 'Snorkeling' ?
                    `Rendez-vous ${activity.point_de_rdv} où votre guide vous accueillera et vous remettra tout l'équipement nécessaire : masque, tuba, palmes et combinaison. Après une présentation des consignes de sécurité et des techniques de base, vous entrerez dans l'eau pour une exploration guidée de ${activity.duree}. Votre guide vous montrera les plus beaux spots et vous aidera à identifier les espèces marines que vous croiserez.` :
                  activity.sous_categorie === 'Plongée sous‑marine' ?
                    `Cette initiation à la plongée débute par un briefing théorique dans le centre de plongée. Votre moniteur diplômé d'État vous expliquera les bases de la plongée, l'utilisation de l'équipement et les signaux sous-marins. Après avoir enfilé votre combinaison et vérifié votre matériel, vous embarquerez pour rejoindre le site de plongée. L'immersion dure ${activity.duree.includes('20 min') ? '20 minutes' : '25 minutes'} à une profondeur maximale adaptée aux débutants.` :
                  activity.sous_categorie === 'Parapente' ?
                    `Votre vol en parapente commence par un rendez-vous sur le site de décollage où vous rencontrerez votre pilote professionnel. Après avoir enfilé le harnais et reçu les consignes de sécurité, vous prendrez place pour un décollage en douceur. Le vol de ${activity.duree.includes('40 min') ? 'près de 40 minutes' : '20 à 30 minutes'} vous offrira des vues panoramiques exceptionnelles sur le lagon et les reliefs de l'île.` :
                  activity.sous_categorie === 'Balade à cheval' ?
                    `Votre balade équestre débute par une présentation des chevaux et une initiation adaptée à votre niveau. Les chevaux, parfaitement dressés et habitués aux débutants, vous permettront de découvrir les paysages en toute sécurité. Cette sortie de ${activity.duree} alterne entre instruction et balade, avec des pauses pour admirer les panoramas et prendre des photos.` :
                  activity.sous_categorie === 'Hélicoptère' ?
                    `Votre survol en hélicoptère commence par un accueil à l'aéroport où vous recevrez un briefing sécurité et découvrirez l'appareil. Une fois installé avec votre casque audio, vous décollerez pour un vol commenté de ${activity.duree.includes('45 min') ? '45 minutes' : '55 minutes'}. Le pilote vous fera découvrir les sites les plus spectaculaires de l'île tout en vous donnant des explications sur la géologie et l'histoire de La Réunion.` :
                  activity.sous_categorie === 'Quad / Buggy' ?
                    `Après un accueil chaleureux et la remise de votre équipement de protection, vous découvrirez votre quad et recevrez une formation à la conduite. Les parcours sont adaptés à tous les niveaux, des débutants aux pilotes expérimentés. Cette aventure de ${activity.duree.includes('40 min') ? '40 minutes' : 'plusieurs heures'} vous mènera sur des pistes forestières avec des points de vue exceptionnels.` :
                  activity.sous_categorie === 'VTT' ?
                    `Cette descente en VTT commence par un transport en navette jusqu'au point de départ en altitude. Après vérification du matériel et ajustement des vélos, vous entamerez une descente guidée sur des sentiers adaptés à votre niveau. Les ${activity.duree} d'activité incluent des arrêts photos pour admirer les panoramas sur les cirques et la côte.` :
                  activity.sous_categorie === 'Canyoning' ?
                    `Votre aventure canyoning débute par l'équipement complet : combinaison, casque, baudrier et chaussures spéciales. Après un échauffement et les consignes de sécurité, vous découvrirez les techniques de rappel et de progression en canyon. Cette sortie de ${activity.duree} alterne rappels, sauts (non obligatoires), toboggans naturels et marche en rivière.` :
                  activity.sous_categorie === 'Rafting' ?
                    `Cette descente en rafting commence par un briefing complet sur les techniques de rame et les consignes de sécurité. Équipé de votre gilet de sauvetage, casque et combinaison, vous embarquerez avec votre guide pour ${activity.duree} de navigation sur la rivière. Le parcours alterne passages calmes et rapides ludiques adaptés à tous.` :
                  activity.sous_categorie === 'Kayak de mer' ?
                    `Votre sortie en kayak transparent débute par une initiation aux techniques de pagaie et aux consignes de sécurité. Ces embarcations spéciales vous permettront d'observer les fonds marins tout en naviguant. Cette balade de ${activity.duree} dans le lagon vous fera découvrir la faune et la flore sous-marines avec les explications de votre guide naturaliste.` :
                  activity.sous_categorie === 'U.L.M' ?
                    `Votre vol en ULM commence par une présentation de l'appareil et un briefing sécurité. Une fois installé aux côtés du pilote, vous décollerez pour un vol de ${activity.duree.includes('35') ? '35 à 50 minutes' : activity.duree} selon la formule choisie. Vous pourrez même prendre les commandes sous la supervision de votre instructeur.` :
                  activity.sous_categorie === 'Observation des cétacés' ?
                    `Cette sortie d'observation commence par un embarquement matinal pour maximiser vos chances de rencontres. Votre skipper diplômé vous mènera dans les zones de présence des dauphins et baleines tout en respectant la charte d'approche. Cette excursion de ${activity.duree} inclut des explications sur le comportement des cétacés et leur environnement.` :
                  activity.sous_categorie === 'Spéléologie' ?
                    `Cette exploration des tunnels de lave débute par l'équipement spéléologique complet et un briefing sur les techniques de progression souterraine. Votre guide spécialisé vous mènera dans les galeries formées par l'activité volcanique, vous expliquant la formation géologique unique de ces cavités. Cette aventure de ${activity.duree.includes('1 h') ? '1 à 6 heures' : activity.duree} selon votre choix s'adapte à votre niveau.` :
                    `Cette activité unique débute par un accueil personnalisé et la présentation du déroulement. Votre guide professionnel vous accompagnera tout au long de cette expérience de ${activity.duree} pour vous faire découvrir les merveilles de La Réunion en toute sécurité.`}
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Informations pratiques et budget</h3>
                <p className="mb-4">
                  Le tarif de cette activité est fixé à {activity.prix_des.toLowerCase()} par personne, un prix qui inclut {activity.comprend.toLowerCase()}. 
                  {activity.lieu.includes('Saint-Gilles') || activity.lieu.includes('Saint-Leu') ? 
                    'Pour vous rendre sur place, comptez environ 45 minutes depuis Saint-Denis ou 30 minutes depuis Saint-Pierre. Des parkings gratuits sont disponibles à proximité du point de rendez-vous.' :
                  activity.lieu.includes('Maïdo') ?
                    'L\'accès au Maïdo se fait par une route de montagne sinueuse depuis Saint-Paul. Comptez 45 minutes de trajet et prévoyez des vêtements chauds car la température peut chuter de 10°C par rapport au littoral.' :
                  activity.lieu.includes('Fournaise') ?
                    'Le trajet jusqu\'au Pas de Bellecombe prend environ 1 h 30 depuis Saint-Pierre. La route du volcan traverse des paysages spectaculaires mais peut être fermée en cas d\'éruption ou de mauvaises conditions météo.' :
                  activity.lieu.includes('Cilaos') ?
                    'L\'accès à Cilaos se fait par la route aux 400 virages, un trajet spectaculaire mais exigeant de 45 minutes depuis Saint-Louis. Cette route de montagne nécessite une conduite prudente.' :
                    'L\'accès au point de rendez-vous est généralement bien indiqué depuis les axes principaux de l\'île.'}
                  
                  {activity.ne_comprend_pas.includes('Photos') ? 
                    ' Les photos et vidéos de votre expérience peuvent être proposées en option sur place, généralement entre 15 et 30 € selon le prestataire.' :
                    ' Pensez à apporter votre appareil photo ou smartphone pour immortaliser cette expérience unique.'}
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ce que disent les participants</h3>
                <p className="mb-4">
                  Avec une note moyenne de {activity.note}, cette activité fait partie des expériences les mieux notées de l'île. Les participants apprécient particulièrement {activity.points_forts.toLowerCase()}.
                  {activity.organisateur && activity.organisateur !== 'NA' ?
                    `L'équipe de ${activity.organisateur} est particulièrement appréciée pour son accueil chaleureux et son expertise du terrain réunionnais.` :
                    'Le prestataire proposant cette expérience est reconnu pour son professionnalisme et son respect des normes de sécurité.'}
                  {' '}La réservation s'effectue en toute sécurité via notre plateforme partenaire.

                  La politique d'annulation {activity.politique_annulation.toLowerCase()} vous permet de modifier vos plans si nécessaire.
                  N'hésitez pas à explorer d'autres <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">{internalLink}</a>
                  {' '}pour enrichir votre découverte de l'île intense.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Que faire d'autre dans la région ?</h3>
                <p className="mb-4">
                  {activity.lieu.includes('Saint-Gilles') || activity.lieu.includes('Saint-Leu') ?
                    'La côte ouest bénéficie d\'un climat ensoleillé toute l\'année. Prévoyez une protection solaire renforcée et de l\'eau en quantité suffisante. Les parkings sont généralement disponibles à proximité, mais peuvent être saturés en week-end.' :
                  activity.lieu.includes('Saint-Gilles') ?
                    'Saint-Gilles-les-Bains est le cœur touristique de l\'ouest avec ses plages de sable blanc, son aquarium, ses restaurants créoles et ses nombreuses activités nautiques. Ne manquez pas le marché forain du samedi matin et les couchers de soleil depuis la plage de Boucan Canot.' :
                  activity.lieu.includes('Saint-Leu') ?
                    'Saint-Leu combine parfaitement détente et aventure avec ses spots de surf mondialement reconnus, le centre Kélonia dédié aux tortues marines, et de nombreux sentiers de randonnée dans les hauts. La ville offre aussi d\'excellents restaurants créoles.' :
                  activity.lieu.includes('Maïdo') ?
                    'Le Maïdo est le point de départ de nombreuses randonnées vers Mafate, le cirque sauvage accessible uniquement à pied. Les points de vue au lever du soleil sont inoubliables, et la route forestière offre de belles balades familiales.' :
                  activity.lieu.includes('Fournaise') ?
                    'Le Piton de la Fournaise est l\'un des volcans les plus actifs au monde. La Plaine des Sables offre des paysages lunaires uniques, et le Pas de Bellecombe permet d\'admirer l\'enclos du volcan. Prévoyez des vêtements chauds et de la nourriture.' :
                  activity.lieu.includes('Cilaos') ?
                    'Le cirque de Cilaos est un véritable écrin de nature avec ses sources thermales, ses sentiers de randonnée légendaires vers le Piton des Neiges, et son artisanat local réputé (broderie, lentilles). Goûtez absolument le vin de Cilaos et les spécialités locales.' :
                    'La région regorge d\'activités complémentaires pour enrichir votre découverte de La Réunion : marchés locaux, sites naturels, restaurants créoles et rencontres avec les artisans locaux.'}

                  Profitez de votre présence dans la région pour découvrir la gastronomie locale, rencontrer les artisans et vous imprégner de la culture créole authentique qui fait le charme de La Réunion.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Cette activité est-elle adaptée aux débutants ?
                  </h3>
                  <p className="text-gray-700">
                    {activity.niveau === 'Accessible à tous' ?
                      'Absolument ! Cette activité est spécialement conçue pour accueillir les débutants. Votre guide adaptera le rythme et les explications à votre niveau, et tout l\'équipement nécessaire est fourni.' :
                    activity.niveau === 'Sportif occasionnel' ?
                      'Une condition physique de base est recommandée, mais aucune expérience préalable n\'est nécessaire. L\'encadrement professionnel vous permettra de progresser en toute sécurité.' :
                      'Cette activité s\'adresse à des personnes ayant déjà une bonne condition physique. Une expérience préalable est recommandée pour profiter pleinement de l\'expérience.'}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Que se passe-t-il en cas de mauvais temps ?
                  </h3>
                  <p className="text-gray-700">
                    {activity.sous_categorie.includes('Parapente') || activity.sous_categorie.includes('Hélicoptère') ?
                      'Les vols sont très dépendants des conditions météorologiques. En cas d\'annulation pour raisons de sécurité, vous serez intégralement remboursé ou une nouvelle date vous sera proposée.' :
                    activity.sous_categorie.includes('Plongée') || activity.sous_categorie.includes('Snorkeling') ?
                      'Les sorties en mer peuvent être annulées si les conditions ne permettent pas une pratique en sécurité. Votre prestataire vous proposera un report ou un remboursement complet.' :
                    activity.sous_categorie.includes('Randonnée') ?
                      'Les randonnées peuvent généralement se dérouler par temps couvert, mais seront annulées en cas de risque (orage, cyclone). Des vêtements de pluie peuvent être fournis selon les prestataires.' :
                      'L\'activité peut être maintenue en cas de temps couvert, mais sera annulée si les conditions présentent un risque pour votre sécurité. Une solution de report ou de remboursement vous sera proposée.'}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    L'équipement est-il fourni ?
                  </h3>
                  <p className="text-gray-700">
                    Oui, {activity.comprend.toLowerCase()}. Vous n'avez qu'à prévoir {activity.a_prevoir.toLowerCase()}. 
                    L'équipement est régulièrement contrôlé et répond aux normes de sécurité en vigueur.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    À partir de quel âge peut-on participer ?
                  </h3>
                  <p className="text-gray-700">
                    Cette activité est accessible dès {activity.age_min}. 
                    {parseInt(activity.age_min) < 12 ?
                      'Les enfants doivent être accompagnés d\'un adulte et le guide adaptera l\'activité à leur âge. C\'est une excellente façon de faire découvrir La Réunion en famille !' :
                    parseInt(activity.age_min) >= 12 ?
                      'Les mineurs doivent être accompagnés d\'un adulte ou présenter une autorisation parentale. Cette limite d\'âge est fixée pour des raisons de sécurité et de capacité physique.' :
                      'L\'âge minimum est fixé en fonction des exigences de sécurité de l\'activité.'}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Comment accéder au point de rendez-vous ?
                  </h3>
                  <p className="text-gray-700">
                    Le point de rendez-vous se situe {activity.point_de_rdv.toLowerCase()}. 
                    {activity.lieu.includes('Saint-Gilles') || activity.lieu.includes('Saint-Leu') ?
                      'Facilement accessible en voiture avec des parkings gratuits à proximité. Comptez 45 minutes depuis Saint-Denis ou 30 minutes depuis Saint-Pierre.' :
                    activity.lieu.includes('Maïdo') ?
                      'Accessible par la route forestière depuis Saint-Paul (45 minutes). La route de montagne est sinueuse mais bien entretenue. Parking gratuit sur place.' :
                    activity.lieu.includes('Fournaise') ?
                      'Accessible par la route du volcan depuis Saint-Pierre (1 h 30). Attention, cette route peut être fermée en cas d\'éruption ou de conditions météo défavorables.' :
                      'Des indications précises vous seront communiquées lors de votre réservation. Prévoyez d\'arriver 15 minutes avant l\'heure prévue.'}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Puis-je annuler ma réservation ?
                  </h3>
                  <p className="text-gray-700">
                    Cette activité bénéficie d'une politique d'annulation {activity.politique_annulation.toLowerCase()}. 
                    {activity.politique_annulation === 'Flexible' ?
                      'Vous pouvez généralement annuler jusqu\'à 24 h avant l\'activité pour un remboursement complet. Consultez les conditions exactes lors de votre réservation.' :
                      'Les conditions d\'annulation varient selon le prestataire. Nous vous recommandons de vérifier les modalités précises lors de votre réservation.'}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Les photos sont-elles incluses ?
                  </h3>
                  <p className="text-gray-700">
                    {activity.ne_comprend_pas.includes('Photos') ?
                      'Les photos ne sont pas incluses dans le tarif de base mais peuvent être proposées en option sur place (généralement 15-30 €). Vous pouvez également apporter votre propre appareil photo.' :
                    activity.comprend.includes('GoPro') ?
                      'Une GoPro est mise à disposition pendant l\'activité, vous permettant de repartir avec vos propres images de cette expérience unique.' :
                      'Vous êtes libre d\'apporter votre appareil photo ou smartphone pour immortaliser cette expérience. Votre guide pourra vous aider à prendre de belles photos aux meilleurs spots.'}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Y a-t-il des restrictions médicales ?
                  </h3>
                  <p className="text-gray-700">
                    {activity.pre_requis.includes('femmes enceintes') ?
                      'Cette activité est déconseillée aux femmes enceintes et aux personnes souffrant de problèmes cardiaques, ORL ou pulmonaires. En cas de doute, consultez votre médecin avant la réservation.' :
                    activity.pre_requis.includes('claustrophobe') ?
                      'Cette activité n\'est pas recommandée aux personnes claustrophobes. Une bonne condition physique est également requise.' :
                    activity.sous_categorie.includes('Plongée') ?
                      'Un questionnaire médical vous sera remis avant l\'activité. Certaines conditions médicales peuvent nécessiter un certificat médical. Il est interdit de prendre l\'avion dans les 18-24 h suivant une plongée.' :
                      'Aucune restriction médicale particulière, mais signalez tout problème de santé à votre guide avant le début de l\'activité.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Booking card */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {activity.prix_des}
                  </div>
                  <div className="text-gray-600">par personne</div>
                </div>

                <button
                  onClick={handleBooking}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl mb-3"
                  rel="nofollow"
                >
                  Réserver cette activité
                  <ExternalLink className="w-4 h-4 ml-2 inline" />
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  Réservation sécurisée via notre partenaire de réservation
                </p>

                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Durée</span>
                    <span className="font-medium">{activity.duree}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Âge minimum</span>
                    <span className="font-medium">{activity.age_min}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Niveau</span>
                    <span className="font-medium">{activity.niveau}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Langues</span>
                    <span className="font-medium">{activity.langues}</span>
                  </div>
                </div>
              </div>

              {/* Quick info */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Bon à savoir</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Annulation {activity.politique_annulation.toLowerCase()}
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Équipement fourni
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Encadrement professionnel
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Réservation sécurisée
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Activities Section */}
        {similarActivities.length > 0 && (
          <section className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Activités similaires
              </h2>
              <p className="text-gray-600 text-lg">
                Découvrez d'autres expériences qui pourraient vous intéresser
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarActivities.map((similarActivity, index) => (
                <ActivityCard
                  key={index}
                  activity={similarActivity}
                  onBook={handleSimilarActivityBook}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Bouton réserver sticky mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-40 md:hidden">
        <button
          onClick={handleBooking}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 shadow-lg"
          rel="nofollow"
        >
          Réserver - {activity.prix_des}
          <ExternalLink className="w-4 h-4 ml-2 inline" />
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default ActivityPage;