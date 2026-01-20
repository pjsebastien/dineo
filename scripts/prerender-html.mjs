#!/usr/bin/env node

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BASE_URL = 'http://localhost:4173'; // Vite preview server
const DIST_PATH = path.resolve(__dirname, '../dist');

// Lire les activités pour générer les routes dynamiques
const activitiesPath = path.resolve(__dirname, '../src/data/activities.ts');
const activitiesContent = fs.readFileSync(activitiesPath, 'utf-8');

// Extraire les slugs des activités (regex simple)
const slugMatches = [...activitiesContent.matchAll(/slug:\s*["']([^"']+)["']/g)];
const activitySlugs = slugMatches.map(match => match[1]);

console.log(`📊 Trouvé ${activitySlugs.length} activités`);

// Liste complète des routes à prerendre
const routes = [
  { path: '/', outputPath: 'index.html' },
  { path: '/activites-famille-reunion', outputPath: 'activites-famille-reunion/index.html' },
  { path: '/activites-couple-reunion', outputPath: 'activites-couple-reunion/index.html' },
  { path: '/activites-insolites-reunion', outputPath: 'activites-insolites-reunion/index.html' },
  { path: '/activites-pas-cheres-reunion', outputPath: 'activites-pas-cheres-reunion/index.html' },
  { path: '/activites-a-offrir-reunion', outputPath: 'activites-a-offrir-reunion/index.html' },
  { path: '/que-faire-saint-pierre-reunion', outputPath: 'que-faire-saint-pierre-reunion/index.html' },
  { path: '/que-faire-saint-leu-reunion', outputPath: 'que-faire-saint-leu-reunion/index.html' },
  { path: '/que-faire-cilaos-reunion', outputPath: 'que-faire-cilaos-reunion/index.html' },
  { path: '/que-faire-piton-fournaise-reunion', outputPath: 'que-faire-piton-fournaise-reunion/index.html' },
  { path: '/que-faire-saint-benoit-reunion', outputPath: 'que-faire-saint-benoit-reunion/index.html' },
  { path: '/mentions-legales', outputPath: 'mentions-legales/index.html' },
  { path: '/politique-confidentialite', outputPath: 'politique-confidentialite/index.html' },
  { path: '/cgu', outputPath: 'cgu/index.html' },
  // Ajouter toutes les pages d'activités
  ...activitySlugs.map(slug => ({
    path: `/activite/${slug}`,
    outputPath: `activite/${slug}/index.html`
  }))
];

console.log(`📝 Total de ${routes.length} pages à prerendre\n`);

async function startPreviewServer() {
  console.log('🚀 Démarrage du serveur de preview...');

  // Lancer le serveur en arrière-plan
  const serverProcess = execSync('npm run preview &', { stdio: 'inherit' });

  // Attendre que le serveur soit prêt
  await new Promise(resolve => setTimeout(resolve, 3000));

  console.log('✅ Serveur de preview démarré\n');
  return serverProcess;
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();

  try {
    const url = `${BASE_URL}${route.path}`;
    console.log(`  📄 Prerendering: ${route.path}`);

    // Charger la page
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Attendre que React ait fini de rendre
    await page.waitForSelector('#root > *', { timeout: 10000 });

    // Attendre un peu plus pour les requêtes async
    await page.waitForTimeout(1000);

    // Récupérer le HTML complet
    const html = await page.content();

    // Créer le dossier si nécessaire
    const fullPath = path.join(DIST_PATH, route.outputPath);
    const dir = path.dirname(fullPath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Écrire le fichier HTML
    fs.writeFileSync(fullPath, html, 'utf-8');

    console.log(`    ✓ Généré: ${route.outputPath}`);

    await page.close();
    return true;
  } catch (error) {
    console.error(`    ✗ Erreur pour ${route.path}:`, error.message);
    await page.close();
    return false;
  }
}

async function main() {
  console.log('🎬 Début du prerendering\n');
  console.log('='repeat(60));

  // Démarrer le serveur de preview
  await startPreviewServer();

  // Lancer Puppeteer
  console.log('🤖 Lancement de Puppeteer...\n');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  let successCount = 0;
  let errorCount = 0;

  // Prerendre toutes les routes
  for (const route of routes) {
    const success = await prerenderRoute(browser, route);
    if (success) successCount++;
    else errorCount++;
  }

  await browser.close();

  // Arrêter le serveur de preview
  try {
    execSync('taskkill /F /IM node.exe /FI "WINDOWTITLE eq vite*"', { stdio: 'ignore' });
  } catch (e) {
    // Ignore errors
  }

  console.log('\n' + '='.repeat(60));
  console.log(`\n✅ Prerendering terminé!`);
  console.log(`   - ${successCount} pages générées avec succès`);
  if (errorCount > 0) {
    console.log(`   - ${errorCount} erreurs`);
  }
  console.log(`\n📁 Fichiers générés dans: ${DIST_PATH}`);
  console.log('=''.repeat(60));
}

main().catch(error => {
  console.error('\n❌ Erreur fatale:', error);
  process.exit(1);
});
