module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/calvium',
  ].map(require.resolve),
  rules: {}
};