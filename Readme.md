Eslint Config Calvium
=====================

Current React Native tested versions from `60.x` but it may work in earlier versions too.

[eslint](http://eslint.org/)

## Install

This module can be use in any vanilla JS, React (web) or React Native project as a dev dependency.

```lang=bash
npm install @calvium/eslint-config --save-dev
```

To use this package you **MUST** install all peer dependencies of this package as devDependencies even if you are not using the relevant configuration

```lang=bash
npm install --save-dev eslint eslint-config-prettier @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-native eslint-plugin-promise eslint-config-prettier @react-native-community/eslint-config eslint-plugin-eslint-comments eslint-plugin-react-hooks eslint-plugin-jest eslint-import-resolver-typescript @typescript-eslint/parser
```


after that you just need a `.eslintrc.js` in the same folder than the `package.json` file with this content
 
```lang=js
// Calvium React Native Project Default ESLint Settings.
module.exports = {
  "extends": "@calvium/eslint-config/config/{config-name}"
};
```

Where `{config-name}` can be one of: 

- `react-default`
- `react-typescript`
- `react-native-default`
- `react-native-typescript`
- `node-default`
- `node-typescript`

## NOTES

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
