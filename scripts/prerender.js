import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Importer les activités pour générer les routes dynamiques
const activitiesModule = await import('../src/data/activities.ts');
const activities = activitiesModule.activities;

// Liste de toutes les routes à prerendre
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
  // Générer toutes les routes d'activités
  ...activities.map(activity => `/activite/${activity.slug}`)
];

// Créer le fichier de routes pour le prerendering
const routesContent = `export const routes = ${JSON.stringify(routes, null, 2)};`;

fs.writeFileSync(
  path.resolve(__dirname, '../src/prerender-routes.ts'),
  routesContent
);

console.log(`✅ Généré ${routes.length} routes pour le prerendering`);
console.log('Routes:', routes.slice(0, 5).join(', '), '...');
