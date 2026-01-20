#!/usr/bin/env node

/**
 * Script de build automatique pour Vercel
 * Lance le build Vite + serveur preview + prerendering
 */

import { spawn, execSync } from 'child_process';
import { setTimeout as sleep } from 'timers/promises';

console.log('🏗️  Vercel Build - Dineo\n');
console.log('='.repeat(60));

// Étape 1: Build Vite
console.log('\n📦 Step 1/3: Building with Vite...\n');
try {
  execSync('vite build', { stdio: 'inherit' });
  console.log('\n✅ Vite build completed');
} catch (error) {
  console.error('❌ Vite build failed');
  process.exit(1);
}

// Étape 2: Lancer le serveur preview
console.log('\n🚀 Step 2/3: Starting preview server...\n');

const server = spawn('vite', ['preview', '--port', '4173'], {
  stdio: ['ignore', 'pipe', 'pipe'],
  shell: true
});

let serverReady = false;

server.stdout.on('data', (data) => {
  const output = data.toString();
  if (output.includes('4173') || output.includes('Local:')) {
    serverReady = true;
    console.log('✅ Preview server started on port 4173\n');
  }
});

server.stderr.on('data', (data) => {
  // Ignorer les warnings Vite
});

// Attendre que le serveur démarre
console.log('⏳ Waiting for preview server...');
await sleep(8000);

// Vérifier que le serveur est prêt
let retries = 0;
while (!serverReady && retries < 15) {
  console.log(`   Checking... (${++retries}/15)`);
  await sleep(2000);
}

if (!serverReady && retries >= 15) {
  console.log('⚠️  Server may not be ready, attempting prerendering anyway...\n');
}

// Étape 3: Prerendering
console.log('🎨 Step 3/3: Prerendering pages...\n');

try {
  execSync('node prerender.mjs', { stdio: 'inherit' });
  console.log('\n✅ Prerendering completed');
} catch (error) {
  console.error('❌ Prerendering failed');
  server.kill();
  process.exit(1);
}

// Arrêter le serveur
console.log('\n🛑 Stopping preview server...');
server.kill();

console.log('\n' + '='.repeat(60));
console.log('✅ Build complete - Ready for deployment!\n');
process.exit(0);
