// TYPESCRIPT ESLINT CONFIG
module.exports = {
  rules: {},
  overrides: [
    {
      // These rules are in the overrides section so that they're only disabled for ts/tsx files.
      // Having them here means that, for example no-unused-vars will still work for .js files.
      // It does mean that to disable/override these rules you'd need to use the overrides section of the eslint file rather than the rules section
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        // rules from https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
        "no-unused-vars": ["off"],
        "no-undef": ["off"],
        "no-unexpected-multiline": ["off"], // causes problems with TypeScript styled-component definitions
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-use-before-define": [
          "error",
          {
            functions: false
          }
        ],
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            ignoreRestSiblings: true,
            varsIgnorePattern: "^_", // allow vars prefixed _
            argsIgnorePattern: "^_" // allow args prefixed _
          }
        ]
      }
    }
  ]
};
