import { build } from 'vite';

console.log('Starting client build...');

try {
  await build();
  console.log('✅ Client build completed!');
} catch (error) {
  console.error('❌ Client build failed:', error);
  process.exit(1);
}
