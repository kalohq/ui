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
    <td><strong>red</strong></td>
    <td><code>var(--color-brand-red)</code></td>
    <td>#ea5f6e</td>
  </tr>
  <tr>
    <td>dark-red</td>
    <td><code>var(--color-brand-red-darker)</code></td>
    <td>#bf3e4c</td>
  </tr>
  <tr>
    <td>light-red</td>
    <td><code>var(--color-brand-red-lighter)</code></td>
    <td>#fbdfe2</td>
  </tr>
  <tr>
    <td><strong>blue</strong></td>
    <td><code>var(--color-brand-blue)</code></td>
    <td>#029dd8</td>
  </tr>
  <tr>
    <td>dark-blue</td>
    <td><code>var(--color-brand-blue-darker)</code></td>
    <td>#0078a6</td>
  </tr>
  <tr>
    <td>light-blue</td>
    <td><code>var(--color-brand-blue-lighter)</code></td>
    <td>#ccebf7</td>
  </tr>
  <tr>
    <td><strong>orange</strong></td>
    <td><code>var(--color-brand-orange)</code></td>
    <td>#fdb81c</td>
  </tr>
  <tr>
    <td>dark-orange</td>
    <td><code>var(--color-brand-orange-darker)</code></td>
    <td>#da9c32</td>
  </tr>
  <tr>
    <td>light-orange</td>
    <td><code>var(--color-brand-orange-lighter)</code></td>
    <td>#fff1d2</td>
  </tr>
  <tr>
    <td><strong>green</strong></td>
    <td><code>var(--color-brand-green)</code></td>
    <td>#3eb38a</td>
  </tr>
  <tr>
    <td>dark-green</td>
    <td><code>var(--color-brand-green-darker)</code></td>
    <td>#298665</td>
  </tr>
  <tr>
    <td>light-green</td>
    <td><code>var(--color-brand-green-lighter)</code></td>
    <td>#d8f0e8</td>
  </tr>
  <tr>
    <td><strong>purple</strong></td>
    <td><code>var(--color-brand-purple)</code></td>
    <td>#8a70bd</td>
  </tr>
  <tr>
    <td>dark-purple</td>
    <td><code>var(--color-brand--purple-darker)</code></td>
    <td>#604e83</td>
  </tr>
  <tr>
    <td>light-purple</td>
    <td><code>var(--color-brand--purple-lighter)</code></td>
    <td>#e8e2f2</td>
  </tr>
  <tr>
    <td rowspan="5">Neutral Colors</td>
    <td>snow</td>
    <td><code>var(--color-grey-snow)</code></td>
    <td>#f9fafc</td>
  </tr>
  <tr>
    <td>platinum</td>
    <td><code>var(--color-grey-platinum)</code></td>
    <td>#eceff1</td>
  </tr>
  <tr>
    <td>silver</td>
    <td><code>var(--color-grey-silver)</code></td>
    <td>#b0bec5</td>
  </tr>
  <tr>
    <td>slate</td>
    <td><code>var(--color-grey-slate)</code></td>
    <td>#547b89</td>
  </tr>
  <tr>
    <td>charcoal</td>
    <td><code>var(--color-grey-charcoal)</code></td>
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
