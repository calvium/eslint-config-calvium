// TYPESCRIPT ESLINT CONFIG
module.exports = {
  rules: {},
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        // rules from https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
        'no-unused-vars': ['off'],
        'no-undef': ['off'],
        'no-unexpected-multiline': ['off'], // causes problems with TypeScript styled-component definitions
        // '@typescript-eslint/no-angle-bracket-type-assertion': 'error', // This rule seems like it does not exists
        '@typescript-eslint/no-misused-new': 'error',
        // no-use-before-define is off as the TS compiler catches actual errors
        // '@typescript-eslint/no-object-literal-type-assertion': 'warn', // This rule seems like it does not exists
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
          },
        ], // A project has this turn off
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            ignoreRestSiblings: true,
            varsIgnorePattern: '^_', // allow vars prefixed _
            argsIgnorePattern: '^_', // allow args prefixed _
          },
        ],
      },
    },
  ],
};
