module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'eslint:recommended', // recommended ESLint rules
    'plugin:@microsoft/sdl/common', // Microsoft SDL rules
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display Prettier errors as ESLint errors. This should always be the last configuration in the extends array.
    'plugin:unicorn/recommended',
  ],
  plugins: [
    '@microsoft/sdl',
    'functional',
    'unicorn',
  ],
}
