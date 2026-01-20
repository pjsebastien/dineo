import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  // SSR build configuration
  if (command === 'build' && process.env.SSR) {
    return {
      plugins: [react()],
      build: {
        ssr: true,
        outDir: 'dist-ssr',
        rollupOptions: {
          input: 'src/entry-server.tsx',
          output: { format: 'es' }
        }
      }
    };
  }

  // Client build configuration (default)
  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
