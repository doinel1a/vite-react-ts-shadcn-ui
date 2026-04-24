/* eslint-disable unicorn/prefer-string-replace-all */

import path from 'node:path';

import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import { defineConfig } from 'vite';
import config from './_config';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "."),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    {
      name: 'dynamic-html',
      transformIndexHtml(html: string) {
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
