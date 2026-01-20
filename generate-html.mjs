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

// Lire le template HTML
const template = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8');

// Charger le module SSR
const { render } = await import('./dist-ssr/entry-server.js');

let count = 0;

// Pour CHAQUE page
for (const url of urls) {
  try {
    console.log(`  [${++count}/${urls.length}] Rendering ${url}`);

    // 1. Génère le HTML de la page avec SSR
    const appHtml = await render(url);

    // 2. Remplace le placeholder dans index.html
    const html = template.replace('<!--app-html-->', appHtml);

    // 3. Détermine le chemin de sortie
    const filePath = url === '/'
      ? path.resolve(__dirname, 'dist/index.html')
      : path.resolve(__dirname, `dist${url}/index.html`);

    // 4. Crée les dossiers si nécessaire
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // 5. Sauvegarde le fichier HTML avec le contenu complet
    fs.writeFileSync(filePath, html, 'utf-8');
  } catch (error) {
    console.error(`  ✗ Error rendering ${url}:`, error.message);
    if (count === 1) {
      console.error('Full error stack:', error.stack);
    }
  }
}

console.log(`\n✅ Generated ${count}/${urls.length} HTML pages!\n`);
