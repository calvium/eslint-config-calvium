// TYPESCRIPT ESLINT CONFIG
module.exports = {
  // Jest Tests: Prevent 'it' and 'describe' causing ESLint errors
  env: {
    jest: true,
  },
  extends: [
    '@calvium/eslint-config/lib/base',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: true,
      'eslint-import-resolver-typescript': true,
    },
  },
};
