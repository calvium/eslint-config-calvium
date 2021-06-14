// BASE ESLINT CONFIG
module.exports = {
  // Jest Tests: Prevent 'it' and 'describe' causing ESLint errors
  env: {
    jest: true,
  },
  plugins: ["import"],
  rules: {
    // rules from https://www.npmjs.com/package/eslint-plugin-import that BC thinks are useful
    "import/first": "warn",
    "import/no-duplicates": 0, // "warn", TODO put this back temp disabled as auto-fix breaks things https://github.com/benmosher/eslint-plugin-import/pull/1431
    "import/order": [
      "warn",
      {
        // libraries first, then local files
        groups: ["external", "internal"],
        "newlines-between": "always",
      },
    ],
    // "void someVariable;" is useful to signal that it is deliberate that a given param/variable is unused.
    "no-void": ["error", { allowAsStatement: true }],
  },
};
