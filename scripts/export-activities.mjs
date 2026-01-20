import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the TypeScript file and extract activities
const activitiesPath = path.resolve(__dirname, '../src/data/activities.ts');
const content = fs.readFileSync(activitiesPath, 'utf-8');

// Extract the activities array using regex (simple approach)
const match = content.match(/export const activities: Activity\[\] = (\[[\s\S]*?\n\]);/);

if (!match) {
  console.error('Could not extract activities from activities.ts');
  process.exit(1);
}

// Clean up the TypeScript code to make it valid JSON
let activitiesStr = match[1];

// Remove trailing commas
activitiesStr = activitiesStr.replace(/,(\s*[}\]])/g, '$1');

// Parse as JavaScript
const activities = eval(`(${activitiesStr})`);

// Create dist directory if it doesn't exist
const distPath = path.resolve(__dirname, '../dist/assets');
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

// Write JSON file
fs.writeFileSync(
  path.join(distPath, 'activities-data.json'),
  JSON.stringify(activities, null, 2)
);

console.log(`✅ Exported ${activities.length} activities to dist/assets/activities-data.json`);
