import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://jhermesn.dev/hackautismo/',
  plugins: [react()],
  publicDir: 'src/public',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
});