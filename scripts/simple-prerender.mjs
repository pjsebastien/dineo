#!/usr/bin/env node

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = process.env.PREVIEW_URL || 'http://localhost:4173';
const DIST_PATH = path.resolve(__dirname, '../dist');

// Lire les activités pour générer les routes dynamiques
const activitiesPath = path.resolve(__dirname, '../src/data/activities.ts');
const activitiesContent = fs.readFileSync(activitiesPath, 'utf-8');

// Extraire les slugs des activités
const slugMatches = [...activitiesContent.matchAll(/slug:\s*[\"']([^\"']+)[\"']/g)];
const activitySlugs = slugMatches.map(match => `activite/${match[1]}`);

console.log(`📊 Found ${activitySlugs.length} activities to prerender\n`);

// Routes statiques
const staticRoutes = [
  '',
  'activites-famille-reunion',
  'activites-couple-reunion',
  'activites-insolites-reunion',
  'activites-pas-cheres-reunion',
  'activites-a-offrir-reunion',
  'que-faire-saint-pierre-reunion',
  'que-faire-saint-leu-reunion',
  'que-faire-cilaos-reunion',
  'que-faire-piton-fournaise-reunion',
  'que-faire-saint-benoit-reunion',
  'mentions-legales',
  'politique-confidentialite',
  'cgu'
];

// Combiner les routes statiques et dynamiques
const routes = [...staticRoutes, ...activitySlugs];

async function prerenderPage(browser, route) {
  const page = await browser.newPage();
  const url = route ? `${BASE_URL}/${route}` : BASE_URL;

  console.log(`  Prerendering: /${route || 'index'}`);

  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    await page.waitForSelector('#root > *', { timeout: 10000 });
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 1000)));

    const html = await page.content();

    const outputPath = route
      ? path.join(DIST_PATH, route, 'index.html')
      : path.join(DIST_PATH, 'index.html');

    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, html, 'utf-8');
    console.log(`    ✓ ${outputPath}`);

    await page.close();
    return true;
  } catch (error) {
    console.error(`    ✗ Erreur: ${error.message}`);
    await page.close();
    return false;
  }
}

async function main() {
  console.log('\n🚀 Début du prerendering...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  let success = 0;

  for (const route of routes) {
    if (await prerenderPage(browser, route)) success++;
  }

  await browser.close();

  console.log(`\n✅ ${success}/${routes.length} pages générées!\n`);
}

main().catch(console.error);
