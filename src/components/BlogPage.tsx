import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { getPublishedPosts, blogCategories } from '../data/blogPosts';

// Fonction pour forcer le scroll en haut au clic sur un lien
const handleLinkClick = () => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  // Récupérer uniquement les articles publiés (publishAt <= aujourd'hui)
  const blogPosts = getPublishedPosts();

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
          <meta property="og:title" content="Blog Dineo | Guides et conseils activités La Réunion" />
          <meta property="og:description" content="Découvrez nos guides, conseils et bons plans pour profiter au maximum de vos activités à La Réunion : randonnées, canyoning, plongée et plus encore." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dineo.re/blog" />
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
            {blogCategories.map((category) => (
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
                <Link to={`/blog/${post.slug}`} onClick={handleLinkClick}>
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
