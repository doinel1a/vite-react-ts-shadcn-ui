import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: ['tests/e2e/**', 'node_modules/**', 'dist/**', '.devbox/**']
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
