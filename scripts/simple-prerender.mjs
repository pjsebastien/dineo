#!/usr/bin/env node

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'http://localhost:4173';
const DIST_PATH = path.resolve(__dirname, '../dist');

// Routes statiques
const routes = [
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
