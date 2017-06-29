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
- `blue`
- `dark-blue`
- `dark-grey`
- `green`
- `grey`
- `light-grey`
- `navy`
- `none`
- `orange`
- `red`
- `white`

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
