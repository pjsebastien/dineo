import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function runCommand(command, description) {
  console.log(`Running: ${command}`);
  try {
    const { stdout, stderr } = await execAsync(command, { maxBuffer: 10 * 1024 * 1024 });
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
    return true;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    if (error.stdout) console.log(error.stdout);
    if (error.stderr) console.error(error.stderr);
    throw error;
  }
}

console.log('🚀 Starting full build process...\n');

try {
  // 1. Build client
  console.log('📦 Step 1/3: Building client...');
  await runCommand('npx vite build', 'Client build');
  console.log('✅ Client build completed!\n');

  // 2. Build SSR
  console.log('⚙️  Step 2/3: Building SSR bundle...');
  await runCommand('npx vite build --ssr src/entry-server.tsx --outDir dist-ssr', 'SSR build');
  console.log('✅ SSR build completed!\n');

  // 3. Generate HTML
  console.log('🔨 Step 3/3: Generating prerendered HTML...');
  await runCommand('node generate-html.mjs', 'HTML generation');
  console.log('\n🎉 Build completed successfully!');
  console.log('📁 Output: dist/ directory with 43 prerendered pages\n');
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}
