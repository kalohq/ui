# Layout

The layout components are the primitive building blocks of the Kalo User Interface.

## Box and Flex
A wrapper component that implements some default flex values.

## Inline
An `inline-block` element.

## Spacing
Margin and padding can be set via the `margin` and `padding` props. There are also more granular props for specifying particular directions: `marginLeft`, `paddingTop` etc.

These props can take a variety of values:
- Value specific values: `padding="20px"`
- Or scale values: `margin="medium"`

The scale values relate to the 8px grid. Any value between 1 and 8, correlates to a mutiple of 8px:

```js
marginLeft="extra-small" // margin-left: 4px
marginLeft="small" // margin-left: 8px
marginLeft="medium" // margin-left: 16px
marginLeft="large" // margin-left: 24px
```

These can also be mixed with pixel specific values:

```js
padding={[20, "large", "medium", 32]}
```

## The css and style props
The `css` prop is inherited from [Emotion](https://github.com/emotion-js/emotion) and is available on every component. Styles passed in through this prop, will be set via a classname generated at run-time.

The `style` prop is used to add styles to an element inline via the style attribute. This should be used for regulary computed styles as it is considerably more performant.
