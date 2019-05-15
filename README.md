<h1 align="center">Kalo UI</h1>
<p align="center">Design system for building user interfaces at Kalo.</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/@kalo/ui.svg">
  <a href="https://codecov.io/gh/kalohq/ui">
    <img src="https://codecov.io/gh/kalohq/ui/branch/master/graph/badge.svg?token=UMKMabKV8s">
  </a>
</p>

---

**Welcome to Kalo UI.**

This repo contains the source code for the design system, as well as the source for the documentation site that powers [kalo.design](http://kalo.design) The purpose of Kalo UI is to provide a UI kit of components to be used across all Kalo products, regardless of the technologies they are implememnted with. It should be our equivalent to Material, containing components, icons, design tokens and other tools required on Kalo products.

## Getting started

The documentation site (kalo.design) are built using GatsbyJS and live in `site/`.

To run the docs locally:

1. `npm install` in the root of UI
1. `cd site` - this is where the docs live.
1. `npm install` (you will also need to `npm install` in the root UI directory).
1. `npm run start`
1. And you should be up and running at [localhost:8000](http://localhost:8000)

## Documentation

For full documentation on how to use @kalo/ui, please refer to the documentation site: [KDS Documentation](http://kalo.design)

- Common workflows
  - [Adding a new icon](#adding-a-new-icon)
  - [Adding a new design token](#adding-a-new-design-token)
- [Releasing](#releasing)

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

## Releasing

1. **Ensure you have been added to the `@kalo` NPM team.**

   If you're not sure, you can ask in #frontend-cohort.

2. **Once your changes have been merged in to master, checkout master and pull the latest.**
3. **Run `npm run release`.**

   This will open an interactive cli, which will let you select the type of version that you're releasing.

   Here's a rough guidance to the types of version:

   - `patch` - Isolated bug fixes.
   - `minor` - An internal backwards-compatible change
   - `major` - A breaking change has been introduced.

4. Your change has been published 🎉. Remember to let the rest of the team know!
