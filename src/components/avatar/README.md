# Avatar

This component displays a visual representation of a user, either an image or their initials. This component is purely functional. It is used in conjunction with a similar component in the frontend repo, which implements the Gravatar/Resource fetching logic.

## Best practices
- Only display a 'listed' badge if it's contextually relevant.
- Only pass in a name as the record. The initial are generated from this. For example, passing in the email '92kool@test.com', would result in an initial of `9`.

## Props

| Prop | Type | Description |
| ---- |------|------------ |
| `record` | string | A display name to set as the initials as a fallback should an image not be provided
| `src` | string | A link to an image to be displayed
| `style` | Object |
| `size` |  | The size of the avatar
| `editable` | boolean | Displays an edit icon, and adds interactive styling.
| `subRecord` | string | Display name for a nested avatar (see also `record`)
| `subSrc` | string | Image link for a nested avatar (See also `src`)
| `badge` | string | Icon value to display in a nested badge
| `badgeTitle` | string | To add a title to the badge on hover

## Usage

*See storybook for more detailed examples*

```javascript
import {Avatar} from '@kalo/ui';

<Avatar
  record="Leon Vynehall"
  src="https://kalohq.com/path/to/user/avatar.jpg"
  size="large"
/>
```
