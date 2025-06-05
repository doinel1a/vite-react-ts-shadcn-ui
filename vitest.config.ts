import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [
      'tests/e2e/**',
      'node_modules/**',
      'dist/**',
      '.devbox/**',
      'src/**/*.e2e.ts',
      'src/**/*.e2e.test.ts'
    ],
    setupFiles: ['./tests/unit/setup.ts'],
    reporters: ['default'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'json'],
      reportsDirectory: './coverage-vitest',
      reportOnFailure: true
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
