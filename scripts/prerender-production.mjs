#!/usr/bin/env node

/**
 * Script de prerendering pour production
 * Génère le HTML statique en se connectant au site déployé
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// URL du site en production (à configurer)
const SITE_URL = process.env.SITE_URL || 'https://dineo.re';
const DIST_PATH = path.resolve(__dirname, '../dist');

// Lire les activités
const activitiesPath = path.resolve(__dirname, '../src/data/activities.ts');
const activitiesContent = fs.readFileSync(activitiesPath, 'utf-8');
const slugMatches = [...activitiesContent.matchAll(/slug:\s*[\"']([^\"']+)[\"']/g)];
const activitySlugs = slugMatches.map(match => `activite/${match[1]}`);

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

const routes = [...staticRoutes, ...activitySlugs];

console.log(`\n🎨 Prerendering from: ${SITE_URL}`);
console.log(`📊 Total pages: ${routes.length}\n`);

async function prerenderPage(browser, route) {
  const page = await browser.newPage();
  const url = route ? `${SITE_URL}/${route}` : SITE_URL;

  console.log(`  Fetching: /${route || 'index'}`);

  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    await page.waitForSelector('#root > *', { timeout: 10000 });
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));

    const html = await page.content();

    const outputPath = route
      ? path.join(DIST_PATH, route, 'index.html')
      : path.join(DIST_PATH, 'index.html');

    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, html, 'utf-8');
    console.log(`    ✓ Saved to: ${outputPath}`);

    await page.close();
    return true;
  } catch (error) {
    console.error(`    ✗ Error: ${error.message}`);
    await page.close();
    return false;
  }
}

async function main() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  let success = 0;

  for (const route of routes) {
    if (await prerenderPage(browser, route)) success++;
  }

  await browser.close();

  console.log(`\n✅ ${success}/${routes.length} pages prerendered!\n`);
}

main().catch(console.error);
