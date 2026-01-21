import fs from 'fs';

const baseUrl = 'https://dineo.re';
const currentDate = new Date().toISOString().split('T')[0];

// Import activities from data file
const activitiesModule = await import('./src/data/activities.ts');
const activities = activitiesModule.activities;

const urls = [
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
    loc: `${baseUrl}/que-faire-salazie-reunion`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.7'
  },
  {
    loc: `${baseUrl}/que-faire-saint-gilles-reunion`,
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
    loc: `${baseUrl}/que-faire-plaine-palmistes-reunion`,
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

  // Articles de blog
  {
    loc: `${baseUrl}/blog`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    loc: `${baseUrl}/blog/meilleurs-spots-van-amenage-reunion`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    loc: `${baseUrl}/blog/road-trip-10-jours-reunion`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    loc: `${baseUrl}/blog/cascade-niagara-reunion`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    loc: `${baseUrl}/blog/partir-janvier-reunion`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    loc: `${baseUrl}/blog/partir-mai-reunion`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    loc: `${baseUrl}/blog/heure-reunion`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    loc: `${baseUrl}/blog/reunion-dom-tom`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    loc: `${baseUrl}/blog/cascade-jacqueline-reunion`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    loc: `${baseUrl}/blog/reunion-ou-maurice`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    loc: `${baseUrl}/blog/prix-helicoptere-reunion`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    loc: `${baseUrl}/blog/rhum-reunion`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.7'
  },

  // Pages thématiques supplémentaires
  {
    loc: `${baseUrl}/balades-a-cheval`,
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

// Écrire le fichier
fs.writeFileSync('./public/sitemap.xml', xmlContent, 'utf-8');
console.log(`Sitemap généré avec succès! (${urls.length} URLs)`);
