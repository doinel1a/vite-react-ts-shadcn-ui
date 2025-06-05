/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/// <reference types="vitest" />
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react-swc';
import config from './_config';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';
import legacy from '@vitejs/plugin-legacy';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  esbuild: {
    supported: {
      'top-level-await': true //browsers can handle top-level-await features
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext'
    }
  },
  build: {
    target: 'esnext'
  },
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
    },
    istanbul({
        include: 'src/*',
        exclude: ['node_modules', 'test/'],
        extension: ['.js', '.ts', '.tsx'],
        requireEnv: true, // Only instrument if VITE_COVERAGE is set
      }),
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
