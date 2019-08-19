// BASE ESLINT CONFIG
module.exports = {
    env: {
      node: true,
      es6: true,
    },
    extends: ['@calvium/eslint-config/lib/base', '@calvium/eslint-config/lib/prettier'],
    parserOptions: {
      ecmaVersion: 2018,
    },
  };
  