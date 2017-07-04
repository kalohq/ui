# Writing components

## Naming Props
As developers, we shouldn't need to second guess a prop name. Pick something that's either already being used, or use the table below as a guide:

| PropName | Usage |
| ------------- |-------------|
| `color` | To set the text color (or fill in the case of SVG) of an element |
| `theme` | An overall style. A theme should only pass aesthetic value |
| `onClick` | To pass an onClick function to a component |

### Color

For color values, try not to deviate from the following list:

<table>
  <tr>
    <th></th>
    <th>Color</th>
    <th>CSS Variable</th>
    <th>Hex</th>
  </tr>
  <tr>
    <td rowspan="15">Brand Colors</td>
    <td>**red**</td>
    <td>`var(--color-brand-red)`</td>
    <td>#ea5f6e</td>
  </tr>
  <tr>
    <td>dark-red</td>
    <td>`var(--color-brand-red-darker)`</td>
    <td>#bf3e4c</td>
  </tr>
  <tr>
    <td>light-red</td>
    <td>`var(--color-brand-red-lighter)`</td>
    <td>#fbdfe2</td>
  </tr>
  <tr>
    <td>**blue**</td>
    <td>`var(--color-brand-blue)`</td>
    <td>#029dd8</td>
  </tr>
  <tr>
    <td>dark-blue</td>
    <td>`var(--color-brand-blue-darker)`</td>
    <td>#0078a6</td>
  </tr>
  <tr>
    <td>light-blue</td>
    <td>`var(--color-brand-blue-lighter)`</td>
    <td>#ccebf7</td>
  </tr>
  <tr>
    <td>**orange**</td>
    <td>`var(--color-brand-orange)`</td>
    <td>#fdb81c</td>
  </tr>
  <tr>
    <td>dark-orange</td>
    <td>`var(--color-brand-orange-darker)`</td>
    <td>#da9c32</td>
  </tr>
  <tr>
    <td>light-orange</td>
    <td>`var(--color-brand-orange-lighter)`</td>
    <td>#fff1d2</td>
  </tr>
  <tr>
    <td>**green**</td>
    <td>`var(--color-brand-green)`</td>
    <td>#3eb38a</td>
  </tr>
  <tr>
    <td>dark-green</td>
    <td>`var(--color-brand-green-darker)`</td>
    <td>#298665</td>
  </tr>
  <tr>
    <td>light-green</td>
    <td>`var(--color-brand-green-lighter)`</td>
    <td>#d8f0e8</td>
  </tr>
  <tr>
    <td>**purple**</td>
    <td>`var(--color-brand-purple)`</td>
    <td>#8a70bd</td>
  </tr>
  <tr>
    <td>dark-purple</td>
    <td>`var(--color-brand--purple-darker)`</td>
    <td>#604e83</td>
  </tr>
  <tr>
    <td>light-purple</td>
    <td>`var(--color-brand--purple-lighter)`</td>
    <td>#e8e2f2</td>
  </tr>
  <tr>
    <td rowspan="5">Neutral Colors</td>
    <td>snow</td>
    <td>`var(--color-grey-snow)`</td>
    <td>#f9fafc</td>
  </tr>
  <tr>
    <td>platinum</td>
    <td>`var(--color-grey-platinum)`</td>
    <td>#eceff1</td>
  </tr>
  <tr>
    <td>silver</td>
    <td>`var(--color-grey-silver)`</td>
    <td>#b0bec5</td>
  </tr>
  <tr>
    <td>slate</td>
    <td>`var(--color-grey-slate)`</td>
    <td>#547b89</td>
  </tr>
  <tr>
    <td>charcoal</td>
    <td>`var(--color-grey-charcoal)`</td>
    <td>#234957</td>
  </tr>
</table>

Components that let a user set a color prop, should use the above color naming convention. For example:

```javascript
<H1 color="charcoal">Hello World</H1>
<Icon color="dark-blue" />
```

### Size
Sizing scales should follow this scale, with `medium` being the default.

- `extra-extra-small`
- `extra-small`
- `small`
- `medium` <= scale should start here
- `large`
- `extra-large`
- `extra-extra-large`

Avoid using terms such as 'huge', or 'jumbo'.
