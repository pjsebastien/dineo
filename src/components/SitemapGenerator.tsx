import React from 'react';
import { Download, FileText, Globe } from 'lucide-react';
import { generateSitemap, downloadSitemap } from '../utils/sitemap';
import { activities } from '../data/activities';

const SitemapGenerator: React.FC = () => {
  const [sitemapContent, setSitemapContent] = React.useState<string>('');
  const [showPreview, setShowPreview] = React.useState(false);

  const handleGenerateSitemap = () => {
    const content = generateSitemap();
    setSitemapContent(content);
    setShowPreview(true);
  };

  const totalUrls = activities.length + 11; // 11 pages statiques + toutes les activités

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <Globe className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Générateur de Sitemap
        </h2>
        <p className="text-gray-600 text-lg">
          Générez automatiquement le sitemap de votre site avec toutes les pages et activités
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-6 bg-blue-50 rounded-lg">
          <FileText className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">{totalUrls}</div>
          <div className="text-sm text-gray-600">URLs totales</div>
        </div>
        
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <Globe className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">11</div>
          <div className="text-sm text-gray-600">Pages statiques</div>
        </div>
        
        <div className="text-center p-6 bg-purple-50 rounded-lg">
          <FileText className="w-8 h-8 text-purple-600 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">{activities.length}</div>
          <div className="text-sm text-gray-600">Pages d'activités</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <button
          onClick={handleGenerateSitemap}
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          <FileText className="w-5 h-5 mr-2" />
          Générer le Sitemap
        </button>
        
        <button
          onClick={downloadSitemap}
          className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          <Download className="w-5 h-5 mr-2" />
          Télécharger sitemap.xml
        </button>
      </div>

      {showPreview && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Aperçu du Sitemap généré
          </h3>
          <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">
              {sitemapContent}
            </pre>
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Instructions d'installation :</h4>
            <ol className="text-sm text-blue-800 space-y-1">
              <li>1. Téléchargez le fichier sitemap.xml</li>
              <li>2. Placez-le à la racine de votre site (même niveau que index.html)</li>
              <li>3. Soumettez l'URL https://dineo.re/sitemap.xml à Google Search Console</li>
              <li>4. Régénérez le sitemap à chaque ajout de nouvelle page/activité</li>
            </ol>
          </div>
        </div>
      )}

      <div className="mt-8 p-6 bg-yellow-50 rounded-lg">
        <h4 className="font-semibold text-yellow-900 mb-3">🚀 Sitemap automatique</h4>
        <p className="text-yellow-800 text-sm mb-3">
          Ce sitemap se met à jour automatiquement avec :
        </p>
        <ul className="text-yellow-800 text-sm space-y-1">
          <li>• Toutes les nouvelles activités ajoutées dans le fichier activities.ts</li>
          <li>• Toutes les pages thématiques et destinations</li>
          <li>• Les bonnes priorités SEO et fréquences de mise à jour</li>
          <li>• La date de dernière modification automatique</li>
        </ul>
      </div>
    </div>
  );
};

export default SitemapGenerator;