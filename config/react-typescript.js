// REACT TYPESCRIPT ESLINT CONFIG
module.exports = {
    // Jest Tests: Prevent 'it' and 'describe' causing ESLint errors
    env: {
      jest: true,
    },
    extends: ['react-app', '@calvium/eslint-config/lib/typescript', '@calvium/eslint-config/lib/prettier'],
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
  