#!/usr/bin/env node

import { execSync, spawn } from 'child_process';
import { setTimeout as sleep } from 'timers/promises';

console.log('🏗️  Building with Vite...\n');

try {
  // Build avec Vite
  execSync('npm run build', { stdio: 'inherit' });
  console.log('\n✅ Vite build completed\n');
} catch (error) {
  console.error('❌ Vite build failed');
  process.exit(1);
}

console.log('🚀 Starting preview server...\n');

// Lancer le serveur preview
const server = spawn('npm', ['run', 'preview'], {
  stdio: 'pipe',
  shell: true
});

let serverReady = false;

server.stdout.on('data', (data) => {
  const output = data.toString();
  console.log(output);
  if (output.includes('4173') || output.includes('Local:')) {
    serverReady = true;
  }
});

server.stderr.on('data', (data) => {
  console.error(data.toString());
});

// Attendre que le serveur soit prêt
console.log('⏳ Waiting for server to start...\n');
await sleep(5000);

// Vérifier si le serveur répond
let retries = 0;
const maxRetries = 10;

while (retries < maxRetries) {
  try {
    const response = await fetch('http://localhost:4173');
    if (response.ok) {
      console.log('✅ Server is ready!\n');
      break;
    }
  } catch (error) {
    retries++;
    console.log(`   Retry ${retries}/${maxRetries}...`);
    if (retries < maxRetries) {
      await sleep(2000);
    }
  }
}

if (retries === maxRetries) {
  console.error('❌ Server failed to respond');
  server.kill();
  process.exit(1);
}

// Lancer le prerendering
console.log('🎨 Prerendering pages...\n');

try {
  execSync('node scripts/simple-prerender.mjs', { stdio: 'inherit' });
  console.log('\n✅ Prerendering completed!\n');
} catch (error) {
  console.error('❌ Prerendering failed');
  server.kill();
  process.exit(1);
}

// Arrêter le serveur
console.log('🛑 Stopping preview server...\n');
server.kill();

console.log('✅ Build with prerendering completed successfully!\n');
process.exit(0);
