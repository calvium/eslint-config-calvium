module.exports = {
  // Jest Tests: Prevent 'it' and 'describe' causing ESLint errors
  env: {
    jest: true,
  },
  extends: ['prettier', 'prettier/flowtype', 'prettier/react'],
};
