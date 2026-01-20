import { build } from 'vite';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

console.log('🚀 Starting full build process...\n');

try {
  // 1. Build client
  console.log('📦 Step 1/3: Building client...');
  await build();
  console.log('✅ Client build completed!\n');

  // 2. Build SSR
  console.log('⚙️  Step 2/3: Building SSR bundle...');
  await build({
    build: {
      ssr: 'src/entry-server.tsx',
      outDir: 'dist-ssr',
      rollupOptions: {
        output: {
          format: 'es',
        },
      },
    },
  });
  console.log('✅ SSR build completed!\n');

  // 3. Generate HTML
  console.log('🔨 Step 3/3: Generating prerendered HTML...');
  await execAsync('node generate-html.mjs');
  console.log('\n🎉 Build completed successfully!');
  console.log('📁 Output: dist/ directory with 43 prerendered pages\n');
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}
