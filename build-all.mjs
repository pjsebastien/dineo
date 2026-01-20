import { spawn } from 'child_process';

function runCommand(command, args, env = {}) {
  return new Promise((resolve, reject) => {
    console.log(`Running: ${command} ${args.join(' ')}`);

    const proc = spawn(command, args, {
      stdio: 'inherit',
      shell: true,
      env: { ...process.env, ...env }
    });

    proc.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });

    proc.on('error', (err) => {
      reject(err);
    });
  });
}

console.log('🚀 Starting full build process...\n');

try {
  // 1. Build client
  console.log('📦 Step 1/3: Building client...');
  await runCommand('npx', ['vite', 'build']);
  console.log('✅ Client build completed!\n');

  // 2. Build SSR
  console.log('⚙️  Step 2/3: Building SSR bundle...');
  await runCommand('npx', ['vite', 'build'], { SSR: 'true' });
  console.log('✅ SSR build completed!\n');

  // 3. Generate HTML
  console.log('🔨 Step 3/3: Generating prerendered HTML...');
  await runCommand('node', ['generate-html.mjs']);
  console.log('\n🎉 Build completed successfully!');
  console.log('📁 Output: dist/ directory with 43 prerendered pages\n');
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}
