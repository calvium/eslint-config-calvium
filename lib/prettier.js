// BASE ESLINT CONFIG
module.exports = {
  // Jest Tests: Prevent 'it' and 'describe' causing ESLint errors
  env: {
    jest: true,
  },
  extends: ['prettier', 'prettier/@typescript-eslint', 'prettier/react'],
};
