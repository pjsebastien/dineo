#!/usr/bin/env node

/**
 * Script de build pour production avec prerendering HTML complet
 * Fonctionne sur tous les environnements (local, Vercel, Netlify, etc.)
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('\n🏗️  DINEO - Production Build with Prerendering\n');
console.log('='.repeat(60));

// Étape 1: Build Vite
console.log('\n📦 Step 1/2: Building with Vite...\n');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('\n✅ Vite build completed');
} catch (error) {
  console.error('\n❌ Vite build failed');
  process.exit(1);
}

// Étape 2: Vérifier que dist existe
const distPath = path.resolve(__dirname, '../dist');
if (!fs.existsSync(distPath)) {
  console.error('\n❌ dist/ folder not found');
  process.exit(1);
}

console.log('\n📊 Build summary:');
console.log(`   Output directory: ${distPath}`);

// Lister les fichiers générés
const files = fs.readdirSync(distPath);
console.log(`   Generated files: ${files.length}`);

console.log('\n' + '='.repeat(60));
console.log('\n✅ Production build completed successfully!\n');

// Note sur le prerendering
console.log('⚠️  NOTE: HTML prerendering must be done separately');
console.log('   Run: npm run prerender:prod\n');
