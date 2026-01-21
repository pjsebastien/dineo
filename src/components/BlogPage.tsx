import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface BlogPost {
  id: string;
  titre: string;
  slug: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  // Liste des articles de blog - triés du plus récent au plus ancien
  const blogPosts: BlogPost[] = [
    {
      id: '10',
      titre: 'Tarif vol en hélicoptère à La Réunion : prix et réservation',
      slug: 'tarif-vol-helicoptere-la-reunion',
      excerpt: 'Découvrez les tarifs des vols en hélicoptère à La Réunion : de 110€ à 390€. Survol du volcan, cirques, cascades. Réservation en ligne et conseils.',
      image: 'https://www.blog.dineo.re/wp-content/uploads/2023/03/helicoptere-reunion-tarifs-et-avis-1170x630.jpg',
      date: '21 Janvier 2026',
      readTime: '14 min',
      category: 'Activités aériennes',
      author: 'Équipe Dineo'
    },
    {
      id: '1',
      titre: 'Où dormir en van à La Réunion ? Top 10 des meilleurs spots',
      slug: 'ou-dormir-en-van-reunion',
      excerpt: 'Cap Homard, Maïdo, volcan, forêt de Bélouve... Découvrez les spots testés pour votre road trip en van aménagé à La Réunion.',
      image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80',
      date: '18 Janvier 2026',
      readTime: '15 min',
      category: 'Van & Road Trip',
      author: 'Équipe Dineo'
    },
    {
      id: '2',
      titre: 'Road trip en van à La Réunion : itinéraire de 10 jours',
      slug: 'road-trip-van-reunion-10-jours',
      excerpt: 'L\'itinéraire parfait pour découvrir La Réunion en van aménagé : spots de camping, activités, conseils pratiques.',
      image: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&q=80',
      date: '12 Janvier 2026',
      readTime: '20 min',
      category: 'Van & Road Trip',
      author: 'Équipe Dineo'
    },
    {
      id: '3',
      titre: 'Cascade Niagara à La Réunion : accès, randonnée et baignade',
      slug: 'cascade-niagara-la-reunion',
      excerpt: 'Accès facile, randonnée courte 30 min et baignade rafraîchissante. Découvrez la Cascade Niagara à Sainte-Suzanne avec notre itinéraire détaillé.',
      image: 'https://www.blog.dineo.re/wp-content/uploads/2023/03/cascade-niagara-la-reunion-1170x630.jpg',
      date: '5 Janvier 2026',
      readTime: '12 min',
      category: 'Randonnée',
      author: 'Équipe Dineo'
    },
    {
      id: '4',
      titre: 'Voyager à La Réunion en janvier : météo, avis et activités',
      slug: 'voyage-reunion-janvier',
      excerpt: 'Saison chaude et humide, nature luxuriante, cascades spectaculaires : découvrez si janvier est une bonne période pour visiter La Réunion.',
      image: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&q=80',
      date: '28 Décembre 2025',
      readTime: '14 min',
      category: 'Voyage & Conseils',
      author: 'Équipe Dineo'
    },
    {
      id: '5',
      titre: 'Voyager à La Réunion en mai : météo, conseils et activités',
      slug: 'voyage-reunion-mai',
      excerpt: 'Mai à La Réunion : l\'une des meilleures périodes de l\'année. Météo idéale, saison sèche, conditions parfaites pour la randonnée.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      date: '15 Décembre 2025',
      readTime: '13 min',
      category: 'Voyage & Conseils',
      author: 'Équipe Dineo'
    },
    {
      id: '6',
      titre: 'Quelle heure est-il à La Réunion ?',
      slug: 'quelle-heure-est-il-a-la-reunion',
      excerpt: 'Fuseau horaire UTC+4, décalage avec la France (+2h ou +3h selon la saison). Tout savoir sur l\'heure locale réunionnaise.',
      image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&q=80',
      date: '3 Décembre 2025',
      readTime: '6 min',
      category: 'Pratique',
      author: 'Équipe Dineo'
    },
    {
      id: '7',
      titre: 'La Réunion est-elle un DOM ou un TOM ?',
      slug: 'la-reunion-dom-ou-tom',
      excerpt: 'La Réunion est un DOM (département français depuis 1946), pas un TOM. Découvrez son statut juridique et ce que cela implique pour votre voyage.',
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80',
      date: '20 Novembre 2025',
      readTime: '8 min',
      category: 'Pratique',
      author: 'Équipe Dineo'
    },
    {
      id: '8',
      titre: 'Cascade Jacqueline à Langevin : randonnée et baignade',
      slug: 'cascade-jacqueline-langevin',
      excerpt: 'Magnifique cascade du sud sauvage accessible par une randonnée facile 1h A/R avec un superbe bassin pour la baignade.',
      image: 'https://www.blog.dineo.re/wp-content/uploads/2023/03/cascade-jacqueline-langevin-1170x630.jpg',
      date: '8 Novembre 2025',
      readTime: '10 min',
      category: 'Randonnée',
      author: 'Équipe Dineo'
    },
    {
      id: '9',
      titre: 'La Réunion ou Île Maurice : que choisir ?',
      slug: 'la-reunion-ou-ile-maurice',
      excerpt: 'Comparatif complet pour choisir entre La Réunion et Maurice selon vos envies : paysages, activités, budget, culture. Nos conseils pour faire le bon choix.',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      date: '25 Octobre 2025',
      readTime: '15 min',
      category: 'Voyage & Conseils',
      author: 'Équipe Dineo'
    },
    {
      id: '11',
      titre: 'L\'histoire du rhum de La Réunion : distilleries et saveurs créoles',
      slug: 'histoire-rhum-la-reunion',
      excerpt: 'Trois siècles de tradition rhumière : découvrez l\'histoire fascinante du rhum réunionnais, ses distilleries emblématiques et les secrets du rhum arrangé.',
      image: 'https://www.blog.dineo.re/wp-content/uploads/2023/03/rhum-de-lile-de-la-reunion-1170x630.jpg',
      date: '10 Octobre 2025',
      readTime: '16 min',
      category: 'Culture & Gastronomie',
      author: 'Équipe Dineo'
    }
  ];

  const categories = ['Tous', 'Van & Road Trip', 'Randonnée', 'Voyage & Conseils', 'Pratique', 'Activités aériennes', 'Culture & Gastronomie'];

  // Filtrer les articles selon la catégorie sélectionnée
  const filteredPosts = selectedCategory === 'Tous'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Blog Dineo | Guides et conseils activités La Réunion</title>
        <meta name="description" content="Découvrez nos guides, conseils et bons plans pour profiter au maximum de vos activités à La Réunion : randonnées, canyoning, plongée et plus encore." />
        <meta name="keywords" content="blog réunion, guide activités réunion, conseils randonnée, blog voyage réunion" />
        <link rel="canonical" href="https://dineo.re/blog" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span>/</span>
          <span className="text-gray-900">Blog</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl text-white p-8 md:p-12 mb-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blog Dineo
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Guides, conseils et bons plans pour vos activités à La Réunion
            </p>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Catégories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.titre}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.titre}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Par {post.author}</span>
                      <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                        Lire l'article
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <div className="max-w-md mx-auto">
              <Tag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aucun article pour le moment
              </h3>
              <p className="text-gray-600 mb-6">
                Nous travaillons sur de nouveaux contenus pour vous aider à profiter au maximum de vos activités à La Réunion.
              </p>
              <Link
                to="/"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Découvrir les activités
              </Link>
            </div>
          </div>
        )}

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Restez informé
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Recevez nos derniers articles, guides et bons plans directement dans votre boîte mail
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
