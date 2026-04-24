import reactJsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactCompiler from 'eslint-plugin-react-compiler';
import reactDOM from 'eslint-plugin-react-dom';
import reactHooks from 'eslint-plugin-react-hooks';
import reactX from 'eslint-plugin-react-x';
import { configs as sonarjs } from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    ignores: ['dist']
  },
  sonarjs.recommended,
  unicorn.configs.recommended,
  // @ts-expect-error - No problem
  react.configs.flat['recommended'],
  reactCompiler.configs.recommended,
  reactHooks.configs.flat['recommended-latest'],
  reactJsxA11y.flatConfigs.recommended,
  reactX.configs['recommended-type-checked'],
  reactX.configs['disable-conflict-eslint-plugin-react'],
  reactX.configs['disable-conflict-eslint-plugin-react-hooks'],
  reactDOM.configs.recommended,
  {
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    languageOptions: {
      parserOptions: {
        projectService: true
      }
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [...tseslint.configs.strictTypeChecked, ...tseslint.configs.stylisticTypeChecked],
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' }
      ],
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'typeLike', format: ['PascalCase'] },
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow'
        },
        { selector: 'parameter', format: ['camelCase'], leadingUnderscore: 'allow' }
      ],
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } }
      ],
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'react',
              importNames: ['default'],
              message:
                "Only named imports are allowed from 'react' (e.g. import { useState } from 'react')."
            }
          ]
        }
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowNumber: true,
          allowBoolean: true
        }
      ],
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowNullableBoolean: true,
          allowNullableNumber: true
        }
      ],
      '@typescript-eslint/switch-exhaustiveness-check': 'error',

      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off'
    }
  },
  prettier,
  {
    rules: {
      curly: ['error', 'all'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      'react/jsx-no-useless-fragment': 'error',
      'react/no-array-index-key': 'error',
      'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
      'react/self-closing-comp': 'error',

      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            db: true,
            ctx: true
          },
          ignore: [/env/i, /params/i, /util/i]
        }
      ],

      'no-unused-vars': 'off', // Covered by @typescript-eslint

      'react/react-in-jsx-scope': 'off',

      'sonarjs/deprecation': 'off', // Covered by @typescript-eslint
      'sonarjs/no-array-delete': 'off', // Covered by @typescript-eslint
      'sonarjs/no-unused-vars': 'off', // Covered by @typescript-eslint
      'sonarjs/prefer-regexp-exec': 'off', // Covered by @typescript-eslint
      'sonarjs/unused-import': 'off', // Covered by @typescript-eslint

      'unicorn/no-array-sort': 'off',
      'unicorn/no-nested-ternary': 'off', // Covered by sonarjs/no-nested-conditional
      'unicorn/no-null': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/prefer-includes': 'off', // Covered by @typescript-eslint
      'unicorn/prefer-string-starts-ends-with': 'off' // Covered by @typescript-eslint
    }
  }
);
