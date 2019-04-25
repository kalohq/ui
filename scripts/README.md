# Scripts

## icons.js

This script is used to generate the react `IconSymbols` component, which contains all of the icons in `src/icons/svg/` as svg symbols.

It also transforms some of the attributes in to JSX friendly format. For example:

```html
<svg fill-opacity="1" fill-rule="nonzero" />
```

..becomes..

```html
<svg fillOpacity="1" fillRule="nonzero" />
```

## tokens.js

A light wrapper around [theo](https://github.com/salesforce-ux/theo) to transform our design tokens in to the various formats that we require.

There are also a few custom transform formats (in `custom-token-format`) that transform the tokens in to a theme, and generate some css classes.

### Adding a new design token

1. Select one of the existing categories in `./config/design-tokens/`. If none of these categories fit for your new tokens, see the section below for how to create a new category.

2. Add the new token using this format. For example, to add a new color:

```yml
MARINE_BLUE_500:
  value: '#1e3f5a'
```

3. To generate your tokens in to the appropriate formats run `npm run generate:tokens`.

### Adding a new design token category

1. Create a new file: `./config/design-tokens/my-new-category.yml` with your new tokens:

```yml
global:
  type: 'color'
  category: 'myNewCategory'
props:
  MY_NEW_VALUE_ONE:
    value: '#aaa'
```

2. Import your new file in to the main `tokens.yml` file

3. To generate your tokens in to the appropriate formats run `npm run generate:tokens`.
