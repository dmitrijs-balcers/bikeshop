# React, Typescript, Parcel V2, CSS Modules

This boilerplate has everything ready to build your prototype based on tech mentioned above.

## Run

```
git clone https://github.com/dmitrijs-balcers/react-css-modules-typescript-boilerplate new-project
cd new-project && yarn
yarn
yarn start
```

Open: http://localhost:1234

## Features

All the mentioned above + prettier and pre-commit hook to format your code.
Also this project already has [Github Actions](https://docs.github.com/en/actions) set up to perform typechecks and lint.

# Dependencies

### [React](https://reactjs.org/)

A JavaScript library for building user interfaces

### [Typescript](https://www.typescriptlang.org/)

TypeScript is a strongly typed programming language which builds on JavaScript giving you better tooling at any scale.

### [classnames](https://www.npmjs.com/package/classnames)

A simple JavaScript utility for conditionally joining classNames together.

```typescript
import cn from "classnames";
cn("foo", "bar"); // => 'foo bar'
```

It is being used [here in the code](https://github.com/dmitrijs-balcers/react-css-modules-typescript-boilerplate/blob/master/src/components/App.tsx#L10).

### [parcel](https://v2.parceljs.org/)

Parcel is a compiler for all your code, regardless of the language or toolchain.

Parcel takes all of your files and dependencies, transforms them, and merges them together into a smaller set of output files that can be used to run your code.

### [PostCss](https://postcss.org/)

[What PostCSS Really Is; What It Really Does](https://davidtheclark.com/its-time-for-everyone-to-learn-about-postcss/)

### [Prettier](https://prettier.io/)

Formats our code for us :)

### [Husky](https://typicode.github.io/husky/#/)

Runs prettier for us in pre commit stage
