// eslint.config.mjs
import eslintReact from '@eslint-react/eslint-plugin';
import eslintJs from '@eslint/js';
import prettier from 'eslint-config-prettier/flat';
import jsxA11y from 'eslint-plugin-jsx-a11y';
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

  {
    // Apply remaining plugin rules + custom rules
    plugins: {
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      sonarjs: sonarjs,
      unicorn: unicorn
    },
    rules: {
      // Plugin recommended rules
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...sonarjs.configs.recommended.rules,
      ...unicorn.configs.recommended.rules,

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
        document: 'readonly'
      }
    },
    ignores: ['**/*.html', '**/routeTree.gen.ts']
  },

  prettier
];
