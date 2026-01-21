import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, Clock, Wine, Map, Factory, Award, History, Compass, Camera, Heart, TrendingUp, MapPin, Users } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const BlogPostRhumReunion: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>L'histoire du rhum de La Réunion : distilleries et saveurs créoles</title>
        <meta name="description" content="Découvrez l'histoire fascinante du rhum réunionnais depuis 1704 : des premières distilleries aux rhums arrangés créoles. Saveurs, secrets de fabrication et meilleures adresses." />
        <meta name="keywords" content="rhum réunion, histoire rhum réunion, rhum arrangé réunion, distillerie réunion, rhum charrette, savanna, isautier" />
        <link rel="canonical" href="https://dineo.re/blog/histoire-rhum-la-reunion" />

        {/* Open Graph */}
        <meta property="og:title" content="L'histoire du rhum de La Réunion : distilleries et saveurs créoles" />
        <meta property="og:description" content="Histoire fascinante du rhum réunionnais depuis 1704 : distilleries, rhums arrangés, secrets de fabrication." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://dineo.re/blog/histoire-rhum-la-reunion" />
        <meta property="og:image" content="https://www.blog.dineo.re/wp-content/uploads/2023/03/rhum-de-lile-de-la-reunion-1170x630.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="L'histoire du rhum de La Réunion : distilleries et saveurs créoles" />
        <meta name="twitter:description" content="Histoire du rhum réunionnais depuis 1704 : distilleries, rhums arrangés, secrets de fabrication." />
        <meta name="twitter:image" content="https://www.blog.dineo.re/wp-content/uploads/2023/03/rhum-de-lile-de-la-reunion-1170x630.jpg" />

        {/* Article structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "L'histoire du rhum de La Réunion : distilleries et saveurs créoles",
            "image": "https://www.blog.dineo.re/wp-content/uploads/2023/03/rhum-de-lile-de-la-reunion-1170x630.jpg",
            "author": {
              "@type": "Organization",
              "name": "Équipe Dineo"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Dineo",
              "logo": {
                "@type": "ImageObject",
                "url": "https://dineo.re/logo.png"
              }
            },
            "datePublished": "2025-01-21",
            "description": "Découvrez l'histoire fascinante du rhum réunionnais depuis 1704 : des premières distilleries aux rhums arrangés créoles."
          })}
        </script>
      </Helmet>

      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour au blog
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-96">
            <img
              src="https://www.blog.dineo.re/wp-content/uploads/2023/03/rhum-de-lile-de-la-reunion-1170x630.jpg"
              alt="Rhum de La Réunion et canne à sucre"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">Culture & Gastronomie</span>
                <span className="flex items-center text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  10 Octobre 2025
                </span>
                <span className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  16 min
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                L'histoire du rhum de La Réunion
              </h1>
              <p className="text-xl text-gray-200">
                Trois siècles de tradition : saveurs, secrets de fabrication et héritage créole
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8 md:p-12 prose prose-lg max-w-none">

            {/* Introduction */}
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8 rounded-r-lg">
              <p className="text-lg text-gray-800 mb-0">
                <strong>Le saviez-vous ?</strong> Le rhum réunionnais existe depuis <strong>1704</strong> et l'île possède aujourd'hui 3 distilleries historiques produisant des rhums agricoles et traditionnels reconnus mondialement. La tradition du <strong>rhum arrangé</strong> est née ici, au cœur de l'océan Indien.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-gray-700">
              Le rhum fait partie intégrante de l'identité réunionnaise. Plus qu'une simple boisson, c'est un véritable patrimoine culturel qui raconte trois siècles d'histoire, de la culture de la canne à sucre aux secrets de fabrication transmis de génération en génération.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Découvrez dans cet article l'histoire fascinante du rhum de La Réunion, ses distilleries emblématiques, les secrets de sa fabrication et bien sûr, la tradition des rhums arrangés qui fait la renommée de l'île.
            </p>

            {/* Histoire */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <History className="w-8 h-8 mr-3 text-blue-600" />
                L'histoire du rhum réunionnais : de 1704 à aujourd'hui
              </h2>

              <div className="space-y-8">
                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">📜 1704 : Les débuts de la canne à sucre</h3>
                  <p className="text-gray-700 mb-3">
                    La culture de la canne à sucre arrive à La Réunion (alors île Bourbon) au début du XVIIIe siècle. Les premières distilleries artisanales voient le jour pour transformer la mélasse, sous-produit du sucre, en "guildive" - l'ancêtre du rhum réunionnais.
                  </p>
                  <p className="text-gray-700">
                    À cette époque, le rhum est considéré comme une boisson populaire, consommée par les esclaves et les travailleurs des champs de canne. La qualité n'est pas encore au rendez-vous, mais les bases de la tradition rhumière sont posées.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🏭 XIXe siècle : L'essor des distilleries</h3>
                  <p className="text-gray-700 mb-3">
                    Le XIXe siècle marque l'âge d'or du rhum réunionnais. Des dizaines de distilleries fleurissent dans toute l'île. On compte jusqu'à <strong>200 distilleries</strong> en activité simultanément ! Chaque région développe ses propres techniques et saveurs.
                  </p>
                  <p className="text-gray-700">
                    C'est à cette période que naissent les grandes maisons historiques : <strong>Isautier</strong> (1845), <strong>Rivière du Mât</strong> (1886), et <strong>Savanna</strong> (1948, mais héritière de distilleries plus anciennes).
                  </p>
                </div>

                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🌟 XXe siècle : La consécration</h3>
                  <p className="text-gray-700 mb-3">
                    Le rhum réunionnais gagne ses lettres de noblesse. Les distilleries modernisent leurs équipements tout en préservant les méthodes traditionnelles. Le <strong>rhum agricole</strong> (distillé directement à partir du jus de canne) se développe aux côtés du rhum traditionnel (à base de mélasse).
                  </p>
                  <p className="text-gray-700">
                    La tradition du <strong>rhum arrangé</strong> se structure : vanille Bourbon, fruits tropicaux, épices... Les recettes familiales transmises oralement deviennent des produits phares recherchés dans le monde entier.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🏆 Aujourd'hui : Reconnaissance mondiale</h3>
                  <p className="text-gray-700">
                    Aujourd'hui, les 3 distilleries réunionnaises encore en activité produisent des rhums primés dans les concours internationaux. Le rhum réunionnais est reconnu pour sa qualité exceptionnelle, notamment grâce au terroir volcanique unique de l'île et au savoir-faire ancestral des maîtres de chai.
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <img
              src="https://www.blog.dineo.re/wp-content/uploads/2023/03/rhum-974.jpg"
              alt="Plantation de canne à sucre à La Réunion"
              className="w-full h-96 object-cover rounded-xl shadow-lg my-12"
            />

            {/* Les 3 distilleries */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Factory className="w-8 h-8 mr-3 text-blue-600" />
                Les 3 distilleries historiques de La Réunion
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 shadow-md">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">🥃 Distillerie Isautier (1845)</h3>
                      <p className="text-sm text-gray-600 mb-4">📍 Saint-Pierre • La plus ancienne distillerie de l'île</p>
                      <p className="text-gray-700 mb-4">
                        Fondée par Charles Isautier, c'est la <strong>doyenne des distilleries réunionnaises</strong> encore en activité. La famille Isautier perpétue un savoir-faire vieux de 180 ans.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <Award className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Spécialités :</strong> Rhum Barrik (vieilli en fût), rhums arrangés traditionnels</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Signature :</strong> Recettes familiales jalousement gardées, notamment leur rhum arrangé vanille</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Visite :</strong> Musée et boutique à Saint-Pierre</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 shadow-md">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">🌿 Distillerie Rivière du Mât / Savanna (1886)</h3>
                      <p className="text-sm text-gray-600 mb-4">📍 Saint-André • Production de rhum agricole et traditionnel</p>
                      <p className="text-gray-700 mb-4">
                        Ces deux marques appartiennent au même groupe et représentent l'excellence du rhum réunionnais. <strong>Savanna</strong> est particulièrement réputée pour ses rhums vieillis primés mondialement.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <Award className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Spécialités :</strong> Rhums vieillis haut de gamme, rhum agricole blanc</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Signature :</strong> Vieillissements longs (jusqu'à 15 ans) sous climat tropical</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Distinction :</strong> Médailles d'or aux concours internationaux</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-8 shadow-md">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">🛒 Distillerie Charrette</h3>
                      <p className="text-sm text-gray-600 mb-4">📍 Saint-Leu • Le rhum du quotidien des Réunionnais</p>
                      <p className="text-gray-700 mb-4">
                        Charrette est <strong>le rhum populaire</strong> par excellence à La Réunion. Présent dans tous les foyers, c'est la base incontournable pour préparer les rhums arrangés maison et le ti-punch réunionnais.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <Award className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Spécialités :</strong> Rhum blanc traditionnel 49°, rhum ambré</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Signature :</strong> Rapport qualité-prix imbattable, goût franc et authentique</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Culture :</strong> Base de tous les rhums arrangés familiaux</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fabrication */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Compass className="w-8 h-8 mr-3 text-blue-600" />
                Secrets de fabrication : comment est fait le rhum réunionnais ?
              </h2>

              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-md mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🌱 Étape 1 : La canne à sucre</h3>
                <p className="text-gray-700 mb-3">
                  Tout commence dans les champs de canne à sucre qui couvrent environ <strong>24 000 hectares</strong> de l'île. La canne réunionnaise bénéficie d'un terroir volcanique exceptionnel et d'un climat tropical idéal.
                </p>
                <p className="text-gray-700">
                  <strong>Particularité locale :</strong> La canne est récoltée à maturité optimale (12 à 18 mois) pour concentrer les sucres. Les variétés cultivées sont sélectionnées pour leur richesse aromatique.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-md mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🏭 Étape 2 : Deux méthodes de production</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Rhum Traditionnel</h4>
                    <p className="text-sm text-gray-700 mb-2">Production à partir de <strong>mélasse</strong> (résidu de la fabrication du sucre)</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Fermentation de la mélasse diluée</li>
                      <li>• Distillation en colonne continue</li>
                      <li>• Rendement élevé, coût maîtrisé</li>
                      <li>• Rhums : Charrette, Isautier traditionnel</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Rhum Agricole</h4>
                    <p className="text-sm text-gray-700 mb-2">Production à partir du <strong>jus de canne frais</strong> (vesou)</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Broyage et pressage de la canne</li>
                      <li>• Fermentation du pur jus</li>
                      <li>• Distillation dans les 24h</li>
                      <li>• Rhums : Savanna, certains Isautier</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-md mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">⚗️ Étape 3 : Fermentation et distillation</h3>
                <p className="text-gray-700 mb-3">
                  La fermentation dure de <strong>24 à 72 heures</strong> selon le type de rhum. Les levures transforment les sucres en alcool, créant un "vin de canne" titrant 5 à 8°.
                </p>
                <p className="text-gray-700">
                  La distillation s'effectue ensuite en alambic traditionnel ou colonne créole. Le distillat sort entre 65° et 75° d'alcool. C'est le "cœur de chauffe" qui sera conservé, les têtes et les queues étant écartées.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🛢️ Étape 4 : Vieillissement (optionnel)</h3>
                <p className="text-gray-700 mb-3">
                  Les rhums blancs sont embouteillés après réduction (ajout d'eau pour atteindre le degré souhaité : 40°, 49°...).
                </p>
                <p className="text-gray-700">
                  Les rhums vieillis passent de <strong>3 à 15 ans en fûts</strong> (ex-bourbon, cognac, porto...). Sous le climat tropical réunionnais, le vieillissement est 3 fois plus rapide qu'en métropole ! C'est ce qui donne ces rhums ambrés, épicés et complexes.
                </p>
              </div>
            </div>

            {/* Image */}
            <img
              src="https://www.blog.dineo.re/wp-content/uploads/2023/03/meilleur-rhum-reunion.jpg"
              alt="Fûts de rhum vieilli"
              className="w-full h-96 object-cover rounded-xl shadow-lg my-12"
            />

            {/* Rhums arrangés */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Wine className="w-8 h-8 mr-3 text-blue-600" />
                Le rhum arrangé : la signature réunionnaise
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Si La Réunion est connue mondialement pour quelque chose en matière de rhum, c'est bien pour ses <strong>rhums arrangés</strong>. Cette tradition créole consiste à faire macérer fruits, épices et plantes dans du rhum blanc pour créer des boissons aux saveurs uniques.
              </p>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🍹 Les grands classiques réunionnais</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-1">Vanille Bourbon</h4>
                      <p className="text-sm text-gray-700">La star absolue ! Gousses de vanille + sucre de canne. Minimum 6 mois de macération.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-1">Letchi (Litchi)</h4>
                      <p className="text-sm text-gray-700">Fruits frais de décembre à février. Douceur sucrée et parfumée, macération 3-4 mois.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-1">Ananas Victoria</h4>
                      <p className="text-sm text-gray-700">Petit ananas sucré endémique. Fruité intense, prêt en 2-3 mois.</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-1">Combava (Combawa)</h4>
                      <p className="text-sm text-gray-700">Agrume citronné typique. Zestes + feuilles, notes fraîches et acidulées.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-1">Fruits de la passion</h4>
                      <p className="text-sm text-gray-700">Maracudja locale. Acidité tropicale, macération rapide (1-2 mois).</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-1">Faham</h4>
                      <p className="text-sm text-gray-700">Orchidée endémique au parfum de foin coupé. Très rare et recherché.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-red-600" />
                  Le secret d'un bon rhum arrangé réunionnais
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Base : rhum blanc traditionnel 49° (type Charrette)</li>
                  <li>✓ Fruits et épices de qualité, si possible locaux</li>
                  <li>✓ Patience : minimum 3 mois, idéalement 6 mois à 1 an</li>
                  <li>✓ À l'abri de la lumière, à température ambiante</li>
                  <li>✓ Secouer régulièrement pendant la macération</li>
                  <li>✓ Goûter régulièrement pour ajuster le sucre</li>
                </ul>
              </div>
            </div>

            {/* Où acheter et déguster */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-8 h-8 mr-3 text-blue-600" />
                Où déguster et acheter du rhum réunionnais ?
              </h2>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🏛️ Visites de distilleries</h3>
                  <p className="text-gray-700 mb-3">
                    Les trois distilleries proposent des <strong>visites guidées</strong> avec dégustation. Vous découvrirez le processus de fabrication et pourrez acheter directement à la propriété.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Saga du Rhum (Isautier)</strong> - Saint-Pierre : musée complet, visite interactive</li>
                    <li>• <strong>Distillerie Savanna</strong> - Saint-André : visite des chais et dégustation</li>
                    <li>• <strong>Boutiques Charrette</strong> - plusieurs points de vente dans l'île</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🛍️ Boutiques et cavistes</h3>
                  <p className="text-gray-700">
                    Les marchés forains (Saint-Paul, Saint-Pierre) proposent des rhums arrangés artisanaux. Les grandes surfaces vendent les marques principales. Pour des rhums haut de gamme, rendez-vous dans les <strong>cavistes spécialisés</strong> de Saint-Denis et Saint-Gilles.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🍽️ Restaurants et bars</h3>
                  <p className="text-gray-700">
                    De nombreux restaurants créoles proposent des <strong>ti-punch</strong> et rhums arrangés maison en digestif. Les bars de Saint-Gilles et de l'Ermitage offrent de belles cartes de rhums vieillis.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Activités */}
            <div className="my-12">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white text-center">
                <Compass className="w-16 h-16 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">
                  Découvrez La Réunion autrement
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Après avoir exploré l'univers du rhum réunionnais, partez à la découverte des paysages époustouflants de l'île intense avec nos activités outdoor.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/"
                    className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                  >
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Voir toutes les activités
                  </Link>
                  <Link
                    to="/blog"
                    className="inline-flex items-center bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-lg border-2 border-white"
                  >
                    Plus d'articles culture
                  </Link>
                </div>
              </div>
            </div>

            {/* Activités complémentaires */}
            <div className="my-12 bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Complétez votre découverte de La Réunion</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/canyoning-reunion" className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all group">
                  <div className="text-4xl mb-3">🌊</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">Canyoning</h3>
                  <p className="text-gray-600 text-sm">Descente de cascades et exploration des rivières cachées</p>
                  <p className="text-blue-600 font-semibold mt-2">À partir de 55€</p>
                </Link>

                <Link to="/randonnees-reunion" className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all group">
                  <div className="text-4xl mb-3">🥾</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">Randonnées guidées</h3>
                  <p className="text-gray-600 text-sm">Explorez les cirques et le volcan avec un guide expert</p>
                  <p className="text-blue-600 font-semibold mt-2">À partir de 45€</p>
                </Link>

                <Link to="/?search=parapente" className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all group">
                  <div className="text-4xl mb-3">🪂</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">Parapente</h3>
                  <p className="text-gray-600 text-sm">Vol en tandem au-dessus des plus beaux paysages</p>
                  <p className="text-blue-600 font-semibold mt-2">À partir de 90€</p>
                </Link>
              </div>
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostRhumReunion;
