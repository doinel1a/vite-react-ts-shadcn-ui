// eslint.config.mjs
import eslintReact from '@eslint-react/eslint-plugin';
import eslintJs from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import prettier from 'eslint-config-prettier/flat';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import playwright from 'eslint-plugin-playwright';
import reactHooks from 'eslint-plugin-react-hooks';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

export default [
  // Base + TS rules
  ...tseslint.config(
    eslintJs.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    {
      languageOptions: {
        parserOptions: {
          projectService: true,
          project: ['./tsconfig.json', './tsconfig.node.json'],
          tsconfigRootDir: new URL('.', import.meta.url),
          ecmaVersion: 'latest',
          sourceType: 'module'
        }
      }
    }
  ),

  // Plugin-based configs
  eslintReact.configs.recommended,

  // Vitest rules
  {
    files: ['tests/unit/**', 'src/**/*.unit.test.ts'], // or any other pattern
    plugins: {
      vitest
    },
    rules: {
      ...vitest.configs.recommended.rules, // you can also use vitest.configs.all.rules to enable all rules
      'vitest/max-nested-describe': ['error', { max: 3 }] // you can also modify rules' behavior using option like this
    }
  },

  // Playwright rules
  {
    files: ['tests/e2e/**', 'src/**/*.e2e.ts', 'src/**/*.e2e.test.tsx'], // or any other pattern
    plugins: {
      playwright
    },
    rules: {
      ...playwright.configs['flat/recommended'].rules
    }
  },

  {
    // Apply remaining plugin rules + custom rules
    plugins: {
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      sonarjs,
      unicorn,
      vitest,
      playwright
    },
    rules: {
      // Plugin recommended rules
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...sonarjs.configs.recommended.rules,
      ...unicorn.configs.recommended.rules,
      ...playwright.configs['flat/recommended'].rules,
      ...vitest.configs.recommended.rules,

      // Base
      quotes: ['error', 'single'],
      semi: ['error', 'always'],

      // TypeScript
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports'
        }
      ],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: { attributes: false }
        }
      ],
      'playwright/prefer-native-locators': 'error',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      'unicorn/switch-case-braces': 'off',
      'unicorn/prevent-abbreviations': [
        'off', // 'off' is ignored
        {
          extendDefaultReplacements: false, // If I'm understanding, this should achieve the desired end, but also doesn't work
          ignore: [
            /./ // 'ignore' is ignored
          ]
        }
      ]
    },
    settings: {
      react: {
        pragma: 'React',
        version: 'detect'
      }
    },
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
        vitest: true
      }
    },
    ignores: ['**/*.html', '**/routeTree.gen.ts']
  },

  prettier
];
