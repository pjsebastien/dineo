const { execSync } = require('child_process');
const { spawn } = require('child_process');

console.log('🏗️  Step 1: Building with Vite...\n');

// Build avec Vite
execSync('npm run build', { stdio: 'inherit' });

console.log('\n✅ Vite build complete\n');
console.log('🚀 Step 2: Starting preview server...\n');

// Lancer le serveur preview
const server = spawn('npm', ['run', 'preview'], {
  shell: true,
  stdio: 'inherit'
});

// Attendre 5 secondes que le serveur démarre
setTimeout(() => {
  console.log('\n🎨 Step 3: Prerendering pages...\n');

  // Lancer le prerendering
  try {
    execSync('node prerender.js', { stdio: 'inherit' });

    console.log('\n🛑 Stopping preview server...\n');

    // Tuer le serveur
    server.kill();

    console.log('✅ Build complete!\n');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Prerender failed');
    server.kill();
    process.exit(1);
  }
}, 5000);
