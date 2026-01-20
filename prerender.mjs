import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = process.env.SITE_URL || 'http://localhost:4173';
const DIST = path.join(__dirname, 'dist');

// Liste de toutes les routes à pré-rendre
const routes = [
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
  // Pages d'activités
  '/activite/balade-cheval-grand-etang-reunion',
  '/activite/snorkeling-saint-leu-lagon-reunion',
  '/activite/snorkeling-nage-dauphins-baleines-saint-gilles-reunion',
  '/activite/bapteme-plongee-saint-gilles-reunion-diving',
  '/activite/balade-cheval-maido-les-chevaux-du-maido',
  '/activite/randonnee-piton-de-la-fournaise-reunion',
  '/activite/parapente-xl-saint-leu-reunion',
  '/activite/bapteme-plongee-saint-leu-reserve-marine-reunion',
  '/activite/randonnee-quad-maido-saint-paul-reunion',
  '/activite/helicoptere-volcans-cirques-saint-pierre-reunion',
  '/activite/observation-dauphins-baleines-saint-gilles-reunion',
  '/activite/vol-ulm-multiaxe-saint-paul-reunion',
  '/activite/descente-vtt-piton-maido-reunion',
  '/activite/canyoning-fleurs-jaunes-cilaos-reunion',
  '/activite/parapente-biplace-saint-leu-lagon-reunion',
  '/activite/kayak-transparent-lagon-saint-gilles-reunion',
  '/activite/rafting-riviere-des-marsouins-saint-benoit-reunion',
  '/activite/helicoptere-survol-complet-saint-pierre-reunion',
  '/activite/speleo-tunnels-lave-piton-fournaise-reunion',
  '/activite/canyoning-riviere-langevin-saint-joseph-reunion',
  '/activite/cours-surf-saint-leu-reunion',
  '/activite/saut-elastique-pont-bras-plaine-reunion',
  '/activite/randonnee-cheval-piton-maido-reunion',
  '/activite/vol-helicoptere-piton-fournaise-reunion',
  '/activite/excursion-quad-riviere-remparts-reunion',
  '/activite/location-quad-piton-fournaise-reunion',
  '/activite/location-sup-saline-bains-reunion',
  '/activite/randonnee-piton-fournaise-sommet-reunion',
  '/activite/randonnee-aquatique-riviere-roches-reunion'
];

async function prerender() {
  console.log('Starting prerender...');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const route of routes) {
    try {
      console.log(`Prerendering ${route}...`);

      const page = await browser.newPage();
      const url = `${SITE_URL}${route}`;

      await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      // Attendre que React finisse de rendre
      await page.waitForSelector('#root > *', { timeout: 10000 });
      await new Promise(resolve => setTimeout(resolve, 2000));

      const html = await page.content();

      // Déterminer le chemin de sortie
      let outputPath;
      if (route === '/') {
        outputPath = path.join(DIST, 'index.html');
      } else {
        const routePath = route.replace(/^\//, '');
        outputPath = path.join(DIST, routePath, 'index.html');
      }

      // Créer les dossiers si nécessaire
      const dir = path.dirname(outputPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Écrire le HTML
      fs.writeFileSync(outputPath, html, 'utf-8');
      console.log(`✓ ${outputPath}`);

      await page.close();
    } catch (error) {
      console.error(`✗ Error prerendering ${route}:`, error.message);
    }
  }

  await browser.close();
  console.log('\n✅ Prerendering complete!');
}

prerender().catch(console.error);
