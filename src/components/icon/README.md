# Icon

Our icons are a mix of Material icons, and custom designed ones. This React allows for a single instance of an Icon to be added, by passing the icon name as a child.

## Best practices

- Use icons sparingly. They should be used to provide extra context to an existing text label.

## Usage

*See below for more detailed examples*

```javascript
import {Icon} from '@kalo/ui';

<Icon
  size={24}
  color="navy600"
>
  person_outline
</Icon>
```

## IconSymbols
As mentioned above, our icons make use of SVG symbols (def and use). In order to get the icon symbols on to the page, a second component will need to be included somewhere in your application.

Note, that the IconSymbols component only needs to be included **once** on the page.

For example:

```javascript
import {Icon, IconSymbols} from '@kalo/ui'

<Icon>more_vert</Icon>
<IconSymbols />
```