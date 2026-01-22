import { activities } from '../data/activities';
import { getPublishedPosts } from '../data/blogPosts';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

export const generateSitemap = (): string => {
  const baseUrl = 'https://dineo.re';
  const currentDate = new Date().toISOString().split('T')[0];

  // Récupérer les articles publiés dynamiquement
  const publishedPosts = getPublishedPosts();

  const urls: SitemapUrl[] = [
    // Page d'accueil
    {
      loc: baseUrl,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '1.0'
    },

    // Pages thématiques
    {
      loc: `${baseUrl}/activites-famille-reunion`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      loc: `${baseUrl}/activites-couple-reunion`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      loc: `${baseUrl}/activites-insolites-reunion`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      loc: `${baseUrl}/activites-pas-cheres-reunion`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      loc: `${baseUrl}/activites-a-offrir-reunion`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },

    // Pages destinations
    {
      loc: `${baseUrl}/que-faire-saint-pierre-reunion`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7'
    },
    {
      loc: `${baseUrl}/que-faire-saint-leu-reunion`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7'
    },
    {
      loc: `${baseUrl}/que-faire-cilaos-reunion`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7'
    },
    {
      loc: `${baseUrl}/que-faire-piton-fournaise-reunion`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7'
    },
    {
      loc: `${baseUrl}/que-faire-saint-benoit-reunion`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7'
    },
    {
      loc: `${baseUrl}/que-faire-maido-reunion`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7'
    },
    {
      loc: `${baseUrl}/que-faire-saint-joseph-langevin-reunion`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7'
    },
    {
      loc: `${baseUrl}/que-faire-cirque-salazie-reunion`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7'
    },
    {
      loc: `${baseUrl}/que-faire-saint-gilles-les-bains-reunion`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7'
    },
    {
      loc: `${baseUrl}/que-faire-la-saline-les-bains-reunion`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7'
    },
    {
      loc: `${baseUrl}/que-faire-plaine-palmistes-belouve-reunion`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7'
    },
    {
      loc: `${baseUrl}/que-faire-sainte-suzanne-reunion`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7'
    },

    // Page blog
    {
      loc: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },

    // Pages thématiques supplémentaires
    {
      loc: `${baseUrl}/balades-cheval-reunion`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7'
    },
    {
      loc: `${baseUrl}/canyoning-reunion`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7'
    },
    {
      loc: `${baseUrl}/location-van-reunion`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7'
    },
    {
      loc: `${baseUrl}/randonnees-reunion`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7'
    },
    {
      loc: `${baseUrl}/a-propos`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.5'
    },

    // Pages légales
    {
      loc: `${baseUrl}/mentions-legales`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.3'
    },
    {
      loc: `${baseUrl}/politique-confidentialite`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.3'
    },
    {
      loc: `${baseUrl}/cgu`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.3'
    }
  ];

  // Ajouter les articles de blog publiés dynamiquement
  publishedPosts.forEach(post => {
    urls.push({
      loc: `${baseUrl}/blog/${post.slug}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7'
    });
  });

  // Ajouter toutes les pages d'activités dynamiquement
  activities.forEach(activity => {
    urls.push({
      loc: `${baseUrl}/activite/${activity.slug}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.6'
    });
  });

  // Générer le XML du sitemap
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xmlContent;
};

export const downloadSitemap = () => {
  const sitemapContent = generateSitemap();
  const blob = new Blob([sitemapContent], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'sitemap.xml';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
};