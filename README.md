# @kalo/ui 🍃

![@kalo/ui](https://img.shields.io/npm/v/@kalo/ui.svg) [![codecov](https://codecov.io/gh/kalohq/ui/branch/master/graph/badge.svg?token=UMKMabKV8s)](https://codecov.io/gh/kalohq/ui)

---

Welcome to the Kalo Design System (KDS).

This repo contains the source code for the design system, as well as the source for the documentation site that powers [kalo.design](http://kalo.design)

## Documentation
For full documentation on how to use @kalo/ui, please refer to the documentation site: [KDS Documentation](http://kalo.design)

## Common workflows

### Adding a new icon
The raw SVG files are stored in `src/icons/svg`. These are then converted in to symbols which are imported in to Kalo Frontend.

To add a new icon, follow these steps:

1. Run the SVG through SVGO
2. Add the SVG file to `src/icons/svg`.
3. Run `npm run generate:icons` to generate a new IconSymbols file.
4. Add the new icon to the ICON Enum in `src/components/icon/constants.js`.

### Adding a new design token
Design tokens make up the core of our design system. They are shipped in several formats (including JSON, JS, CSS Custom Variables, and SCSS Variables). The source files are in `config/design-tokens`.

To add a new design token:

1. Add the token name and value to the appropriate file in `config/design-tokens`.
2. Then run `npm run generate:tokens`.


### Releasing a new version of `@kalo/ui` (NPM package).
1. Ensure you have been added to the `@kalo` NPM team.
2. On the master branch, run `npm run release`. This will bump the version, run the tests, and publish to NPM.


### Run the docs locally
The documentation site (kalo.design) are built using GatsbyJS and live in `site/`.

To run the docs locally:
1. `cd site` to change in to the site directory
2. `npm install` (you will also need to `npm install` in the root UI directory).
3. `npm run start`
4. And you should be up and running at [localhost:8000](http://localhost:8000)