Eslint Config Calvium
=====================

Current React Native tested versions from `60.x` but it may work in earliers too.

[eslint](http://eslint.org/)

## Install

This module can be use in any project as a dev dependency, but it focus in RN projects.

```lang=bash
npm install @calvium/eslint-config --save-dev
#or
yarn add @calvium/eslint-config --dev
```

after that you just need a `.eslintrc.js` in the same folder than the `package.json` file with this content
 
```lang=js
// Calvium React Native Project Default ESLint Settings.
module.exports = {
  "extends": "@calvium/eslint-config/{config-name}"
};
```

Where `{config-name}` can be one of: 

- `react`
- `react-native`
- `node`

##NOTES

To use this package you **MUST** install all peer dependencies of this package as devDependencies even if you are not using the relevant configuration

```lang=bash
npm install --save-dev eslint@5 eslint-config-prettier @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-native eslint-plugin-promise eslint-config-prettier @react-native-community/eslint-config eslint-plugin-eslint-comments eslint-plugin-react-hooks eslint-plugin-jest eslint-import-resolver-typescript @typescript-eslint/parser
#or
yarn add eslint@5 eslint-config-prettier @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-native eslint-plugin-promise eslint-config-prettier @react-native-community/eslint-config eslint-plugin-eslint-comments eslint-plugin-react-hooks eslint-plugin-jest eslint-import-resolver-typescript @typescript-eslint/parser --dev
```

To check the package is working in your installation run:

```lang=bash
cd path/to/package.json
./node_modules/.bin/eslint ./path/**
```

with path being the place where your js code is.

To have this in your IDE in-line:

- WebStorm/PhpStorm go to:

```
  - Settings ->
    - Languages & Frameworks ->
      - JavaScript -> 
        - Code Quality Tools ->
          - ESLint -> enable
```
