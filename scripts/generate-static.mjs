import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import activities data
const activitiesData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../dist/assets/activities-data.json'), 'utf-8')
);

// Generate list of all routes
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
  'cgu',
  // Add all activity routes
  ...activitiesData.map(activity => `activite/${activity.slug}`)
];

async function prerenderRoutes() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const distPath = path.resolve(__dirname, '../dist');

  console.log(`🚀 Starting prerendering of ${routes.length} routes...`);

  for (const route of routes) {
    try {
      const page = await browser.newPage();
      const url = `http://localhost:5173/${route}`;

      console.log(`  📄 Prerendering: /${route}`);

      await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      // Wait for React to render
      await page.waitForSelector('#root > *', { timeout: 10000 });

      // Get the full HTML
      const html = await page.content();

      // Create directory structure
      const routePath = route || 'index';
      const filePath = path.join(distPath, routePath, 'index.html');
      const dir = path.dirname(filePath);

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Write HTML file
      fs.writeFileSync(filePath, html);

      await page.close();
    } catch (error) {
      console.error(`  ❌ Error prerendering /${route}:`, error.message);
    }
  }

  await browser.close();
  console.log('✅ Prerendering completed!');
}

prerenderRoutes().catch(console.error);
