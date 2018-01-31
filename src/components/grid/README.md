# Grid

The grid system in UI is based on a 12 column grid.

There are three main grid components:
- Grid - an outer container that sets a max width, and horizontally centers the rest of the page
- Row - used for a single horizontal row of content. Row also manages spacing between child columns, and gutters to the left and right.
- Column - used for a single vertical column of content.

## Spacing
The spacing between columns is managed by the parent Row column. This enforces uniform spacing. One-off adjustments are inevitable, so as all of the grid components compose from either Box or Flex, `margin` and `padding` props are available. However where possible, we reccomend to make use of the `columns`, `gutter`, and `spacing` props.