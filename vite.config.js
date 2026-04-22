import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/lfc-resume/' : '/',
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
    jsx: 'automatic'
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.jsx': 'jsx',
        '.js': 'jsx'
      },
      jsx: 'automatic'
    }
  },
  server: {
    port: 7000,
    open: true
  },
  build: {
    outDir: 'dist'
  }
}));
