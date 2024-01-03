import path from 'node:path';

import { partytownVite } from '@builder.io/partytown/utils';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

import config from './_config';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    partytownVite({
      dest: path.join(__dirname, 'dist', '~partytown')
    }),
    {
      name: 'dynamic-html',
      transformIndexHtml(html) {
        return html
          .replace(/%TITLE%/g, config.metadata.title)
          .replace(/%DESCRIPTION%/g, config.metadata.description)
          .replace(/%KEYWORDS%/g, config.metadata.keywords);
      }
    }
  ],
  server: {
    host: config.server.host,
    port: config.server.port
  }
});
