const { rules, ignorePatterns } = require('./.eslint.rules')

module.exports = {
  rules,
  ignorePatterns,
  env: {
    es2021: true,
  },
  extends: [
    'eslint:recommended', // recommended ESLint rules
    'plugin:@microsoft/sdl/common', // Microsoft SDL rules
    'plugin:@microsoft/sdl/typescript', // Microsoft SDL TS rules
    'plugin:@typescript-eslint/recommended', // recommended rules from @typescript-eslint/eslint-plugin
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display Prettier errors as ESLint errors. This should always be the last configuration in the extends array.
    'plugin:unicorn/recommended',
    'plugin:react/recommended',
    'plugin:testing-library/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json', // Specify it only for TypeScript files
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@microsoft/sdl',
    'functional',
    'unicorn',
    'react',
    'react-hooks',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
    react: {
      version: 'detect',
    },
  },
}
