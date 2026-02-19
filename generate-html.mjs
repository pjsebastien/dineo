import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mock l'environnement DOM pour React Router et React Helmet AVANT d'importer le module SSR
const mockElement = {
  setAttribute: () => {},
  getAttribute: () => null,
  removeAttribute: () => {},
  appendChild: () => {},
  removeChild: () => {},
  insertBefore: () => {},
  querySelectorAll: () => [],
  querySelector: () => null,
  textContent: '',
  innerHTML: '',
  children: [],
  parentNode: null,
  style: {},
};

const mockDocument = {
  createElement: () => mockElement,
  createElementNS: () => mockElement,
  createTextNode: () => mockElement,
  getElementsByTagName: () => [mockElement],
  getElementById: () => mockElement,
  head: { ...mockElement, children: [] },
  body: { ...mockElement, children: [] },
  querySelector: () => mockElement,
  querySelectorAll: () => [],
  addEventListener: () => {},
  removeEventListener: () => {},
  createEvent: () => ({}),
  defaultView: null,
};

global.document = mockDocument;

const mockHistory = {
  pushState: () => {},
  replaceState: () => {},
  go: () => {},
  back: () => {},
  forward: () => {},
  length: 1,
  state: null,
  scrollRestoration: 'auto',
};

const mockLocation = {
  href: 'http://localhost:3000/',
  origin: 'http://localhost:3000',
  protocol: 'http:',
  host: 'localhost:3000',
  hostname: 'localhost',
  port: '3000',
  pathname: '/',
  search: '',
  hash: '',
  assign: () => {},
  reload: () => {},
  replace: () => {},
};

const mockWindow = {
  location: mockLocation,
  history: mockHistory,
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => true,
  navigator: { userAgent: 'SSR' },
  document: mockDocument,
  localStorage: {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
  },
  sessionStorage: {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
  },
  scrollTo: () => {},
  scroll: () => {},
  requestAnimationFrame: (cb) => setTimeout(cb, 16),
  cancelAnimationFrame: (id) => clearTimeout(id),
  matchMedia: () => ({
    matches: false,
    media: '',
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
  }),
  getComputedStyle: () => ({}),
  innerWidth: 1024,
  innerHeight: 768,
  outerWidth: 1024,
  outerHeight: 768,
  pageXOffset: 0,
  pageYOffset: 0,
  screen: {
    width: 1024,
    height: 768,
  },
};

global.window = mockWindow;
global.Window = function() { return mockWindow; };
global.location = mockLocation;
global.history = mockHistory;

// Lire les activités pour générer les routes dynamiques
const activitiesPath = path.resolve(__dirname, 'src/data/activities.ts');
const activitiesContent = fs.readFileSync(activitiesPath, 'utf-8');
const slugMatches = [...activitiesContent.matchAll(/slug:\s*[\"']([^\"']+)[\"']/g)];
const activitySlugs = slugMatches.map(match => `/activite/${match[1]}`);

// Lire les articles de blog et filtrer par publishAt
const blogPostsPath = path.resolve(__dirname, 'src/data/blogPosts.ts');
const blogPostsContent = fs.readFileSync(blogPostsPath, 'utf-8');

// Extraire le tableau blogPosts entre les crochets
const blogPostsArrayMatch = blogPostsContent.match(/export const blogPosts[^=]*=\s*\[([\s\S]*?)\];/);
const blogPostsArray = blogPostsArrayMatch ? blogPostsArrayMatch[1] : '';

// Séparer chaque objet article (entre { et },)
const articleBlocks = blogPostsArray.split(/\},\s*\{/).map((block, index, arr) => {
  // Réajouter les accolades retirées par le split
  if (index === 0) return block + '}';
  if (index === arr.length - 1) return '{' + block;
  return '{' + block + '}';
});

// Extraire slug et publishAt de chaque article
const blogArticles = articleBlocks.map(block => {
  const slugMatch = block.match(/slug:\s*['"]([^'"]+)['"]/);
  const publishAtMatch = block.match(/publishAt:\s*['"]([^'"]+)['"]/);
  return {
    slug: slugMatch ? slugMatch[1] : null,
    publishAt: publishAtMatch ? publishAtMatch[1] : null
  };
}).filter(article => article.slug && article.publishAt);

// Filtrer les articles publiés (publishAt <= aujourd'hui)
// Utiliser la date UTC+4 (La Réunion) pour éviter les problèmes de fuseau horaire
const nowUTC = new Date();
const reunionOffset = 4 * 60 * 60 * 1000; // UTC+4 en millisecondes
const nowReunion = new Date(nowUTC.getTime() + reunionOffset);
const todayReunion = nowReunion.toISOString().split('T')[0]; // Format YYYY-MM-DD

const publishedBlogSlugs = blogArticles
  .filter(article => {
    // Comparer les dates en string (YYYY-MM-DD) pour éviter les problèmes de timezone
    return article.publishAt <= todayReunion;
  })
  .map(article => `/blog/${article.slug}`);

// Log pour debug
console.log(`\n📅 Today (Réunion UTC+4): ${todayReunion}`);
console.log(`📚 Total blog articles found: ${blogArticles.length}`);
blogArticles.forEach(a => {
  const isPublished = a.publishAt <= todayReunion;
  console.log(`   - ${a.slug}: publishAt=${a.publishAt} ${isPublished ? '✅' : '⏳'}`);
});

console.log(`\n📰 Found ${publishedBlogSlugs.length} published blog posts (filtered by publishAt <= today)\n`);

// Toutes les URLs à pré-rendre (les articles de blog sont filtrés dynamiquement par publishAt)
const urls = [
  '/',
  '/activites-famille-reunion',
  '/activites-couple-reunion',
  '/activites-insolites-reunion',
  '/activites-pas-cheres-reunion',
  '/activites-a-offrir-reunion',
  '/que-faire-saint-pierre-reunion',
  '/que-faire-saint-leu-reunion',
  '/que-faire-cilaos-reunion',
  '/que-faire-piton-fournaise-reunion',
  '/que-faire-saint-benoit-reunion',
  '/que-faire-maido-reunion',
  '/que-faire-saint-joseph-langevin-reunion',
  '/que-faire-cirque-salazie-reunion',
  '/que-faire-saint-gilles-les-bains-reunion',
  '/que-faire-la-saline-les-bains-reunion',
  '/que-faire-plaine-palmistes-belouve-reunion',
  '/que-faire-sainte-suzanne-reunion',
  '/a-propos',
  '/balades-cheval-reunion',
  '/canyoning-reunion',
  '/location-van-reunion',
  '/randonnees-reunion',
  '/blog',
  ...publishedBlogSlugs,  // Articles de blog filtrés par publishAt
  '/mentions-legales',
  '/politique-confidentialite',
  '/cgu',
  ...activitySlugs
];

console.log(`\n📊 Generating ${urls.length} HTML pages...\n`);
console.log(`📝 Found ${activitySlugs.length} activities\n`);

// Lire le template HTML
const template = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8');

// Calculer le nombre d'activités pour l'utiliser dans le titre de la page d'accueil
const activitiesCount = activitySlugs.length;

// IMPORTANT: Temporairement supprimer document du mock AVANT l'import SSR
// pour que react-side-effect (utilisé par react-helmet) détecte un environnement serveur
// et autorise Helmet.renderStatic() (canUseDOM doit être false à l'import)
const savedWindowDoc = mockWindow.document;
delete mockWindow.document;
const savedGlobalDoc = global.document;
delete global.document;

// Charger le module SSR (react-helmet vérifie canUseDOM ici)
const { render } = await import('./dist-ssr/entry-server.js');

// Restaurer document après l'import
mockWindow.document = savedWindowDoc;
global.document = savedGlobalDoc;

// Fonction pour injecter les meta tags Helmet dans le HTML
function injectHelmetHead(html, helmet, url, activitiesCount) {
  // Remplacer le titre si Helmet en fournit un (non vide)
  if (helmet.title && helmet.title.includes('<title') && !helmet.title.match(/<title[^>]*><\/title>/)) {
    html = html.replace(/<title>.*?<\/title>/, helmet.title);
  } else if (url === '/') {
    // Fallback homepage : injecter le nombre d'activités dans le titre
    html = html.replace(
      /<title>.*?<\/title>/,
      `<title>Découvrez et réservez ${activitiesCount} activités à faire à La Réunion</title>`
    );
    html = html.replace(
      /property="og:title" content="[^"]*"/,
      `property="og:title" content="Découvrez et réservez ${activitiesCount} activités à faire à La Réunion"`
    );
  }

  // Remplacer les meta tags si Helmet en fournit
  if (helmet.meta) {
    if (helmet.meta.includes('name="description"')) {
      html = html.replace(/\s*<meta\s+name="description"[^>]*\/?>/g, '');
    }
    if (helmet.meta.includes('name="keywords"')) {
      html = html.replace(/\s*<meta\s+name="keywords"[^>]*\/?>/g, '');
    }
    if (helmet.meta.includes('property="og:')) {
      html = html.replace(/\s*<meta\s+property="og:[^"]*"[^>]*\/?>/g, '');
    }
    if (helmet.meta.includes('property="twitter:') || helmet.meta.includes('name="twitter:')) {
      html = html.replace(/\s*<meta\s+property="twitter:[^"]*"[^>]*\/?>/g, '');
    }
    html = html.replace('</head>', `    ${helmet.meta}\n  </head>`);
  }

  // Remplacer le canonical si Helmet en fournit un
  if (helmet.link && helmet.link.includes('canonical')) {
    html = html.replace(/\s*<link\s+rel="canonical"[^>]*\/?>/g, '');
    html = html.replace('</head>', `    ${helmet.link}\n  </head>`);
  }

  // Ajouter les scripts structured data de Helmet
  if (helmet.script) {
    // Supprimer TOUS les structured data (statiques ET data-react-helmet) pour éviter les doublons
    html = html.replace(/\s*<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g, '');

    // Dédupliquer les schemas par @type (react-helmet peut accumuler des doublons entre rendus)
    const scriptMatches = [...helmet.script.matchAll(/<script[^>]*>(.*?)<\/script>/g)];
    const seenTypes = new Set();
    const uniqueScripts = [];
    for (const match of scriptMatches) {
      try {
        const data = JSON.parse(match[1]);
        const type = data['@type'] || 'unknown';
        if (!seenTypes.has(type)) {
          seenTypes.add(type);
          uniqueScripts.push(match[0]);
        }
      } catch {
        uniqueScripts.push(match[0]);
      }
    }
    const dedupedScript = uniqueScripts.join('');

    html = html.replace('</head>', `    ${dedupedScript}\n  </head>`);
  }

  return html;
}

let count = 0;

// Pour CHAQUE page
for (const url of urls) {
  try {
    console.log(`  [${++count}/${urls.length}] Rendering ${url}`);

    // 1. Mettre à jour le mock location AVANT le rendu
    mockLocation.pathname = url;
    mockLocation.href = `http://localhost:3000${url}`;
    mockLocation.search = '';
    mockLocation.hash = '';
    global.location = mockLocation;
    mockWindow.location = mockLocation;

    // 2. Génère le HTML de la page avec SSR + extraction Helmet
    const { html: appHtml, helmet } = await render(url);

    // 3. Remplace le placeholder dans index.html
    let html = template.replace('<!--app-html-->', appHtml);

    // 4. Injecter les meta tags Helmet dans le <head>
    if (helmet) {
      html = injectHelmetHead(html, helmet, url, activitiesCount);
    }

    // 5. Détermine le chemin de sortie
    const filePath = url === '/'
      ? path.resolve(__dirname, 'dist/index.html')
      : path.resolve(__dirname, `dist${url}/index.html`);

    // 6. Crée les dossiers si nécessaire
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // 7. Sauvegarde le fichier HTML avec le contenu complet
    fs.writeFileSync(filePath, html, 'utf-8');
  } catch (error) {
    console.error(`  ✗ Error rendering ${url}:`, error.message);
    if (count === 1) {
      console.error('Full error stack:', error.stack);
    }
  }
}

console.log(`\n✅ Generated ${count}/${urls.length} HTML pages!\n`);

// ========================================
// GÉNÉRATION AUTOMATIQUE DU SITEMAP
// ========================================

console.log('🗺️  Generating sitemap.xml...\n');

const baseUrl = 'https://dineo.re';
const today = new Date().toISOString().split('T')[0];

// Configuration des priorités et fréquences
const getPageConfig = (url) => {
  if (url === '/') return { priority: '1.0', changefreq: 'daily' };
  if (url.startsWith('/activite/')) return { priority: '0.8', changefreq: 'weekly' };
  if (url.startsWith('/activites-') || url.startsWith('/que-faire-')) return { priority: '0.9', changefreq: 'weekly' };
  if (['/mentions-legales', '/politique-confidentialite', '/cgu'].includes(url)) return { priority: '0.3', changefreq: 'yearly' };
  return { priority: '0.5', changefreq: 'monthly' };
};

// Génère le XML du sitemap
const sitemapEntries = urls.map(url => {
  const config = getPageConfig(url);
  const fullUrl = url === '/' ? baseUrl : `${baseUrl}${url}`;
  return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${config.priority}</priority>
  </url>`;
}).join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;

// Écrit le fichier sitemap.xml dans dist/
const sitemapPath = path.resolve(__dirname, 'dist/sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');

console.log(`✅ Sitemap generated with ${urls.length} URLs: dist/sitemap.xml\n`);
