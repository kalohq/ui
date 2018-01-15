# Radio

Radio buttons are most commonly used in groups, to allow a user to pick one of several grouped options. For example, selecting whether a template field is shared or private

## Best practices

- When changing a setting, radio buttons should always be accompanied with a label.
- Labels should be descriptive enough, that they can stand up on their own.

## Usage

```javascript
import {Radio} from '@kalo/ui';

<Radio
  label="Enable email notifications"
  checked={true}
  onClick={myClickFunction}
/>
```