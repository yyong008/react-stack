import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import PurgeIcons from 'vite-plugin-purge-icons';

export default defineConfig({
  plugins: [
    react(),
    PurgeIcons({
      content: [
        '**/*.html',
        '**/*.js',
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx'
      ],
    }),
  ],
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  server: {
    port: 9091,
    host: true,
  }
});
