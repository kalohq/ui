# Kalo UI 🍃

![@kalo/ui](https://img.shields.io/npm/v/@kalo/ui.svg)

---

An assortment of low-level components pulled from lystable-frontend. This repo contains the source code, and a development environment to develop new components in.

## An Overview
These are the building blocks of the Kalo platform. Separating them out from the core application logic, allows us to build features without having to worry about low-level components.

It is vital that the API's of our components are as well documented, tested, and refined as possible.

In order to achieve this, components included in the Kalo UI library should adhere to the following:

- Be consistent - no second guessing prop names
- Be flexible - composition is encouraged
- Be standalone - other than direct ones, no dependencies

## Getting Started
This repo is bundled with React Storybook, an application that allows you to view components in isolation.

First install dependencies and setup environment:

```
npm install
npm run storybook
```
You should now have Storybook running at [http://localhost:6060](http://localhost:6060) 🚀

## Using the components
Example: to import a button from the library in your application:

```javascript
import {Button} from '@kalo/ui';
```

## Publishing a new version
To publish a new version:

1. Ensure you have been added to the Kalo NPM organisation
2. Increase the version in `package.json`
3. `npm run dist`
4. `cd lib` and `npm publish`

*Publish from the lib folder to ensure that the module is published in a flat file structure.*

#### Notes
When this repo is published to NPM, our fonts don't get published for licensing reasons. It currently falls back to the font files that exist in the `lystable-frontend` repo.
