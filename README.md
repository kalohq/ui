# @kalo/ui 🍃

![@kalo/ui](https://img.shields.io/npm/v/@kalo/ui.svg) [![codecov](https://codecov.io/gh/kalohq/ui/branch/master/graph/badge.svg?token=UMKMabKV8s)](https://codecov.io/gh/kalohq/ui)

---

An assortment of low-level components pulled from kalo/frontend. This repo contains the source code, and a playground environment to develop new components in.

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
You should now have Storybook running at [http://localhost:6006](http://localhost:6006) 🚀

## Using the components

Example: to import a button from the library in your application:

```javascript
import {Button} from '@kalo/ui';
```

## Writing new components

Besides the core component file, components should also be included with relevant tests and stories.
A component directory should follow this pattern:

| File | Purpose |
| ------------- |-------------|
| `component-name.js` | The main component file |
| `component-name.css` | Any component styles |
| `index.js` | A minimal file exporting the component |
| `README.md` | Any related design usage documentation |
| `__tests__/component-name.test.js` | Component tests |
| `__stories__/component-name.stories.js` | Stories to display in React Storybook |

## Design Tokens

All design tokens should be defined in our `config/.tokens.yml` config file. When the config file changes we should regenerate various useful files out of that with `gulp tokens`. 

## Testing changes with the frontend

To test out changes that you've made in the UI repo within the frontend, follow these steps:
1. Ensure you've compiled the UI library (`npm run dist`)
2. In the UI repo, `npm link`
3. CD in to the frontend, and run 'npm link @kalo/ui'
4. Fire up the frontend

Remember, that any changes you make in the UI library will need to be recompiled before they're picked up by the frontend repo.

## Publishing a new version

To publish a new version:

1. Ensure you have been added to the Kalo NPM organisation
2. `npm version {major | minor | patch}` [See version docs for more options](https://docs.npmjs.com/cli/version)
3. `npm run dist`
4. `npm publish`
5. :boom:

#### Gotchas

When this repo is published to NPM, our fonts don't get published for licensing reasons. It currently falls back to the font files that exist in the `frontend` repo.
