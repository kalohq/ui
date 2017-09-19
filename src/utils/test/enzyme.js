import {some} from 'lodash';

import Text from 'components/text';

export function match(wrapper, value, component) {
  return some(
    wrapper.find(component).map(text => text.html().search(value) > -1)
  );
}

export function textMatch(wrapper, value) {
  return match(wrapper, value, Text);
}
