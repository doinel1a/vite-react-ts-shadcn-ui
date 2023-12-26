/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'crlf',
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss'
  ],
  importOrder: [
    '<TYPES>',
    '<TYPES>^[.]',
    '',
    '^react$',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^[@]/',
    '',
    '^[.]'
  ]
};
