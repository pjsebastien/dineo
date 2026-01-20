import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lire les activités
const activitiesPath = path.resolve(__dirname, 'src/data/activities.ts');
const activitiesContent = fs.readFileSync(activitiesPath, 'utf-8');
const slugMatches = [...activitiesContent.matchAll(/slug:\s*[\"']([^\"']+)[\"']/g)];
const activitySlugs = slugMatches.map(match => `/activite/${match[1]}`);

// Toutes les URLs à pré-rendre
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
  '/mentions-legales',
  '/politique-confidentialite',
  '/cgu',
  ...activitySlugs
];

console.log(`\n📊 Generating ${urls.length} HTML pages...\n`);

// Lire le template
const template = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8');

// Charger le module SSR
const { render } = await import('./dist-ssr/entry-server.js');

let count = 0;

for (const url of urls) {
  try {
    console.log(`  [${++count}/${urls.length}] Rendering ${url}`);

    // Générer le HTML avec SSR
    const { html: appHtml, helmet } = await render(url);

    // Remplacer le placeholder et ajouter les meta tags Helmet
    let html = template.replace('<!--app-html-->', appHtml);

    // Injecter les meta tags Helmet dans le <head>
    if (helmet) {
      if (helmet.title) html = html.replace(/<title>.*?<\/title>/, helmet.title);
      if (helmet.meta) html = html.replace('</head>', `${helmet.meta}\n  </head>`);
      if (helmet.link) html = html.replace('</head>', `${helmet.link}\n  </head>`);
      if (helmet.script) html = html.replace('</head>', `${helmet.script}\n  </head>`);
    }

    // Déterminer le chemin de sortie
    const filePath = url === '/'
      ? path.resolve(__dirname, 'dist/index.html')
      : path.resolve(__dirname, `dist${url}/index.html`);

    // Créer les dossiers
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Sauvegarder
    fs.writeFileSync(filePath, html, 'utf-8');
  } catch (error) {
    console.error(`  ✗ Error rendering ${url}:`, error.message);
  }
}

console.log(`\n✅ Generated ${count} HTML pages!\n`);
