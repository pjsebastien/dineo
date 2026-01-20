import { build } from 'vite';

console.log('Starting SSR build...');

try {
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
  console.log('✅ SSR build completed!');
} catch (error) {
  console.error('❌ SSR build failed:', error);
  process.exit(1);
}
