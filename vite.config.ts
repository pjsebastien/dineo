import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command, mode }) => {
  // SSR build configuration
  if (command === 'build' && process.env.SSR) {
    return {
      plugins: [react()],
      build: {
        ssr: true,
        outDir: 'dist-ssr',
        rollupOptions: {
          input: path.resolve(__dirname, 'src/entry-server.tsx'),
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
    resolve: {
      alias: {
        '/src': path.resolve(__dirname, 'src')
      }
    }
  };
});
