// REACT-NATIVE ESLINT CONFIG
module.exports = {
  // Jest Tests: Prevent 'it' and 'describe' causing ESLint errors
  env: {
    jest: true,
  },
  extends: ['@react-native-community', '@calvium/eslint-config/lib/base', '@calvium/eslint-config/lib/prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    fetch: false,
    __DEV__: false,
    requestIdleCallback: false,
    requestAnimationFrame: false,
  },
  rules: {},
};
