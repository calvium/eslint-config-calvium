Eslint Config Calvium
=====================

Current React Native tested versions from RN 0.39.0 to RN 0.43.0 but it may work in earliers too.

[eslint](http://eslint.org/)

## Install

This module can be use in any project as a dev dependency, but it focus in RN projects.

```lang=bash
npm install eslint-config-calvium --save-dev
#or
yarn add eslint-config-calvium --dev
```

after that you just need a `.eslintrc` in the same folder than the `package.json` file with this content
 
```lang=js
// Calvium React Native Project Default ESLint Settings.
{
  "extends": "calvium"
}
```

##NOTES

You **must** install the appropiate version of eslint for your project. A version bigger than `3.11.1` and below `4.x.x` is recommended.

```lang=bash
npm i eslint@3 --save-dev
#or
yarn add eslint@3 --dev
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
