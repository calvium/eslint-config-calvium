module.exports = {
  extends: ['eslint-config-airbnb', './rules/calvium', './rules/prettier'].map(require.resolve),
  rules: {},
};
