import {some} from 'lodash';
import {mount as enzymeMount, shallow as enzymeShallow} from 'enzyme';
import {channel, createBroadcast} from 'emotion-theming';
import PropTypes from 'prop-types';

import theme from '../../components/theme';

// Create a new context broadcast with our theme
const BROADCAST = createBroadcast({theme, user: {}});

export function match(wrapper, value, component) {
  return some(
    wrapper.find(component).map(
      text =>
        text
          .debug()
          .replace(/\n\s{2}/g, '')
          .replace(/\n/g, '')
          .search(value) > -1
    )
  );
}

/**
 * Unit tests should use the 'mount' and 'shallow' functions exported
 * below, as these are enhanced with our theme via Emotion context.
 *
 * Using the default mount/shallow from Enzyme along with Emotion
 * components, may result in broken tests (undefined props.theme).
 */

export function mount(component, options = {}) {
  return enzymeMount(component, {
    context: {
      [channel]: {
        subscribe: BROADCAST.subscribe,
        unsubscribe: BROADCAST.unsubscribe,
      },
      ...options.context,
    },
    childContextTypes: {
      [channel]: PropTypes.object,
    },
  });
}

export function shallow(component, options = {}) {
  return enzymeShallow(component, {
    context: {
      [channel]: {
        subscribe: BROADCAST.subscribe,
        unsubscribe: BROADCAST.unsubscribe,
      },
      ...options.context,
    },
    childContextTypes: {
      [channel]: PropTypes.object,
    },
  });
}
