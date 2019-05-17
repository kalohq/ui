# Layout

The layout components are the primitive building blocks of the Kalo User Interface.

## Box and Flex

A wrapper component that implements some default flex values.

## Inline

An `inline-block` element.

## Spacing

Margin and padding can be set via the `margin` and `padding` props. The re are also more granular props for specifying particular directions: `marginLeft`, `paddingTop` etc.

These props can take a variety of values:

- Value specific values: `padding="20px"`
- Or scale values: `margin="medium"`

The scale values relate to a multiple of 8px:

```js
marginLeft = 'extra-small'; // margin-left: 2px
marginLeft = 'small'; // margin-left: 4px
marginLeft = 'medium'; // margin-left: 8px
marginLeft = 'large'; // margin-left: 16px
marginLeft = 'extra-large'; // margin-left: 24px
```

These can also be mixed with pixel specific values:

```js
padding={[20, "large", "medium", 38]}
```
