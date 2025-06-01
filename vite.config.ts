/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import config from './_config';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';
import legacy from '@vitejs/plugin-legacy';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    svgr(),
    legacy(),
    {
      name: 'dynamic-html',
      transformIndexHtml(html) {
        return html
          .replaceAll('%TITLE%', config.metadata.title)
          .replaceAll('%DESCRIPTION%', config.metadata.description)
          .replaceAll('%KEYWORDS%', config.metadata.keywords);
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: config.server.host,
    port: config.server.port,
  },
});
