import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: ['tests/e2e/**', 'node_modules/**', 'dist/**', '.devbox/**'],
    setupFiles: ['./tests/unit/setup.ts']
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
